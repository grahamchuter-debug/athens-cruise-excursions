import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/best-things-to-do-in-athens-from-a-cruise-ship";

const faqs = [
  {
    question: "What is the best thing to do in Athens on a cruise day?",
    answer:
      "The Acropolis and Parthenon are the top priority, ideally paired with the Acropolis Museum. If you've seen them before, consider Cape Sounion, Ancient Corinth, or a Plaka food walk instead.",
  },
  {
    question: "What can I realistically do in Athens from a cruise ship?",
    answer:
      "On a typical 8–11 hour call you can comfortably see the Acropolis, the Acropolis Museum, and central Athens including Plaka and Syntagma. Long day trips like Delphi need a full day; Cape Sounion and Corinth need six hours or more.",
  },
  {
    question: "Is it better to do a tour or explore Athens independently?",
    answer:
      "Both work. Independent travel by metro is cheap and flexible; an organised tour offers skip-the-line entry, a guide, and a guaranteed return to Piraeus. See our independent vs cruise line comparison to decide.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Things to Do in Athens from a Cruise Ship",
  description:
    "The best things to do in Athens on a cruise day from Piraeus — ranked by port time and return-to-ship confidence, from the Acropolis and its museum to Plaka, Cape Sounion, Corinth and Delphi.",
  path,
  image: HERO_IMAGES.athens.src,
  imageAlt: HERO_IMAGES.athens.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Best Things to Do in Athens from a Cruise Ship"
      schemaTitle="Best Things to Do in Athens from a Cruise Ship"
      description={metadata.description as string}
      eyebrow="Planning guide"
      h1="Best things to do in Athens from a cruise ship"
      subtitle="The top Athens experiences for cruise passengers docking at Piraeus — ranked by how much port time they need and how confidently you'll get back to the ship."
      heroImage={HERO_IMAGES.athens.src}
      heroImageAlt={HERO_IMAGES.athens.alt}
      snapshotIntro="With a typical Piraeus call of 8–11 hours you can do a great deal — but priorities depend on your hours ashore and whether you've been before. Start close and reliable (the Acropolis and its museum) and add day trips only when time allows."
      returnConfidence="Moderate"
      returnNote="Central Athens sights keep an easy return margin; day trips to Sounion, Corinth and Delphi need larger buffers and are best booked as organised excursions."
      faqs={faqs}
      relatedGuides={[
        { label: "One day in Athens", href: "/one-day-in-athens-from-a-cruise-ship" },
        { label: "Athens cruise planner", href: "/athens-cruise-planner" },
        { label: "Best for first-time visitors", href: "/best-athens-excursions-for-first-time-visitors" },
      ]}
      relatedExcursions={[
        { label: "Acropolis & Parthenon", href: "/acropolis-parthenon-shore-excursion" },
        { label: "Cape Sounion & Temple of Poseidon", href: "/cape-sounion-shore-excursion" },
      ]}
      sections={[
        {
          title: "1. The Acropolis and Parthenon",
          body: (
            <p>
              The unmissable one. The{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>{" "}
              and its{" "}
              <Link href="/parthenon-guide-for-cruise-passengers" className="text-blue-800 hover:underline">
                Parthenon
              </Link>{" "}
              define Athens and reward every visitor. Go early, wear grippy shoes, and
              consider a guided tour for context and skip-the-line entry. Return
              confidence: high.
            </p>
          ),
        },
        {
          title: "2. The Acropolis Museum",
          body: (
            <p>
              The perfect companion to the rock — the original sculptures, the
              Parthenon Gallery, and blissful air-conditioning. Central, level and
              easy. See the{" "}
              <Link href="/acropolis-museum-from-cruise-port" className="text-blue-800 hover:underline">
                museum guide
              </Link>
              . Return confidence: high.
            </p>
          ),
        },
        {
          title: "3. Plaka, the Agora and central Athens",
          body: (
            <p>
              Wander{" "}
              <Link href="/plaka-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Plaka
              </Link>
              , explore the{" "}
              <Link href="/ancient-agora-guide" className="text-blue-800 hover:underline">
                Ancient Agora
              </Link>
              , catch the guard change at{" "}
              <Link href="/syntagma-square-changing-of-the-guard" className="text-blue-800 hover:underline">
                Syntagma
              </Link>
              , and see the{" "}
              <Link href="/temple-of-olympian-zeus" className="text-blue-800 hover:underline">
                Temple of Olympian Zeus
              </Link>
              . All central and low-risk. Return confidence: high.
            </p>
          ),
        },
        {
          title: "4. Cape Sounion (half day)",
          body: (
            <p>
              A scenic coastal drive to the cliff-top{" "}
              <Link href="/cape-sounion-shore-excursion" className="text-blue-800 hover:underline">
                Temple of Poseidon
              </Link>
              . Best on calls of six hours or more. Return confidence: moderate.
            </p>
          ),
        },
        {
          title: "5. Ancient Corinth and the Corinth Canal",
          body: (
            <p>
              Cross into the Peloponnese for the astonishing{" "}
              <Link href="/corinth-shore-excursion-from-athens" className="text-blue-800 hover:underline">
                canal and Ancient Corinth
              </Link>
              , with its links to St Paul. Six hours or more recommended. Return
              confidence: moderate.
            </p>
          ),
        },
        {
          title: "6. Delphi (full day only)",
          body: (
            <p>
              The mountain sanctuary of the oracle is spectacular but far —{" "}
              <Link href="/delphi-shore-excursion-from-athens" className="text-blue-800 hover:underline">
                Delphi
              </Link>{" "}
              is only realistic on a very long call, and only with an operator who
              guarantees your return. Return confidence: tight.
            </p>
          ),
        },
      ]}
    />
  );
}
