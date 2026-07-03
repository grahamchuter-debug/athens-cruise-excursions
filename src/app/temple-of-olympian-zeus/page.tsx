import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/temple-of-olympian-zeus";

const faqs = [
  {
    question: "How do I get to the Temple of Olympian Zeus from Piraeus?",
    answer:
      "The temple is in central Athens near Syntagma and Plaka, about 10 km from the cruise port. Take the metro to Akropoli or Syntagma station (roughly 30–45 minutes) and walk, or take a taxi. It sits beside Hadrian's Arch.",
  },
  {
    question: "How long do I need at the Temple of Olympian Zeus?",
    answer:
      "About 30–45 minutes is enough to walk around the columns and photograph Hadrian's Arch nearby. It's often combined with the Acropolis, Plaka and Syntagma on a city tour.",
  },
  {
    question: "Is the Temple of Olympian Zeus included in the combined ticket?",
    answer:
      "Yes — the multi-site combined ticket that includes the Acropolis also covers the Temple of Olympian Zeus, making it good value if you're visiting several central sites.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Temple of Olympian Zeus — Athens Cruise Passenger Guide",
  description:
    "Visit the Temple of Olympian Zeus in Athens from Piraeus Cruise Port — its giant columns, Hadrian's Arch, how to get there, timing, and how it fits a cruise port day.",
  path,
  image: HERO_IMAGES.zeus.src,
  imageAlt: HERO_IMAGES.zeus.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Temple of Olympian Zeus"
      schemaTitle="Temple of Olympian Zeus"
      description={metadata.description as string}
      eyebrow="Attraction guide"
      h1="Temple of Olympian Zeus"
      subtitle="Once the largest temple in Greece — how to see its towering columns and Hadrian's Arch from Piraeus, and combine them with central Athens on a port day."
      heroImage={HERO_IMAGES.zeus.src}
      heroImageAlt={HERO_IMAGES.zeus.alt}
      snapshotIntro="The Temple of Olympian Zeus is a quick but striking stop — a cluster of colossal Corinthian columns beside Hadrian's Arch, in central Athens near Syntagma and Plaka. It's easy to fold into a city walk or tour rather than a destination in itself."
      snapshotFields={{
        timeInPort: "4+ hours as part of a city visit",
        bestFor: "History lovers, photographers, quick central stops",
        activityLevel: "Easy — flat, open site",
        familyFriendly: "Good — dramatic scale, short visit",
        returnToShip: "High — central and quick",
        popularTypes: "City tours, combined-ticket visits",
      }}
      returnConfidence="High"
      returnNote="A short, central, level visit, so it adds little timing risk to a port day. Combine it with nearby sights and keep your usual buffer back to Piraeus."
      faqs={faqs}
      relatedGuides={[
        { label: "Syntagma Square & changing of the guard", href: "/syntagma-square-changing-of-the-guard" },
        { label: "Plaka from Piraeus Cruise Port", href: "/plaka-from-piraeus-cruise-port" },
        { label: "Acropolis from Piraeus Cruise Port", href: "/acropolis-from-piraeus-cruise-port" },
      ]}
      relatedExcursions={[
        { label: "Athens city highlights", href: "/athens-city-highlights-shore-excursion" },
        { label: "Athens full-day highlights", href: "/athens-full-day-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "A temple 700 years in the making",
          body: (
            <p>
              Begun in the 6th century BC and finally completed by the Roman emperor
              Hadrian around AD 131, the Temple of Olympian Zeus took some 700 years
              to build. In its prime it was the largest temple in Greece, with 104
              colossal Corinthian columns. Fifteen still stand today, with a
              sixteenth lying where it fell in a storm in 1852 — and even in ruin, the
              scale is astonishing.
            </p>
          ),
        },
        {
          title: "Hadrian's Arch next door",
          body: (
            <p>
              Right beside the temple stands <strong>Hadrian&apos;s Arch</strong>, a
              monumental gateway erected to mark the boundary between the old city of
              Theseus and the new Roman city of Hadrian. It&apos;s one of Athens&apos;
              most photographed monuments, framed against the Acropolis behind — a
              perfect quick photo stop.
            </p>
          ),
        },
        {
          title: "Fitting it into your port day",
          body: (
            <p>
              The site is central, near Syntagma and Plaka and a short walk from
              Akropoli metro station. Reach it from Piraeus via the{" "}
              <Link href="/athens-metro-from-piraeus" className="text-blue-800 hover:underline">
                metro
              </Link>{" "}
              in around 30–45 minutes. Because a visit takes just 30–45 minutes, it
              works best as one stop on a wider loop that includes the{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>
              ,{" "}
              <Link href="/syntagma-square-changing-of-the-guard" className="text-blue-800 hover:underline">
                Syntagma
              </Link>{" "}
              and{" "}
              <Link href="/plaka-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Plaka
              </Link>
              , or a guided city tour.
            </p>
          ),
        },
      ]}
    />
  );
}
