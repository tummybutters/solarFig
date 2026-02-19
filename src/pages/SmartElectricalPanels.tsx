import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Gauge, ShieldCheck, SlidersHorizontal } from "lucide-react";

const useCases = [
  { title: "Load Priority", description: "Choose what stays on during outages", icon: ShieldCheck },
  { title: "Usage Insights", description: "See where power goes in real-time", icon: Gauge },
  { title: "Smart Control", description: "Coordinate with solar & battery", icon: SlidersHorizontal },
];

const faqs = [
  {
    q: "Do I need a smart electrical panel to go solar?",
    a: "Not always. Many homes can go solar without one, but smart panels can add monitoring and control benefits for complex or backup-focused setups.",
  },
  {
    q: "Will a smart panel lower my bill by itself?",
    a: "A smart panel primarily provides visibility and control. Savings usually come from combining that control with solar, storage, and better load scheduling.",
  },
  {
    q: "Can it help during outages?",
    a: "When paired with battery backup, a smart panel can help prioritize critical circuits and improve how backup power is allocated.",
  },
  {
    q: "Can I add a smart panel later?",
    a: "In many cases yes, depending on your existing electrical configuration and equipment compatibility.",
  },
];

const SmartElectricalPanels = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="mobile-hero-media relative h-[52vh] min-h-[340px] w-full">
          <img
            src="/assets/hero-main/giorgio-trovato.jpg"
            alt="Smart electrical panel and backup hardware installation in garage."
            className="h-full w-full object-cover object-[center_68%] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/75 via-[#17141b]/45 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1200px] items-end px-6 pb-10 sm:px-8 sm:pb-14">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Solutions</p>
              <h1 className="text-4xl tracking-tight sm:text-6xl">Smart Electrical Panels</h1>
              <p className="mt-5 max-w-3xl text-white/80">
                Whole-home load visibility and control to optimize self-consumption, backup strategy, and EV charging behavior.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Command Center — Large image with text overlay */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.35)] lg:rounded-3xl">
            <img
              src="/assets/whole-home-solar/smart-panel-system.png"
              alt="Smart panel installation"
              className="h-[450px] w-full object-cover sm:h-[600px]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent sm:bg-gradient-to-r" />
            
            <div className="absolute inset-x-6 bottom-6 sm:inset-y-0 sm:right-0 sm:left-auto sm:flex sm:w-2/5 sm:items-center sm:p-12">
              <div className="rounded-xl bg-white/95 p-6 backdrop-blur-sm sm:rounded-2xl sm:p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Command Center</p>
                <h2 className="mb-4  text-2xl text-stone-900 sm:text-3xl">Your home's energy brain</h2>
                <p className="text-stone-600 leading-relaxed">
                  Smart electrical panels help you see and shape household load behavior, especially when paired with solar and storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases — Grid of cards with icons, minimal text */}
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Capabilities</p>
            <h2 className=" text-4xl leading-tight sm:text-5xl">What smart panels do</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon;
              return (
                <div key={useCase.title} className="group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]">
                  <span className="absolute right-4 top-4 text-xs font-mono text-white/20">0{i + 1}</span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    <Icon className="h-5 w-5 text-lime-200" />
                  </div>
                  <h3 className="mb-2  text-xl text-white">{useCase.title}</h3>
                  <p className="text-sm text-white/60">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration — Split layout with stats */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image with purple glow */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_-20px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/battery/battery-span-tesla-pw3.jpg"
                  alt="Integrated smart panel and battery system"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Content with stats */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">System Integration</p>
              <h2 className="mb-6  text-3xl text-stone-900 sm:text-4xl">Better together</h2>
              <p className="mb-8 text-stone-600 leading-relaxed">
                We design integrated control strategies around your circuits, daily load patterns, and backup priorities so the system behaves predictably.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-light text-purple-600">12-24</p>
                  <p className="text-sm text-stone-500">Circuits monitored</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-purple-600">&lt;100ms</p>
                  <p className="text-sm text-stone-500">Response time</p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:bg-stone-100"
              >
                Build my stack
                <ArrowRight className="h-4 w-4" />
              </a>
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

export default SmartElectricalPanels;
