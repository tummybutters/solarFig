import Navbar from "@/components/Navbar";
import LogoScroll from "@/components/LogoScroll";
import Hero from "@/sections/HeroGlacial"; // Options: Hero, HeroCinematic, HeroSplit, HeroHorizon, HeroGlacial
// import HeroSplit from "@/sections/HeroSplit";
// import HeroHorizon from "@/sections/HeroHorizon";
// import HeroCinematic from "@/sections/HeroCinematic";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import HomeEditorial from "@/sections/HomeEditorial";
import Battery from "@/pages/Battery";
import EVChargers from "@/pages/EVChargers";
import About from "@/pages/About";
import Articles from "@/pages/Articles";
import ArticleDetail from "@/pages/ArticleDetail";
import Referrals from "@/pages/Referrals";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import Installation from "@/pages/Installation";
import PricingCosts from "@/pages/PricingCosts";
import SolarPanels from "@/pages/SolarPanels";
import Microinverters from "@/pages/Microinverters";
import SolarBatteryIncentives from "@/pages/SolarBatteryIncentives";
import Locations from "@/pages/Locations";
import OregonLocations from "@/pages/OregonLocations";
import Contact from "@/pages/Contact";
import { Navigate, Route, Routes } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import "./App.css";

const HomePage = () => {
  return (
    <main className="home-page mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />
      <Hero />
      <HomeEditorial />
      <LogoScroll />
      <GlobalQuoteSection />
      <Footer />
    </main>
  );
};

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const isApplePlatform = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel";
    const isWindowsPlatform = /Win/.test(navigator.userAgent) || navigator.platform.startsWith("Win");
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    root.classList.toggle("platform-windows", isWindowsPlatform && canHover);

    if (!isApplePlatform || !canHover) {
      root.classList.remove("platform-apple", "scrollbar-peek");
      return () => {
        root.classList.remove("platform-windows");
      };
    }

    let hideTimer: number | undefined;

    const showScrollbar = () => {
      root.classList.add("platform-apple", "scrollbar-peek");
    };

    const hideScrollbar = () => {
      root.classList.remove("scrollbar-peek");
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      root.classList.add("platform-apple");

      if (window.innerWidth - event.clientX <= 18) {
        showScrollbar();
      } else {
        hideScrollbar();
      }
    };

    const handlePointerLeave = () => {
      hideScrollbar();
    };

    const handleScroll = () => {
      showScrollbar();
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        hideScrollbar();
      }, 600);
    };

    root.classList.add("platform-apple");
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(hideTimer);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      root.classList.remove("platform-apple", "scrollbar-peek", "platform-windows");
    };
  }, []);

  return (
    <>
      <SeoHead />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/battery" element={<Battery />} />
        <Route path="/ev-chargers" element={<EVChargers />} />
        <Route path="/transactions" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/projects" element={<Navigate to="/about" replace />} />
        <Route path="/careers" element={<Navigate to="/about" replace />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/areas" element={<Navigate to="/locations" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/whole-home-solar" element={<Navigate to="/pricing-costs" replace />} />
        <Route path="/pricing-costs" element={<PricingCosts />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/solar-panels" element={<SolarPanels />} />
        <Route path="/microinverters" element={<Microinverters />} />
        <Route path="/smart-electrical-panels" element={<Navigate to="/pricing-costs" replace />} />
        <Route path="/solar-battery-incentives" element={<SolarBatteryIncentives />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/oregon" element={<OregonLocations />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
