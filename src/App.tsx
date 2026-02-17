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
import ProjectsShowcase from "@/pages/ProjectsShowcase";
import Battery from "@/pages/Battery";
import EVChargers from "@/pages/EVChargers";
import About from "@/pages/About";
import Articles from "@/pages/Articles";
import ArticleDetail from "@/pages/ArticleDetail";
import Careers from "@/pages/Careers";
import Referrals from "@/pages/Referrals";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import WholeHomeSolar from "@/pages/WholeHomeSolar";
import PricingCosts from "@/pages/PricingCosts";
import SolarPanels from "@/pages/SolarPanels";
import Microinverters from "@/pages/Microinverters";
import SmartElectricalPanels from "@/pages/SmartElectricalPanels";
import SolarBatteryIncentives from "@/pages/SolarBatteryIncentives";
import Locations from "@/pages/Locations";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />
      <Hero />
      <LogoScroll />
      <HomeEditorial />
      <GlobalQuoteSection />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/battery" element={<Battery />} />
      <Route path="/ev-chargers" element={<EVChargers />} />
      <Route path="/projects" element={<ProjectsShowcase />} />
      <Route path="/transactions" element={<ProjectsShowcase />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<ArticleDetail />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/referrals" element={<Referrals />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/whole-home-solar" element={<WholeHomeSolar />} />
      <Route path="/pricing-costs" element={<PricingCosts />} />
      <Route path="/installation" element={<ProjectsShowcase />} />
      <Route path="/solar-panels" element={<SolarPanels />} />
      <Route path="/microinverters" element={<Microinverters />} />
      <Route path="/smart-electrical-panels" element={<SmartElectricalPanels />} />
      <Route path="/solar-battery-incentives" element={<SolarBatteryIncentives />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/locations/sce" element={<Locations territory="sce" />} />
      <Route path="/locations/pge" element={<Locations territory="pge" />} />
      <Route path="/locations/sdge" element={<Locations territory="sdge" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
