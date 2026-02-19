import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const solutionCards = [
  {
    title: "Solar Panels",
    href: "/solar-panels",
    image: "/assets/install-gallery/install-01.png",
  },
  {
    title: "Battery Backup",
    href: "/battery",
    image: "/assets/battery/battery-tesla-powerwall-3-feature.jpg",
  },
  {
    title: "EV Chargers",
    href: "/ev-chargers",
    image: "/assets/ev-chargers/ev-home-01.png",
  },
  {
    title: "Smart Electrical Panels",
    href: "/smart-electrical-panels",
    image: "/assets/whole-home-solar/smart-panel-system.png",
  },
];

const reviews = [
  {
    quote: "Super clear process. Fast install. No surprises on pricing.",
    author: "Anita P., California",
  },
  {
    quote: "They helped us size correctly and the system has been excellent.",
    author: "Elizabeth S., California",
  },
  {
    quote: "Professional from consultation through PTO and follow-up.",
    author: "Warren F., California",
  },
];

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

const HomeEditorial = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isMapInView, setIsMapInView] = useState(false);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    // Initial path length
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }

    // Observer for map visibility
    const node = mapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsMapInView(entry.isIntersecting);
    }, { threshold: 0.45 });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollRail = (direction: "left" | "right") => {
    const node = railRef.current;
    if (!node) return;
    const amount = direction === "right" ? 420 : -420;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

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

  const californiaPath = "M 14.544 6.626 L 22.194 6.56 L 34.209 6.758 L 43.478 6.758 L 43.527 27.334 L 43.478 42.044 L 55.002 52.328 L 65.889 62.302 L 74.471 70.331 L 80.65 76.229 L 91.537 86.889 L 91.537 88.265 L 93.009 90.057 L 94.235 92.916 L 96 94.461 L 94.921 95.884 L 93.499 96.595 L 92.42 98.489 L 92.763 101.027 L 92.518 102.617 L 90.704 104.146 L 91.292 108.132 L 92.518 108.19 L 93.009 110.177 L 92.518 111.11 L 90.753 111.519 L 78.885 112.509 L 69.224 113.44 L 68.145 112.043 L 68.096 109.827 L 67.409 107.195 L 66.134 105.32 L 63.339 102.735 L 59.759 100.319 L 59.072 100.968 L 57.699 100.555 L 57.896 99.493 L 56.326 97.306 L 54.217 97.779 L 50.49 96.181 L 49.951 94.876 L 47.45 93.272 L 44.606 93.332 L 42.252 92.618 L 39.26 92.916 L 37.691 91.487 L 38.034 88.444 L 37.495 87.966 L 37.838 85.811 L 35.484 84.191 L 35.386 81.966 L 34.503 81.846 L 33.032 79.917 L 32.002 79.495 L 31.561 78.287 L 28.128 73.741 L 26.51 72.403 L 26.166 68.805 L 26.853 69.11 L 27.49 66.969 L 26.215 65.007 L 24.646 65.252 L 22.586 63.471 L 21.851 62.055 L 21.998 60.699 L 20.968 58.908 L 20.968 55.935 L 22.635 55.935 L 21.949 51.767 L 21.213 52.203 L 21.066 54.257 L 19.301 54.693 L 17.192 53.138 L 16.849 50.456 L 15.475 48.33 L 13.661 47.014 L 12.68 45.507 L 10.032 42.548 L 10.473 41.665 L 9.247 37.805 L 9.787 35.645 L 9.002 32.395 L 6.697 29.195 L 4.441 27.398 L 4 25.275 L 6.256 20.103 L 6.697 18.35 L 6.256 16.983 L 7.09 13.394 L 6.354 10.116 L 5.373 9.327 L 5.765 6.692 L 14.544 6.626 Z";

  return (
    <>
      <section className="bg-[#eee5f9] py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d39b5]">Solutions</p>
              <h2 className="mt-4 text-4xl leading-[1.02] tracking-tight text-[#241d2f] sm:text-6xl">
                A smarter home energy stack, without the noise.
              </h2>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <button
                onClick={() => scrollRail("left")}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#cebce3] bg-white text-[#62577d] transition-colors hover:border-[#6d39b5] hover:text-[#6d39b5]"
                aria-label="Scroll solutions left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollRail("right")}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#cebce3] bg-white text-[#62577d] transition-colors hover:border-[#6d39b5] hover:text-[#6d39b5]"
                aria-label="Scroll solutions right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div ref={railRef} className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2 sm:gap-6">
            {solutionCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group relative block h-[390px] min-w-[270px] snap-start overflow-hidden rounded-2xl border border-black/5 sm:h-[480px] sm:min-w-[360px] sm:rounded-3xl"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-6 sm:right-6">
                  <h3 className="max-w-[80%] text-3xl leading-none tracking-tight text-white sm:text-5xl">
                    {card.title}
                  </h3>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3ecfa] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8">
          <div>
            <h2 className="max-w-3xl text-5xl leading-[1.02] tracking-tight text-[#241d2f] sm:text-7xl">
              California utilities are tough. We design for reality.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
            <div ref={mapRef} className="relative mx-auto w-full max-w-[430px]">
              <svg
                viewBox="0 0 100 120"
                className="w-full"
                role="img"
                aria-label="California service map"
              >
                <defs>
                  <clipPath id="california-mask">
                    <path d={californiaPath} />
                  </clipPath>
                </defs>

                {/* Background Black Path (The "Food") */}
                <path
                  d={californiaPath}
                  fill="transparent"
                  stroke="rgba(0,0,0,0.15)"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Foreground Purple Path (The "Snake") */}
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
              <svg viewBox="0 0 100 120" className="pointer-events-none absolute inset-0 h-full w-full">
                <g clipPath="url(#california-mask)">
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

            <div>
              <h3 className="text-4xl leading-tight text-[#2a2238]">Find Your Utility Territory</h3>
              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 text-lg text-[#3a314d]">
                <a href="/locations#sce" className="transition-colors hover:text-[#6d39b5]">SCE</a>
                <a href="/locations#pge" className="transition-colors hover:text-[#6d39b5]">PG&E</a>
                <a href="/locations#sdge" className="transition-colors hover:text-[#6d39b5]">SDG&E</a>
                <a href="/locations" className="transition-colors hover:text-[#6d39b5]">Full Coverage Map</a>
              </div>
              <a
                href="/locations"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5] transition-colors hover:text-[#4d2880]"
              >
                Explore Locations
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e6dbf4] py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] rounded-3xl border border-black/5 bg-[#e9dff7] px-5 py-8 sm:rounded-[32px] sm:px-10 sm:py-14">
          <div className="relative">
            <div className="pointer-events-none absolute -right-4 -top-12 h-56 w-56 rounded-full bg-[repeating-radial-gradient(circle,_rgba(109,57,181,0.16),_rgba(109,57,181,0.16)_2px,_transparent_2px,_transparent_10px)] blur-[1px]" />
            <p className="mb-4 flex gap-2 text-[#241d2f]">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </p>
            <h2 className="max-w-3xl text-5xl leading-none tracking-tight text-[#241d2f] sm:text-7xl">
              500+ Installations
            </h2>
            <p className="mt-4 text-lg text-[#423751]">Hundreds of 5-star reviews</p>
            <p className="mt-2 text-lg text-[#423751]">Google · SolarReviews · Facebook · Birdeye</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.author} className="rounded-3xl bg-white px-6 py-7">
                <p className="text-base leading-8 text-[#332b47]">“{review.quote}”</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#63557f]">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eefb] pb-16 sm:pb-24">
        <div className="h-[200px] w-full overflow-hidden sm:h-[300px]">
          <img src="/assets/install-gallery/install-05.jpg" alt="Solarfig team on-site" className="h-full w-full object-cover" />
        </div>

        <div className="mx-auto mt-10 grid max-w-[1080px] gap-5 px-4 sm:mt-12 sm:gap-6 sm:px-6 lg:grid-cols-2">
          <a href="/pricing-costs" className="rounded-2xl bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d39b5]">Plans & Services</p>
            <h3 className="mt-4 text-4xl leading-tight text-[#241d2f]">A plan for every home.</h3>
            <p className="mt-4 text-[#4b4261]">Simple options. Clear pricing. Built around your home and goals.</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
              View Plans
              <ArrowRight className="h-4 w-4" />
            </p>
          </a>

          <a href="/whole-home-solar" className="rounded-2xl bg-[#6d39b5] p-6 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">Whole Home Solar</p>
            <h3 className="mt-4 text-4xl leading-tight text-white">One smart system. Total control.</h3>
            <p className="mt-4 text-purple-100/80">Solar, storage, and smart load support designed as one connected stack.</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Explore System
              <ArrowRight className="h-4 w-4" />
            </p>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeEditorial;
