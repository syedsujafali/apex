import { Logo } from "./Nav";

const LINKS = [
  { label: "Find Your Intake", href: "#vehicles" },
  { label: "Vehicles", href: "#applications" },
  { label: "Brands", href: "#brands" },
  { label: "Installation", href: "#installation" },
  { label: "Contact", href: "#quote" },
];

const SOCIALS = ["INSTAGRAM", "FACEBOOK", "TIKTOK"];

export default function Footer() {
  return (
    <footer className="relative border-t border-coal-2 bg-ink pb-24 pt-16 lg:pb-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <Logo compact />
            <p className="mt-5 max-w-xs font-display text-lg font-semibold uppercase leading-snug tracking-wide text-paper-2">
              Cold Air Intake Sales
              <br />
              <span className="text-volt">& Professional Installation</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mute">
              Premium intake systems for modern gas and diesel trucks —
              sourced from established brands, matched to your platform and
              installed in-house.
            </p>
            <div className="mt-7 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="border border-coal-3 px-4 py-2.5 font-display text-[10px] font-bold tracking-[0.25em] text-paper-2 transition-colors hover:border-volt hover:text-volt"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* links */}
          <div className="lg:col-span-3">
            <p className="font-display text-[10px] font-semibold tracking-[0.35em] text-mute">NAVIGATE</p>
            <ul className="mt-5 space-y-3.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2.5 font-display text-base font-semibold uppercase tracking-[0.12em] text-paper-2 transition-colors hover:text-volt"
                  >
                    <span className="h-px w-4 bg-coal-3 transition-all duration-300 group-hover:w-6 group-hover:bg-volt" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-4">
            <p className="font-display text-[10px] font-semibold tracking-[0.35em] text-mute">CONTACT</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="font-display text-[10px] font-bold tracking-widest text-volt">PH</span>
                <a href="tel:+15555550199" className="text-paper-2 transition-colors hover:text-volt">
                  (555) 555-0199
                </a>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-[10px] font-bold tracking-widest text-volt">EM</span>
                <a href="mailto:quotes@apexintake.co" className="text-paper-2 transition-colors hover:text-volt">
                  quotes@apexintake.co
                </a>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-[10px] font-bold tracking-widest text-volt">LO</span>
                <span className="text-paper-2">2400 Industrial Pkwy, Unit 7</span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-[10px] font-bold tracking-widest text-volt">HR</span>
                <span className="text-paper-2">
                  Mon–Fri 8AM – 6PM
                  <br />
                  Sat 9AM – 2PM • Sun Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-coal-2 pt-7">
          <p className="text-[11px] leading-relaxed text-mute/70">
            Product availability and compatibility are subject to current supplier inventory
            and vehicle specifications. We source products from established aftermarket brands;
            all brand names and trademarks are the property of their respective owners.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-[10px] tracking-[0.3em] text-mute">
              © {new Date().getFullYear()} APEX INTAKE CO. ALL RIGHTS RESERVED.
            </p>
            <p className="font-display text-[10px] tracking-[0.3em] text-mute">
              2020+ TRUCKS • GAS + DIESEL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
