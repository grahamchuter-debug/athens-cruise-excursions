import type { ScheduleEntry } from "@/data/types";
import importedSchedule from "@/data/imported-schedules/athens.json";

export const SCHEDULE_YEARS = [2026, 2027] as const;
export type ScheduleYear = (typeof SCHEDULE_YEARS)[number];

export const SCHEDULE_BASE_PATH = "/cruise-ship-schedules";

export const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const MONTH_SLUGS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

export type MonthSlug = (typeof MONTH_SLUGS)[number];

const allEntries: ScheduleEntry[] = [...(importedSchedule as ScheduleEntry[])].sort(
  (a, b) => a.date.localeCompare(b.date),
);

export function getScheduleEntries(): ScheduleEntry[] {
  return allEntries;
}

export function getScheduleEntryCount(): number {
  return allEntries.length;
}

export function hasVerifiedScheduleData(): boolean {
  return allEntries.length > 0;
}

export function isValidScheduleYear(year: number): year is ScheduleYear {
  return (SCHEDULE_YEARS as readonly number[]).includes(year);
}

export function parseScheduleYear(value: string): ScheduleYear | null {
  const year = Number(value);
  return isValidScheduleYear(year) ? year : null;
}

export function getMonthKey(year: number, month: number): string {
  return `${year}-${String(month).padStart(2, "0")}`;
}

export function parseMonthKey(key: string): { year: number; month: number } {
  const [year, month] = key.split("-").map(Number);
  return { year, month };
}

export function getEntryMonthKey(entry: ScheduleEntry): string {
  return entry.date.slice(0, 7);
}

export function monthKeyToSlug(monthKey: string): string {
  const { year, month } = parseMonthKey(monthKey);
  return `${MONTH_SLUGS[month - 1]}-${year}`;
}

export function parseMonthSlug(value: string): string | null {
  const match = value.match(/^([a-z]+)-(\d{4})$/);
  if (!match) return null;
  const [, monthName, yearStr] = match;
  const monthIndex = MONTH_SLUGS.indexOf(monthName as MonthSlug);
  if (monthIndex === -1) return null;
  return getMonthKey(Number(yearStr), monthIndex + 1);
}

export function yearPath(year: ScheduleYear | number): string {
  return `${SCHEDULE_BASE_PATH}/${year}`;
}

export function monthPath(monthKey: string): string {
  return `${SCHEDULE_BASE_PATH}/${monthKeyToSlug(monthKey)}`;
}

export function formatMonthLabel(monthKey: string): string {
  const { year, month } = parseMonthKey(monthKey);
  return `${MONTH_LABELS[month - 1]} ${year}`;
}

export function filterEntriesByYear(year: number): ScheduleEntry[] {
  return allEntries.filter((e) => e.date.startsWith(`${year}-`));
}

export function filterEntriesByMonth(monthKey: string): ScheduleEntry[] {
  return allEntries.filter((e) => getEntryMonthKey(e) === monthKey);
}

export function getMonthsWithEntries(entries: ScheduleEntry[] = allEntries): string[] {
  return [...new Set(entries.map(getEntryMonthKey))].sort();
}

export function getVerifiedMonthKeys(): string[] {
  return getMonthsWithEntries(allEntries);
}

export function getUniqueCruiseLines(entries: ScheduleEntry[] = allEntries): string[] {
  return [...new Set(entries.map((e) => e.cruiseLine))].sort();
}
