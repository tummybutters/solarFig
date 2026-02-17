// import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const HeroGlacial = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const freezeOnLastFrame = () => {
        const video = videoRef.current;
        if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;

        // Seek just before duration to force the browser to paint the true final frame.
        video.currentTime = Math.max(video.duration - 0.05, 0);
        video.pause();
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-slate-900 text-white">
            {/* Background Image / Video Layer */}
            <div className="absolute inset-0 z-0">
                {/* Neutral overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

                <video
                    ref={videoRef}
                    className="h-full w-full object-cover object-center scale-105"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={freezeOnLastFrame}
                >
                    <source src="/assets/hero-main/hero-background-optimized-v2.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content Container */}
            <div className="relative z-20 mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 items-end gap-10 px-6 pb-20 pt-24 sm:px-8 sm:pt-28 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:gap-16 lg:pb-24 lg:pt-28">

                {/* Left Side: Main Text Content */}
                <div className="max-w-xl">
                    <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200/80">
                        A New Lens on Home Energy
                    </p>

                    <h1 className="mb-6 text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
                        California's Premium solar panels, battery storage, and EV charging installer
                    </h1>

                    <p className="mb-10 max-w-md text-base leading-relaxed text-blue-100/70 sm:text-lg">
                        Solarfig synthesizes utility data, NEM 3.0 incentives, and premium battery storage to surface the savings hidden in your property.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded bg-white px-8 text-sm font-semibold text-slate-900 transition-colors hover:bg-blue-50"
                        >
                            Start monitoring free
                        </a>
                        <a
                            href="#plans"
                            className="inline-flex h-12 items-center justify-center rounded border border-white/20 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 backdrop-blur-sm"
                        >
                            View research cases
                        </a>
                    </div>

                    <p className="mt-6 text-[10px] text-blue-200/40">
                        No credit card • Browser-based analysis
                    </p>
                </div>

                {/* Right Side: Glass Data Card */}
                {/* "Middle space some room" is achieved by justify-between pushing this to the right */}
                <div className="w-full max-w-sm lg:justify-self-end">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-purple-900/40 p-8 backdrop-blur-xl transition-all duration-500 hover:bg-purple-900/60">
                        <div className="mb-8 border-b border-white/10 pb-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200/60">
                                Homeowner Impact:
                            </p>
                            <p className="text-sm font-medium text-white/90">
                                Utility Cost Pressure
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <p className="text-4xl font-light tracking-tight text-white sm:text-5xl">
                                    $180/mo
                                </p>
                                <p className="mt-1 text-xs font-medium text-blue-200/60">
                                    potential bill reduction with solar + battery¹
                                </p>
                            </div>

                            <div>
                                <p className="text-4xl font-light tracking-tight text-white sm:text-5xl">
                                    7.2%
                                </p>
                                <p className="mt-1 text-xs font-medium text-blue-200/60">
                                    average year-over-year utility rate hikes²
                                </p>
                            </div>

                            <div>
                                <p className="text-4xl font-light tracking-tight text-white sm:text-5xl">
                                    2.3x
                                </p>
                                <p className="mt-1 text-xs font-medium text-blue-200/60">
                                    peak-hour pricing vs off-peak in CA TOU plans³
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-white/5">
                            <p className="text-[9px] leading-relaxed text-blue-200/30">
                                ¹Estimated homeowner scenario; ²Recent CA utility trend ranges; ³Time-of-use plan dependent.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-8 left-0 right-0 z-20 text-center">
                <p className="text-[9px] uppercase tracking-widest text-blue-200/30">
                    Scroll to see how Solarfig thinks
                </p>
            </div>
        </section>
    );
};

export default HeroGlacial;
