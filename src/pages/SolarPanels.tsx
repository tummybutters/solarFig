import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useHeroViewportFit } from "@/hooks/use-hero-viewport-fit";
import { ArrowRight, SunMedium, Wrench, Zap } from "lucide-react";

const panelTypes = [
  {
    title: "Premium Efficiency",
    description: "Maximum energy output with fewer panels and a clean, streamlined look.",
    image: "/assets/solar-panels/solar-panels-premium-efficiency-2026.jpg",
  },
  {
    title: "All-Climate Performance",
    description: "Engineered to perform reliably in heat, cold, coastal air, and variable weather.",
    image: "/assets/solar-panels/solar-panels-all-climate-performance-2026.webp",
  },
  {
    title: "25-Year Warranty Protection",
    description: "Long-term performance and product coverage for lasting peace of mind.",
    image: "/assets/solar-panels/solar-panels-25-year-warranty-protection-2026.webp",
  },
];

const designFactors = [
  { title: "Roof & Sun Mapping", description: "We analyze orientation, shading, and seasonal exposure to maximize production year-round.", icon: SunMedium },
  { title: "Usage-Based Sizing", description: "Your system is built around your real consumption, not rough estimates.", icon: Zap },
  { title: "Electrical Assessment", description: "We evaluate panel capacity and upgrade needs before installation begins.", icon: Wrench },
];

const faqs = [
  {
    q: "How much roof space do I need for a home solar system?",
    a: "Space requirements depend on your energy usage, panel efficiency, and roof layout. Higher-efficiency panels generate more power in less space. We size systems based on both roof dimensions and consumption.",
  },
  {
    q: "Do solar panels work on cloudy days?",
    a: "Yes. Panels still produce electricity in indirect sunlight, though output is reduced compared to clear conditions. System design accounts for seasonal and weather variation.",
  },
  {
    q: "How long do residential solar panels last?",
    a: "Most modern panels carry 25-year performance warranties and degrade gradually over time. Many continue producing energy well beyond their warranty period.",
  },
  {
    q: "How efficient are modern solar panels?",
    a: "Residential panel efficiency typically ranges from 19% to 22%. Higher-efficiency panels produce more power per square foot, which can reduce the total number of panels needed.",
  },
  {
    q: "Do solar panels require maintenance?",
    a: "Solar panels have no moving parts and require minimal maintenance. Occasional cleaning and routine system checks are usually sufficient.",
  },
  {
    q: "How do I know if my roof is suitable for solar?",
    a: "Roof age, orientation, shading, and structural condition all factor into suitability. We assess these elements during the design process to determine optimal placement and system size.",
  },
];

const SolarPanels = () => {
  const { heroMediaStyle, heroOverlayStyle } = useHeroViewportFit();

  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative min-h-[420px] w-full" style={heroMediaStyle}>
          <img
            src="/assets/solar-panels/solar-panels-header-2026.webp"
            alt="Residential home with rooftop solar panels on a clear day."
            className="h-full w-full object-cover object-[center_72%] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/80 via-[#17141b]/46 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-center px-6 sm:px-8" style={heroOverlayStyle}>
            <div className="max-w-4xl text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">SOLAR PANELS</p>
              <h1 className="max-w-[980px] text-5xl font-medium leading-[0.98] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[82px]">
                Performance-Driven Solar Panels. Built to Last.
              </h1>
              <p className="mt-7 max-w-[980px] text-[23px] font-medium leading-[1.34] text-white/82">
                Industry leading panel options engineered for efficiency, durability, and long-term energy savings - tailored to your home's unique roof, climate, and usage profile.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                GET A QUOTE
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Types — Horizontal scroll on mobile, grid on desktop */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">PANEL OPTIONS</p>
            <h2 className=" text-4xl text-stone-900 sm:text-5xl">Engineered for long-term performance</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {panelTypes.map((panel, i) => (
              <div key={panel.title} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(109,57,181,0.35)] transition-shadow duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(109,57,181,0.5)]">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-xs font-mono text-purple-400">0{i + 1}</span>
                  <div>
                    <h3 className="font-medium text-stone-900">{panel.title}</h3>
                    <p className="text-sm text-stone-500">{panel.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Factors — Large image left, horizontal icon row right */}
      <section className="bg-[linear-gradient(145deg,#6d5a96_0%,#836fb0_52%,#9a86c2_100%)] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Large image with purple glow */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-20px_rgba(109,57,181,0.4)]">
                <img
                  src="https://assets.cdn.filesafe.space/Ox7ZW3hQNuMhAdjVc5tB/media/9910e19f-2f86-4683-a477-2e99c4e8f8e2.gif"
                  alt="Solar installation animation"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact content with horizontal icons */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">CUSTOM LAYOUT</p>
              <h2 className="mb-8  text-3xl leading-tight sm:text-4xl">Built for performance. Designed for aesthetics.</h2>

              <div className="space-y-6">
                {designFactors.map((factor) => {
                  const Icon = factor.icon;
                  return (
                    <div key={factor.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                        <Icon className="h-5 w-5 text-lime-200" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{factor.title}</p>
                        <p className="text-sm text-white/50">{factor.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="#contact"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-lime-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1c1723] transition-colors hover:bg-lime-100"
              >
                START YOUR DESIGN
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Future Ready — Full-bleed image with overlay text */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.3)] lg:rounded-3xl">
            <img
              src="/assets/solar-panels/solar-panels-designed-for-whats-next-2026.webp"
              alt="Solar home prepared for future energy upgrades"
              className="h-[400px] w-full object-cover sm:h-[520px]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 sm:p-12 lg:max-w-xl">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">FUTURE READY</p>
                <h2 className="mb-4  text-3xl text-white sm:text-4xl">Designed for what's next</h2>
                <p className="mb-6 text-white/80 leading-relaxed">
                  We design your system with battery storage, EV charging, and future upgrades in mind - so expanding later doesn't mean starting over.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
                >
                  PLAN MY SYSTEM
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — unchanged */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[980px] px-6 sm:px-8">
          <h2 className=" text-4xl text-stone-900 sm:text-5xl">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-8 rounded-2xl border border-gray-200 bg-white px-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg text-[#231f2a]">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <GlobalQuoteSection />
      <Footer />
    </main>
  );
};

export default SolarPanels;
