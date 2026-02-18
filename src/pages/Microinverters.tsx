import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Eye, ShieldCheck, Sun } from "lucide-react";

const benefits = [
  { title: "Panel Monitoring", description: "See each panel's output", icon: Eye },
  { title: "Shade Resilience", description: "One shaded panel won't hurt the rest", icon: Sun },
  { title: "Safety Compliant", description: "Rapid shutdown built-in", icon: ShieldCheck },
];

const fitScenarios = [
  {
    title: "Complex Roofs",
    description: "Multiple planes, dormers, or chimneys",
    image: "/assets/install-gallery/install-04.jpg",
  },
  {
    title: "Partial Shade",
    description: "Trees, vents, or neighboring structures",
    image: "/assets/install-gallery/install-08.jpg",
  },
];

const faqs = [
  {
    q: "What is a microinverter?",
    a: "A microinverter converts DC to AC at each individual panel instead of using one central inverter for the entire array.",
  },
  {
    q: "Are microinverters always better than string inverters?",
    a: "Not always. The right choice depends on roof layout, shade profile, budget, and monitoring goals. We recommend based on your site conditions.",
  },
  {
    q: "Do microinverters improve output in shade?",
    a: "They often help preserve production from non-shaded modules because each panel operates independently.",
  },
  {
    q: "Can I monitor each panel?",
    a: "Yes, most microinverter ecosystems provide module-level performance data in a homeowner app dashboard.",
  },
];

const Microinverters = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="bg-[linear-gradient(130deg,#17131d_0%,#241a33_55%,#321f4b_100%)] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Solutions</p>
          <h1 className="text-4xl tracking-tight sm:text-6xl">Microinverters</h1>
          <p className="mt-5 max-w-3xl text-white/80">
            Module-level power electronics for design flexibility, panel-level visibility, and resilient performance.
          </p>
        </div>
      </section>

      {/* Hero Image — unchanged */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative h-[64vh] min-h-[460px] w-full sm:h-[72vh]">
          <img src="/assets/hero-main/wiseman-mabasa.jpg" alt="Solar workers on rooftop with installed panels." className="h-full w-full object-cover object-[center_68%] sm:object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17141b]/68 via-[#17141b]/26 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-[1100px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-2xl">
              <p className="text-lg text-white/90">Build smarter panel-level control into your system from day one.</p>
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

      {/* Benefits — Icon strip with large image below */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Panel-Level Control</p>
            <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">See every panel</h2>
          </div>

          {/* Icon strip */}
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">{benefit.title}</p>
                    <p className="text-sm text-stone-500">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Large feature image with purple glow */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-purple-600/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.35)]">
              <img
                src="/assets/install-gallery/install-04.jpg"
                alt="Rooftop solar array with microinverters"
                className="aspect-[21/9] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fit Scenarios — Staggered layout with large images */}
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">When to Choose</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Right fit scenarios</h2>
          </div>

          <div className="space-y-16">
            {fitScenarios.map((scenario, i) => (
              <div key={scenario.title} className={`grid gap-8 items-center lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-20px_rgba(109,57,181,0.4)]">
                    <img
                      src={scenario.image}
                      alt={scenario.title}
                      className="aspect-[16/10] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}>
                  <span className="text-xs font-mono text-purple-400">0{i + 1}</span>
                  <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">{scenario.title}</h3>
                  <p className="mt-3 text-lg text-white/60">{scenario.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering First — Compact text card over image corner */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.3)] lg:rounded-3xl">
              <img
                src="/assets/install-gallery/install-08.jpg"
                alt="Solar installer at work"
                className="h-[450px] w-full object-cover sm:h-[550px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="relative mx-4 -mt-24 rounded-xl bg-white p-6 shadow-xl sm:mx-8 sm:p-8 lg:absolute lg:bottom-10 lg:left-10 lg:mt-0 lg:max-w-sm lg:rounded-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-600">Engineering First</p>
              <h3 className="mb-3 font-serif text-2xl text-stone-900">No one-size-fits-all</h3>
              <p className="text-stone-600 leading-relaxed">
                We compare microinverter and string-based designs against your roof conditions, then walk you through tradeoffs.
              </p>
              <a href="/#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700">
                Compare options
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

export default Microinverters;
