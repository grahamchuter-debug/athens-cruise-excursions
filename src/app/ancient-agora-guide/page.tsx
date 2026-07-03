import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/ancient-agora-guide";

const faqs = [
  {
    question: "Where is the Ancient Agora in Athens?",
    answer:
      "The Ancient Agora lies between the Acropolis and the Monastiraki/Plaka area, a short walk downhill from the Acropolis. It's about 10 km from Piraeus Cruise Port, reachable by metro to Monastiraki or Thissio, or by taxi.",
  },
  {
    question: "Is the Ancient Agora worth visiting on a cruise day?",
    answer:
      "Yes, especially for history lovers. It's where Athenian democracy and daily life happened, and it includes the beautifully preserved Temple of Hephaestus and the reconstructed Stoa of Attalos museum. It combines easily with the Acropolis and Plaka.",
  },
  {
    question: "How long do I need at the Ancient Agora?",
    answer:
      "Around 60–90 minutes covers the Temple of Hephaestus, the Stoa of Attalos museum and the main ruins at a relaxed pace.",
  },
  {
    question: "Is the Agora covered by the combined Acropolis ticket?",
    answer:
      "Yes — the multi-site combined ticket that includes the Acropolis also covers the Ancient Agora and several other central sites, which is good value if you plan to see more than one.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Ancient Agora of Athens Guide for Cruise Passengers",
  description:
    "A guide to the Ancient Agora of Athens for cruise passengers — the birthplace of democracy, the Temple of Hephaestus, the Stoa of Attalos, how to get there from Piraeus, and timing.",
  path,
  image: HERO_IMAGES.agora.src,
  imageAlt: HERO_IMAGES.agora.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Ancient Agora Guide"
      schemaTitle="Ancient Agora of Athens Guide"
      description={metadata.description as string}
      eyebrow="Attraction guide"
      h1="Ancient Agora of Athens guide"
      subtitle="The marketplace where democracy was born — how to visit the Ancient Agora from Piraeus, what to see, and how it fits alongside the Acropolis and Plaka."
      heroImage={HERO_IMAGES.agora.src}
      heroImageAlt={HERO_IMAGES.agora.alt}
      snapshotIntro="The Ancient Agora was the civic, commercial and social heart of classical Athens — where citizens debated, traded and shaped democracy. Downhill from the Acropolis and beside Plaka, it's an easy, rewarding add-on for history-minded cruise passengers."
      snapshotFields={{
        timeInPort: "5+ hours to combine with the Acropolis",
        bestFor: "History lovers, democracy and philosophy fans",
        activityLevel: "Easy to moderate — level paths, some uneven ground",
        familyFriendly: "Good with a guide",
        returnToShip: "High — central location",
        popularTypes: "Guided history tours, combined-ticket visits",
      }}
      returnConfidence="High"
      returnNote="The Agora is central and close to metro stations at Monastiraki and Thissio, so it keeps a reliable return margin to Piraeus."
      faqs={faqs}
      relatedGuides={[
        { label: "Acropolis from Piraeus Cruise Port", href: "/acropolis-from-piraeus-cruise-port" },
        { label: "Plaka from Piraeus Cruise Port", href: "/plaka-from-piraeus-cruise-port" },
        { label: "Best things to do in Athens", href: "/best-things-to-do-in-athens-from-a-cruise-ship" },
      ]}
      relatedExcursions={[
        { label: "Athens city highlights", href: "/athens-city-highlights-shore-excursion" },
        { label: "Athens full-day highlights", href: "/athens-full-day-highlights-shore-excursion" },
      ]}
      sections={[
        {
          title: "Where democracy happened",
          body: (
            <p>
              The Agora was the beating heart of ancient Athens — not just a
              marketplace but the setting for politics, law, philosophy and daily
              life. Socrates questioned passers-by here; citizens gathered to vote and
              serve on juries. Walking its paths, you tread the same ground as the
              people who invented Western democracy, with the Acropolis rising
              directly above.
            </p>
          ),
        },
        {
          title: "The must-see monuments",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>
                The <strong>Temple of Hephaestus</strong> — the best-preserved ancient
                Greek temple anywhere, its Doric colonnade almost intact
              </li>
              <li>
                The reconstructed <strong>Stoa of Attalos</strong>, now a museum of
                finds from the Agora
              </li>
              <li>The scattered ruins of council houses, temples and civic buildings</li>
              <li>The Byzantine Church of the Holy Apostles</li>
            </ul>
          ),
        },
        {
          title: "Getting there and combining your day",
          body: (
            <p>
              From Piraeus, take the{" "}
              <Link href="/athens-metro-from-piraeus" className="text-blue-800 hover:underline">
                metro
              </Link>{" "}
              to Monastiraki or Thissio, both a short walk from the Agora entrances.
              Because it sits between the{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>{" "}
              and{" "}
              <Link href="/plaka-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Plaka
              </Link>
              , the Agora slots perfectly into a walking loop of central Athens on a
              longer port call.
            </p>
          ),
        },
      ]}
    />
  );
}
