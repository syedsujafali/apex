import Reveal from "./Reveal";

function CategoryPanel({
  img,
  label,
  models,
  tag,
  className = "",
  large = false,
}: {
  img: string;
  label: string;
  models: string;
  tag: string;
  className?: string;
  large?: boolean;
}) {
  return (
    <a href="#applications" className={`group relative block overflow-hidden border border-coal-2 ${className}`}>
      <img
        src={img}
        alt={`${label} trucks`}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
          large ? "h-[26rem] sm:h-[30rem] lg:h-full" : "h-72 sm:h-80 lg:h-full"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
      <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-volt/60" />

      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 bg-volt" />
        <span className="font-display text-[10px] font-semibold tracking-[0.35em] text-paper-2">{tag}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <h3
          className={`font-display font-bold uppercase leading-none tracking-tight text-volt ${
            large ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl sm:text-5xl"
          }`}
        >
          {label}
        </h3>
        <p className="mt-2.5 font-display text-xs font-semibold tracking-[0.22em] text-paper-2 sm:text-sm">
          {models}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold tracking-[0.25em] text-paper opacity-0 transition-all duration-300 group-hover:opacity-100">
          EXPLORE APPLICATIONS
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-volt" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function TruckCategories() {
  return (
    <section className="relative bg-ink-2 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-display text-sm font-bold text-volt">04</span>
              <span className="h-px w-12 bg-volt/60" />
              <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">TRUCK CATEGORIES</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-8xl">
              Built around
              <br />
              <span className="text-volt">your platform.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm border-l-2 border-volt pl-5 text-base leading-relaxed text-mute">
              Roughly 80% of what we do is trucks — full-size, heavy-duty and
              mid-size platforms from 2020 and up.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <CategoryPanel
              large
              img="/images/fullsize.jpg"
              label="Full-Size"
              tag="CORE MARKET"
              models="F-150 • SILVERADO 1500 • SIERRA 1500 • RAM 1500"
              className="h-full"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <CategoryPanel
              img="/images/heavyduty.jpg"
              label="Heavy-Duty"
              tag="TOW + WORK"
              models="F-250 • F-350 • 2500 • 3500"
              className="h-full"
            />
          </Reveal>
          <Reveal delay={220} className="lg:col-span-5">
            <CategoryPanel
              img="/images/midsize.jpg"
              label="Mid-Size"
              tag="STREET + TRAIL"
              models="TACOMA • COLORADO • CANYON"
              className="h-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
