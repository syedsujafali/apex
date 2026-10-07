import Nav from "./components/Nav";
import MobileBar from "./components/MobileBar";
import Hero from "./components/Hero";
import VehicleMatcher from "./components/VehicleMatcher";
import PerformanceSolution from "./components/PerformanceSolution";
import TruckCategories from "./components/TruckCategories";
import Brands from "./components/Brands";
import Installation from "./components/Installation";
import Applications from "./components/Applications";
import WhyUs from "./components/WhyUs";
import CustomerTrucks from "./components/CustomerTrucks";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

const TICKER_ITEMS = [
  "COLD AIR INTAKE SYSTEMS",
  "PROFESSIONAL INSTALLATION",
  "GAS + DIESEL TRUCKS",
  "2020+ PLATFORMS",
  "FAST SOURCING — TYPICALLY 1–2 DAYS",
  "FITMENT VERIFIED BEFORE ORDERING",
];

function Ticker() {
  const row = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-volt/30 bg-volt py-3">
      <div className="marquee-track flex w-max items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display text-sm font-bold tracking-[0.25em] text-ink">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-ink/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative bg-ink text-paper-2">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <VehicleMatcher />
        <PerformanceSolution />
        <TruckCategories />
        <Brands />
        <Installation />
        <Applications />
        <WhyUs />
        <CustomerTrucks />
        <QuoteSection />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
