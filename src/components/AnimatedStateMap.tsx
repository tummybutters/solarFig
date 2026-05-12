import { useEffect, useId, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { MapGeometry } from "@/data/locations";

interface AnimatedStateMapProps {
  className?: string;
  dotCount?: number;
  geometry: MapGeometry;
  label: string;
  seed: number;
}

type Dot = {
  id: string;
  x: number;
  y: number;
  delay: number;
  tone: "bright" | "soft" | "deep";
};

const MAP_REVEAL_MS = 3000;
const DOT_POP_MS = 560;

const nextSeed = (value: number) => (value * 1664525 + 1013904223) >>> 0;

const markerStyles: Record<Dot["tone"], { fill: string; border: string }> = {
  bright: { fill: "#a855f7", border: "#d8b4fe" },
  soft: { fill: "#d8b4fe", border: "#e9d5ff" },
  deep: { fill: "#7e22ce", border: "#a855f7" },
};

const parseViewBox = (viewBox: string) => {
  const [minX, minY, width, height] = viewBox.split(/\s+/).map(Number);
  return { minX, minY, width, height };
};

const AnimatedStateMap = ({ className, dotCount = 185, geometry, label, seed }: AnimatedStateMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapInView, setIsMapInView] = useState(false);
  const clipId = `state-map-${useId().replaceAll(":", "")}`;
  const { minX, minY, width, height } = useMemo(() => parseViewBox(geometry.viewBox), [geometry.viewBox]);
  const strokeWidth = Math.max(width, height) * 0.014;

  useEffect(() => {
    const node = mapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMapInView(entry.isIntersecting);
      },
      { threshold: 0.42 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const dots = useMemo<Dot[]>(() => {
    const seeded: Dot[] = [];
    let seedValue = seed;

    for (let i = 0; i < dotCount; i += 1) {
      seedValue = nextSeed(seedValue);
      const xRandom = seedValue / 4294967295;
      seedValue = nextSeed(seedValue);
      const yRandom = seedValue / 4294967295;
      seedValue = nextSeed(seedValue);
      const toneRandom = seedValue / 4294967295;

      const x = minX + width * (0.08 + xRandom * 0.84);
      const y = minY + height * (0.08 + yRandom * 0.84);
      const tone = toneRandom > 0.72 ? "deep" : toneRandom > 0.38 ? "bright" : "soft";

      seeded.push({
        id: `${label}-${i + 1}`,
        x: Number(x.toFixed(2)),
        y: Number(y.toFixed(2)),
        tone,
        delay: 0,
      });
    }

    const step = (MAP_REVEAL_MS - DOT_POP_MS) / Math.max(seeded.length - 1, 1);
    return seeded.map((dot, index) => ({ ...dot, delay: Math.round(index * step) }));
  }, [dotCount, height, label, minX, minY, seed, width]);

  const markerSize = Math.max(width, height) * 0.014;
  const pulseSize = markerSize * 1.72;

  return (
    <div className="w-full">
      <div ref={mapRef} className={cn("relative mx-auto w-full", className)}>
        <svg viewBox={geometry.viewBox} className="w-full" role="img" aria-label={`${label} service map`}>
          {geometry.paths.map((path, index) => (
            <path
              key={`shadow-${index}`}
              d={path}
              fill="transparent"
              stroke="rgba(0,0,0,0.15)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth * 0.82}
            />
          ))}

          {geometry.paths.map((path, index) => (
            <path
              key={`outline-${index}`}
              d={path}
              className="transition-all ease-in-out"
              fill={isMapInView ? "rgba(109,57,181,0.08)" : "transparent"}
              pathLength={1}
              stroke="rgba(109,57,181,0.85)"
              strokeDasharray={1}
              strokeDashoffset={isMapInView ? 0 : 1}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              style={{ transitionDuration: `${MAP_REVEAL_MS}ms` }}
            />
          ))}
        </svg>

        <svg viewBox={geometry.viewBox} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <clipPath id={clipId}>
              {geometry.paths.map((path, index) => (
                <path key={`clip-${index}`} d={path} />
              ))}
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId})`}>
            {dots.map((dot) => {
              const colors = markerStyles[dot.tone];

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
                    fill={colors.fill}
                    height={pulseSize}
                    width={pulseSize}
                    x={dot.x - pulseSize / 2}
                    y={dot.y - pulseSize / 2}
                    style={{
                      opacity: 0.22,
                      filter: "blur(0.5px)",
                    }}
                  />
                  <rect
                    fill={colors.fill}
                    height={markerSize}
                    stroke={colors.border}
                    strokeWidth={strokeWidth * 0.27}
                    width={markerSize}
                    x={dot.x - markerSize / 2}
                    y={dot.y - markerSize / 2}
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

export default AnimatedStateMap;
