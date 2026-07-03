import Link from "next/link";
import { excursions, getRelatedExcursions } from "@/lib/excursions";

export function ExcursionLinks({
  slugs,
  title = "Related excursions",
}: {
  slugs?: string[];
  title?: string;
}) {
  const items = slugs
    ? slugs
        .map((slug) => excursions.find((e) => e.slug === slug))
        .filter((e): e is (typeof excursions)[number] => e !== undefined)
    : excursions.slice(0, 4);

  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((excursion) => (
          <li key={excursion.slug}>
            <Link
              href={excursion.path}
              className="text-blue-800 hover:text-blue-950 font-medium"
            >
              {excursion.shortTitle}
            </Link>
            <p className="text-sm text-slate-600">{excursion.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RelatedExcursionLinks({ slug }: { slug: string }) {
  const related = getRelatedExcursions(slug);
  if (related.length === 0) return null;
  return (
    <ExcursionLinks
      slugs={related.map((e) => e.slug)}
      title="You may also like"
    />
  );
}
