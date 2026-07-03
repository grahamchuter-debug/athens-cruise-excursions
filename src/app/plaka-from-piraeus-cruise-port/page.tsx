import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/plaka-from-piraeus-cruise-port";

const faqs = [
  {
    question: "How do I get to Plaka from Piraeus Cruise Port?",
    answer:
      "Plaka lies below the Acropolis in central Athens, about 10 km from the cruise terminals. The easiest independent route is the metro to Monastiraki (around 40 minutes), then a short walk. Taxis take 30–40 minutes depending on traffic.",
  },
  {
    question: "Is Plaka worth visiting on a cruise day?",
    answer:
      "Yes — Plaka is the atmospheric old heart of Athens, ideal for a relaxed stroll, lunch and shopping, and it sits right beneath the Acropolis. It pairs perfectly with a morning on the rock.",
  },
  {
    question: "Is Plaka easy to walk around?",
    answer:
      "Plaka is largely flat and pedestrian-friendly, though some lanes are cobbled and gently sloping towards the Acropolis. It is one of the least strenuous parts of central Athens to explore.",
  },
  {
    question: "What should I do in Plaka?",
    answer:
      "Wander the neoclassical lanes, browse craft and souvenir shops, eat at a traditional taverna, visit the tiny Anafiotika quarter, and enjoy views up to the Acropolis. A guided food walk adds tastings and local context.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Plaka from Piraeus Cruise Port — Athens Old Town Guide",
  description:
    "Visit Plaka, the old town of Athens, from Piraeus Cruise Port — how to get there, what to see and eat, the Anafiotika quarter, and how it fits a cruise port day beneath the Acropolis.",
  path,
  image: HERO_IMAGES.plaka.src,
  imageAlt: HERO_IMAGES.plaka.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Plaka from Piraeus Cruise Port"
      schemaTitle="Plaka from Piraeus Cruise Port"
      description={metadata.description as string}
      eyebrow="Neighbourhood guide"
      h1="Plaka from Piraeus Cruise Port"
      subtitle="The old town of Athens on a cruise day — how to reach Plaka from Piraeus, what to see and eat, and why it's the perfect relaxed complement to the Acropolis."
      heroImage={HERO_IMAGES.plaka.src}
      heroImageAlt={HERO_IMAGES.plaka.alt}
      snapshotIntro="Plaka is the oldest neighbourhood of Athens — a flat, atmospheric maze of neoclassical houses, tavernas and shops directly below the Acropolis. Central, easy and shaded, it's a low-stress choice for a port day, alone or paired with the rock above."
      snapshotFields={{
        timeInPort: "4+ hours is comfortable",
        bestFor: "Food, strolling, shopping, gentle sightseeing",
        activityLevel: "Easy — flat lanes, some cobbles",
        familyFriendly: "Excellent",
        returnToShip: "High — central and low-intensity",
        popularTypes: "Food tours, walking tours, self-guided strolls",
      }}
      returnConfidence="High"
      returnNote="Plaka is central and low-intensity, so it keeps an easy return margin. Allow 60–90 minutes to get back to Piraeus and you'll have a relaxed day."
      faqs={faqs}
      relatedGuides={[
        { label: "Ancient Agora guide", href: "/ancient-agora-guide" },
        { label: "Syntagma Square & changing of the guard", href: "/syntagma-square-changing-of-the-guard" },
        { label: "Acropolis from Piraeus Cruise Port", href: "/acropolis-from-piraeus-cruise-port" },
      ]}
      relatedExcursions={[
        { label: "Plaka Old Town & food walk", href: "/plaka-food-walking-shore-excursion" },
        { label: "Athens city highlights", href: "/athens-city-highlights-shore-excursion" },
      ]}
      needHelpExcursion="plaka-food-walking-shore-excursion"
      sections={[
        {
          title: "The old heart of Athens",
          body: (
            <p>
              Plaka is the oldest continuously inhabited district in Athens, spread
              across the northern and eastern slopes of the Acropolis. Its narrow,
              largely traffic-free lanes are lined with neoclassical houses,
              bougainvillea, family tavernas, and shops selling leather, jewellery,
              olive-wood and ceramics. After the grandeur of the ancient monuments,
              Plaka is Athens at a human, everyday scale — and a joy to wander.
            </p>
          ),
        },
        {
          title: "Getting there from Piraeus",
          body: (
            <p>
              Take the{" "}
              <Link href="/athens-metro-from-piraeus" className="text-blue-800 hover:underline">
                metro
              </Link>{" "}
              to Monastiraki (about 40 minutes), which sits on the edge of Plaka, or
              a{" "}
              <Link href="/taxi-guide-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                taxi
              </Link>{" "}
              (30–40 minutes). Because Plaka is next to the Acropolis and the{" "}
              <Link href="/ancient-agora-guide" className="text-blue-800 hover:underline">
                Ancient Agora
              </Link>
              , it slots naturally into a combined day of sightseeing.
            </p>
          ),
        },
        {
          title: "What to see and do",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>The tiny, whitewashed <strong>Anafiotika</strong> quarter, like a Cycladic island village clinging to the rock</li>
              <li>Traditional tavernas and cafés for a long Greek lunch</li>
              <li>Craft, jewellery and souvenir shopping</li>
              <li>Views up to the Acropolis and across to the Temple of Hephaestus</li>
              <li>The buzz of neighbouring Monastiraki square and flea market</li>
            </ul>
          ),
        },
        {
          title: "A food walk through Plaka",
          body: (
            <p>
              Plaka and the nearby central market are perfect for a guided{" "}
              <Link href="/plaka-food-walking-shore-excursion" className="text-blue-800 hover:underline">
                food walking tour
              </Link>
              , tasting Greek coffee, souvlaki, cheeses, olives and honey while a
              guide explains the city&apos;s food and history. It&apos;s a relaxed,
              flavourful alternative to a big climb — or a perfect afternoon after a
              morning on the Acropolis.
            </p>
          ),
        },
      ]}
    />
  );
}
