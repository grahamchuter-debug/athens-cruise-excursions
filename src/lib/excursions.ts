import { HERO_IMAGES } from "./site";

export type FitnessLevel = "Easy" | "Moderate" | "Difficult";
export type ReturnConfidence = "High" | "Moderate" | "Tight";

export type CruiseSnapshotFields = {
  timeInPort?: string;
  bestFor?: string;
  activityLevel?: string;
  familyFriendly?: string;
  returnToShip?: string;
  popularTypes?: string;
};

export type Excursion = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  fitness: FitnessLevel;
  distanceFromTerminal: string;
  transferRequired: boolean;
  transferNote: string;
  bestFor: string[];
  returnConfidence: ReturnConfidence;
  returnNote: string;
  weatherConsiderations: string;
  cruiseSnapshot: string;
  snapshotFields: CruiseSnapshotFields;
  description: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  heroImage?: string;
  heroImageAlt?: string;
};

export const excursions: Excursion[] = [
  {
    slug: "acropolis-parthenon-shore-excursion",
    path: "/acropolis-parthenon-shore-excursion",
    title: "Acropolis & Parthenon Shore Excursion from Piraeus Cruise Port",
    shortTitle: "Acropolis & Parthenon",
    summary:
      "The essential Athens excursion — a guided climb to the Acropolis and the Parthenon, the icon of Western civilisation, roughly 40–60 minutes from where your ship docks at Piraeus.",
    duration: "4–5 hours (typical guided tour)",
    fitness: "Moderate",
    distanceFromTerminal:
      "The Acropolis is about 10–12 km from Piraeus Cruise Port — roughly 30–45 minutes by coach or taxi, or 40–55 minutes by metro plus a short walk.",
    transferRequired: true,
    transferNote:
      "Most tours include air-conditioned coach transfer from the pier with a licensed guide and skip-the-line entry. Independent visitors can take the metro (Line 1 to Monastiraki) or a taxi.",
    bestFor: [
      "First-time visitors to Athens",
      "Anyone who wants to see the single must-see sight",
      "Passengers with at least five hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "A well-run Acropolis coach tour is the most reliable Athens excursion for timing — a predictable transfer, a focused two-hour visit, and operators who build in a comfortable all-aboard buffer back to Piraeus.",
    weatherConsiderations:
      "The Acropolis is open, unshaded, and paved with polished, slippery marble. Summer midday heat is intense and the site can close in extreme heat — go early, wear grippy shoes, and carry water and sun protection.",
    cruiseSnapshot:
      "This is why most ships call at Piraeus. A licensed guide walks you up through the Propylaea to the Parthenon, the Erechtheion and the Temple of Athena Nike, then explains what you are seeing — and you are back aboard with time to spare.",
    snapshotFields: {
      timeInPort: "5+ hours works comfortably",
      bestFor: "Ancient history, first-timers, icons",
      activityLevel: "Moderate — a steady uphill climb on slippery marble",
      familyFriendly: "Good — dramatic and story-rich for older children",
      returnToShip: "High confidence on organised coach tours",
      popularTypes: "Guided Acropolis tours, Acropolis + Museum combos",
    },
    description: [
      "The Acropolis is the sacred rock at the heart of Athens, and the Parthenon that crowns it is the most influential building in the Western world. Built in the 5th century BC under Pericles, at the height of Athenian democracy, it has stood over the city for nearly 2,500 years. For cruise passengers arriving at Piraeus, this is the one sight that defines the port day.",
      "A guided visit climbs through the monumental Propylaea gateway to the summit, where the Parthenon, the elegant Erechtheion with its Caryatid porch, and the tiny Temple of Athena Nike stand against the sky. A good guide turns weathered marble into the story of gods, war, democracy and empire — context you simply cannot get from a guidebook on a busy port morning.",
      "Plan for around two hours on the rock plus transfer from Piraeus. The Acropolis pairs naturally with the Acropolis Museum at its foot, where the original sculptures are displayed — many tours combine both. Because the site is busy and the marble underfoot is genuinely slippery, an organised tour with skip-the-line tickets is the least stressful way to see it on a cruise call.",
    ],
    highlights: [
      "The Parthenon, temple of Athena and symbol of classical Greece",
      "The Erechtheion and its famous Porch of the Caryatids",
      "The Propylaea gateway and the Temple of Athena Nike",
      "Panoramic views over Athens to the sea and Piraeus",
    ],
    faqs: [
      {
        question: "How far is the Acropolis from Piraeus Cruise Port?",
        answer:
          "About 10–12 km — roughly 30–45 minutes by coach or taxi depending on traffic, or 40–55 minutes using the metro. It is the top priority for almost every cruise passenger docking at Piraeus.",
      },
      {
        question: "Is the Acropolis a hard climb?",
        answer:
          "It is a steady uphill walk of 10–15 minutes on paths and worn, slippery marble, with steps near the top. Most reasonably mobile visitors manage it slowly; there is a lift for visitors with limited mobility that must be arranged in advance.",
      },
      {
        question: "Should I book a tour or go independently to the Acropolis?",
        answer:
          "You can reach it independently by metro or taxi, but an organised tour with a licensed guide and skip-the-line entry saves queuing time and guarantees a managed return to Piraeus — a big advantage on a fixed cruise schedule.",
      },
    ],
    relatedSlugs: [
      "acropolis-museum-shore-excursion",
      "athens-city-highlights-shore-excursion",
      "athens-full-day-highlights-shore-excursion",
    ],
    heroImage: HERO_IMAGES.acropolis.src,
    heroImageAlt: HERO_IMAGES.acropolis.alt,
  },
  {
    slug: "acropolis-museum-shore-excursion",
    path: "/acropolis-museum-shore-excursion",
    title: "Acropolis Museum & Acropolis Shore Excursion from Piraeus",
    shortTitle: "Acropolis Museum & Acropolis",
    summary:
      "The Acropolis rock and its award-winning museum together — the original Parthenon sculptures, the real Caryatids, and glass floors over a live excavation, a short walk apart in central Athens.",
    duration: "4.5–5.5 hours",
    fitness: "Moderate",
    distanceFromTerminal:
      "Both sit in central Athens, about 10–12 km from Piraeus Cruise Port — 30–45 minutes by coach or taxi. The museum is a 5-minute walk downhill from the Acropolis entrance.",
    transferRequired: true,
    transferNote:
      "Tours include coach transfer and guided entry to both the site and the museum. Independent visitors use the metro to Acropoli station, right beside the museum.",
    bestFor: [
      "History and art lovers",
      "Passengers who want depth as well as the icon",
      "Anyone wanting an air-conditioned option on a hot day",
    ],
    returnConfidence: "High",
    returnNote:
      "Both sights are central and close together, so this combination keeps a reliable return margin to Piraeus even though it packs in a lot.",
    weatherConsiderations:
      "The museum is fully air-conditioned — a welcome relief on a hot afternoon after the exposed rock. Do the open Acropolis first thing while it is cooler, then the museum.",
    cruiseSnapshot:
      "If the Acropolis is the place, the Acropolis Museum is the treasure house. The Parthenon Gallery displays the surviving frieze at eye level, aligned with the temple visible through the glass — the finest way to understand what you have just walked around.",
    snapshotFields: {
      timeInPort: "5+ hours recommended",
      bestFor: "Classical sculpture, deeper context, indoor comfort",
      activityLevel: "Moderate — the Acropolis climb, then level galleries",
      familyFriendly: "Good — engaging with a guide",
      returnToShip: "High — everything central and close",
      popularTypes: "Acropolis + Museum combined tours",
    },
    description: [
      "This excursion pairs the two halves of the Acropolis story. First the sacred rock itself — the Parthenon, Erechtheion and Propylaea — then the modern Acropolis Museum at its foot, purpose-built in 2009 to house the sculptures that once adorned the monuments above.",
      "The museum's top-floor Parthenon Gallery is the highlight: the surviving frieze and metopes are mounted at their original height and orientation, with the Parthenon itself framed through floor-to-ceiling glass. You also meet the original Caryatids from the Erechtheion (copies stand on the rock), and walk on glass floors above the excavated ancient neighbourhood beneath the building.",
      "Seeing the site and the sculptures together — ideally site first, museum second — completes the picture in a way neither manages alone. Because both are central and a short walk apart, the combination fits comfortably into a Piraeus port day with a sensible return buffer.",
    ],
    highlights: [
      "The Parthenon Gallery with the original frieze at eye level",
      "The genuine Caryatids from the Erechtheion",
      "Glass floors over a live archaeological excavation",
      "The Acropolis rock itself, guided and in context",
    ],
    faqs: [
      {
        question: "Is the Acropolis Museum worth it on a cruise day?",
        answer:
          "Very much so — it holds the original sculptures from the monuments and explains them brilliantly. Combined with the rock itself it is the most complete way to understand the Acropolis in the time a port day allows.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The Acropolis climb is the demanding part; the museum is level with lifts between floors. Allow roughly two hours on the rock and 60–90 minutes in the museum.",
      },
      {
        question: "Can I just visit the museum without the Acropolis?",
        answer:
          "Yes — the museum alone is an easy, air-conditioned option beside Acropoli metro station, ideal if the climb or the heat is a concern. See our Acropolis Museum from the cruise port guide.",
      },
    ],
    relatedSlugs: [
      "acropolis-parthenon-shore-excursion",
      "athens-city-highlights-shore-excursion",
      "plaka-food-walking-shore-excursion",
    ],
    heroImage: HERO_IMAGES.museum.src,
    heroImageAlt: HERO_IMAGES.museum.alt,
  },
  {
    slug: "athens-city-highlights-shore-excursion",
    path: "/athens-city-highlights-shore-excursion",
    title: "Athens City Highlights Shore Excursion from Piraeus",
    shortTitle: "Athens City Highlights",
    summary:
      "The best of Athens in one loop — the Acropolis, Plaka, Syntagma and the changing of the guard, the Panathenaic Stadium and the Temple of Olympian Zeus, tailored to your hours ashore.",
    duration: "4–6 hours",
    fitness: "Moderate",
    distanceFromTerminal:
      "Central Athens is about 10–12 km from Piraeus — 30–45 minutes by coach. City tours loop the main sights with short walks between stops.",
    transferRequired: true,
    transferNote:
      "A guided coach tour is the efficient choice, combining drive-by landmarks with walking stops. Independent visitors can join the sights by metro and on foot but will fit less in.",
    bestFor: [
      "First-time visitors who want the whole picture",
      "Passengers who prefer variety over a single deep dive",
      "Groups with mixed interests",
    ],
    returnConfidence: "High",
    returnNote:
      "A structured city tour stays within central Athens and returns straight to Piraeus, so timing is reliable — a good choice if you want to see plenty without risking your all-aboard.",
    weatherConsiderations:
      "A mix of coach time and walking stops means less exposure than an Acropolis-only visit, but summer midday heat is still tiring — carry water and wear a hat.",
    cruiseSnapshot:
      "The city highlights tour is the sampler platter of Athens: the Acropolis for the icon, Plaka for atmosphere, Syntagma for the guard change, plus the stadium and Temple of Zeus. It is the best single choice for first-timers unsure what to prioritise.",
    snapshotFields: {
      timeInPort: "5+ hours to include the Acropolis",
      bestFor: "Overview, variety, first-time orientation",
      activityLevel: "Moderate — several short walks plus the Acropolis",
      familyFriendly: "Very good — changes of scene keep interest",
      returnToShip: "High — central loop back to Piraeus",
      popularTypes: "Guided city tours, city + Acropolis combos",
    },
    description: [
      "If you have never been to Athens and are not sure what to prioritise, the city highlights tour is the answer. It threads together the landmarks that tell the city's story — ancient, classical, and modern — into one manageable loop from Piraeus, with a licensed guide to join the dots.",
      "A typical route includes the Acropolis and Parthenon (the walking centrepiece), the neoclassical trilogy on Panepistimiou Street, Syntagma Square for the changing of the Evzones guard outside Parliament, the marble Panathenaic Stadium that hosted the first modern Olympics in 1896, and photo stops at the Temple of Olympian Zeus and Hadrian's Arch. Many tours finish with free time in Plaka.",
      "Because it balances coach transfers with short walking stops, this excursion covers far more ground than you could independently in the same hours, while a professional guide keeps one eye firmly on your return to the ship.",
    ],
    highlights: [
      "The Acropolis and Parthenon with a licensed guide",
      "The changing of the guard at Syntagma Square",
      "The marble Panathenaic Stadium of the 1896 Olympics",
      "The Temple of Olympian Zeus and Hadrian's Arch",
    ],
    faqs: [
      {
        question: "Does the city highlights tour include entry to the Acropolis?",
        answer:
          "Most do include a guided walk up the Acropolis; some budget tours only stop for photos below it. Always confirm whether Acropolis entry is included when you enquire, as it makes a big difference.",
      },
      {
        question: "Is this better than an Acropolis-only tour?",
        answer:
          "It depends on your goal. Choose city highlights for breadth and first-time orientation; choose the Acropolis and Museum combo for depth on the single most important site.",
      },
      {
        question: "Will I see the changing of the guard?",
        answer:
          "Guards stand at Syntagma at all times, with a small hourly change on the hour and the full ceremonial change on Sundays at 11:00. Tour timing determines exactly what you catch.",
      },
    ],
    relatedSlugs: [
      "acropolis-parthenon-shore-excursion",
      "athens-full-day-highlights-shore-excursion",
      "plaka-food-walking-shore-excursion",
    ],
    heroImage: HERO_IMAGES.athens.src,
    heroImageAlt: HERO_IMAGES.athens.alt,
  },
  {
    slug: "plaka-food-walking-shore-excursion",
    path: "/plaka-food-walking-shore-excursion",
    title: "Plaka Old Town & Athens Food Walking Shore Excursion",
    shortTitle: "Plaka Old Town & Food Walk",
    summary:
      "Athens at street level — the winding lanes of Plaka and the central market on foot, with tastes of Greek coffee, souvlaki, olives, cheese and honey beneath the Acropolis.",
    duration: "3–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Plaka sits below the Acropolis in central Athens, about 10 km from Piraeus — 30–40 minutes by taxi or coach, or a direct metro ride to Monastiraki.",
    transferRequired: true,
    transferNote:
      "A short transfer or metro ride reaches Plaka; the tour itself is a flat, easy walk. Independent walkers can follow the same lanes from Monastiraki station.",
    bestFor: [
      "Food lovers and relaxed strollers",
      "Passengers who have already seen the Acropolis",
      "Anyone wanting atmosphere over a big climb",
    ],
    returnConfidence: "High",
    returnNote:
      "A central, low-intensity walk with a short transfer keeps an easy return margin — one of the most relaxed ways to spend an Athens port day.",
    weatherConsiderations:
      "Plaka's narrow lanes are shaded by buildings and awnings, so it copes better with heat than the open Acropolis. Comfortable shoes help on cobbles and gentle slopes.",
    cruiseSnapshot:
      "When you want to feel Athens rather than climb it, Plaka delivers — neoclassical houses, cafés spilling onto cobbles, and the buzz of the market, all seasoned with Greek food. A gentle, atmospheric alternative or add-on to the ancient sites.",
    snapshotFields: {
      timeInPort: "4+ hours is comfortable",
      bestFor: "Food, culture, gentle strolling, photography",
      activityLevel: "Easy — flat lanes, some cobbles",
      familyFriendly: "Excellent",
      returnToShip: "High — central and low-intensity",
      popularTypes: "Food tours, Plaka walking tours",
    },
    description: [
      "Plaka is the oldest continuously inhabited neighbourhood in Athens, a village of narrow lanes, neoclassical houses and bougainvillea clinging to the northern slope of the Acropolis. A walking tour here is the human-scale counterpoint to the grandeur of the rock above — and adding food turns it into a highlight in its own right.",
      "A typical route winds through Plaka and neighbouring Monastiraki into the lively central market, pausing for tastes as you go: a proper Greek coffee, warm koulouri bread rings, souv.laki, olives and olive oil, feta and graviera cheeses, honey, and perhaps a shot of tsipouro. A guide explains the food, the history, and the everyday life of the city between mouthfuls.",
      "Because it is flat, central, and relaxed, this excursion suits shorter port calls, hot afternoons, and anyone who has already ticked off the Acropolis. It pairs beautifully with a morning on the rock for a complete Athens day.",
    ],
    highlights: [
      "The winding neoclassical lanes of Plaka",
      "The bustling Athens central market and Monastiraki",
      "Tastings of Greek coffee, souvlaki, cheese, olives and honey",
      "Views up to the Acropolis from the streets below",
    ],
    faqs: [
      {
        question: "Is Plaka walkable and easy on a cruise day?",
        answer:
          "Yes — it is flat, central, and safe, reached in a short transfer or a direct metro ride to Monastiraki. It is one of the least strenuous ways to experience Athens.",
      },
      {
        question: "Can I combine Plaka with the Acropolis?",
        answer:
          "Perfectly — the Acropolis rises directly above Plaka. A common port day is the Acropolis in the morning and Plaka for lunch and strolling afterwards.",
      },
      {
        question: "Is a food tour suitable for fussy eaters?",
        answer:
          "Generally yes — tastings are varied and you can skip anything you prefer not to try. Tell your operator about allergies or dietary needs when you enquire.",
      },
    ],
    relatedSlugs: [
      "athens-city-highlights-shore-excursion",
      "acropolis-parthenon-shore-excursion",
      "acropolis-museum-shore-excursion",
    ],
    heroImage: HERO_IMAGES.plaka.src,
    heroImageAlt: HERO_IMAGES.plaka.alt,
  },
  {
    slug: "cape-sounion-shore-excursion",
    path: "/cape-sounion-shore-excursion",
    title: "Cape Sounion & Temple of Poseidon Shore Excursion from Athens",
    shortTitle: "Cape Sounion & Temple of Poseidon",
    summary:
      "A scenic drive down the Athens Riviera to the Temple of Poseidon on the cliffs of Cape Sounion — dramatic coastal views and one of Greece's most beautiful temple settings.",
    duration: "4.5–6 hours (half day)",
    fitness: "Easy",
    distanceFromTerminal:
      "Cape Sounion is about 70 km southeast of Athens along the coast — roughly 1 hour 15 minutes to 1 hour 30 minutes each way by coach from the Piraeus area.",
    transferRequired: true,
    transferNote:
      "This is a coach excursion along the coast road; the temple itself is a short, easy walk from the car park. It is best done with an organised tour that manages your return to Piraeus.",
    bestFor: [
      "Passengers wanting scenery as much as ruins",
      "Those who have seen the Acropolis before",
      "Photographers and relaxed half-day travellers",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "The round trip covers around 140 km of coast road, so timing depends on traffic. Choose an operator who tracks your all-aboard and builds a comfortable buffer; this is not one to attempt independently on a tight call.",
    weatherConsiderations:
      "The temple sits on an exposed, breezy headland with little shade. It is glorious in the late-afternoon light but can be windy and hot in summer — bring sun protection and a light layer.",
    cruiseSnapshot:
      "Cape Sounion is the classic Athens half-day escape: a beautiful coastal drive to a marble temple perched above the Aegean, where Lord Byron famously carved his name. A change of pace and scenery from the city's ancient core.",
    snapshotFields: {
      timeInPort: "6+ hours recommended",
      bestFor: "Coastal scenery, photography, a change of pace",
      activityLevel: "Easy — short walk to the temple",
      familyFriendly: "Good — a manageable, scenic outing",
      returnToShip: "Moderate — a longer coastal transfer",
      popularTypes: "Half-day coach tours, sunset tours",
    },
    description: [
      "Cape Sounion is the southernmost tip of Attica, where the 5th-century BC Temple of Poseidon stands on a headland high above the sea. For ancient Athenian sailors it was the first sight of home; today it is one of the most photographed temple settings in Greece, framed by the deep blue of the Aegean.",
      "The journey is half the pleasure. The coach follows the Athens Riviera south, past beaches, marinas and seaside suburbs, with sweeping sea views much of the way. At the cape, a short walk brings you to the gleaming Doric columns — look for the spot where the poet Lord Byron is said to have carved his name in 1810.",
      "Because it is around 70 km each way, this excursion suits port calls of six hours or more. It works as a scenic half day in its own right, or — on a long call — as an afternoon complement to a morning at the Acropolis. Sunset visits are spectacular but only feasible if your ship stays late.",
    ],
    highlights: [
      "The cliff-top Temple of Poseidon above the Aegean",
      "The scenic Athens Riviera coastal drive",
      "Byron's reputed graffiti on the temple columns",
      "Panoramic sea views and superb photography",
    ],
    faqs: [
      {
        question: "How long does the Cape Sounion tour take from Athens?",
        answer:
          "Plan for around 4.5 to 6 hours in total, including roughly 1 hour 15 minutes to 1 hour 30 minutes of driving each way plus time at the temple.",
      },
      {
        question: "Is Cape Sounion realistic on a short port call?",
        answer:
          "It needs at least six hours ashore because of the distance. On a shorter call, stay closer to the city with the Acropolis or a Plaka walk instead.",
      },
      {
        question: "Can I see the sunset at Cape Sounion on a cruise day?",
        answer:
          "Only if your ship departs Piraeus late in the evening. Sunset is the temple's finest hour, but most cruise schedules make an afternoon visit the practical choice — confirm your all-aboard time first.",
      },
    ],
    relatedSlugs: [
      "athens-city-highlights-shore-excursion",
      "corinth-shore-excursion-from-athens",
      "acropolis-parthenon-shore-excursion",
    ],
    heroImage: HERO_IMAGES.sounion.src,
    heroImageAlt: HERO_IMAGES.sounion.alt,
  },
  {
    slug: "corinth-shore-excursion-from-athens",
    path: "/corinth-shore-excursion-from-athens",
    title: "Ancient Corinth & Corinth Canal Shore Excursion from Athens",
    shortTitle: "Ancient Corinth & Canal",
    summary:
      "Cross into the Peloponnese to see the astonishing Corinth Canal and the ruins of Ancient Corinth, where St Paul preached — a rewarding half-to-full-day trip from Piraeus.",
    duration: "5–7 hours",
    fitness: "Moderate",
    distanceFromTerminal:
      "Ancient Corinth is about 85 km west of Athens — roughly 1 hour 15 minutes each way by coach on the motorway, with the canal a short stop en route.",
    transferRequired: true,
    transferNote:
      "A coach excursion is the practical way to combine the canal and the archaeological site. Independent travel is possible by train and bus but eats into your limited port time.",
    bestFor: [
      "History and Bible-history enthusiasts",
      "Repeat visitors who have seen the Acropolis",
      "Passengers with six hours or more ashore",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Motorway driving makes timing fairly predictable, but the round trip is around 170 km. Book an operator who guarantees your return to Piraeus and keeps a sensible buffer.",
    weatherConsiderations:
      "The archaeological site is open and largely unshaded — hot in summer. Sturdy shoes help on uneven ancient stone; carry water and sun protection.",
    cruiseSnapshot:
      "Corinth combines a jaw-dropping feat of engineering — the narrow canal slicing through solid rock — with a major classical and early-Christian site. A satisfying trip for those who want more than the city, on a call long enough to allow it.",
    snapshotFields: {
      timeInPort: "6+ hours recommended",
      bestFor: "Classical history, St Paul, engineering, scenery",
      activityLevel: "Moderate — uneven ground at the ruins",
      familyFriendly: "Good — the canal wows all ages",
      returnToShip: "Moderate — motorway transfer each way",
      popularTypes: "Half-day and full-day coach tours",
    },
    description: [
      "This excursion crosses from Attica into the Peloponnese, beginning at the Corinth Canal — a 6.4 km channel cut straight through the Isthmus of Corinth in the 1890s. Barely 21 metres wide at water level, with sheer rock walls plunging to a ribbon of turquoise, it is a genuinely startling sight and an unmissable photo stop.",
      "A short drive on lies Ancient Corinth, one of the great cities of the classical and Roman world. Highlights include the imposing Doric Temple of Apollo, the marble-paved Lechaion Way, the bema where the Apostle Paul is said to have addressed the Corinthians, and an excellent site museum. Above the ruins rises the fortress rock of Acrocorinth.",
      "At around 85 km each way on good motorway, Corinth is realistic on a port call of six hours or more. It is one of the best options for travellers who have already seen central Athens and want a rewarding half-to-full day beyond the city — with an operator managing the return to your ship.",
    ],
    highlights: [
      "The dramatic Corinth Canal cut through solid rock",
      "The Temple of Apollo at Ancient Corinth",
      "The bema associated with the Apostle Paul",
      "The Ancient Corinth site museum and Acrocorinth views",
    ],
    faqs: [
      {
        question: "How far is Corinth from the Piraeus cruise port?",
        answer:
          "Ancient Corinth is about 85 km west of Athens, roughly 1 hour 15 minutes each way by coach on the motorway, with the canal a short stop along the route.",
      },
      {
        question: "Is Corinth suitable for a short cruise call?",
        answer:
          "It is best on calls of six hours or more given the round trip of around 170 km. On a shorter call, choose an Athens city sight instead.",
      },
      {
        question: "Why is Corinth significant for Christian visitors?",
        answer:
          "The Apostle Paul lived and preached in Corinth for about 18 months and later wrote his letters to the Corinthians. The site includes the bema (public speaking platform) traditionally linked to him.",
      },
    ],
    relatedSlugs: [
      "delphi-shore-excursion-from-athens",
      "cape-sounion-shore-excursion",
      "athens-city-highlights-shore-excursion",
    ],
    heroImage: HERO_IMAGES.corinth.src,
    heroImageAlt: HERO_IMAGES.corinth.alt,
  },
  {
    slug: "delphi-shore-excursion-from-athens",
    path: "/delphi-shore-excursion-from-athens",
    title: "Delphi Full-Day Shore Excursion from Athens",
    shortTitle: "Delphi Full-Day Tour",
    summary:
      "A full-day journey to Delphi, the mountain sanctuary the ancient Greeks called the centre of the world — the Temple of Apollo, the oracle, and a superb museum, only for long port calls.",
    duration: "9–10.5 hours (full day)",
    fitness: "Moderate",
    distanceFromTerminal:
      "Delphi is about 180 km northwest of Athens — roughly 2 hours 30 minutes to 3 hours each way by coach through the mountains.",
    transferRequired: true,
    transferNote:
      "This is a long full-day coach excursion. It is only realistic on an extended port call, and only sensible with a professional operator who commits to your return time.",
    bestFor: [
      "Dedicated history lovers on a long call",
      "Repeat Athens visitors seeking something different",
      "Passengers with a genuinely full day (10+ hours)",
    ],
    returnConfidence: "Tight",
    returnNote:
      "With up to three hours' driving each way, Delphi only works on very long port calls and demands a professional operator who guarantees the return to Piraeus. Do not attempt it independently on a cruise day.",
    weatherConsiderations:
      "Delphi is at altitude on the slopes of Mount Parnassus — cooler than Athens and occasionally misty. The site is steep and uneven; wear proper walking shoes and bring a layer.",
    cruiseSnapshot:
      "Delphi is one of the most atmospheric sites in Greece — a sanctuary clinging to a mountainside where pilgrims once consulted the oracle. It is breathtaking, but the long drive means it is only for cruise passengers with a genuinely full day in port.",
    snapshotFields: {
      timeInPort: "10+ hours essential",
      bestFor: "Serious history, dramatic scenery, the oracle",
      activityLevel: "Moderate — steep, uneven paths at the site",
      familyFriendly: "Better for older children and adults",
      returnToShip: "Tight — a long mountain transfer each way",
      popularTypes: "Full-day coach tours only",
    },
    description: [
      "To the ancient Greeks, Delphi was the omphalos — the navel of the world — where the oracle of Apollo delivered prophecies that shaped the decisions of kings and cities. Set on the terraced slopes of Mount Parnassus above a sea of olive trees, it is arguably the most dramatically located of all Greek sanctuaries.",
      "A visit follows the Sacred Way up past treasuries to the Temple of Apollo, the ancient theatre, and the stadium higher still, with the outstanding Delphi Archaeological Museum nearby — home to the famous bronze Charioteer. Many tours pause in the pretty mountain town of Arachova and include lunch on this long day out.",
      "The catch is the distance: around 180 km and up to three hours each way. This makes Delphi a full-day excursion of nine to ten hours or more, feasible only when your ship offers a long call at Piraeus. When time allows, it is unforgettable — but always travel with an operator who guarantees your return to the ship.",
    ],
    highlights: [
      "The Sacred Way and the Temple of Apollo",
      "The ancient theatre and stadium on the mountainside",
      "The bronze Charioteer in the Delphi museum",
      "Spectacular Mount Parnassus scenery and Arachova",
    ],
    faqs: [
      {
        question: "Can I visit Delphi on a cruise call at Piraeus?",
        answer:
          "Only on a long port call of about 10 hours or more. With up to three hours' driving each way, it is a committed full day and should only be done with an organised tour that guarantees your return.",
      },
      {
        question: "Is Delphi better than staying in Athens?",
        answer:
          "It depends on your priorities and your hours ashore. First-time visitors are usually better served by the Acropolis and central Athens; Delphi rewards those with a full day who have already seen the city or crave dramatic scenery.",
      },
      {
        question: "How strenuous is the Delphi site?",
        answer:
          "The archaeological site climbs the mountainside on steep, uneven paths. You can see the main temple area with moderate effort; reaching the stadium at the top is a steeper walk. Good shoes are essential.",
      },
    ],
    relatedSlugs: [
      "corinth-shore-excursion-from-athens",
      "cape-sounion-shore-excursion",
      "athens-full-day-highlights-shore-excursion",
    ],
    heroImage: HERO_IMAGES.delphi.src,
    heroImageAlt: HERO_IMAGES.delphi.alt,
  },
  {
    slug: "athens-full-day-highlights-shore-excursion",
    path: "/athens-full-day-highlights-shore-excursion",
    title: "Athens Full-Day Highlights Shore Excursion from Piraeus",
    shortTitle: "Athens Full-Day Highlights",
    summary:
      "Make the most of a long port call — the Acropolis and its museum, central Athens, Plaka and free time, combined into one relaxed full day with a licensed guide.",
    duration: "6.5–8 hours (full day)",
    fitness: "Moderate",
    distanceFromTerminal:
      "Everything is in central Athens, about 10–12 km from Piraeus — 30–45 minutes each way by coach, with the sights close together in the centre.",
    transferRequired: true,
    transferNote:
      "A guided full-day coach tour handles transfers and entries and paces the day sensibly, including free time for lunch in Plaka.",
    bestFor: [
      "First-time visitors with a full day ashore",
      "Passengers who want depth without rushing",
      "Anyone wanting the icon, the museum and the city",
    ],
    returnConfidence: "High",
    returnNote:
      "Everything stays within central Athens with a short, predictable transfer, so even a packed full day keeps a comfortable return margin to Piraeus.",
    weatherConsiderations:
      "A full day balances the exposed Acropolis with the air-conditioned museum and shaded Plaka — do the rock first thing, before the midday heat, and slow down after lunch.",
    cruiseSnapshot:
      "With a full day in port, this is the definitive Athens experience: the Acropolis and Parthenon, the Acropolis Museum's original sculptures, the city's classical and modern landmarks, and time to wander Plaka — all without the rush.",
    snapshotFields: {
      timeInPort: "7+ hours ideal",
      bestFor: "The complete first-time Athens day",
      activityLevel: "Moderate — the Acropolis plus easy city walking",
      familyFriendly: "Very good — varied and well paced",
      returnToShip: "High — central, short transfer",
      popularTypes: "Full-day guided city + Acropolis + museum tours",
    },
    description: [
      "When your ship gives you a full day at Piraeus, this excursion turns it into the complete Athens experience without the stress of doing it yourself. It combines the unmissable Acropolis and Parthenon with the Acropolis Museum's original sculptures, the city's headline landmarks, and free time to soak up Plaka.",
      "A typical day starts on the Acropolis while it is cool and the light is best, descends to the Acropolis Museum for the frieze and the Caryatids, then tours central Athens — Syntagma and the changing of the guard, the Panathenaic Stadium, the Temple of Olympian Zeus and Hadrian's Arch — before free time for lunch and shopping in Plaka and Monastiraki.",
      "Because it is guided and paced, you see far more than an independent visitor could, with entries and timing handled for you and a comfortable buffer built in for the short return to Piraeus. It is the single best choice for first-time visitors lucky enough to have a long call.",
    ],
    highlights: [
      "The Acropolis, Parthenon and Acropolis Museum together",
      "Syntagma Square and the changing of the guard",
      "The Panathenaic Stadium and Temple of Olympian Zeus",
      "Free time in Plaka and Monastiraki",
    ],
    faqs: [
      {
        question: "How many hours do I need for the full-day Athens tour?",
        answer:
          "Around seven hours ashore is ideal so the day never feels rushed. It comfortably covers the Acropolis, the museum, the central sights and free time in Plaka.",
      },
      {
        question: "Is the full-day tour too much walking?",
        answer:
          "It is well paced with coach transfers between areas, but the Acropolis climb and city walking add up. Wear comfortable, grippy shoes and it suits most reasonably mobile visitors.",
      },
      {
        question: "Does it include lunch?",
        answer:
          "Most full-day tours include free time for lunch in Plaka rather than a set meal, so you can choose. Confirm exactly what is included when you enquire.",
      },
    ],
    relatedSlugs: [
      "acropolis-museum-shore-excursion",
      "athens-city-highlights-shore-excursion",
      "acropolis-parthenon-shore-excursion",
    ],
    heroImage: HERO_IMAGES.athens.src,
    heroImageAlt: HERO_IMAGES.athens.alt,
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getExcursionByPath(path: string): Excursion | undefined {
  return excursions.find((e) => e.path === path);
}

export function getRelatedExcursions(slug: string): Excursion[] {
  const excursion = getExcursion(slug);
  if (!excursion) return [];
  return excursion.relatedSlugs
    .map((s) => getExcursion(s))
    .filter((e): e is Excursion => e !== undefined);
}

export const staticGuidePaths = [
  "/piraeus-cruise-port-guide",
  "/acropolis-from-piraeus-cruise-port",
  "/parthenon-guide-for-cruise-passengers",
  "/acropolis-museum-from-cruise-port",
  "/plaka-from-piraeus-cruise-port",
  "/ancient-agora-guide",
  "/syntagma-square-changing-of-the-guard",
  "/temple-of-olympian-zeus",
  "/best-things-to-do-in-athens-from-a-cruise-ship",
  "/one-day-in-athens-from-a-cruise-ship",
  "/walking-and-transport-from-piraeus-cruise-port",
  "/athens-metro-from-piraeus",
  "/taxi-guide-from-piraeus-cruise-port",
  "/independent-vs-cruise-line-excursions",
  "/best-athens-excursions-for-families",
  "/best-athens-excursions-for-history-lovers",
  "/best-athens-excursions-for-first-time-visitors",
  "/cruise-ship-schedules",
  "/athens-cruise-planner",
  "/faq",
  "/enquire",
  "/about",
  "/privacy",
  "/terms",
  "/shore-excursions",
];
