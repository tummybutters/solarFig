import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  BatteryCharging,
  CalendarClock,
  DollarSign,
  Gauge,
  House,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SolarProjectCard, { type SolarProjectMetric } from "@/components/SolarProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";

const projects = [
  {
    type: "Residential Solar",
    category: "Solar",
    title: "12.4 kW roof-mount system with utility paperwork and PTO handled end-to-end.",
    location: "Long Beach, CA",
    date: "01/22/2026",
    highlight: "$3,240/yr Savings",
    imageUrl: "/assets/install-gallery/install-01.png",
    metrics: [
      { label: "System", value: "12.4 kW", icon: <Sun /> },
      { label: "Utility", value: "SCE", icon: <House /> },
      { label: "Install", value: "28 Days", icon: <CalendarClock /> },
    ] satisfies SolarProjectMetric[],
  },
  {
    type: "Residential Solar",
    category: "Solar",
    title: "9.4 kW retrofit with attic conduit routing and panel upgrade support.",
    location: "Riverside, CA",
    date: "01/17/2026",
    highlight: "$2,360/yr Savings",
    imageUrl: "/assets/install-gallery/install-02.jpg",
    metrics: [
      { label: "System", value: "9.4 kW", icon: <Sun /> },
      { label: "Utility", value: "SCE", icon: <House /> },
      { label: "Year 1", value: "12.0 MWh", icon: <DollarSign /> },
    ] satisfies SolarProjectMetric[],
  },
  {
    type: "Residential Solar",
    category: "Solar",
    title: "8.6 kW installation for a single-family home with clean conduit and attic routing.",
    location: "Bakersfield, CA",
    date: "01/08/2026",
    highlight: "$2,180/yr Savings",
    imageUrl: "/assets/install-gallery/install-03.jpg",
    metrics: [
      { label: "System", value: "8.6 kW", icon: <Sun /> },
      { label: "Utility", value: "PG&E", icon: <House /> },
      { label: "Install", value: "24 Days", icon: <CalendarClock /> },
    ] satisfies SolarProjectMetric[],
  },
  {
    type: "Residential Solar",
    category: "Solar",
    title: "10.2 kW project sized for afternoon load with utility inspection handled by our team.",
    location: "Temecula, CA",
    date: "12/28/2025",
    highlight: "$2,540/yr Savings",
    imageUrl: "/assets/install-gallery/install-04.jpg",
    metrics: [
      { label: "System", value: "10.2 kW", icon: <Sun /> },
      { label: "Utility", value: "SCE", icon: <House /> },
      { label: "PTO", value: "19 Days", icon: <CalendarClock /> },
    ] satisfies SolarProjectMetric[],
  },
  {
    type: "Residential Solar",
    category: "Solar",
    title: "7.9 kW suburban retrofit with monitoring setup and permit closeout support.",
    location: "Fresno, CA",
    date: "12/20/2025",
    highlight: "$182/mo Offset",
    imageUrl: "/assets/install-gallery/install-05.jpg",
    metrics: [
      { label: "System", value: "7.9 kW", icon: <Sun /> },
      { label: "Utility", value: "PG&E", icon: <House /> },
      { label: "Install", value: "22 Days", icon: <CalendarClock /> },
    ] satisfies SolarProjectMetric[],
  },
  {
    type: "Solar + Battery",
    category: "Solar + Battery",
    title: "11.1 kW system paired with 27 kWh battery storage for NEM 3.0 optimization.",
    location: "Irvine, CA",
    date: "01/14/2026",
    highlight: "$295/mo Offset",
    imageUrl: "/assets/install-gallery/install-06.png",
    metrics: [
      { label: "System", value: "11.1 kW", icon: <Sun /> },
      { label: "Battery", value: "27 kWh", icon: <BatteryCharging /> },
      { label: "TOU Shift", value: "83%", icon: <Gauge /> },
    ] satisfies SolarProjectMetric[],
  },
  {
    type: "Solar + Battery",
    category: "Solar + Battery",
    title: "13.2 kW system plus whole-home backup battery designed for outage resilience.",
    location: "San Diego, CA",
    date: "12/15/2025",
    highlight: "23 hr Backup",
    imageUrl: "/assets/install-gallery/install-07.jpg",
    metrics: [
      { label: "System", value: "13.2 kW", icon: <Sun /> },
      { label: "Battery", value: "40.5 kWh", icon: <BatteryCharging /> },
      { label: "Utility", value: "SDG&E", icon: <House /> },
    ] satisfies SolarProjectMetric[],
  },
  {
    type: "Solar + Battery",
    category: "Solar + Battery",
    title: "10.8 kW design with battery dispatch settings tuned around evening peak demand.",
    location: "Santa Clarita, CA",
    date: "11/20/2025",
    highlight: "$264/mo Offset",
    imageUrl: "/assets/install-gallery/install-08.jpg",
    metrics: [
      { label: "System", value: "10.8 kW", icon: <Sun /> },
      { label: "Battery", value: "20.2 kWh", icon: <BatteryCharging /> },
      { label: "Peak Cut", value: "78%", icon: <Gauge /> },
    ] satisfies SolarProjectMetric[],
  },
  {
    type: "Solar + Battery",
    category: "Solar + Battery",
    title: "12.1 kW setup with whole-home battery backup tuned for evening demand charges.",
    location: "Vacaville, CA",
    date: "11/08/2025",
    highlight: "19 hr Backup",
    imageUrl: "/assets/install-gallery/install-09.jpg",
    metrics: [
      { label: "System", value: "12.1 kW", icon: <Sun /> },
      { label: "Battery", value: "27.0 kWh", icon: <BatteryCharging /> },
      { label: "Peak Cut", value: "74%", icon: <Gauge /> },
    ] satisfies SolarProjectMetric[],
  },
  {
    type: "Solar + Battery",
    category: "Solar + Battery",
    title: "9.8 kW + storage package built around NEM 3.0 export and overnight resiliency.",
    location: "Anaheim, CA",
    date: "10/30/2025",
    highlight: "$241/mo Offset",
    imageUrl: "/assets/install-gallery/install-10.jpg",
    metrics: [
      { label: "System", value: "9.8 kW", icon: <Sun /> },
      { label: "Battery", value: "18.6 kWh", icon: <BatteryCharging /> },
      { label: "TOU Shift", value: "81%", icon: <Gauge /> },
    ] satisfies SolarProjectMetric[],
  },
];

