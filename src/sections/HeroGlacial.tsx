import { useLayoutEffect, useRef } from "react";
import { Check } from "lucide-react";

const heroVideo = "/assets/hero-video/solarfig-home-hero.mp4";

const trustBarItems = [
    "30+ Years of Experience",
    "High-Efficiency Solutions",
    "Quality Workmanship",
    "Robust Warranties",
    "Dedicated Support",
];

const HeroGlacial = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const bannerRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const banner = bannerRef.current;
        const navbar = document.querySelector<HTMLElement>("[data-site-navbar]");

        if (!section || !banner || !navbar) return;

        const updateHeroViewportFit = () => {
            const navbarRect = navbar.getBoundingClientRect();
            const bannerRect = banner.getBoundingClientRect();

            const navbarOffset = `${Math.round(navbarRect.bottom)}px`;
            const bannerHeight = `${Math.round(bannerRect.height)}px`;

            section.style.setProperty("--home-hero-navbar-offset", navbarOffset);
            section.style.setProperty("--home-hero-banner-height", bannerHeight);
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
        >
            {/* Background Image / Video Layer */}
            <div className="absolute inset-0 z-0 bg-slate-900">
                {/* Neutral overlay for text readability */}
                <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-black/80 via-black/52 to-black/20" />
                <video
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            {/* Content Container */}
            <div
                className="hero-overlay-shell relative z-20 grid grid-cols-1 items-center gap-8 sm:gap-10 lg:gap-10"
            >

                {/* Left Side: Main Text Content */}
                <div className="hero-copy">
                    <h1 className="hero-title text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.65)]">
                        Smarter Solar Starts with Solarfig.
                    </h1>

                    <h2 className="hero-subtitle text-blue-100/90 drop-shadow-[0_3px_20px_rgba(0,0,0,0.45)]">
                        Transparent pricing. Expert installation. Energy independence made simple. Figure out if solar makes sense for your home.
                    </h2>

                    <div className="mobile-inline-actions flex flex-wrap gap-3 sm:gap-4">
                        <a
                            href="#contact"
                            className="action-pill action-pill--dark hero-cta shadow-[0_0_25px_rgba(109,57,181,0.4)] hover:scale-105 active:scale-95"
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
                <div className="site-shell relative z-10 mx-auto hidden grid-cols-5 items-center gap-6 px-6 py-4 sm:px-8 lg:grid lg:px-12">
                    {trustBarItems.map((item) => (
                        <div key={item} className="flex min-w-0 justify-center">
                            <div className="inline-flex min-w-0 items-center gap-3">
                            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6D39B5]/30 text-[#cfa8ff]">
                                <Check className="h-3.5 w-3.5" />
                            </span>
                            <span className="whitespace-nowrap text-[13px] font-medium text-white/82">{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroGlacial;
