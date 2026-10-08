import { useState } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const SEGMENTS = [
  {
    id: "fullsize",
    number: "01",
    badge: "HIGH-VOLUME LEADERS",
    title: "The Big Three Full-Size Giants",
    tagline: "Dominating North American roads with massive intake tuning demand.",
    description:
      "Because there are millions of these trucks on the road, matching and installing cold air systems for these platforms represents 80%+ of truck performance upgrades. From naturally aspirated V8 rumble to explosive twin-turbo boost, each platform has a distinct mechanical purpose.",
    image: "/images/fullsize.jpg",
    models: [
      {
        name: "Ford F-150 (V8 Coyote & EcoBoost)",
        detail:
          "The perennial sales king (560,000+ units). We specialize in two core setups: the 5.0L V8 'Coyote' (where owners buy intakes explicitly for the roaring acoustic sound) and the 3.5L / 2.7L EcoBoost V6 twins (where a cold air intake frees up restrictive factory airways to yield massive, dyno-proven turbo gains and spool sound).",
        highlight: "5.0L Coyote Roar • 3.5L/2.7L Turbo Gains",
      },
      {
        name: "Chevrolet Silverado / GMC Sierra 1500",
        detail:
          "Combined, GM holds a massive share of the full-size market. Their core 5.3L and 6.2L EcoTec3 V8 engines are legendary canvas platforms for aftermarket intake tuning — delivering sharp throttle response, crisp induction sound, and steady year-round demand.",
        highlight: "5.3L & 6.2L EcoTec3 V8 Platforms",
      },
      {
        name: "RAM 1500 (HEMI V8 & Hurricane I6)",
        detail:
          "Huge market momentum. We support high-volume legacy 5.7L HEMI V8 owners looking for iconic American muscle acoustics, while also getting ahead of the curve with high-flow setups for the all-new 3.0L twin-turbo 'Hurricane' Inline-6 engine.",
        highlight: "5.7L HEMI Muscle • 3.0L Hurricane Twin-Turbo",
      },
    ],
  },
  {
    id: "midsize",
    number: "02",
    badge: "HIGH ENTHUSIAST DEMAND",
    title: "The Midsize Off-Road Kings",
    tagline: "Fiercely modified for overlanding, backcountry trails, and rock crawling.",
    description:
      "While midsize trucks sell fewer raw units than full-size giants, their owners are vastly more likely to heavily modify them for overland expeditions and trail adventures. Filtration protection and water resistance are paramount here.",
    image: "/images/midsize.jpg",
    models: [
      {
        name: "Toyota Tacoma (The Undisputed King)",
        detail:
          "The undisputed king of midsize truck sales with a fiercely loyal customization subculture. We specialize in both the hyper-popular 2016–2023 3.5L V6 models as well as the newest 2024+ turbocharged hybrid powertrains. Sealed closed-box intakes (S&B, Volant) are king here to protect engine internals from fine trail dust and deep water crossings.",
        highlight: "2016–2023 V6 • 2024+ i-FORCE Turbo • Sealed Closed-Box",
      },
      {
        name: "Chevrolet Colorado & GMC Canyon (ZR2 / AT4)",
        detail:
          "Led by aggressive off-road trims like the ZR2 and AT4/AT4X, these trucks utilize high-output turbocharged four-cylinder engines that beg for less restrictive intake piping when crawling mountain switchbacks and open washboard tracks.",
        highlight: "2.7L Turbo High-Output • ZR2 & AT4X Packages",
      },
    ],
  },
  {
    id: "diesel",
    number: "03",
    badge: "HIGH-DOLLAR SPEND & TOWING",
    title: "The Diesel Heavy-Duty Subculture",
    tagline: "High-torque workhorses built for heavy hauling and high-boost performance.",
    description:
      "Do not ignore the HD truck segment (Ford Super Duty F-250/F-350, Chevy/GMC 2500/3500 HD, and Ram 2500/3500+). Diesel truck enthusiasts invest heavily in their builds, pairing cold air intakes with tuners to drop Exhaust Gas Temperatures (EGTs) and maximize towing stamina.",
    image: "/images/heavyduty.jpg",
    models: [
      {
        name: "Ford F-250 / F-350 Super Duty (6.7L Powerstroke)",
        detail:
          "The 6.7L Powerstroke diesel requires immense volume of cold, dense air. Upgraded high-flow systems pull uninterrupted air to keep EGTs down during steep mountain climbs with 15,000+ lb trailers.",
        highlight: "6.7L Powerstroke • EGT Reduction • Heavy Towing",
      },
      {
        name: "RAM 2500 / 3500 Heavy Duty (6.7L Cummins)",
        detail:
          "The legendary inline-6 Cummins diesel breathes best with oversized intake tubes and massive conical filters that eliminate factory bottlenecking and deliver signature turbo inducer whistle.",
        highlight: "6.7L Cummins Turbo-Diesel • High-CFM Airflow",
      },
      {
        name: "Chevrolet Silverado & GMC Sierra HD (6.6L Duramax)",
        detail:
          "6.6L Duramax V8 platforms paired with Allison transmissions benefit immediately from sealed high-capacity airboxes that feed cooler air straight into the turbocharger for effortless highway pulling power.",
        highlight: "6.6L Duramax Turbo-Diesel • Cooler Charge Air",
      },
    ],
  },
];

