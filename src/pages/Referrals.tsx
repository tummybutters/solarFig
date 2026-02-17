import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const tiers = [
  {
    title: "Bronze",
    reward: "$500",
    copy: "Your first completed install referral.",
  },
  {
    title: "Silver",
    reward: "$750",
    copy: "Your 2nd and 3rd completed install referrals.",
  },
  {
    title: "Gold",
    reward: "$1,000",
    copy: "Your 4th completed install and beyond.",
  },
];

const steps = [
  "Submit your referral.",
  "We consult, design, and install.",
  "You get rewarded after install completion.",
];

const Referrals = () => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />

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
                href="#referral-guidelines"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-9 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Referral processing guidelines
              </a>
            </div>
          </div>
        </div>

        <div className="h-[320px] w-full sm:h-[420px] lg:h-[500px]">
          <img
            src="/assets/hero-main/referrals.png"
            alt="Solar panel array at sunset over tree line."
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eee3fb] py-16 sm:py-20">
        <div className="pointer-events-none absolute right-[-120px] top-[-110px] h-72 w-72 rounded-full border border-[#d8c9ef] opacity-80" />
        <div className="pointer-events-none absolute right-[-145px] top-[-135px] h-84 w-84 rounded-full border border-[#d8c9ef] opacity-55" />
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <h2 className="max-w-4xl text-4xl leading-tight tracking-tight text-[#201b25] sm:text-6xl">
            Refer your friends and earn up to $1,000 after we install their system.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#1f1a22] px-9 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#131017]"
            >
              Submit a referral
            </a>
            <a
              href="#referral-guidelines"
              className="inline-flex items-center justify-center rounded-full border border-[#2b2630]/55 px-9 py-3.5 text-base font-medium text-[#201b25] transition-colors hover:bg-[#e7def4]"
            >
              Referral processing guidelines
            </a>
          </div>
        </div>
      </section>

      <section id="referral-guidelines" className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{tier.title} Tier</p>
                <p className="mt-2 text-5xl leading-none tracking-tight text-[#201b25]">{tier.reward}</p>
                <p className="mt-4 text-base text-gray-600">{tier.copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-2xl border border-gray-200 bg-white p-7">
              <h3 className="text-2xl tracking-tight text-[#201b25]">How it works</h3>
              <ul className="mt-5 space-y-3">
                {steps.map((step) => (
                  <li key={step} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6d39b5]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-7">
              <h3 className="text-2xl tracking-tight text-[#201b25]">Program notes</h3>
              <ul className="mt-5 space-y-3 text-gray-700">
                <li>Rewards are issued after completed installation.</li>
                <li>Tier progression is based on completed installs under your name.</li>
                <li>Reward timing is confirmed by the Solarfig team after install closeout.</li>
              </ul>
              <a href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6d39b5]">
                Start a referral
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </div>
        </div>
      </section>

      <GlobalQuoteSection />

      <Footer />
    </main>
  );
};

export default Referrals;
