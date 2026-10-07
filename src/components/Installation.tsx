import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "MATCH",
    body: "We identify the right intake system for your exact year, model and engine.",
  },
  {
    n: "02",
    title: "SOURCE",
    body: "We order from suppliers who can typically deliver in-stock product within 1–2 days.",
  },
  {
    n: "03",
    title: "INSTALL",
    body: "Your intake is professionally installed, torqued and checked — not left in a box.",
  },
  {
    n: "04",
    title: "DRIVE",
    body: "You leave with the system fitted, verified and ready to breathe.",
  },
];

export default function Installation() {
  return (
    <section id="installation" className="relative overflow-hidden bg-ink-2">
      <div className="grid lg:grid-cols-2">
        {/* image side */}
        <div className="relative min-h-[22rem] overflow-hidden lg:min-h-full">
          <img
            src="/images/install.jpg"
            alt="Technician installing a cold air intake system"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-ink-2/40 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink-2" />
          <div className="absolute left-5 top-5 flex items-center gap-2 border border-paper/20 bg-ink/70 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse bg-volt" />
            <span className="font-display text-[10px] font-semibold tracking-[0.3em] text-paper-2">
              INSTALL BAY — ACTIVE
            </span>
          </div>
        </div>

        {/* content side */}
        <div className="relative px-4 py-20 sm:px-10 lg:px-16 lg:py-32">
          <div className="tex-grid absolute inset-0 opacity-60" />
          <div className="relative">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">06</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">
                  INSTALLATION EXPERIENCE
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-7xl">
                We don't just sell it.
                <br />
                <span className="text-volt">We install it.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
                We help identify the right intake, source the product and
                professionally install it on your truck — one appointment,
                done properly.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-px bg-coal-2 sm:grid-cols-2">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 110}>
                  <div className="group h-full bg-ink-2 p-6 transition-colors duration-300 hover:bg-ink-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-3xl font-bold text-volt">{s.n}</span>
                      <span className="h-px flex-1 bg-coal-2 transition-colors group-hover:bg-volt/40" />
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-wide text-paper">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="volt-glow inline-flex items-center justify-center gap-3 bg-volt px-9 py-4 font-display text-base font-bold tracking-[0.15em] text-ink transition-colors hover:bg-volt-2"
                >
                  BOOK INSTALLATION
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href="tel:+15555550199"
                  className="inline-flex items-center justify-center border border-coal-3 px-9 py-4 font-display text-base font-bold tracking-[0.15em] text-paper transition-colors hover:border-volt hover:text-volt"
                >
                  CALL THE SHOP
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
