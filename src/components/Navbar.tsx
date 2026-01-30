const Navbar = () => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Benefits", href: "#benefits" },
    { label: "Global", href: "#global" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 sm:px-8 py-8">
      <div className="max-w-[1400px] mx-auto flex justify-between items-start">
        {/* Left Side - Navigation Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative px-3 py-1.5 rounded-xl text-white text-sm font-medium tracking-wide overflow-hidden"
            >
              {/* Background that slides up from bottom - fixed width, only height animates */}
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-white/15 rounded-xl transition-[height] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-full" />

              {/* Text container with overflow hidden */}
              <span className="relative block h-[1.25rem] overflow-hidden">
                {/* Text wrapper that slides up */}
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                  <span className="block h-[1.25rem] leading-[1.25rem]">{link.label}</span>
                  <span className="block h-[1.25rem] leading-[1.25rem]">{link.label}</span>
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Right Side - Contact Info */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="tel:+15550000000"
            className="group relative px-3 py-1.5 rounded-xl text-white text-sm font-medium tracking-wide overflow-hidden"
          >
            {/* Background that slides up from bottom - fixed width, only height animates */}
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-white/15 rounded-xl transition-[height] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-full" />

            <span className="relative block h-[1.25rem] overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                <span className="block h-[1.25rem] leading-[1.25rem]">+1 555 000 0000</span>
                <span className="block h-[1.25rem] leading-[1.25rem]">+1 555 000 0000</span>
              </span>
            </span>
          </a>
          <a
            href="mailto:info@resetwellness.com"
            className="group relative px-3 py-1.5 rounded-xl text-white text-sm font-medium tracking-wide overflow-hidden"
          >
            {/* Background that slides up from bottom - fixed width, only height animates */}
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-white/15 rounded-xl transition-[height] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-full" />

            <span className="relative block h-[1.25rem] overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
                <span className="block h-[1.25rem] leading-[1.25rem]">info@resetwellness.com</span>
                <span className="block h-[1.25rem] leading-[1.25rem]">info@resetwellness.com</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
