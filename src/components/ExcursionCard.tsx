import Image from "next/image";
import Link from "next/link";
import type { Excursion } from "@/lib/excursions";

export function ExcursionCard({ excursion }: { excursion: Excursion }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {excursion.heroImage && (
        <Link href={excursion.path} className="relative block aspect-[3/2] overflow-hidden">
          <Image
            src={excursion.heroImage}
            alt={excursion.heroImageAlt ?? excursion.shortTitle}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
          />
        </Link>
      )}
      <div className="flex flex-1 flex-col p-6">
      <h3 className="text-lg font-semibold text-slate-900">
        <Link href={excursion.path} className="hover:text-blue-800">
          {excursion.shortTitle}
        </Link>
      </h3>
      <p className="mt-2 flex-grow text-sm text-slate-600">{excursion.summary}</p>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-500">
        <div>
          <dt className="font-medium text-slate-700">Duration</dt>
          <dd>{excursion.duration}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-700">Fitness</dt>
          <dd>{excursion.fitness}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-700">Transfer</dt>
          <dd>{excursion.transferRequired ? "Required" : "Often not needed"}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-700">Return confidence</dt>
          <dd>{excursion.returnConfidence}</dd>
        </div>
      </dl>
      <Link
        href={excursion.path}
        className="mt-4 text-sm font-semibold text-blue-800 hover:text-blue-950"
      >
        View details →
      </Link>
      </div>
    </article>
  );
}
