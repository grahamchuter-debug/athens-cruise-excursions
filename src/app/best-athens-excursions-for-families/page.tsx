import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/best-athens-excursions-for-families";

const faqs = [
  {
    question: "Is Athens good for families on a cruise day?",
    answer:
      "Yes — Athens combines big, story-rich monuments with a modern, walkable centre, gelato, and easy transport. The Acropolis captivates older children, while food walks in Plaka and the guard change at Syntagma suit all ages.",
  },
  {
    question: "Is the Acropolis suitable for children?",
    answer:
      "Older children usually love the Acropolis, but the climb is on steep, slippery marble with little shade, so it's harder with toddlers or in summer heat. Go early, bring water and sun protection, and use a guide to bring the myths alive.",
  },
  {
    question: "What's the easiest Athens excursion with young children?",
    answer:
      "A Plaka food walk or a city highlights tour with a car is gentler than a big climb — flat, shaded lanes, snacks and short stops. The Acropolis Museum is also excellent, being cool, level and full of dramatic sculpture.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Athens Excursions for Families from a Cruise Ship",
  description:
    "The best Athens shore excursions for families from Piraeus — child-friendly ways to see the Acropolis, food walks in Plaka, the guard change, and easy days that keep everyone happy.",
  path,
  image: HERO_IMAGES.plaka.src,
  imageAlt: HERO_IMAGES.plaka.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Best Athens Excursions for Families"
      schemaTitle="Best Athens Excursions for Families"
      description={metadata.description as string}
      eyebrow="Who it suits"
      h1="Best Athens excursions for families"
      subtitle="Athens with children on a cruise day — the excursions that balance wow-factor with comfort, shade and easy timing, so the whole family enjoys the port and returns happy."
      heroImage={HERO_IMAGES.plaka.src}
      heroImageAlt={HERO_IMAGES.plaka.alt}
      snapshotIntro="Families do best mixing one big-hitter with gentler, tastier stops. Athens delivers: myths on the Acropolis, sculptures in the museum, souvlaki in Plaka and marching guards at Syntagma — all reachable with minimal fuss."
      snapshotFields={{
        timeInPort: "5+ hours for a relaxed family day",
        bestFor: "Families with children of all ages",
        activityLevel: "Choose to match your youngest",
        familyFriendly: "Excellent across the city",
        returnToShip: "High for central options",
        popularTypes: "Food walks, city tours, museum + Plaka",
      }}
      returnConfidence="High"
      faqs={faqs}
      relatedGuides={[
        { label: "Best for first-time visitors", href: "/best-athens-excursions-for-first-time-visitors" },
        { label: "One day in Athens", href: "/one-day-in-athens-from-a-cruise-ship" },
        { label: "Plaka from Piraeus Cruise Port", href: "/plaka-from-piraeus-cruise-port" },
      ]}
      relatedExcursions={[
        { label: "Plaka Old Town & food walk", href: "/plaka-food-walking-shore-excursion" },
        { label: "Athens city highlights", href: "/athens-city-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "Top family picks",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/plaka-food-walking-shore-excursion" className="text-blue-800 hover:underline">
                  Plaka food walk
                </Link>{" "}
                — flat, shaded, delicious, and full of short stops that keep children engaged
              </li>
              <li>
                <Link href="/athens-city-highlights-shore-excursion" className="text-blue-800 hover:underline">
                  City highlights by car
                </Link>{" "}
                — the sights with less walking and air-conditioned comfort between stops
              </li>
              <li>
                <Link href="/acropolis-museum-from-cruise-port" className="text-blue-800 hover:underline">
                  Acropolis Museum
                </Link>{" "}
                — cool, level and dramatic, with a glass floor over real excavations
              </li>
              <li>
                <Link href="/syntagma-square-changing-of-the-guard" className="text-blue-800 hover:underline">
                  Changing of the guard
                </Link>{" "}
                — a short, free, memorable spectacle children love
              </li>
            </ul>
          ),
        },
        {
          title: "Doing the Acropolis with kids",
          body: (
            <p>
              The{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>{" "}
              is magical for children old enough to manage the climb — a guide who tells
              the myths of Athena and the gods turns ruins into stories. Go first thing
              to beat the heat and crowds, bring water, hats and grippy shoes, and be
              honest about whether the slippery marble suits your youngest.
            </p>
          ),
        },
        {
          title: "Keeping the day easy",
          body: (
            <p>
              With children, timing matters most. Favour central options, keep one
              transfer rather than several, and leave a comfortable buffer to get back
              to Piraeus. A pre-booked car or an organised tour removes the stress of
              the return — see our{" "}
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
