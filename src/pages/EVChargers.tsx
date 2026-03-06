import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useHeroViewportFit } from "@/hooks/use-hero-viewport-fit";
import { ArrowRight, CarFront, Clock, Home, Leaf, ShieldCheck } from "lucide-react";

const chargerFeatures = [
  {
    title: "Level 2 Charging Performance",
    description: "Delivers approximately 25-35 miles of range per hour",
    image: "/assets/ev-chargers/ev-charger-level-2-speed.jpg",
    alt: "Home Level 2 EV charger mounted beside a parked car.",
  },
  {
    title: "Solar-Integrated Charging",
    description: "Charge from excess solar production when available",
    image: "/assets/ev-chargers/ev-charger-solar-integrated.webp",
    alt: "Wall-mounted EV charger connected to a car in a residential garage.",
  },
  {
    title: "Broad Vehicle Compatibility",
    description: "Works with most major EV brands and standard connectors",
    image: "/assets/ev-chargers/ev-charger-universal-fit.webp",
    alt: "Electric car charging at home with a wall-mounted connector.",
  },
];

const benefits = [
  { title: "Overnight Charging Capability", description: "Designed to provide a full charge by morning for most daily use", icon: Clock },
  { title: "Solar-Integrated Operation", description: "Prioritizes clean energy when solar production is available", icon: Leaf },
  { title: "Broad Vehicle Compatibility", description: "Works with most major EV brands and standard connectors", icon: CarFront },
  { title: "Outdoor-Rated Installation", description: "Weather-resistant for garage or exterior mounting", icon: Home },
  { title: "Manufacturer Warranty Coverage", description: "Supported by long-term equipment warranties", icon: ShieldCheck },
];

const faqs = [
  {
    question: "How long does it take to charge an EV at home?",
    answer:
      "With a Level 2 home EV charger, most electric vehicles gain 25-35 miles of range per hour. For many drivers, that means a full charge overnight from the comfort of home.",
  },
  {
    question: "What are the benefits of installing a home EV charging station?",
    answer:
      "A home EV charging station offers faster charging, lower long-term costs, and everyday convenience. Instead of waiting at public chargers, you plug in at home and wake up fully charged.",
  },
  {
    question: "Do I need a special electrical outlet for a home EV charger?",
    answer:
      "Most Level 2 EV chargers require a 240V circuit and professional installation. We evaluate your electrical panel, upgrade if needed, and ensure everything is safely installed.",
  },
  {
    question: "What’s the difference between Level 1 and Level 2 EV charging?",
    answer:
      "Level 1 charging uses a standard 120V outlet and charges slowly. Level 2 charging uses 240V power and delivers significantly faster charging speeds for daily driving needs.",
  },
  {
    question: "Are there incentives or rebates for installing a home EV charger?",
    answer:
      "Yes. Federal tax credits, state programs, and utility rebates may reduce the cost of installing a home EV charger. We help you identify available incentives in your area.",
  },
  {
    question: "Can I charge my EV using solar panels at home?",
    answer:
      "Absolutely. Pairing your EV charger with a solar system allows you to charge your vehicle with clean energy and maximize the value of your home solar investment.",
  },
];

