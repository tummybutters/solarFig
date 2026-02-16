import CaliforniaMap from "@/components/CaliforniaMap";
import { ArrowRight, Zap } from "lucide-react";

const ServiceArea = () => {
  return (
    <section id="service-area" className="bg-gray-900 py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Purple gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-purple-950/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">NEM 3.0 Specialists</span>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Serving all of
              <br />
              <span className="text-purple-300">California</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              From San Diego to the Bay Area, we specialize in NEM 3.0 solar installation 
              for California's three major utilities. We know the local rules, the rate structures, 
              and how to maximize your savings under the new policy.
            </p>

            {/* Utility Pills */}
            <div className="flex flex-wrap gap-3">
              {["SCE", "PG&E", "SDG&E"].map((utility) => (
                <div 
                  key={utility}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium"
                >
                  {utility}
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-600 text-white font-medium transition-all duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Check your zip code
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <p className="text-gray-500 text-xs">
              Service availability varies by zip code and utility territory. 
              Contact us to confirm coverage in your area.
            </p>
          </div>

          {/* Right Column - Map */}
          <div className="lg:col-span-3">
            <CaliforniaMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
