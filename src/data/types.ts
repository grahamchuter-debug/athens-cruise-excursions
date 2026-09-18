export interface FAQ {
  question: string;
  answer: string;
}

export interface ScheduleEntry {
  date: string; // ISO date, e.g. 2026-05-14
  ship: string;
  cruiseLine: string;
  arrival: string; // e.g. "08:00"
  departure: string; // e.g. "18:00"
  timeInPort?: string;
  passengers?: string;
  notes?: string;
  /** Official OLP berth / allocation code when published — do not invent terminal names. */
  berth?: string;
  provenance?: string;
  schedulePort?: string;
  timeProvenance?: string;
  berthProvenance?: string;
}
