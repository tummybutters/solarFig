import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const tiers = [
  { title: "Bronze", reward: "$500", count: "1st referral" },
  { title: "Silver", reward: "$750", count: "2nd & 3rd" },
  { title: "Gold", reward: "$1,000", count: "4th+" },
];

const steps = [
  { step: "01", title: "Submit", description: "Send us your referral's info" },
  { step: "02", title: "Install", description: "We handle design & build" },
  { step: "03", title: "Earn", description: "Get paid after completion" },
];

const Referrals = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero — unchanged */}
      <section className="pt-24 sm:pt-28">
        <div className="bg-[linear-gradient(130deg,#17131d_0%,#241a33_55%,#321f4b_100%)]">
          <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-8 sm:py-20">
            <p className="text-xs font-semibold text-white/70">Home / Referrals</p>
            <h1 className="mt-4 max-w-3xl text-5xl leading-[0.92] tracking-tight text-white sm:text-7xl">
              Share solar, get rewarded
            </h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#6d39b5] px-9 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#5c2f9b]"
              >
                Submit a referral
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-9 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                How it works
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] w-full sm:h-[450px] lg:h-[550px]">
          <img
            src="/assets/hero-main/referrals.png"
            alt="Solar panel array at sunset over tree line."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4eefb] via-transparent to-transparent" />
        </div>
      </section>

      {/* Reward Tiers — Large number cards */}
      <section className="relative -mt-20 pb-16 sm:-mt-32 sm:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {tiers.map((tier, i) => (
              <div key={tier.title} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_15px_50px_-15px_rgba(109,57,181,0.3)] transition-shadow hover:shadow-[0_25px_70px_-15px_rgba(109,57,181,0.45)] sm:p-8">
                <span className="absolute right-4 top-4 text-xs font-mono text-stone-200">0{i + 1}</span>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-purple-600">{tier.title} Tier</p>
                <p className="text-5xl font-light text-stone-900 sm:text-6xl">{tier.reward}</p>
                <p className="mt-2 text-stone-500">{tier.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Steps with image */}
      <section id="how-it-works" className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-10 max-w-md">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">The Process</p>
                <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">How it works</h2>
              </div>

              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.step} className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-sm font-bold text-purple-600">
                      {step.step}
                    </span>
                    <div>
                      <p className="font-medium text-stone-900">{step.title}</p>
                      <p className="text-stone-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl bg-white p-6 shadow-[0_4px_20px_-10px_rgba(109,57,181,0.2)]">
                <h3 className="mb-3 font-medium text-stone-900">Program notes</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                    <span>Rewards issued after completed installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                    <span>Tier progression based on completed installs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                    <span>Timing confirmed after closeout</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/hero-main/referrals.png"
                  alt="Solar at sunset"
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Simple */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#16131a] px-8 py-12 text-center text-white sm:px-12 sm:py-16 lg:rounded-3xl">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                Start earning today
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/70">
                Refer your friends and earn up to $1,000 after we install their system.
              </p>
              <a
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                Submit a referral
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

export default Referrals;
