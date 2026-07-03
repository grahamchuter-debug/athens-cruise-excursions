import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExcursionPageContent } from "@/components/ExcursionPageContent";
import { JsonLd } from "@/components/JsonLd";
import { getExcursion } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export function createExcursionPage(slug: string) {
  const excursion = getExcursion(slug);
  if (!excursion) {
    throw new Error(`Unknown excursion slug: ${slug}`);
  }

  const metadata: Metadata = pageMetadata({
    title: excursion.title,
    description: excursion.summary,
    path: excursion.path,
    image: excursion.heroImage,
    imageAlt: excursion.heroImageAlt,
  });

  function ExcursionPage() {
    const data = getExcursion(slug);
    if (!data) notFound();

    return (
      <>
        <JsonLd
          data={[
            webPageSchema({
              title: data.title,
              description: data.summary,
              path: data.path,
            }),
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Shore Excursions", href: "/shore-excursions" },
              { name: data.shortTitle },
            ]),
            faqSchema(data.faqs),
          ]}
        />
        <ExcursionPageContent excursion={data} />
      </>
    );
  }

  return { metadata, Page: ExcursionPage };
}
