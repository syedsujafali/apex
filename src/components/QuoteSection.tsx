import { useState, type FormEvent } from "react";
import { cn } from "../utils/cn";
import { YEARS, MAKES } from "../data/vehicles";
import Reveal from "./Reveal";

const SERVICES = [
  "INTAKE ONLY",
  "INTAKE + INSTALLATION",
  "INSTALLATION ONLY",
  "NOT SURE — HELP ME CHOOSE",
];

const inputCls =
  "w-full border border-coal-3 bg-ink px-4 py-3.5 text-sm text-paper placeholder:text-mute/60 outline-none transition-colors focus:border-volt";

const labelCls = "mb-2 block font-display text-[10px] font-semibold tracking-[0.3em] text-mute";

export default function QuoteSection() {
  const [fuel, setFuel] = useState<"GAS" | "DIESEL" | null>(null);
  const [service, setService] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="quote" className="relative overflow-hidden bg-ink-2 py-24 lg:py-36">
      {/* dramatic backdrop */}
      <div className="tex-grid absolute inset-0 opacity-40" />
      <div className="absolute -top-32 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-volt/[0.05] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-volt to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* left copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-volt">10</span>
                <span className="h-px w-12 bg-volt/60" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-mute">QUOTE / BOOKING</span>
              </div>
              <h2 className="font-display text-6xl font-bold uppercase leading-[0.88] tracking-tight text-paper sm:text-7xl lg:text-8xl">
                What do
                <br />
                you <span className="text-volt">drive?</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-mute">
                Tell us your truck and we'll help you find the right intake —
                with current availability and installation scheduling.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 space-y-4 border-t border-coal-2 pt-8">
                <a href="tel:+15555550199" className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-coal-3 transition-colors group-hover:border-volt">
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-volt" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-[10px] font-semibold tracking-[0.3em] text-mute">CALL / TEXT US</p>
                    <p className="font-display text-xl font-bold tracking-wide text-paper group-hover:text-volt">
                      (555) 555-0199
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-coal-3">
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-volt" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-[10px] font-semibold tracking-[0.3em] text-mute">RESPONSE TIME</p>
                    <p className="font-display text-xl font-bold tracking-wide text-paper">
                      USUALLY WITHIN 1 BUSINESS DAY
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={100} className="lg:col-span-7">
            <div className="relative border border-coal-3 bg-ink-3/80 p-6 backdrop-blur-sm sm:p-10">
              <span className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-volt" />
              <span className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-volt" />

              {!sent ? (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <label className={labelCls}>NAME *</label>
                      <input required className={inputCls} placeholder="Your name" />
                    </div>
                    <div>
                      <label className={labelCls}>PHONE *</label>
                      <input required type="tel" className={inputCls} placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className={labelCls}>EMAIL</label>
                      <input type="email" className={inputCls} placeholder="you@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                    <div>
                      <label className={labelCls}>YEAR *</label>
                      <select required className={inputCls} defaultValue="">
                        <option value="" disabled>Year</option>
                        {YEARS.map((y) => (
                          <option key={y}>{y}</option>
                        ))}
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>MAKE *</label>
                      <select required className={inputCls} defaultValue="">
                        <option value="" disabled>Make</option>
                        {MAKES.map((m) => (
                          <option key={m}>{m}</option>
                        ))}
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>MODEL *</label>
                      <input required className={inputCls} placeholder="F-150" />
                    </div>
                    <div>
                      <label className={labelCls}>ENGINE</label>
                      <input className={inputCls} placeholder="3.5L EcoBoost" />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>FUEL TYPE</label>
                    <div className="grid grid-cols-2 gap-3">
                      {(["GAS", "DIESEL"] as const).map((f) => (
                        <button
                          type="button"
                          key={f}
                          onClick={() => setFuel(f)}
                          className={cn(
                            "border py-3.5 font-display text-base font-bold tracking-[0.2em] transition-all",
                            fuel === f
                              ? "border-volt bg-volt text-ink"
                              : "border-coal-3 bg-ink text-paper-2 hover:border-volt/60 hover:text-volt"
                          )}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>SERVICE NEEDED</label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {SERVICES.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setService(s)}
                          className={cn(
                            "border px-4 py-3.5 text-left font-display text-sm font-bold tracking-[0.12em] transition-all",
                            service === s
                              ? "border-volt bg-volt text-ink"
                              : "border-coal-3 bg-ink text-paper-2 hover:border-volt/60 hover:text-volt"
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>MESSAGE</label>
                    <textarea rows={3} className={inputCls} placeholder="Tell us what you're looking for…" />
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      className="volt-glow inline-flex flex-1 items-center justify-center gap-3 bg-volt px-8 py-4 font-display text-lg font-bold tracking-[0.15em] text-ink transition-colors hover:bg-volt-2"
                    >
                      GET MY OPTIONS
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </button>
                    <a
                      href="tel:+15555550199"
                      className="inline-flex items-center justify-center border border-coal-3 px-8 py-4 font-display text-lg font-bold tracking-[0.15em] text-paper transition-colors hover:border-volt hover:text-volt"
                    >
                      CALL / TEXT US
                    </a>
                  </div>
                  <p className="text-[11px] leading-relaxed text-mute/70">
                    No spam, no obligation. We'll reply with available options and pricing for your exact truck.
                  </p>
                </form>
              ) : (
                <div className="flex min-h-[28rem] flex-col items-center justify-center py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center border-2 border-volt">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 text-volt" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="m4 13 5 5L20 7" />
                    </svg>
                  </span>
                  <h3 className="mt-7 font-display text-4xl font-bold uppercase tracking-tight text-paper sm:text-5xl">
                    Request <span className="text-volt">received.</span>
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
                    We'll check current availability for your truck and get back
                    to you — usually within one business day.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 font-display text-xs font-semibold tracking-[0.3em] text-mute transition-colors hover:text-volt"
                  >
                    ↺ SEND ANOTHER REQUEST
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
