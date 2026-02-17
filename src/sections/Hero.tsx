import { ArrowRight, ShieldCheck, SunMedium, TrendingUp } from "lucide-react";

const trustSignals = [
  "30-day activation guarantee",
  "Fixed pricing with no hidden add-ons",
  "Battery-first NEM 3.0 system design",
];

const stats = [
  { label: "Annual savings delivered", value: "$14.7M+" },
  { label: "California systems live", value: "2,500+" },
  { label: "Projects NEM 3.0 ready", value: "100%" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-purple-950 text-white selection:bg-purple-200/80 selection:text-purple-950"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/Solar installers at sunset.png"
          alt="Solar installers mounting panels at sunset"
          className="h-full w-full object-cover object-[72%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-900/85 to-purple-900/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(159,114,208,0.24),transparent_35%),radial-gradient(circle_at_18%_12%,rgba(187,154,223,0.16),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(36,19,60,0.92)_0%,rgba(36,19,60,0.38)_38%,rgba(36,19,60,0.86)_100%)]" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1400px] px-6 sm:px-8">
        <div className="grid w-full grid-cols-1 gap-12 pb-16 pt-28 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-12 lg:pt-32">
          <div className="space-y-8 pb-2">
            <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.34em] text-purple-100/85">
              <SunMedium className="h-3.5 w-3.5 text-purple-300" />
              Solarfig California
            </p>

            <h1
              className="max-w-3xl text-5xl leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl"
              style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: '"opsz" 120' }}
            >
              Cut your electric bill.
              <br />
              <span className="text-purple-200/85">Keep every bit of comfort.</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-purple-100/80 sm:text-lg">
              California solar designed for NEM 3.0. Permitted, installed, and activated in{" "}
              <span className="font-semibold text-white">30 days</span> or we pay you $500.
              Clear scope. No pressure tactics. No pricing games.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 border border-purple-300/40 bg-purple-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-400"
              >
                Get your free solar report
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#plans"
                className="inline-flex items-center justify-center border border-white/35 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white/12 hover:border-white/55"
              >
                See estimated savings
              </a>
            </div>

            <div className="grid max-w-3xl grid-cols-1 gap-3 text-[11px] uppercase tracking-[0.18em] text-white/70 sm:grid-cols-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-2 backdrop-blur-sm"
                >
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-purple-300" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="max-w-sm lg:justify-self-end">
            <div className="border border-white/20 bg-purple-950/60 p-6 shadow-[0_24px_80px_rgba(24,11,46,0.45)] backdrop-blur-xl sm:p-7">
              <p className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-purple-100/70">
                <TrendingUp className="h-3.5 w-3.5 text-purple-300" />
                Real homeowner outcomes
              </p>

              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t border-white/15 pt-4 first:border-t-0 first:pt-0">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-purple-100/70">{stat.label}</p>
                    <p
                      className="mt-1 text-4xl tracking-tight text-white sm:text-[2.8rem]"
                      style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: '"opsz" 120' }}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border border-white/15 bg-white/5 p-4">
                <p className="text-sm leading-relaxed text-purple-100/80">
                  "Fast, clean install and no hidden fees. We were live in 26 days exactly as promised."
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-purple-200/80">
                  Verified Solarfig homeowner
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 right-6 z-20 hidden items-center justify-between border-t border-white/20 pt-4 text-[10px] uppercase tracking-[0.35em] text-white/55 sm:flex">
        <span>Scroll to explore</span>
        <span>SCE / PG&E / SDG&E optimized</span>
      </div>
    </section>
  );
};

export default Hero;
