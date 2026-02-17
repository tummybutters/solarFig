import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface VideoCard {
  id: number;
  video: string;
  author: string;
  location: string;
  detail: string;
}

const videos: VideoCard[] = [
  {
    id: 1,
    video: "/assets/optimized/video1.mp4",
    author: "Sarah M.",
    location: "Phoenix, AZ",
    detail: "8.4 kW system installed",
  },
  {
    id: 2,
    video: "/assets/optimized/video2.mp4",
    author: "David Chen",
    location: "Austin, TX",
    detail: "12 kW system with battery",
  },
  {
    id: 3,
    video: "/assets/optimized/video3.mp4",
    author: "Maria Rodriguez",
    location: "Denver, CO",
    detail: "6.8 kW rooftop system",
  },
  {
    id: 4,
    video: "/assets/optimized/video4.mp4",
    author: "James & Lisa T.",
    location: "San Diego, CA",
    detail: "10.2 kW system installed",
  },
];

const AUTO_ROTATE_INTERVAL = 6000; // 6 seconds per video

const TestimonialCardStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatingCard, setAnimatingCard] = useState<number | null>(null);
  const [animationPhase, setAnimationPhase] = useState<"idle" | "left" | "under" | "back">("idle");
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  // Play/pause videos based on current index
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (animationPhase !== "idle") return;

    const currentCardIndex = currentIndex;
    setAnimatingCard(currentCardIndex);
    setAnimationPhase("left");

    setTimeout(() => {
      setAnimationPhase("under");

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);

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
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }, [animationPhase]);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + videos.length) % videos.length;
    const isCurrent = diff === 0;
    const isNext = diff === 1 || diff === -(videos.length - 1);
    const isAnimating = animatingCard === index;

    let transform = "";
    let zIndex = 10;
    let opacity = 0.3;
    let scale = 0.9;

    if (isCurrent) {
      if (isAnimating) {
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
      className="relative w-[280px] h-[420px] sm:w-[320px] sm:h-[460px] md:w-[340px] md:h-[480px] lg:w-[360px] lg:h-[500px] group cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Card Stack */}
      <div className="relative w-full h-full perspective-1000">
        {videos.map((videoCard, index) => {
          const style = getCardStyle(index);
          const isCurrent = index === currentIndex;

          return (
            <div
              key={videoCard.id}
              className="absolute inset-0 rounded-none overflow-hidden shadow-2xl border border-white/10 bg-black"
              style={{
                transform: style.transform,
                zIndex: style.zIndex,
                opacity: style.opacity,
                transition: getTransitionStyle(),
                transitionProperty: "transform, opacity",
              }}
            >
              {/* Video */}
              <div className="absolute inset-0">
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={videoCard.video}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Play indicator (shows when paused) */}
              {!isCurrent && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-none bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              )}

              {/* Info overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Label */}
                <span className="text-purple-300 text-[10px] tracking-widest uppercase font-medium mb-2 block">
                  Customer Story
                </span>
                
                {/* Author */}
                <h3 className="text-white font-semibold text-lg">
                  {videoCard.author}
                </h3>
                
                {/* Location & Detail */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-white/60 text-sm">{videoCard.location}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-purple-300 text-sm font-medium">{videoCard.detail}</span>
                </div>
              </div>

              {/* Top corner number */}
              <div className="absolute top-4 right-4">
                <span className="text-white/30 text-xs font-medium">
                  0{videoCard.id} / 0{videos.length}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Swipe Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 hidden md:flex">
        <button
          onClick={handlePrev}
          disabled={animationPhase !== "idle"}
          className="w-10 h-10 rounded-none border border-white/20 flex items-center justify-center text-white/50 hover:text-white/80 hover:border-white/40 hover:bg-white/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16 hidden md:flex">
        <button
          onClick={handleNext}
          disabled={animationPhase !== "idle"}
          className="w-14 h-14 rounded-none border-2 border-purple-400/50 flex items-center justify-center text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Controls Overlay */}
      <div className="absolute inset-0 z-50 md:hidden flex pointer-events-auto">
        <button 
          className="w-1/3 h-full bg-transparent cursor-pointer"
          onClick={handlePrev}
          aria-label="Previous video"
        />
        <button 
          className="w-2/3 h-full bg-transparent cursor-pointer"
          onClick={handleNext}
          aria-label="Next video"
        />
      </div>

      {/* Card indicators */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (animationPhase === "idle" && index !== currentIndex) {
                setCurrentIndex(index);
              }
            }}
            className={`h-1.5 rounded-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${index === currentIndex
              ? "bg-purple-400 w-8 opacity-100"
              : "bg-white/30 w-1.5 hover:bg-white/50"
              }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCardStack;
