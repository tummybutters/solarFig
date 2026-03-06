import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const tiers = [
  { title: "Bronze", reward: "$500", count: "First completed referral" },
  { title: "Silver", reward: "$750", count: "2nd and 3rd completed referrals" },
  { title: "Gold", reward: "$1,000", count: "4+ completed referrals" },
];

const steps = [
  { step: "01", title: "Submit a Referral", description: "Send us your referral's info" },
  { step: "02", title: "We Deliver the Project", description: "We handle everything from design to install" },
  { step: "03", title: "Collect Your Reward", description: "Paid after installation is complete" },
];

const Referrals = () => {
  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mobile-hero-media relative h-[64vh] min-h-[420px] w-full sm:h-[72vh] lg:h-[760px]">
          <img
            src="/assets/referrals/referrals-header-image.webp"
            alt="Friends and family gathering outside a home at dusk."
            className="h-full w-full object-cover object-[center_58%] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17141b]/72 via-[#17141b]/44 to-[#17141b]/18" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-center px-6 sm:px-8">
            <div className="max-w-4xl pt-12 text-white sm:pt-16 lg:pt-20">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">REFERRAL PROGRAM</p>
              <h1 className="max-w-[980px] text-5xl font-medium leading-[0.98] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[82px]">
                Share solar. Earn rewards.
              </h1>
              <h2 className="mt-7 max-w-[980px] text-[23px] font-medium leading-[1.34] text-white/82">
                A structured referral program for homeowners and partners who trust Solarfig.
              </h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#231f2a] transition-colors hover:bg-gray-200"
                >
                  Refer a Homeowner
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center rounded-full border border-white/45 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
                >
                  How it works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reward Tiers — Large number cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5b4873]">Refer a Homeowner</p>
            <h2 className="text-3xl tracking-tight text-[#231f2a] sm:text-4xl">How it works</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {tiers.map((tier, i) => (
              <div key={tier.title} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_15px_50px_-15px_rgba(109,57,181,0.3)] transition-shadow hover:shadow-[0_25px_70px_-15px_rgba(109,57,181,0.45)] sm:p-8">
                <span className="absolute right-4 top-4 text-xs font-mono text-stone-200">0{i + 1}</span>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-purple-600">{tier.title}</p>
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
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">THE PROCESS</p>
                <h2 className=" text-4xl text-stone-900 sm:text-5xl">How it works</h2>
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
                <h3 className="mb-3 font-medium text-stone-900">Program Details</h3>
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
                    <span>Payment confirmed after project closeout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                    <span>Unlimited earning potential</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(109,57,181,0.35)]">
                <img
                  src="/assets/referrals/referrals-how-it-works.webp"
                  alt="Homeowners reviewing referral details together on a laptop."
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
          <div className="relative overflow-hidden rounded-2xl bg-[#6f5a9b] px-8 py-12 text-center text-white sm:px-12 sm:py-16 lg:rounded-3xl">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="relative">
              <h2 className=" text-3xl leading-tight tracking-tight sm:text-4xl">
                Have someone in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/70">
                Earn up to $1,000 for every completed solar installation you send our way.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                SUBMIT A REFERRAL
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
