import type { MouseEvent } from "react";
import { ChevronDown } from "lucide-react";

const ScrollCue = () => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const currentSection = event.currentTarget.closest("section");
    const nextSection = currentSection?.nextElementSibling as HTMLElement | null;

    nextSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center sm:bottom-7">
      <button
        type="button"
        onClick={handleClick}
        aria-label="Scroll to next section"
        className="scroll-cue pointer-events-auto inline-flex flex-col items-center gap-2 text-white/48 transition-colors duration-300 hover:text-white/72"
      >
        <span className="h-8 w-px bg-gradient-to-b from-white/0 via-white/28 to-white/60" aria-hidden="true" />
        <ChevronDown className="h-4 w-4 text-white/60" aria-hidden="true" strokeWidth={1.6} />
      </button>
    </div>
  );
};

export default ScrollCue;
