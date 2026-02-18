import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight, BriefcaseBusiness, Heart, MapPin, Sparkles } from "lucide-react";

const perks = [
  { title: "Remote & Hybrid", description: "Flexible work options", icon: MapPin },
  { title: "Growth Focus", description: "Career development", icon: Sparkles },
  { title: "Meaningful Work", description: "Help homeowners go solar", icon: Heart },
  { title: "Great Team", description: "High-trust environment", icon: BriefcaseBusiness },
];

const roles = [
  { title: "Solar Sales Consultant", location: "Remote / CA" },
  { title: "Project Coordinator", location: "Hybrid / LA" },
  { title: "Operations Support", location: "Remote" },
  { title: "Customer Experience", location: "Hybrid / OC" },
];

const Careers = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="bg-[#17141b] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Explore</p>
          <h1 className="max-w-4xl text-4xl tracking-tight sm:text-6xl">Careers at Solarfig</h1>
          <p className="mt-5 max-w-2xl text-white/75">
            We're building a high-trust, high-performance team focused on helping homeowners across California.
          </p>
        </div>
      </section>

      {/* Perks — Icon cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Why Join</p>
            <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">Perks & Benefits</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="group rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(109,57,181,0.2)] transition-shadow hover:shadow-[0_20px_60px_-15px_rgba(109,57,181,0.35)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 transition-colors group-hover:bg-purple-200">
                    <Icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="mb-1 font-medium text-stone-900">{perk.title}</h3>
                  <p className="text-sm text-stone-500">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles — List with image */}
      <section className="bg-[#111015] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Openings</p>
                <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Current roles</h2>
                <p className="mt-4 text-white/60">
                  Join us in building the future of home energy in California.
                </p>
              </div>

              <div className="space-y-3">
                {roles.map((role, i) => (
                  <div key={role.title} className="flex items-center justify-between rounded-xl bg-white/5 p-5 transition-colors hover:bg-white/[0.08]">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-white/30">0{i + 1}</span>
                      <div>
                        <p className="font-medium text-white">{role.title}</p>
                        <p className="text-sm text-white/50">{role.location}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/30" />
                  </div>
                ))}
              </div>

              <a
                href="mailto:careers@solarfig.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1c1723] transition-colors hover:bg-lime-100"
              >
                Submit your resume
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.4)]">
                <img
                  src="/assets/about-us/crew-roof-team-01.png"
                  alt="Solarfig team at work"
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-white px-8 py-12 shadow-[0_20px_60px_-20px_rgba(109,57,181,0.25)] sm:px-12 sm:py-16 lg:rounded-3xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-100 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
                Don't see the right role?
              </h2>
              <p className="mt-4 text-stone-600">
                We're always looking for talented people. Send us your resume and we'll keep you in mind for future openings.
              </p>
              <a
                href="mailto:careers@solarfig.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900"
              >
                Get in touch
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

export default Careers;
