import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, SunMedium, Wrench, Zap } from "lucide-react";

const panelTypes = [
  {
    title: "Premium Efficiency",
    description: "Maximum output per square foot",
    image: "/assets/install-gallery/install-03.jpg",
  },
  {
    title: "All-Weather Performance",
    description: "Reliable in coastal fog & heat",
    image: "/assets/hero-main/solar-panels-h1-2026-02-17.jpg",
  },
  {
    title: "25-Year Warranty",
    description: "Long-term peace of mind",
    image: "/assets/install-gallery/install-04.jpg",
  },
];

const designFactors = [
  { title: "Roof Orientation", description: "Optimal sun exposure mapping", icon: SunMedium },
  { title: "Usage Profile", description: "Sized to your actual consumption", icon: Zap },
  { title: "Electrical Ready", description: "Panel upgrades if needed", icon: Wrench },
];

const faqs = [
  {
    q: "How much roof space do I need for a home solar system?",
    a: "It depends on your target offset, module wattage, and roof geometry. We map usable roof area first, then size around your annual usage goals.",
  },
  {
    q: "Do solar panels still work on cloudy days?",
    a: "Yes. Output drops in cloud cover, but modern systems still generate energy in diffuse light. Annual production planning already accounts for seasonal weather.",
  },
  {
    q: "How long do residential solar panels last?",
    a: "Most quality modules are designed for decades of use and typically carry long product and performance warranties from the manufacturer.",
  },
  {
    q: "Can I add a battery later?",
    a: "Usually yes. We can design with battery-ready architecture so adding storage later is smoother and less disruptive.",
  },
];

const SolarPanels = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="bg-[linear-gradient(130deg,#17131d_0%,#241a33_55%,#321f4b_100%)] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Solutions</p>
          <h1 className="text-4xl tracking-tight sm:text-6xl">Solar Panels</h1>
          <p className="mt-5 max-w-3xl text-white/80">
            High-performance panel options designed for California roofs, usage profiles, and long-term reliability.
          </p>
        </div>
      </section>

      {/* Hero Image — unchanged */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative h-[64vh] min-h-[460px] w-full sm:h-[72vh]">
          <img
            src="/assets/hero-main/solar-panels-h1-2026-02-17.jpg"
            alt="Residential home with rooftop solar panels on a clear day."
            className="h-full w-full object-cover object-[center_72%] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17141b]/70 via-[#17141b]/28 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-[1100px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-2xl">
              <p className="text-lg text-white/90">See how premium panel design can maximize long-term performance.</p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                Get a quote
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Panel Options</p>
            <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">Built for California roofs</h2>
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
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Large image with purple glow */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-20px_rgba(109,57,181,0.4)]">
                <img
                  src="/assets/install-gallery/install-03.jpg"
                  alt="Solar installation on residential roof"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact content with horizontal icons */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Custom Design</p>
              <h2 className="mb-8 font-serif text-3xl leading-tight sm:text-4xl">Designed around your home</h2>

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
                href="/#contact"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-lime-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1c1723] transition-colors hover:bg-lime-100"
              >
                Start your design
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
              src="/assets/whole-home-solar/battery-backup.webp"
              alt="Solar home ready for battery expansion"
              className="h-[400px] w-full object-cover sm:h-[520px]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 sm:p-12 lg:max-w-xl">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Future Ready</p>
                <h2 className="mb-4 font-serif text-3xl text-white sm:text-4xl">Build now, expand later</h2>
                <p className="mb-6 text-white/80 leading-relaxed">
                  If batteries or EV charging are in your near future, we design with expansion in mind so upgrades stay straightforward.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
                >
                  Plan my system
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
          <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">Frequently Asked Questions</h2>
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
