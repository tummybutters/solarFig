import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";

const SolarBatteryIncentives = () => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="relative h-[52vh] min-h-[340px] w-full">
          <img src="/assets/hero-main/seedream-preserve.png" alt="Solar installer carrying equipment near rooftop array." className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/78 via-[#17141b]/46 to-[#17141b]/18" />
          <div className="absolute inset-0 mx-auto flex max-w-[1100px] items-end px-6 pb-10 sm:px-8 sm:pb-14">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Plans & Services</p>
              <h1 className="text-4xl tracking-tight sm:text-6xl">Solar & Battery Incentives</h1>
              <p className="mt-5 max-w-3xl text-white/80">Federal and California incentive pathways that can materially reduce upfront system cost.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16"><div className="mx-auto max-w-[1100px] px-6 sm:px-8 text-gray-700">Dedicated incentives details page in progress.</div></section>

      <GlobalQuoteSection />

      <Footer />
    </main>
  );
};

export default SolarBatteryIncentives;
