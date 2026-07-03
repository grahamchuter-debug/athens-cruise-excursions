import Link from "next/link";
import type { Excursion } from "@/lib/excursions";
import { PORT_GUIDE_PATH } from "@/lib/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  CruisePassengerCallout,
  CruisePassengerSnapshot,
} from "@/components/CruisePassengerSnapshot";
import { RelatedExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";

export function ExcursionPageContent({ excursion }: { excursion: Excursion }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Shore Excursions", href: "/shore-excursions" },
          { name: excursion.shortTitle },
        ]}
      />
      <PageHero
        title={excursion.title}
        subtitle={excursion.summary}
        imageSrc={excursion.heroImage}
        imageAlt={excursion.heroImageAlt}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <CruisePassengerSnapshot
            fields={excursion.snapshotFields}
            intro={excursion.cruiseSnapshot}
          />

          {excursion.description.map((para, i) => (
            <p key={i} className="text-slate-700 leading-relaxed">
              {para}
            </p>
          ))}

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Highlights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {excursion.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Weather &amp; seasonal notes
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              {excursion.weatherConsiderations}
            </p>
          </section>

          <FAQSection faqs={excursion.faqs} />

          <RelatedExcursionLinks slug={excursion.slug} />
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">At a glance</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-slate-500">Duration</dt>
                <dd className="text-slate-900">{excursion.duration}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Fitness level</dt>
                <dd className="text-slate-900">{excursion.fitness}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Walking required</dt>
                <dd className="text-slate-900">
                  {excursion.fitness === "Easy"
                    ? "Light walking typical"
                    : excursion.fitness === "Moderate"
                      ? "Moderate walking, some uneven ground"
                      : "Extended or strenuous walking"}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">From cruise terminal</dt>
                <dd className="text-slate-900">{excursion.distanceFromTerminal}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Transfer / taxi</dt>
                <dd className="text-slate-900">
                  {excursion.transferRequired ? "Usually required" : "Often walkable"}
                </dd>
                <dd className="mt-1 text-slate-600">{excursion.transferNote}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Best for</dt>
                <dd className="mt-1">
                  <ul className="list-disc pl-4 text-slate-700">
                    {excursion.bestFor.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <Link
              href={`/enquire?excursion=${excursion.slug}`}
              className="mt-6 block w-full rounded-full bg-blue-800 py-3 text-center text-sm font-semibold text-white hover:bg-blue-900"
            >
              Enquire about this excursion
            </Link>
          </div>

          <ReturnToShipBlock
            confidence={excursion.returnConfidence}
            note={excursion.returnNote}
          />

          <CruisePassengerCallout>
            <p>{excursion.cruiseSnapshot}</p>
          </CruisePassengerCallout>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
            <p className="font-medium text-slate-900">Port planning</p>
            <p className="mt-2 text-slate-600">
              See our{" "}
              <Link href={PORT_GUIDE_PATH} className="text-blue-800 hover:underline">
                Piraeus cruise port guide
              </Link>{" "}
              for where ships dock, transfers into Athens, the metro, taxis, and local tips.
            </p>
          </div>
        </aside>
      </div>

      <div className="mt-12">
        <NeedHelpCTA excursion={excursion.slug} />
      </div>
    </div>
  );
}
