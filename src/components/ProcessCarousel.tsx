import { useMemo, useState } from "react";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock,
  FileText,
  Search,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  timeline: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Consultation",
    timeline: "Day 1",
    description:
      "We review your usage, utility tariff, and goals to build a California-specific baseline before design work begins.",
    icon: Clock,
    color: "#d8b4fe",
  },
  {
    id: 2,
    title: "Design & Proposal",
    timeline: "Days 1-3",
    description:
      "You get a system layout, production forecast, and plan options with transparent assumptions and expected outcomes.",
    icon: FileText,
    color: "#c084fc",
  },
  {
    id: 3,
    title: "Site Inspection",
    timeline: "Days 3-7",
    description:
      "A field survey confirms roof, electrical, and structural details so the final scope is accurate before permits.",
    icon: Search,
    color: "#a855f7",
  },
  {
    id: 4,
    title: "Permitting",
    timeline: "Days 7-18",
    description:
      "Engineering package, city permits, and utility interconnection paperwork are coordinated end-to-end.",
    icon: ClipboardCheck,
    color: "#9333ea",
  },
  {
    id: 5,
    title: "Installation",
    timeline: "Days 18-24",
    description:
      "Your selected install partner completes the approved scope, system commissioning prep, and quality checks.",
    icon: Wrench,
    color: "#7e22ce",
  },
  {
    id: 6,
    title: "Final Inspection",
    timeline: "Days 24-28",
    description:
      "Final city or authority inspection is scheduled and managed to clear operational approval requirements.",
    icon: CheckCircle,
    color: "#6b21a8",
  },
  {
    id: 7,
    title: "PTO & Activation",
    timeline: "Days 24-30",
    description:
      "Once utility PTO is issued, your system goes live and starts generating production under your approved plan.",
    icon: Zap,
    color: "#581c87",
  },
];

const signedDistance = (index: number, active: number, total: number) => {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
};

const ORBIT_STEP_ANGLE = 360 / steps.length;
const ORBIT_CENTER_X = 50;
const ORBIT_CENTER_Y = 74;
const ORBIT_RADIUS_X = 46;
const ORBIT_RADIUS_Y = 28;
const ORBIT_TOP_ANGLE = -90;

const ProcessCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = useMemo(() => steps[activeIndex], [activeIndex]);
  const timelineInset = 100 / (steps.length * 2);
  const timelineTrackWidth = 100 - timelineInset * 2;
  const timelineProgressWidth =
    steps.length > 1 ? (activeIndex / (steps.length - 1)) * timelineTrackWidth : 0;

  const goToNext = () => setActiveIndex((current) => (current + 1) % steps.length);
  const goToPrev = () => setActiveIndex((current) => (current - 1 + steps.length) % steps.length);

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mx-auto mb-5 w-full max-w-4xl px-2 sm:px-6">
        <div className="relative">
          <div
            className="absolute top-2 h-px bg-stone-300"
            style={{ left: `${timelineInset}%`, width: `${timelineTrackWidth}%` }}
          />
          <div
            className="absolute top-2 h-px transition-all duration-500"
            style={{
              left: `${timelineInset}%`,
              width: `${timelineProgressWidth}%`,
              backgroundColor: activeStep.color,
            }}
          />
          <div className="relative grid grid-cols-7 items-start">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveIndex(index)}
                  className="group flex flex-col items-center"
                  aria-label={`Go to ${step.title}`}
                >
                  <span
                    className="h-4 w-4 rounded-full border-2 transition-all duration-300"
                    style={{
                      borderColor: isActive ? step.color : "#a8a29e",
                      backgroundColor: isActive ? step.color : "#f5f5f4",
                      boxShadow: isActive ? `0 0 0 3px ${step.color}33` : "none",
                    }}
                  />
                  <span
                    className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300"
                    style={{ color: isActive ? step.color : "#78716c" }}
                  >
                    {step.timeline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto h-[390px] w-full overflow-hidden sm:h-[430px] lg:h-[460px]">
        <div className="pointer-events-none absolute left-1/2 top-[68%] h-[220px] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-stone-200/70" />

        {steps.map((step, index) => {
          const diff = signedDistance(index, activeIndex, steps.length);
          const isCenter = diff === 0;
          const angle = (ORBIT_TOP_ANGLE + diff * ORBIT_STEP_ANGLE) * (Math.PI / 180);
          const x = ORBIT_CENTER_X + ORBIT_RADIUS_X * Math.cos(angle);
          const y = ORBIT_CENTER_Y + ORBIT_RADIUS_Y * Math.sin(angle);
          const orbitDepth = (1 - Math.sin(angle)) / 2;
          const absDiff = Math.abs(diff);
          const opacity = isCenter ? 1 : absDiff === 1 ? 0.22 : absDiff === 2 ? 0.07 : 0;
          const blur = isCenter ? "blur(0px)" : absDiff === 1 ? "blur(1.5px)" : "blur(3px)";

          return (
            <article
              key={step.id}
              className="absolute left-0 top-0 w-[86vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-white p-5 shadow-[0_22px_50px_-26px_rgba(0,0,0,0.6)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-7"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                opacity,
                transform: "translate(-50%, -50%)",
                filter: blur,
                zIndex: isCenter ? 50 : Math.round(10 + orbitDepth * 20),
                borderColor: isCenter ? `${step.color}88` : "#d6d3d1",
                pointerEvents: isCenter || absDiff === 1 ? "auto" : "none",
              }}
              aria-hidden={!isCenter}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <p
                  className="inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
                  style={{ backgroundColor: step.color }}
                >
                  {step.timeline}
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                  Step {step.id}
                </span>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <step.icon className="h-5 w-5" style={{ color: step.color }} />
                <h3 className="font-serif text-2xl leading-tight text-stone-900 sm:text-3xl">{step.title}</h3>
              </div>

              <p className="text-sm leading-relaxed text-stone-600 sm:text-[15px]">{step.description}</p>
            </article>
          );
        })}

        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 z-50 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-300 bg-white/95 text-stone-700 shadow-sm transition-colors hover:bg-stone-100 sm:left-5"
          aria-label="Previous step"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 z-50 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-300 bg-white/95 text-stone-700 shadow-sm transition-colors hover:bg-stone-100 sm:right-5"
          aria-label="Next step"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActiveIndex(index)}
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: index === activeIndex ? "30px" : "8px",
              backgroundColor: index === activeIndex ? activeStep.color : "#d6d3d1",
            }}
            aria-label={`Go to step ${step.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessCarousel;
