import { useState } from "react";

interface State {
  id: string;
  name: string;
  x: number;
  y: number;
}

// 22 active states with approximate coordinates on US map
const activeStates: State[] = [
  { id: "AZ", name: "Arizona", x: 20, y: 62 },
  { id: "CA", name: "California", x: 10, y: 50 },
  { id: "CO", name: "Colorado", x: 30, y: 48 },
  { id: "CT", name: "Connecticut", x: 88, y: 30 },
  { id: "DE", name: "Delaware", x: 84, y: 42 },
  { id: "FL", name: "Florida", x: 78, y: 78 },
  { id: "IL", name: "Illinois", x: 65, y: 40 },
  { id: "MD", name: "Maryland", x: 82, y: 44 },
  { id: "MA", name: "Massachusetts", x: 90, y: 28 },
  { id: "NV", name: "Nevada", x: 16, y: 42 },
  { id: "NH", name: "New Hampshire", x: 87, y: 24 },
  { id: "NJ", name: "New Jersey", x: 86, y: 38 },
  { id: "NM", name: "New Mexico", x: 28, y: 62 },
  { id: "NY", name: "New York", x: 82, y: 30 },
  { id: "OH", name: "Ohio", x: 72, y: 38 },
  { id: "PA", name: "Pennsylvania", x: 78, y: 36 },
  { id: "RI", name: "Rhode Island", x: 92, y: 30 },
  { id: "SC", name: "South Carolina", x: 82, y: 60 },
  { id: "TX", name: "Texas", x: 48, y: 70 },
  { id: "UT", name: "Utah", x: 24, y: 44 },
  { id: "VT", name: "Vermont", x: 85, y: 22 },
  { id: "VA", name: "Virginia", x: 80, y: 48 },
];

// Inactive states for visual context
const inactiveStates: State[] = [
  { id: "WA", name: "Washington", x: 12, y: 12 },
  { id: "OR", name: "Oregon", x: 10, y: 26 },
  { id: "ID", name: "Idaho", x: 20, y: 20 },
  { id: "MT", name: "Montana", x: 28, y: 14 },
  { id: "WY", name: "Wyoming", x: 30, y: 32 },
  { id: "ND", name: "North Dakota", x: 45, y: 16 },
  { id: "SD", name: "South Dakota", x: 46, y: 26 },
  { id: "NE", name: "Nebraska", x: 48, y: 36 },
  { id: "KS", name: "Kansas", x: 50, y: 46 },
  { id: "OK", name: "Oklahoma", x: 52, y: 56 },
  { id: "MN", name: "Minnesota", x: 55, y: 22 },
  { id: "IA", name: "Iowa", x: 56, y: 34 },
  { id: "MO", name: "Missouri", x: 58, y: 44 },
  { id: "AR", name: "Arkansas", x: 60, y: 56 },
  { id: "LA", name: "Louisiana", x: 62, y: 68 },
  { id: "WI", name: "Wisconsin", x: 62, y: 28 },
  { id: "MI", name: "Michigan", x: 70, y: 30 },
  { id: "IN", name: "Indiana", x: 68, y: 40 },
  { id: "KY", name: "Kentucky", x: 72, y: 48 },
  { id: "TN", name: "Tennessee", x: 72, y: 55 },
  { id: "NC", name: "North Carolina", x: 84, y: 54 },
  { id: "GA", name: "Georgia", x: 78, y: 64 },
  { id: "AL", name: "Alabama", x: 72, y: 64 },
  { id: "MS", name: "Mississippi", x: 65, y: 66 },
  { id: "ME", name: "Maine", x: 92, y: 18 },
  { id: "WV", name: "West Virginia", x: 76, y: 44 },
];

const USMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [, setHoveredRegion] = useState<string | null>(null);

  // Group active states by region for stats
  const regions = {
    "West": activeStates.filter(s => ["CA", "NV", "AZ", "UT", "CO", "NM"].includes(s.id)),
    "Southwest": activeStates.filter(s => ["TX"].includes(s.id)),
    "Northeast": activeStates.filter(s => ["NY", "NJ", "PA", "CT", "MA", "RI", "VT", "NH", "ME"].includes(s.id)),
    "Mid-Atlantic": activeStates.filter(s => ["MD", "DE", "VA"].includes(s.id)),
    "Southeast": activeStates.filter(s => ["FL", "SC"].includes(s.id)),
    "Midwest": activeStates.filter(s => ["IL", "OH"].includes(s.id)),
  };

  return (
    <div className="w-full">
      {/* Map Container */}
      <div className="relative w-full aspect-[2/1.3] max-w-3xl mx-auto">
        {/* US Map SVG outline */}
        <svg
          viewBox="0 0 100 80"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* US outline - simplified continental shape */}
          <path
            d="M8 5 L92 5 L95 25 L90 35 L88 40 L92 50 L88 60 L85 65 L82 75 L78 78 
               L75 75 L70 78 L65 75 L60 78 L55 75 L50 78 L45 72 L35 75 L30 68 
               L25 72 L20 68 L15 55 L10 45 L8 35 L5 25 Z"
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Inactive State markers */}
        {inactiveStates.map((state) => (
          <div
            key={state.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${state.x}%`, top: `${state.y}%` }}
          >
            <div className="w-2 h-2 rounded-none bg-gray-700/50 border border-gray-600/30 opacity-30" />
          </div>
        ))}

        {/* Active State markers */}
        {activeStates.map((state) => (
          <div
            key={state.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${state.x}%`, top: `${state.y}%` }}
            onMouseEnter={() => setHoveredState(state.id)}
            onMouseLeave={() => setHoveredState(null)}
          >
            {/* Pulse ring */}
            <span className="absolute inline-flex h-full w-full rounded-none bg-purple-400 opacity-30 animate-ping" style={{ animationDuration: '2s' }} />
            
            {/* Marker dot */}
            <div
              className={`relative w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-none border-2 transition-all duration-300 cursor-pointer ${
                hoveredState === state.id 
                  ? "bg-purple-400 border-purple-200 scale-150 shadow-lg shadow-purple-500/50" 
                  : "bg-purple-600 border-purple-300 shadow-md shadow-purple-500/30"
              }`}
            />

            {/* Label - shows on hover or always for larger screens */}
            <div
              className={`absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                hoveredState === state.id 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              <span className="text-[9px] sm:text-[10px] font-medium text-white bg-purple-600/90 px-2 py-0.5 rounded-none">
                {state.name}
              </span>
            </div>
          </div>
        ))}

        {/* Region Labels */}
        <div 
          className="absolute text-[10px] text-white/20 font-medium tracking-widest uppercase"
          style={{ left: '12%', top: '35%' }}
        >
          West
        </div>
        <div 
          className="absolute text-[10px] text-white/20 font-medium tracking-widest uppercase"
          style={{ left: '45%', top: '62%' }}
        >
          Texas
        </div>
        <div 
          className="absolute text-[10px] text-white/20 font-medium tracking-widest uppercase"
          style={{ left: '65%', top: '32%' }}
        >
          Midwest
        </div>
        <div 
          className="absolute text-[10px] text-white/20 font-medium tracking-widest uppercase"
          style={{ left: '85%', top: '25%' }}
        >
          Northeast
        </div>
        <div 
          className="absolute text-[10px] text-white/20 font-medium tracking-widest uppercase"
          style={{ left: '80%', top: '68%' }}
        >
          Southeast
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-8">
        {Object.entries(regions).filter(([, states]) => states.length > 0).map(([region, states]) => (
          <div 
            key={region}
            className="text-center p-3 rounded-none bg-white/5 border border-white/10 transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-500/30"
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
          >
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">{states.length}</div>
            <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wide">{region}</div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="text-center mt-4">
        <span className="text-white/40 text-sm">
          <span className="text-white font-semibold">{activeStates.length}</span> states and growing
        </span>
      </div>
    </div>
  );
};

export default USMap;
