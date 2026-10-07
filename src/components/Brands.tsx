import { BRANDS } from "../data/vehicles";
import Reveal from "./Reveal";

export default function Brands() {
  return (
    <section id="brands" className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div className="absolute left-0 top-0 h-px w-2/3 bg-gradient-to-r from-volt/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">05</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">SOURCED BRANDS</span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-8xl">
                Performance brands.
                <br />
                <span className="text-volt">One place.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <p className="max-w-sm border-l-2 border-volt pl-5 text-base leading-relaxed text-mute lg:ml-auto">
              We work with established aftermarket manufacturers and prioritize
              products that can typically be sourced within 1–2 days.
            </p>
          </Reveal>
        </div>

        {/* brand grid */}
        <Reveal>
          <div className="grid grid-cols-2 border-l border-t border-coal-2 sm:grid-cols-3 lg:grid-cols-4">
            {BRANDS.map((brand, i) => (
              <div
                key={brand}
                className="group relative flex h-28 items-center justify-center border-b border-r border-coal-2 bg-ink transition-colors duration-300 hover:bg-ink-3 sm:h-32"
              >
                <span className="font-display text-xl font-bold uppercase tracking-[0.12em] text-mute transition-colors duration-300 group-hover:text-volt sm:text-2xl">
                  {brand}
                </span>
                <span className="absolute left-3 top-3 font-display text-[9px] font-semibold tracking-widest text-coal-3 transition-colors group-hover:text-volt/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-volt transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
            {/* filler cell */}
            <div className="relative hidden h-32 items-center justify-center border-b border-r border-coal-2 bg-coal/30 lg:flex">
              <span className="px-6 text-center font-display text-xs font-semibold leading-relaxed tracking-[0.25em] text-mute">
                + FILTERS, TUBES,
                <br />
                COUPLERS & CLAMPS
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-6 flex items-start gap-3 sm:items-center">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-volt sm:mt-0" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            <p className="text-xs leading-relaxed text-mute">
              Brand and product availability depends on current supplier inventory.
              Not every brand is available for every application — we confirm options for your exact truck before quoting.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
