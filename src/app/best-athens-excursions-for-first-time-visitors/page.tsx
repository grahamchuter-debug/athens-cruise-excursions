import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/best-athens-excursions-for-first-time-visitors";

const faqs = [
  {
    question: "What should a first-time visitor do in Athens on a cruise?",
    answer:
      "See the Acropolis and Parthenon first, then the Acropolis Museum below, with time for lunch and a stroll in Plaka. This classic combination captures the essence of Athens and works well on a typical port call.",
  },
  {
    question: "Is one day enough for Athens as a first-timer?",
    answer:
      "For the highlights, yes. A cruise day comfortably covers the Acropolis, its museum and central Athens. You won't see everything, but you'll experience the icons — and can save day trips like Delphi for a return visit.",
  },
  {
    question: "Should a first-time visitor take a tour or go independent?",
    answer:
      "A guided tour is a great choice for first-timers — it handles transfers, provides context and guarantees your return to Piraeus. Confident travellers can do the central sights independently by metro or taxi.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Athens Excursions for First-Time Visitors from a Cruise",
  description:
    "First time in Athens on a cruise? The best excursions from Piraeus for first-time visitors — the Acropolis, the museum, Plaka and city highlights, with stress-free timing advice.",
  path,
  image: HERO_IMAGES.acropolis.src,
  imageAlt: HERO_IMAGES.acropolis.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Best Athens Excursions for First-Time Visitors"
      schemaTitle="Best Athens Excursions for First-Time Visitors"
      description={metadata.description as string}
      eyebrow="Who it suits"
      h1="Best Athens excursions for first-time visitors"
      subtitle="New to Athens and arriving by cruise? These are the excursions that capture the essence of the city in one port day from Piraeus — the icons, done comfortably, with an easy return to the ship."
      heroImage={HERO_IMAGES.acropolis.src}
      heroImageAlt={HERO_IMAGES.acropolis.alt}
      snapshotIntro="First-timers should prioritise the icons and keep the day simple. The Acropolis, its museum and central Athens deliver the definitive experience — leave the far-flung day trips for a future visit and enjoy the classics without rushing."
      snapshotFields={{
        timeInPort: "5–6 hours for the essential highlights",
        bestFor: "First-time visitors to Athens and Greece",
        activityLevel: "Moderate — one climb, then easy walking",
        familyFriendly: "Good with age-appropriate choices",
        returnToShip: "High for the central classics",
        popularTypes: "Guided Acropolis + museum, city highlights",
      }}
      returnConfidence="High"
      faqs={faqs}
      relatedGuides={[
        { label: "One day in Athens", href: "/one-day-in-athens-from-a-cruise-ship" },
        { label: "Best things to do in Athens", href: "/best-things-to-do-in-athens-from-a-cruise-ship" },
        { label: "Piraeus Cruise Port guide", href: "/piraeus-cruise-port-guide" },
      ]}
      relatedExcursions={[
        { label: "Acropolis & Parthenon", href: "/acropolis-parthenon-shore-excursion" },
        { label: "Acropolis Museum & Acropolis", href: "/acropolis-museum-shore-excursion" },
        { label: "Athens city highlights", href: "/athens-city-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "Start with the icon",
          body: (
            <p>
              You&apos;ve come to Athens — see the{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>{" "}
              and the{" "}
              <Link href="/parthenon-guide-for-cruise-passengers" className="text-blue-800 hover:underline">
                Parthenon
              </Link>
              . Nothing else defines the city so completely. Go early to beat the heat
              and crowds, and consider a guided tour for skip-the-line entry and the
              stories behind the stones.
            </p>
          ),
        },
        {
          title: "Pair it with the museum and Plaka",
          body: (
            <p>
              Below the rock, the{" "}
              <Link href="/acropolis-museum-from-cruise-port" className="text-blue-800 hover:underline">
                Acropolis Museum
              </Link>{" "}
              makes sense of what you&apos;ve just seen, and the lanes of{" "}
              <Link href="/plaka-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Plaka
              </Link>{" "}
              are perfect for lunch and a gentle wander. This trio is the definitive
              first-time Athens day.
            </p>
          ),
        },
        {
          title: "Keep it stress-free",
          body: (
            <p>
              As a first-timer, don&apos;t over-pack the day. Choose one or two
              highlights, allow for the transfer from Piraeus, and keep a comfortable
              buffer before all-aboard. A guided{" "}
              <Link href="/athens-city-highlights-shore-excursion" className="text-blue-800 hover:underline">
                city highlights excursion
              </Link>{" "}
              takes care of the logistics — or plan your own with the{" "}
              <Link href="/athens-cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
