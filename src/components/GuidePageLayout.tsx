import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import type { CruiseSnapshotFields, ReturnConfidence } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

type LinkItem = { label: string; href: string };

export type GuidePageLayoutProps = {
  path: string;
  breadcrumbName: string;
  schemaTitle: string;
  description: string;
  h1: string;
  eyebrow?: string;
  subtitle: string;
  heroImage?: string;
  heroImageAlt?: string;
  snapshotIntro?: string;
  snapshotFields?: CruiseSnapshotFields;
  sections: { title: string; body: ReactNode }[];
  returnConfidence?: ReturnConfidence;
  returnNote?: string;
  faqs: { question: string; answer: string }[];
  relatedGuides?: LinkItem[];
  relatedExcursions?: LinkItem[];
  needHelpExcursion?: string;
};

export function GuidePageLayout({
  path,
  breadcrumbName,
  schemaTitle,
  description,
  h1,
  eyebrow,
  subtitle,
  heroImage,
  heroImageAlt,
  snapshotIntro,
  snapshotFields,
  sections,
  returnConfidence = "Moderate",
  returnNote,
  faqs,
  relatedGuides = [],
  relatedExcursions = [],
  needHelpExcursion,
}: GuidePageLayoutProps) {
  const breadcrumbs = [{ name: "Home", href: "/" }, { name: breadcrumbName }];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: schemaTitle, description, path }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={breadcrumbs} />
        <PageHero
          eyebrow={eyebrow}
          title={h1}
          subtitle={subtitle}
          imageSrc={heroImage}
          imageAlt={heroImageAlt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot intro={snapshotIntro} fields={snapshotFields} />

          {sections.map((section) => (
            <GuideSection key={section.title} title={section.title}>
              {section.body}
            </GuideSection>
          ))}

          <ReturnToShipBlock confidence={returnConfidence} note={returnNote} />
          {faqs.length > 0 && <FAQSection faqs={faqs} />}
          <GuideRelatedLinks guides={relatedGuides} excursions={relatedExcursions} />
          <NeedHelpCTA excursion={needHelpExcursion} />
        </div>
      </div>
    </>
  );
}
