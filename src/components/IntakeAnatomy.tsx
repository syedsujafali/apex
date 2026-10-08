import { useState } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const HOTSPOTS = [
  {
    id: "filter",
    title: "HIGH-FLOW CONICAL FILTER",
    subtitle: "8-Layer Cotton Gauze or Dry Synthetic",
    description:
      "Engineered with deep precision pleats to maximize surface filtration area while delivering up to 50% more volume than restrictive paper OEM filters. Washable and reusable for 50,000+ miles.",
    spec: "+45–55% More Surface Area",
    badge: "99.2% Filtration Efficiency",
    image: "/images/filter_macro.jpg",
  },
  {
    id: "airbox",
    title: "SEALED THERMAL AIRBOX",
    subtitle: "Aerospace-Grade Cross-Linked Polyethylene",
    description:
      "Blocks high engine bay temperatures and isolates the filter from radiant exhaust heat. Draws dense, cold ambient air directly from the factory fender or front grille inlet scoop.",
    spec: "Reduces Intake Temps by 20–35°F",
    badge: "Polycarbonate Inspection Window",
    image: "/images/intake_hardware.jpg",
  },
  {
    id: "tube",
    title: "ROTO-MOLDED XL INTAKE TUBE",
    subtitle: "Mandrel & Rotational-Molded Flow Path",
    description:
      "Replaces accordion-style restrictive factory plastic bellows with a continuous, smooth-bore tube that eliminates air turbulence and minimizes pressure drop straight into the throttle body.",
    spec: "Zero Restriction Contours",
    badge: "Dyno-Tuned Air Velocity",
    image: "/images/build2.jpg",
  },
  {
    id: "maf",
    title: "PRECISION CNC SENSOR HOUSING",
    subtitle: "OEM-Calibrated Airflow Metering",
    description:
      "CNC-machined sensor pad engineered to factory tolerances. Ensures precise mass air flow readings so fuel trims stay exact with zero check engine lights (CEL) and no custom tune required.",
    spec: "Factory Calibration Match",
    badge: "100% CEL-Free Guarantee",
    image: "/images/engine.jpg",
  },
];

export default function IntakeAnatomy() {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = HOTSPOTS[activeTab];

  return (
    <section id="anatomy" className="relative overflow-hidden bg-ink py-24 lg:py-36">
      {/* subtle engineering texture */}
      <div className="tex-grid absolute inset-0 opacity-40" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-volt/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">03</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">
                  SYSTEM ANATOMY & ENGINEERING
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-8xl">
                Engineered for
                <br />
                <span className="text-volt">maximum flow.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-4">
            <p className="max-w-sm border-l-2 border-volt pl-5 text-base leading-relaxed text-mute">
              Explore the critical components that separate high-end cold air intake
              systems from cheap universal knockoffs.
            </p>
          </Reveal>
        </div>

        {/* interactive hardware stage */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* visual image display */}
          <div className="relative flex flex-col overflow-hidden border border-coal-2 bg-ink-2 lg:col-span-7">
            <div className="relative h-[22rem] sm:h-[28rem] lg:h-[34rem] overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/20" />

              {/* floating badge */}
              <div className="absolute left-6 top-6 flex items-center gap-3 bg-ink/85 px-4 py-2 backdrop-blur-md border border-paper/10">
                <span className="h-2 w-2 animate-ping rounded-full bg-volt" />
                <span className="font-display text-xs font-bold tracking-[0.25em] text-volt">
                  COMPONENT 0{activeTab + 1}
                </span>
              </div>

              {/* bottom image overlay spec */}
              <div className="absolute bottom-6 inset-x-6 flex flex-wrap items-center justify-between gap-3 bg-ink/90 p-4 backdrop-blur-md border border-coal-2">
                <div>
                  <span className="font-display text-[10px] font-semibold tracking-[0.3em] text-mute">SPEC HIGHLIGHT</span>
                  <p className="font-display text-lg font-bold uppercase tracking-wide text-paper">{activeItem.spec}</p>
                </div>
                <span className="border border-volt/50 bg-volt/10 px-3 py-1 font-display text-xs font-bold tracking-[0.2em] text-volt">
                  {activeItem.badge}
                </span>
              </div>
            </div>
          </div>

          {/* component selector & description cards */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-5">
            <div className="space-y-3">
              {HOTSPOTS.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={cn(
                      "group relative w-full border p-5 text-left transition-all duration-300",
                      isActive
                        ? "border-volt bg-coal/80 shadow-lg"
                        : "border-coal-2 bg-ink-2 hover:border-coal-3 hover:bg-coal/40"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "font-display text-xs font-bold tracking-[0.3em]",
                          isActive ? "text-volt" : "text-mute group-hover:text-paper"
                        )}
                      >
                        0{idx + 1} // {item.subtitle}
                      </span>
                      <span
                        className={cn(
                          "flex h-6 w-6 items-center justify-center rounded-none font-display text-xs font-bold transition-all",
                          isActive ? "bg-volt text-ink" : "border border-coal-3 text-mute group-hover:border-volt group-hover:text-volt"
                        )}
                      >
                        {isActive ? "✓" : "+"}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "mt-2 font-display text-2xl font-bold uppercase tracking-wide transition-colors sm:text-3xl",
                        isActive ? "text-paper" : "text-paper-2/90 group-hover:text-volt"
                      )}
                    >
                      {item.title}
                    </h3>

                    {isActive && (
                      <p className="mt-3 text-sm leading-relaxed text-mute transition-opacity duration-300">
                        {item.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 border border-dashed border-coal-3 bg-coal/20 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center border border-volt/60 bg-volt/10 text-volt">
                  ⚙
                </span>
                <div>
                  <p className="font-display text-xs font-bold tracking-[0.2em] text-paper">
                    100% BOLT-ON DIRECT FITMENT
                  </p>
                  <p className="text-[11px] leading-relaxed text-mute">
                    No cutting, drilling, or custom tuning required on factory ECMs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
