"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { excursions } from "@/lib/excursions";

type Hours = "4" | "5" | "6" | "8" | "10";
type Mobility = "full" | "some" | "limited";
type Interest = "ancient" | "museums" | "food" | "scenery" | "mixed";
type GroupType = "couple" | "family" | "solo" | "friends";
type Confidence = "relaxed" | "balanced" | "maximise";

type PlannerMeta = {
  slug: string;
  minHours: number;
  interests: Interest[];
  mobilityOk: Mobility[]; // mobility levels this suits
  familyStrength: number; // 0-2
};

// Planner metadata layered over the excursion content model.
const meta: PlannerMeta[] = [
  {
    slug: "acropolis-parthenon-shore-excursion",
    minHours: 5,
    interests: ["ancient", "mixed"],
    mobilityOk: ["full", "some"],
    familyStrength: 1,
  },
  {
    slug: "acropolis-museum-shore-excursion",
    minHours: 5,
    interests: ["ancient", "museums", "mixed"],
    mobilityOk: ["full", "some"],
    familyStrength: 1,
  },
  {
    slug: "athens-city-highlights-shore-excursion",
    minHours: 5,
    interests: ["mixed", "ancient", "food"],
    mobilityOk: ["full", "some"],
    familyStrength: 2,
  },
  {
    slug: "plaka-food-walking-shore-excursion",
    minHours: 4,
    interests: ["food", "mixed"],
    mobilityOk: ["full", "some", "limited"],
    familyStrength: 2,
  },
  {
    slug: "cape-sounion-shore-excursion",
    minHours: 6,
    interests: ["scenery", "ancient", "mixed"],
    mobilityOk: ["full", "some", "limited"],
    familyStrength: 1,
  },
  {
    slug: "corinth-shore-excursion-from-athens",
    minHours: 6,
    interests: ["ancient", "scenery"],
    mobilityOk: ["full", "some"],
    familyStrength: 1,
  },
  {
    slug: "delphi-shore-excursion-from-athens",
    minHours: 10,
    interests: ["ancient", "scenery"],
    mobilityOk: ["full"],
    familyStrength: 0,
  },
  {
    slug: "athens-full-day-highlights-shore-excursion",
    minHours: 7,
    interests: ["mixed", "ancient", "museums", "food"],
    mobilityOk: ["full", "some"],
    familyStrength: 2,
  },
];

const confidenceRank: Record<string, number> = {
  High: 3,
  Moderate: 2,
  Tight: 1,
};

