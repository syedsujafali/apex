export const YEARS = ["2025", "2024", "2023", "2022", "2021", "2020"] as const;

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
  "F-150": ["2.7L EcoBoost V6", "3.5L EcoBoost V6", "5.0L Coyote V8", "3.0L Power Stroke Diesel"],
  "F-250 Super Duty": ["6.8L V8 Gas", "7.3L Godzilla V8", "6.7L Power Stroke Diesel"],
  "F-350 Super Duty": ["6.8L V8 Gas", "7.3L Godzilla V8", "6.7L Power Stroke Diesel"],
  "Silverado 1500": ["2.7L Turbo", "5.3L V8", "6.2L V8", "3.0L Duramax Diesel"],
  "Silverado 2500HD": ["6.6L V8 Gas", "6.6L Duramax Diesel"],
  "Silverado 3500HD": ["6.6L V8 Gas", "6.6L Duramax Diesel"],
  Colorado: ["2.7L Turbo", "3.6L V6 (2020–22)"],
  "Sierra 1500": ["2.7L Turbo", "5.3L V8", "6.2L V8", "3.0L Duramax Diesel"],
  "Sierra 2500HD": ["6.6L V8 Gas", "6.6L Duramax Diesel"],
  "Sierra 3500HD": ["6.6L V8 Gas", "6.6L Duramax Diesel"],
  Canyon: ["2.7L Turbo", "3.6L V6 (2020–22)"],
  "1500": ["3.6L Pentastar V6", "5.7L HEMI V8", "3.0L EcoDiesel"],
  "2500": ["6.4L HEMI V8", "6.7L Cummins Diesel"],
  "3500": ["6.4L HEMI V8", "6.7L Cummins Diesel"],
  Tacoma: ["3.5L V6 (2020–23)", "2.4L i-FORCE Turbo (2024+)"],
  Tundra: ["5.7L V8 (2020–21)", "3.4L i-FORCE Twin-Turbo (2022+)"],
};

export const BRANDS = [
  "aFe POWER",
  "A'PEXi",
  "APR",
  "CORSA",
  "Dinan",
  "Haltech",
  "HKS",
  "JLT",
  "K&N",
  "S&B",
  "Vararam",
];

export const APPLICATIONS = [
  {
    vehicle: "Ford F-150",
    years: "2020 – 2025",
    engines: "2.7L / 3.5L EcoBoost • 5.0L V8 • 3.0L Diesel",
    fuel: "GAS + DIESEL",
    note: "Multiple intake systems typically sourceable for this platform.",
  },
  {
    vehicle: "Chevrolet Silverado 1500",
    years: "2020+",
    engines: "2.7L Turbo • 5.3L / 6.2L V8 • 3.0L Duramax",
    fuel: "GAS + DIESEL",
    note: "Strong aftermarket coverage across gas and diesel engines.",
  },
  {
    vehicle: "Ram 1500",
    years: "2020+",
    engines: "3.6L V6 • 5.7L HEMI • 3.0L EcoDiesel",
    fuel: "GAS + DIESEL",
    note: "Popular platform with wide intake application support.",
  },
  {
    vehicle: "Ford F-250 / F-350",
    years: "2020+",
    engines: "6.7L Power Stroke • 7.3L Godzilla",
    fuel: "GAS + DIESEL",
    note: "Heavy-duty applications for towing and work trucks.",
  },
  {
    vehicle: "Ram 2500 / 3500",
    years: "2020+",
    engines: "6.7L Cummins • 6.4L HEMI",
    fuel: "GAS + DIESEL",
    note: "Cummins intake applications are a core specialty.",
  },
  {
    vehicle: "Toyota Tacoma",
    years: "2020+",
    engines: "3.5L V6 • 2.4L i-FORCE Turbo",
    fuel: "GAS",
    note: "Mid-size coverage for street and off-road builds.",
  },
];
