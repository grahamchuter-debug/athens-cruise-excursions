import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/independent-vs-cruise-line-excursions";

const faqs = [
  {
    question: "Is it safe to explore Athens independently on a cruise day?",
    answer:
      "Yes, for most passengers. Athens is well connected to Piraeus by metro and taxi, and the main sights are straightforward to reach. The key risk is timing — you are responsible for getting back to the ship, so build a generous buffer.",
  },
  {
    question: "Will the ship wait if my independent tour is late?",
    answer:
      "Generally no. If you book an independent tour or explore on your own, the ship is not obliged to wait. On official cruise-line excursions, the ship will wait for or make arrangements for delayed tour groups — the main reason some passengers prefer them.",
  },
  {
    question: "Are independent Athens tours cheaper than cruise-line excursions?",
    answer:
      "Usually yes. Independent tours and DIY travel by metro are typically cheaper than the equivalent cruise-line excursion, and often in smaller groups. You trade the ship's guarantee of waiting for lower cost and more flexibility.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Independent vs Cruise Line Excursions in Athens",
  description:
    "Should you book a cruise-line excursion or go independent in Athens from Piraeus? Compare cost, flexibility, group size and the crucial return-to-ship guarantee.",
  path,
  image: HERO_IMAGES.acropolis.src,
  imageAlt: HERO_IMAGES.acropolis.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Independent vs Cruise Line Excursions"
      schemaTitle="Independent vs Cruise Line Excursions in Athens"
      description={metadata.description as string}
      eyebrow="Planning guide"
      h1="Independent vs cruise line excursions in Athens"
      subtitle="The honest trade-offs between booking through your cruise line, booking an independent tour, or going it alone from Piraeus — cost, flexibility, and the all-important return-to-ship guarantee."
      heroImage={HERO_IMAGES.acropolis.src}
      heroImageAlt={HERO_IMAGES.acropolis.alt}
      snapshotIntro="There's no single right answer — it depends on your confidence, budget, group and how far you're travelling. Central Athens is easy to do independently; distant day trips like Delphi are where the cruise-line guarantee matters most."
      returnConfidence="Moderate"
      returnNote="The single biggest difference is what happens if you're late: cruise-line excursions carry the ship's guarantee to wait; independent trips do not. Weigh this heavily for long day trips."
      faqs={faqs}
      relatedGuides={[
        { label: "Walking & transport from Piraeus", href: "/walking-and-transport-from-piraeus-cruise-port" },
        { label: "Best things to do in Athens", href: "/best-things-to-do-in-athens-from-a-cruise-ship" },
        { label: "Athens cruise planner", href: "/athens-cruise-planner" },
      ]}
      relatedExcursions={[
        { label: "Acropolis & Parthenon", href: "/acropolis-parthenon-shore-excursion" },
        { label: "Delphi full-day tour", href: "/delphi-shore-excursion-from-athens" },
      ]}
      sections={[
        {
          title: "The case for cruise-line excursions",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>The ship waits for you (or arranges onward transport) if the tour runs late</li>
              <li>No planning — transfers, guide and tickets are handled</li>
              <li>Reassuring for first-time cruisers and nervous travellers</li>
              <li>Best for long or distant trips like{" "}
                <Link href="/delphi-shore-excursion-from-athens" className="text-blue-800 hover:underline">Delphi</Link>{" "}
                where timing risk is highest
              </li>
              <li>Usually the most expensive option, often in larger groups</li>
            </ul>
          ),
        },
        {
          title: "The case for independent tours",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>Lower cost and frequently smaller groups</li>
              <li>More choice of itineraries and specialist guides</li>
              <li>Flexible timings and a more personal experience</li>
              <li>You are responsible for returning on time — build a buffer</li>
              <li>Reputable operators know all-aboard times and plan around them</li>
            </ul>
          ),
        },
        {
          title: "The case for DIY",
          body: (
            <p>
              For confident, mobile travellers, doing Athens yourself by{" "}
              <Link href="/athens-metro-from-piraeus" className="text-blue-800 hover:underline">
                metro
              </Link>{" "}
              or{" "}
              <Link href="/taxi-guide-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                taxi
              </Link>{" "}
              is cheap and flexible. The central sights — the{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>
              , its museum and{" "}
              <Link href="/plaka-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Plaka
              </Link>{" "}
              — are very doable alone. Keep DIY for the city, not for far-flung day
              trips.
            </p>
          ),
        },
        {
          title: "Our rule of thumb",
          body: (
            <p>
              For central Athens on a normal port call, independent or DIY is
              perfectly sensible. For distant destinations, short calls, or if being
              late would genuinely stress you, book an organised tour with a
              return-to-ship guarantee. Use the{" "}
              <Link href="/athens-cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to weigh it against your hours ashore.
            </p>
          ),
        },
      ]}
    />
  );
}
