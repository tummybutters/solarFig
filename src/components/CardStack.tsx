import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Card {
  id: number;
  image: string;
  alt: string;
}

const cards: Card[] = [
  { id: 1, image: "/assets/insta1.jpg", alt: "Reset Wellness Event 1" },
  { id: 2, image: "/assets/insta2.jpg", alt: "Reset Wellness Event 2" },
  { id: 3, image: "/assets/insta3.jpg", alt: "Reset Wellness Event 3" },
  { id: 4, image: "/assets/insta4.jpg", alt: "Reset Wellness Event 4" },
  { id: 5, image: "/assets/insta5.jpg", alt: "Reset Wellness Event 5" },
  { id: 6, image: "/assets/insta6.jpg", alt: "Reset Wellness Event 6" },
  { id: 7, image: "/assets/insta7.jpg", alt: "Reset Wellness Event 7" },
];

const AUTO_ROTATE_INTERVAL = 4000; // 4 seconds

const CardStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatingCard, setAnimatingCard] = useState<number | null>(null);
  const [animationPhase, setAnimationPhase] = useState<"idle" | "left" | "under" | "back">("idle");
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAutoRotate = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scheduleAutoRotate = useCallback(() => {
    clearAutoRotate();
    if (!isPaused && animationPhase === "idle") {
      timeoutRef.current = setTimeout(() => {
        handleNext();
      }, AUTO_ROTATE_INTERVAL);
    }
  }, [isPaused, animationPhase, clearAutoRotate]);

  useEffect(() => {
    scheduleAutoRotate();
    return () => clearAutoRotate();
  }, [scheduleAutoRotate, clearAutoRotate]);

  const handleNext = useCallback(() => {
    if (animationPhase !== "idle") return;

    const currentCardIndex = currentIndex;
    setAnimatingCard(currentCardIndex);
    setAnimationPhase("left");

    // Phase 1: Move left (400ms)
    setTimeout(() => {
      setAnimationPhase("under");

      // Phase 2: Move under (300ms) - update index here so next card appears on top
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);

        // Phase 3: Move back into stack (400ms)
        setTimeout(() => {
          setAnimationPhase("back");

          setTimeout(() => {
            setAnimationPhase("idle");
            setAnimatingCard(null);
          }, 400);
        }, 50);
      }, 300);
    }, 400);
  }, [currentIndex, animationPhase]);

  const handlePrev = useCallback(() => {
    if (animationPhase !== "idle") return;

    // For going back, we just update index - the card coming from behind will animate in
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [animationPhase]);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + cards.length) % cards.length;
    const isCurrent = diff === 0;
    const isNext = diff === 1 || diff === -(cards.length - 1);
    const isAnimating = animatingCard === index;

    // Base styles for stack positioning
    let transform = "";
    let zIndex = 10;
    let opacity = 0.3;
    let scale = 0.9;

    if (isCurrent) {
      if (isAnimating) {
        // Animation phases for the current card
        switch (animationPhase) {
          case "left":
            transform = "translateX(-80%) rotate(-8deg)";
            zIndex = 30;
            opacity = 1;
            scale = 1;
            break;
          case "under":
            transform = "translateY(60px) scale(0.85)";
            zIndex = 5;
            opacity = 0.4;
            scale = 0.85;
            break;
          case "back":
            transform = "translateX(0) rotate(0deg) scale(0.9)";
            zIndex = 10;
            opacity = 0.3;
            scale = 0.9;
            break;
          default:
            transform = "translateX(0) rotate(0deg) scale(1)";
            zIndex = 30;
            opacity = 1;
            scale = 1;
        }
      } else {
        transform = "translateX(0) rotate(0deg) scale(1)";
        zIndex = 30;
        opacity = 1;
        scale = 1;
      }
    } else if (isNext) {
      transform = "translateX(40px) rotate(1.5deg) scale(0.95)";
      zIndex = 20;
      opacity = 0.6;
      scale = 0.95;
    } else {
      // Cards further back in the stack
      const depth = Math.min(diff - 1, 3);
      transform = `translateX(${depth * 15}px) rotate(${depth * 0.5}deg) scale(${0.9 - depth * 0.02})`;
      zIndex = 10 - depth;
      opacity = Math.max(0.3 - depth * 0.1, 0.1);
      scale = 0.9 - depth * 0.02;
    }

    return {
      transform,
      zIndex,
      opacity,
      scale,
    };
  };

  const getTransitionStyle = () => {
    switch (animationPhase) {
      case "left":
        return "transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease, z-index 0ms";
      case "under":
        return "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, z-index 0ms";
      case "back":
        return "transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease, z-index 0ms";
      default:
        return "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, z-index 0ms";
    }
  };

  return (
    <div
      className="relative w-[220px] h-[330px] sm:w-[260px] sm:h-[390px] md:w-[280px] md:h-[420px] lg:w-[300px] lg:h-[450px] group cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Card Stack */}
      <div className="relative w-full h-full perspective-1000">
        {cards.map((card, index) => {
          const style = getCardStyle(index);

          return (
            <div
              key={card.id}
              className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
              style={{
                transform: style.transform,
                zIndex: style.zIndex,
                opacity: style.opacity,
                transition: getTransitionStyle(),
                transitionProperty: "transform, opacity",
              }}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            </div>
          );
        })}
      </div>

      {/* Swipe Controls - Right arrow emphasized */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 hidden md:flex">
        <button
          onClick={handlePrev}
          disabled={animationPhase !== "idle"}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/20 hover:bg-white/5 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16 hidden md:flex">
        <button
          onClick={handleNext}
          disabled={animationPhase !== "idle"}
          className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next card"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Controls Overlay - Right side larger */}
      <div className="absolute inset-0 z-50 md:hidden flex pointer-events-auto">
        <button 
          className="w-1/3 h-full bg-transparent cursor-pointer"
          onClick={handlePrev}
          aria-label="Previous card"
        />
        <button 
          className="w-2/3 h-full bg-transparent cursor-pointer"
          onClick={handleNext}
          aria-label="Next card"
        />
      </div>

      {/* Card indicators - Refined */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (animationPhase === "idle" && index !== currentIndex) {
                // Jump to specific card
                setCurrentIndex(index);
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${index === currentIndex
              ? "bg-white w-8 opacity-100"
              : "bg-white/20 w-1.5 hover:bg-white/40"
              }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
