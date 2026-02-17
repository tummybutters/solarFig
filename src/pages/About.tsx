import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const pillars = [
  "Transparent proposals with no pressure",
  "California-focused expertise from design to PTO",
  "Vetted installation partners and quality-first standards",
  "Long-term support after your system goes live",
];

const About = () => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />

      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="relative h-[60vh] min-h-[420px] w-full">
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <article>
            <p className="mb-3 text-sm text-gray-600">Who we are</p>
            <h2 className="text-4xl leading-tight tracking-tight text-[#231f2a] sm:text-5xl">
              A local team focused on doing solar the right way.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Solarfig helps homeowners transition to clean energy with clear recommendations, transparent pricing, and
              dependable project execution. We design systems that match real usage, utility territory, and home-specific
              constraints so results are predictable and sustainable.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              From consultation through installation and PTO, we prioritize communication and quality at every step.
            </p>

            <ul className="mt-8 space-y-3">
              {pillars.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#6d39b5]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="/#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6d39b5]">
              Talk with our team
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <figure>
            <img
              src="/assets/about-us/crew-roof-team-01.png"
              alt="Two installers working on a residential rooftop solar installation with ladder access."
              className="h-[560px] w-full rounded-3xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr]">
            <figure className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <img
                src="/assets/about-us/crew-roof-team-02.png"
                alt="Two solar technicians installing panel hardware on a roof under a clear sky."
                className="h-[430px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <img
                src="/assets/about-us/crew-panel-bw.png"
                alt="Installer lifting a solar panel on a tiled roof, black and white photo."
                className="h-[430px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="rounded-3xl bg-[#16131a] px-8 py-12 text-white sm:px-10">
            <h2 className="max-w-4xl text-3xl leading-tight tracking-tight sm:text-5xl">
              Built for homeowners who want clarity, craftsmanship, and long-term savings.
            </h2>
            <p className="mt-5 max-w-3xl text-white/75">
              We are not here for the quickest sale. We are here to design the right system, execute it cleanly, and
              support your home energy goals for years to come.
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
      </section>

      <GlobalQuoteSection />

      <Footer />
    </main>
  );
};

export default About;
