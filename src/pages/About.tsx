import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight } from "lucide-react";

const pillars = [
  { title: "Clear by Design", description: "Straightforward proposals. No inflated production claims." },
  { title: "Market-Smart", description: "Designed around utility structure and policy realities." },
  { title: "Standards Matter", description: "Vetted installation partners and manufacturer-backed warranties." },
  { title: "Built to Last", description: "Support that extends beyond PTO and activation." },
];

const About = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative h-[60vh] min-h-[420px] w-full">
          <img
            src="/assets/about-us/about-us-hero-header.webp"
            alt="Modern home exterior with rooftop solar panels."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/80 via-[#17141b]/55 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-3xl text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">ABOUT US</p>
              <h1 className="text-4xl font-medium leading-[1.02] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
                Solar done with integrity. Designed with intention.
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-medium text-white/82">
                We help homeowners transition to solar with clear strategy, honest pricing, and systems built to perform for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are — Large image with floating text card */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.35)] lg:rounded-3xl">
              <img
                src="/assets/about-us/about-us-who-we-are-installer.webp"
                alt="Installer working on a residential rooftop solar array."
                className="h-[450px] w-full object-cover sm:h-[550px] lg:h-[650px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="relative mx-4 -mt-24 rounded-xl bg-white p-6 shadow-xl sm:mx-8 sm:p-8 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:max-w-md lg:rounded-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-600">WHO WE ARE</p>
              <h2 className="mb-4  text-2xl text-stone-900 sm:text-3xl">Solar, done the right way</h2>
              <p className="text-stone-600 leading-relaxed">
                Solarfig was built around a simple idea: solar should be structured clearly, priced transparently, and installed with long-term accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars — Icon strip */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">WHY SOLARFIG</p>
            <h2 className=" text-4xl text-stone-900 sm:text-5xl">What makes Solarfig different</h2>
            <p className="mt-4 text-stone-600">
              Solarfig was built to bring structure and integrity back to residential solar.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="group relative overflow-hidden rounded-2xl bg-[#f4eefb] p-6 transition-colors hover:bg-purple-50">
                <span className="absolute right-4 top-4 text-xs font-mono text-stone-300">0{i + 1}</span>
                <h3 className="mb-2  text-xl text-stone-900">{pillar.title}</h3>
                <p className="text-sm text-stone-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — Two images with purple shadows */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-purple-600/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_-20px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/about-us/about-us-gallery-bottom-left.webp"
                  alt="Suburban home with a rooftop solar panel system."
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-purple-600/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_-20px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/about-us/about-us-gallery-bottom-right.webp"
                  alt="Solar crew installing a panel on a pitched roof."
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Dark card */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#6f5a9b] px-8 py-12 text-white sm:px-12 sm:py-16 lg:rounded-3xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className=" text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Ready to build this the right way?
              </h2>
              <p className="mt-5 text-white/70">
                Designed for homeowners who value structure, transparency, and long-term performance.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                Start Your Plan
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <GlobalQuoteSection />
      <Footer />
    </main>
  );
};

export default About;
