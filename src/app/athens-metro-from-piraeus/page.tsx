import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/athens-metro-from-piraeus";

const faqs = [
  {
    question: "Which metro line goes from Piraeus to Athens?",
    answer:
      "Line 1 (green) runs from Piraeus to Monastiraki and Thissio near the Acropolis and Plaka. Line 3 (blue) also serves Piraeus and runs to Syntagma and the airport. Both connect the port to central Athens.",
  },
  {
    question: "How long does the metro take from Piraeus to the Acropolis?",
    answer:
      "Roughly 20–30 minutes to Monastiraki on Line 1, plus a 10-minute walk to the Acropolis, or take Line 3 to Syntagma or Akropoli. Allow around 40–55 minutes door to door from the cruise berths including the walk or shuttle to the station.",
  },
  {
    question: "How much is the Athens metro from Piraeus?",
    answer:
      "A standard single ticket is inexpensive (a few euros) and valid for a 90-minute journey with transfers. Buy tickets or a reloadable card at station machines and validate before boarding. Keep it for the return.",
  },
  {
    question: "Is the metro a good choice on a cruise day?",
    answer:
      "Yes — it's cheap, frequent and avoids Athens road traffic, making it one of the most reliable ways back to your ship. It does involve walking and stairs, so it suits reasonably mobile passengers.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Athens Metro from Piraeus — Cruise Passenger Guide",
  description:
    "How to use the Athens metro from Piraeus Cruise Port — lines, stations for the Acropolis and Plaka, journey times, tickets and cruise-day tips for a reliable return to your ship.",
  path,
  image: HERO_IMAGES.port.src,
  imageAlt: HERO_IMAGES.port.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Athens Metro from Piraeus"
      schemaTitle="Athens Metro from Piraeus"
      description={metadata.description as string}
      eyebrow="Transport guide"
      h1="Athens metro from Piraeus"
      subtitle="The cheapest, most traffic-proof way into Athens — which lines to take from Piraeus, the best stations for the Acropolis and Plaka, tickets, and timing back to your ship."
      heroImage={HERO_IMAGES.port.src}
      heroImageAlt={HERO_IMAGES.port.alt}
      snapshotIntro="The Athens metro links Piraeus directly to the city centre, avoiding road traffic entirely. For confident, reasonably mobile passengers it's the most reliable and economical way to reach the Acropolis, Plaka and central sights."
      snapshotFields={{
        timeInPort: "~40–55 min door to door to the Acropolis",
        bestFor: "Independent, budget-minded, mobile passengers",
        activityLevel: "Moderate — walking and stairs",
        familyFriendly: "Good for older children",
        returnToShip: "High — avoids road traffic",
        popularTypes: "Self-guided Athens visits",
      }}
      returnConfidence="High"
      returnNote="Because it bypasses traffic, the metro is often the most predictable way back to Piraeus. Note the last-train and frequency, and leave a comfortable buffer before all-aboard."
      faqs={faqs}
      relatedGuides={[
        { label: "Walking & transport from Piraeus", href: "/walking-and-transport-from-piraeus-cruise-port" },
        { label: "Taxi guide from Piraeus Cruise Port", href: "/taxi-guide-from-piraeus-cruise-port" },
        { label: "Piraeus Cruise Port guide", href: "/piraeus-cruise-port-guide" },
      ]}
      relatedExcursions={[
        { label: "Athens city highlights", href: "/athens-city-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "The lines that matter",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Line 1 (green)</strong> — Piraeus to Monastiraki and Thissio,
                the closest stations to the Acropolis, Ancient Agora and Plaka
              </li>
              <li>
                <strong>Line 3 (blue)</strong> — Piraeus to Syntagma (change for
                Akropoli station on Line 2) and on to the airport
              </li>
              <li>
                For the Acropolis: alight at Monastiraki (Line 1) or Akropoli (Line 2
                via a change), then walk uphill
              </li>
            </ul>
          ),
        },
        {
          title: "Tickets and how to ride",
          body: (
            <p>
              Buy a single ticket or a reloadable card from machines at the station,
              validate it before boarding, and keep it for your return journey. A
              single fare is valid for 90 minutes including transfers. Trains are
              frequent, but can be busy — hold bags close and be alert to
              pickpockets in crowds, as at any major city metro.
            </p>
          ),
        },
        {
          title: "Getting to the station from your ship",
          body: (
            <p>
              The cruise berths are a fair distance from the Piraeus metro station, so
              most passengers take the port/ship shuttle to the gate area first. See
              our{" "}
              <Link href="/walking-and-transport-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                walking and transport guide
              </Link>{" "}
              for how to reach the station, and the{" "}
              <Link href="/piraeus-cruise-port-guide" className="text-blue-800 hover:underline">
                Piraeus Cruise Port guide
              </Link>{" "}
              for the wider layout.
            </p>
          ),
        },
      ]}
    />
  );
}
