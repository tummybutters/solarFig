import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Battery as BatteryIcon, CloudLightning, DollarSign, Gauge, HousePlug, ShieldCheck } from "lucide-react";

const controlModes = [
  {
    title: "Storm Watch Mode",
    description:
      "When extreme weather is in the forecast, your battery will fully charge in preparation for a power outage to ensure your home stays powered.",
  },
  {
    title: "Self-Powered Mode",
    description:
      "Prioritizes storing excess solar energy generated during the day, which is then used to power your home at night or when solar isn’t producing.",
  },
  {
    title: "Time-Based Control",
    description:
      "Charges when electricity costs are low, or when solar production is high, and discharges during high-cost periods to help you increase savings.",
  },
];

const batteryBenefits = [
  {
    title: "Budget Friendly",
    description: "Add battery backup for $0 down.",
    icon: DollarSign,
  },
  {
    title: "Backup Power",
    description: "Keep your lights on during outages.",
    icon: CloudLightning,
  },
  {
    title: "Energy Savings",
    description: "Reduce peak-time energy costs.",
    icon: Gauge,
  },
  {
    title: "Greater Control",
    description: "Manage usage and reduce reliance on the grid.",
    icon: HousePlug,
  },
  {
    title: "Big Incentives",
    description: "Federal, local, and utility battery incentives may apply.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "Can a home battery replace a generator during power loss?",
    answer:
      "For most homes, battery backup can cover essential loads and often much more. Your exact backup duration depends on battery size, home load profile, and solar production.",
  },
  {
    question: "Do Solarfig’s energy storage solutions contain lithium-ion batteries?",
    answer:
      "Yes. We install modern lithium-ion battery systems from trusted manufacturers designed for residential safety, efficiency, and long-term performance.",
  },
  {
    question: "Can I get a home battery if I already have a Solarfig system?",
    answer:
      "Yes. Existing Solarfig customers can typically add battery storage to their current system after a compatibility check.",
  },
  {
    question: "Can I go completely off-grid with a home battery?",
    answer:
      "Some homes can significantly reduce grid usage, but full off-grid operation depends on your annual consumption, battery capacity, and solar production across seasons.",
  },
  {
    question: "How long does it take to install a new home battery?",
    answer:
      "Most installs are completed in one day once design, permitting, and utility coordination are finished.",
  },
  {
    question: "How much battery storage does my home need?",
    answer:
      "That depends on your outage priorities, panel size, time-of-use rates, and daily consumption. We size your system around your goals and load profile.",
  },
];

const Battery = () => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />

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

      <section className="relative overflow-hidden">
        <div className="relative h-[62vh] min-h-[480px] w-full sm:h-[72vh]">
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Solar Energy Storage</p>
            <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">How your home battery adapts to you</h2>
            <p className="mt-4 max-w-4xl text-stone-600">
              Choose which settings and programs you enroll your battery in for your needs to give you the most control and
              confidence. Our experts help configure your system to suit your lifestyle.
            </p>
          </div>

          <div className="mb-10 grid gap-6 lg:grid-cols-3">
            {controlModes.map((mode) => (
              <article key={mode.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-stone-900">{mode.title}</h3>
                <p className="text-sm leading-relaxed text-stone-600">{mode.description}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <img
                src="/assets/install-gallery/install-06.png"
                alt="Minimalist garage with a black wall and white cabinets on the left. A small white powerbox is mounted on the wall."
                className="h-[320px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <img
                src="/assets/install-gallery/install-08.jpg"
                alt="A modern, single-story house with solar panels on the roof and a glass garage door. A family of four stands near a parked blue car on the driveway."
                className="h-[320px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[#111015] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Solar energy storage</p>
            <h2 className="mb-8 font-serif text-4xl leading-tight sm:text-5xl">A smart addition to solar power</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {batteryBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.title} className="rounded-xl border border-white/12 bg-white/[0.03] p-5">
                    <Icon className="mb-3 h-5 w-5 text-lime-200" />
                    <h3 className="mb-1 font-semibold text-white">{benefit.title}</h3>
                    <p className="text-sm text-white/70">{benefit.description}</p>
                  </article>
                );
              })}
            </div>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1c1723] transition-colors hover:bg-lime-100"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-white/15 bg-black/25">
            <img
              src="/assets/install-gallery/install-02.jpg"
              alt="A red electric car is parked in a driveway, charging at a home with solar panels and battery backups, including Tesla Powerwall batteries mounted on the wall."
              className="h-[520px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <img
              src="/assets/install-gallery/install-04.jpg"
              alt="Tesla Powerwall batteries mounted in a clean garage setup."
              className="h-[420px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <article className="rounded-2xl border border-stone-200 bg-white p-7 sm:p-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Customer Story</p>
            <h3 className="mb-5 font-serif text-4xl leading-tight text-stone-900">System is working GREAT!!!</h3>
            <blockquote className="mb-5 text-stone-700">
              “Waited a while to see how everything worked before doing this review. I am especially pleased with the Tesla
              Powerwall. The battery runs the house all night, then recharges to full capacity usually by noon. Even on
              overcast days, it charges up nicely. I have been totally self-sufficient from the day it was installed.”
            </blockquote>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Ronda</p>
          </article>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 sm:px-8 lg:grid-cols-[1.05fr_minmax(0,1fr)]">
          <article className="rounded-2xl border border-stone-200 p-7 sm:p-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Why Solarfig?</p>
            <h2 className="mb-4 font-serif text-4xl text-stone-900">You deserve full control</h2>
            <p className="text-stone-600">
              From flawless design and installation to transparent pricing and responsive support, we’re committed to
              maximizing your savings and ensuring your complete satisfaction.
            </p>
            <a
              href="/#explore"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 hover:text-stone-900"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <figure className="overflow-hidden rounded-2xl border border-stone-200">
            <img
              src="/assets/Solar installers at sunset.png"
              alt="The exterior of a home with bright lights shining, creating a welcoming atmosphere."
              className="h-full min-h-[320px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_460px]">
          <article className="rounded-2xl border border-stone-200 bg-white p-7 sm:p-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Existing Solar Customers</p>
            <h2 className="mb-4 font-serif text-4xl text-stone-900">
              Already have a solar system installed? You qualify for energy storage.
            </h2>
            <p className="mb-6 text-stone-600">
              If you’ve already installed a solar system, you’re eligible for powerful storage options. Store the energy you
              generate, stay powered through outages, and get more from your solar investment.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:bg-stone-100"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
          <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <img
              src="/assets/install-gallery/install-05.jpg"
              alt="A wooden exterior wall with battery units attached."
              className="h-[360px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

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
