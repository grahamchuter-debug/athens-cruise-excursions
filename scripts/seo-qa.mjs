#!/usr/bin/env node
/**
 * Static SEO QA for the exported site.
 *
 * Usage:  npm run build && npm run seo-qa
 *
 * Scans the ./out directory produced by `next build` (output: "export") and checks:
 *   - No public page carries a noindex robots directive
 *   - Every page has a self-referential canonical using the preferred HTTPS non-www host
 *   - No duplicate <title> tags across pages
 *   - Every page has Open Graph + Twitter card metadata
 *   - Every embedded JSON-LD block is valid JSON
 *   - sitemap.xml contains only canonical (HTTPS non-www) URLs
 *   - robots.txt exists and does not globally disallow crawling
 */

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const OUT_DIR = resolve(process.cwd(), "out");
const PREFERRED_HOST = "https://athenscruiseexcursions.com";

if (!existsSync(OUT_DIR)) {
  console.error("No 'out' directory found. Run `npm run build` first.");
  process.exit(1);
}

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else if (entry.endsWith(".html")) files.push(full);
  }
  return files;
}

const problems = [];
const warnings = [];
const titles = new Map();
const canonicalSet = new Set();

// Pages that are intentionally non-indexable (the 404 / not-found route).
const INTENTIONAL_NOINDEX = [/^\/404(\.html)?\/?$/i, /^\/_not-found\/?$/i];
const isIntentionalNoindex = (rel) =>
  INTENTIONAL_NOINDEX.some((re) => re.test(rel));

const htmlFiles = walk(OUT_DIR);

for (const file of htmlFiles) {
  const rel = file.replace(OUT_DIR, "").replace(/index\.html$/, "") || "/";
  const html = readFileSync(file, "utf8");

  // The 404 route is meant to be noindex — skip indexability checks for it.
  if (isIntentionalNoindex(rel)) {
    console.log(`Intentional non-indexable page (skipped): ${rel}`);
    continue;
  }

  // noindex
  const robotsMeta = html.match(
    /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i,
  );
  if (robotsMeta && /noindex/i.test(robotsMeta[1])) {
    problems.push(`unexpected noindex found on ${rel}`);
  }

  // canonical
  const canonical = html.match(
    /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i,
  );
  if (!canonical) {
    problems.push(`missing canonical on ${rel}`);
  } else {
    const href = canonical[1];
    if (!href.startsWith(PREFERRED_HOST)) {
      problems.push(`non-preferred canonical host on ${rel}: ${href}`);
    }
    if (/:\/\/www\./i.test(href)) {
      problems.push(`www canonical on ${rel}: ${href}`);
    }
    if (href.startsWith("http://")) {
      problems.push(`http (non-https) canonical on ${rel}: ${href}`);
    }
    canonicalSet.add(href);
  }

  // title + duplicates
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  if (!title) {
    problems.push(`missing <title> on ${rel}`);
  } else {
    if (!titles.has(title)) titles.set(title, []);
    titles.get(title).push(rel);
  }

  // Open Graph + Twitter
  if (!/property=["']og:title["']/i.test(html)) {
    warnings.push(`missing og:title on ${rel}`);
  }
  if (!/name=["']twitter:card["']/i.test(html)) {
    warnings.push(`missing twitter:card on ${rel}`);
  }

  // JSON-LD validity
  const ldRe =
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = ldRe.exec(html)) !== null) {
    try {
      JSON.parse(m[1]);
    } catch {
      problems.push(`invalid JSON-LD on ${rel}`);
    }
  }
}

// duplicate titles
for (const [title, pages] of titles) {
  if (pages.length > 1) {
    problems.push(
      `duplicate title "${title}" on: ${pages.join(", ")}`,
    );
  }
}

// sitemap
const sitemapPath = join(OUT_DIR, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  problems.push("sitemap.xml is missing");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((x) => x[1]);
  if (locs.length === 0) problems.push("sitemap.xml contains no URLs");
  for (const loc of locs) {
    if (!loc.startsWith(PREFERRED_HOST)) {
      problems.push(`sitemap non-canonical URL: ${loc}`);
    }
    if (/:\/\/www\./i.test(loc) || loc.startsWith("http://")) {
      problems.push(`sitemap non-preferred URL: ${loc}`);
    }
    if (!canonicalSet.has(loc)) {
      problems.push(`sitemap URL does not match any page canonical: ${loc}`);
    }
  }
  console.log(`Sitemap: ${locs.length} canonical URLs.`);
}

// robots.txt
const robotsPath = join(OUT_DIR, "robots.txt");
if (!existsSync(robotsPath)) {
  problems.push("robots.txt is missing");
} else {
  const robots = readFileSync(robotsPath, "utf8");
  if (/Disallow:\s*\/\s*$/im.test(robots)) {
    problems.push("robots.txt globally disallows crawling (Disallow: /)");
  }
  if (!/sitemap:/i.test(robots)) {
    warnings.push("robots.txt does not reference the sitemap");
  }
}

console.log(`Scanned ${htmlFiles.length} HTML pages, ${titles.size} unique titles.`);

if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  - ${w}`);
}

if (problems.length) {
  console.error(`\n✗ ${problems.length} SEO problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log("\n✓ SEO QA passed: no blocking issues found.");
