import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata, SITE_NAME } from "@/lib/site";

const path = "/privacy";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy — Athens Cruise Excursions",
  description:
    "How Athens Cruise Excursions handles personal data submitted through enquiries, and your privacy rights.",
  path,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Privacy Policy", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Privacy" }]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy" }]} />
        <PageHero
          eyebrow="Legal"
          title="Privacy policy"
          subtitle="How we handle the information you share with us."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Overview">
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) respects your privacy.
              This policy explains what information we collect when you use this
              website and submit an enquiry, and how we use it. It is provided for
              general information and does not constitute legal advice.
            </p>
          </GuideSection>

          <GuideSection title="Information we collect">
            <p>
              We only collect the information you choose to provide through our
              enquiry form — typically your name, email address, cruise ship or
              line, port date, hours in port, and any message details. We may also
              collect standard, anonymised analytics about how the site is used.
            </p>
          </GuideSection>

          <GuideSection title="How we use your information">
            <p>
              We use enquiry details solely to respond to your request and
              recommend suitable Athens shore excursions from Piraeus. We do not
              sell your personal data. We may share relevant details with trusted
              local excursion operators only where necessary to answer your
              enquiry.
            </p>
          </GuideSection>

          <GuideSection title="Cookies and analytics">
            <p>
              This site may use privacy-friendly analytics to understand traffic
              and improve content. You can control cookies through your browser
              settings. Disabling cookies will not prevent you from reading the
              site&apos;s guides.
            </p>
          </GuideSection>

          <GuideSection title="Your rights">
            <p>
              Under the EU General Data Protection Regulation (GDPR) and UK data
              protection law, you may request access to, correction of, or deletion
              of the personal data you have shared with us. Contact us via the{" "}
              <a href="/enquire" className="text-blue-800 hover:underline">enquiry page</a>{" "}
              to exercise these rights.
            </p>
          </GuideSection>

          <GuideSection title="Changes to this policy">
            <p>
              We may update this policy from time to time. Any changes will be
              posted on this page with an updated revision date.
            </p>
          </GuideSection>
        </div>
      </div>
    </>
  );
}
