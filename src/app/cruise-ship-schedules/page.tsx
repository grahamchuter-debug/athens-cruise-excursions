import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { ScheduleHubView } from "@/components/ScheduleHubView";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";
import { getScheduleEntryCount } from "@/lib/schedule";

const path = "/cruise-ship-schedules";

const faqs = [
  {
    question: "How accurate are these Piraeus cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times and vessels can change, so always confirm your ship's exact arrival and all-aboard times with your cruise line before booking excursions.",
  },
  {
    question: "How many ships visit Piraeus on a typical day?",
    answer:
      "Piraeus is one of the busiest cruise ports in the Mediterranean. In peak season (May–October) several ships can be in port on the same day, which affects crowds at the Acropolis and popular excursions — checking the schedule helps you plan and book early.",
  },
  {
    question: "When is the Athens cruise season at Piraeus?",
    answer:
      "The main season runs from April to October and peaks in summer. A handful of ships call in the shoulder months, with very few in winter.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Piraeus Cruise Ship Schedule 2026 & 2027 (Athens)",
  description:
    "Piraeus (Athens) cruise ship schedule for 2026 and 2027 — see which ships are in port by year and month, with arrival and departure times, to plan your Athens shore excursions.",
  path,
  image: HERO_IMAGES.port.src,
  imageAlt: HERO_IMAGES.port.alt,
});

export default function ScheduleHubPage() {
  const count = getScheduleEntryCount();
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Cruise Ship Schedules" },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Piraeus Cruise Ship Schedule (Athens)",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={breadcrumbs} />
        <PageHero
          eyebrow="Planning hub"
          title="Piraeus cruise ship schedule"
          subtitle="See which ships call at Piraeus, the cruise port for Athens, by year and month — then plan your shore excursions around your port day."
          imageSrc={HERO_IMAGES.port.src}
          imageAlt={HERO_IMAGES.port.alt}
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Which ships are in port?">
            <p>
              Piraeus is the largest passenger port in Europe and a major
              Mediterranean cruise hub. Knowing how many ships share your port
              day helps you time your Acropolis visit, anticipate crowds, and
              book popular independent excursions before they fill.{" "}
              {count > 0
                ? `We currently list ${count} scheduled calls across 2026 and 2027.`
                : "Verified calls are being imported."}
            </p>
            <p>
              Always confirm your ship&apos;s exact arrival and all-aboard times
              with your cruise line — see our{" "}
              <Link href="/piraeus-cruise-port-guide" className="text-blue-800 hover:underline">
                Piraeus port guide
              </Link>{" "}
              and{" "}
              <Link href="/athens-cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to turn your hours ashore into an excursion plan.
            </p>
          </GuideSection>

          <ScheduleHubView />

          <ReturnToShipBlock confidence="Moderate" note="However quiet or busy the port, set a personal turnaround 60–90 minutes before all-aboard — more for long day trips to Cape Sounion, Corinth or Delphi, and always allow for the transfer back to Piraeus." />
          <FAQSection faqs={faqs} title="Schedule FAQs" />
          <GuideRelatedLinks
            guides={[{ label: "Piraeus port guide", href: "/piraeus-cruise-port-guide" }]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
