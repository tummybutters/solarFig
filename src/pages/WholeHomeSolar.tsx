import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Battery, Car, Home, Zap } from "lucide-react";

const systemComponents = [
  { title: "Solar Panels", description: "Premium modules", icon: Zap, image: "/assets/whole-home-solar/whole-home-house.jpg" },
  { title: "Battery Backup", description: "Store excess energy", icon: Battery, image: "/assets/whole-home-solar/battery-backup.webp" },
  { title: "EV Charging", description: "Charge at home", icon: Car, image: "/assets/ev-chargers/ev-equipment-02.png" },
  { title: "Smart Panels", description: "Control & monitor", icon: Home, image: "/assets/whole-home-solar/smart-panel-system.png" },
];

const faqs = [
  {
    q: "What happens to solar panel systems on cloudy days or in the winter?",
    a: "Your system still produces electricity on cloudy days, just at lower output. Production changes by season, and system sizing accounts for those patterns.",
  },
  {
    q: "How much will I save on my energy bill with solar panels?",
    a: "Savings vary by utility, usage profile, roof conditions, and equipment. We model your home and provide a custom estimate before you decide.",
  },
  {
    q: "How do I know if my house is a good candidate for solar panels?",
    a: "We evaluate roof orientation, shade, structural condition, and your electric usage to confirm fit and expected performance.",
  },
  {
    q: "Can I go completely off-grid?",
    a: "Some homeowners can, but most choose grid-connected systems with storage for flexibility, backup, and better economics.",
  },
  {
    q: "How long does solar panel installation take?",
    a: "Most physical installs are completed quickly, often in a day, depending on roof complexity and scope.",
  },
  {
    q: "How long does the process take from consultation to inspection?",
    a: "Typical timelines range several weeks and depend on utility approvals, permitting speed, and inspection scheduling in your area.",
  },
];

const WholeHomeSolar = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="bg-[linear-gradient(130deg,#17131d_0%,#241a33_55%,#321f4b_100%)] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Whole Home Solar</p>
          <h1 className="max-w-4xl text-4xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Energy independence begins with whole-home solar systems.
          </h1>
        </div>
      </section>

      {/* Hero Image — unchanged */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative h-[66vh] min-h-[500px] w-full sm:h-[76vh]">
          <img
            src="/assets/hero-main/whole-home-solar-h1-2026-02-17.jpg"
            alt="Modern whole-home solar installation overlooking the coast at sunset."
            className="h-full w-full object-cover object-[center_74%] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17141b]/65 via-[#17141b]/24 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-2xl">
              <p className="text-lg text-white/90">
                Full-home solar design with backup-ready architecture and long-term savings in mind.
              </p>
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

      {/* Intro — Minimal text */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <p className="max-w-3xl text-2xl leading-relaxed text-stone-700 sm:text-3xl">
            Solarfig designs and coordinates smart, whole-home solar energy systems built for California homeowners.
          </p>
        </div>
      </section>

      {/* System Components — Masonry-style grid with varying sizes */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Complete System</p>
            <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">Four components, one system</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {systemComponents.map((component, i) => {
              const Icon = component.icon;
              const isLarge = i === 0 || i === 3;
              return (
                <div 
                  key={component.title} 
                  className={`group relative overflow-hidden rounded-2xl shadow-[0_15px_50px_-15px_rgba(109,57,181,0.3)] transition-shadow duration-500 hover:shadow-[0_25px_70px_-15px_rgba(109,57,181,0.45)] ${isLarge ? 'sm:row-span-2' : ''}`}
                >
                  <img
                    src={component.image}
                    alt={component.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${isLarge ? 'aspect-[3/4] sm:aspect-auto sm:h-full' : 'aspect-square'}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-medium text-white">{component.title}</h3>
                    <p className="text-sm text-white/70">{component.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation — Large image with floating stats */}
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.4)] lg:rounded-3xl">
              <img
                src="/assets/whole-home-solar/installation-team.png"
                alt="Installation team at work"
                className="h-[400px] w-full object-cover sm:h-[500px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>

            {/* Floating stats */}
            <div className="relative mx-4 -mt-16 grid grid-cols-2 gap-4 sm:mx-8 sm:mt-0 sm:flex sm:gap-6 lg:absolute lg:bottom-8 lg:right-8">
              <div className="rounded-xl bg-white/95 p-5 text-center backdrop-blur-sm sm:min-w-[140px]">
                <p className="text-2xl font-light text-purple-600">1 Day</p>
                <p className="text-xs text-stone-500">Typical install</p>
              </div>
              <div className="rounded-xl bg-white/95 p-5 text-center backdrop-blur-sm sm:min-w-[140px]">
                <p className="text-2xl font-light text-purple-600">25yr</p>
                <p className="text-xs text-stone-500">Warranty</p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Installation</p>
            <h2 className="mb-4 font-serif text-3xl leading-tight sm:text-4xl">Professional teams, single-day completion</h2>
            <p className="text-white/60 leading-relaxed">
              Our local, certified teams make going solar easy, with most installations completed in a single day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — Dark card */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#16131a] px-8 py-12 text-white sm:px-12 sm:py-16 lg:rounded-3xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Meet up to 100% of your yearly energy needs.
              </h2>
              <a
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>
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

export default WholeHomeSolar;