const filters = ["All", "Residential Solar", "Solar + Battery"] as const;
type Filter = (typeof filters)[number];

type ProjectItem = (typeof projects)[number] & {
  id: string;
};

type RenderItem = ProjectItem & {
  state: "enter" | "stable";
};

type ExitItem = {
  item: ProjectItem;
  rect: { top: number; left: number; width: number; height: number };
};

const DURATION_MS = 300;

const normalizeId = (title: string, date: string) =>
  `${title}-${date}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const allItems: ProjectItem[] = projects.map((item) => ({
  ...item,
  id: normalizeId(item.title, item.date),
}));

const filterProjects = (filter: Filter) => {
  if (filter === "All") {
    return allItems;
  }

  if (filter === "Residential Solar") {
    return allItems.filter((item) => item.category === "Solar");
  }

  return allItems.filter((item) => item.category === "Solar + Battery");
};

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [items, setItems] = useState<RenderItem[]>(() =>
    filterProjects("All").map((item) => ({ ...item, state: "enter" })),
  );
  const [exitItems, setExitItems] = useState<ExitItem[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const prevRectsRef = useRef<Map<string, DOMRect>>(new Map());
  const enterTimeoutRef = useRef<number | null>(null);
  const exitTimeoutRef = useRef<number | null>(null);

  const filteredCount = items.length;

  useEffect(() => {
    if (enterTimeoutRef.current) {
      window.clearTimeout(enterTimeoutRef.current);
    }
    enterTimeoutRef.current = window.setTimeout(() => {
      setItems((prev) =>
        prev.map((item) => (item.state === "enter" ? { ...item, state: "stable" } : item)),
      );
    }, DURATION_MS);

    return () => {
      if (enterTimeoutRef.current) {
        window.clearTimeout(enterTimeoutRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const prevRects = prevRectsRef.current;
    if (!prevRects.size) return;

    const animations: Animation[] = [];
    itemRefs.current.forEach((element, id) => {
      const prevRect = prevRects.get(id);
      if (!prevRect) return;

      const nextRect = element.getBoundingClientRect();
      const deltaX = prevRect.left - nextRect.left;
      const deltaY = prevRect.top - nextRect.top;

      if (deltaX || deltaY) {
        const animation = element.animate(
          [
            { transform: `translate(${deltaX}px, ${deltaY}px)` },
            { transform: "translate(0, 0)" },
          ],
          {
            duration: DURATION_MS,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
        );
        animations.push(animation);
      }
    });

    prevRectsRef.current = new Map();

    return () => animations.forEach((animation) => animation.cancel());
  }, [items]);

  const handleFilterChange = (filter: Filter) => {
    if (filter === activeFilter) return;

    const nextItems = filterProjects(filter);
    const nextIds = new Set(nextItems.map((item) => item.id));
    const currentIds = new Set(items.map((item) => item.id));

    const prevRects = new Map<string, DOMRect>();
    itemRefs.current.forEach((element, id) => {
      prevRects.set(id, element.getBoundingClientRect());
    });
    prevRectsRef.current = prevRects;

    const exiting = items.filter((item) => !nextIds.has(item.id));

    if (containerRef.current && exiting.length) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const overlays = exiting
        .map((item) => {
          const rect = prevRects.get(item.id);
          if (!rect) return null;
          return {
            item,
            rect: {
              top: rect.top - containerRect.top,
              left: rect.left - containerRect.left,
              width: rect.width,
              height: rect.height,
            },
          };
        })
        .filter(Boolean) as ExitItem[];

      setExitItems(overlays);

      if (exitTimeoutRef.current) {
        window.clearTimeout(exitTimeoutRef.current);
      }
      exitTimeoutRef.current = window.setTimeout(() => setExitItems([]), DURATION_MS);
    } else {
      setExitItems([]);
    }

    setItems(
      nextItems.map((item) => ({
        ...item,
        state: currentIds.has(item.id) ? "stable" : "enter",
      })),
    );
    setActiveFilter(filter);

    if (enterTimeoutRef.current) {
      window.clearTimeout(enterTimeoutRef.current);
    }
    enterTimeoutRef.current = window.setTimeout(() => {
      setItems((prev) =>
        prev.map((item) => (item.state === "enter" ? { ...item, state: "stable" } : item)),
      );
    }, DURATION_MS);
  };

  useEffect(() => {
    return () => {
      if (enterTimeoutRef.current) window.clearTimeout(enterTimeoutRef.current);
      if (exitTimeoutRef.current) window.clearTimeout(exitTimeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f4eefb] text-gray-900 selection:bg-purple-200/60">
      <Navbar />

      <section className="border-b border-purple-100 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 px-6 pb-12 pt-32 md:px-12 md:pt-36 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-purple-200/80">
              SolarFig Install Portfolio
            </p>
            <h1 className="font-serif text-4xl font-light leading-[0.9] tracking-tight text-white md:text-5xl lg:text-7xl">
              Completed Solar Projects
            </h1>
            <p className="mt-5 max-w-xl text-sm text-purple-100/80 md:text-base">
              A dedicated showcase of recent SolarFig installs and battery deployments across
              California, built to mirror your high-conversion transaction style layout.
            </p>
          </div>

          <div className="flex gap-8 text-purple-100/80">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-purple-200/80">Annual Savings</p>
              <p className="font-serif text-xl text-white">$14.7M+</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-purple-200/80">Systems Live</p>
              <p className="font-serif text-xl text-white">2,500+</p>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-40 border-b border-purple-100 bg-white/95 px-6 py-4 backdrop-blur-md md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex w-full border border-purple-200 bg-purple-50/50 p-1 sm:w-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={cn(
                  "flex-1 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider transition-all duration-300 sm:flex-none",
                  activeFilter === filter
                    ? "bg-purple-600 text-white"
                    : "text-gray-600 hover:bg-purple-100 hover:text-gray-900",
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <p className="hidden font-mono text-xs text-gray-500 sm:block">Showing {filteredCount} Results</p>
        </div>
      </div>

      <section className="min-h-[60vh] px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div ref={containerRef} className="tx-grid">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  ref={(element) => {
                    if (element) {
                      itemRefs.current.set(item.id, element);
                    } else {
                      itemRefs.current.delete(item.id);
                    }
                  }}
                  className="tx-item"
                >
                  <div className={item.state === "enter" ? "tx-enter" : undefined}>
                    <SolarProjectCard
                      type={item.type}
                      title={item.title}
                      highlight={item.highlight}
                      location={item.location}
                      date={item.date}
                      metrics={item.metrics}
                      imageUrl={item.imageUrl}
                    />
                  </div>
                </div>
              ))}
            </div>

            {exitItems.map((exit) => (
              <div
                key={exit.item.id}
                className="tx-item pointer-events-none absolute z-10"
                style={{
                  top: `${exit.rect.top}px`,
                  left: `${exit.rect.left}px`,
                  width: `${exit.rect.width}px`,
                  height: `${exit.rect.height}px`,
                }}
              >
                <div className="tx-exit">
                  <SolarProjectCard
                    type={exit.item.type}
                    title={exit.item.title}
                    highlight={exit.item.highlight}
                    location={exit.item.location}
                    date={exit.item.date}
                    metrics={exit.item.metrics}
                    imageUrl={exit.item.imageUrl}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-purple-100 bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl text-gray-900">Start your own solar project.</h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center border border-purple-500 bg-purple-600 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-purple-500"
            >
              Get Free Solar Report
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center border border-gray-300 px-6 py-3 text-sm uppercase tracking-wider text-gray-800 transition-colors duration-300 hover:bg-gray-100"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <GlobalQuoteSection />

      <Footer />
    </div>
  );
};

export default ProjectsShowcase;
