import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/walking-and-transport-from-piraeus-cruise-port";

const faqs = [
  {
    question: "Can I walk from Piraeus Cruise Port into Athens?",
    answer:
      "No — central Athens and the Acropolis are about 10 km from the cruise terminals, too far to walk. You'll need the metro, a taxi, a shuttle, or an organised tour. You can walk locally around Piraeus, but the sights are in Athens.",
  },
  {
    question: "What are my transport options from Piraeus Cruise Port?",
    answer:
      "The main options are the Athens metro (cheap and traffic-proof), taxis (door to door but subject to traffic), the port shuttle bus to the metro/gate area, hop-on-hop-off buses, and organised shore excursions with coach transfers.",
  },
  {
    question: "Is there a shuttle at Piraeus Cruise Port?",
    answer:
      "Cruise lines and the port often run a shuttle between the cruise berths and the port gate or metro station, as the terminals are a long walk from the exit. Check with your ship for the day's arrangement.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Walking & Transport from Piraeus Cruise Port to Athens",
  description:
    "How to get from Piraeus Cruise Port into Athens — metro, taxi, shuttle, hop-on-hop-off and organised tours compared, with distances, times and cruise-day tips.",
  path,
  image: HERO_IMAGES.port.src,
  imageAlt: HERO_IMAGES.port.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Walking & Transport from Piraeus Cruise Port"
      schemaTitle="Walking and Transport from Piraeus Cruise Port"
      description={metadata.description as string}
      eyebrow="Transport guide"
      h1="Walking & transport from Piraeus Cruise Port"
      subtitle="Everything you need to get from the Piraeus cruise berths into Athens and back — metro, taxi, shuttle and tours compared, with realistic times and return-to-ship advice."
      heroImage={HERO_IMAGES.port.src}
      heroImageAlt={HERO_IMAGES.port.alt}
      snapshotIntro="Piraeus Cruise Port is around 10 km from the Athens sights, so getting into the city is the first decision of your port day. The good news: the options are plentiful, affordable and well established. Here's how they compare."
      snapshotFields={{
        timeInPort: "Allow 30–60 min each way into Athens",
        bestFor: "Everyone — plan transport before you sail",
        activityLevel: "Varies by option",
        familyFriendly: "Taxi and tour easiest with children",
        returnToShip: "Metro is the most traffic-proof",
        popularTypes: "Metro, taxi, shuttle, organised tours",
      }}
      returnConfidence="Moderate"
      returnNote="Traffic between Athens and Piraeus can be heavy at peak times. The metro avoids road congestion and is often the most predictable way back to your ship."
      faqs={faqs}
      relatedGuides={[
        { label: "Athens metro from Piraeus", href: "/athens-metro-from-piraeus" },
        { label: "Taxi guide from Piraeus Cruise Port", href: "/taxi-guide-from-piraeus-cruise-port" },
        { label: "Piraeus Cruise Port guide", href: "/piraeus-cruise-port-guide" },
      ]}
      relatedExcursions={[
        { label: "Athens city highlights", href: "/athens-city-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "First: getting out of the port",
          body: (
            <p>
              The Piraeus cruise terminals sit some distance from the port gate and
              the metro, so most passengers use a shuttle (run by the ship or port) to
              reach the exit, taxi rank or metro station. Walking is possible but can
              be a long, uninspiring trek along the quays — save your energy for
              Athens.
            </p>
          ),
        },
        {
          title: "The metro — cheap and traffic-proof",
          body: (
            <p>
              The{" "}
              <Link href="/athens-metro-from-piraeus" className="text-blue-800 hover:underline">
                Athens metro
              </Link>{" "}
              runs from Piraeus directly into the centre, bypassing road traffic
              entirely. It&apos;s inexpensive and drops you near Monastiraki, Syntagma
              and the Acropolis. Ideal for confident, budget-minded independent
              travellers.
            </p>
          ),
        },
        {
          title: "Taxis — door to door",
          body: (
            <p>
              A{" "}
              <Link href="/taxi-guide-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                taxi
              </Link>{" "}
              takes you straight from the port to the Acropolis or your chosen sight in
              30–45 minutes depending on traffic — comfortable and simple, especially
              for families or those with limited mobility, but subject to congestion.
            </p>
          ),
        },
        {
          title: "Organised tours — the low-stress option",
          body: (
            <p>
              An{" "}
              <Link href="/shore-excursions" className="text-blue-800 hover:underline">
                organised shore excursion
              </Link>{" "}
              includes coach transfer, a guide and, crucially, responsibility for
              getting you back to Piraeus in time. If return-to-ship anxiety is your
              main concern, this is the safest choice — see our{" "}
              <Link href="/independent-vs-cruise-line-excursions" className="text-blue-800 hover:underline">
                independent vs cruise line comparison
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
