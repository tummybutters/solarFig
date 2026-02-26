import { ArrowRight, Star } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const solutionCards = [
  {
    title: "Solar Panels",
    href: "/solar-panels",
    image: "/assets/install-gallery/install-01.png",
  },
  {
    title: "Microinverters",
    href: "/microinverters",
    image: "/assets/install-gallery/install-04.jpg",
  },
  {
    title: "Battery Backup",
    href: "/battery",
    image: "/assets/battery/battery-tesla-powerwall-3-feature.jpg",
  },
];

const reviews = [
  {
    quote:
      "Super clear process from day one. They walked us through production assumptions, financing options, and exactly how our utility bill would change month by month. Installation was fast, clean, and organized, and every permit or inspection update came before we had to ask. The final numbers matched the proposal, with no surprise add-ons.",
    author: "Anita P., California",
  },
  {
    quote:
      "They did not try to oversell us. The design team sized the system around how we actually use power, including EV charging and summer AC load, then explained why a battery made sense for evening rates. Everything has performed exactly like they said it would, and the monitoring visibility has been excellent since PTO.",
    author: "Elizabeth S., California",
  },
  {
    quote:
      "Professional from consultation through PTO and follow-up. The crew treated our home carefully, communication was consistent, and every milestone had clear next steps. Even after activation, they stayed responsive for questions and optimization tips. It felt like a real long-term partner, not a company that disappears after install day.",
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
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d39b5]">Solutions</p>
              <h2 className="mt-4 text-4xl leading-[1.02] tracking-tight text-[#241d2f] sm:text-6xl">
                Energy Solutions without the noise.
              </h2>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group relative block h-[390px] overflow-hidden rounded-2xl border border-black/5 sm:h-[480px] sm:rounded-3xl"
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
              The grid is unpredictable. Your power shouldn&apos;t be.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.15fr]">
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

            <div className="lg:pl-2">
              <h3 className="max-w-md text-5xl leading-[1.06] tracking-tight text-[#2a2238] sm:text-6xl">
                Power Your Home With Solar
              </h3>
              <a
                href="/locations"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5] transition-colors hover:text-[#4d2880]"
              >
                Explore Locations
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9dff7] py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1680px] rounded-[30px] border border-[#d8cce8] bg-[#e9dff7] px-6 py-12 sm:rounded-[40px] sm:px-12 sm:py-16 lg:px-14 lg:py-20">
          <div className="relative">
            <div className="pointer-events-none absolute -right-8 -top-16 h-72 w-72 rounded-full bg-[repeating-radial-gradient(circle,_rgba(109,57,181,0.16),_rgba(109,57,181,0.16)_2px,_transparent_2px,_transparent_10px)] blur-[1px]" />
            <p className="mb-5 flex gap-3 text-[#241d2f]">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </p>
            <h2 className="max-w-4xl text-6xl leading-none tracking-tight text-[#241d2f] sm:text-8xl">
              500+ Installations
            </h2>
            <p className="mt-5 text-xl text-[#423751] sm:text-2xl">Hundreds of 5-star reviews</p>
            <p className="mt-3 text-xl text-[#423751] sm:text-2xl">Google · SolarReviews · Facebook · Birdeye</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.author}
                className="flex min-h-[260px] flex-col justify-between rounded-[26px] border border-[#e7dfef] bg-white px-8 py-9 shadow-[0_26px_48px_-34px_rgba(36,29,47,0.45)] sm:min-h-[320px] sm:px-10 sm:py-12 lg:min-h-[360px]"
              >
                <p className="text-xl leading-[1.6] text-[#332b47] sm:text-[1.75rem]">"{review.quote}"</p>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#63557f]">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eefb] pb-8 pt-10 sm:pb-10 sm:pt-14">
        <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-8">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[26px] shadow-[0_24px_70px_-34px_rgba(36,29,47,0.4)] sm:h-[420px] lg:h-[520px]">
            <img
              src="/assets/home-editorial/home-banner-solar-family-2026-02-19.png"
              alt="Family gathering outside a home with rooftop solar at sunset"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1231]/25 via-transparent to-[#402067]/10" />
          </div>
        </div>
      </section>

      <section className="bg-[#f4eefb] pb-16 pt-8 sm:pb-24 sm:pt-10">
        <div className="mx-auto grid max-w-[1320px] gap-5 px-4 sm:gap-6 sm:px-6 lg:grid-cols-3">
          <a
            href="/pricing-costs"
            className="flex h-full flex-col rounded-2xl border border-[#ded2ef] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d39b5]">Plans & Services</p>
            <h3 className="mt-4 text-4xl leading-tight text-[#241d2f]">A plan for every home.</h3>
            <p className="mt-4 text-[#4b4261]">Simple options. Clear pricing. Built around your home and goals.</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
              View Plans
              <ArrowRight className="h-4 w-4" />
            </p>
          </a>

          <a
            href="/installation"
            className="flex h-full flex-col rounded-2xl border border-[#d7c6ef] bg-[#ece1fb] p-6 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d39b5]">Process</p>
            <h3 className="mt-4 text-4xl leading-tight text-[#2f2440]">Know every step before you sign.</h3>
            <p className="mt-4 text-[#5b4a79]">From consultation through PTO, we keep your timeline clear and accountable.</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
              View Process
              <ArrowRight className="h-4 w-4" />
            </p>
          </a>

          <a
            href="/solar-panels"
            className="flex h-full flex-col rounded-2xl border border-[#d6c8e8] bg-[#f7f1ff] p-6 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d39b5]">Products</p>
            <h3 className="mt-4 text-4xl leading-tight text-[#2f2440]">Find your ideal setup.</h3>
            <p className="mt-4 text-[#5a4b74]">Compare panel, microinverter, and battery backup options built for your home.</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
              View Products
              <ArrowRight className="h-4 w-4" />
            </p>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeEditorial;
