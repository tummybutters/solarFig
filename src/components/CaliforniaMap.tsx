import { useState } from "react";

interface ServiceRegion {
  id: string;
  name: string;
  x: number;
  y: number;
  utility: "SCE" | "PG&E" | "SDG&E";
}

// Key service regions in California with approximate coordinates
const serviceRegions: ServiceRegion[] = [
  // Southern California (SDG&E)
  { id: "san-diego", name: "San Diego", x: 42, y: 78, utility: "SDG&E" },
  { id: "carlsbad", name: "Carlsbad", x: 40, y: 72, utility: "SDG&E" },
  { id: "escondido", name: "Escondido", x: 44, y: 70, utility: "SDG&E" },
  
  // Southern California (SCE)
  { id: "orange-county", name: "Orange County", x: 38, y: 62, utility: "SCE" },
  { id: "los-angeles", name: "Los Angeles", x: 35, y: 55, utility: "SCE" },
  { id: "riverside", name: "Riverside", x: 48, y: 58, utility: "SCE" },
  { id: "san-bernardino", name: "San Bernardino", x: 52, y: 52, utility: "SCE" },
  { id: "pasadena", name: "Pasadena", x: 38, y: 52, utility: "SCE" },
  { id: "torrance", name: "Torrance", x: 32, y: 58, utility: "SCE" },
  { id: "anaheim", name: "Anaheim", x: 40, y: 60, utility: "SCE" },
  { id: "santa-ana", name: "Santa Ana", x: 40, y: 64, utility: "SCE" },
  { id: "corona", name: "Corona", x: 46, y: 56, utility: "SCE" },
  { id: " Ontario", name: "Ontario", x: 50, y: 54, utility: "SCE" },
  { id: "rancho-cucamonga", name: "Rancho Cucamonga", x: 54, y: 50, utility: "SCE" },
  
  // Central/Northern California (PG&E)
  { id: "fresno", name: "Fresno", x: 42, y: 38, utility: "PG&E" },
  { id: "bakersfield", name: "Bakersfield", x: 38, y: 42, utility: "PG&E" },
  { id: "san-jose", name: "San Jose", x: 22, y: 22, utility: "PG&E" },
  { id: "san-francisco", name: "San Francisco", x: 18, y: 18, utility: "PG&E" },
  { id: "oakland", name: "Oakland", x: 20, y: 20, utility: "PG&E" },
  { id: "sacramento", name: "Sacramento", x: 28, y: 16, utility: "PG&E" },
  { id: "stockton", name: "Stockton", x: 32, y: 20, utility: "PG&E" },
  { id: "modesto", name: "Modesto", x: 34, y: 24, utility: "PG&E" },
];

const utilityColors = {
  SCE: { bg: "bg-purple-500", border: "border-purple-300", label: "SCE" },
  "PG&E": { bg: "bg-blue-500", border: "border-blue-300", label: "PG&E" },
  "SDG&E": { bg: "bg-orange-500", border: "border-orange-300", label: "SDG&E" },
};

const CaliforniaMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [activeUtility, setActiveUtility] = useState<string | null>(null);

  const filteredRegions = activeUtility
    ? serviceRegions.filter((r) => r.utility === activeUtility)
    : serviceRegions;

  return (
    <div className="w-full">
      {/* Map Container */}
      <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
        {/* California SVG outline */}
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* California shape - simplified */}
          <path
            d="M20 5 
               L28 2 
               L35 8 
               L32 15 
               L45 25 
               L55 30 
               L70 35 
               L75 45 
               L72 55 
               L78 65 
               L82 75 
               L78 85 
               L72 95 
               L68 105 
               L62 112 
               L55 115 
               L48 110 
               L42 100 
               L38 90 
               L32 80 
               L28 70 
               L22 60 
               L18 50 
               L15 40 
               L12 30 
               L15 20 
               L18 10 
               Z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
          
          {/* Utility territory boundaries (simplified) */}
          {/* PG&E - Northern/Central */}
          <path
            d="M15 40 L72 55 L78 65 L75 45 L70 35 L55 30 L45 25 L32 15 L28 15 L20 20 L15 30 Z"
            fill="rgba(59,130,246,0.05)"
            stroke="rgba(59,130,246,0.15)"
            strokeWidth="0.3"
            strokeDasharray="2 2"
          />
          {/* SCE - Southern */}
          <path
            d="M15 40 L72 55 L78 65 L82 75 L78 85 L72 95 L68 105 L62 112 L55 115 L48 110 L42 100 L38 90 L32 80 L28 70 L22 60 L18 50 Z"
            fill="rgba(168,85,247,0.05)"
            stroke="rgba(168,85,247,0.15)"
            strokeWidth="0.3"
            strokeDasharray="2 2"
          />
          {/* SDG&E - San Diego area */}
          <path
            d="M68 105 L72 95 L78 85 L82 75 L78 85 L72 95 L68 105 L62 112 L55 115 L62 112 Z"
            fill="rgba(249,115,22,0.05)"
            stroke="rgba(249,115,22,0.15)"
            strokeWidth="0.3"
            strokeDasharray="2 2"
          />
        </svg>

        {/* Service region markers */}
        {filteredRegions.map((region) => {
          const colors = utilityColors[region.utility];
          return (
            <div
              key={region.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${region.x}%`, top: `${region.y}%` }}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              {/* Pulse ring */}
              <span 
                className={`absolute inline-flex h-full w-full rounded-full ${colors.bg} opacity-30 animate-ping`} 
                style={{ animationDuration: '2s' }} 
              />
              
              {/* Marker dot */}
              <div
                className={`relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${colors.bg} ${colors.border} shadow-md ${colors.bg.replace('bg-', 'shadow-')}/30 ${
                  hoveredRegion === region.id 
                    ? "scale-150 shadow-lg" 
                    : ""
                }`}
              />

              {/* Label - shows on hover */}
              <div
                className={`absolute top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                  hoveredRegion === region.id 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-1 pointer-events-none"
                }`}
              >
                <span className={`text-[9px] sm:text-[10px] font-medium text-white ${colors.bg} px-2 py-0.5 rounded-full`}>
                  {region.name}
                </span>
              </div>
            </div>
          );
        })}

        {/* Major city labels */}
        <div className="absolute text-[10px] text-white/30 font-medium" style={{ left: '30%', top: '52%' }}>
          Los Angeles
        </div>
        <div className="absolute text-[10px] text-white/30 font-medium" style={{ left: '15%', top: '18%' }}>
          San Francisco
        </div>
        <div className="absolute text-[10px] text-white/30 font-medium" style={{ right: '15%', top: '75%' }}>
          San Diego
        </div>
      </div>

      {/* Utility Legend */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {Object.entries(utilityColors).map(([utility, colors]) => (
          <button
            key={utility}
            onClick={() => setActiveUtility(activeUtility === utility ? null : utility)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              activeUtility === utility || activeUtility === null
                ? "bg-white/10 text-white border border-white/20"
                : "bg-white/5 text-white/40 border border-white/10"
            } ${activeUtility === utility ? "ring-1 ring-purple-400/50" : ""}`}
          >
            <span className={`w-2 h-2 rounded-full ${colors.bg}`} />
            {utility}
          </button>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        {[
          { label: "Southern CA", count: serviceRegions.filter(r => r.utility === "SCE").length, color: "text-purple-400" },
          { label: "Northern CA", count: serviceRegions.filter(r => r.utility === "PG&E").length, color: "text-blue-400" },
          { label: "San Diego", count: serviceRegions.filter(r => r.utility === "SDG&E").length, color: "text-orange-400" },
        ].map((stat) => (
          <div 
            key={stat.label}
            className="text-center p-3 rounded-xl bg-white/5 border border-white/10"
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
