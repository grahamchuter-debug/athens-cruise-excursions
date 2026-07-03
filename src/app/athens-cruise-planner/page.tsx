import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePlanner } from "@/components/CruisePlanner";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/athens-cruise-planner";

export const metadata: Metadata = pageMetadata({
  title: "Athens Cruise Planner — Excursions by Time, Mobility & Interests",
  description:
    "Interactive Athens cruise planner for Piraeus port days — match shore excursions to your hours ashore, mobility, interests, group type and return-to-ship confidence.",
  path,
});

export default function CruisePlannerPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Athens Cruise Planner" },
  ];
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Athens Cruise Planner",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={breadcrumbs} />
        <PageHero
          eyebrow="Interactive planner"
          title="Athens cruise planner"
          subtitle="Tell us your hours ashore at Piraeus, your mobility, interests, who's travelling and how much return-to-ship buffer you want — and see excursions matched to your port day."
        />

        <div className="mt-10 space-y-10">
          <CruisePlanner />
          <ReturnToShipBlock />
          <GuideRelatedLinks
            guides={[
              { label: "One day in Athens", href: "/one-day-in-athens-from-a-cruise-ship" },
              { label: "Best things to do in Athens", href: "/best-things-to-do-in-athens-from-a-cruise-ship" },
              { label: "Independent vs cruise line excursions", href: "/independent-vs-cruise-line-excursions" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
