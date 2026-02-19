import { Play } from "lucide-react";

const HeroHorizon = () => {
    return (
        <section className="relative h-screen w-full flex flex-col bg-purple-900">

            {/* Top 85% - Pure Visual */}
            <div className="relative flex-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />

                <div className="absolute inset-0 bg-purple-900" />
                {/* 
          TODO: Replace with actual video:
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>...</video>
        */}

                {/* Floating Headline - Very Large, Very Transparent */}
                <h1
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-[12vw] leading-none font-bold text-white/10 mix-blend-overlay pointer-events-none select-none"
                   
                >
                    SOLARFIG
                </h1>
            </div>

            {/* Bottom 15% - The Interface Bar */}
            <div className="relative z-30 flex h-[15vh] w-full items-center justify-between border-t border-white/10 bg-purple-950 px-8 text-white">

                {/* Left: Branding */}
                <div className="hidden sm:block">
                    <h2 className="text-xl font-light tracking-wide">
                        Solarfig™
                    </h2>
                    <p className="text-[10px] uppercase tracking-widest text-purple-200/50">California Edition</p>
                </div>

                {/* Center: Main Action */}
                <div className="flex flex-1 items-center justify-center">
                    <p className="mr-6 hidden text-sm font-light text-purple-100/70 sm:block">
                        Start your journey to independence.
                    </p>
                    <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-purple-950 transition-transform hover:scale-105">
                        Get a Quote
                    </button>
                </div>

                {/* Right: Video Control / Secondary */}
                <div className="hidden sm:flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-widest text-purple-200/50">Watch Film</span>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                        <Play className="h-3 w-3 fill-white text-white" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HeroHorizon;
