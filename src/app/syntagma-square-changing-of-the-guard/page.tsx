import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/syntagma-square-changing-of-the-guard";

const faqs = [
  {
    question: "What time is the changing of the guard at Syntagma Square?",
    answer:
      "The Evzones perform a small changing ceremony every hour, on the hour, throughout the day. The full ceremonial changing of the guard, with the marching band, takes place on Sundays at 11:00. Guards stand at the Tomb of the Unknown Soldier at all times.",
  },
  {
    question: "How do I get to Syntagma Square from Piraeus?",
    answer:
      "Syntagma has its own metro station on Line 3, directly connected to the Piraeus area, taking roughly 20–30 minutes. Taxis take 25–40 minutes depending on traffic. It's one of the easiest central Athens spots to reach.",
  },
  {
    question: "Is the changing of the guard worth seeing on a cruise day?",
    answer:
      "It's a memorable, free spectacle that takes only a few minutes to watch, and Syntagma is central and easy to combine with Plaka, the Temple of Olympian Zeus and the National Garden. Time your visit for an on-the-hour change.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Syntagma Square & Changing of the Guard — Athens Cruise Guide",
  description:
    "See the Evzones changing of the guard at Syntagma Square in Athens on a cruise day — timings, how to get there from Piraeus, and what else to see nearby.",
  path,
  image: HERO_IMAGES.syntagma.src,
  imageAlt: HERO_IMAGES.syntagma.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Syntagma Square & Changing of the Guard"
      schemaTitle="Syntagma Square and the Changing of the Guard"
      description={metadata.description as string}
      eyebrow="Attraction guide"
      h1="Syntagma Square & the changing of the guard"
      subtitle="The ceremonial heart of modern Athens — see the Evzones guard change outside Parliament, and combine it with nearby sights on your Piraeus port day."
      heroImage={HERO_IMAGES.syntagma.src}
      heroImageAlt={HERO_IMAGES.syntagma.alt}
      snapshotIntro="Syntagma Square is the civic centre of Athens, where the ceremonial Evzones guard the Tomb of the Unknown Soldier outside Parliament. The hourly change is a quick, free highlight, and Syntagma's metro station makes it one of the simplest central spots to reach from Piraeus."
      snapshotFields={{
        timeInPort: "4+ hours; easily combined with other sights",
        bestFor: "Photography, culture, first-time orientation",
        activityLevel: "Easy — level square and pavements",
        familyFriendly: "Excellent — children love the ceremony",
        returnToShip: "High — direct metro from Piraeus",
        popularTypes: "City tours, self-guided walks",
      }}
      returnConfidence="High"
      returnNote="Syntagma is directly linked to the Piraeus area by metro, so timing is very reliable — one of the easiest central sights to fit around your all-aboard."
      faqs={faqs}
      relatedGuides={[
        { label: "Temple of Olympian Zeus", href: "/temple-of-olympian-zeus" },
        { label: "Plaka from Piraeus Cruise Port", href: "/plaka-from-piraeus-cruise-port" },
        { label: "Athens metro from Piraeus", href: "/athens-metro-from-piraeus" },
      ]}
      relatedExcursions={[
        { label: "Athens city highlights", href: "/athens-city-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "The Evzones and the ceremony",
          body: (
            <p>
              Outside the Greek Parliament on Syntagma Square, the{" "}
              <strong>Evzones</strong> — the Presidential Guard — stand watch over
              the Tomb of the Unknown Soldier in their distinctive uniform of pleated
              <em> fustanella</em> kilt, red cap and pom-pom shoes. Their slow,
              stylised movements are steeped in tradition. A short changing ceremony
              takes place every hour on the hour; the grand version, with the full
              guard and a band, happens on Sundays at 11:00.
            </p>
          ),
        },
        {
          title: "Getting there from Piraeus",
          body: (
            <p>
              Syntagma is one of the easiest central sights to reach: its metro
              station connects directly to the Piraeus area in roughly 20–30 minutes.
              See our{" "}
              <Link href="/athens-metro-from-piraeus" className="text-blue-800 hover:underline">
                Athens metro guide
              </Link>{" "}
              for routes, or take a{" "}
              <Link href="/taxi-guide-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                taxi
              </Link>
              . Aim to arrive a few minutes before the hour to catch the change.
            </p>
          ),
        },
        {
          title: "What else is nearby",
          body: (
            <p>
              Syntagma sits within easy walking distance of the shaded National
              Garden, the{" "}
              <Link href="/temple-of-olympian-zeus" className="text-blue-800 hover:underline">
                Temple of Olympian Zeus
              </Link>{" "}
              and Hadrian&apos;s Arch, the Panathenaic Stadium, and the lanes of{" "}
              <Link href="/plaka-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Plaka
              </Link>
              . It makes an ideal starting point for a self-guided loop of modern and
              ancient Athens, or a stop on a guided{" "}
              <Link href="/athens-city-highlights-shore-excursion" className="text-blue-800 hover:underline">
                city highlights tour
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
