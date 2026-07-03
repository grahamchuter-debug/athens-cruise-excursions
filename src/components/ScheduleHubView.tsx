"use client";

import { useState } from "react";
import Link from "next/link";
import { ScheduleTable } from "@/components/ScheduleTable";
import {
  filterEntriesByMonth,
  formatMonthLabel,
  getMonthsWithEntries,
  getScheduleEntries,
  hasVerifiedScheduleData,
  monthPath,
  SCHEDULE_YEARS,
  yearPath,
} from "@/lib/schedule";

export function ScheduleHubView() {
  const entries = getScheduleEntries();
  const hasData = hasVerifiedScheduleData();
  const monthKeys = getMonthsWithEntries(entries);
  const [shipQuery, setShipQuery] = useState("");
  const [lineQuery, setLineQuery] = useState("");

  const shipResults = shipQuery
    ? entries.filter((e) => e.ship.toLowerCase().includes(shipQuery.toLowerCase()))
    : [];
  const lineResults = lineQuery
    ? entries.filter((e) =>
        e.cruiseLine.toLowerCase().includes(lineQuery.toLowerCase()),
      )
    : [];

  return (
    <>
      {!hasData && (
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <p className="font-medium text-amber-950">Schedule data coming soon</p>
          <p className="mt-2 text-sm text-amber-900">
            Verified ship calls for Piraeus are being imported. Confirm times
            with your cruise line and explore our{" "}
            <Link href="/piraeus-cruise-port-guide" className="font-medium underline">
              port guide
            </Link>{" "}
            for excursion planning.
          </p>
        </div>
      )}

      <section className="mb-12 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Search by ship name
          </label>
          <input
            type="search"
            value={shipQuery}
            onChange={(e) => setShipQuery(e.target.value)}
            placeholder="e.g. Celestyal Journey"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm"
          />
          {shipResults.length > 0 && (
            <div className="mt-4">
              <ScheduleTable entries={shipResults} />
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Search by cruise line
          </label>
          <input
            type="search"
            value={lineQuery}
            onChange={(e) => setLineQuery(e.target.value)}
            placeholder="e.g. MSC"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm"
          />
          {lineResults.length > 0 && (
            <div className="mt-4">
              <ScheduleTable entries={lineResults} />
            </div>
          )}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Schedule by year</h2>
        <div className="flex flex-wrap gap-3">
          {SCHEDULE_YEARS.map((year) => (
            <Link
              key={year}
              href={yearPath(year)}
              className="rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
            >
              {year} Schedule
            </Link>
          ))}
        </div>
      </section>

      {monthKeys.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Port calendar — month view
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {monthKeys.map((monthKey) => (
              <Link
                key={monthKey}
                href={monthPath(monthKey)}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-800"
              >
                {formatMonthLabel(monthKey)}
              </Link>
            ))}
          </div>
          <div className="grid gap-6">
            {monthKeys.map((monthKey) => {
              const monthEntries = filterEntriesByMonth(monthKey);
              return (
                <div key={monthKey}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-semibold text-slate-900">
                      {formatMonthLabel(monthKey)} ({monthEntries.length} calls)
                    </h3>
                    <Link
                      href={monthPath(monthKey)}
                      className="text-sm font-medium text-blue-800 hover:underline"
                    >
                      Full month view
                    </Link>
                  </div>
                  <ScheduleTable entries={monthEntries.slice(0, 5)} />
                  {monthEntries.length > 5 && (
                    <p className="mt-2 text-xs text-slate-500">
                      Showing 5 of {monthEntries.length} —{" "}
                      <Link href={monthPath(monthKey)} className="text-blue-800 hover:underline">
                        view all
                      </Link>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
