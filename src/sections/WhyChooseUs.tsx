import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Zap, Shield, Clock, Wallet } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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

const installationPanels = [
  {
    src: "/assets/install-gallery/install-09.jpg",
    alt: "Residential solar array installed across a large suburban roof",
  },
  {
    src: "/assets/install-gallery/install-02.jpg",
    alt: "Solar panel rows mounted on a tan shingle home",
  },
  {
    src: "/assets/install-gallery/install-04.jpg",
    alt: "Close-up home rooftop with black-frame solar modules",
  },
  {
    src: "/assets/install-gallery/install-07.jpg",
    alt: "Finished rooftop installation with clean panel alignment",
  },
  {
    src: "/assets/install-gallery/install-10.jpg",
    alt: "Wide neighborhood home with full solar panel coverage",
  },
];

const PillarCard = ({ pillar, index }: { pillar: Pillar; index: number }) => {
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
      className="group relative h-[380px] sm:h-[420px] rounded-none overflow-hidden bg-purple-950 cursor-default md:cursor-pointer"
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
          background: isActive
            ? "linear-gradient(135deg, #381d5d 0%, #24133c 50%, #1a0b2e 100%)"
            : "linear-gradient(135deg, #24133c 0%, #1a0b2e 100%)",
          transform: isActive ? "scale(1.02)" : "scale(1)",
        }}
      />

      {/* Purple accent line at top */}
      <div
        className="absolute top-0 left-8 right-8 h-1 rounded-none bg-purple-400 transition-all duration-500"
        style={{
          opacity: isActive ? 1 : 0.3,
          transform: isActive ? "scaleX(1)" : "scaleX(0.3)",
        }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        {/* Top Label & Icon */}
        <div className="flex justify-between items-start">
          <span className="text-purple-300/50 text-[10px] tracking-[0.3em] uppercase font-medium">
            0{pillar.id}
          </span>
          <div
            className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center transition-all duration-500 bg-white/5"
            style={{
              borderColor: isActive ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
              transform: isActive ? "rotate(0deg) scale(1.1)" : "rotate(0deg) scale(1)",
            }}
          >
            <span className="text-purple-300 transition-colors duration-300">
              {pillar.icon}
            </span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="space-y-4">
          {/* Subtitle */}
          <span
            className="block text-purple-400 text-xs tracking-[0.2em] font-bold uppercase transition-all duration-500"
          >
            {pillar.subtitle}
          </span>

          {/* Title */}
          <h3
            className="text-white text-2xl sm:text-3xl font-serif font-light tracking-tight transition-all duration-500 leading-tight"
            style={{
              transform: isActive ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            {pillar.title}
          </h3>

          {/* Description - Reveals on Hover */}
          <p
            className="text-purple-100/70 text-sm leading-relaxed transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(20px)",
              maxHeight: isActive ? "140px" : "0",
              overflow: "hidden",
            }}
          >
            {pillar.description}
          </p>

          {/* CTA Line */}
          <div
            className="pt-3 transition-all duration-500"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <span className="text-white text-sm font-medium flex items-center gap-2">
              Learn more
              <ArrowUpRight className="w-4 h-4 text-purple-400" />
            </span>
          </div>
        </div>
      </div>

      {/* Border Ring */}
      <div
        className="absolute inset-0 rounded-none border-2 transition-all duration-500 pointer-events-none"
        style={{
          borderColor: isActive ? "rgba(255, 255, 255, 0.1)" : "rgba(255,255,255,0.05)",
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-20">
          <div className="space-y-4">
            <span className="text-purple-600 text-xs tracking-[0.3em] uppercase font-medium">
              Why SolarFig
            </span>
            <h2 className="text-gray-900 text-4xl sm:text-5xl lg:text-7xl font-serif font-light tracking-tight leading-[0.9]">
              California solar
              <br />
              <span className="text-gray-400">answers all of your questions</span>
            </h2>
          </div>
          <p className="border-l border-purple-100 pl-6 text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
            Most solar companies are still selling systems designed for 2022.
            We designed ours for the new rules—and we guarantee the results.
          </p>
        </div>

        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <figure className="group relative overflow-hidden border border-purple-100 h-[320px] sm:h-[420px] lg:h-[520px] lg:col-span-7">
            <img
              src={installationPanels[0].src}
              alt={installationPanels[0].alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/35 to-transparent" />
          </figure>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5">
            {installationPanels.slice(1).map((panel) => (
              <figure key={panel.src} className="group relative overflow-hidden border border-purple-100 h-[180px] sm:h-[220px] lg:h-[248px]">
                <img
                  src={panel.src}
                  alt={panel.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/35 to-transparent" />
              </figure>
            ))}
          </div>
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
