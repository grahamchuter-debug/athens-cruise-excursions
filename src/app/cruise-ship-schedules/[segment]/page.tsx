import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ScheduleTable } from "@/components/ScheduleTable";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  formatMonthLabel,
  getMonthsWithEntries,
  getVerifiedMonthKeys,
  isValidScheduleYear,
  monthKeyToSlug,
  monthPath,
  parseMonthKey,
  parseMonthSlug,
  parseScheduleYear,
  SCHEDULE_BASE_PATH,
  SCHEDULE_YEARS,
  yearPath,
} from "@/lib/schedule";

export function generateStaticParams() {
  const params: { segment: string }[] = [];
  for (const year of SCHEDULE_YEARS) {
    params.push({ segment: String(year) });
  }
  for (const monthKey of getVerifiedMonthKeys()) {
    params.push({ segment: monthKeyToSlug(monthKey) });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ segment: string }>;
}): Promise<Metadata> {
  const { segment } = await params;

  const year = parseScheduleYear(segment);
  if (year) {
    return pageMetadata({
      title: `Piraeus Cruise Ship Schedule ${year} (Athens)`,
      description: `Piraeus (Athens) cruise ship arrivals and departures for ${year}. Plan your Athens shore excursions around published port times.`,
      path: yearPath(year),
    });
  }

  const monthKey = parseMonthSlug(segment);
  if (monthKey) {
    const label = formatMonthLabel(monthKey);
    return pageMetadata({
      title: `Piraeus Cruise Ship Schedule — ${label}`,
      description: `Piraeus (Athens) cruise ship schedule for ${label} — arrival and departure times for port-day planning.`,
      path: monthPath(monthKey),
    });
  }

  return {};
}

export default async function ScheduleSegmentPage({
  params,
}: {
  params: Promise<{ segment: string }>;
}) {
  const { segment } = await params;
  const year = parseScheduleYear(segment);
  const monthKey = parseMonthSlug(segment);
  if (!year && !monthKey) notFound();

  if (year) {
    const entries = filterEntriesByYear(year);
    const monthKeys = getMonthsWithEntries(entries);
    const breadcrumbs = [
      { name: "Home", href: "/" },
      { name: "Cruise Ship Schedules", href: SCHEDULE_BASE_PATH },
      { name: String(year) },
    ];

    return (
      <>
        <JsonLd
          data={[
            breadcrumbSchema(breadcrumbs),
            webPageSchema({
              title: `Piraeus Cruise Ship Schedule ${year}`,
              description: `Piraeus (Athens) cruise ship calls throughout ${year}.`,
              path: yearPath(year),
            }),
          ]}
        />
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Breadcrumbs items={breadcrumbs} />
          <PageHero
            eyebrow="Ship schedule"
            title={`Piraeus — ${year} cruise schedule`}
            subtitle={`Ship calls at Piraeus (the cruise port for Athens) throughout ${year}. Browse by month or view the full year below.`}
          />

          <div className="mt-10 space-y-8">
            {entries.length === 0 && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <p className="font-medium text-amber-950">Schedule data coming soon</p>
                <p className="mt-2 text-sm text-amber-900">
                  We are importing verified {year} ship calls for Piraeus. Check
                  back soon or confirm times with your cruise line before booking
                  excursions.
                </p>
              </div>
            )}

            {monthKeys.length > 0 && (
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">Browse by month</h2>
                <div className="flex flex-wrap gap-3">
                  {monthKeys.map((mk) => (
                    <Link
                      key={mk}
                      href={monthPath(mk)}
                      className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-800"
                    >
                      {formatMonthLabel(mk)}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                {year} schedule{entries.length > 0 ? ` (${entries.length} calls)` : ""}
              </h2>
              <ScheduleTable entries={entries} />
            </section>

            <div className="flex flex-wrap gap-3">
              <Link
                href={SCHEDULE_BASE_PATH}
                className="rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
              >
                Schedule hub
              </Link>
              {SCHEDULE_YEARS.filter((y) => y !== year).map((y) => (
                <Link
                  key={y}
                  href={yearPath(y)}
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-400"
                >
                  {y} schedule
                </Link>
              ))}
              <Link
                href="/piraeus-cruise-port-guide"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-400"
              >
                Port guide
              </Link>
            </div>

            <NeedHelpCTA />
          </div>
        </div>
      </>
    );
  }

  // Month view
  const key = monthKey as string;
  const entries = filterEntriesByMonth(key);
  const label = formatMonthLabel(key);
  const { year: monthYear } = parseMonthKey(key);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Cruise Ship Schedules", href: SCHEDULE_BASE_PATH },
    ...(isValidScheduleYear(monthYear)
      ? [{ name: String(monthYear), href: yearPath(monthYear) }]
      : []),
    { name: label },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: `Piraeus Cruise Ship Schedule — ${label}`,
            description: `Piraeus (Athens) cruise ship calls for ${label}.`,
            path: monthPath(key),
          }),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={breadcrumbs} />
        <PageHero
          eyebrow="Ship schedule"
          title={`Piraeus — ${label}`}
          subtitle={`Cruise ship calls at Piraeus for ${label}. Confirm all-aboard times with your cruise line before booking excursions.`}
        />

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Ship calls ({entries.length})
            </h2>
            <ScheduleTable entries={entries} />
          </section>

          <div className="flex flex-wrap gap-3">
            {isValidScheduleYear(monthYear) && (
              <Link
                href={yearPath(monthYear)}
                className="rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
              >
                {monthYear} overview
              </Link>
            )}
            <Link
              href={SCHEDULE_BASE_PATH}
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-400"
            >
              Schedule hub
            </Link>
            <Link
              href="/piraeus-cruise-port-guide"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-400"
            >
              Port guide
            </Link>
          </div>

          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
