import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight } from "lucide-react";

const Microinverters = () => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />
      <section className="bg-[linear-gradient(130deg,#17131d_0%,#241a33_55%,#321f4b_100%)] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Solutions</p>
          <h1 className="text-4xl tracking-tight sm:text-6xl">Microinverters</h1>
          <p className="mt-5 max-w-3xl text-white/80">
            Module-level power electronics for design flexibility, panel-level visibility, and resilient performance.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative h-[64vh] min-h-[460px] w-full sm:h-[72vh]">
          <img src="/assets/hero-main/wiseman-mabasa.jpg" alt="Solar workers on rooftop with installed panels." className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17141b]/68 via-[#17141b]/26 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-[1100px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-2xl">
              <p className="text-lg text-white/90">Build smarter panel-level control into your system from day one.</p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16"><div className="mx-auto max-w-[1100px] px-6 sm:px-8 text-gray-700">Dedicated product details page in progress.</div></section>

      <GlobalQuoteSection />

      <Footer />
    </main>
  );
};

export default Microinverters;
