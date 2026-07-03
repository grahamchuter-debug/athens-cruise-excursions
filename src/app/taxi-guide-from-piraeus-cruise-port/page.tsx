import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/taxi-guide-from-piraeus-cruise-port";

const faqs = [
  {
    question: "How much is a taxi from Piraeus Cruise Port to the Acropolis?",
    answer:
      "Fares vary with traffic and time of day, but a taxi from the cruise port to the Acropolis or central Athens is typically a moderate fixed-ish city fare. Agree the fare or confirm the meter is running before you set off, and expect higher tariffs at night.",
  },
  {
    question: "How long does a taxi take from Piraeus to Athens?",
    answer:
      "Around 30–45 minutes to the Acropolis or central Athens, depending heavily on traffic. Peak-time congestion can add significant time, so allow a generous buffer for the return to your ship.",
  },
  {
    question: "Are taxis available at Piraeus Cruise Port?",
    answer:
      "Yes — official taxi ranks operate at the port, and your ship or the port shuttle can bring you to them. Use official, licensed taxis, and consider pre-booking a private transfer for guaranteed timing.",
  },
  {
    question: "Should I book a private driver for the day?",
    answer:
      "For families, groups, or anyone wanting door-to-door comfort and a guaranteed return, a pre-booked private car or driver-guide for the day is a popular, low-stress option — often comparable in cost to several individual taxis.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Taxi Guide from Piraeus Cruise Port to Athens",
  description:
    "Using taxis from Piraeus Cruise Port — fares, journey times, where to find official taxis, private transfers, and tips for a comfortable, on-time cruise day in Athens.",
  path,
  image: HERO_IMAGES.port.src,
  imageAlt: HERO_IMAGES.port.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Taxi Guide from Piraeus Cruise Port"
      schemaTitle="Taxi Guide from Piraeus Cruise Port"
      description={metadata.description as string}
      eyebrow="Transport guide"
      h1="Taxi guide from Piraeus Cruise Port"
      subtitle="The door-to-door option — how taxis and private transfers work at Piraeus, what to expect on fares and timing, and when a car beats the metro on a cruise day."
      heroImage={HERO_IMAGES.port.src}
      heroImageAlt={HERO_IMAGES.port.alt}
      snapshotIntro="Taxis are the simplest, most comfortable way from Piraeus to the Athens sights — no stairs, no changes, straight to the door. The trade-off is traffic, which makes generous return buffers essential. For groups and families they can also be excellent value."
      snapshotFields={{
        timeInPort: "~30–45 min each way; allow for traffic",
        bestFor: "Families, groups, limited mobility, comfort",
        activityLevel: "Easy — door to door",
        familyFriendly: "Excellent",
        returnToShip: "Good with a buffer; traffic-dependent",
        popularTypes: "Metered taxis, private transfers, driver-guides",
      }}
      returnConfidence="Moderate"
      returnNote="Taxis are subject to Athens–Piraeus traffic, which can be heavy at peak times. Pre-book your return or allow extra time; the metro can be faster when roads are congested."
      faqs={faqs}
      relatedGuides={[
        { label: "Athens metro from Piraeus", href: "/athens-metro-from-piraeus" },
        { label: "Walking & transport from Piraeus", href: "/walking-and-transport-from-piraeus-cruise-port" },
        { label: "Piraeus Cruise Port guide", href: "/piraeus-cruise-port-guide" },
      ]}
      relatedExcursions={[
        { label: "Athens city highlights", href: "/athens-city-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "When a taxi makes sense",
          body: (
            <p>
              A taxi is the best choice when you value comfort and directness over
              cost — travelling with children or older relatives, carrying little
              patience for stairs and changes, or simply wanting to step from the port
              to the Acropolis with no fuss. For a couple or family, splitting one
              fare can rival the metro for value.
            </p>
          ),
        },
        {
          title: "Fares and paying",
          body: (
            <p>
              Use official licensed taxis from the port rank. Confirm the meter is on
              or agree a fare before departing, and be aware that night and holiday
              tariffs are higher. Have some cash in euros as a backup even if cards are
              accepted. Keep the driver&apos;s details or a receipt in case you leave
              something behind.
            </p>
          ),
        },
        {
          title: "Private transfers and driver-guides",
          body: (
            <p>
              For the least stress, pre-book a private transfer or a driver for the
              day. A driver-guide can take you to the{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>
              ,{" "}
              <Link href="/cape-sounion-shore-excursion" className="text-blue-800 hover:underline">
                Cape Sounion
              </Link>{" "}
              or{" "}
              <Link href="/corinth-shore-excursion-from-athens" className="text-blue-800 hover:underline">
                Corinth
              </Link>{" "}
              and take responsibility for a timely return. See how this compares in our{" "}
              <Link href="/independent-vs-cruise-line-excursions" className="text-blue-800 hover:underline">
                independent vs cruise line guide
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
