"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { excursions } from "@/lib/excursions";
import { getScheduleEntries, getEntriesForDate } from "@/lib/schedule";
import type { ScheduleEntry } from "@/data/types";

type Hours = "4" | "5" | "6" | "8" | "10";
type Mobility = "full" | "some" | "limited";
type Interest = "ancient" | "museums" | "food" | "scenery" | "mixed";
type GroupType = "couple" | "family" | "solo" | "friends";
type Confidence = "relaxed" | "balanced" | "maximise";

type PlannerMeta = {
  slug: string;
  minHours: number;
  interests: Interest[];
  mobilityOk: Mobility[];
  familyStrength: number;
};

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

function realTime(value: string | undefined): string {
  const v = (value || "").trim();
  if (!v || v === "00:00" || v === "0:00") return "";
  return v;
}

function hoursFromTimes(arrival: string, departure: string): Hours | null {
  if (!arrival || !departure) return null;
  const [ah, am] = arrival.split(":").map(Number);
  const [dh, dm] = departure.split(":").map(Number);
  let minutes = dh * 60 + dm - (ah * 60 + am);
  if (minutes < 0) minutes += 24 * 60;
  const usable = Math.max(0, minutes / 60 - 1.5);
  if (usable >= 10) return "10";
  if (usable >= 8) return "8";
  if (usable >= 6) return "6";
  if (usable >= 5) return "5";
  if (usable >= 4) return "4";
  return "4";
}

export function CruisePlanner() {
  const schedule = useMemo(() => getScheduleEntries(), []);
  const dates = useMemo(() => [...new Set(schedule.map((e) => e.date))].sort(), [schedule]);

  const [callDate, setCallDate] = useState("");
  const [shipName, setShipName] = useState("");
  const [hours, setHours] = useState<Hours | "">("");
  const [hoursFromSchedule, setHoursFromSchedule] = useState(false);
  const [mobility, setMobility] = useState<Mobility>("full");
  const [interest, setInterest] = useState<Interest>("mixed");
  const [group, setGroup] = useState<GroupType>("couple");
  const [confidence, setConfidence] = useState<Confidence>("balanced");

  const shipsOnDate: ScheduleEntry[] = useMemo(() => {
    if (!callDate) return [];
    return getEntriesForDate(schedule, callDate);
  }, [schedule, callDate]);

  function applyShip(date: string, ship: string) {
    setCallDate(date);
    setShipName(ship);
    const matches = getEntriesForDate(schedule, date).filter((e) => e.ship === ship);
    if (matches.length === 1) {
      const a = realTime(matches[0].arrival);
      const d = realTime(matches[0].departure);
      const derived = hoursFromTimes(a, d);
      if (derived) {
        setHours(derived);
        setHoursFromSchedule(true);
      } else {
        setHours("");
        setHoursFromSchedule(false);
      }
    } else {
      setHours("");
      setHoursFromSchedule(false);
    }
  }

  function onDateChange(date: string) {
    setCallDate(date);
    setShipName("");
    setHours("");
    setHoursFromSchedule(false);
    const matches = date ? getEntriesForDate(schedule, date) : [];
    if (matches.length === 1) applyShip(date, matches[0].ship);
  }

  function onShipChange(ship: string) {
    if (!callDate || !ship) {
      setShipName("");
      setHours("");
      setHoursFromSchedule(false);
      return;
    }
    applyShip(callDate, ship);
  }

  const results = useMemo(() => {
    if (hours === "") return [];
    const h = Number(hours);

    return meta
      .map((m) => {
        const excursion = excursions.find((e) => e.slug === m.slug);
        if (!excursion) return null;

        let score = 0;
        const reasons: string[] = [];

        if (h < m.minHours) return null;
        if (h >= m.minHours + 2) {
          score += 2;
        } else {
          score += 1;
          reasons.push("Fits, but keep an eye on the clock");
        }

        if (!m.mobilityOk.includes(mobility)) {
          if (mobility === "limited") return null;
          score -= 1;
        } else if (mobility === "limited") {
          reasons.push("Manageable with limited walking");
          score += 1;
        }

        if (interest === "mixed" || m.interests.includes(interest)) {
          score += 2;
        }

        if (group === "family") score += m.familyStrength;
        if (group === "solo" && m.slug.includes("food")) score += 1;

        const conf = confidenceRank[excursion.returnConfidence] ?? 2;
        if (confidence === "relaxed") score += (conf - 2) * 2;
        if (confidence === "balanced") score += conf - 2;

        if (confidence === "relaxed" && excursion.returnConfidence === "Tight") {
          return null;
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
  const noMatch = Boolean(callDate) && shipsOnDate.length === 0;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Port call date (Piraeus)</span>
            <input
              type="date"
              value={callDate}
              onChange={(e) => onDateChange(e.target.value)}
              list="piraeus-call-dates"
              className={selectClass}
            />
            <datalist id="piraeus-call-dates">
              {dates.map((d) => (
                <option key={d} value={d} />
              ))}
            </datalist>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Ship</span>
            <select
              value={shipName}
              onChange={(e) => onShipChange(e.target.value)}
              disabled={!callDate || shipsOnDate.length === 0}
              className={`${selectClass} disabled:bg-slate-50`}
            >
              <option value="">
                {!callDate
                  ? "Choose a date first"
                  : shipsOnDate.length === 0
                    ? "No published match — set hours manually"
                    : shipsOnDate.length === 1
                      ? shipsOnDate[0].ship
                      : "Choose your ship"}
              </option>
              {shipsOnDate.map((e) => (
                <option key={`${e.date}-${e.ship}`} value={e.ship}>
                  {e.ship} ({e.cruiseLine})
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Hours ashore at Piraeus
              {hoursFromSchedule ? " (from published times)" : ""}
            </span>
            <select
              value={hours}
              onChange={(e) => {
                setHours(e.target.value as Hours | "");
                setHoursFromSchedule(false);
              }}
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

        {(noMatch || (shipName && !hoursFromSchedule && hours === "")) && (
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            {noMatch
              ? "No published Piraeus call for that date — choose hours ashore manually."
              : "Published arrival/departure are incomplete for this call — set hours ashore manually or confirm with your cruise line."}
          </p>
        )}

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
