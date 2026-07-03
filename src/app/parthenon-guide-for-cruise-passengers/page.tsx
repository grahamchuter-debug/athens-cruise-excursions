import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/parthenon-guide-for-cruise-passengers";

const faqs = [
  {
    question: "Can you go inside the Parthenon?",
    answer:
      "No — to protect the monument, visitors cannot enter the Parthenon itself. You walk around it on the summit of the Acropolis, viewing it from all sides. The interior sculptures that survive are displayed in the Acropolis Museum below.",
  },
  {
    question: "How much time should cruise passengers spend at the Parthenon?",
    answer:
      "The Parthenon is the centrepiece of an Acropolis visit; allow about two hours on the rock overall to take in the Parthenon, Erechtheion, Propylaea and the views, plus transfer time from Piraeus.",
  },
  {
    question: "Why is scaffolding often on the Parthenon?",
    answer:
      "The Parthenon has been undergoing meticulous, decades-long restoration. Some scaffolding is usually present as conservators reassemble original marble. It does not spoil the experience — the scale and setting are still breathtaking.",
  },
  {
    question: "Where are the original Parthenon sculptures?",
    answer:
      "The surviving frieze and metopes are split between the Acropolis Museum in Athens and the British Museum in London. The Acropolis Museum's top-floor gallery displays its sculptures aligned with the temple visible through the glass.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Parthenon Guide for Cruise Passengers Visiting Athens",
  description:
    "A cruise passenger's guide to the Parthenon on the Athens Acropolis — its history, what you can and can't see, restoration, the sculptures, and how to fit it into a Piraeus port day.",
  path,
  image: HERO_IMAGES.parthenon.src,
  imageAlt: HERO_IMAGES.parthenon.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Parthenon Guide for Cruise Passengers"
      schemaTitle="Parthenon Guide for Cruise Passengers"
      description={metadata.description as string}
      eyebrow="Attraction guide"
      h1="Parthenon guide for cruise passengers"
      subtitle="Everything a cruise passenger needs to know about the Parthenon — its history and meaning, what you can see up close, and how to visit it from Piraeus without stress."
      heroImage={HERO_IMAGES.parthenon.src}
      heroImageAlt={HERO_IMAGES.parthenon.alt}
      snapshotIntro="The Parthenon is the crowning temple of the Acropolis and the highlight of any Athens port day. You view it from the summit rather than entering it; pair it with the Acropolis Museum to see its sculptures up close."
      snapshotFields={{
        timeInPort: "5+ hours for the Acropolis",
        bestFor: "History lovers, first-time visitors, photographers",
        activityLevel: "Moderate — reached via the Acropolis climb",
        familyFriendly: "Good with a guide to tell the story",
        returnToShip: "High on organised tours",
        popularTypes: "Acropolis tours, Acropolis + Museum combos",
      }}
      returnConfidence="High"
      returnNote="The Parthenon is visited as part of an Acropolis trip. On a guided tour your return to Piraeus is managed; independent visitors should keep a 60–90 minute buffer for the journey back."
      faqs={faqs}
      relatedGuides={[
        { label: "Acropolis from Piraeus Cruise Port", href: "/acropolis-from-piraeus-cruise-port" },
        { label: "Acropolis Museum from the cruise port", href: "/acropolis-museum-from-cruise-port" },
        { label: "Best things to do in Athens", href: "/best-things-to-do-in-athens-from-a-cruise-ship" },
      ]}
      relatedExcursions={[
        { label: "Acropolis & Parthenon shore excursion", href: "/acropolis-parthenon-shore-excursion" },
      ]}
      needHelpExcursion="acropolis-parthenon-shore-excursion"
      sections={[
        {
          title: "What the Parthenon is",
          body: (
            <p>
              The Parthenon is a Doric temple dedicated to the goddess Athena,
              built between 447 and 438 BC at the height of Athenian power under
              Pericles. Designed by the architects Iktinos and Kallikrates with
              sculpture overseen by Pheidias, it is considered the finest expression
              of classical Greek architecture — its columns subtly curved to correct
              the eye, its proportions endlessly studied. For nearly 2,500 years it
              has stood over Athens as a symbol of democracy, art and the city
              itself.
            </p>
          ),
        },
        {
          title: "What you can (and can't) see",
          body: (
            <p>
              You cannot go inside the Parthenon — visitors walk around it on the
              Acropolis summit, taking in the columns, pediments and setting from
              every angle. To see the sculpture that once adorned it, visit the{" "}
              <Link href="/acropolis-museum-from-cruise-port" className="text-blue-800 hover:underline">
                Acropolis Museum
              </Link>{" "}
              at the foot of the hill, whose top floor recreates the frieze at its
              original scale with the temple framed through the glass. Seeing both,
              site and sculptures, is the complete experience.
            </p>
          ),
        },
        {
          title: "Restoration and scaffolding",
          body: (
            <p>
              The Parthenon has survived use as a temple, church and mosque, and an
              explosion in 1687 that shattered its centre. Since the 1970s a
              painstaking restoration has been reassembling original marble, so some
              scaffolding is usually present. Far from spoiling the visit, it is part
              of a living conservation story — and the monument&apos;s scale and
              hilltop setting remain unforgettable.
            </p>
          ),
        },
        {
          title: "Visiting from Piraeus",
          body: (
            <p>
              Because the Parthenon sits atop the Acropolis, visiting it means making
              the{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis trip from Piraeus
              </Link>{" "}
              — 10–12 km by metro, taxi or organised tour. Go early for the best
              light and fewest crowds, wear shoes with grip for the marble, and allow
              a comfortable buffer for the return to your ship.
            </p>
          ),
        },
      ]}
    />
  );
}
