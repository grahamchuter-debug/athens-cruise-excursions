import Link from "next/link";
import { PLANNER_PATH, PORT_GUIDE_PATH, SCHEDULE_PATH } from "@/lib/navigation";

type GuideRelatedLinksProps = {
  guides?: { label: string; href: string }[];
  excursions?: { label: string; href: string }[];
};

export function GuideRelatedLinks({
  guides = [],
  excursions = [],
}: GuideRelatedLinksProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-semibold text-slate-900">Plan your port day</h2>
      <ul className="mt-4 space-y-2 text-sm">
        <li>
          <Link href={PORT_GUIDE_PATH} className="font-medium text-blue-800 hover:underline">
            Piraeus cruise port guide
          </Link>
          <span className="text-slate-600"> — where ships dock, transfers to Athens, metro, taxis</span>
        </li>
        <li>
          <Link href={PLANNER_PATH} className="font-medium text-blue-800 hover:underline">
            Athens cruise planner
          </Link>
          <span className="text-slate-600"> — match excursions to your hours ashore</span>
        </li>
        <li>
          <Link href={SCHEDULE_PATH} className="font-medium text-blue-800 hover:underline">
            Cruise ship schedules
          </Link>
          <span className="text-slate-600"> — see which ships are in port</span>
        </li>
        {guides.map((g) => (
          <li key={g.href}>
            <Link href={g.href} className="font-medium text-blue-800 hover:underline">
              {g.label}
            </Link>
          </li>
        ))}
        {excursions.map((e) => (
          <li key={e.href}>
            <Link href={e.href} className="font-medium text-blue-800 hover:underline">
              {e.label}
            </Link>
            <span className="text-slate-600"> — enquire about this tour</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