const EVChargers = () => {
  const { heroMediaStyle, heroOverlayStyle } = useHeroViewportFit();

  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative min-h-[420px] w-full" style={heroMediaStyle}>
          <img
            src="/assets/ev-chargers/ev-chargers-hero.jpg"
            alt="Modern home with rooftop solar, battery storage, and an EV parked in the driveway."
            className="h-full w-full scale-[1.12] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/80 via-[#17141b]/46 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-center px-6 sm:px-8" style={heroOverlayStyle}>
            <div className="max-w-4xl text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">EV CHARGERS</p>
              <h1 className="max-w-[980px] text-5xl font-medium leading-[0.98] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[82px]">
                Integrated Home Charging. Designed for Modern Energy.
              </h1>
              <p className="mt-7 max-w-[980px] text-[23px] font-medium leading-[1.34] text-white/82">
                Home EV charging solutions professionally installed for safety, performance, and long-term reliability.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#201b29] transition-colors hover:bg-gray-200"
              >
                GET A QUOTE
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features — Three tall image cards with purple shadow */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">HOME CHARGING</p>
            <h2 className=" text-4xl text-stone-900 sm:text-5xl">Engineered for fast, reliable charging</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {chargerFeatures.map((feature, i) => (
              <div key={feature.title} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(109,57,181,0.35)] transition-shadow duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(109,57,181,0.5)]">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="text-xs font-mono text-purple-400">0{i + 1}</span>
                  <div>
                    <h3 className="font-medium text-stone-900">{feature.title}</h3>
                    <p className="text-sm text-stone-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — Large image left, compact icon list right */}
      <section className="bg-[linear-gradient(145deg,#6d5a96_0%,#836fb0_52%,#9a86c2_100%)] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Large image with purple glow */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-20px_rgba(109,57,181,0.4)]">
                <img
                  src="/assets/ev-chargers/ev-charger-reliable-daily.webp"
                  alt="Close-up of a home EV charging station connected to an electric vehicle."
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact text content */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">CHARGING ADVANTAGES</p>
              <h2 className="mb-8  text-3xl leading-tight sm:text-4xl">Reliable charging, every day</h2>

              <div className="space-y-5">
                {benefits.map((benefit) => {
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
                GET A QUOTE
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Story — Full-bleed image with floating quote */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            {/* Large image with purple shadow */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.3)] lg:rounded-3xl">
              <img
                src="/assets/ev-chargers/ev-charger-customer-experience.webp"
                alt="Family at a suburban home with rooftop solar and an EV in the driveway."
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Floating quote card */}
            <div className="relative mt-6 rounded-xl bg-white p-6 shadow-xl sm:mt-8 sm:p-8 xl:absolute xl:bottom-10 xl:right-10 xl:mt-0 xl:max-w-md xl:rounded-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-600">CUSTOMER EXPERIENCE</p>
              <blockquote className="mb-4 text-lg leading-relaxed text-stone-700">
                "The installation was seamless and professional. Now we’re charging our EV directly from our own roof."
              </blockquote>
              <p className="text-sm font-medium text-stone-900">- Robert D., Tesla owner & Solarfig customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Integration — Asymmetric, image heavy */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
            {/* Text — compact, left aligned */}
            <div className="flex flex-col justify-center lg:pr-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">SOLAR + EV</p>
              <h2 className="mb-4  text-3xl text-stone-900 sm:text-4xl">Drive on sunlight</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                Power your vehicle with the energy your home produces. We design fully integrated solar + EV systems that maximize production and charging efficiency.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-purple-700 hover:text-purple-900"
              >
                POWER YOUR DRIVE
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Image — large with purple glow */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-purple-600/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_-20px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/ev-chargers/ev-charger-drive-on-sunlight.jpg"
                  alt="Electric sedan charging beside a wall-mounted home charger."
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation — Image primary, text compact beside */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Large image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-25px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/ev-chargers/ev-charger-professional-installation.webp"
                  alt="Professionally installed wall-mounted EV charger connected to a parked vehicle."
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact text */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">INSTALLATION</p>
              <h2 className="mb-4  text-3xl text-stone-900 sm:text-4xl">Professionally installed. Seamlessly integrated.</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                Our licensed electricians install hardwired Level 2 chargers with clean routing and code-compliant execution. We manage permits, inspections, and utility coordination from start to finish.
              </p>
              <div className="mb-6 flex gap-6">
                <div>
                  <p className="text-2xl font-light text-purple-600">240V</p>
                  <p className="text-sm text-stone-500">Level 2 Performance</p>
                </div>
                <div>
                  <p className="text-2xl font-light text-purple-600">1-Day Installation</p>
                  <p className="text-sm text-stone-500">Most installs completed in a single visit</p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:bg-stone-100"
              >
                START YOUR HOME CHARGING
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

export default EVChargers;
