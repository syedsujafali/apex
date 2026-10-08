import Reveal from "./Reveal";

const COMPARISONS = [
  {
    feature: "AIRFLOW CFM VOLUME",
    stock: "310 CFM (Constrained by small paper panel & baffles)",
    stockScore: "35%",
    apex: "585+ CFM (Smooth oversized roto-molded intake pipe)",
    apexScore: "92%",
    benefit: "+48% To +88% Maximum Airflow Capacity",
  },
  {
    feature: "INTAKE CHARGE TEMPERATURE",
    stock: "Draws 135°F–155°F hot engine bay & radiator air",
    stockScore: "40%",
    apex: "Sealed cold air box draws 75°F–85°F ambient air",
    apexScore: "95%",
    benefit: "25°F–40°F Denser, Cooler Oxygen Supply",
  },
  {
    feature: "THROTTLE & BOOST SPOOL",
    stock: "Muffled accordion plastic causes turbulent lag",
    stockScore: "45%",
    apex: "Direct velocity stack creates instant boost response",
    apexScore: "90%",
    benefit: "Sharper Pedal Feel & Quicker Turbo Spool",
  },
  {
    feature: "SERVICE LIFE & VALUE",
    stock: "Disposable paper filter replaced every 12,000 miles",
    stockScore: "30%",
    apex: "Premium washable & reusable media for 50,000+ miles",
    apexScore: "98%",
    benefit: "Lifetime Value — Clean, Oil & Re-Install",
  },
];

export default function StockVsApex() {
  return (
    <section id="comparison" className="relative overflow-hidden bg-ink py-24 text-paper lg:py-36">
      <div className="tex-grid absolute inset-0 opacity-40" />
      <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-volt/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">06</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">
                  HEAD-TO-HEAD COMPARISON
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-8xl">
                Factory stock vs
                <br />
                <span className="text-volt">Apex Performance.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-4">
            <p className="max-w-sm border-l-2 border-volt pl-5 text-base leading-relaxed text-mute">
              See why automotive manufacturers cut costs on factory airboxes and why
              an engineered cold air system changes the driving feel.
            </p>
          </Reveal>
        </div>

        {/* comparison grid table */}
        <Reveal>
          <div className="overflow-hidden border border-coal-2 bg-ink-2">
            {/* table header */}
            <div className="grid grid-cols-12 border-b border-coal-2 bg-ink-3 p-4 sm:p-6">
              <div className="col-span-12 font-display text-xs font-bold tracking-[0.25em] text-mute md:col-span-4">
                ENGINEERING METRIC
              </div>
              <div className="col-span-6 mt-3 font-display text-sm font-bold tracking-[0.2em] text-mute md:col-span-4 md:mt-0">
                FACTORY OEM AIRBOX
              </div>
              <div className="col-span-6 mt-3 font-display text-sm font-bold tracking-[0.2em] text-volt md:col-span-4 md:mt-0">
                APEX COLD AIR INTAKE
              </div>
            </div>

            {/* comparison rows */}
            <div className="divide-y divide-coal-2">
              {COMPARISONS.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-12 items-center gap-4 p-5 transition-colors hover:bg-coal/40 sm:p-6 lg:p-7"
                >
                  {/* metric column */}
                  <div className="col-span-12 md:col-span-4">
                    <span className="font-display text-xs font-bold text-mute">0{i + 1} /</span>
                    <h3 className="mt-1 font-display text-xl font-bold uppercase text-paper sm:text-2xl">
                      {row.feature}
                    </h3>
                    <span className="mt-2 inline-block border border-volt/30 bg-volt/10 px-2.5 py-0.5 font-display text-[10px] font-bold tracking-wider text-volt">
                      {row.benefit}
                    </span>
                  </div>

                  {/* stock column */}
                  <div className="col-span-6 border-r border-coal-2/60 pr-4 md:col-span-4 md:border-r-0 md:pr-0">
                    <p className="text-sm font-medium text-mute/80">{row.stock}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-1.5 flex-1 bg-coal-3">
                        <div className="h-full bg-mute/40" style={{ width: row.stockScore }} />
                      </div>
                      <span className="font-display text-xs font-bold text-mute/60">{row.stockScore}</span>
                    </div>
                  </div>

                  {/* apex column */}
                  <div className="col-span-6 md:col-span-4">
                    <p className="text-sm font-bold text-paper">{row.apex}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-1.5 flex-1 bg-coal-3">
                        <div className="h-full bg-volt" style={{ width: row.apexScore }} />
                      </div>
                      <span className="font-display text-xs font-bold text-volt">{row.apexScore}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* bottom CTA card */}
        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center justify-between gap-6 border border-coal-2 bg-gradient-to-r from-ink-2 via-coal/30 to-ink-2 p-6 sm:flex-row sm:p-8">
            <div>
              <h4 className="font-display text-2xl font-bold uppercase text-paper">
                Ready to replace your factory airbox?
              </h4>
              <p className="text-xs text-mute sm:text-sm">
                We'll identify the best system for your specific engine and handle the install.
              </p>
            </div>
            <a
              href="#vehicles"
              className="volt-glow inline-flex shrink-0 items-center justify-center gap-3 bg-volt px-8 py-4 font-display text-sm font-bold tracking-[0.2em] text-ink transition-colors hover:bg-volt-2"
            >
              FIND MY INTAKE
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
