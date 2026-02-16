import { useState } from "react";
import { ArrowUpRight, Zap, Shield, Clock, Wallet } from "lucide-react";

interface Pillar {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    id: 1,
    title: "30-day guarantee",
    subtitle: "Or we pay you $500",
    description: "Permitted, installed, and activated in 30 days guaranteed. If we miss the deadline, you get $500 cash—no questions asked. We keep working until your system is live.",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "NEM 3.0 optimized",
    subtitle: "Battery + solar designed for new rules",
    description: "Most California solar companies are still selling systems designed for the old rules. We design for NEM 3.0: battery storage to capture your production and use it during expensive peak hours (4pm-9pm).",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Fixed price, all-inclusive",
    subtitle: "Your quote is your final price",
    description: "No surprises. No 'unforeseen issues.' Includes premium panels with 25-year warranty, battery storage, all permits, professional installation, and 10-year workmanship warranty.",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Production guarantee",
    subtitle: "Your system works or we fix it free",
    description: "If your system doesn't produce within 10% of our projections in year one, we diagnose and repair at zero cost. Can't fix it? Full refund. We're that confident in our design.",
    icon: <Shield className="w-5 h-5" />,
  },
];

const PillarCard = ({ pillar, index }: { pillar: Pillar; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-[380px] sm:h-[420px] rounded-[2rem] overflow-hidden cursor-pointer bg-gray-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background gradient that shifts on hover */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          background: isHovered 
            ? "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #e9d5ff 100%)" 
            : "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)",
          transform: isHovered ? "scale(1.02)" : "scale(1)",
        }}
      />

      {/* Purple accent line at top */}
      <div 
        className="absolute top-0 left-8 right-8 h-1 rounded-full bg-purple-500 transition-all duration-500"
        style={{
          opacity: isHovered ? 1 : 0.3,
          transform: isHovered ? "scaleX(1)" : "scaleX(0.3)",
        }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        {/* Top Label & Icon */}
        <div className="flex justify-between items-start">
          <span className="text-gray-400 text-[10px] tracking-widest uppercase font-medium">
            0{pillar.id}
          </span>
          <div
            className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center transition-all duration-500 bg-white"
            style={{
              borderColor: isHovered ? "rgba(168, 85, 247, 0.4)" : "rgba(168, 85, 247, 0.2)",
              transform: isHovered ? "rotate(0deg) scale(1.1)" : "rotate(0deg) scale(1)",
            }}
          >
            <span className="text-purple-600 transition-colors duration-300">
              {pillar.icon}
            </span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="space-y-3">
          {/* Subtitle */}
          <span 
            className="block text-purple-600 text-xs tracking-wide font-medium transition-all duration-500"
          >
            {pillar.subtitle}
          </span>

          {/* Title */}
          <h3 
            className="text-gray-900 text-xl sm:text-2xl font-semibold tracking-tight transition-all duration-500 leading-tight"
            style={{
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            {pillar.title}
          </h3>

          {/* Description - Reveals on Hover */}
          <p
            className="text-gray-600 text-sm leading-relaxed transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(20px)",
              maxHeight: isHovered ? "120px" : "0",
              overflow: "hidden",
            }}
          >
            {pillar.description}
          </p>

          {/* CTA Line */}
          <div
            className="pt-3 transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <span className="text-purple-700 text-sm font-medium flex items-center gap-2">
              Learn more
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Border Ring */}
      <div 
        className="absolute inset-0 rounded-[2rem] border-2 transition-all duration-500 pointer-events-none"
        style={{
          borderColor: isHovered ? "rgba(168, 85, 247, 0.2)" : "rgba(0,0,0,0.05)",
        }}
      />
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-white min-h-screen py-20 sm:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="space-y-4">
            <span className="text-purple-600 text-xs tracking-widest uppercase font-medium">
              Why SolarFig
            </span>
            <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              California solar that
              <br />
              <span className="text-gray-400">actually works under NEM 3.0</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed lg:text-right">
            Most solar companies are still selling systems designed for 2022. 
            We designed ours for the new rules—and we guarantee the results.
          </p>
        </div>

        {/* Pills Grid - 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-gray-400 text-sm">Questions about NEM 3.0 or battery storage?</span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-purple-700 text-sm font-medium hover:text-purple-900 transition-colors"
          >
            Talk to a solar advisor
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
