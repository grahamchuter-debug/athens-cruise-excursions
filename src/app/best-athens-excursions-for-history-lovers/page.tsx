import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/best-athens-excursions-for-history-lovers";

const faqs = [
  {
    question: "What are the best historical sites in Athens for a cruise day?",
    answer:
      "The Acropolis and Parthenon are the pinnacle, paired with the Acropolis Museum and the Ancient Agora. For deeper history, add the Temple of Olympian Zeus, or take a day trip to Ancient Corinth or Delphi.",
  },
  {
    question: "Is Delphi worth it for history lovers on a cruise?",
    answer:
      "For serious history and mythology enthusiasts, Delphi is extraordinary — the sanctuary of the oracle in a stunning mountain setting. But it's a long day trip, only realistic on a very long port call and best with a guaranteed return.",
  },
  {
    question: "Should history lovers take a guide in Athens?",
    answer:
      "Strongly recommended. A licensed guide transforms ruins into vivid history, explaining what you're seeing and its significance. Skip-the-line entry also saves precious port time at the Acropolis.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Athens Excursions for History Lovers from a Cruise Ship",
  description:
    "The best Athens shore excursions for history lovers from Piraeus — the Acropolis and Parthenon, the Ancient Agora, the Acropolis Museum, Ancient Corinth and Delphi, with expert guiding.",
  path,
  image: HERO_IMAGES.parthenon.src,
  imageAlt: HERO_IMAGES.parthenon.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Best Athens Excursions for History Lovers"
      schemaTitle="Best Athens Excursions for History Lovers"
      description={metadata.description as string}
      eyebrow="Who it suits"
      h1="Best Athens excursions for history lovers"
      subtitle="Athens is the birthplace of Western civilisation — for history lovers on a cruise day, these are the excursions that go deepest, from the Acropolis to Delphi, ideally with an expert guide."
      heroImage={HERO_IMAGES.parthenon.src}
      heroImageAlt={HERO_IMAGES.parthenon.alt}
      snapshotIntro="Few ports reward a history lover like Piraeus. From the Parthenon to the birthplace of democracy in the Agora, and out to Corinth and Delphi, the depth here is unmatched. A licensed guide is the single best upgrade to your day."
      snapshotFields={{
        timeInPort: "6+ hours to do justice to the history",
        bestFor: "History, archaeology and mythology enthusiasts",
        activityLevel: "Moderate — ancient sites, uneven ground",
        familyFriendly: "Good for engaged older children",
        returnToShip: "High in the city; tighter for Delphi",
        popularTypes: "Guided archaeology tours, museum + site combos",
      }}
      returnConfidence="Moderate"
      faqs={faqs}
      relatedGuides={[
        { label: "Ancient Agora guide", href: "/ancient-agora-guide" },
        { label: "Parthenon guide for cruise passengers", href: "/parthenon-guide-for-cruise-passengers" },
        { label: "Best for first-time visitors", href: "/best-athens-excursions-for-first-time-visitors" },
      ]}
      relatedExcursions={[
        { label: "Acropolis & Parthenon", href: "/acropolis-parthenon-shore-excursion" },
        { label: "Delphi full-day tour", href: "/delphi-shore-excursion-from-athens" },
        { label: "Ancient Corinth & Canal", href: "/corinth-shore-excursion-from-athens" },
      ]}
      sections={[
        {
          title: "The essential ancient trio",
          body: (
            <p>
              Start with the{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>{" "}
              and{" "}
              <Link href="/parthenon-guide-for-cruise-passengers" className="text-blue-800 hover:underline">
                Parthenon
              </Link>
              , pair them with the{" "}
              <Link href="/acropolis-museum-from-cruise-port" className="text-blue-800 hover:underline">
                Acropolis Museum
              </Link>{" "}
              to see the original sculptures up close, and add the{" "}
              <Link href="/ancient-agora-guide" className="text-blue-800 hover:underline">
                Ancient Agora
              </Link>
              , where democracy and philosophy were born. Together they tell the story
              of classical Athens.
            </p>
          ),
        },
        {
          title: "Going deeper into the city",
          body: (
            <p>
              Add the{" "}
              <Link href="/temple-of-olympian-zeus" className="text-blue-800 hover:underline">
                Temple of Olympian Zeus
              </Link>{" "}
              and Hadrian&apos;s Arch, the Roman Agora and the Panathenaic Stadium.
              A guided{" "}
              <Link href="/athens-full-day-highlights-shore-excursion" className="text-blue-800 hover:underline">
                full-day highlights tour
              </Link>{" "}
              stitches these together with expert commentary.
            </p>
          ),
        },
        {
          title: "Beyond Athens: Corinth and Delphi",
          body: (
            <p>
              For the truly history-hungry with a long call,{" "}
              <Link href="/corinth-shore-excursion-from-athens" className="text-blue-800 hover:underline">
                Ancient Corinth
              </Link>{" "}
              adds Greek, Roman and biblical history in one trip, while{" "}
              <Link href="/delphi-shore-excursion-from-athens" className="text-blue-800 hover:underline">
                Delphi
              </Link>{" "}
              — the sanctuary of the oracle — is one of the most atmospheric ancient
              sites in the world. Both are day trips best booked with a guaranteed
              return to Piraeus.
            </p>
          ),
        },
      ]}
    />
  );
}
