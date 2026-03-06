import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const heroVideos = [
    "/assets/hero-main/balanced/hero-balanced-01.mp4",
    "/assets/hero-main/balanced/hero-balanced-02.mp4",
    "/assets/hero-main/balanced/hero-balanced-03.mp4",
    "/assets/hero-main/balanced/hero-balanced-04.mp4",
    "/assets/hero-main/balanced/hero-balanced-05.mp4",
];

const trustBarItems = [
    "30+ Years of Experience",
    "High-Efficiency Solutions",
    "Quality Workmanship",
    "Robust Warranties",
    "Dedicated Support",
];

const TRANSITION_LEAD_SECONDS = 1.1;

const HeroGlacial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
    const [incomingVisible, setIncomingVisible] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const sectionRef = useRef<HTMLElement | null>(null);
    const bannerRef = useRef<HTMLDivElement | null>(null);

    const handleCurrentTimeUpdate = () => {
        if (incomingIndex !== null) return;

        const currentVideo = videoRefs.current[currentIndex];
        if (!currentVideo || !Number.isFinite(currentVideo.duration) || currentVideo.duration <= 0) return;

        const timeRemaining = currentVideo.duration - currentVideo.currentTime;
        if (timeRemaining > TRANSITION_LEAD_SECONDS) return;

        const nextIndex = (currentIndex + 1) % heroVideos.length;
        const nextVideo = videoRefs.current[nextIndex];
        if (!nextVideo) return;

        nextVideo.pause();
        try {
            nextVideo.currentTime = 0;
        } catch {
            // Ignore seek failures while metadata is not ready.
        }

        nextVideo.play().catch(() => { });
        setIncomingIndex(nextIndex);
        requestAnimationFrame(() => {
            setIncomingVisible(true);
        });
    };

    const handleCurrentVideoEnd = () => {
        if (incomingIndex === null) {
            setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
            return;
        }

        const endedVideo = videoRefs.current[currentIndex];
        if (endedVideo) {
            endedVideo.pause();
            endedVideo.currentTime = 0;
        }

        setCurrentIndex(incomingIndex);
        setIncomingIndex(null);
        setIncomingVisible(false);
    };

    useEffect(() => {
        const activeVideo = videoRefs.current[currentIndex];
        if (!activeVideo) return;
        activeVideo.play().catch(() => { });
    }, [currentIndex]);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const banner = bannerRef.current;
        const navbar = document.querySelector<HTMLElement>("[data-site-navbar]");

        if (!section || !banner || !navbar) return;

        const updateHeroViewportFit = () => {
            const navbarRect = navbar.getBoundingClientRect();
            const bannerRect = banner.getBoundingClientRect();

            section.style.setProperty("--hero-navbar-offset", `${Math.round(navbarRect.bottom)}px`);
            section.style.setProperty("--hero-banner-height", `${Math.round(bannerRect.height)}px`);
        };

        updateHeroViewportFit();

        const resizeObserver = new ResizeObserver(() => {
            updateHeroViewportFit();
        });

        resizeObserver.observe(navbar);
        resizeObserver.observe(banner);
        window.addEventListener("resize", updateHeroViewportFit);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateHeroViewportFit);
        };
    }, []);

    const loopedTrustBarItems = [...trustBarItems, ...trustBarItems];

    return (
        <section
            ref={sectionRef}
            className="hero-glacial-shell relative w-full overflow-hidden bg-slate-900 text-white"
            style={{
                minHeight: "100svh",
            }}
        >
            {/* Background Image / Video Layer */}
            <div className="absolute inset-0 z-0 bg-slate-900">
                {/* Neutral overlay for text readability */}
                <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-black/80 via-black/52 to-black/20" />

                {heroVideos.map((src, index) => (
                    <video
                        key={src}
                        ref={(el) => {
                            videoRefs.current[index] = el;
                        }}
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${index === incomingIndex
                            ? `${incomingVisible ? "opacity-100" : "opacity-0"} z-20`
                            : index === currentIndex
                                ? "opacity-100 z-10"
                                : "opacity-0 z-0"
                            }`}
                        muted
                        playsInline
                        preload={index === currentIndex || index === (currentIndex + 1) % heroVideos.length ? "auto" : "metadata"}
                        onTimeUpdate={index === currentIndex ? handleCurrentTimeUpdate : undefined}
                        onEnded={index === currentIndex ? handleCurrentVideoEnd : undefined}
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                ))}
            </div>

            {/* Content Container */}
            <div
                className="relative z-20 mx-auto grid box-border max-w-[1400px] grid-cols-1 items-center gap-8 px-5 pt-20 sm:gap-10 sm:px-8 sm:pt-24 lg:gap-10 lg:pt-24"
                style={{
                    minHeight: "100svh",
                    paddingBottom: "calc(var(--hero-banner-height, 72px) + 32px)",
                    paddingTop: "calc(var(--hero-navbar-offset, 96px) + 28px)",
                }}
            >

                {/* Left Side: Main Text Content */}
                <div className="max-w-xl">
                    <h1 className="mb-5 text-[2.2rem] font-medium leading-[1.03] tracking-tight text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.65)] sm:mb-6 sm:text-6xl lg:text-7xl">
                        Smarter Solar Starts with Solarfig.
                    </h1>

                    <h2 className="mb-8 max-w-md text-[15px] leading-relaxed text-blue-100/90 drop-shadow-[0_3px_20px_rgba(0,0,0,0.45)] sm:mb-10 sm:text-lg">
                        Transparent pricing. Expert installation. Energy independence made simple. Figure out if solar makes sense for your home.
                    </h2>

                    <div className="mobile-inline-actions flex flex-wrap gap-3 sm:gap-4">
                        <a
                            href="#contact"
                            className="inline-flex h-11 items-center justify-center rounded-[8px] bg-[#6D39B5] px-7 text-sm font-bold tracking-tight text-white transition-all hover:bg-[#8553c2] hover:shadow-[0_0_25px_rgba(109,57,181,0.4)] hover:scale-105 active:scale-95"
                        >
                            Get a quote
                        </a>
                    </div>

                </div>

            </div>

            <div
                ref={bannerRef}
                className="absolute inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#161319]/90 backdrop-blur-2xl"
            >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.08] via-transparent to-white/[0.04]" />
                <div className="relative z-10 overflow-hidden lg:hidden">
                    <div className="animate-ribbon-scroll mx-auto flex w-max items-center gap-4 px-4 py-3 sm:gap-6 sm:px-8" style={{ animationDuration: "34s" }}>
                        {loopedTrustBarItems.map((item, index) => (
                            <div key={`${item}-${index}`} className="inline-flex h-10 min-w-[220px] shrink-0 items-center gap-3 sm:min-w-[260px]">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#6D39B5]/30 text-[#cfa8ff]">
                                    <Check className="h-3.5 w-3.5" />
                                </span>
                                <span className="whitespace-nowrap text-[12px] font-medium text-white/82 sm:text-[13px]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative z-10 mx-auto hidden max-w-[1400px] grid-cols-5 items-center gap-8 px-10 py-4 lg:grid">
                    {trustBarItems.map((item) => (
                        <div key={item} className="inline-flex min-w-0 items-center gap-3">
                            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6D39B5]/30 text-[#cfa8ff]">
                                <Check className="h-3.5 w-3.5" />
                            </span>
                            <span className="whitespace-nowrap text-[13px] font-medium text-white/82">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroGlacial;
