import { useEffect, useMemo, useRef, useState } from "react";

interface Dot {
  id: string;
  x: number;
  y: number;
  delay: number;
  utility: "SCE" | "PG&E" | "SDG&E";
}

const MAP_REVEAL_MS = 3000;
const DOT_POP_MS = 560;
const GLOW_SQUARE_COUNT = 185;
const SEED = 7331;

const nextSeed = (value: number) => (value * 1664525 + 1013904223) >>> 0;

const utilityMarkerStyles: Record<Dot["utility"], { fill: string; border: string }> = {
  SCE: { fill: "#a855f7", border: "#d8b4fe" },
  "PG&E": { fill: "#d8b4fe", border: "#e9d5ff" },
  "SDG&E": { fill: "#7e22ce", border: "#a855f7" },
};

const californiaPath =
  "M 14.544 6.626 L 22.194 6.56 L 34.209 6.758 L 43.478 6.758 L 43.527 27.334 L 43.478 42.044 L 55.002 52.328 L 65.889 62.302 L 74.471 70.331 L 80.65 76.229 L 91.537 86.889 L 91.537 88.265 L 93.009 90.057 L 94.235 92.916 L 96 94.461 L 94.921 95.884 L 93.499 96.595 L 92.42 98.489 L 92.763 101.027 L 92.518 102.617 L 90.704 104.146 L 91.292 108.132 L 92.518 108.19 L 93.009 110.177 L 92.518 111.11 L 90.753 111.519 L 78.885 112.509 L 69.224 113.44 L 68.145 112.043 L 68.096 109.827 L 67.409 107.195 L 66.134 105.32 L 63.339 102.735 L 59.759 100.319 L 59.072 100.968 L 57.699 100.555 L 57.896 99.493 L 56.326 97.306 L 54.217 97.779 L 50.49 96.181 L 49.951 94.876 L 47.45 93.272 L 44.606 93.332 L 42.252 92.618 L 39.26 92.916 L 37.691 91.487 L 38.034 88.444 L 37.495 87.966 L 37.838 85.811 L 35.484 84.191 L 35.386 81.966 L 34.503 81.846 L 33.032 79.917 L 32.002 79.495 L 31.561 78.287 L 28.128 73.741 L 26.51 72.403 L 26.166 68.805 L 26.853 69.11 L 27.49 66.969 L 26.215 65.007 L 24.646 65.252 L 22.586 63.471 L 21.851 62.055 L 21.998 60.699 L 20.968 58.908 L 20.968 55.935 L 22.635 55.935 L 21.949 51.767 L 21.213 52.203 L 21.066 54.257 L 19.301 54.693 L 17.192 53.138 L 16.849 50.456 L 15.475 48.33 L 13.661 47.014 L 12.68 45.507 L 10.032 42.548 L 10.473 41.665 L 9.247 37.805 L 9.787 35.645 L 9.002 32.395 L 6.697 29.195 L 4.441 27.398 L 4 25.275 L 6.256 20.103 L 6.697 18.35 L 6.256 16.983 L 7.09 13.394 L 6.354 10.116 L 5.373 9.327 L 5.765 6.692 L 14.544 6.626 Z";

const CaliforniaMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isMapInView, setIsMapInView] = useState(false);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }

    const node = mapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMapInView(entry.isIntersecting);
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const dots = useMemo<Dot[]>(() => {
    const seeded: Dot[] = [];
    let seedValue = SEED;

    for (let i = 0; i < GLOW_SQUARE_COUNT; i += 1) {
      seedValue = nextSeed(seedValue);
      const xRandom = seedValue / 4294967295;
      seedValue = nextSeed(seedValue);
      const yRandom = seedValue / 4294967295;
      seedValue = nextSeed(seedValue);
      const xJitter = seedValue / 4294967295;

      const x = 12 + xRandom * 76 + (xJitter - 0.5) * 0.7;
      const y = 10 + yRandom * 102;

      let utility: Dot["utility"] = "PG&E";
      if (y > 80) utility = "SDG&E";
      else if (y > 58) utility = "SCE";

      seeded.push({
        id: `dot-${i + 1}`,
        x: Number(x.toFixed(2)),
        y: Number(y.toFixed(2)),
        utility,
        delay: 0,
      });
    }

    const step = (MAP_REVEAL_MS - DOT_POP_MS) / (seeded.length - 1);
    return seeded.map((dot, index) => ({ ...dot, delay: Math.round(index * step) }));
  }, []);

  return (
    <div className="w-full">
      <div ref={mapRef} className="relative mx-auto w-full max-w-[430px]">
        <svg viewBox="0 0 100 120" className="w-full" role="img" aria-label="California service map">
          <path
            d={californiaPath}
            fill="transparent"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          <path
            ref={pathRef}
            d={californiaPath}
            className="transition-all ease-in-out"
            style={{
              transitionDuration: `${MAP_REVEAL_MS}ms`,
              strokeDasharray: pathLength,
              strokeDashoffset: isMapInView ? 0 : pathLength,
            }}
            fill={isMapInView ? "rgba(109,57,181,0.08)" : "transparent"}
            stroke="rgba(109,57,181,0.85)"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        <svg viewBox="0 0 100 120" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <clipPath id="locations-california-mask">
              <path d={californiaPath} />
            </clipPath>
          </defs>
          <g clipPath="url(#locations-california-mask)">
            {dots.map((dot) => {
              const colors = utilityMarkerStyles[dot.utility];
              const markerSize = 1.73;
              const pulseSize = 2.93;

              return (
                <g
                  key={dot.id}
                  style={{
                    opacity: isMapInView ? 1 : 0,
                    transition: `opacity ${DOT_POP_MS}ms cubic-bezier(0.22, 1, 0.36, 1) ${dot.delay}ms`,
                    willChange: "opacity",
                  }}
                >
                  <rect
                    x={dot.x - pulseSize / 2}
                    y={dot.y - pulseSize / 2}
                    width={pulseSize}
                    height={pulseSize}
                    fill={colors.fill}
                    style={{
                      opacity: 0.22,
                      filter: "blur(0.5px)",
                    }}
                  />
                  <rect
                    x={dot.x - markerSize / 2}
                    y={dot.y - markerSize / 2}
                    width={markerSize}
                    height={markerSize}
                    fill={colors.fill}
                    stroke={colors.border}
                    strokeWidth={0.42}
                    style={{ filter: "drop-shadow(0 0 2px rgba(124,58,237,0.38))" }}
                  />
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CaliforniaMap;
