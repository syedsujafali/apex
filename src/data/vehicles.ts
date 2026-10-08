export const YEARS = [
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
] as const;

export type Make = "Ford" | "Chevrolet" | "GMC" | "Ram" | "Toyota";

export const MAKES: Make[] = ["Ford", "Chevrolet", "GMC", "Ram", "Toyota"];

export const MODELS: Record<Make, string[]> = {
  Ford: ["F-150", "F-250 Super Duty", "F-350 Super Duty"],
  Chevrolet: ["Silverado 1500", "Silverado 2500HD", "Silverado 3500HD", "Colorado"],
  GMC: ["Sierra 1500", "Sierra 2500HD", "Sierra 3500HD", "Canyon"],
  Ram: ["1500", "2500", "3500"],
  Toyota: ["Tacoma", "Tundra"],
};

export const ENGINES: Record<string, string[]> = {
  "F-150": [
    "5.0L Coyote V8 (Acoustic Roar)",
    "3.5L EcoBoost Twin-Turbo V6",
    "2.7L EcoBoost Twin-Turbo V6",
    "3.5L PowerBoost Hybrid V6",
    "3.0L Powerstroke Diesel V6",
  ],
  "F-250 Super Duty": [
    "6.7L Powerstroke Diesel V8 (High Output)",
    "6.7L Powerstroke Diesel V8 (Standard)",
    "7.3L Godzilla Gas V8",
    "6.8L Gas V8",
  ],
  "F-350 Super Duty": [
    "6.7L Powerstroke Diesel V8 (High Output)",
    "6.7L Powerstroke Diesel V8 (Standard)",
    "7.3L Godzilla Gas V8",
    "6.8L Gas V8",
  ],
  "Silverado 1500": [
    "5.3L EcoTec3 V8",
    "6.2L EcoTec3 V8",
    "3.0L Duramax Turbo-Diesel I6",
    "2.7L TurboMax High-Output",
  ],
  "Silverado 2500HD": [
    "6.6L Duramax Turbo-Diesel V8",
    "6.6L V8 Gas",
  ],
  "Silverado 3500HD": [
    "6.6L Duramax Turbo-Diesel V8",
    "6.6L V8 Gas",
  ],
  Colorado: [
    "2.7L Turbo High-Output (ZR2 / Trail Boss)",
    "2.7L Turbo (Standard)",
    "3.6L V6 (2016–2022)",
    "2.8L Duramax Turbo-Diesel",
  ],
  "Sierra 1500": [
    "6.2L EcoTec3 V8 (AT4 / Denali)",
    "5.3L EcoTec3 V8",
    "3.0L Duramax Turbo-Diesel I6",
    "2.7L TurboMax High-Output",
  ],
  "Sierra 2500HD": [
    "6.6L Duramax Turbo-Diesel V8 (AT4 / Denali)",
    "6.6L V8 Gas",
  ],
  "Sierra 3500HD": [
    "6.6L Duramax Turbo-Diesel V8 (AT4 / Denali)",
    "6.6L V8 Gas",
  ],
  Canyon: [
    "2.7L Turbo High-Output (AT4X / AT4)",
    "2.7L Turbo (Standard)",
    "3.6L V6 (2016–2022)",
  ],
  "1500": [
    "5.7L HEMI V8 (eTorque & Classic)",
    "3.0L Hurricane Twin-Turbo I6 (2025+)",
    "3.6L Pentastar V6",
    "3.0L EcoDiesel V6",
  ],
  "2500": [
    "6.7L Cummins Turbo-Diesel I6 (High Torque)",
    "6.4L HEMI Heavy-Duty V8",
  ],
  "3500": [
    "6.7L Cummins High-Output Turbo-Diesel I6",
    "6.4L HEMI Heavy-Duty V8",
  ],
  Tacoma: [
    "3.5L V6 (2016–2023 Trail/TRD)",
    "2.4L i-FORCE Turbo (2024+)",
    "2.4L i-FORCE MAX Hybrid (2024+ TRD Pro)",
  ],
  Tundra: [
    "3.4L i-FORCE MAX Twin-Turbo Hybrid (2022+)",
    "3.4L i-FORCE Twin-Turbo V6 (2022+)",
    "5.7L i-FORCE V8 (2016–2021)",
  ],
};

