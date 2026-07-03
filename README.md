# Heraklion Shore Excursions

A premium cruise-port authority site for passengers visiting **Heraklion, Crete**. Built with
Next.js (App Router, static export) and Tailwind CSS, following the same structure, SEO standards
and UX as the wider shore-excursion network (benchmarked against the Canada and Caribbean builds).

- **Domain:** heraklionshoreexcursions.com
- **Brand:** Heraklion Shore Excursions

## Purpose

Help cruise passengers plan a confident day ashore in Heraklion — Knossos, the Archaeological
Museum, the Venetian old town, beaches, and independent excursions — with clear return-to-ship
guidance throughout.

## Getting started

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build      # outputs to ./out
```

## Cruise ship schedules

Ship schedule pages (year + month) are driven by CSV imports.

1. Edit `data/schedule-sources/heraklion.csv` (`date,ship,cruiseLine,arrival,departure,passengers,notes`).
2. Run `npm run import:schedules` to regenerate `src/data/imported-schedules/heraklion.json`.

Year pages (`/cruise-ship-schedules/2026`) and month pages (`/cruise-ship-schedules/may-2026`)
are generated automatically from the imported data.

## Deployment

Static export deploys to Cloudflare (`npm run pages:deploy`).
