import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/about";

export const metadata: Metadata = pageMetadata({
  title: "About Athens Cruise Excursions",
  description:
    "About Athens Cruise Excursions — an independent planning resource helping cruise passengers make the most of a day ashore in Athens from Piraeus Cruise Port.",
  path,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "About", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About" }]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
        <PageHero
          eyebrow="About us"
          title="About Athens Cruise Excursions"
          subtitle="An independent planning resource built specifically for cruise passengers spending a day ashore in Athens, arriving via Piraeus Cruise Port."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="What we do">
            <p>
              Athens Cruise Excursions is an independent guide to spending a
              cruise port day in Athens. Ships dock at Piraeus, the port gateway
              a short distance from the city, and we help passengers understand
              what is realistic in the hours they have ashore — from the
              Acropolis and the Acropolis Museum to Plaka, and day trips to Cape
              Sounion, Corinth and Delphi.
            </p>
            <p>
              We are not a cruise line and we do not sell a single fixed
              programme. Our goal is to give clear, honest, practical information
              so you can choose the right excursion for your interests, mobility,
              and all-aboard time — and get back to your ship at Piraeus with
              confidence.
            </p>
          </GuideSection>

          <GuideSection title="Why independent guidance matters">
            <p>
              Ship-sold tours are convenient and carry a return-to-ship
              guarantee, but they are often larger, busier, and more expensive
              than independent alternatives. Local operators can offer smaller
              groups, more flexibility, and better value — provided you plan
              sensibly around the transfer from Piraeus and your port timing. We
              explain the trade-offs so you can decide what suits you, including
              our guide to{" "}
              <Link href="/independent-vs-cruise-line-excursions" className="text-blue-800 hover:underline">
                independent vs cruise line excursions
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="How we make recommendations">
            <p>
              Every excursion on this site is assessed for duration, transfer
              time from Piraeus, activity level, family suitability, and
              return-to-ship confidence. We are upfront when a trip is only
              realistic on a long port call, or when heat and distance can affect
              a plan. Where you book is your choice — we simply help you plan
              well.
            </p>
          </GuideSection>

          <GuideSection title="Enquiries">
            <p>
              This site is currently enquiry-only, with no online checkout. If
              you would like tailored suggestions for your sailing, use the{" "}
              <Link href="/enquire" className="text-blue-800 hover:underline">
                enquiry form
              </Link>{" "}
              with your ship, Piraeus port date, and hours ashore.
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Piraeus cruise port guide", href: "/piraeus-cruise-port-guide" },
              { label: "Best things to do in Athens", href: "/best-things-to-do-in-athens-from-a-cruise-ship" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
