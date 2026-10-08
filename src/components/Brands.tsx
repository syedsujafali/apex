import { BRANDS } from "../data/vehicles";
import Reveal from "./Reveal";

export default function Brands() {
  return (
    <section id="brands" className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div className="absolute left-0 top-0 h-px w-2/3 bg-gradient-to-r from-volt/50 to-transparent" />
      <div className="tex-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">07</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">
                  DIRECT SUPPLIER NETWORK
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-8xl">
                Tier-1 Brands.
                <br />
                <span className="text-volt">Fast regional sourcing.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <p className="max-w-sm border-l-2 border-volt pl-5 text-base leading-relaxed text-mute lg:ml-auto">
              We partner directly with leading regional distributors to access real-time warehouse inventory.
              Most kits are in our shop ready for installation within 1–2 business days.
            </p>
          </Reveal>
        </div>

        {/* brand grid */}
        <Reveal>
          <div className="grid grid-cols-1 gap-px border border-coal-2 bg-coal-2 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDS.map((brand, i) => (
              <div
                key={brand.name}
                className="group relative flex flex-col justify-between bg-ink p-6 transition-all duration-300 hover:bg-ink-3 min-h-[10rem]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[9px] font-semibold tracking-widest text-mute/60 group-hover:text-volt/80">
                    0{i + 1}
                  </span>
                  <span className="border border-volt/30 bg-volt/10 px-2 py-0.5 font-display text-[9px] font-bold tracking-wider text-volt">
                    {brand.turnaround}
                  </span>
                </div>

                <div className="my-4">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-paper transition-colors duration-300 group-hover:text-volt">
                    {brand.name}
                  </h3>
                  <p className="mt-1 text-xs text-mute group-hover:text-paper-2">
                    {brand.specialty}
                  </p>
                </div>

                <span className="h-0.5 w-0 bg-volt transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* info banner */}
        <Reveal delay={120}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-dashed border-coal-3 bg-coal/30 p-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-volt/50 bg-volt/10 text-volt">
                ⚡
              </span>
              <p className="text-xs leading-relaxed text-mute">
                <strong className="text-paper">Zero e-commerce guesswork:</strong> We check live regional supplier stock for your exact truck VIN / engine code before quoting. No backorder surprises.
              </p>
            </div>
            <a
              href="#quote"
              className="shrink-0 border border-coal-3 bg-ink px-5 py-2.5 font-display text-xs font-bold tracking-[0.2em] text-paper transition-all hover:border-volt hover:text-volt"
            >
              CHECK BRAND STOCK
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
