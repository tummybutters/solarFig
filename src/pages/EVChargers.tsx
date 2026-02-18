import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CarFront, Clock, Home, Leaf, ShieldCheck } from "lucide-react";

const chargerFeatures = [
  {
    title: "Level 2 Speed",
    description: "25-35 miles per hour",
    image: "/assets/ev-chargers/ev-charger-zaptec-2n7u.jpg",
  },
  {
    title: "Solar Integrated",
    description: "Charge from your panels",
    image: "/assets/ev-chargers/ev-charger-zaptec-hkd.jpg",
  },
  {
    title: "Universal Fit",
    description: "Works with all EV brands",
    image: "/assets/ev-chargers/ev-charger-zaptec-2jrn.jpg",
  },
];

const benefits = [
  { title: "Overnight Ready", description: "Full charge by morning", icon: Clock },
  { title: "Solar Sync", description: "Charges from clean energy", icon: Leaf },
  { title: "Any EV Works", description: "Tesla, BMW, Ford & more", icon: CarFront },
  { title: "Weatherproof", description: "All-season outdoor rated", icon: Home },
  { title: "25yr Warranty", description: "Long-term peace of mind", icon: ShieldCheck },
];

const faqs = [
  {
    question: "How long does it take to charge an EV at home?",
    answer: "Charging time depends on your vehicle battery size and charger level. A standard Level 2 home charger typically adds around 20 to 35 miles of range per hour, which is enough for most overnight charging needs.",
  },
  {
    question: "What are the benefits of having a home EV charging station?",
    answer: "Home charging gives you daily convenience, lower operating costs, and better control over when your car charges. It can also pair with solar production so more of your driving is powered by clean energy.",
  },
  {
    question: "Do I need a special electrical outlet for a home EV charger?",
    answer: "Many Level 2 chargers are hardwired for the best performance, while some can use a dedicated 240V outlet. We evaluate your panel and wiring to recommend the safest, most efficient setup for your home.",
  },
  {
    question: "What is the difference between Level 1 and Level 2 EV charging?",
    answer: "Level 1 uses a standard 120V outlet and charges slowly. Level 2 uses 240V power and delivers much faster charging, making it the preferred option for everyday home use.",
  },
  {
    question: "Are there any incentives or rebates available for home EV chargers?",
    answer: "Depending on your location and utility provider, rebates or tax incentives may be available for eligible charger installations. Our team helps identify programs you may qualify for during your quote process.",
  },
];

const EVChargers = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="bg-[linear-gradient(130deg,#17131d_0%,#241a33_55%,#321f4b_100%)] pb-14 pt-32 text-white sm:pt-36">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
            Home / Solar Energy Solutions / EV Chargers
          </p>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <CarFront className="h-4 w-4 text-purple-300" />
            EV Chargers
          </div>
          <h1 className="max-w-5xl font-serif text-4xl leading-[0.95] text-white sm:text-6xl">
            Smarter energy begins with home EV chargers
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/82">
            Solarfig installs seamless, effective home EV chargers for homeowners across California.
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#201b29] transition-colors hover:bg-gray-200"
          >
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Hero Image — unchanged */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative h-[62vh] min-h-[480px] w-full sm:h-[72vh]">
          <img
            src="/assets/ev-chargers/ev-home-01.png"
            alt="Scenic residential home exterior at dusk with lighting and EV-ready driveway."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17141b]/62 via-[#17141b]/24 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-[1200px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-2xl rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-[2px]">
              <p className="text-lg leading-relaxed text-white/90">
                Charge at home on your schedule with a clean installation that integrates smoothly with your solar system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features — Three tall image cards with purple shadow */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Home Charging</p>
            <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">Charge faster, smarter, cleaner</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {chargerFeatures.map((feature, i) => (
              <div key={feature.title} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(109,57,181,0.35)] transition-shadow duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(109,57,181,0.5)]">
                  <img
                    src={feature.image}
                    alt={feature.title}
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
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Large image with purple glow */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-20px_rgba(109,57,181,0.4)]">
                <img
                  src="/assets/ev-chargers/ev-charger-chuttersnap.jpg"
                  alt="Home EV charging installation"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact text content */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Why home charging</p>
              <h2 className="mb-8 font-serif text-3xl leading-tight sm:text-4xl">Power your drive</h2>

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
                href="/#contact"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-lime-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1c1723] transition-colors hover:bg-lime-100"
              >
                Get a quote
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
                src="/assets/ev-chargers/ev-charger-zaptec-2n7u.jpg"
                alt="EV charger installed at residential home"
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Floating quote card */}
            <div className="relative mx-4 -mt-20 rounded-xl bg-white p-6 shadow-xl sm:mx-8 sm:p-8 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:max-w-md lg:rounded-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-600">Customer Story</p>
              <blockquote className="mb-4 text-lg leading-relaxed text-stone-700">
                "They made the whole process incredibly smooth. The install team was professional, and it's such a good feeling knowing I'm charging my car with power from my roof."
              </blockquote>
              <p className="text-sm font-medium text-stone-900">— Tesla Owner, Orange County</p>
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
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Solar + EV</p>
              <h2 className="mb-4 font-serif text-3xl text-stone-900 sm:text-4xl">Charge from the sun</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                Pair your EV charger with solar panels and drive on 100% clean energy. We design integrated systems that maximize your solar production.
              </p>
              <a
                href="/#explore"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-purple-700 hover:text-purple-900"
              >
                See solar integration
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Image — large with purple glow */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-purple-600/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_-20px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/ev-chargers/ev-charger-zaptec-2jrn.jpg"
                  alt="EV charger with solar integration"
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
                  src="/assets/ev-chargers/ev-charger-zaptec-hkd.jpg"
                  alt="Professional EV charger installation"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact text */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Installation</p>
              <h2 className="mb-4 font-serif text-3xl text-stone-900 sm:text-4xl">Clean install, done right</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                Hardwired Level 2 chargers installed by licensed electricians. We handle permits, inspections, and utility coordination.
              </p>
              <div className="mb-6 flex gap-6">
                <div>
                  <p className="text-2xl font-light text-purple-600">240V</p>
                  <p className="text-sm text-stone-500">Level 2 power</p>
                </div>
                <div>
                  <p className="text-2xl font-light text-purple-600">1 day</p>
                  <p className="text-sm text-stone-500">Typical install</p>
                </div>
              </div>
              <a
                href="/#contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:bg-stone-100"
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
        <div className="mx-auto max-w-[1000px] px-6 sm:px-8">
          <h2 className="mb-8 font-serif text-4xl text-stone-900">Frequently Asked Questions</h2>
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
