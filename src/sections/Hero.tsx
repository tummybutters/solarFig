import CardStack from "@/components/CardStack";
import MagneticFlightButton from "@/components/MagneticFlightButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 h-screen">
        {/* Navbar-like spacer if needed, or just padding */}
        <div className="pt-24 lg:pt-32 h-full flex flex-col justify-center">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pb-20">
            {/* Left Column - Branding Text */}
            <div className="flex flex-col justify-center space-y-12">
              <div className="space-y-2">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
                  Sweat
                  <br />
                  together
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <h2 className="text-2xl font-medium text-white/90">
                    Where wellness
                    <br />
                    meets the party
                  </h2>
                  <div className="w-8 h-0.5 bg-white/50" />
                </div>

                <p className="text-white/70 text-sm leading-relaxed">
                  Orange County's only mobile wood-burning sauna. Private events,
                  public gatherings, and a community that resets together.
                </p>

                <MagneticFlightButton />
              </div>
            </div>

            {/* Right Column - Card Stack (Carousel) */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative">
                {/* Text floating near carousel like reference "We are distinction" could go here or be omitted based on "carousel to the right" */}
                <div className="absolute -right-4 -bottom-12 lg:-right-12 lg:bottom-12 pointer-events-none z-0 opacity-50 hidden lg:block">
                  <h2 className="text-6xl lg:text-7xl font-bold text-white tracking-tighter text-right">
                    We are
                    <br />
                    community
                  </h2>
                </div>

                <CardStack />
              </div>
            </div>
          </div>

          {/* Footer/Scroll indicator area matching reference */}
          <div className="absolute bottom-12 left-6 right-6 flex justify-between items-end border-t border-white/20 pt-6">
            <div className="hidden sm:block">
              <span className="text-white/50 text-xs tracking-widest uppercase">Scroll Down</span>
            </div>
            <div className="text-right">
              <span className="text-white/50 text-xs tracking-widest uppercase">To Start The Journey</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
