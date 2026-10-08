import { useState } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const BUILDS = [
  {
    id: "gmc",
    name: "2024 GMC Sierra 1500 AT4",
    engine: "6.2L EcoTec3 V8",
    intake: "S&B Enclosed Cold Air Intake • Oiled 8-Layer Cotton",
    img: "/images/build1.jpg",
    customer: "Marcus Vance",
    location: "Austin, TX",
    rating: 5,
    quote:
      "The throttle response on the 6.2L woke up completely. When you step on it, the intake sound is incredible without droning on the highway. Apex got the kit in 2 days and installed it in under an hour.",
    tag: "GAS V8 • FULL-SIZE",
  },
  {
    id: "ford-ecoboost",
    name: "2023 Ford F-150 EcoBoost",
    engine: "3.5L Twin-Turbo EcoBoost V6",
    intake: "Roush High-Flow Cold Air System with Clear Lid",
    img: "/images/build2.jpg",
    customer: "Derek Hensley",
    location: "Denver, CO",
    rating: 5,
    quote:
      "You can actually hear the turbos spooling now! Mileage stayed steady, but passing power on mountain climbs is noticeably crisper. Extremely clean install with zero sensor codes.",
    tag: "TWIN-TURBO • GAS",
  },
  {
    id: "ford-superduty",
    name: "2024 Ford F-250 Super Duty",
    engine: "6.7L Powerstroke Diesel V8",
    intake: "Banks Power Ram-Air System with Big-Ass Filter",
    img: "/images/build3.jpg",
    customer: "Travis Callahan",
    location: "Bozeman, MT",
    rating: 5,
    quote:
      "Towing our 38ft 5th-wheel through mountain passes, EGTs dropped by around 35°F and the truck pulls with zero hesitation. Best upgrade I've done for heavy towing.",
    tag: "HEAVY-DUTY • DIESEL",
  },
  {
    id: "ram-trx",
    name: "2024 RAM 1500 TRX",
    engine: "6.2L Supercharged HEMI V8",
    intake: "aFe Power Momentum GT Pro 5R Cold Air System",
    img: "/images/customer_ram.jpg",
    customer: "Braden Ross",
    location: "Scottsdale, AZ",
    rating: 5,
    quote:
      "Supercharger whine is on another level. Apex verified exact fitment for the TRX hood scoop before ordering. Professional shop, zero BS, top tier quality.",
    tag: "SUPERCHARGED • V8",
  },
  {
    id: "chevy-zr2",
    name: "2024 Chevrolet Silverado ZR2",
    engine: "3.0L Duramax Turbo-Diesel I6",
    intake: "Volant Closed Box Cold Air Intake • Dry Synthetic",
    img: "/images/customer_chevy.jpg",
    customer: "Jason Miller",
    location: "Salt Lake City, UT",
    rating: 5,
    quote:
      "The inline-6 Duramax breathes so much easier on forest service roads. Great filtration in dusty desert conditions and the shop got it done super fast.",
    tag: "DURAMAX • OFF-ROAD",
  },
];

export default function ReviewsAndBuilds() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeBuild = BUILDS[activeIdx];

  return (
    <section id="reviews" className="relative overflow-hidden bg-light-bg py-24 text-light-ink lg:py-36">
      <div className="tex-dots-light absolute inset-0 opacity-60" />
      <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-volt/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-display text-sm font-bold text-amber-500">09</span>
              <span className="h-px w-12 bg-amber-400" />
              <span className="font-display text-xs font-semibold tracking-[0.35em] text-light-mute">
                CUSTOMER BUILDS & VERIFIED REVIEWS
              </span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-light-ink sm:text-6xl lg:text-8xl">
              Proven on
              <br />
              <span className="text-amber-500">real trucks.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex items-center gap-4 border border-light-border bg-white px-6 py-4 shadow-sm">
              <div className="flex text-amber-400 text-lg">★★★★★</div>
              <div className="border-l border-light-border pl-4">
                <p className="font-display text-base font-bold text-slate-950">4.9 / 5.0 RATING</p>
                <p className="text-[11px] text-light-mute">Over 500+ Verified Truck Installs</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* featured interactive spotlight */}
        <Reveal>
          <div className="grid gap-8 border border-light-border bg-white p-6 shadow-2xl shadow-slate-200/70 lg:grid-cols-12 lg:p-10">
            {/* big hero image for active build */}
            <div className="relative overflow-hidden border border-slate-200 lg:col-span-7">
              <div className="relative h-80 sm:h-96 lg:h-full min-h-[24rem]">
                <img
                  src={activeBuild.img}
                  alt={activeBuild.name}
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <span className="absolute left-4 top-4 border border-slate-200 bg-white/95 px-3 py-1 font-display text-[10px] font-bold tracking-[0.3em] text-slate-900 shadow-sm backdrop-blur-sm">
                  {activeBuild.tag}
                </span>

                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between bg-slate-950/85 p-4 backdrop-blur-sm border border-slate-800 text-white">
                  <div>
                    <h4 className="font-display text-xl font-bold uppercase">{activeBuild.name}</h4>
                    <p className="text-xs text-slate-300 font-medium">{activeBuild.engine}</p>
                  </div>
                  <span className="h-2 w-2 bg-volt" />
                </div>
              </div>
            </div>

            {/* review & spec info */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400 text-base">★★★★★</div>
                  <span className="border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-800">
                    VERIFIED INSTALL
                  </span>
                </div>

                <blockquote className="mt-5 border-l-2 border-amber-400 pl-4 text-base italic leading-relaxed text-slate-700 sm:text-lg">
                  "{activeBuild.quote}"
                </blockquote>

                <div className="mt-5">
                  <p className="font-display text-base font-bold text-slate-950">{activeBuild.customer}</p>
                  <p className="text-xs text-light-mute">{activeBuild.location}</p>
                </div>

                <div className="mt-6 border-t border-slate-100 bg-slate-50 p-4">
                  <span className="font-display text-[10px] font-bold tracking-[0.25em] text-light-mute">
                    INSTALLED HARDWARE
                  </span>
                  <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
                    {activeBuild.intake}
                  </p>
                </div>
              </div>

              {/* quick build selector thumbnail pills */}
              <div>
                <span className="mb-2 block font-display text-[10px] font-bold tracking-[0.25em] text-light-mute">
                  EXPLORE OTHER CUSTOMER BUILDS:
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {BUILDS.map((b, i) => (
                    <button
                      key={b.id}
                      onClick={() => setActiveIdx(i)}
                      className={cn(
                        "relative h-14 overflow-hidden border transition-all",
                        activeIdx === i
                          ? "border-slate-950 ring-2 ring-amber-400 shadow-md scale-105"
                          : "border-slate-200 opacity-60 hover:opacity-100"
                      )}
                    >
                      <img src={b.img} alt={b.name} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* gallery grid preview */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BUILDS.slice(0, 3).map((b, i) => (
            <Reveal key={b.id} delay={i * 100}>
              <div
                onClick={() => setActiveIdx(i)}
                className="group cursor-pointer border border-light-border bg-white p-4 shadow-sm transition-all duration-300 hover:border-slate-900 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 bg-slate-950/80 px-2 py-0.5 font-display text-[9px] font-bold tracking-widest text-volt">
                    {b.tag}
                  </span>
                </div>
                <div className="mt-3">
                  <h4 className="font-display text-lg font-bold uppercase text-slate-950 group-hover:text-amber-600">
                    {b.name}
                  </h4>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-light-mute">
                    "{b.quote}"
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
