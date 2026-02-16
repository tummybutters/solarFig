import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Process",
    href: "#",
    children: [
      { label: "Consultation", href: "#consultation" },
      { label: "Inspection", href: "#inspection" },
      { label: "Permitting", href: "#permitting" },
      { label: "Installation", href: "#installation" },
    ],
  },
  {
    label: "Products",
    href: "#",
    children: [
      { label: "Solar Panels", href: "#solar-panels" },
      { label: "Inverters", href: "#inverters" },
      { label: "Batteries and ESS", href: "#batteries" },
      { label: "EV Chargers", href: "#ev-chargers" },
    ],
  },
  {
    label: "Plans & Services",
    href: "#",
    children: [
      { label: "Pricing & Costs", href: "#pricing" },
      { label: "Installation & Partners", href: "#partners" },
    ],
  },
  {
    label: "Explore",
    href: "#",
    children: [
      { label: "About Us", href: "#about" },
      { label: "Reviews", href: "#reviews" },
      { label: "Articles", href: "#articles" },
      { label: "Referrals", href: "#referrals" },
    ],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 sm:px-8 py-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-start" ref={dropdownRef}>
        {/* Left Side - Logo */}
        <div className="hidden md:flex items-center">
          <a href="/" className="block">
            <img 
              src="/assets/solarfig logo.svg" 
              alt="SolarFig" 
              className="h-8 w-auto brightness-0 invert"
            />
          </a>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Nav Item */}
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                    toggleDropdown(item.label);
                  }
                }}
                className="group relative px-3 py-1.5 rounded-xl text-white text-sm font-medium tracking-wide overflow-hidden flex items-center gap-1"
              >
                {/* Background that slides up from bottom */}
                <span className="absolute bottom-0 left-0 right-0 h-0 bg-purple-500/20 rounded-xl transition-[height] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-full" />

                {/* Text container with overflow hidden */}
                <span className="relative block h-[1.25rem] overflow-hidden">
                  {/* Text wrapper that slides up */}
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                    <span className="block h-[1.25rem] leading-[1.25rem]">{item.label}</span>
                    <span className="block h-[1.25rem] leading-[1.25rem]">{item.label}</span>
                  </span>
                </span>

                {/* Dropdown arrow */}
                {item.children && (
                  <ChevronDown 
                    className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                  />
                )}
              </a>

              {/* Dropdown Menu */}
              {item.children && activeDropdown === item.label && (
                <div 
                  className="absolute top-full left-0 mt-2 py-2 px-1 min-w-[180px] bg-black/60 backdrop-blur-xl rounded-xl shadow-xl shadow-black/20 border border-white/10 overflow-hidden"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    animation: 'dropdownSlide 0.3s cubic-bezier(0.19,1,0.22,1)',
                  }}
                >
                  {item.children.map((child, index) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-white/90 rounded-lg transition-all duration-200 hover:bg-white/10 hover:text-white"
                      style={{
                        animation: `dropdownItem 0.3s cubic-bezier(0.19,1,0.22,1) ${index * 0.03}s both`,
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Phone & CTA */}
        <div className="hidden md:flex items-center gap-1">
          {/* Phone */}
          <a
            href="tel:+12133064154"
            className="group relative px-3 py-1.5 rounded-xl text-white text-sm font-medium tracking-wide overflow-hidden"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-purple-500/20 rounded-xl transition-[height] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-full" />

            <span className="relative block h-[1.25rem] overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                <span className="block h-[1.25rem] leading-[1.25rem]">(213) 306-4154</span>
                <span className="block h-[1.25rem] leading-[1.25rem]">(213) 306-4154</span>
              </span>
            </span>
          </a>

          {/* Get a Quote - Slightly different, more defined */}
          <a
            href="/contact"
            className="group relative ml-2 px-4 py-1.5 rounded-xl text-white text-sm font-medium tracking-wide overflow-hidden border border-white/30 transition-all duration-300 hover:border-purple-400"
          >
            {/* Background that slides up - slightly more opaque */}
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-purple-600 rounded-xl transition-[height] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-full" />

            <span className="relative block h-[1.25rem] overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                <span className="block h-[1.25rem] leading-[1.25rem]">Get a Quote</span>
                <span className="block h-[1.25rem] leading-[1.25rem]">Get a Quote</span>
              </span>
            </span>
          </a>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex w-full items-center justify-between">
          <a href="/" className="block">
            <img 
              src="/assets/solarfig logo.svg" 
              alt="SolarFig" 
              className="h-7 w-auto brightness-0 invert"
            />
          </a>

          <div className="flex items-center gap-3">
            <a 
              href="tel:+12133064154" 
              className="hidden text-white text-sm font-medium tracking-wide min-[430px]:block"
            >
              (213) 306-4154
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-5 h-3.5 relative">
                <span 
                  className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isMobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'}`} 
                />
                <span 
                  className={`absolute left-0 top-1.5 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-2' : 'opacity-100'}`} 
                />
                <span 
                  className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isMobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col">
          {/* Close button area */}
          <div className="h-20" />
          
          {/* Navigation Items */}
          <div className="flex-1 flex flex-col justify-center px-8 overflow-y-auto">
            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <div 
                  key={item.label}
                  className={`transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50 + 100}ms` }}
                >
                  <div className="border-b border-white/10">
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="w-full py-4 flex items-center justify-between group"
                        >
                          <span className="text-white text-2xl font-semibold tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                            {item.label}
                          </span>
                          <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${activeDropdown === item.label ? 'bg-purple-600 border-purple-500 rotate-180' : 'group-hover:border-white/40'}`}>
                            <ChevronDown className="w-4 h-4 text-white" />
                          </div>
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                            activeDropdown === item.label ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pb-4 pl-4 space-y-3">
                            {item.children.map((child, childIndex) => (
                              <a
                                key={child.label}
                                href={child.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block text-white/70 text-lg hover:text-purple-300 transition-all duration-300 transform ${
                                  activeDropdown === item.label ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                                }`}
                                style={{ transitionDelay: `${childIndex * 50}ms` }}
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 text-white text-2xl font-semibold tracking-tight hover:text-purple-300 transition-colors duration-300"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </nav>
          </div>
          
          {/* Bottom CTA Section */}
          <div 
            className={`px-8 pb-12 pt-4 transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="text-white/40 text-sm">Get Started</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
            
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative block w-full text-center py-4 rounded-2xl bg-purple-600 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-purple-500 active:scale-[0.98]"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="tel:+12133064154"
              className="mt-3 flex items-center justify-center gap-2 py-3 text-white/60 text-sm hover:text-white transition-colors duration-300"
            >
              <span>Or call</span>
              <span className="text-white font-medium">(213) 306-4154</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes dropdownItem {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
