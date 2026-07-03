import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/one-day-in-athens-from-a-cruise-ship";

const faqs = [
  {
    question: "Can I see the Acropolis and the museum in one day from a cruise?",
    answer:
      "Yes — this is the classic Athens port day and works well on a call of six hours or more. Do the Acropolis first, then the Acropolis Museum below it, with time for lunch in Plaka.",
  },
  {
    question: "What if I only have four or five hours in Athens?",
    answer:
      "Keep it focused and central. Choose the Acropolis (with a quick transfer and skip-the-line entry) or the Acropolis Museum plus Plaka. Avoid long day trips to Sounion, Corinth or Delphi on a short call.",
  },
  {
    question: "What should I do with a long port day in Athens?",
    answer:
      "With eight hours or more you can combine the Acropolis, its museum and central Athens, or add a half-day trip to Cape Sounion or Ancient Corinth. Delphi needs a genuinely full day of about ten hours.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "One Day in Athens from a Cruise Ship — Itineraries by Hours",
  description:
    "Sample one-day Athens itineraries for cruise passengers from Piraeus, by hours ashore — 4, 6 and 8+ hour plans covering the Acropolis, the museum, Plaka, and day trips.",
  path,
  image: HERO_IMAGES.athens.src,
  imageAlt: HERO_IMAGES.athens.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="One Day in Athens from a Cruise Ship"
      schemaTitle="One Day in Athens from a Cruise Ship"
      description={metadata.description as string}
      eyebrow="Itinerary planner"
      h1="One day in Athens from a cruise ship"
      subtitle="Ready-made port-day plans by hours ashore — make the most of Athens from Piraeus whether you have four hours or a full day, with a comfortable return-to-ship buffer built in."
      heroImage={HERO_IMAGES.athens.src}
      heroImageAlt={HERO_IMAGES.athens.alt}
      snapshotIntro="The right Athens plan depends entirely on your hours ashore and the 30–45 minute transfer from Piraeus each way. Here are three tried-and-tested itineraries, each built around a comfortable all-aboard buffer."
      returnConfidence="Moderate"
      faqs={faqs}
      relatedGuides={[
        { label: "Best things to do in Athens", href: "/best-things-to-do-in-athens-from-a-cruise-ship" },
        { label: "Athens cruise planner", href: "/athens-cruise-planner" },
        { label: "Athens metro from Piraeus", href: "/athens-metro-from-piraeus" },
      ]}
      relatedExcursions={[
        { label: "Athens full-day highlights", href: "/athens-full-day-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "About 4 hours ashore",
          body: (
            <p>
              Keep it close and simple, and remember the transfer eats into your
              time. Either take a taxi or an organised tour straight to the{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>{" "}
              for a focused visit, <em>or</em> the{" "}
              <Link href="/acropolis-museum-from-cruise-port" className="text-blue-800 hover:underline">
                Acropolis Museum
              </Link>{" "}
              plus a short wander in{" "}
              <Link href="/plaka-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Plaka
              </Link>
              . Trying to do everything on a four-hour call is tight — pick one and
              enjoy it properly.
            </p>
          ),
        },
        {
          title: "About 6 hours ashore",
          body: (
            <p>
              The classic combination: the Acropolis first thing (before the heat and
              crowds), then the Acropolis Museum below it, with time for a Greek lunch
              and a stroll through Plaka and Monastiraki. This is the ideal Athens day
              for first-time visitors, and it keeps a sensible return buffer.
            </p>
          ),
        },
        {
          title: "8+ hours ashore",
          body: (
            <p>
              With a full day you have real choice. Either combine the Acropolis, its
              museum and central Athens — Syntagma, the{" "}
              <Link href="/temple-of-olympian-zeus" className="text-blue-800 hover:underline">
                Temple of Olympian Zeus
              </Link>{" "}
              and Plaka — at a relaxed pace, or add a half-day trip to{" "}
              <Link href="/cape-sounion-shore-excursion" className="text-blue-800 hover:underline">
                Cape Sounion
              </Link>{" "}
              or{" "}
              <Link href="/corinth-shore-excursion-from-athens" className="text-blue-800 hover:underline">
                Ancient Corinth
              </Link>
              . For{" "}
              <Link href="/delphi-shore-excursion-from-athens" className="text-blue-800 hover:underline">
                Delphi
              </Link>
              , you&apos;ll need close to ten hours and an organised tour.
            </p>
          ),
        },
        {
          title: "Plan around your ship",
          body: (
            <p>
              Use the{" "}
              <Link href="/athens-cruise-planner" className="text-blue-800 hover:underline">
                Athens cruise planner
              </Link>{" "}
              to match excursions to your exact hours, mobility and interests, and
              check the{" "}
              <Link href="/cruise-ship-schedules" className="text-blue-800 hover:underline">
                Piraeus ship schedule
              </Link>{" "}
              to see how busy the port — and the Acropolis — will be on your date.
            </p>
          ),
        },
      ]}
    />
  );
}
