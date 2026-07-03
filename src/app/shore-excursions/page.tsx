import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExcursionCard } from "@/components/ExcursionCard";
import { JsonLd } from "@/components/JsonLd";
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/shore-excursions";

export const metadata: Metadata = pageMetadata({
  title: "Athens Shore Excursions from Piraeus Cruise Port — Browse All",
  description:
    "Browse independent Athens shore excursions for cruise passengers docking at Piraeus — the Acropolis and Parthenon, the Acropolis Museum, Plaka, Cape Sounion, Ancient Corinth and Delphi, each rated for return-to-ship timing.",
  path,
});

export default function ShoreExcursionsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Shore Excursions" },
  ];
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Athens Shore Excursions from Piraeus Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold text-slate-900">
          Athens shore excursions from Piraeus Cruise Port
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          Independent excursion guides for cruise passengers docking at Piraeus,
          the gateway to Athens. Every listing includes return-to-ship guidance,
          honest timing that accounts for the transfer into the city, and
          enquiry-based booking — no online checkout yet.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excursions.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-600">
          Not sure what fits your call? See the{" "}
          <Link href="/piraeus-cruise-port-guide" className="text-blue-800 hover:underline">
            Piraeus cruise port guide
          </Link>{" "}
          and the{" "}
          <Link href="/athens-cruise-planner" className="text-blue-800 hover:underline">
            Athens cruise planner
          </Link>
          .
        </p>
      </div>
    </>
  );
}
