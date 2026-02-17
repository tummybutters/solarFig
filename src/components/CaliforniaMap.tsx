import { useEffect, useRef, useState } from "react";

interface ServiceRegion {
  id: string;
  name: string;
  x: number;
  y: number;
  utility: "SCE" | "PG&E" | "SDG&E";
}

// Intentionally distributed marker positions inside the California outline
const serviceRegions: ServiceRegion[] = [
  { id: "san-francisco", name: "San Francisco", x: 26, y: 22, utility: "PG&E" },
  { id: "oakland", name: "Oakland", x: 28, y: 24, utility: "PG&E" },
  { id: "san-jose", name: "San Jose", x: 31, y: 29, utility: "PG&E" },
  { id: "sacramento", name: "Sacramento", x: 37, y: 24, utility: "PG&E" },
  { id: "stockton", name: "Stockton", x: 40, y: 30, utility: "PG&E" },
  { id: "modesto", name: "Modesto", x: 43, y: 35, utility: "PG&E" },
  { id: "fresno", name: "Fresno", x: 48, y: 46, utility: "PG&E" },
  { id: "bakersfield", name: "Bakersfield", x: 52, y: 56, utility: "PG&E" },
  { id: "pasadena", name: "Pasadena", x: 50, y: 64, utility: "SCE" },
  { id: "los-angeles", name: "Los Angeles", x: 46, y: 66, utility: "SCE" },
  { id: "torrance", name: "Torrance", x: 44, y: 70, utility: "SCE" },
  { id: "orange-county", name: "Orange County", x: 49, y: 71, utility: "SCE" },
  { id: "anaheim", name: "Anaheim", x: 52, y: 69, utility: "SCE" },
  { id: "santa-ana", name: "Santa Ana", x: 53, y: 72, utility: "SCE" },
  { id: "corona", name: "Corona", x: 58, y: 69, utility: "SCE" },
  { id: "ontario", name: "Ontario", x: 60, y: 66, utility: "SCE" },
  { id: "rancho-cucamonga", name: "Rancho Cucamonga", x: 62, y: 64, utility: "SCE" },
  { id: "san-bernardino", name: "San Bernardino", x: 64, y: 62, utility: "SCE" },
  { id: "riverside", name: "Riverside", x: 60, y: 70, utility: "SCE" },
  { id: "carlsbad", name: "Carlsbad", x: 55, y: 80, utility: "SDG&E" },
  { id: "escondido", name: "Escondido", x: 58, y: 82, utility: "SDG&E" },
  { id: "san-diego", name: "San Diego", x: 56, y: 86, utility: "SDG&E" },
];

const utilityColors: Record<string, { bg: string; border: string; label: string }> = {
  SCE: { bg: "bg-purple-500", border: "border-purple-300", label: "SCE" },
  "PG&E": { bg: "bg-purple-300", border: "border-purple-200", label: "PG&E" },
  "SDG&E": { bg: "bg-purple-700", border: "border-purple-500", label: "SDG&E" },
};

const CaliforniaMap = () => {
  const [activeUtility, setActiveUtility] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = mapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const filteredRegions = activeUtility
    ? serviceRegions.filter((r) => r.utility === activeUtility)
    : serviceRegions;

  return (
    <div className="w-full">
      {/* Map Container */}
      <div ref={mapRef} className="relative mx-auto w-full max-w-md aspect-[5/6]">
        <img
          src="/assets/maps/california-outline.svg"
          alt="California state outline map"
          className="h-full w-full object-fill opacity-95"
          draggable={false}
        />

        {/* Service region markers */}
        {filteredRegions.map((region, index) => {
          const colors = utilityColors[region.utility];

          return (
            <div
              key={region.id}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-2"
                }`}
              style={{
                left: `${region.x}%`,
                top: `${region.y}%`,
                transitionDelay: `${index * 70}ms`,
              }}
            >
              {/* Pulse ring */}
              <span
                className={`absolute inline-flex h-full w-full rounded-none ${colors.bg} opacity-30 ${isInView ? "animate-ping" : ""
                  }`}
                style={{ animationDuration: "2s" }}
              />

              {/* Marker dot */}
              <div
                className={`relative h-2.5 w-2.5 rounded-none border-2 ${colors.bg} ${colors.border} shadow-md sm:h-3 sm:w-3 ${colors.bg.replace('bg-', 'shadow-')}/30`}
              />
            </div>
          );
        })}
      </div>

      {/* Utility Legend */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {Object.entries(utilityColors).map(([utility, colors]) => (
          <button
            key={utility}
            onClick={() => setActiveUtility(activeUtility === utility ? null : utility)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-none text-xs font-medium transition-all duration-300 ${activeUtility === utility || activeUtility === null
              ? "bg-white/10 text-white border border-white/20"
              : "bg-white/5 text-white/40 border border-white/10"
              } ${activeUtility === utility ? "ring-1 ring-purple-400/50" : ""}`}
          >
            <span className={`w-2 h-2 rounded-none ${colors.bg}`} />
            {utility}
          </button>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        {[
          { label: "Southern CA", count: serviceRegions.filter(r => r.utility === "SCE").length, color: "text-purple-500" },
          { label: "Northern CA", count: serviceRegions.filter(r => r.utility === "PG&E").length, color: "text-purple-300" },
          { label: "San Diego", count: serviceRegions.filter(r => r.utility === "SDG&E").length, color: "text-purple-700" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-3 rounded-none bg-white/5 border border-white/10"
          >
            <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>{stat.count}</div>
            <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="text-center mt-4">
        <span className="text-white/40 text-sm">
          Serving <span className="text-white font-semibold">{serviceRegions.length}+</span> California cities
        </span>
      </div>
    </div>
  );
};

export default CaliforniaMap;
