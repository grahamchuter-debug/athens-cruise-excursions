import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata, SITE_NAME } from "@/lib/site";

const path = "/terms";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use — Athens Cruise Excursions",
  description:
    "The terms governing use of the Athens Cruise Excursions website, including our information-only role and limitation of liability.",
  path,
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Terms of Use", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Terms" }]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms" }]} />
        <PageHero
          eyebrow="Legal"
          title="Terms of use"
          subtitle="Please read these terms carefully before using this website."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="About this website">
            <p>
              {SITE_NAME} is an independent information and planning resource for
              cruise passengers visiting Athens from Piraeus Cruise Port. By
              using this website you agree to these terms. If you do not agree,
              please do not use the site.
            </p>
          </GuideSection>

          <GuideSection title="Information only — no bookings">
            <p>
              This website provides guidance and enquiry handling only. We are not
              a tour operator or travel agent and we do not sell excursions or take
              payment through this site. Any excursion you book is a contract
              between you and the relevant operator, subject to their terms.
            </p>
          </GuideSection>

          <GuideSection title="Accuracy of information">
            <p>
              We work hard to keep content accurate, but distances, opening hours,
              prices, transport, weather, and cruise ship schedules can change
              without notice. Always confirm arrival and all-aboard times with your
              cruise line, and verify excursion details with the operator, before
              making decisions. Ship schedule data shown on this site is
              indicative and must be confirmed with your cruise line.
            </p>
          </GuideSection>

          <GuideSection title="Return to ship">
            <p>
              You are responsible for returning to your ship before its all-aboard
              time. We provide return-to-ship guidance in good faith, but we cannot
              be held responsible for missed departures. Independent excursions do
              not carry the return guarantee offered by ship-sold tours.
            </p>
          </GuideSection>

          <GuideSection title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, {SITE_NAME} accepts no
              liability for any loss or damage arising from use of this website or
              reliance on its content, or from any excursion booked with a
              third-party operator.
            </p>
          </GuideSection>

          <GuideSection title="External links">
            <p>
              This site may link to third-party websites for your convenience. We
              are not responsible for the content or practices of those sites.
            </p>
          </GuideSection>
        </div>
      </div>
    </>
  );
}
