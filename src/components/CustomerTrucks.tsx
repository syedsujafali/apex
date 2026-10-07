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
    <section className="relative bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-display text-sm font-bold text-volt">09</span>
              <span className="h-px w-12 bg-volt/60" />
              <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">CUSTOMER TRUCKS</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-8xl">
              Real trucks.
              <br />
              <span className="text-volt">Real builds.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center gap-3 border border-coal-3 px-7 py-4 font-display text-sm font-bold tracking-[0.2em] text-paper transition-colors hover:border-volt hover:text-volt"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-volt" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              FOLLOW THE BUILDS
            </a>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {BUILDS.map((b, i) => (
            <Reveal key={b.tag} delay={i * 120}>
              <figure className="group relative overflow-hidden border border-coal-2">
                <img
                  src={b.img}
                  alt={b.label}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] sm:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <span className="absolute left-4 top-4 bg-ink/70 px-2.5 py-1 font-display text-[9px] font-semibold tracking-[0.3em] text-volt backdrop-blur-sm">
                  {b.tag}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <span className="font-display text-xs font-semibold tracking-[0.22em] text-paper-2">{b.label}</span>
                  <span className="h-1.5 w-1.5 bg-volt" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-6 flex items-start gap-3 border border-dashed border-coal-3 bg-ink-3/50 px-5 py-4">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 bg-volt" />
            <p className="text-xs leading-relaxed text-mute">
              Customer gallery coming soon — this space is reserved for real customer trucks and
              completed installations. Get an intake installed with us and your build could be featured here.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
