import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/acropolis-museum-from-cruise-port";

const faqs = [
  {
    question: "How do I get to the Acropolis Museum from Piraeus?",
    answer:
      "The museum sits beside Acropoli metro station in central Athens, about 10–12 km from the Piraeus cruise terminals. Take the metro (around 40–55 minutes with a change), a taxi (30–45 minutes), or an organised tour. It is a 5-minute walk downhill from the Acropolis entrance.",
  },
  {
    question: "Is the Acropolis Museum worth visiting on a cruise day?",
    answer:
      "Yes — it holds the original sculptures from the Acropolis monuments, brilliantly displayed, and is fully air-conditioned. Combined with the Acropolis itself it gives the most complete understanding of the site in the time a port day allows.",
  },
  {
    question: "How long do I need in the Acropolis Museum?",
    answer:
      "Allow 60–90 minutes for the highlights, or up to two hours if you love ancient sculpture. It is smaller and more focused than many national museums, which suits a cruise schedule.",
  },
  {
    question: "Can I visit the museum without climbing the Acropolis?",
    answer:
      "Absolutely. The museum is level, with lifts, and reached directly by metro — an excellent air-conditioned option for anyone who finds the Acropolis climb or the summer heat difficult.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Acropolis Museum from Cruise Port — Athens Visitor Guide",
  description:
    "How to visit the Acropolis Museum in Athens from Piraeus Cruise Port — getting there, highlights including the Parthenon Gallery and Caryatids, timing, accessibility, and cruise-day tips.",
  path,
  image: HERO_IMAGES.museum.src,
  imageAlt: HERO_IMAGES.museum.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Acropolis Museum from Cruise Port"
      schemaTitle="Acropolis Museum from Cruise Port"
      description={metadata.description as string}
      eyebrow="Attraction guide"
      h1="Acropolis Museum from the cruise port"
      subtitle="A cruise passenger's guide to the award-winning Acropolis Museum — how to reach it from Piraeus, what to see, and why it pairs so well with the Acropolis itself."
      heroImage={HERO_IMAGES.museum.src}
      heroImageAlt={HERO_IMAGES.museum.alt}
      snapshotIntro="The Acropolis Museum houses the original sculptures from the Acropolis in a stunning modern building beside Acropoli metro station. It is central, air-conditioned and level — an easy, rewarding stop on any Athens port day, ideally paired with the rock itself."
      snapshotFields={{
        timeInPort: "4+ hours (museum only); 5+ with the Acropolis",
        bestFor: "Art and history lovers, hot-day comfort, accessibility",
        activityLevel: "Easy — level galleries with lifts",
        familyFriendly: "Good — engaging with a guide",
        returnToShip: "High — central and quick to reach",
        popularTypes: "Museum visits, Acropolis + Museum combos",
      }}
      returnConfidence="High"
      returnNote="Central and beside a metro station, the museum keeps a reliable return margin to Piraeus. Even so, leave 60–90 minutes for the journey back to the ship."
      faqs={faqs}
      relatedGuides={[
        { label: "Acropolis from Piraeus Cruise Port", href: "/acropolis-from-piraeus-cruise-port" },
        { label: "Parthenon guide for cruise passengers", href: "/parthenon-guide-for-cruise-passengers" },
        { label: "Plaka from Piraeus Cruise Port", href: "/plaka-from-piraeus-cruise-port" },
      ]}
      relatedExcursions={[
        { label: "Acropolis Museum & Acropolis", href: "/acropolis-museum-shore-excursion" },
      ]}
      needHelpExcursion="acropolis-museum-shore-excursion"
      sections={[
        {
          title: "A museum built for the Acropolis",
          body: (
            <p>
              Opened in 2009 at the southern foot of the Acropolis, the Acropolis
              Museum was designed by Bernard Tschumi specifically to display the
              sculptures of the sacred rock. Glass floors reveal the excavated
              ancient neighbourhood beneath your feet, and the whole building is
              oriented towards the Parthenon on the hill above. It is regularly rated
              among the finest museums in the world.
            </p>
          ),
        },
        {
          title: "The highlights",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>
                The top-floor <strong>Parthenon Gallery</strong>, where the frieze
                and metopes are mounted at their original height and orientation,
                with the temple itself visible through floor-to-ceiling glass
              </li>
              <li>The original <strong>Caryatids</strong> from the Erechtheion (replicas stand on the rock)</li>
              <li>Archaic <em>korai</em> and <em>kouroi</em> statues, and the Kritios Boy</li>
              <li>Glass floors over the live archaeological excavation below</li>
            </ul>
          ),
        },
        {
          title: "Getting there and timing",
          body: (
            <p>
              The museum entrance is beside Acropoli metro station, reachable from
              Piraeus in around 40–55 minutes by metro or 30–45 minutes by taxi. If
              you are also visiting the{" "}
              <Link href="/acropolis-from-piraeus-cruise-port" className="text-blue-800 hover:underline">
                Acropolis
              </Link>
              , do the open-air site first thing while it is cool, then descend to the
              air-conditioned museum afterwards — a five-minute walk downhill.
            </p>
          ),
        },
        {
          title: "Why it completes the Acropolis",
          body: (
            <p>
              Standing on the Acropolis, you see the architecture; in the museum, you
              meet the art that filled it. Seeing the frieze at eye level, aligned
              with the Parthenon through the glass, transforms your understanding of
              what you walked around above. For cruise passengers short on time, the{" "}
              <Link href="/acropolis-museum-shore-excursion" className="text-blue-800 hover:underline">
                combined Acropolis and Museum excursion
              </Link>{" "}
              is the most efficient way to experience both.
            </p>
          ),
        },
      ]}
    />
  );
}
