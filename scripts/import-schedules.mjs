#!/usr/bin/env node
/**
 * Import Piraeus (Athens) cruise ship schedules from CSV into the site's JSON data file.
 *
 * Usage:  node scripts/import-schedules.mjs
 *
 * Source:  data/schedule-sources/athens.csv
 * Output:  src/data/imported-schedules/athens.json
 *
 * CSV columns: date,ship,cruiseLine,arrival,departure,passengers,notes
 *   - date      ISO format YYYY-MM-DD (required)
 *   - arrival   HH:MM 24h (optional)
 *   - departure HH:MM 24h (optional)
 * timeInPort is derived automatically from arrival + departure.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SOURCE = resolve(ROOT, "data/schedule-sources/athens.csv");
const OUTPUT = resolve(ROOT, "src/data/imported-schedules/athens.json");

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current);
  return values.map((v) => v.trim());
}

function computeTimeInPort(arrival, departure) {
  if (!arrival || !departure) return undefined;
  const [ah, am] = arrival.split(":").map(Number);
  const [dh, dm] = departure.split(":").map(Number);
  if ([ah, am, dh, dm].some((n) => Number.isNaN(n))) return undefined;
  let minutes = dh * 60 + dm - (ah * 60 + am);
  if (minutes < 0) minutes += 24 * 60; // overnight
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}

function main() {
  if (!existsSync(SOURCE)) {
    console.error(`Source CSV not found: ${SOURCE}`);
    process.exit(1);
  }

  const raw = readFileSync(SOURCE, "utf8").trim();
  const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const header = parseCsvLine(lines[0]).map((h) => h.toLowerCase());

  const idx = (name) => header.indexOf(name);
  const iDate = idx("date");
  const iShip = idx("ship");
  const iLine = idx("cruiseline");
  const iArr = idx("arrival");
  const iDep = idx("departure");
  const iPax = idx("passengers");
  const iNotes = idx("notes");

  const entries = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i]);
    const date = cells[iDate];
    const ship = cells[iShip];
    if (!date || !ship) continue;

    const arrival = iArr >= 0 ? cells[iArr] : "";
    const departure = iDep >= 0 ? cells[iDep] : "";

    const entry = {
      date,
      ship,
      cruiseLine: iLine >= 0 ? cells[iLine] : "",
      arrival,
      departure,
    };
    const timeInPort = computeTimeInPort(arrival, departure);
    if (timeInPort) entry.timeInPort = timeInPort;
    if (iPax >= 0 && cells[iPax]) entry.passengers = cells[iPax];
    if (iNotes >= 0 && cells[iNotes]) entry.notes = cells[iNotes];

    entries.push(entry);
  }

  entries.sort((a, b) => a.date.localeCompare(b.date));

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, JSON.stringify(entries, null, 2) + "\n");

  console.log(`Imported ${entries.length} schedule entries -> ${OUTPUT}`);
}

main();
