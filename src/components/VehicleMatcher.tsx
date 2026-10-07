import { useMemo, useState } from "react";
import { cn } from "../utils/cn";
import { YEARS, MAKES, MODELS, ENGINES, type Make } from "../data/vehicles";
import Reveal from "./Reveal";

type Step = 0 | 1 | 2 | 3;
const STEP_LABELS = ["YEAR", "MAKE", "MODEL", "ENGINE"] as const;

export default function VehicleMatcher() {
  const [year, setYear] = useState<string | null>(null);
  const [make, setMake] = useState<Make | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [engine, setEngine] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const step: Step = !year ? 0 : !make ? 1 : !model ? 2 : 3;

  const options = useMemo(() => {
    if (step === 0) return YEARS as readonly string[];
    if (step === 1) return MAKES;
    if (step === 2) return make ? MODELS[make] : [];
    return model ? (ENGINES[model] ?? []) : [];
  }, [step, make, model]);

  const select = (value: string) => {
    setShowResult(false);
    if (step === 0) setYear(value);
    else if (step === 1) {
      setMake(value as Make);
      setModel(null);
      setEngine(null);
    } else if (step === 2) {
      setModel(value);
      setEngine(null);
    } else setEngine(value);
  };

  const reset = () => {
    setYear(null);
    setMake(null);
    setModel(null);
    setEngine(null);
    setShowResult(false);
  };

  const goTo = (s: number) => {
    setShowResult(false);
    if (s === 0) {
      setYear(null);
      setMake(null);
      setModel(null);
      setEngine(null);
    } else if (s === 1) {
      setMake(null);
      setModel(null);
      setEngine(null);
    } else if (s === 2) {
      setModel(null);
      setEngine(null);
    } else setEngine(null);
  };

  const values = [year, make, model, engine];
  const isDiesel = engine?.toLowerCase().includes("diesel") || engine?.toLowerCase().includes("cummins");

  return (
    <section id="vehicles" className="relative overflow-hidden bg-ink-2 py-24 lg:py-36">
      <div className="tex-grid absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-volt/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">02</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">
                  VEHICLE MATCHER
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-8xl">
                Start with
                <br />
                <span className="text-volt">your truck.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-4">
            <p className="max-w-sm border-l-2 border-volt pl-5 text-base leading-relaxed text-mute">
              Tell us what you drive. We'll help match you with the right intake
              for your engine and your goals.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="border border-coal-3 bg-ink">
            {/* step readout bar */}
            <div className="grid grid-cols-2 border-b border-coal-3 md:grid-cols-4">
              {STEP_LABELS.map((label, i) => {
                const active = step === i && !showResult;
                const done = values[i] !== null;
                return (
                  <button
                    key={label}
                    onClick={() => (done || i < step ? goTo(i) : undefined)}
                    className={cn(
                      "relative flex flex-col gap-1 border-coal-3 px-5 py-4 text-left transition-colors md:border-r md:last:border-r-0",
                      i % 2 === 0 && "border-r",
                      i < 2 && "border-b md:border-b-0",
                      active && "bg-coal/60",
                      done && "cursor-pointer hover:bg-coal/40"
                    )}
                  >
                    <span className="flex items-center gap-2 font-display text-[10px] font-semibold tracking-[0.3em] text-mute">
                      <span className={cn("h-1.5 w-1.5", done ? "bg-volt" : active ? "bg-paper" : "bg-coal-3")} />
                      {label}
                    </span>
                    <span
                      className={cn(
                        "truncate font-display text-xl font-bold uppercase tracking-wide",
                        done ? "text-volt" : "text-coal-3"
                      )}
                    >
                      {values[i] ?? "—"}
                    </span>
                    {active && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-volt" />}
                  </button>
                );
              })}
            </div>

            {/* body */}
            <div className="relative p-5 sm:p-8 lg:p-10">
              {!showResult ? (
                <>
                  <p className="mb-6 font-display text-sm font-semibold tracking-[0.25em] text-paper-2">
                    {step === 0 && "SELECT MODEL YEAR"}
                    {step === 1 && "SELECT MAKE"}
                    {step === 2 && "SELECT MODEL"}
                    {step === 3 && (engine ? "VEHICLE CONFIRMED" : "SELECT ENGINE")}
                  </p>

                  <div
                    className={cn(
                      "grid gap-3",
                      step === 0 ? "grid-cols-3 sm:grid-cols-6" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    )}
                  >
                    {options.map((opt) => {
                      const selected = values[step] === opt || (step === 3 && engine === opt);
                      return (
                        <button
                          key={opt}
                          onClick={() => select(opt)}
                          className={cn(
                            "group relative border px-4 py-5 text-center font-display font-bold uppercase tracking-wide transition-all duration-200",
                            step === 0 ? "text-2xl" : "text-base sm:text-lg",
                            selected
                              ? "border-volt bg-volt text-ink"
                              : "border-coal-3 bg-ink-3 text-paper-2 hover:border-volt/70 hover:text-volt"
                          )}
                        >
                          {opt}
                          <span
                            className={cn(
                              "absolute left-0 top-0 h-2 w-2 border-l border-t transition-colors",
                              selected ? "border-ink" : "border-coal-3 group-hover:border-volt"
                            )}
                          />
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      onClick={reset}
                      className="font-display text-xs font-semibold tracking-[0.3em] text-mute transition-colors hover:text-volt"
                    >
                      ↺ RESET SELECTION
                    </button>
                    <button
                      disabled={!engine}
                      onClick={() => setShowResult(true)}
                      className={cn(
                        "inline-flex items-center justify-center gap-3 px-10 py-4 font-display text-base font-bold tracking-[0.15em] transition-all",
                        engine
                          ? "volt-glow bg-volt text-ink hover:bg-volt-2"
                          : "cursor-not-allowed border border-coal-3 text-mute/50"
                      )}
                    >
                      SHOW MY OPTIONS
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-2 w-2 bg-volt" />
                      <span className="font-display text-xs font-semibold tracking-[0.3em] text-volt">
                        MATCH PROFILE READY
                      </span>
                    </div>
                    <h3 className="font-display text-4xl font-bold uppercase leading-none text-paper sm:text-5xl">
                      {year} {make}
                      <br />
                      <span className="text-volt">{model}</span>
                    </h3>
                    <p className="mt-3 font-display text-lg font-semibold tracking-wide text-paper-2">
                      {engine} <span className="ml-2 text-xs tracking-[0.3em] text-mute">{isDiesel ? "DIESEL" : "GAS"}</span>
                    </p>
                    <p className="mt-5 max-w-lg text-sm leading-relaxed text-mute">
                      Intake applications for this platform are typically available from
                      established brands we source — exact options, availability and pricing
                      depend on current supplier inventory. Send us this profile and we'll
                      confirm what's available for your truck, usually within one business day.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-3 border-t border-coal-3 pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <a
                      href="#quote"
                      className="volt-glow inline-flex items-center justify-center gap-3 bg-volt px-8 py-4 font-display text-base font-bold tracking-[0.15em] text-ink transition-colors hover:bg-volt-2"
                    >
                      GET MY OPTIONS
                    </a>
                    <a
                      href="#installation"
                      className="inline-flex items-center justify-center border border-coal-3 px-8 py-4 font-display text-base font-bold tracking-[0.15em] text-paper transition-colors hover:border-volt hover:text-volt"
                    >
                      BOOK INSTALLATION
                    </a>
                    <button
                      onClick={reset}
                      className="mt-1 font-display text-xs font-semibold tracking-[0.3em] text-mute transition-colors hover:text-volt"
                    >
                      ↺ START OVER
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-5 text-center text-xs tracking-wide text-mute/70">
            Application coverage varies by year, engine and current supplier inventory. We'll confirm exact fitment before anything is ordered.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
