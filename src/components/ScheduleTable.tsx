import type { ScheduleEntry } from "@/data/types";

export function ScheduleTable({
  entries,
  highlightedDate,
}: {
  entries: ScheduleEntry[];
  highlightedDate?: string;
}) {
  if (entries.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
        <p className="font-medium text-slate-700">
          Schedule data is being updated for this period.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Confirm arrival and departure times with your cruise line before
          booking excursions.
        </p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Ship</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Cruise Line</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Arrival</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Departure</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Time in Port</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {entries.map((entry, i) => (
            <tr
              key={`${entry.date}-${entry.ship}-${i}`}
              className={
                highlightedDate && entry.date === highlightedDate
                  ? "bg-blue-50"
                  : undefined
              }
            >
              <td className="px-4 py-3 text-sm whitespace-nowrap text-slate-700">
                {entry.date}
              </td>
              <td className="px-4 py-3 text-sm font-medium text-slate-900">
                {entry.ship}
              </td>
              <td className="px-4 py-3 text-sm text-slate-600">{entry.cruiseLine}</td>
              <td className="px-4 py-3 text-sm text-slate-600">{entry.arrival || "—"}</td>
              <td className="px-4 py-3 text-sm text-slate-600">{entry.departure || "—"}</td>
              <td className="px-4 py-3 text-sm text-slate-600">{entry.timeInPort ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
