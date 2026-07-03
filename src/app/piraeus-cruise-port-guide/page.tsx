import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { athensMonthGuide } from "@/lib/seasonality";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/piraeus-cruise-port-guide";

const faqs = [
  {
    question: "Where do cruise ships dock at Piraeus?",
    answer:
      "Cruise ships berth at the Piraeus cruise terminals on the western side of the port (around the Themistokleous / Miaouli quays), a short distance from the main ferry harbour. Larger ships use the dedicated cruise berths; a shuttle usually connects the pier to the port gate and the metro/tram area.",
  },
  {
    question: "How far is Athens from Piraeus Cruise Port?",
    answer:
      "Central Athens and the Acropolis are about 10–12 km from the cruise terminals — roughly 30–45 minutes by taxi or coach depending on traffic, or 40–55 minutes using the metro. Piraeus is the port; Athens is the destination.",
  },
  {
    question: "What is the best way to get from Piraeus to the Acropolis?",
    answer:
      "For independent travellers the metro is cheap and reliable, and taxis are quick if traffic is light. Many cruise passengers prefer an organised tour with skip-the-line entry and a guaranteed return to the ship. See our metro and taxi guides for details.",
  },
  {
    question: "What currency and language are used in Athens?",
    answer:
      "The currency is the euro (EUR) and the language is Greek, though English is very widely spoken in tourist areas. Cards are accepted almost everywhere; carry some cash for small tavernas, kiosks, and tips.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Piraeus Cruise Port Guide — Gateway to Athens",
  description:
    "Complete guide to Piraeus Cruise Port, the gateway to Athens — where ships dock, how far Athens and the Acropolis are, the metro, taxis, shuttles, currency, weather, and the best shore excursions.",
  path,
  image: HERO_IMAGES.port.src,
  imageAlt: HERO_IMAGES.port.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Piraeus Cruise Port Guide"
      schemaTitle="Piraeus Cruise Port Guide"
      description={metadata.description as string}
      eyebrow="Port guide · Gateway to Athens"
      h1="Piraeus cruise port guide"
      subtitle="Where ships dock at Piraeus, how to reach central Athens and the Acropolis, the metro and taxis, currency and weather, and how to plan shore excursions for your port day."
      heroImage={HERO_IMAGES.port.src}
      heroImageAlt={HERO_IMAGES.port.alt}
      snapshotIntro="Piraeus is the cruise gateway to Athens: your ship docks at the port, and the great sights — the Acropolis, the Acropolis Museum, Plaka — are 10–12 km inland. Central sights are reliable and reachable; day trips to Cape Sounion, Corinth and Delphi need a longer call. Know your berth and hours ashore before booking."
      returnConfidence="High"
      returnNote="Central Athens keeps an easy return margin on most calls. Long trips to Cape Sounion, Corinth or especially Delphi need larger buffers — always allow for the transfer back to Piraeus and use our cruise planner."
      faqs={faqs}
      relatedGuides={[
        { label: "Athens metro from Piraeus", href: "/athens-metro-from-piraeus" },
        { label: "Taxi guide from Piraeus", href: "/taxi-guide-from-piraeus-cruise-port" },
        { label: "Walking & transport from the port", href: "/walking-and-transport-from-piraeus-cruise-port" },
        { label: "One day in Athens", href: "/one-day-in-athens-from-a-cruise-ship" },
      ]}
      relatedExcursions={[
        { label: "Acropolis & Parthenon shore excursion", href: "/acropolis-parthenon-shore-excursion" },
        { label: "Athens full-day highlights", href: "/athens-full-day-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "Piraeus, the port gateway to Athens",
          body: (
            <>
              <p>
                Almost every cruise itinerary that lists &ldquo;Athens&rdquo;
                actually calls at <strong>Piraeus</strong>, the historic port city
                that has served Athens since antiquity. Piraeus is the largest
                passenger port in Europe and a major Mediterranean cruise hub, but
                the sights you have come to see — the Acropolis, the Parthenon, the
                Acropolis Museum and Plaka — are in central Athens, about 10–12 km
                inland. Understanding this distinction is the key to planning a
                successful port day.
              </p>
              <p>
                The good news: the transfer is short and the connections are
                excellent. With sensible planning you can be standing beneath the
                Parthenon within an hour of leaving the ship.
              </p>
            </>
          ),
        },
        {
          title: "Where ships dock",
          body: (
            <p>
              Cruise ships use the dedicated cruise terminals on the western side
              of Piraeus, separate from the busy inter-island ferry harbour.
              Depending on your berth, the walk to the port gate can be long, so
              most cruise lines run a shuttle to the terminal exit, near the metro
              and tram. From there you can reach the Acropolis by metro, taxi, or
              organised coach — see our{" "}
              <Link href="/walking-and-transport-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                walking &amp; transport guide
              </Link>{" "}
              for the layout.
            </p>
          ),
        },
        {
          title: "Getting from Piraeus to Athens and the Acropolis",
          body: (
            <>
              <p>
                You have three realistic options. The{" "}
                <Link href="/athens-metro-from-piraeus" className="text-blue-800 hover:underline">
                  Athens metro
                </Link>{" "}
                is cheap and beats traffic; the older Line 1 and the newer Line 3
                both connect Piraeus to the centre. A{" "}
                <Link href="/taxi-guide-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                  taxi
                </Link>{" "}
                is fastest when roads are clear (30–45 minutes) and convenient door
                to door. Or take an{" "}
                <Link href="/independent-vs-cruise-line-excursions" className="text-blue-800 hover:underline">
                  organised excursion
                </Link>{" "}
                with coach transfer, skip-the-line entry, and a guaranteed return.
              </p>
              <p>
                Whichever you choose, build in a comfortable buffer for the return
                journey — Athens traffic is unpredictable, especially in the
                afternoon.
              </p>
            </>
          ),
        },
        {
          title: "When to visit — Athens by month",
          body: (
            <>
              <p>
                The Athens cruise season runs from April to October and peaks in
                summer. Spring and autumn offer the most comfortable weather for
                the exposed Acropolis; July and August are very hot, so start early.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold">Month</th>
                      <th className="px-3 py-2 text-left font-semibold">Daytime</th>
                      <th className="px-3 py-2 text-left font-semibold">Sea</th>
                      <th className="px-3 py-2 text-left font-semibold">Cruise activity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {athensMonthGuide.map((m) => (
                      <tr key={m.month}>
                        <td className="px-3 py-2 font-medium text-slate-900">{m.month}</td>
                        <td className="px-3 py-2 text-slate-600">{m.temp}</td>
                        <td className="px-3 py-2 text-slate-600">{m.sea}</td>
                        <td className="px-3 py-2 text-slate-600">{m.cruiseActivity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          title: "Currency, language, and local tips",
          body: (
            <p>
              The currency is the euro and Greek is the language, but English is
              widely spoken in Athens. Carry water and sun protection in summer,
              wear shoes with grip for the slippery Acropolis marble, and keep some
              cash for kiosks, tavernas and tips. Check your ship&apos;s all-aboard
              time on the day and note our{" "}
              <Link href="/cruise-ship-schedules" className="text-blue-800 hover:underline">
                Piraeus cruise ship schedules
              </Link>{" "}
              to gauge how busy the port and the Acropolis will be.
            </p>
          ),
        },
        {
          title: "Best excursions from Piraeus",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/acropolis-parthenon-shore-excursion" className="text-blue-800 hover:underline">
                  Acropolis &amp; Parthenon
                </Link>{" "}
                — the essential Athens sight
              </li>
              <li>
                <Link href="/acropolis-museum-shore-excursion" className="text-blue-800 hover:underline">
                  Acropolis Museum &amp; Acropolis
                </Link>{" "}
                — the icon plus the original sculptures
              </li>
              <li>
                <Link href="/athens-city-highlights-shore-excursion" className="text-blue-800 hover:underline">
                  Athens city highlights
                </Link>{" "}
                — Acropolis, Plaka, Syntagma and more
              </li>
              <li>
                Long call:{" "}
                <Link href="/cape-sounion-shore-excursion" className="text-blue-800 hover:underline">
                  Cape Sounion
                </Link>
                ,{" "}
                <Link href="/corinth-shore-excursion-from-athens" className="text-blue-800 hover:underline">
                  Ancient Corinth
                </Link>{" "}
                or{" "}
                <Link href="/delphi-shore-excursion-from-athens" className="text-blue-800 hover:underline">
                  Delphi
                </Link>
              </li>
            </ul>
          ),
        },
      ]}
    />
  );
}
