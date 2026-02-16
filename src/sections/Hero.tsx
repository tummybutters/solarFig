import TestimonialCardStack from "@/components/TestimonialCardStack";
import { ArrowRight, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full">
      {/* Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden h-full">
        <img
          src="/assets/Solar installers at sunset.png"
          alt="Solar installers at sunset"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-purple-950/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 min-h-screen">
        <div className="pt-28 sm:pt-32 lg:pt-24 min-h-screen flex flex-col justify-center pb-20 lg:pb-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            {/* Left Column - Branding Text */}
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit mx-auto lg:mx-0">
                <TrendingUp className="w-4 h-4 text-purple-300" />
                <span className="text-white/80 text-sm font-medium">California utility rates up 127% in 10 years</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-white tracking-tighter leading-[0.95]">
                  Cut your power bill.
                  <br />
                  <span className="text-purple-300">Keep your comfort.</span>
                </h1>
              </div>

              <div className="space-y-5 max-w-md mx-auto lg:mx-0">
                <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                  California solar installation designed for NEM 3.0. Permitted, installed, and activated 
                  in <span className="text-white font-semibold">30 days</span> or we pay you $500. 
                  Zero surprise fees. Zero pushy sales tactics.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <span className="relative z-10">Get Your Free Solar Report</span>
                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#savings"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                  >
                    <span>See Estimated Savings</span>
                  </a>
                </div>

                {/* Trust line */}
                <p className="text-white/50 text-xs tracking-wide">
                  Takes 2 minutes. Zero obligation. Real numbers from your SCE, PG&E, or SDG&E bill.
                </p>
              </div>
            </div>

            {/* Right Column - Testimonial Card Stack */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative">
                <TestimonialCardStack />
              </div>
            </div>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-16 lg:mt-20 border-t border-white/10 pt-8">
            <p className="text-white/60 text-xs sm:text-sm text-center lg:text-left mb-4 tracking-wide">
              Trusted California solar installation. NEM 3.0 optimized with battery storage.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8">
              {[
                "30-day installation guarantee",
                "NEM 3.0 + battery optimized",
                "SCE • PG&E • SDG&E",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/70 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer/Scroll indicator area */}
          <div className="hidden lg:absolute lg:bottom-6 lg:left-6 lg:right-6 lg:flex justify-between items-end border-t border-white/10 pt-4">
            <div className="hidden sm:block">
              <span className="text-white/40 text-xs tracking-widest uppercase">Scroll Down</span>
            </div>
            <div className="text-right">
              <span className="text-white/40 text-xs tracking-widest uppercase">To See How It Works</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
