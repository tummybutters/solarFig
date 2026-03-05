import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface OregonMapProps {
  className?: string;
}

interface Dot {
  id: string;
  x: number;
  y: number;
  delay: number;
  region: "Portland" | "Salem" | "Eugene";
}

const MAP_REVEAL_MS = 3000;
const DOT_POP_MS = 560;
const GLOW_SQUARE_COUNT = 185;
const SEED = 1937;
const MAX_DOT_PLACEMENT_ATTEMPTS = 36;

const nextSeed = (value: number) => (value * 1664525 + 1013904223) >>> 0;
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const regionMarkerStyles: Record<Dot["region"], { fill: string; border: string }> = {
  Portland: { fill: "#a855f7", border: "#d8b4fe" },
  Salem: { fill: "#d8b4fe", border: "#e9d5ff" },
  Eugene: { fill: "#7e22ce", border: "#a855f7" },
};

const oregonPath =
  "M 12.944 4.040 L 14.770 4.587 L 16.230 4.587 L 16.960 4.040 L 17.690 4.040 L 19.151 4.587 L 20.976 4.587 L 22.437 5.317 L 23.714 6.595 L 24.627 9.151 L 24.992 13.167 L 26.270 14.444 L 28.460 14.992 L 34.667 14.810 L 37.222 12.802 L 41.056 13.167 L 43.063 14.992 L 43.794 14.992 L 44.524 13.897 L 47.079 13.897 L 50.183 11.889 L 51.460 12.984 L 53.833 12.984 L 54.746 12.802 L 56.571 11.159 L 59.675 10.794 L 62.960 9.333 L 66.976 9.333 L 68.984 7.325 L 88.698 7.143 L 89.063 6.778 L 91.071 6.595 L 91.254 7.325 L 93.444 10.063 L 96.000 12.437 L 96.000 13.167 L 94.905 15.540 L 94.175 19.556 L 91.984 23.754 L 91.802 25.214 L 92.167 25.579 L 89.611 31.056 L 88.881 33.794 L 88.881 35.071 L 89.976 37.262 L 91.619 37.627 L 92.532 38.540 L 91.802 41.278 L 91.984 43.103 L 91.071 44.198 L 92.349 74.865 L 79.937 75.595 L 55.476 75.960 L 43.246 75.960 L 9.294 75.048 L 6.738 74.317 L 5.643 72.492 L 4.913 69.754 L 5.825 65.008 L 4.000 61.357 L 6.008 56.976 L 6.008 53.690 L 8.563 52.413 L 7.833 49.127 L 9.111 46.937 L 8.929 42.738 L 9.841 40.913 L 10.571 33.063 L 10.937 31.968 L 11.484 31.603 L 10.937 27.222 L 12.032 21.381 L 12.214 16.452 L 13.675 16.452 L 13.492 12.619 L 12.579 11.341 L 12.397 9.333 L 12.397 7.325 L 13.127 6.595 L 12.944 4.222 Z";
const dotBoundaryCurve = [
  { x: 44, y: 67.5 },
  { x: 49, y: 61.8 },
  { x: 53, y: 53.4 },
  { x: 56, y: 44.8 },
  { x: 59, y: 38.7 },
  { x: 64, y: 34.2 },
  { x: 72, y: 31.6 },
  { x: 83, y: 30.1 },
  { x: 90, y: 29.9 },
] as const;

const getDotBoundaryY = (x: number) => {
  if (x <= dotBoundaryCurve[0].x) return dotBoundaryCurve[0].y;
  if (x >= dotBoundaryCurve[dotBoundaryCurve.length - 1].x) {
    return dotBoundaryCurve[dotBoundaryCurve.length - 1].y;
  }

  for (let i = 0; i < dotBoundaryCurve.length - 1; i += 1) {
    const current = dotBoundaryCurve[i];
    const next = dotBoundaryCurve[i + 1];
    if (x >= current.x && x <= next.x) {
      const ratio = (x - current.x) / (next.x - current.x);
      return current.y + (next.y - current.y) * ratio;
    }
  }

  return dotBoundaryCurve[0].y;
};

const isInsideDotRegion = (x: number, y: number) => {
  if (x < 44) return true;
  return y <= getDotBoundaryY(x);
};

const OregonMap = ({ className }: OregonMapProps) => {
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
      let x = 10;
      let y = 8;
      let attempts = 0;

      while (attempts < MAX_DOT_PLACEMENT_ATTEMPTS) {
        seedValue = nextSeed(seedValue);
        const xRandom = seedValue / 4294967295;
        seedValue = nextSeed(seedValue);
        const yRandom = seedValue / 4294967295;
        seedValue = nextSeed(seedValue);
        const xJitter = seedValue / 4294967295;

        x = clamp(9 + xRandom * 82 + (xJitter - 0.5) * 0.7, 8.8, 92);
        y = clamp(8 + yRandom * 66, 8, 74);

        if (isInsideDotRegion(x, y)) {
          break;
        }

        attempts += 1;
      }

      let region: Dot["region"];
      if (y < 29) region = "Portland";
      else if (y > 52) region = "Eugene";
      else region = "Salem";

      seeded.push({
        id: `or-dot-${i + 1}`,
        x: Number(x.toFixed(2)),
        y: Number(y.toFixed(2)),
        region,
        delay: 0,
      });
    }

    const step = (MAP_REVEAL_MS - DOT_POP_MS) / (seeded.length - 1);
    return seeded.map((dot, index) => ({ ...dot, delay: Math.round(index * step) }));
  }, []);

  return (
    <div className="w-full">
      <div ref={mapRef} className={cn("relative mx-auto w-full", className)}>
        <svg viewBox="0 0 100 80" className="w-full" role="img" aria-label="Oregon service map">
          <path
            d={oregonPath}
            fill="transparent"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          <path
            ref={pathRef}
            d={oregonPath}
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

        <svg viewBox="0 0 100 80" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <clipPath id="locations-oregon-mask">
              <path d={oregonPath} />
            </clipPath>
          </defs>
          <g clipPath="url(#locations-oregon-mask)">
            {dots.map((dot) => {
              const colors = regionMarkerStyles[dot.region];
              const markerSize = 1.55;
              const pulseSize = 2.65;

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

export default OregonMap;