export default function CoreTruckSegments() {
  const [activeTab, setActiveTab] = useState(0);
  const current = SEGMENTS[activeTab];

  return (
    <section id="segments" className="relative overflow-hidden bg-light-bg py-24 text-light-ink lg:py-36">
      <div className="tex-grid-light absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-volt/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-amber-500">05</span>
                <span className="h-px w-12 bg-amber-400" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-light-mute">
                  MARKET SPECIALIZATION
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-light-ink sm:text-6xl lg:text-8xl">
                The 3 pillars of
                <br />
                <span className="text-amber-500">truck performance.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-4">
            <p className="max-w-sm border-l-2 border-amber-400 pl-5 text-base leading-relaxed text-light-mute">
              Trucks represent over 80% of our market. We focus our sourcing and
              installation on the three core platforms driving North American roads.
            </p>
          </Reveal>
        </div>

        {/* category selector tabs */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {SEGMENTS.map((seg, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={seg.id}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "group relative border p-5 text-left transition-all duration-300 sm:p-6",
                  isActive
                    ? "border-slate-950 bg-slate-950 text-white shadow-xl"
                    : "border-light-border bg-white text-slate-800 hover:border-slate-950 hover:bg-slate-50"
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "font-display text-xs font-bold tracking-[0.25em]",
                      isActive ? "text-volt" : "text-light-mute"
                    )}
                  >
                    PILLAR {seg.number}
                  </span>
                  <span
                    className={cn(
                      "border px-2 py-0.5 font-display text-[9px] font-bold tracking-widest uppercase",
                      isActive
                        ? "border-volt/40 bg-volt/10 text-volt"
                        : "border-slate-200 bg-slate-100 text-slate-700"
                    )}
                  >
                    {seg.badge}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
                  {seg.title}
                </h3>
                {isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-volt" />}
              </button>
            );
          })}
        </div>

        {/* active category content stage */}
        <div className="mt-8 border border-light-border bg-white p-6 shadow-2xl shadow-slate-200/80 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* image visual card */}
            <div className="relative overflow-hidden border border-slate-200 lg:col-span-5">
              <div className="relative h-72 sm:h-96 lg:h-[32rem]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 inset-x-5 flex items-center justify-between bg-slate-950/85 p-4 backdrop-blur-sm border border-slate-800 text-white">
                  <div>
                    <span className="font-display text-[10px] font-semibold tracking-[0.3em] text-volt">
                      PLATFORM FOCUS
                    </span>
                    <p className="font-display text-lg font-bold uppercase">{current.title}</p>
                  </div>
                  <span className="h-2 w-2 bg-volt" />
                </div>
              </div>
            </div>

            {/* platform detail copy */}
            <div className="space-y-6 lg:col-span-7">
              <div>
                <span className="font-display text-xs font-bold tracking-[0.3em] text-amber-600">
                  {current.badge}
                </span>
                <h3 className="mt-1 font-display text-3xl font-bold uppercase text-slate-950 sm:text-4xl">
                  {current.title}
                </h3>
                <p className="mt-2 font-display text-base font-semibold text-slate-700">
                  {current.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-light-mute">
                  {current.description}
                </p>
              </div>

              {/* models breakdown */}
              <div className="space-y-4 border-t border-slate-100 pt-6">
                {current.models.map((mod, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-slate-950 bg-slate-50/80 p-4 transition-all hover:border-amber-500 hover:bg-slate-50"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display text-lg font-bold uppercase text-slate-950">
                        {mod.name}
                      </h4>
                      <span className="border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                        {mod.highlight}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {mod.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
                <a
                  href="#vehicles"
                  className="volt-glow inline-flex flex-1 items-center justify-center gap-3 bg-volt px-7 py-4 font-display text-base font-bold tracking-[0.15em] text-ink shadow-md transition-colors hover:bg-volt-2"
                >
                  FIND MY INTAKE FITMENT
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center border border-slate-300 bg-white px-7 py-4 font-display text-base font-bold tracking-[0.15em] text-slate-900 transition-colors hover:border-slate-950 hover:bg-slate-50"
                >
                  BOOK INSTALLATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
