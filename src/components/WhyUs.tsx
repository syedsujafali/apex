import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "RIGHT PRODUCT",
    body: "We help match the intake to your truck — year, engine and intended use. No guesswork, no wrong parts.",
  },
  {
    n: "02",
    title: "FAST SOURCING",
    body: "We prioritize products that can be obtained quickly — typically in stock or sourceable within 1–2 days.",
  },
  {
    n: "03",
    title: "PROFESSIONAL INSTALLATION",
    body: "Have the system installed, torqued and verified by us instead of spending your weekend doing it yourself.",
  },
  {
    n: "04",
    title: "REAL TRUCK FOCUS",
    body: "Our core market is modern gas and diesel pickups. It's what we know, source for and work on every day.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink-2 py-24 lg:py-36">
      <div className="tex-grid absolute inset-0 opacity-50" />
      <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-volt/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">08</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">WHY BUY FROM US</span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:sticky lg:top-32 lg:text-7xl">
                A specialist,
                <br />
                <span className="text-volt">not a parts bin.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-mute">
                Anyone can ship you a box. We make sure the right system ends up
                on your truck — and that it's installed properly.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px border border-coal-2 bg-coal-2 sm:grid-cols-2">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.n} delay={i * 110}>
                  <div className="group relative h-full bg-ink-2 p-8 transition-colors duration-300 hover:bg-ink-3 lg:p-10">
                    <span className="font-display text-5xl font-bold text-volt lg:text-6xl">{p.n}</span>
                    <h3 className="mt-5 font-display text-2xl font-bold uppercase leading-tight tracking-wide text-paper lg:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute">{p.body}</p>
                    <span className="absolute left-0 top-0 h-0 w-0.5 bg-volt transition-all duration-500 group-hover:h-full" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
