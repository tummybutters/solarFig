import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import WhyChooseUs from "@/sections/WhyChooseUs";
import HowItWorks from "@/sections/HowItWorks";
import Savings from "@/sections/Savings";
import ServiceArea from "@/sections/ServiceArea";
import Warranty from "@/sections/Warranty";
import StrongClose from "@/sections/StrongClose";
import Footer from "@/sections/Footer";
import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Savings />
      <ServiceArea />
      <Warranty />
      <StrongClose />
      <Footer />
    </main>
  );
}

export default App;
