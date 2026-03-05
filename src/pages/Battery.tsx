import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CloudLightning, DollarSign, Gauge, HousePlug, ShieldCheck } from "lucide-react";

const controlModes = [
  {
    title: "Proactive Backup Preparation",
    description: "Automatically maintains reserve capacity during elevated outage risk",
    image: "/assets/battery/battery-proactive-backup-protection.webp",
    alt: "Home battery system prepared to provide backup during outages.",
  },
  {
    title: "Daily Energy Optimization",
    description: "Stores surplus daytime production for use after sunset",
    image: "/assets/battery/battery-daily-energy-optimization.jpg",
    alt: "Home battery storing daytime solar production for evening use.",
  },
  {
    title: "Time-Based Load Management",
    description: "Adjusts charging and discharging around peak utility rates",
    image: "/assets/battery/battery-time-based-load-management.jpg",
    alt: "Home battery system balancing loads around time-of-use energy rates.",
  },
];

const batteryBenefits = [
  {
    title: "Flexible Financing Options",
    description: "Energy storage can be structured as part of your overall system investment",
    icon: DollarSign,
  },
  {
    title: "Backup Capability",
    description: "Maintain essential circuits during grid interruptions",
    icon: CloudLightning,
  },
  {
    title: "Time-of-Use Optimization",
    description: "Store low-cost energy and discharge during peak rate periods",
    icon: Gauge,
  },
  {
    title: "Greater Energy Control",
    description: "Manage how and when your home draws from solar, storage, or the grid",
    icon: HousePlug,
  },
  {
    title: "Incentive Eligibility",
    description: "Federal and local programs may apply to qualifying installations",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "Can a home battery replace a generator during an outage?",
    answer:
      "In many cases, yes. A battery can power selected circuits during outages and recharge automatically when solar production resumes. Backup duration depends on system size and usage.",
  },
  {
    question: "What type of batteries are used?",
    answer:
      "Most residential systems use lithium-ion technology for its efficiency, reliability, and lifespan. We recommend platforms that meet modern safety and performance standards.",
  },
  {
    question: "Can I add storage to an existing Solarfig system?",
    answer:
      "Often, yes. Compatibility depends on your inverter and electrical setup. We evaluate your system and design a seamless expansion.",
  },
  {
    question: "Can I go completely off-grid with a home battery?",
    answer:
      "Full off-grid capability requires sufficient solar production and storage capacity. Most homeowners use batteries to reduce grid reliance rather than eliminate it entirely.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation typically takes one to two days, depending on system complexity. Permitting timelines vary by location.",
  },
  {
    question: "How much storage do I need?",
    answer:
      "Storage size depends on your energy usage, critical loads, and backup goals. We design systems around your consumption patterns and outage priorities.",
  },
];

const Battery = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative h-[64vh] min-h-[420px] w-full sm:h-[72vh] lg:h-[760px]">
          <img
            src="/assets/battery/battery-header-image.jpg"
            alt="Wall-mounted home battery in a studio-style setting."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/72 via-[#17141b]/46 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-center px-6 sm:px-8">
            <div className="max-w-4xl pt-12 text-white sm:pt-16 lg:pt-20">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Energy storage</p>
              <h1 className="max-w-[980px] text-5xl font-medium leading-[0.98] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[82px]">
                Intelligent Energy Storage. Built for Resilience.
              </h1>
              <p className="mt-7 max-w-[980px] text-[23px] font-medium leading-[1.34] text-white/82">
                Energy storage that extends solar value beyond daylight. Maintain essential power during grid interruptions.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Control Modes — Images dominant, minimal text badges below */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Energy Management</p>
            <h2 className=" text-4xl text-stone-900 sm:text-5xl">Energy storage that adapts</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {controlModes.map((mode, i) => (
              <div key={mode.title} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(109,57,181,0.35)] transition-shadow duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(109,57,181,0.5)]">
                  <img
                    src={mode.image}
                    alt={mode.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="text-xs font-mono text-purple-400">0{i + 1}</span>
                  <div>
                    <h3 className="font-medium text-stone-900">{mode.title}</h3>
                    <p className="text-sm text-stone-500">{mode.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — Large image left, compact text right */}
      <section className="bg-[linear-gradient(145deg,#6d5a96_0%,#836fb0_52%,#9a86c2_100%)] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Large image with purple glow */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-20px_rgba(109,57,181,0.4)]">
                <img
                  src="/assets/battery/battery-extending-the-value-of-solar.jpg"
                  alt="Stacked home energy storage units installed in a garage."
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact text content */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Why Energy Storage</p>
              <h2 className="mb-8  text-3xl leading-tight sm:text-4xl">Extending the value of solar</h2>

              <div className="space-y-5">
                {batteryBenefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                        <Icon className="h-4 w-4 text-lime-200" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{benefit.title}</p>
                        <p className="text-sm text-white/50">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="#contact"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-lime-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1c1723] transition-colors hover:bg-lime-100"
              >
                Explore Storage Options
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Story — Image dominant, quote floats */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            {/* Large image with purple shadow */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.3)] lg:rounded-3xl">
              <img
                src="/assets/battery/battery-real-world-performance.jpg"
                alt="Residential battery installation beside a modern home patio."
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Floating quote card — minimal, connected */}
            <div className="relative mt-6 rounded-xl bg-white p-6 shadow-xl sm:mt-8 sm:p-8 xl:absolute xl:bottom-10 xl:right-10 xl:mt-0 xl:max-w-md xl:rounded-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-600">Real-World Performance</p>
              <blockquote className="mb-4 text-lg leading-relaxed text-stone-700">
                "We rely on stored solar energy through the night, and the system is typically recharged by midday - even during overcast days."
              </blockquote>
              <p className="text-sm font-medium text-stone-900">- Shanta M., Solarfig customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solarfig — Asymmetric, image heavy */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
            {/* Text — compact, left aligned */}
            <div className="flex flex-col justify-center lg:pr-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Our Approach</p>
              <h2 className="mb-4  text-3xl text-stone-900 sm:text-4xl">Designed for Long-Term Performance</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                From system design through installation and ongoing support, we prioritize precision, durability, and clear communication.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-purple-700 hover:text-purple-900"
              >
                About Solarfig
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Image — large with purple glow */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-purple-600/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_-20px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/battery/battery-designed-for-long-term-performance.webp"
                  alt="Outdoor home battery setup built for long-term reliability."
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Solar — Image primary, text compact beside */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Large image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-25px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/battery/battery-add-storage-on-your-timeline.jpg"
                  alt="Home battery added alongside an existing solar-equipped property."
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact text */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">System Expansion</p>
              <h2 className="mb-4  text-3xl text-stone-900 sm:text-4xl">Add storage on your timeline</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                If you already have solar, energy storage can often be integrated with minimal disruption. We evaluate compatibility and design a seamless expansion.
              </p>
              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:bg-stone-100"
              >
                Explore Energy Storage
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — unchanged */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-8">
          <h2 className="mb-8  text-4xl text-stone-900">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="rounded-2xl border border-stone-200 bg-white px-6">
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`} className="border-stone-200">
                <AccordionTrigger className="py-5 text-base font-semibold text-stone-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-stone-600">{item.answer}</AccordionContent>
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

export default Battery;
