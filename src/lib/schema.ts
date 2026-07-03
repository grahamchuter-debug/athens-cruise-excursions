import { absoluteUrl, GEO_LABEL, SITE_NAME, SITE_URL } from "./site";

export type BreadcrumbItem = { name: string; href?: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    description:
      "Independent shore excursion planning and enquiries for cruise passengers visiting Athens from Piraeus Cruise Port.",
    areaServed: {
      "@type": "Place",
      name: GEO_LABEL,
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Shore excursion guides and port planning for cruise passengers visiting Athens from Piraeus Cruise Port.",
    inLanguage: "en-GB",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    description:
      "Independent shore excursion planning for cruise passengers arriving at Piraeus Cruise Port, the gateway to Athens, Greece.",
    areaServed: [
      {
        "@type": "City",
        name: "Athens",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Athens",
          addressRegion: "Attica",
          addressCountry: "GR",
        },
      },
      {
        "@type": "Place",
        name: "Piraeus Cruise Port",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Piraeus",
          addressRegion: "Attica",
          addressCountry: "GR",
        },
      },
    ],
    knowsAbout: [
      "Acropolis of Athens",
      "Parthenon",
      "Acropolis Museum",
      "Piraeus Cruise Port",
      "Athens shore excursions",
      "Plaka",
      "Cape Sounion",
      "Ancient Corinth",
      "Delphi",
    ],
  };
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
