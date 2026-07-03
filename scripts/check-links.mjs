import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const OUT_DIR = resolve(process.cwd(), "out");

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

function hrefExists(pathname) {
  if (pathname === "/" || pathname === "") return true;
  const clean = pathname.replace(/\/$/, "");
  const candidates = [
    join(OUT_DIR, clean),
    join(OUT_DIR, `${clean}.html`),
    join(OUT_DIR, clean, "index.html"),
  ];
  return candidates.some((c) => existsSync(c));
}

const htmlFiles = walk(OUT_DIR);
const hrefRe = /href="([^"]+)"/g;
const broken = new Map();
let internalCount = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  let m;
  while ((m = hrefRe.exec(html)) !== null) {
    const href = m[1];
    if (!href.startsWith("/")) continue;
    if (href.startsWith("//")) continue;
    const pathname = href.split("#")[0].split("?")[0];
    if (/\.(xml|txt|jpg|jpeg|png|webp|svg|ico|css|js|json)$/i.test(pathname)) continue;
    internalCount++;
    if (!hrefExists(pathname)) {
      const rel = file.replace(OUT_DIR, "").replace(/index\.html$/, "") || "/";
      if (!broken.has(pathname)) broken.set(pathname, new Set());
      broken.get(pathname).add(rel);
    }
  }
}

console.log(`Scanned ${htmlFiles.length} pages, ${internalCount} internal links.`);

if (broken.size === 0) {
  console.log("✓ No broken internal links found.");
  process.exit(0);
}

console.error(`\n✗ Found ${broken.size} broken link target(s):`);
for (const [target, sources] of broken) {
  console.error(`  ${target}`);
  for (const s of sources) console.error(`     ← ${s}`);
}
process.exit(1);
