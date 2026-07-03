export const SITE_NAME = "Athens Cruise Excursions";
export const SITE_URL = "https://athenscruiseexcursions.com";
export const SITE_DESCRIPTION =
  "Independent shore excursion guides for cruise passengers arriving at Piraeus Cruise Port — the gateway to Athens. Plan the Acropolis, the Acropolis Museum, Plaka, Cape Sounion, Delphi and Corinth with confident return-to-ship timing.";
export const GEO_LABEL = "Athens · Piraeus Cruise Port";
export const REGION_LABEL = "Athens · Greece";

export const DEFAULT_HERO_IMAGE = "/images/athens-hero.jpg";
export const DEFAULT_HERO_ALT =
  "The Acropolis of Athens crowned by the Parthenon at golden hour, above the city, near Piraeus Cruise Port";

export const HERO_IMAGES = {
  athens: {
    src: DEFAULT_HERO_IMAGE,
    alt: DEFAULT_HERO_ALT,
  },
  acropolis: {
    src: "/images/acropolis-hero.jpg",
    alt: "The marble Doric columns of the Parthenon on the Acropolis of Athens",
  },
  parthenon: {
    src: "/images/parthenon-hero.jpg",
    alt: "The Parthenon temple on the Athens Acropolis against a blue sky",
  },
  museum: {
    src: "/images/acropolis-museum-hero.jpg",
    alt: "The Caryatids and glass galleries inside the Acropolis Museum in Athens",
  },
  port: {
    src: "/images/piraeus-port-hero.jpg",
    alt: "Cruise ships docked at Piraeus Cruise Port, the gateway to Athens, Greece",
  },
  plaka: {
    src: "/images/plaka-hero.jpg",
    alt: "A cobbled street of the Plaka old town in Athens beneath the Acropolis",
  },
  agora: {
    src: "/images/ancient-agora-hero.jpg",
    alt: "The Temple of Hephaestus in the Ancient Agora of Athens with the Acropolis behind",
  },
  syntagma: {
    src: "/images/syntagma-hero.jpg",
    alt: "An Evzone guard performing the changing of the guard at Syntagma Square, Athens",
  },
  zeus: {
    src: "/images/temple-olympian-zeus-hero.jpg",
    alt: "The towering Corinthian columns of the Temple of Olympian Zeus in Athens",
  },
  sounion: {
    src: "/images/cape-sounion-hero.jpg",
    alt: "The Temple of Poseidon at Cape Sounion above the Aegean Sea at sunset",
  },
  corinth: {
    src: "/images/corinth-hero.jpg",
    alt: "The Corinth Canal cutting through rock with turquoise water below",
  },
  delphi: {
    src: "/images/delphi-hero.jpg",
    alt: "The Tholos of Athena Pronaia at the ancient site of Delphi in the mountains",
  },
} as const;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return title;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}) {
  const url = absoluteUrl(path);
  const ogImages = image
    ? [{ url: absoluteUrl(image), alt: imageAlt ?? title }]
    : undefined;
  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle(title),
      description,
      url,
      type: "website" as const,
      siteName: SITE_NAME,
      locale: "en_GB",
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle(title),
      description,
      ...(ogImages ? { images: ogImages.map((i) => i.url) } : {}),
    },
  };
}
