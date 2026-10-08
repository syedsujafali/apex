import { useState } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const ENGINES = [
  {
    id: "turbogas",
    name: "TWIN-TURBO GAS",
    platforms: "Ford 3.5L/2.7L EcoBoost • Toyota 3.5L i-FORCE",
    character: "TURBO SPOOL & BLOW-OFF CHATTER",
    soundDesc:
      "Drastically intensifies turbo whistle under initial load and delivers a satisfying bypass valve release sound when letting off throttle.",
    dbGain: "+9 dB Intake Sound",
    spoolTime: "18% Faster Boost Spool",
    rpmCurve: "2,200 – 5,500 RPM",
    bars: [30, 45, 75, 90, 100, 85, 70, 95, 80, 60, 40, 65, 85, 90, 75, 55],
  },
  {
    id: "v8",
    name: "NATURALLY ASPIRATED V8",
    platforms: "Ford 5.0L Coyote • RAM 5.7L HEMI • GM 5.3L/6.2L V8",
    character: "DEEP RESONANT THROATY GROWL",
    soundDesc:
      "Produces a refined, quiet cruiser idle that transforms into an aggressive, deep mechanical roar the instant you hammer the throttle.",
    dbGain: "+12 dB WOT Roar",
    spoolTime: "Instant Throttle Response",
    rpmCurve: "2,800 – 6,200 RPM",
    bars: [25, 40, 60, 80, 95, 90, 100, 95, 85, 90, 80, 70, 85, 95, 70, 45],
  },
  {
    id: "diesel",
    name: "HEAVY-DUTY TURBO DIESEL",
    platforms: "Ford 6.7L Powerstroke • RAM 6.7L Cummins • GM 6.6L Duramax",
    character: "TURBINE INDUCER WHISTLE & TORQUE GROWL",
    soundDesc:
      "Unleashes the massive breathing capacity of heavy-duty turbochargers — crisp turbine whistle when pulling trailers up mountain grades.",
    dbGain: "+14 dB Under Tow Load",
    spoolTime: "Lower EGTs & Quicker Spool",
    rpmCurve: "1,600 – 3,200 RPM",
    bars: [40, 65, 85, 100, 95, 90, 85, 95, 100, 90, 80, 75, 90, 85, 70, 50],
  },
];

