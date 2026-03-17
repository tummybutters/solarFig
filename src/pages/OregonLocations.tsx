import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import OregonMap from "@/components/OregonMap";
import { useStandardPageHeroFit } from "@/hooks/use-hero-viewport-fit";
import { ArrowRight, BadgeAlert, Home, PlugZap, ShieldCheck, SunMedium } from "lucide-react";

const regions = [
  { name: "Year-Round Performance", focus: "Balanced for winter clouds and summer sun.", icon: SunMedium },
  { name: "Full Net Metering Benefits", focus: "Maximized for Oregon’s 1:1 credits.", icon: BadgeAlert },
  { name: "Expansion-Ready Design", focus: "Future-load ready.", icon: Home },
];

const challenges = [
  { title: "1:1 Net Metering", description: "Maximized under Oregon’s full net metering.", icon: BadgeAlert },
  { title: "Seasonal Yield Planning", description: "Sized for winter clouds and summer sun.", icon: ShieldCheck },
  { title: "Optional Storage Strategy", description: "Added for resilience, not regulation.", icon: PlugZap },
];

const OregonLocations = () => {
  const { heroMediaStyle, heroOverlayStyle } = useStandardPageHeroFit();

  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative w-full" style={heroMediaStyle}>
          <img
            src="/assets/locations/oregon-header-image.webp"
            alt="Oregon neighborhood with rooftop solar installations."
            className="h-full w-full object-cover object-[center_22%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/80 via-[#17141b]/46 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-center px-6 sm:px-8" style={heroOverlayStyle}>
            <div className="max-w-4xl text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">OREGON</p>
              <h1 className="max-w-[980px] text-5xl font-medium leading-[0.98] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[82px]">
                Solar That Performs in Oregon&apos;s Climate
              </h1>
              <p className="mt-7 max-w-[980px] text-[23px] font-medium leading-[1.34] text-white/82">
                High-efficiency solar systems designed for net metering and year-round performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-12">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_20px_60px_-20px_rgba(109,57,181,0.3)] sm:p-8">
                <OregonMap className="max-w-[280px]" />
              </div>
            </div>

            <div>
              <div className="mb-10 max-w-xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">LOCAL ENERGY DESIGN</p>
                <h2 className=" text-4xl text-stone-900 sm:text-5xl">Solar that fits Oregon</h2>
                <p className="mt-4 text-stone-600">
                  Engineered for cloudy winters, strong summer production, and full net metering value.
                </p>
              </div>

              <div className="space-y-4">
                {regions.map((region) => {
                  const Icon = region.icon;

                  return (
                  <div
                    key={region.name}
                    className="group flex items-center gap-5 rounded-2xl bg-white p-5 shadow-[0_4px_20px_-10px_rgba(109,57,181,0.2)] transition-shadow hover:shadow-[0_8px_30px_-10px_rgba(109,57,181,0.35)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-stone-900">{region.name}</p>
                      <p className="text-sm text-stone-500">{region.focus}</p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(145deg,#6d5a96_0%,#836fb0_52%,#9a86c2_100%)] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.4)] lg:rounded-3xl">
              <img
                src="/assets/locations/oregon-solar-that-fits-oregon.webp"
                alt="Oregon home with rooftop solar panels and a Solarfig installation van."
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[550px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="relative mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:absolute xl:bottom-8 xl:left-8 xl:right-8 xl:mt-0">
              {challenges.map((challenge) => {
                const Icon = challenge.icon;
                return (
                  <div key={challenge.title} className="flex-1 rounded-xl bg-white/95 p-5 backdrop-blur-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                      <Icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="font-medium text-stone-900">{challenge.title}</p>
                    <p className="text-sm text-stone-500">{challenge.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 max-w-2xl lg:mt-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">BUILT FOR OREGON</p>
            <h2 className=" text-3xl leading-tight sm:text-4xl">Optimized for Oregon&apos;s energy structure</h2>
            <p className="mt-4 text-white/80">
              Designed to capture full retail net metering credits while preparing your home for long-term electrification.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#6f5a9b] px-8 py-12 text-white sm:px-12 sm:py-16 lg:rounded-3xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className=" text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Get your Oregon solar plan
                </h2>
                <p className="mt-4 max-w-lg text-white/70">
                  Get a transparent breakdown of production, savings, and optional storage — built for Oregon utilities.
                </p>
              </div>
              <div className="lg:text-right">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GlobalQuoteSection />
      <Footer />
    </main>
  );
};

export default OregonLocations;
