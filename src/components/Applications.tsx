import { APPLICATIONS } from "../data/vehicles";
import Reveal from "./Reveal";

export default function Applications() {
  return (
    <section id="applications" className="relative overflow-hidden bg-light-bg py-24 text-light-ink lg:py-36">
      <div className="tex-grid-light absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-amber-500">08</span>
                <span className="h-px w-12 bg-amber-400" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-light-mute">
                  PLATFORM DIRECTORY
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-light-ink sm:text-6xl lg:text-8xl">
                Platforms we
                <br />
                <span className="text-amber-500">cover most.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-4">
            <p className="max-w-sm border-l-2 border-amber-400 pl-5 text-base leading-relaxed text-light-mute">
              No carts. No checkout guesswork. Tell us your truck specs and we'll confirm
              exact brand availability and pricing within 1 business day.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((app, i) => (
            <Reveal key={app.vehicle} delay={(i % 3) * 110}>
              <article className="group relative flex h-full flex-col border border-light-border bg-white p-7 shadow-md shadow-slate-200/60 transition-all duration-300 hover:border-slate-950 hover:shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-[10px] font-bold tracking-[0.25em] text-amber-700 bg-amber-50 px-2 py-0.5 border border-amber-200">
                    {app.category}
                  </span>
                  <span
                    className="border border-slate-200 bg-slate-100 px-2.5 py-1 font-display text-[10px] font-bold tracking-[0.2em] text-slate-800"
                  >
                    {app.fuel}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold uppercase leading-none tracking-tight text-light-ink transition-colors group-hover:text-amber-500">
                  {app.vehicle}
                </h3>
                <p className="mt-1.5 font-display text-sm font-semibold tracking-[0.15em] text-amber-600">
                  {app.years}
                </p>

                <div className="mt-4 border-t border-slate-100 bg-slate-50/80 p-3">
                  <p className="font-display text-[10px] font-bold tracking-[0.3em] text-light-mute">SUPPORTED ENGINES</p>
                  <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-800">{app.engines}</p>
                </div>

                <p className="mt-4 flex-1 text-xs leading-relaxed text-slate-600">{app.focus}</p>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <span className="font-display text-[9px] font-bold tracking-[0.2em] text-light-mute">
                    POPULAR KITS:
                  </span>
                  <p className="text-[11px] font-medium text-slate-800">{app.popularKits}</p>
                </div>

                <a
                  href="#quote"
                  className="mt-6 inline-flex items-center justify-between border border-slate-900 bg-slate-950 px-5 py-3.5 font-display text-sm font-bold tracking-[0.2em] text-white shadow-sm transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink group-hover:shadow-md"
                >
                  CHECK INVENTORY
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex items-center justify-between border border-light-border bg-white p-5 shadow-sm">
            <p className="text-xs text-light-mute">
              Don't see your exact trim or year? We cover older platforms and specialty custom builds — send us your VIN or details.
            </p>
            <a href="#quote" className="shrink-0 font-display text-xs font-bold tracking-[0.2em] text-amber-600 hover:text-slate-950">
              CUSTOM INQUIRY →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