export default function SoundExperience() {
  const [selected, setSelected] = useState(0);
  const [isRevving, setIsRevving] = useState(false);

  const current = ENGINES[selected];

  const handleRev = () => {
    setIsRevving(true);
    setTimeout(() => setIsRevving(false), 2200);
  };

  return (
    <section id="sound" className="relative overflow-hidden bg-light-bg py-24 text-light-ink lg:py-36">
      <div className="tex-grid-light absolute inset-0 opacity-70" />
      <div className="absolute -bottom-32 left-1/2 h-80 w-[45rem] -translate-x-1/2 rounded-full bg-volt/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-amber-500">04</span>
                <span className="h-px w-12 bg-amber-400" />
                <span className="font-display text-xs font-semibold tracking-[0.35em] text-light-mute">
                  SOUND & THROTTLE RESPONSE
                </span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-light-ink sm:text-6xl lg:text-8xl">
                Hear your truck
                <br />
                <span className="text-amber-500">come alive.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-4">
            <p className="max-w-sm border-l-2 border-amber-400 pl-5 text-base leading-relaxed text-light-mute">
              Factory airboxes are designed to silence engine sound with restrictive baffles.
              A performance cold air system unleashes true acoustic character.
            </p>
          </Reveal>
        </div>

        {/* main interactive stage */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* dyno action visual */}
          <div className="relative flex flex-col overflow-hidden border border-light-border bg-white shadow-xl shadow-slate-200/70 lg:col-span-6">
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[22rem] overflow-hidden">
              <img
                src="/images/dyno_test.jpg"
                alt="Truck on chassis dynamometer testing intake airflow"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* live sound waveform overlay */}
              <div className="absolute bottom-6 inset-x-6 bg-slate-950/90 p-5 backdrop-blur-md border border-slate-800 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-[10px] font-bold tracking-[0.3em] text-volt">
                    {isRevving ? "● SIMULATING FULL THROTTLE RUN" : "ACOUSTIC PROFILE SPECTRUM"}
                  </span>
                  <span className="font-display text-xs font-semibold text-slate-300">
                    {current.rpmCurve}
                  </span>
                </div>

                {/* animated equalizer bars */}
                <div className="flex h-12 items-end justify-between gap-1">
                  {current.bars.map((height, i) => {
                    const dynamicHeight = isRevving
                      ? Math.min(100, height * 1.25)
                      : height;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "w-full transition-all duration-300",
                          isRevving ? "bg-volt shadow-sm shadow-volt" : "bg-slate-500"
                        )}
                        style={{
                          height: `${dynamicHeight}%`,
                          transitionDelay: `${i * 25}ms`,
                        }}
                      />
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-800 pt-2 text-[11px] text-slate-400">
                  <span>LOW RPM TORQUE</span>
                  <span>PEAK BOOST ACOUSTIC</span>
                  <span>REDLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* engine profiles selection & details */}
          <div className="flex flex-col justify-between gap-5 lg:col-span-6">
            {/* engine buttons */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {ENGINES.map((eng, idx) => (
                <button
                  key={eng.id}
                  onClick={() => setSelected(idx)}
                  className={cn(
                    "border p-4 text-left transition-all duration-200",
                    selected === idx
                      ? "border-slate-950 bg-slate-950 text-white shadow-lg"
                      : "border-light-border bg-white text-slate-800 hover:border-slate-950 hover:bg-slate-50"
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-[10px] font-bold tracking-[0.25em]",
                      selected === idx ? "text-volt" : "text-light-mute"
                    )}
                  >
                    PLATFORM 0{idx + 1}
                  </span>
                  <h4 className="mt-1 font-display text-lg font-bold uppercase leading-tight">
                    {eng.name}
                  </h4>
                </button>
              ))}
            </div>

            {/* active profile card */}
            <div className="border border-light-border bg-white p-6 shadow-md sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-light-border pb-4">
                <div>
                  <span className="font-display text-[10px] font-bold tracking-[0.3em] text-light-mute">
                    ACOUSTIC SIGNATURE
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-slate-950 sm:text-3xl">
                    {current.character}
                  </h3>
                </div>
                <span className="border border-amber-300 bg-amber-50 px-3 py-1 font-display text-xs font-bold tracking-[0.2em] text-amber-800">
                  {current.dbGain}
                </span>
              </div>

              <p className="mt-4 text-sm font-medium text-slate-700">
                <span className="text-light-mute">Vehicles: </span>
                {current.platforms}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-light-mute">
                {current.soundDesc}
              </p>

              {/* quick stats */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                <div className="bg-slate-50 p-4 border border-slate-200/60">
                  <span className="font-display text-[10px] font-semibold tracking-[0.25em] text-light-mute">
                    DYNO AIRFLOW BOOST
                  </span>
                  <p className="mt-1 font-display text-xl font-bold text-slate-950">
                    {current.spoolTime}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-200/60">
                  <span className="font-display text-[10px] font-semibold tracking-[0.25em] text-light-mute">
                    VOLUME AT WOT
                  </span>
                  <p className="mt-1 font-display text-xl font-bold text-amber-600">
                    {current.dbGain}
                  </p>
                </div>
              </div>

              {/* interactive rev trigger */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={handleRev}
                  disabled={isRevving}
                  className={cn(
                    "inline-flex flex-1 items-center justify-center gap-3 px-6 py-4 font-display text-sm font-bold tracking-[0.2em] transition-all",
                    isRevving
                      ? "bg-slate-950 text-volt shadow-lg"
                      : "bg-volt text-ink shadow-md hover:bg-volt-2 volt-glow"
                  )}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {isRevving ? "THROTTLE ENGAGED..." : "TEST SOUND PROFILE"}
                </button>
                <a
                  href="#vehicles"
                  className="inline-flex items-center justify-center border border-slate-300 bg-white px-6 py-4 font-display text-sm font-bold tracking-[0.2em] text-slate-900 transition-colors hover:border-slate-950 hover:bg-slate-50"
                >
                  MATCH MY TRUCK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
