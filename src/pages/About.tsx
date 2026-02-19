import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight } from "lucide-react";

const pillars = [
  { title: "Transparent", description: "No pressure, clear proposals" },
  { title: "California-Focused", description: "Design to PTO expertise" },
  { title: "Quality-First", description: "Vetted partners & standards" },
  { title: "Long-Term", description: "Support after go-live" },
];

const About = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="mobile-hero-media relative h-[60vh] min-h-[420px] w-full">
          <img
            src="/assets/hero-main/seedream-preserve.png"
            alt="Solar installer carrying panel equipment on a rooftop during installation."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/80 via-[#17141b]/55 to-[#17141b]/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Explore</p>
              <h1 className="text-4xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">About Solarfig</h1>
              <p className="mt-5 max-w-2xl text-lg text-white/80">
                We build solar projects around fit, clarity, and long-term performance for California homeowners.
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
                src="/assets/about-us/crew-roof-team-01.png"
                alt="Solarfig installation team"
                className="h-[450px] w-full object-cover sm:h-[550px] lg:h-[650px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="relative mx-4 -mt-24 rounded-xl bg-white p-6 shadow-xl sm:mx-8 sm:p-8 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:max-w-md lg:rounded-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-600">Who We Are</p>
              <h2 className="mb-4  text-2xl text-stone-900 sm:text-3xl">Local team, right way</h2>
              <p className="text-stone-600 leading-relaxed">
                Solarfig helps homeowners transition to clean energy with clear recommendations, transparent pricing, and dependable project execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars — Icon strip */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Our Approach</p>
            <h2 className=" text-4xl text-stone-900 sm:text-5xl">How we work</h2>
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
                  src="/assets/about-us/crew-roof-team-02.png"
                  alt="Team installing panels"
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
                  src="/assets/about-us/crew-panel-bw.png"
                  alt="Panel installation detail"
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
          <div className="relative overflow-hidden rounded-2xl bg-[#16131a] px-8 py-12 text-white sm:px-12 sm:py-16 lg:rounded-3xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className=" text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Built for homeowners who want clarity, craftsmanship, and long-term savings.
              </h2>
              <p className="mt-5 text-white/70">
                We're not here for the quickest sale. We're here to design the right system, execute it cleanly, and support your goals for years to come.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                Get a quote
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
