import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Private Events",
    subtitle: "Your space, elevated",
    description: "Birthdays, corporate retreats, and intimate gatherings transformed into unforgettable wellness experiences.",
    image: "/assets/private-events.jpg",
  },
  {
    id: 2,
    title: "Public Pop-ups",
    subtitle: "Community sweat sessions",
    description: "Beach days, festivals, and community gatherings where strangers become friends in the heat.",
    image: "/assets/popups.jpg",
  },
  {
    id: 3,
    title: "Partnerships",
    subtitle: "Collaborate with us",
    description: "Gyms, yoga studios, and wellness brands — bring the sauna experience to your community.",
    image: "/assets/partnerships.jpg",
  },
];

const ExperiencePill = ({ experience, index }: { experience: Experience; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-[320px] sm:h-[400px] lg:h-[460px] rounded-[2rem] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      >
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.9 : 0.7,
        }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        {/* Top Label */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className="text-white/60 text-[10px] tracking-widest uppercase font-medium">
            0{experience.id}
          </span>
          <div
            className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: isHovered ? "white" : "transparent",
              transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <ArrowUpRight 
              className="w-4 h-4 transition-colors duration-300"
              style={{
                color: isHovered ? "black" : "white",
              }}
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="space-y-2">
          {/* Subtitle */}
          <span 
            className="block text-white/70 text-xs tracking-wide transition-all duration-500"
            style={{
              transform: isHovered ? "translateY(0)" : "translateY(0)",
              opacity: 1,
            }}
          >
            {experience.subtitle}
          </span>

          {/* Title */}
          <h3 
            className="text-white text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight transition-all duration-500"
            style={{
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            {experience.title}
          </h3>

          {/* Description - Reveals on Hover */}
          <p
            className="text-white/70 text-xs leading-relaxed max-w-[220px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(20px)",
              maxHeight: isHovered ? "100px" : "0",
              overflow: "hidden",
            }}
          >
            {experience.description}
          </p>

          {/* CTA Line */}
          <div
            className="pt-2 transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <span className="text-white text-sm font-medium flex items-center gap-2">
              Learn more
              <span className="w-8 h-[1px] bg-white/50" />
            </span>
          </div>
        </div>
      </div>

      {/* Border Ring */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] border transition-all duration-500 pointer-events-none"
        style={{
          borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
        }}
      />
    </div>
  );
};

const Experiences = () => {
  return (
    <section id="experience" className="bg-white h-screen flex flex-col justify-center py-8 pt-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 lg:mb-10">
          <div className="space-y-4">
            <span className="text-gray-400 text-xs tracking-widest uppercase font-medium">
              What we offer
            </span>
            <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Three ways
              <br />
              to sweat
            </h2>
          </div>
          <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed lg:text-right">
            From intimate private gatherings to large community events, 
            we bring the heat wherever you need it.
          </p>
        </div>

        {/* Pills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {experiences.map((experience, index) => (
            <ExperiencePill
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="text-gray-400 text-xs">Not sure which fits you?</span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-gray-900 text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Let's talk it through
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
