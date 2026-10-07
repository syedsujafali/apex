import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-ink">
      {/* image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="High-performance modern pickup truck in dramatic scenic lighting"
          className="hero-zoom h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      </div>

      {/* technical frame lines */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-8 top-28 bottom-28 w-px bg-gradient-to-b from-transparent via-volt/40 to-transparent" />
        <div className="absolute right-8 top-28 bottom-28 w-px bg-gradient-to-b from-transparent via-coal-3 to-transparent" />
        <div className="absolute left-8 top-28 h-px w-10 bg-volt/60" />
        <div className="absolute left-8 bottom-28 h-px w-10 bg-volt/60" />
        <span className="absolute right-12 top-1/3 -rotate-90 font-display text-[10px] font-semibold tracking-[0.5em] text-mute/60">
          COLD AIR SYSTEMS
        </span>
      </div>

      {/* content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-40 sm:px-6 lg:px-20 lg:pb-24">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-volt" />
            <span className="font-display text-xs font-semibold tracking-[0.4em] text-volt sm:text-sm">
              TRUCK PERFORMANCE SPECIALISTS
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display text-[clamp(3.8rem,13vw,10.5rem)] font-bold uppercase leading-[0.86] tracking-tight text-paper">
            More air.
            <br />
            <span className="text-volt">More truck.</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-paper-2/90 sm:text-lg">
            Premium cold air intake systems for modern gas and diesel trucks —
            sourced, matched and professionally installed.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#vehicles"
              className="group relative inline-flex items-center justify-center gap-3 bg-volt px-9 py-4 font-display text-base font-bold tracking-[0.15em] text-ink transition-colors hover:bg-volt-2"
            >
              FIND YOUR INTAKE
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#installation"
              className="inline-flex items-center justify-center border border-paper/30 px-9 py-4 font-display text-base font-bold tracking-[0.15em] text-paper transition-colors hover:border-volt hover:text-volt"
            >
              BOOK AN INSTALL
            </a>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-10 flex items-center gap-3 border-t border-paper/10 pt-6">
            <span className="h-1.5 w-1.5 bg-volt" />
            <p className="font-display text-[11px] font-semibold tracking-[0.3em] text-mute sm:text-xs">
              2020+ TRUCKS &nbsp;•&nbsp; GAS + DIESEL &nbsp;•&nbsp; PROFESSIONAL INSTALLATION
            </p>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-display text-[10px] tracking-[0.4em] text-mute">SCROLL</span>
        <span className="h-8 w-px bg-gradient-to-b from-volt to-transparent" />
      </div>
    </section>
  );
}
