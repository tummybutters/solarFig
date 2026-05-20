import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { useStandardPageHeroFit } from "@/hooks/use-hero-viewport-fit";
import { ESTIMATE_LINK_PROPS } from "@/lib/links";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "Personalized review of your energy usage, goals, and home details",
  },
  {
    title: "Design & Proposal",
    description: "Custom system design with transparent pricing and savings breakdown",
  },
  {
    title: "Site Inspection",
    description: "On-site verification to confirm roof, electrical, and layout details",
  },
  {
    title: "Permitting and Engineering",
    description: "We handle plans, permits, and utility coordination for approval",
  },
  {
    title: "Installation",
    description: "Professional install by licensed, vetted partners",
  },
  {
    title: "Inspections",
    description: "Local authority review to ensure compliance and safety",
  },
  {
    title: "Permission to Operate (PTO)",
    description: "Utility approval to activate your system and start producing power",
  },
];

const Installation = () => {
  const { heroMediaStyle, heroOverlayStyle } = useStandardPageHeroFit();

  return (
    <main className="mobile-premium page-installation min-h-screen bg-[#f4eefb]">
      <Navbar />
      <section id="process" className="relative overflow-hidden">
        <div className="mobile-hero-media relative w-full" style={heroMediaStyle}>
          <img src="/assets/installation/installation-header-2026.webp" alt="Solar installation team working on a residential roof." className="h-full w-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/80 via-[#17141b]/46 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-center px-6 sm:px-8" style={heroOverlayStyle}>
            <div className="max-w-4xl text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">OUR PROCESS</p>
              <h1 className="max-w-[980px] text-5xl font-medium leading-[0.98] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[82px]">
                <span className="block lg:whitespace-nowrap">Your Solar Journey,</span>
                <span className="block lg:whitespace-nowrap">Simplified</span>
              </h1>
              <p className="mt-7 max-w-[980px] text-[23px] font-medium leading-[1.34] text-white/82">End-to-end project management from design through activation, backed by vetted installation partners.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-4xl tracking-tight text-[#231f2a] sm:text-5xl">A clear, step-by-step process</h2>
            <p className="mt-4 max-w-3xl text-gray-600">
              Most projects move from consultation to activation in 6-10 weeks, depending on permitting and utility timelines.
            </p>
            <div className="mt-8 space-y-4">
              {steps.map((step, idx) => (
                <div key={step.title} className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6d39b5] text-xs font-semibold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="self-start rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl tracking-tight text-[#231f2a]">What you can expect</h3>
            <ul className="mt-5 space-y-3">
              {[
                "Clear timeline with defined milestones",
                "Licensed, vetted installation partners",
                "Full permit and utility coordination",
                "Dedicated support from consultation to activation",
                "Transparent communication every step of the way",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a {...ESTIMATE_LINK_PROPS} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#6d39b5]">
              Start your project
              <ArrowRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>

      <GlobalQuoteSection />

      <Footer />
    </main>
  );
};

export default Installation;
