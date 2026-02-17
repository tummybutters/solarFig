import { Play, ArrowRight } from "lucide-react";

const HeroCinematic = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-purple-950 text-white">
            {/* Video Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-transparent to-transparent z-10" />

                <div className="absolute inset-0 bg-slate-900" />
                {/* 
          TODO: Replace with actual video when ready:
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="h-full w-full object-cover"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        */}
            </div>

            {/* Content Layer - Centered & Minimal */}
            <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

                {/* Subtle Brand Tag */}
                <div className="mb-8 overflow-hidden rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                    <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-purple-100">
                        Solarfig California
                    </span>
                </div>

                {/* Elegant Headline */}
                <h1
                    className="max-w-4xl text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl"
                    style={{ fontFamily: "'Fraunces', serif" }}
                >
                    Power, <span className="italic text-purple-200">Perfected.</span>
                </h1>

                {/* Minimal Subtext - Max 1 line */}
                <p className="mt-8 max-w-xl text-lg font-light text-purple-100/90 sm:text-xl">
                    The most advanced solar technology, designed for modern California living.
                </p>

                {/* Singular Interaction */}
                <div className="mt-12 flex items-center gap-6">
                    <button className="group flex h-14 items-center gap-3 rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-widest text-purple-950 transition-all hover:bg-purple-100 hover:px-10">
                        <span>Get Started</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/5 transition-all hover:scale-105 hover:bg-white/10 hover:border-white/60 backdrop-blur-sm">
                        <Play className="h-5 w-5 fill-white text-white opacity-90 ml-1" />
                    </button>
                </div>
            </div>

            {/* Scroll Indicator - Bottom */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
                <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
                <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
};

export default HeroCinematic;
