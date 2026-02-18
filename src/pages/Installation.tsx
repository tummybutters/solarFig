import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  "Consultation",
  "Design & Review Proposal",
  "Site Inspection",
  "Permitting and Engineering",
  "Installation",
  "Inspections",
  "Permission to Operate (PTO)",
];

const Installation = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="mobile-hero-media relative h-[52vh] min-h-[340px] w-full">
          <img src="/assets/hero-main/gary-cole.jpg" alt="Solar installation team working on a residential roof." className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/78 via-[#17141b]/46 to-[#17141b]/18" />
          <div className="absolute inset-0 mx-auto flex max-w-[1200px] items-end px-6 pb-10 sm:px-8 sm:pb-14">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Plans & Services</p>
              <h1 className="text-4xl tracking-tight sm:text-6xl">Installation</h1>
              <p className="mt-5 max-w-3xl text-white/80">Professional, streamlined project delivery from consultation through PTO, with vetted installation partners across California.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-3xl tracking-tight text-[#231f2a] sm:text-4xl">How the process works</h2>
            <div className="mt-8 space-y-4">
              {steps.map((step, idx) => (
                <div key={step} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                  <div className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6d39b5] text-xs font-semibold text-white">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl tracking-tight text-[#231f2a]">What you can expect</h3>
            <ul className="mt-5 space-y-3">
              {[
                "Clear timeline and milestones",
                "Vetted, qualified installation partners",
                "Permit and utility coordination support",
                "Transparent updates from kickoff to PTO",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="/#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#6d39b5]">
              Get a quote
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
