import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";

const planCards = [
  { id: "ez-plan", title: "EZ Plan", subtitle: "25-year lease", price: "$0", unit: "down", bullets: ["Lowest monthly cost", "Immediate savings", "Predictable payments"] },
  { id: "finance", title: "Finance", subtitle: "Own your system", price: "$0", unit: "down", bullets: ["Build equity", "Fixed payments", "5-25 year terms"] },
  { id: "purchase", title: "Purchase", subtitle: "Full ownership", price: "Custom", unit: "quote", bullets: ["Maximum savings", "No monthly payments", "All incentives"] },
  { id: "prepaid", title: "Prepaid", subtitle: "One-time payment", price: "25%", unit: "off", bullets: ["Zero monthly payments", "Upfront tax credit", "Full warranty"] },
];

const included = [
  "Care & maintenance",
  "Energy monitoring",
  "25-year system warranty",
  "Performance guarantee",
];

const faqs = [
  "What is covered under your 25 year system warranty?",
  "What is the No Credit Check option?",
  "Can anyone get a Solarfig system for $0 down?",
  "What happens if I move?",
  "Are there any discounts available?",
  "How much can I save with solar?",
];

const PricingCosts = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="relative pt-24 sm:pt-28">
        <div className="mobile-hero-media relative h-[64vh] min-h-[420px] w-full">
          <img
            src="/assets/hero-main/giorgio-trovato.jpg"
            alt="Coastal home with rooftop solar panels at sunset."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/70 via-[#17141b]/45 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Plans & Services</p>
              <h1 className="text-4xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">Solar Pricing & Costs</h1>
              <p className="mt-5 max-w-2xl text-lg text-white/80">
                Ready to break up with your electric bill? Enjoy custom solar and instant savings for as little as $0 down.
              </p>
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

      {/* Pricing Cards — Large price display */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Payment Options</p>
            <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">Four ways to go solar</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {planCards.map((plan, i) => (
              <div key={plan.id} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(109,57,181,0.2)] transition-shadow hover:shadow-[0_20px_60px_-15px_rgba(109,57,181,0.35)]">
                <span className="absolute right-4 top-4 text-xs font-mono text-stone-300">0{i + 1}</span>
                <p className="mb-1 text-sm text-stone-500">{plan.subtitle}</p>
                <h3 className="font-serif text-xl text-stone-900">{plan.title}</h3>
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
        </div>
      </section>

      {/* What's Included — Image with floating tags */}
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.4)] lg:rounded-3xl">
              <img
                src="/assets/pricing-costs/hero-solar-roof-sunset.png"
                alt="Solar installation at sunset"
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[550px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Floating included tags */}
            <div className="relative mx-4 -mt-20 grid grid-cols-2 gap-3 sm:mx-8 sm:mt-0 sm:flex sm:gap-4 lg:absolute lg:bottom-8 lg:right-8">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg bg-white/95 px-4 py-3 backdrop-blur-sm">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-stone-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Transparency</p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Everything included</h2>
            <p className="mt-4 text-white/60">
              No surprises. We take the time to understand your home and give you a transparent, upfront quote with no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Fair Pricing — Split layout */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Our Approach</p>
              <h2 className="mb-4 font-serif text-3xl text-stone-900 sm:text-4xl">Fair pricing, long-term thinking</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                We're not here for the quickest sale. We're here to do it right, and stand behind it for decades. That means pricing designed for 5-10% profit and long-term service.
              </p>
              <div className="space-y-3">
                {["No pushy sales tactics", "Clear, straightforward quotes", "Decade of experience"].map((point) => (
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
                <p className="mb-4 text-sm text-stone-500">Customer Review</p>
                <blockquote className="mb-4 text-lg leading-relaxed text-stone-700">
                  "[Solarfig] was extremely informative and helpful. They reviewed leasing and financing options with me, and helped me choose the best fit for my situation."
                </blockquote>
                <p className="font-medium text-stone-900">— Charles</p>
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
              <AccordionItem key={faq} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg text-[#231f2a]">{faq}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  Our team will review this in your custom proposal based on your utility, roof, and equipment design.
                </AccordionContent>
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
