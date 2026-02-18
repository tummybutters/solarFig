import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import CaliforniaMap from "@/components/CaliforniaMap";
import { ArrowRight, BadgeAlert, PlugZap, ShieldCheck } from "lucide-react";

const utilities = [
  { code: "SCE", name: "Southern California Edison", focus: "Peak window optimization" },
  { code: "PG&E", name: "Pacific Gas & Electric", focus: "Production-first design" },
  { code: "SDG&E", name: "San Diego Gas & Electric", focus: "Aggressive offset strategy" },
];

const challenges = [
  { title: "Rate Volatility", description: "Prices change, we model accordingly", icon: BadgeAlert },
  { title: "Grid Reliability", description: "Backup planning for outages", icon: ShieldCheck },
  { title: "Future Growth", description: "EV + appliance expansion ready", icon: PlugZap },
];

const Locations = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="mobile-hero-media relative h-[52vh] min-h-[340px] w-full sm:h-[62vh]">
          <img
            src="/assets/hero-main/locations-h1-2026-02-18.jpg"
            alt="California neighborhood with multiple rooftop solar installations."
            className="h-full w-full object-cover object-[center_76%] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/80 via-[#17141b]/46 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1280px] items-end px-6 pb-10 sm:px-8 sm:pb-14">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Locations</p>
              <h1 className="text-4xl tracking-tight sm:text-6xl">California Service Areas</h1>
              <p className="mt-5 max-w-3xl text-white/85">
                Territory-aware guidance for SCE, PG&E, and SDG&E homeowners planning solar, storage, and whole-home upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Utilities — Cards with map */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div>
              <div className="mb-10 max-w-xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Utilities</p>
                <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">Territory matters</h2>
                <p className="mt-4 text-stone-600">
                  We scope projects around your utility territory first, then your roof, usage profile, and expansion plans.
                </p>
              </div>

              <div className="space-y-4">
                {utilities.map((utility, i) => (
                  <div key={utility.code} className="group flex items-center gap-5 rounded-2xl bg-white p-5 shadow-[0_4px_20px_-10px_rgba(109,57,181,0.2)] transition-shadow hover:shadow-[0_8px_30px_-10px_rgba(109,57,181,0.35)]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-sm font-bold text-purple-600">
                      {utility.code}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-stone-900">{utility.name}</p>
                      <p className="text-sm text-stone-500">{utility.focus}</p>
                    </div>
                    <span className="text-xs font-mono text-stone-300">0{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_20px_60px_-20px_rgba(109,57,181,0.3)] sm:p-8">
                <CaliforniaMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges — Full-bleed image with floating cards */}
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.4)] lg:rounded-3xl">
              <img
                src="/assets/hero-main/locations-h1-2026-02-18.jpg"
                alt="California homes with solar"
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[550px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Floating challenge cards */}
            <div className="relative mx-4 -mt-24 grid gap-4 sm:mx-8 sm:mt-0 sm:flex lg:absolute lg:bottom-8 lg:left-8 lg:right-8">
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">California Focus</p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Designed for California's energy reality</h2>
          </div>
        </div>
      </section>

      {/* CTA — Dark card */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#16131a] px-8 py-12 text-white sm:px-12 sm:py-16 lg:rounded-3xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Get a location-aware estimate
                </h2>
                <p className="mt-4 max-w-lg text-white/70">
                  We break down your likely production, estimated savings, and backup options based on your utility territory.
                </p>
              </div>
              <div className="lg:text-right">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
                >
                  Get a quote
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

export default Locations;
