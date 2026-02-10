import CardStack from "@/components/CardStack";
import MagneticFlightButton from "@/components/MagneticFlightButton";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 h-full">
        {/* Navbar-like spacer if needed, or just padding */}
        <div className="pt-20 lg:pt-24 h-full flex flex-col justify-center pb-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Column - Branding Text */}
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-white tracking-tighter leading-[0.9]">
                  Sweat
                  <br />
                  together
                </h1>
              </div>

              <div className="space-y-4 max-w-sm">
                <div className="space-y-2">
                  <h2 className="text-lg lg:text-xl font-medium text-white/90">
                    Where wellness
                    <br />
                    meets the party
                  </h2>
                  <div className="w-8 h-0.5 bg-white/50" />
                </div>

                <p className="text-white/70 text-xs lg:text-sm leading-relaxed">
                  Orange County's only mobile wood-burning sauna. Private events,
                  public gatherings, and a community that resets together.
                </p>

                <MagneticFlightButton />
              </div>
            </div>

            {/* Right Column - Card Stack (Carousel) */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative">
                <CardStack />
              </div>
            </div>
          </div>

          {/* Footer/Scroll indicator area matching reference */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end border-t border-white/20 pt-4">
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
