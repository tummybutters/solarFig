import { useEffect, useRef, useState } from "react";

const HERO_FADE_MS = 520;

const heroVideos = [
    "/assets/hero-main/hero-background-optimized-v2.mp4",
    "/assets/hero-main/hero-background-sequence-02.mp4",
    "/assets/hero-main/hero-background-sequence-03.mp4",
    "/assets/hero-main/hero-background-sequence-04.mp4",
];

const HeroGlacial = () => {
    const layerARef = useRef<HTMLVideoElement | null>(null);
    const layerBRef = useRef<HTMLVideoElement | null>(null);
    const transitionTimerRef = useRef<number | null>(null);

    const [layerAIndex, setLayerAIndex] = useState(0);
    const [layerBIndex, setLayerBIndex] = useState(1);
    const [activeLayer, setActiveLayer] = useState<"a" | "b">("a");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const layerAIndexRef = useRef(layerAIndex);
    const layerBIndexRef = useRef(layerBIndex);
    const activeLayerRef = useRef(activeLayer);

    useEffect(() => {
        layerAIndexRef.current = layerAIndex;
    }, [layerAIndex]);

    useEffect(() => {
        layerBIndexRef.current = layerBIndex;
    }, [layerBIndex]);

    useEffect(() => {
        activeLayerRef.current = activeLayer;
    }, [activeLayer]);

    useEffect(() => {
        const preloadRef = activeLayer === "a" ? layerBRef : layerARef;
        if (!preloadRef.current) return;
        preloadRef.current.load();
    }, [layerAIndex, layerBIndex, activeLayer]);

    useEffect(() => {
        return () => {
            if (transitionTimerRef.current) {
                window.clearTimeout(transitionTimerRef.current);
            }
        };
    }, []);

    const handleActiveVideoEnd = async () => {
        if (isTransitioning) return;

        const incomingLayer = activeLayerRef.current === "a" ? "b" : "a";
        const incomingVideo = incomingLayer === "a" ? layerARef.current : layerBRef.current;
        if (!incomingVideo) return;

        incomingVideo.currentTime = 0;
        try {
            await incomingVideo.play();
        } catch {
            // Ignore autoplay promise failures on restrictive browsers.
        }

        setIsTransitioning(true);
        setActiveLayer(incomingLayer);

        transitionTimerRef.current = window.setTimeout(() => {
            const incomingIndex =
                incomingLayer === "a" ? layerAIndexRef.current : layerBIndexRef.current;
            const preloadIndex = (incomingIndex + 1) % heroVideos.length;
            const outgoingVideo = incomingLayer === "a" ? layerBRef.current : layerARef.current;
            if (outgoingVideo) {
                outgoingVideo.pause();
                outgoingVideo.currentTime = 0;
            }

            if (incomingLayer === "a") {
                setLayerBIndex(preloadIndex);
            } else {
                setLayerAIndex(preloadIndex);
            }

            setIsTransitioning(false);
        }, HERO_FADE_MS);
    };

    const activeVideoIndex = activeLayer === "a" ? layerAIndex : layerBIndex;

    return (
        <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-900 text-white sm:min-h-screen">
            {/* Background Image / Video Layer */}
            <div className="absolute inset-0 z-0">
                {/* Neutral overlay for text readability */}
                <div
                    className={`absolute inset-0 z-20 ${
                        activeVideoIndex === 1
                            ? "bg-gradient-to-t from-black/80 via-black/52 to-black/20"
                            : "bg-gradient-to-t from-black/68 via-black/40 to-black/12"
                    }`}
                />

                <video
                    ref={layerARef}
                    className={`absolute inset-0 h-full w-full object-cover object-center scale-105 transition-opacity duration-[520ms] ${
                        activeLayer === "a" ? "opacity-100" : "opacity-0"
                    }`}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={activeLayer === "a" ? handleActiveVideoEnd : undefined}
                >
                    <source src={heroVideos[layerAIndex]} type="video/mp4" />
                </video>

                <video
                    ref={layerBRef}
                    className={`absolute inset-0 h-full w-full object-cover object-center scale-105 transition-opacity duration-[520ms] ${
                        activeLayer === "b" ? "opacity-100" : "opacity-0"
                    }`}
                    muted
                    playsInline
                    preload="auto"
                    onEnded={activeLayer === "b" ? handleActiveVideoEnd : undefined}
                >
                    <source src={heroVideos[layerBIndex]} type="video/mp4" />
                </video>
            </div>

            {/* Content Container */}
            <div className="relative z-20 mx-auto grid min-h-[92vh] max-w-[1400px] grid-cols-1 items-end gap-8 px-5 pb-14 pt-24 sm:min-h-screen sm:gap-10 sm:px-8 sm:pb-20 sm:pt-28 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:gap-16 lg:pb-24 lg:pt-28">

                {/* Left Side: Main Text Content */}
                <div className="max-w-xl">
                    <h1 className="mb-5 text-[2.2rem] font-medium leading-[1.03] tracking-tight text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.65)] sm:mb-6 sm:text-6xl lg:text-7xl">
                        Power Your Home. Cut Your Bill. Future-Proof Everything.
                    </h1>

                    <h2 className="mb-8 max-w-md text-[15px] leading-relaxed text-blue-100/90 drop-shadow-[0_3px_20px_rgba(0,0,0,0.45)] sm:mb-10 sm:text-lg">
                        From high-efficiency solar panels to backup-ready battery systems, Solarfig builds solar designed for California homeowners who expect clear results.
                    </h2>

                    <div className="mobile-inline-actions flex flex-wrap gap-3 sm:gap-4">
                        <a
                            href="#contact"
                            className="inline-flex h-11 items-center justify-center rounded bg-white px-6 text-sm font-semibold text-slate-900 transition-colors hover:bg-blue-50 sm:h-12 sm:px-8"
                        >
                            Get your free solar quote
                        </a>
                        <a
                            href="/projects"
                            className="inline-flex h-11 items-center justify-center rounded border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10 backdrop-blur-sm sm:h-12 sm:px-8"
                        >
                            View real projects
                        </a>
                    </div>

                    <p className="mt-6 text-[10px] text-blue-200/55">
                        Clear pricing • Local permitting support
                    </p>
                </div>

                {/* Right Side: Glass Data Card */}
                {/* "Middle space some room" is achieved by justify-between pushing this to the right */}
                <div className="w-full max-w-sm lg:justify-self-end">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-purple-900/40 p-3 backdrop-blur-xl transition-all duration-500 hover:bg-purple-900/60 sm:p-8">
                        <div className="mb-2 border-b border-white/10 pb-2 sm:mb-8 sm:pb-4">
                            <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-blue-200/60 sm:text-[10px] sm:tracking-[0.15em]">
                                Homeowner Impact:
                            </p>
                            <p className="text-xs font-medium text-white/90 sm:text-sm">
                                Utility Cost Pressure
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:block sm:space-y-8">
                            <div>
                                <p className="text-[1.7rem] font-light leading-none tracking-tight text-white sm:text-5xl">
                                    $180/mo
                                </p>
                                <p className="mt-1 text-[10px] leading-tight text-blue-200/65 sm:text-xs sm:font-medium">
                                    bill reduction¹
                                </p>
                            </div>

                            <div>
                                <p className="text-[1.7rem] font-light leading-none tracking-tight text-white sm:text-5xl">
                                    7.2%
                                </p>
                                <p className="mt-1 text-[10px] leading-tight text-blue-200/65 sm:text-xs sm:font-medium">
                                    utility hikes²
                                </p>
                            </div>

                            <div>
                                <p className="text-[1.7rem] font-light leading-none tracking-tight text-white sm:text-5xl">
                                    2.3x
                                </p>
                                <p className="mt-1 text-[10px] leading-tight text-blue-200/65 sm:text-xs sm:font-medium">
                                    peak pricing³
                                </p>
                            </div>
                        </div>

                        <div className="mt-2 border-t border-white/5 pt-2 sm:mt-8 sm:pt-4">
                            <p className="text-[8px] leading-relaxed text-blue-200/30 sm:text-[9px]">
                                ¹Estimated homeowner scenario; ²Recent CA utility trend ranges; ³Time-of-use plan dependent.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-5 left-0 right-0 z-20 text-center sm:bottom-8">
                <p className="text-[9px] uppercase tracking-widest text-blue-200/30">
                    Scroll to see how Solarfig thinks
                </p>
            </div>
        </section>
    );
};

export default HeroGlacial;
