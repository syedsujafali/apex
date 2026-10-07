import { APPLICATIONS } from "../data/vehicles";
import Reveal from "./Reveal";

export default function Applications() {
  return (
    <section id="applications" className="relative bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">07</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">
                  FEATURED APPLICATIONS
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-8xl">
                Platforms we
                <br />
                <span className="text-volt">cover most.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-4">
            <p className="max-w-sm border-l-2 border-volt pl-5 text-base leading-relaxed text-mute">
              No carts. No checkout. Tell us your truck and we'll confirm
              exactly which intake systems are available right now.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden border border-coal-2 bg-coal-2 md:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((app, i) => (
            <Reveal key={app.vehicle} delay={(i % 3) * 110}>
              <article className="group relative flex h-full flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-3">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-[10px] font-semibold tracking-[0.3em] text-mute">
                    APP / {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="border border-volt/40 px-2 py-1 font-display text-[9px] font-bold tracking-[0.2em] text-volt"
                  >
                    {app.fuel}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold uppercase leading-none tracking-tight text-paper transition-colors group-hover:text-volt">
                  {app.vehicle}
                </h3>
                <p className="mt-1.5 font-display text-base font-semibold tracking-[0.15em] text-volt">
                  {app.years}
                </p>

                <div className="mt-5 border-t border-coal-2 pt-4">
                  <p className="font-display text-[10px] font-semibold tracking-[0.3em] text-mute">ENGINES</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-2">{app.engines}</p>
                </div>

                <p className="mt-4 flex-1 text-xs leading-relaxed text-mute">{app.note}</p>

                <a
                  href="#quote"
                  className="mt-6 inline-flex items-center justify-between border border-coal-3 px-5 py-3.5 font-display text-sm font-bold tracking-[0.2em] text-paper transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink"
                >
                  CHECK AVAILABILITY
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-5 text-xs text-mute/70">
            Don't see your truck? We cover more platforms than listed here — send us your vehicle details and we'll check.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
