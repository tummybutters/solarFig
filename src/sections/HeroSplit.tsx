import { ArrowRight } from "lucide-react";

const HeroSplit = () => {
    return (
        <section className="relative min-h-screen w-full bg-purple-950 text-white lg:grid lg:grid-cols-2">
            {/* Left Content - Solid & Clean */}
            <div className="relative z-20 flex flex-col justify-center px-8 py-20 sm:px-12 lg:px-20 lg:py-0">
                <div className="max-w-lg">
                    <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                        Solarfig 2024 Collection
                    </span>

                    <h1
                        className="text-6xl leading-[0.9] text-white sm:text-7xl lg:text-8xl"
                        style={{ fontFamily: "'Fraunces', serif" }}
                    >
                        Own <br />
                        your <br />
                        <span className="text-purple-300/90 italic">energy.</span>
                    </h1>

                    <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center">
                        <button className="group relative overflow-hidden bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-purple-950 transition-all hover:bg-purple-100">
                            <span className="relative z-10 flex items-center gap-2">
                                View Plans <ArrowRight className="h-4 w-4" />
                            </span>
                        </button>

                        <button className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                            How it works
                        </button>
                    </div>
                </div>

                {/* Minimal Footer in Left Col */}
                <div className="absolute bottom-10 left-8 right-8 hidden justify-between lg:flex">
                    <p className="text-[10px] uppercase tracking-widest text-purple-200/40">
                        Scroll to explore
                    </p>
                </div>
            </div>

            {/* Right Content - The Video */}
            <div className="relative h-[50vh] w-full lg:h-screen lg:w-full">
                <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply z-10" /> {/* Tints video slightly purple */}

                {/* Placeholder for video - using image for now */}
                <img
                    src="/assets/Solar installers at sunset.png"
                    alt="Visual"
                    className="h-full w-full object-cover object-center"
                />
                {/* 
          TODO: Replace with actual video:
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>...</video>
        */}

                {/* Floating "Sound On" or Video Control if needed */}
                <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
                    <div className="h-10 w-10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                        <div className="h-3 w-0.5 bg-white/80 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSplit;
