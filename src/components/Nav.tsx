import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "PLATFORMS", href: "#segments" },
  { label: "MATCHER", href: "#vehicles" },
  { label: "ANATOMY", href: "#anatomy" },
  { label: "SOUND & DYNO", href: "#sound" },
  { label: "BRANDS", href: "#brands" },
  { label: "INSTALLATION", href: "#installation" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CONTACT", href: "#quote" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center bg-volt">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="currentColor">
          <path d="M3 17 12 3l-2.2 8.4H21L12 21l2.2-8.4H3Z" transform="rotate(90 12 12)" />
        </svg>
        <span className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-volt" />
      </span>
      <span className="font-display leading-none">
        <span className="block text-xl font-800 font-bold tracking-wide text-paper">
          APEX<span className="text-volt">INTAKE</span>
        </span>
        {!compact && (
          <span className="mt-0.5 block text-[9px] font-semibold tracking-[0.3em] text-mute">
            SOURCED • MATCHED • INSTALLED
          </span>
        )}
      </span>
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-coal-2 bg-ink/95 shadow-xl backdrop-blur-md"
            : "border-b border-paper/10 bg-ink/80 backdrop-blur-sm"
        )}
      >
        {/* top micro announcement bar */}
        <div className="hidden border-b border-paper/10 bg-coal/80 py-1.5 text-center sm:block">
          <p className="font-display text-[10px] font-bold tracking-[0.25em] text-paper-2">
            <span className="text-volt">● IN-STOCK & 1–2 DAY SOURCING</span> &nbsp;|&nbsp; FITMENT VERIFIED BEFORE ORDERING &nbsp;|&nbsp; PRO SHOP INSTALLATION
          </p>
        </div>

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-18 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative font-display text-xs font-bold tracking-[0.18em] text-paper-2 transition-colors hover:text-volt"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-volt transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+15555550199"
              className="hidden font-display text-xs font-bold tracking-[0.15em] text-volt hover:text-volt-2 sm:block"
            >
              (555) 555-0199
            </a>
            <a
              href="#quote"
              className="bg-volt px-5 py-2.5 font-display text-xs font-bold tracking-[0.15em] text-ink shadow-md transition-colors hover:bg-volt-2"
            >
              GET A QUOTE
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-coal-3 lg:hidden"
            >
              <span
                className={cn(
                  "h-px w-5 bg-paper transition-all duration-300",
                  open && "translate-y-[6px] rotate-45 bg-volt"
                )}
              />
              <span className={cn("h-px w-5 bg-paper transition-opacity duration-300", open && "opacity-0")} />
              <span
                className={cn(
                  "h-px w-5 bg-paper transition-all duration-300",
                  open && "-translate-y-[6px] -rotate-45 bg-volt"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/98 pt-24 transition-all duration-400 lg:hidden overflow-y-auto",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="tex-grid absolute inset-0 opacity-50" />
        <nav className="relative flex flex-col px-6 pb-12">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-coal-2 py-4"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="font-display text-2xl font-bold tracking-wide text-paper group-hover:text-volt">
                {l.label}
              </span>
              <span className="font-display text-xs text-mute">0{i + 1}</span>
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-6 bg-volt py-4 text-center font-display text-base font-bold tracking-[0.2em] text-ink"
          >
            GET A QUOTE
          </a>
          <a
            href="tel:+15555550199"
            className="mt-3 border border-coal-3 py-3.5 text-center font-display text-sm font-bold tracking-[0.2em] text-paper"
          >
            CALL SHOP: (555) 555-0199
          </a>
          <p className="mt-6 text-center text-xs tracking-[0.25em] text-mute">
            2016–2026 TRUCKS • GAS + DIESEL
          </p>
        </nav>
      </div>
    </>
  );
}
