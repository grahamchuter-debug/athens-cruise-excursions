import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { excursions } from "@/lib/excursions";
import { GEO_LABEL, HERO_IMAGES, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Athens Cruise Excursions & Piraeus Cruise Port Guide",
  description:
    "Plan the perfect day ashore in Athens from Piraeus Cruise Port — the Acropolis and Parthenon, the Acropolis Museum, Plaka, Cape Sounion, Corinth and Delphi, with independent shore excursions and confident return-to-ship timing.",
  path: "/",
  image: HERO_IMAGES.athens.src,
  imageAlt: HERO_IMAGES.athens.alt,
});

const trustPoints = [
  {
    title: "Independent & honest",
    desc: "Impartial guidance on the best Athens excursions — not a single cruise line's upsell.",
  },
  {
    title: "Return-to-ship confidence",
    desc: "Every excursion rated for timing, transfers from Piraeus, and all-aboard buffers.",
  },
  {
    title: "Written for cruise passengers",
    desc: "Practical planning built around one port day at Piraeus, the gateway to Athens.",
  },
];

export default function HomePage() {
  const featured = excursions.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <Image
          src={HERO_IMAGES.athens.src}
          alt={HERO_IMAGES.athens.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl lg:grid-cols-2 lg:min-h-[34rem]">
          <div className="flex flex-col justify-center px-4 py-14 md:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              {GEO_LABEL}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Athens shore excursions from Piraeus Cruise Port
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              Your ship docks at Piraeus — the cruise gateway to Athens. See the
              Acropolis and Parthenon, the Acropolis Museum, historic Plaka, and
              day trips to Cape Sounion, Corinth and Delphi, with independent
              guidance and clear return-to-ship advice for your port day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shore-excursions"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Browse shore excursions
              </Link>
              <Link
                href="/piraeus-cruise-port-guide"
                className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold hover:border-white"
              >
                Piraeus port guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.title}>
              <p className="font-semibold text-slate-900">{point.title}</p>
              <p className="mt-1 text-sm text-slate-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-semibold text-amber-950">
            Piraeus is the port — Athens is the destination
          </h2>
          <p className="mt-2 leading-relaxed text-amber-950/80">
            Cruise ships dock at <strong>Piraeus Cruise Port</strong>, about
            10–12 km from central Athens. Most passengers think of the call as
            &ldquo;Athens&rdquo; — and with a little planning you can stand
            beneath the Parthenon, see the original sculptures in the Acropolis
            Museum, wander Plaka, and still be back aboard in good time. Start
            with our{" "}
            <Link
              href="/one-day-in-athens-from-a-cruise-ship"
              className="font-semibold underline"
            >
              one day in Athens
            </Link>{" "}
            itineraries and the{" "}
            <Link href="/athens-cruise-planner" className="font-semibold underline">
              cruise planner
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Popular excursions</h2>
          <Link href="/shore-excursions" className="text-sm font-semibold text-blue-800">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Planning guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/piraeus-cruise-port-guide",
                label: "Piraeus cruise port guide",
                desc: "Where ships dock and how to reach Athens",
              },
              {
                href: "/acropolis-from-piraeus-cruise-port",
                label: "Acropolis from the port",
                desc: "The icon of Athens, step by step",
              },
              {
                href: "/best-things-to-do-in-athens-from-a-cruise-ship",
                label: "Best things to do",
                desc: "Ranked by port time and return confidence",
              },
              {
                href: "/athens-metro-from-piraeus",
                label: "Athens metro from Piraeus",
                desc: "The cheap, reliable way into the city",
              },
              {
                href: "/independent-vs-cruise-line-excursions",
                label: "Independent vs cruise line",
                desc: "Is a ship tour safer than doing it yourself?",
              },
              {
                href: "/cruise-ship-schedules",
                label: "Cruise ship schedules",
                desc: "See which ships are in Piraeus by month",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:bg-blue-50/40"
              >
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl bg-slate-900 px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold">Need help choosing?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Enquiry-only — tell us your ship schedule and we&apos;ll recommend
            Athens excursions from Piraeus with realistic return timing.
          </p>
          <Link
            href="/enquire"
            className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
          >
            Send an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
