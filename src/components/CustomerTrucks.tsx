import Reveal from "./Reveal";

const BUILDS = [
  {
    img: "/images/build1.jpg",
    label: "SHOP BUILD — FULL-SIZE PLATFORM",
    tag: "BUILD / 01",
  },
  {
    img: "/images/build2.jpg",
    label: "INTAKE INSTALL — ENGINE BAY",
    tag: "BUILD / 02",
  },
  {
    img: "/images/build3.jpg",
    label: "HD DIESEL — TOW SETUP",
    tag: "BUILD / 03",
  },
];

export default function CustomerTrucks() {
  return (
    <section className="relative overflow-hidden bg-light-bg py-24 text-light-ink lg:py-36">
      <div className="tex-dots-light absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-display text-sm font-bold text-amber-500">09</span>
              <span className="h-px w-12 bg-amber-400" />
              <span className="font-display text-xs font-semibold tracking-[0.35em] text-light-mute">CUSTOMER TRUCKS</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-light-ink sm:text-6xl lg:text-8xl">
              Real trucks.
              <br />
              <span className="text-amber-500">Real builds.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center gap-3 border border-slate-300 bg-white px-7 py-4 font-display text-sm font-bold tracking-[0.2em] text-slate-900 shadow-sm transition-all hover:border-slate-950 hover:bg-slate-50"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              FOLLOW THE BUILDS
            </a>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BUILDS.map((b, i) => (
            <Reveal key={b.tag} delay={i * 120}>
              <figure className="group relative overflow-hidden border border-light-border bg-white shadow-md shadow-slate-200/60 transition-all duration-500 hover:shadow-2xl">
                <img
                  src={b.img}
                  alt={b.label}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] sm:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute left-4 top-4 border border-slate-200 bg-white/95 px-3 py-1 font-display text-[10px] font-bold tracking-[0.3em] text-slate-900 shadow-sm backdrop-blur-sm">
                  {b.tag}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <span className="font-display text-xs font-semibold tracking-[0.22em] text-white">{b.label}</span>
                  <span className="h-2 w-2 bg-volt" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex items-start gap-3 border border-light-border bg-white p-5 shadow-sm">
            <span className="mt-1 h-2 w-2 shrink-0 bg-amber-500" />
            <p className="text-xs leading-relaxed text-light-mute">
              Customer gallery coming soon — this space is reserved for real customer trucks and
              completed installations. Get an intake installed with us and your build could be featured here.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
