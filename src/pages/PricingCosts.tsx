import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";

const planCards = [
  {
    id: "ez-plan",
    title: "EZ Plan",
    subtitle: "25-year lease or PPA subscription plan with no upfront payment.",
    bullets: ["Lowest cost, immediate savings", "No upfront payment", "Predictable monthly payments"],
  },
  {
    id: "finance-to-own",
    title: "Finance-to-own",
    subtitle: "Flexible terms and comprehensive warranty coverage.",
    bullets: ["Own your system with no upfront cost", "Fixed payments", "5-25 year terms"],
  },
  {
    id: "direct-purchase",
    title: "Direct Purchase",
    subtitle: "Perfect for those seeking a fully warrantied, independent system.",
    bullets: ["Own your system from day one", "Zero monthly payments or terms", "Full system cost due upfront"],
  },
  {
    id: "prepaid-solar",
    title: "Prepaid Solar Service",
    subtitle: "Immediately apply incentives to your upfront payment.",
    bullets: ["Zero monthly payments", "Federal tax credit discount applied upfront", "Comprehensive warranty coverage"],
  },
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
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />

      <section className="relative pt-24 sm:pt-28">
        <div className="relative h-[64vh] min-h-[420px] w-full">
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <h2 className="text-4xl leading-tight tracking-tight text-[#231f2a] sm:text-5xl">Affordable solar panels, meet lower energy bills.</h2>
          <p className="mt-5 max-w-4xl text-lg text-gray-600">
            Lease, finance, or purchase. Your solar system, your choice. Choose the payment option that works for your budget and
            start saving sooner.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {planCards.map((plan) => (
              <article id={plan.id} key={plan.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-2xl tracking-tight text-[#231f2a]">{plan.title}</h3>
                <p className="mt-3 min-h-14 text-sm leading-relaxed text-gray-600">{plan.subtitle}</p>
                <ul className="mt-5 space-y-3">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a href="/#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#6d39b5]">
                  Get a quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="incentives-rebates" className="pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
          <article>
            <p className="mb-3 text-sm text-gray-600">Why Solarfig?</p>
            <h2 className="text-4xl leading-tight tracking-tight text-[#231f2a] sm:text-5xl">
              Everything Included. Including Fair Pricing.
            </h2>
            <p className="mt-5 text-gray-600">
              We believe your home energy system should come with clear answers and no surprises. That includes pricing. We build
              solutions designed to last, and we price them to support quality work and long-term service.
            </p>
            <p className="mt-4 text-gray-600">
              System costs vary based on your home, equipment, permitting, roofing, and local labor. Some homes may also need
              electrical upgrades or utility approvals that affect price. We take the time to understand your home and give you a
              transparent, upfront quote with no pressure.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Pricing designed for 5-10% profit and long-term service",
                "No pushy sales tactics, just helpful and honest conversations",
                "A decade of experience and a reputation we're proud to protect",
                "Clear, straightforward quotes, even if we're not the lowest",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#6d39b5]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700">
              We're not here for the quickest sale. We're here to do it right, and stand behind it for decades.
            </p>
            <p className="mt-3 text-sm font-medium text-gray-800">- Solarfig Leadership Team</p>
          </article>

          <figure>
            <img
              src="/assets/pricing-costs/hero-solar-roof-sunset.png"
              alt="Solar installation professionals standing beside a residential project at sunset."
              className="h-[440px] w-full rounded-3xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <h2 className="text-4xl leading-tight tracking-tight text-[#231f2a] sm:text-5xl">Solar System Pricing</h2>
          <p className="mt-4 max-w-4xl text-gray-600">
            We're making solar accessible to homeowners with multiple financing plans designed to fit your budget.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Lease</th>
                  <th className="px-4 py-3 font-semibold">Finance-to-own</th>
                  <th className="px-4 py-3 font-semibold">Purchase outright</th>
                  <th className="px-4 py-3 font-semibold">Prepaid Solar Service</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cost: Upfront payment", "$0 down*", "$0 down*", "Full system cost", "25-35% discount upfront"],
                  ["Ownership", "Solar company", "You", "You", "Option to exercise"],
                  ["Monthly payments", "Low lease payments", "Fixed", "None", "None"],
                  ["Payment terms", "Monthly payments", "5-25 years", "None", "n/a"],
                ].map((row, rowIndex) => (
                  <tr key={`pricing-row-${rowIndex}`} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 py-3 text-gray-600">{row[2]}</td>
                    <td className="px-4 py-3 text-gray-600">{row[3]}</td>
                    <td className="px-4 py-3 text-gray-600">{row[4]}</td>
                  </tr>
                ))}
                {["Care & maintenance", "Energy monitoring", "25 year system warranty"].map((benefit, benefitIndex) => (
                  <tr key={`benefit-row-${benefitIndex}`} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{benefit}</td>
                    {[0, 1, 2, 3].map((col) => (
                      <td key={`${benefit}-${col}`} className="px-4 py-3 text-gray-600">
                        <Check className="h-4 w-4 text-emerald-600" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-gray-500">
            *$0-down options are subject to credit approval. We make no guarantees that someone will qualify for a zero down
            option. A potential borrower must undergo a credit check to determine what options are available.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <article className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-sm text-gray-500">Super company</p>
            <blockquote className="mt-4 text-lg leading-relaxed text-gray-700">
              [Solarfig] was extremely informative and helpful. They reviewed leasing and financing options with me, and helped me
              choose the best fit for my situation. I can't wait to see my savings roll in.
            </blockquote>
            <p className="mt-5 text-sm font-medium text-gray-800">- Charles</p>
          </article>

          <article>
            <p className="mb-3 text-sm text-gray-600">Incentives & Rebates</p>
            <h2 className="text-4xl leading-tight tracking-tight text-[#231f2a]">Federal and state incentives can supercharge savings</h2>
            <p className="mt-5 text-gray-600">
              Incentives and rebates can significantly lower your system cost. From tax credits to cash rebates, our team helps
              you identify the programs available in your area.
            </p>
            <a href="/#service-area" className="mt-7 inline-flex items-center gap-2 text-base font-semibold text-[#6d39b5]">
              Find your area
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[980px] px-6 sm:px-8">
          <h2 className="text-4xl leading-tight tracking-tight text-[#231f2a] sm:text-5xl">Frequently Asked Questions</h2>
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
