import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import CaliforniaMap from "@/components/CaliforniaMap";

interface LocationsProps {
  territory?: "sce" | "pge" | "sdge";
}

const territoryLabel: Record<string, string> = {
  sce: "SCE Territory",
  pge: "PG&E Territory",
  sdge: "SDG&E Territory",
};

const Locations = ({ territory }: LocationsProps) => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="relative h-[48vh] min-h-[320px] w-full">
          <img src="/assets/hero-main/wiseman-mabasa.jpg" alt="California solar rooftops at sunset." className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/78 via-[#17141b]/44 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1200px] items-end px-6 pb-10 sm:px-8 sm:pb-14">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Locations</p>
              <h1 className="text-4xl tracking-tight sm:text-6xl">{territory ? territoryLabel[territory] : "California Service Area"}</h1>
              <p className="mt-5 max-w-3xl text-white/80">Coverage across California with utility-aware planning for SCE, PG&E, and SDG&E territories.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <CaliforniaMap />
        </div>
      </section>

      <GlobalQuoteSection />

      <Footer />
    </main>
  );
};

export default Locations;