export function CruisePlanner() {
  const [hours, setHours] = useState<Hours | "">("");
  const [mobility, setMobility] = useState<Mobility>("full");
  const [interest, setInterest] = useState<Interest>("mixed");
  const [group, setGroup] = useState<GroupType>("couple");
  const [confidence, setConfidence] = useState<Confidence>("balanced");

  const results = useMemo(() => {
    if (hours === "") return [];
    const h = Number(hours);

    return meta
      .map((m) => {
        const excursion = excursions.find((e) => e.slug === m.slug);
        if (!excursion) return null;

        let score = 0;
        const reasons: string[] = [];

        // Time in port
        if (h < m.minHours) return null; // not realistic
        if (h >= m.minHours + 2) {
          score += 2;
        } else {
          score += 1;
          reasons.push("Fits, but keep an eye on the clock");
        }

        // Mobility
        if (!m.mobilityOk.includes(mobility)) {
          if (mobility === "limited") return null;
          score -= 1;
        } else if (mobility === "limited") {
          reasons.push("Manageable with limited walking");
          score += 1;
        }

        // Interests
        if (interest === "mixed" || m.interests.includes(interest)) {
          score += 2;
        }

        // Group type
        if (group === "family") score += m.familyStrength;
        if (group === "solo" && m.slug.includes("food")) score += 1;

        // Return confidence preference
        const conf = confidenceRank[excursion.returnConfidence] ?? 2;
        if (confidence === "relaxed") score += (conf - 2) * 2;
        if (confidence === "balanced") score += conf - 2;
        if (confidence === "maximise") score += 0;

        if (confidence === "relaxed" && excursion.returnConfidence === "Tight") {
          return null; // filter out risky options for cautious travellers
        }

        return { excursion, score, reasons };
      })
      .filter(
        (r): r is { excursion: (typeof excursions)[number]; score: number; reasons: string[] } =>
          r !== null,
      )
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }, [hours, mobility, interest, group, confidence]);

  const selectClass =
    "mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm";

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Hours ashore at Piraeus
            </span>
            <select
              value={hours}
              onChange={(e) => setHours(e.target.value as Hours | "")}
              className={selectClass}
            >
              <option value="">Select port time…</option>
              <option value="4">About 4 hours</option>
              <option value="5">About 5 hours</option>
              <option value="6">About 6 hours</option>
              <option value="8">8+ hours</option>
              <option value="10">10+ hours (full day)</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Mobility &amp; walking
            </span>
            <select
              value={mobility}
              onChange={(e) => setMobility(e.target.value as Mobility)}
              className={selectClass}
            >
              <option value="full">Happy to climb & walk</option>
              <option value="some">Some walking, prefer steady pace</option>
              <option value="limited">Limited walking / accessibility needs</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Main interest</span>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value as Interest)}
              className={selectClass}
            >
              <option value="mixed">A bit of everything</option>
              <option value="ancient">Ancient sites & ruins</option>
              <option value="museums">Museums & sculpture</option>
              <option value="food">Food, culture & strolling</option>
              <option value="scenery">Scenery & the coast</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Who&apos;s travelling</span>
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value as GroupType)}
              className={selectClass}
            >
              <option value="couple">Couple</option>
              <option value="family">Family with children</option>
              <option value="solo">Solo traveller</option>
              <option value="friends">Group of friends</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Return-to-ship confidence
            </span>
            <select
              value={confidence}
              onChange={(e) => setConfidence(e.target.value as Confidence)}
              className={selectClass}
            >
              <option value="relaxed">Play it safe — big buffer</option>
              <option value="balanced">Balanced</option>
              <option value="maximise">Maximise what I see</option>
            </select>
          </label>
        </div>

        {hours === "4" && (
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Short turnaround — stay close and simple. Central Athens works, but
            avoid long day trips to Cape Sounion, Corinth or Delphi. Remember the
            transfer between Piraeus and central Athens takes 30–45 minutes each
            way.
          </p>
        )}
        {hours === "10" && (
          <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-800">
            Full day ashore — a trip to Delphi or Corinth becomes realistic, or
            combine the Acropolis, its museum and Plaka at a relaxed pace. Always
            confirm the operator&apos;s return-to-ship commitment for long
            transfers.
          </p>
        )}
      </div>

      {hours !== "" && results.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Suggested excursions for your Athens port day
          </h2>
          <ul className="mt-4 space-y-3">
            {results.map(({ excursion, reasons }) => (
              <li
                key={excursion.slug}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <Link
                  href={excursion.path}
                  className="font-semibold text-blue-800 hover:text-blue-950"
                >
                  {excursion.title}
                </Link>
                <p className="mt-1 text-sm text-slate-600">{excursion.summary}</p>
                <p className="mt-2 text-xs text-slate-500">
                  {excursion.duration} · Return confidence:{" "}
                  {excursion.returnConfidence}
                  {reasons.length > 0 ? ` · ${reasons.join(" · ")}` : ""}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href={`/enquire?hours=${hours}`}
            className="mt-6 inline-block rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
          >
            Enquire with these preferences
          </Link>
        </div>
      )}

      {hours !== "" && results.length === 0 && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <p className="font-medium text-amber-950">
            No comfortable matches for those exact settings
          </p>
          <p className="mt-2 text-sm text-amber-900">
            Try allowing more walking, widening your interests, or choosing a
            longer port time. On very short calls, a central Athens visit is the
            safest choice — see our{" "}
            <Link href="/one-day-in-athens-from-a-cruise-ship" className="font-medium underline">
              one day in Athens
            </Link>{" "}
            itineraries.
          </p>
        </div>
      )}
    </div>
  );
}
