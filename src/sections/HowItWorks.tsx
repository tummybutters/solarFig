import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageSquare, FileCheck, Wrench, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Step {
  id: number;
  title: string;
  timeline: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Free Solar Analysis",
    timeline: "Day 1",
    description: "We review your actual SCE, PG&E, or SDG&E bills and analyze your roof via satellite. You'll see exactly what your system costs, what it produces, and your 25-year savings—before you decide.",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Permits & Paperwork",
    timeline: "Days 2-14",
    description: "We handle every permit—city building, electrical, and utility interconnection. Our pre-approved relationships with California cities and utilities (SCE, PG&E, SDG&E) get permits done in 7-14 days, not 60-90.",
    icon: <FileCheck className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Professional Installation",
    timeline: "Days 15-23",
    description: "Our experienced crews (no subcontractors) install your solar + battery system in 1-2 days. We clean up everything, walk you through your system, and prep for inspection. The easy part.",
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Inspection & PTO",
    timeline: "Days 24-30",
    description: "We coordinate city inspection and final utility approval (Permission to Operate). Once approved, we flip the switch. You start generating your own power. Welcome to energy freedom.",
    icon: <Zap className="w-5 h-5" />,
  },
];

const ProcessCard = ({ step, index }: { step: Step; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.45, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  const isActive = isHovered || (isMobile && isInView);

  return (
    <div
      ref={cardRef}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-full w-full h-[2px]">
          <div 
            className="h-full bg-gradient-to-r from-purple-200 to-purple-100 transition-all duration-700"
            style={{
              opacity: isActive ? 1 : 0.5,
            }}
          />
        </div>
      )}

      <div 
        className="relative p-6 sm:p-8 rounded-[2rem] bg-white border-2 transition-all duration-500 h-full"
        style={{
          borderColor: isActive ? "rgba(168, 85, 247, 0.3)" : "rgba(0,0,0,0.05)",
          transform: isActive ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isActive ? "0 20px 40px rgba(168, 85, 247, 0.08)" : "0 4px 20px rgba(0,0,0,0.03)",
        }}
      >
        {/* Timeline Badge */}
        <div 
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 transition-all duration-500"
          style={{
            background: isActive 
              ? "linear-gradient(135deg, #9333ea 0%, #a855f7 100%)" 
              : "linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%)",
            color: isActive ? "white" : "#9333ea",
          }}
        >
          {step.timeline}
        </div>

        {/* Step Number Circle */}
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
          style={{
            background: isActive 
              ? "linear-gradient(135deg, #9333ea 0%, #a855f7 100%)" 
              : "linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%)",
          }}
        >
          <span 
            className="transition-colors duration-500"
            style={{ color: isActive ? "white" : "#9333ea" }}
          >
            {step.icon}
          </span>
        </div>

        {/* Step Number */}
        <span 
          className="absolute top-6 right-6 text-5xl font-bold transition-colors duration-500"
          style={{ color: isActive ? "rgba(168, 85, 247, 0.15)" : "rgba(0,0,0,0.03)" }}
        >
          0{step.id}
        </span>

        {/* Content */}
        <h3 className="text-gray-900 text-lg sm:text-xl font-semibold tracking-tight mb-3">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-50/50 py-20 sm:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-purple-600 text-xs tracking-widest uppercase font-medium">
            How It Works
          </span>
          <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mt-4 mb-6">
            From quote to PTO in 30 days.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            We handle every detail—you just approve the design and sign the paperwork. 
            Most California solar companies take 3-4 months. We're done in 30 days guaranteed.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* Guarantee Box */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="relative p-8 rounded-[2rem] bg-gradient-to-br from-purple-600 to-purple-700 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }} />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">30-Day Guarantee</div>
              <p className="text-purple-100 text-sm sm:text-base mb-4">
                Permitted, installed, and activated in 30 days or we pay you $500 cash.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-purple-200">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                No questions asked
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                We keep working until it's done
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-purple-600 text-white font-medium transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Get your free solar report
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
