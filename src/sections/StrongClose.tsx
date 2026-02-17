import { ArrowRight, Phone, Clock } from "lucide-react";

const StrongClose = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-950 to-gray-900" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-none blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/20 rounded-none blur-3xl" />

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Scarcity Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Clock className="w-4 h-4 text-purple-300" />
            <span className="text-white/80 text-sm font-medium">Only 3 installation spots remaining this month</span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Stop sending $200+/month to your utility company.
          </h2>
          <p className="text-purple-200/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Get your free solar savings report with real numbers from your actual utility bills. 
            See exactly what you'll save before you decide. No pressure. No games.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-left">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">2 min</div>
              <div className="text-purple-300/60 text-sm">To get your report</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">30 days</div>
              <div className="text-purple-300/60 text-sm">To installation</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">$2,100+</div>
              <div className="text-purple-300/60 text-sm">Average yearly savings</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none bg-white text-purple-900 font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105"
            >
              Get Your Free Solar Report
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+12133064154"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none border-2 border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              <Phone className="w-5 h-5" />
              (213) 306-4154
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-purple-300/60 text-sm mb-8">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-none bg-purple-400" />
              30-day installation guarantee
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-none bg-purple-400" />
              NEM 3.0 optimized
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-none bg-purple-400" />
              Production guarantee
            </span>
          </div>

          {/* Risk reversal */}
          <p className="text-white/40 text-xs max-w-md mx-auto">
            No obligation. No pushy sales calls. Just clear numbers based on your actual 
            SCE, PG&E, or SDG&E bills. You decide if it makes sense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrongClose;
