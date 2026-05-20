import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useStandardPageHeroFit } from "@/hooks/use-hero-viewport-fit";
import { ESTIMATE_LINK_PROPS } from "@/lib/links";
import { ArrowRight, Check } from "lucide-react";

const planCards = [
  { id: "ppa", title: "Power Purchase Agreement", subtitle: "25-year lease", price: "$0", unit: "down", bullets: ["Lowest monthly payment", "Immediate utility savings", "Predictable, worry-free terms"] },
  { id: "finance", title: "Finance", subtitle: "Own your system", price: "$0", unit: "down", bullets: ["Build long-term equity", "Fixed monthly payments", "5–25 year loan terms"] },
  { id: "purchase", title: "Outright Purchase", subtitle: "One-time payment", price: "Custom", unit: "quote", bullets: ["Maximum lifetime savings", "No monthly payments", "Eligible for all available incentives"] },
  { id: "prepaid", title: "Prepaid Plan", subtitle: "Hybrid ownership — NEW", price: "30%", unit: "off", bullets: ["Financing + cash options", "Immediate upfront tax credit", "Option to transfer full ownership", "Comprehensive warranty coverage"] },
];

const included = [
  "Ongoing service and support",
  "Real-time system monitoring",
  "Manufacturer-backed warranties",
  "Performance guarantee",
];

const faqs = [
  {
    q: "What warranties apply to my solar equipment?",
    a: "Warranty coverage depends on the panels, inverters, and batteries selected. Most systems include manufacturer-backed equipment warranties and performance guarantees. We review all coverage details during your consultation and before installation.",
  },
  {
    q: "What is the Prepaid solar plan?",
    a: "The prepaid plan places the system under company ownership for the first five years to capture available tax credits. Those savings are passed directly to you. After five years, ownership can transfer to your name — combining upfront savings with long-term control.",
  },
  {
    q: "Can anyone qualify for $0 down solar?",
    a: "Many homeowners qualify for $0 down solar through leases or financing. Approval depends on credit profile, homeownership status, and utility history.",
  },
  {
    q: "What happens if I move?",
    a: "Most solar agreements can be transferred to the new homeowner or paid off before selling. We explain your options clearly before you commit.",
  },
  {
    q: "Are there solar discounts or incentives available?",
    a: "Yes. Federal tax credits, local incentives, and utility rebates may reduce your total system cost. We identify all available programs during your proposal.",
  },
  {
    q: "How much can I save with solar?",
    a: "Savings depend on your energy usage, utility rates, and system size. We provide detailed production modeling and realistic long-term savings projections.",
  },
];

const PricingCosts = () => {
  const { heroMediaStyle, heroOverlayStyle } = useStandardPageHeroFit({ bottomGap: 46 });

  return (
    <main className="mobile-premium page-pricing-costs min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative w-full" style={heroMediaStyle}>
          <img
            src="/assets/pricing-costs/pricing-costs-header-image.webp"
            alt="Modern solar-equipped home at sunset with integrated wall batteries."
            className="h-full w-full object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/80 via-[#17141b]/46 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-center px-6 sm:px-8" style={heroOverlayStyle}>
            <div className="max-w-4xl text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">PRICING &amp; COSTS</p>
              <h1 className="max-w-[980px] text-5xl font-medium leading-[0.98] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[82px]">
                <span className="block lg:whitespace-nowrap">A Solar Plan That</span>
                <span className="block lg:whitespace-nowrap">Fits Your Goals</span>
              </h1>
              <p className="mt-7 max-w-[980px] text-[23px] font-medium leading-[1.34] text-white/82">
                Compare ownership options, understand your savings, and choose what makes sense for your home.
              </p>
              <a
                {...ESTIMATE_LINK_PROPS}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                GET A QUOTE
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards — Large price display */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">SOLAR PLANS</p>
            <h2 className=" text-4xl text-stone-900 sm:text-5xl">Flexible ways to power your home</h2>
            <p className="mt-4 text-stone-600">
              Solar costs depend on your home, energy usage, and goals. Most homeowners qualify for $0 down options. We design around savings first — not sales quotas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {planCards.map((plan, i) => (
              <div
                id={plan.id}
                key={plan.id}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(109,57,181,0.2)] transition-shadow hover:shadow-[0_20px_60px_-15px_rgba(109,57,181,0.35)]"
              >
                <span className="absolute right-4 top-4 text-xs font-mono text-stone-300">0{i + 1}</span>
                <p className="mb-1 text-sm text-stone-500">{plan.subtitle}</p>
                <h3 className=" text-xl text-stone-900">{plan.title}</h3>
                <div className="my-4">
                  <span className="text-4xl font-light text-purple-600">{plan.price}</span>
                  <span className="text-sm text-stone-500"> {plan.unit}</span>
                </div>
                <ul className="space-y-2">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl text-center">
            <p className="text-sm text-stone-600">
              Not sure which option makes sense? We&apos;ll walk you through side-by-side comparisons so you can see the numbers clearly before deciding.
            </p>
            <p className="mt-3 text-[11px] text-stone-600 sm:text-xs">
              Transparent terms. No hidden fees. No surprise escalators. Every Solarfig proposal includes detailed production modeling and real savings projections.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included — Image with floating tags */}
      <section className="bg-[radial-gradient(120%_120%_at_15%_10%,#fbf9ff_0%,#f4eefb_52%,#eee6f9_100%)] py-16 text-[#241d2f] sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_28px_70px_-26px_rgba(65,44,95,0.28)] lg:rounded-3xl">
              <img
                src="/assets/pricing-costs/pricing-costs-designed-to-be-complete.webp"
                alt="Completed residential solar installation representing all-in pricing."
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[550px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#130c22]/38 via-[#130c22]/8 to-transparent" />
            </div>

            {/* Floating included tags */}
            <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:absolute lg:bottom-8 lg:right-8 lg:mt-0 lg:flex">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-white bg-white px-4 py-3 shadow-[0_18px_30px_-22px_rgba(43,29,67,0.36)]"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="text-[13px] font-semibold leading-4 text-[#2f2440]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#695783]">EVERYTHING INCLUDED</p>
            <h2 className=" text-3xl leading-tight text-[#241d2f] sm:text-4xl">Designed to be complete</h2>
            <p className="mt-4 text-[#514469]">
              Premium equipment, licensed installation, real monitoring, and manufacturer-backed warranties — structured clearly from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Fair Pricing — Split layout */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">OUR APPROACH</p>
              <h2 className="mb-4  text-3xl text-stone-900 sm:text-4xl">Fair pricing, long-term thinking</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                We&apos;re not here for the quickest sale. We&apos;re here to do it right — and stand behind it for decades. Every project is structured for lasting savings and real accountability.
              </p>
              <div className="space-y-3">
                {["No pressure consultations", "Clear, straightforward quotes", "Decades of experience"].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-purple-600" />
                    <span className="text-stone-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_25px_70px_-20px_rgba(109,57,181,0.3)]">
                <p className="mb-4 text-sm text-stone-500">Verified Customer</p>
                <blockquote className="mb-4 text-lg leading-relaxed text-stone-700">
                  "[Solarfig] was extremely informative and helpful. They reviewed leasing and financing options with me, and helped me choose the best fit for my situation."
                </blockquote>
                <p className="font-medium text-stone-900">— Alex L.</p>
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

export default PricingCosts;
