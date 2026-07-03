export type NavItem = { label: string; href: string };

export const EXCURSIONS_PATH = "/shore-excursions";
export const PORT_GUIDE_PATH = "/piraeus-cruise-port-guide";
export const SCHEDULE_PATH = "/cruise-ship-schedules";
export const PLANNER_PATH = "/athens-cruise-planner";

export const mainNav: NavItem[] = [
  { label: "Shore Excursions", href: EXCURSIONS_PATH },
  { label: "Piraeus Port Guide", href: PORT_GUIDE_PATH },
  { label: "Ship Schedules", href: SCHEDULE_PATH },
  { label: "Cruise Planner", href: PLANNER_PATH },
  { label: "FAQ", href: "/faq" },
  { label: "Enquire", href: "/enquire" },
];

export const guideLinks: NavItem[] = [
  { label: "Piraeus Cruise Port Guide", href: PORT_GUIDE_PATH },
  { label: "Best Things To Do In Athens", href: "/best-things-to-do-in-athens-from-a-cruise-ship" },
  { label: "One Day In Athens", href: "/one-day-in-athens-from-a-cruise-ship" },
  { label: "Athens Cruise Planner", href: PLANNER_PATH },
  { label: "Cruise Ship Schedules", href: SCHEDULE_PATH },
  { label: "Walking & Transport From Piraeus", href: "/walking-and-transport-from-piraeus-cruise-port" },
  { label: "Athens Metro From Piraeus", href: "/athens-metro-from-piraeus" },
  { label: "Taxi Guide From Piraeus", href: "/taxi-guide-from-piraeus-cruise-port" },
  { label: "Independent vs Cruise Line", href: "/independent-vs-cruise-line-excursions" },
  { label: "FAQ", href: "/faq" },
];

export const destinationGuideLinks: NavItem[] = [
  { label: "Acropolis From Piraeus Cruise Port", href: "/acropolis-from-piraeus-cruise-port" },
  { label: "Parthenon Guide For Cruise Passengers", href: "/parthenon-guide-for-cruise-passengers" },
  { label: "Acropolis Museum From Cruise Port", href: "/acropolis-museum-from-cruise-port" },
  { label: "Plaka From Piraeus Cruise Port", href: "/plaka-from-piraeus-cruise-port" },
  { label: "Ancient Agora Guide", href: "/ancient-agora-guide" },
  { label: "Syntagma Square & Changing Of The Guard", href: "/syntagma-square-changing-of-the-guard" },
  { label: "Temple Of Olympian Zeus", href: "/temple-of-olympian-zeus" },
];

export const audienceGuideLinks: NavItem[] = [
  { label: "Best Athens Excursions For Families", href: "/best-athens-excursions-for-families" },
  { label: "Best Athens Excursions For History Lovers", href: "/best-athens-excursions-for-history-lovers" },
  { label: "Best Athens Excursions For First-Time Visitors", href: "/best-athens-excursions-for-first-time-visitors" },
];

export const excursionLinks: NavItem[] = [
  { label: "Acropolis & Parthenon", href: "/acropolis-parthenon-shore-excursion" },
  { label: "Acropolis Museum & Acropolis", href: "/acropolis-museum-shore-excursion" },
  { label: "Athens City Highlights", href: "/athens-city-highlights-shore-excursion" },
  { label: "Plaka Old Town & Food Walk", href: "/plaka-food-walking-shore-excursion" },
  { label: "Cape Sounion & Temple of Poseidon", href: "/cape-sounion-shore-excursion" },
  { label: "Ancient Corinth & Canal", href: "/corinth-shore-excursion-from-athens" },
  { label: "Delphi Full-Day Tour", href: "/delphi-shore-excursion-from-athens" },
  { label: "Athens Full-Day Highlights", href: "/athens-full-day-highlights-shore-excursion" },
];

export const legalLinks: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Contact / Enquire", href: "/enquire" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
