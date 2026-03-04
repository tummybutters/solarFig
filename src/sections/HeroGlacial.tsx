import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const heroVideos = [
    "/assets/hero-main/elevenlabs-video-topaz-upscale-2026-03-04t18-49-47-h264.mp4",
    "/assets/hero-main/hero-background-sequence-02.mp4",
    "/assets/hero-main/hero-background-sequence-03.mp4",
    "/assets/hero-main/hero-background-sequence-04.mp4",
    "/assets/hero-main/sustainable-hillside-community-drone-shot-1080p.mp4",
];

const trustBarItems = [
    "30+ Years of Experience",
    "High-Efficiency Products",
    "Quality Workmanship",
    "Robust Warranties",
    "Dedicated Support",
];

const HeroGlacial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handleVideoEnd = () => {
        setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    };

    useEffect(() => {
        // Ensure only the active video is playing
        videoRefs.current.forEach((video, index) => {
            if (!video) return;
            if (index === currentIndex) {
                video.currentTime = 0;
                video.play().catch(() => { });
            }
        });
    }, [currentIndex]);

    // Initial play effect
    useEffect(() => {
        const firstVideo = videoRefs.current[0];
        if (firstVideo) {
            firstVideo.play().catch(() => { });
        }
    }, []);

    return (
        <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-900 text-white sm:min-h-screen">
            {/* Background Image / Video Layer */}
            <div className="absolute inset-0 z-0 bg-slate-900">
                {/* Neutral overlay for text readability */}
                <div
                    className={`absolute inset-0 z-20 transition-colors duration-700 ${currentIndex === 1
                            ? "bg-gradient-to-t from-black/80 via-black/52 to-black/20"
                            : "bg-gradient-to-t from-black/68 via-black/40 to-black/12"
                        }`}
                />

                {heroVideos.map((src, index) => (
                    <video
                        key={src}
                        ref={(el) => {
                            videoRefs.current[index] = el;
                        }}
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                        muted
                        playsInline
                        preload={index === currentIndex || index === (currentIndex + 1) % heroVideos.length ? "auto" : "metadata"}
                        onEnded={index === currentIndex ? handleVideoEnd : undefined}
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-20 mx-auto grid min-h-[92vh] max-w-[1400px] grid-cols-1 items-start gap-8 px-5 pb-12 pt-28 sm:min-h-screen sm:items-end sm:gap-10 sm:px-8 sm:pb-20 sm:pt-28 lg:items-end lg:gap-10 lg:pb-24 lg:pt-28">

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

            <div className="relative z-30 border-t border-white/20 bg-[#130e1f]/45 backdrop-blur-sm">
                <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 px-5 py-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:gap-4">
                    {trustBarItems.map((item) => (
                        <div key={item} className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/82">
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#6D39B5]/30 text-[#cfa8ff]">
                                <Check className="h-3.5 w-3.5" />
                            </span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroGlacial;
