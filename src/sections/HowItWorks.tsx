import ProcessCarousel from "@/components/ProcessCarousel";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#fafafa] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(133, 83, 194, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-15"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge - Sharp Square */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/50 border border-purple-200 mb-8 mx-auto">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 text-xs font-semibold uppercase tracking-[0.2em]">Simple 7-Step Process</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-light text-gray-900 tracking-tight leading-[0.9] mb-6">
            How It Works
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed border-t border-purple-100 pt-6">
            From consultation to activation in 30 days.
            <span className="text-gray-900 font-medium font-serif italic ml-1"> We handle everything.</span>
          </p>
        </div>

        {/* Trust Badges - Sharp Square Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
          {[
            { icon: <Clock className="w-4 h-4" />, text: "30-day guarantee" },
            { icon: <Shield className="w-4 h-4" />, text: "End-to-end handling" },
            { icon: <Sparkles className="w-4 h-4" />, text: "Zero surprise fees" },
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 bg-purple-900 border border-white/10"
            >
              <span className="text-purple-300">{badge.icon}</span>
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* 3D Wheel of Fortune Carousel */}
        <ProcessCarousel />

        {/* CTA Section - Sharp Square Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-purple-600 text-white text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-purple-700"
          >
            <span>Get Your Free Solar Report</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-gray-400 text-xs uppercase tracking-wider">
            Takes 2 minutes. Zero obligation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
