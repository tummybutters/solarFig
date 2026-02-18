import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Battery as BatteryIcon, CloudLightning, DollarSign, Gauge, HousePlug, ShieldCheck } from "lucide-react";

const controlModes = [
  {
    title: "Storm Watch Mode",
    description: "Auto-charges before outages",
    image: "/assets/battery/battery-span-tesla-pw3.jpg",
  },
  {
    title: "Self-Powered Mode",
    description: "Store daytime excess for night",
    image: "/assets/battery/battery-tesla-powerwall-3-feature.jpg",
  },
  {
    title: "Time-Based Control",
    description: "Charge low, discharge peak",
    image: "/assets/whole-home-solar/battery-backup.webp",
  },
];

const batteryBenefits = [
  { title: "$0 Down", description: "Budget friendly add-on", icon: DollarSign },
  { title: "Backup Ready", description: "Lights stay on", icon: CloudLightning },
  { title: "Peak Savings", description: "Reduce time-of-use costs", icon: Gauge },
  { title: "Grid Control", description: "Manage your usage", icon: HousePlug },
  { title: "Tax Credits", description: "Federal & local incentives", icon: ShieldCheck },
];

const faqs = [
  {
    question: "Can a home battery replace a generator during power loss?",
    answer: "For most homes, battery backup can cover essential loads and often much more. Your exact backup duration depends on battery size, home load profile, and solar production.",
  },
  {
    question: "Do Solarfig's energy storage solutions contain lithium-ion batteries?",
    answer: "Yes. We install modern lithium-ion battery systems from trusted manufacturers designed for residential safety, efficiency, and long-term performance.",
  },
  {
    question: "Can I get a home battery if I already have a Solarfig system?",
    answer: "Yes. Existing Solarfig customers can typically add battery storage to their current system after a compatibility check.",
  },
  {
    question: "Can I go completely off-grid with a home battery?",
    answer: "Some homes can significantly reduce grid usage, but full off-grid operation depends on your annual consumption, battery capacity, and solar production across seasons.",
  },
  {
    question: "How long does it take to install a new home battery?",
    answer: "Most installs are completed in one day once design, permitting, and utility coordination are finished.",
  },
  {
    question: "How much battery storage does my home need?",
    answer: "That depends on your outage priorities, panel size, time-of-use rates, and daily consumption. We size your system around your goals and load profile.",
  },
];

const Battery = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="bg-[linear-gradient(130deg,#17131d_0%,#241a33_55%,#321f4b_100%)] pb-14 pt-32 text-white sm:pt-36">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <BatteryIcon className="h-4 w-4 text-purple-300" />
            Battery Backup
          </div>
          <h1 className="max-w-5xl font-serif text-4xl leading-[0.95] text-white sm:text-6xl">
            Store excess solar power with battery backup
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/82">
            Home batteries store excess solar energy, protect you from outages, and make a whole-home system that much
            smarter. Take control of your home&apos;s electric usage by reducing reliance on the grid with battery storage.
          </p>
          <p className="mt-6 text-2xl font-semibold text-white">
            Add a Powerwall to your existing solar panel system for as little as $5,275*
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#201b29] transition-colors hover:bg-gray-200"
          >
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-white/60">
            *After discount and upfront local incentives applied, subject to incentive availability in your area.
          </p>
        </div>
      </section>

      {/* Hero Image — unchanged */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative h-[62vh] min-h-[480px] w-full sm:h-[72vh]">
          <img
            src="/assets/whole-home-solar/battery-backup.webp"
            alt="Modern home with rooftop solar and integrated battery backup at dusk."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17141b]/65 via-[#17141b]/28 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-[1200px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-2xl rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-[2px]">
              <p className="text-lg leading-relaxed text-white/90">
                Backup-ready home energy that keeps your essentials running while helping you use more of your own solar
                power day and night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky bar — unchanged */}
      <section className="border-y border-stone-200 bg-white py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 px-6 text-center sm:px-8 lg:flex-row lg:text-left">
          <p className="max-w-4xl text-xl text-stone-700">
            Battery backup puts you in charge of when and how you use power in your own home.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:bg-stone-100"
          >
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Control Modes — Images dominant, minimal text badges below */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Solar Energy Storage</p>
            <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">Three ways your battery adapts</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {controlModes.map((mode, i) => (
              <div key={mode.title} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(109,57,181,0.35)] transition-shadow duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(109,57,181,0.5)]">
                  <img
                    src={mode.image}
                    alt={mode.title}
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
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Large image with purple glow */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_80px_-20px_rgba(109,57,181,0.4)]">
                <img
                  src="/assets/battery/battery-dcbel-wall-unit.jpg"
                  alt="Home battery installation"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact text content */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Why add storage</p>
              <h2 className="mb-8 font-serif text-3xl leading-tight sm:text-4xl">A smart addition to solar</h2>

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

      {/* Customer Story — Image dominant, quote floats */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            {/* Large image with purple shadow */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.3)] lg:rounded-3xl">
              <img
                src="/assets/battery/battery-span-tesla-pw3.jpg"
                alt="Tesla Powerwall installation"
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Floating quote card — minimal, connected */}
            <div className="relative mx-4 -mt-20 rounded-xl bg-white p-6 shadow-xl sm:mx-8 sm:p-8 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:max-w-md lg:rounded-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-600">Customer Story</p>
              <blockquote className="mb-4 text-lg leading-relaxed text-stone-700">
                "The battery runs the house all night, then recharges to full capacity usually by noon. Even on overcast days."
              </blockquote>
              <p className="text-sm font-medium text-stone-900">— Ronda, Solarfig customer</p>
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
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Why Solarfig</p>
              <h2 className="mb-4 font-serif text-3xl text-stone-900 sm:text-4xl">Built for the long term</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                From design through installation and beyond, we prioritize quality work and clear communication.
              </p>
              <a
                href="/#explore"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-purple-700 hover:text-purple-900"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Image — large with purple glow */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-purple-600/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_-20px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/battery/battery-dcbel-wall-unit.jpg"
                  alt="Battery installation"
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
                  src="/assets/battery/battery-tesla-powerwall-3-feature.jpg"
                  alt="Tesla Powerwall for existing solar"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Compact text */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Existing Solar</p>
              <h2 className="mb-4 font-serif text-3xl text-stone-900 sm:text-4xl">Add storage anytime</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                Already have solar? Adding a battery is straightforward. We handle compatibility checks and seamless integration.
              </p>
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

export default Battery;
