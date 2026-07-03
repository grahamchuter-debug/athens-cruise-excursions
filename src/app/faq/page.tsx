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
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/faq";

const faqs = [
  {
    question: "Where do cruise ships dock in Athens?",
    answer:
      "Cruise ships do not dock in Athens itself — they dock at Piraeus Cruise Port, about 10–12 km southwest of central Athens. Piraeus is the port gateway to Athens, and getting to the Acropolis takes roughly 30–45 minutes by road or 40–55 minutes by metro.",
  },
  {
    question: "Is Piraeus the same as Athens?",
    answer:
      "No. Piraeus is the port city and cruise terminal; Athens is the capital about 10–12 km inland. Most cruise itineraries list the call as 'Athens (Piraeus)' because Athens is the destination, but your ship physically berths at Piraeus.",
  },
  {
    question: "What is the number one thing to see in Athens on a cruise day?",
    answer:
      "The Acropolis and the Parthenon are the must-see. Pair them with the Acropolis Museum, which holds the original sculptures, for the most complete experience in the time a port day allows.",
  },
  {
    question: "Can I get from Piraeus to the Acropolis independently?",
    answer:
      "Yes — the metro (Line 1 from Piraeus, changing for the Acropoli area) is cheap and reliable, and taxis take 30–45 minutes depending on traffic. Many passengers still prefer an organised tour for skip-the-line entry and a guaranteed return to the ship.",
  },
  {
    question: "How much buffer should I leave before all-aboard at Piraeus?",
    answer:
      "Build at least 60–90 minutes beyond your tour's stated return time, and more for long day trips to Cape Sounion, Corinth or Delphi. Athens traffic and the transfer back to Piraeus are the main variables to allow for.",
  },
  {
    question: "Can I book excursions on this website?",
    answer:
      "Not yet — use the enquiry form and we'll recommend options matched to your ship schedule. Enquiry-only, with no online checkout.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "FAQ — Athens Cruise Excursions from Piraeus Cruise Port",
  description:
    "Frequently asked questions about Athens cruise days from Piraeus Cruise Port — where ships dock, getting to the Acropolis, the metro and taxis, timing, and booking enquiries.",
  path,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "FAQ", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <PageHero
          eyebrow="Help centre"
          title="Frequently asked questions"
          subtitle="Answers for cruise passengers arriving at Piraeus Cruise Port for a day in Athens."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Planning your Athens port day">
            <p>
              Piraeus is one of the busiest cruise ports in the Mediterranean,
              and Athens — the birthplace of democracy and home of the Acropolis
              — is the destination just inland. Most passengers come for the
              ancient sites. Start with our{" "}
              <Link href="/piraeus-cruise-port-guide" className="text-blue-800 hover:underline">
                Piraeus cruise port guide
              </Link>{" "}
              and{" "}
              <Link href="/one-day-in-athens-from-a-cruise-ship" className="text-blue-800 hover:underline">
                one-day itineraries
              </Link>
              .
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} title="Common questions" />
          <ReturnToShipBlock />
          <GuideRelatedLinks
            guides={[
              { label: "Piraeus port guide", href: "/piraeus-cruise-port-guide" },
              { label: "Athens cruise planner", href: "/athens-cruise-planner" },
              { label: "Athens metro from Piraeus", href: "/athens-metro-from-piraeus" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
