import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BadgeCheck, CalendarClock, FileText, Landmark } from "lucide-react";

const incentives = [
  { title: "Federal Tax Credit", value: "30%", description: "IRC 25D credit", icon: FileText },
  { title: "SGIP Rebates", value: "$200-1,000", description: "Per kWh battery storage", icon: Landmark },
  { title: "Net Billing", value: "NBT", description: "California export rules", icon: CalendarClock },
];

const checklist = [
  { title: "Verify territory", description: "Check utility and program status" },
  { title: "Map eligibility", description: "Equipment and documentation paths" },
  { title: "Timeline planning", description: "Permitting and incentive windows" },
  { title: "Clear responsibility", description: "What's handled vs. your part" },
];

const faqs = [
  {
    q: "Do incentives guarantee a lower final system cost?",
    a: "Not automatically. Incentive value depends on eligibility, program funding status, utility territory, tax position, and project timing.",
  },
  {
    q: "Can I claim battery incentives without solar?",
    a: "Some programs allow standalone storage while others do not. Eligibility varies by program rules and should be checked for your exact scenario.",
  },
  {
    q: "What documents are usually required?",
    a: "Typical requirements include signed agreements, installed equipment details, utility account information, and tax forms where applicable.",
  },
  {
    q: "Who gives tax advice?",
    a: "Solarfig can provide program guidance, but tax eligibility and filing treatment should be confirmed with a qualified tax professional.",
  },
];

const SolarBatteryIncentives = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="mobile-hero-media relative h-[52vh] min-h-[340px] w-full">
          <img
            src="/assets/hero-main/seedream-preserve.png"
            alt="Solar installer carrying equipment near rooftop array."
            className="h-full w-full object-cover object-[center_70%] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/78 via-[#17141b]/46 to-[#17141b]/18" />
          <div className="absolute inset-0 mx-auto flex max-w-[1200px] items-end px-6 pb-10 sm:px-8 sm:pb-14">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Plans & Services</p>
              <h1 className="text-4xl tracking-tight sm:text-6xl">Solar & Battery Incentives</h1>
              <p className="mt-5 max-w-3xl text-white/80">
                Incentives can materially improve project economics, but eligibility and timelines vary by utility territory and current program rules.
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

      {/* Incentive Cards — Big numbers, minimal text */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Available Programs</p>
            <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">Incentive snapshot</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {incentives.map((incentive, i) => {
              const Icon = incentive.icon;
              return (
                <div key={incentive.title} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(109,57,181,0.2)] transition-shadow hover:shadow-[0_20px_60px_-15px_rgba(109,57,181,0.35)]">
                  <span className="absolute right-4 top-4 text-xs font-mono text-stone-300">0{i + 1}</span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                    <Icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-4xl font-light text-purple-600">{incentive.value}</p>
                  <p className="mt-1 font-medium text-stone-900">{incentive.title}</p>
                  <p className="text-sm text-stone-500">{incentive.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Planning — Image with floating checklist */}
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            {/* Large image */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.4)] lg:rounded-3xl">
              <img
                src="/assets/install-gallery/install-06.png"
                alt="Solar and battery installation"
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Floating checklist */}
            <div className="relative mx-4 -mt-24 space-y-3 sm:mx-8 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:w-80">
              {checklist.map((item) => (
                <div key={item.title} className="flex items-center gap-4 rounded-xl bg-white/95 p-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <BadgeCheck className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">{item.title}</p>
                    <p className="text-xs text-stone-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 max-w-2xl lg:mt-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Our Process</p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">How we handle incentive planning</h2>
          </div>
        </div>
      </section>

      {/* Policy Note — Split with image */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Important</p>
              <h2 className="mb-4 font-serif text-3xl text-stone-900 sm:text-4xl">Programs change. We stay current.</h2>
              <p className="mb-6 text-stone-600 leading-relaxed">
                Incentives are policy-driven and can shift with legislation, utility filings, and funding exhaustion. We provide guidance using currently published rules, but final tax treatment should always be confirmed with your tax advisor.
              </p>
              <a
                href="/#contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:bg-stone-100"
              >
                Check my eligibility
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_-20px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/battery/battery-tesla-powerwall-3-feature.jpg"
                  alt="Battery installation with incentive eligibility"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
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

export default SolarBatteryIncentives;
