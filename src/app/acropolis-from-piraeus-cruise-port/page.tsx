import type { Metadata } from "next";
import Link from "next/link";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/acropolis-from-piraeus-cruise-port";

const faqs = [
  {
    question: "How do I get to the Acropolis from Piraeus Cruise Port?",
    answer:
      "The Acropolis is about 10–12 km from the Piraeus cruise terminals. Take a taxi (30–45 minutes), the metro (around 40–55 minutes with a short walk), or an organised excursion with coach transfer and skip-the-line entry. Independent visitors should buy tickets online in advance.",
  },
  {
    question: "How long do I need at the Acropolis on a cruise day?",
    answer:
      "Allow about two hours on the rock itself, plus 60–90 minutes of transfer each way from Piraeus. That means roughly five hours ashore is a comfortable minimum for a relaxed visit.",
  },
  {
    question: "Is the Acropolis suitable for older or less mobile visitors?",
    answer:
      "The main path is a steady uphill climb on worn, slippery marble with steps near the top. Reasonably mobile visitors manage it slowly. A wheelchair lift is available but must be arranged in advance, and conditions can limit its use.",
  },
  {
    question: "Should I visit the Acropolis early or late in the day?",
    answer:
      "Early is best — it is cooler, the light is beautiful, and the crowds and cruise groups build through the morning. In summer the site can close during extreme afternoon heat, so an early visit is safest on a port day.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Acropolis from Piraeus Cruise Port — Cruise Passenger Guide",
  description:
    "How to visit the Acropolis of Athens from Piraeus Cruise Port — getting there by metro, taxi or tour, tickets, timing, the climb, accessibility, and return-to-ship advice for cruise passengers.",
  path,
  image: HERO_IMAGES.acropolis.src,
  imageAlt: HERO_IMAGES.acropolis.alt,
});

export default function Page() {
  return (
    <GuidePageLayout
      path={path}
      breadcrumbName="Acropolis from Piraeus Cruise Port"
      schemaTitle="Acropolis from Piraeus Cruise Port"
      description={metadata.description as string}
      eyebrow="Attraction guide"
      h1="Acropolis from Piraeus Cruise Port"
      subtitle="The complete cruise-passenger guide to visiting the Acropolis of Athens from your ship at Piraeus — how to get there, tickets, timing, the climb, and getting back on time."
      heroImage={HERO_IMAGES.acropolis.src}
      heroImageAlt={HERO_IMAGES.acropolis.alt}
      snapshotIntro="The Acropolis is the one sight almost every cruise passenger wants from an Athens call. It is 10–12 km from Piraeus, reliably reachable by metro, taxi or tour, and needs about two hours on site plus transfers. Go early to beat the heat and the crowds."
      snapshotFields={{
        timeInPort: "5+ hours for a relaxed visit",
        bestFor: "First-timers, history lovers, icon-seekers",
        activityLevel: "Moderate — uphill climb on slippery marble",
        familyFriendly: "Good — dramatic for older children",
        returnToShip: "High on organised tours; plan buffers if independent",
        popularTypes: "Guided Acropolis tours, Acropolis + Museum combos",
      }}
      returnConfidence="High"
      returnNote="A guided Acropolis coach tour is the most reliable way to see it and return to Piraeus on time. Independent visitors should set a firm turnaround and allow 60–90 minutes for the journey back to the ship."
      faqs={faqs}
      relatedGuides={[
        { label: "Parthenon guide for cruise passengers", href: "/parthenon-guide-for-cruise-passengers" },
        { label: "Acropolis Museum from the cruise port", href: "/acropolis-museum-from-cruise-port" },
        { label: "Athens metro from Piraeus", href: "/athens-metro-from-piraeus" },
        { label: "One day in Athens", href: "/one-day-in-athens-from-a-cruise-ship" },
      ]}
      relatedExcursions={[
        { label: "Acropolis & Parthenon shore excursion", href: "/acropolis-parthenon-shore-excursion" },
        { label: "Acropolis Museum & Acropolis", href: "/acropolis-museum-shore-excursion" },
      ]}
      needHelpExcursion="acropolis-parthenon-shore-excursion"
      sections={[
        {
          title: "Why the Acropolis is the priority",
          body: (
            <p>
              The Acropolis — the &ldquo;high city&rdquo; — is the sacred limestone
              hill at the heart of Athens, crowned by the 5th-century BC Parthenon
              and surrounded by the Erechtheion, the Temple of Athena Nike and the
              monumental Propylaea gateway. It is the defining image of classical
              Greece and, for a cruise passenger, the single most important reason
              to head into Athens from Piraeus. If you do only one thing on your
              port day, make it this.
            </p>
          ),
        },
        {
          title: "Getting there from the cruise port",
          body: (
            <>
              <p>
                From the Piraeus cruise terminals the Acropolis is about 10–12 km.
                A <strong>taxi</strong> is the quickest option when traffic is
                light (30–45 minutes) and drops you near the entrance. The{" "}
                <Link href="/athens-metro-from-piraeus" className="text-blue-800 hover:underline">
                  metro
                </Link>{" "}
                is inexpensive and avoids traffic, taking around 40–55 minutes
                including the short walk up from Acropoli or Monastiraki stations.
              </p>
              <p>
                Many passengers choose an{" "}
                <Link href="/acropolis-parthenon-shore-excursion" className="text-blue-800 hover:underline">
                  organised Acropolis excursion
                </Link>{" "}
                for the peace of mind of a guided visit, skip-the-line tickets, and
                a coach that returns them to the ship on schedule.
              </p>
            </>
          ),
        },
        {
          title: "Tickets, timing and the climb",
          body: (
            <p>
              Independent visitors should buy timed tickets online in advance to
              avoid long queues; a combined ticket covers several ancient sites. The
              climb to the summit takes 10–15 minutes on paths and polished marble
              that is genuinely slippery — wear shoes with good grip. Aim to arrive
              at opening time: it is cooler, quieter, and safest against your
              all-aboard deadline, and the site can close in extreme summer heat.
            </p>
          ),
        },
        {
          title: "What you'll see on the rock",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>The Parthenon, the temple of Athena and symbol of the city</li>
              <li>The Erechtheion with its famous Porch of the Caryatids</li>
              <li>The Propylaea gateway and the small Temple of Athena Nike</li>
              <li>Sweeping views over Athens, Lycabettus Hill and out to Piraeus and the sea</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
