import Navbar from "@/components/Navbar";
import LogoScroll from "@/components/LogoScroll";
import Hero from "@/sections/HeroGlacial"; // Options: Hero, HeroCinematic, HeroSplit, HeroHorizon, HeroGlacial
// import Hero from "@/sections/Hero";
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
        <Route path="/careers" element={<Navigate to="/about" replace />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/contact" element={<Contact />} />
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