export const BRANDS = [
  { name: "aFe POWER", specialty: "Momentum GT & Track Series", turnaround: "1–2 Day Sourcing" },
  { name: "S&B FILTERS", specialty: "Sealed Cold Air with Clear Lid", turnaround: "In-Stock / 1 Day" },
  { name: "K&N ENGINEERING", specialty: "High-Flow 57/77 Series Intakes", turnaround: "Same/Next Day" },
  { name: "BANKS POWER", specialty: "Ram-Air HD Diesel Systems", turnaround: "1–2 Day Sourcing" },
  { name: "VOLANT PERFORMANCE", specialty: "Closed-Box Donaldson PowerCore", turnaround: "1–2 Day Sourcing" },
  { name: "AIRAID", specialty: "CAD Enclosed Intake Systems", turnaround: "1–2 Day Sourcing" },
  { name: "ROUSH PERFORMANCE", specialty: "Ford Specialized Cold Air Kits", turnaround: "1–2 Day Sourcing" },
  { name: "INJEN TECHNOLOGY", specialty: "Evolution Tuned Intakes", turnaround: "1–2 Day Sourcing" },
  { name: "AEM INDUCTION", specialty: "Brute Force Truck Intakes", turnaround: "1–2 Day Sourcing" },
  { name: "CORSA PERFORMANCE", specialty: "Closed Box with Pro5 Filter", turnaround: "1–2 Day Sourcing" },
  { name: "MBRP", specialty: "Performance Intake Tubes & Kits", turnaround: "1–2 Day Sourcing" },
  { name: "MISHIMOTO", specialty: "Engineered Heavy-Duty Intakes", turnaround: "1–2 Day Sourcing" },
];

export const APPLICATIONS = [
  {
    category: "FULL-SIZE GIANTS",
    vehicle: "Ford F-150 (V8 Coyote & EcoBoost)",
    years: "2016 – 2026",
    engines: "5.0L V8 Coyote • 3.5L & 2.7L EcoBoost Twins • PowerBoost",
    fuel: "GAS & HYBRID",
    focus: "5.0L owners buy for the roaring V8 sound; EcoBoost twins gain massive dyno-proven turbo airflow and throttle punch.",
    popularKits: "S&B Closed Box, Roush Cold Air, aFe Momentum GT",
  },
  {
    category: "FULL-SIZE GIANTS",
    vehicle: "Chevrolet Silverado & GMC Sierra 1500",
    years: "2016 – 2026",
    engines: "5.3L & 6.2L EcoTec3 V8 • 3.0L Duramax Diesel • 2.7L TurboMax",
    fuel: "GAS & DIESEL",
    focus: "Legendary canvas platforms for aftermarket tuning. Intakes provide instant pedal response and deep acoustic muscle.",
    popularKits: "Volant Closed Box, aFe Momentum, K&N 77-Series",
  },
  {
    category: "FULL-SIZE GIANTS",
    vehicle: "RAM 1500 (HEMI & Hurricane)",
    years: "2016 – 2026",
    engines: "5.7L HEMI V8 • 3.0L Twin-Turbo Hurricane Inline-6",
    fuel: "GAS",
    focus: "High-volume 5.7L HEMI roar + cutting-edge 3.0L twin-turbo Hurricane I6 platform which responds exceptionally well to cold air.",
    popularKits: "S&B Ram Air, aFe Stage-2, K&N 63-Series",
  },
  {
    category: "MIDSIZE OFF-ROAD",
    vehicle: "Toyota Tacoma (Undisputed King)",
    years: "2016 – 2026",
    engines: "3.5L V6 (2016–2023) • 2.4L Turbo & i-FORCE MAX Hybrid (2024+)",
    fuel: "GAS & HYBRID",
    focus: "Enthusiast overlanding staple. High demand for sealed closed-box intakes (S&B, Volant) to protect against dust, sand, and water crossings on trail rides.",
    popularKits: "S&B Sealed Intake with Silicone Scoop, Volant Closed Box",
  },
  {
    category: "MIDSIZE OFF-ROAD",
    vehicle: "Chevrolet Colorado & GMC Canyon (ZR2 / AT4)",
    years: "2016 – 2026",
    engines: "2.7L Turbo High-Output • 3.6L V6 • 2.8L Duramax",
    fuel: "GAS & DIESEL",
    focus: "Potent turbocharged four-cylinder engines that beg for less restrictive intake paths when climbing trails and logging roads.",
    popularKits: "aFe Momentum GT, K&N Blackhawk, S&B Enclosed",
  },
  {
    category: "HEAVY-DUTY DIESEL",
    vehicle: "Ford Super Duty, Chevy/GMC HD & Ram 2500/3500+",
    years: "2016 – 2026",
    engines: "6.7L Powerstroke • 6.6L Duramax • 6.7L Cummins Diesel",
    fuel: "HEAVY-DUTY DIESEL",
    focus: "High-spend enthusiasts pairing intakes with tuners to lower Exhaust Gas Temperatures (EGTs) and maximize heavy towing airflow under load.",
    popularKits: "Banks Ram-Air System, S&B HD Diesel Box, aFe Power Momentum",
  },
];
