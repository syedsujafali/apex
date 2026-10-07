import Reveal from "./Reveal";

const CONCEPTS = [
  {
    n: "A",
    title: "AIRFLOW",
    body: "Designed to provide a less restrictive intake path than many factory systems — built around how your engine breathes.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 10h16a4 4 0 1 0-4-4" />
        <path d="M3 16h22a4 4 0 1 1-4 4" />
        <path d="M3 22h10" />
      </svg>
    ),
  },
  {
    n: "B",
    title: "SOUND",
    body: "Many performance intake systems deliver a deeper, more aggressive intake sound under throttle — especially on turbo trucks.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12v8h6l8 6V6l-8 6H4Z" />
        <path d="M23 11a7 7 0 0 1 0 10" />
        <path d="M26.5 8a12 12 0 0 1 0 16" />
      </svg>
    ),
  },
  {
    n: "C",
    title: "FITMENT",
    body: "Choose a system designed for your specific truck and engine. We verify the application before anything is sourced.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="11" />
        <path d="M16 2v6M16 24v6M2 16h6M24 16h6" />
        <circle cx="16" cy="16" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function PerformanceSolution() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div className="absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-volt/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* editorial copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">03</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">
                  THE PERFORMANCE SOLUTION
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-7xl">
                Cold air.
                <br />
                <span className="text-volt">Properly matched.</span>
              </h2>
              <p className="mt-7 max-w-md text-base leading-relaxed text-mute">
                We don't manufacture intakes — and we don't guess. We source
                performance intake systems from established aftermarket brands
                and match them to your truck, engine and goals.
              </p>
              <div className="mt-8 space-y-3 border-t border-coal-2 pt-7">
                {["No universal parts forced to fit", "No unverified horsepower claims", "Application confirmed before ordering"].map(
                  (t) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center border border-volt/50">
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-volt" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m2 6 3 3 5-6" />
                        </svg>
                      </span>
                      <span className="text-sm text-paper-2">{t}</span>
                    </div>
                  )
                )}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <figure className="relative mt-10 hidden overflow-hidden border border-coal-2 lg:block">
                <img src="/images/engine.jpg" alt="Cold air intake installed in a truck engine bay" className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105" />
                <figcaption className="absolute bottom-0 inset-x-0 flex items-center justify-between bg-ink/85 px-4 py-2.5 backdrop-blur-sm">
                  <span className="font-display text-[10px] font-semibold tracking-[0.3em] text-paper-2">INTAKE DETAIL — HD DIESEL PLATFORM</span>
                  <span className="h-1.5 w-1.5 bg-volt" />
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* three concepts */}
          <div className="lg:col-span-7">
            <div className="flex h-full flex-col divide-y divide-coal-2 border-y border-coal-2">
              {CONCEPTS.map((c, i) => (
                <Reveal key={c.title} delay={i * 130} className="group flex-1">
                  <div className="flex h-full flex-col gap-5 py-8 transition-colors duration-300 sm:flex-row sm:items-center sm:gap-10 lg:py-10 lg:pl-6 lg:group-hover:bg-ink-3">
                    <div className="flex items-center gap-5 sm:w-48 sm:shrink-0">
                      <span className="font-display text-sm font-bold text-mute">{c.n}/</span>
                      <span className="text-volt transition-transform duration-300 group-hover:scale-110">{c.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-paper transition-colors group-hover:text-volt lg:text-4xl">
                        {c.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-mute">{c.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={400}>
              <p className="mt-6 text-xs leading-relaxed text-mute/70">
                Results vary by application. We never promise specific performance gains
                unless they're verified for your exact truck and engine.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
