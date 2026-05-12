import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, Phone, Sparkles, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { featuredNavLocations, serviceLocations } from "@/data/locations";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children: { label: string; href: string }[];
  featured: { label: string; title: string; href: string; image: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/solar-panels",
    children: [
      { label: "Solar Panels", href: "/solar-panels" },
      { label: "Inverters", href: "/microinverters" },
      { label: "Energy Storage", href: "/battery" },
      { label: "EV Chargers", href: "/ev-chargers" },
    ],
    featured: [
      {
        label: "Solar Panels",
        title: "Designed for Maximum Efficiency",
        href: "/solar-panels",
        image: "/assets/navbar/nav-products-designed-for-maximum-efficiency.webp",
      },
      {
        label: "Energy Storage",
        title: "Batteries & Energy Storage: Stay Powered Up!",
        href: "/battery",
        image: "/assets/navbar/nav-products-batteries-energy-storage-stay-powered-up.webp",
      },
    ],
  },
  {
    label: "Plans & Services",
    href: "/pricing-costs",
    children: [
      { label: "Pricing & Costs", href: "/pricing-costs" },
      { label: "Installation Process", href: "/installation" },
    ],
    featured: [
      {
        label: "Pricing & Costs",
        title: "Understand Solar Pricing & Costs",
        href: "/pricing-costs",
        image: "/assets/navbar/nav-plans-understand-solar-pricing-costs.webp",
      },
      {
        label: "Installation Process",
        title: "How Solar Installation Works",
        href: "/installation",
        image: "/assets/navbar/nav-plans-how-solar-installation-works.webp",
      },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: serviceLocations.map((location) => ({ label: location.name, href: location.href })),
    featured: featuredNavLocations.map((location) => ({
      label: location.name,
      title: location.navTitle,
      href: location.href,
      image: location.navImage,
    })),
  },
  {
    label: "Explore",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Educational Articles", href: "/articles" },
      { label: "Referral Program", href: "/referrals" },
    ],
    featured: [
      {
        label: "About Us",
        title: "Why Choose Solarfig? Who We Are",
        href: "/about",
        image: "/assets/navbar/nav-explore-why-choose-solarfig-who-we-are.webp",
      },
      {
        label: "Referral Program",
        title: "Refer a Friend and Earn Rewards!",
        href: "/referrals",
        image: "/assets/navbar/nav-explore-refer-a-friend-and-earn-rewards.webp",
      },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileItem, setActiveMobileItem] = useState(navItems[0].label);
  const navShellRef = useRef<HTMLDivElement | null>(null);

  const activeMobileNavItem = navItems.find((item) => item.label === activeMobileItem) ?? navItems[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handlePointerOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && navShellRef.current && !navShellRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerOutside);
    document.addEventListener("touchstart", handlePointerOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerOutside);
      document.removeEventListener("touchstart", handlePointerOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

    return (
    <div data-site-navbar className="fixed inset-x-0 top-[clamp(0.75rem,1.8vw,1.5rem)] z-50 flex justify-center px-[clamp(0.75rem,2vw,1.5rem)]">
      <div
        ref={navShellRef}
        className={cn(
          "relative flex min-h-[62px] w-full max-w-[1400px] items-center justify-between rounded-[16px] border border-white/10 bg-[#161319]/90 px-[clamp(0.75rem,1.9vw,1.55rem)] py-[clamp(0.45rem,0.9vw,0.72rem)] backdrop-blur-2xl transition-all duration-300 sm:min-h-[72px]",
          isScrolled ? "shadow-[0_24px_64px_-12px_rgba(0,0,0,0.6)]" : "shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)]"
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[16px] bg-gradient-to-r from-white/[0.08] via-transparent to-white/[0.04]" />
        {/* Logo */}
        <a href="/" className="relative z-[60] flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80">
          <img
            src="/assets/logo/white-logo-no-panel.png"
            alt="Solarfig"
            className="h-[clamp(2.15rem,3vw,2.7rem)] w-auto object-contain"
          />
          <span className="sr-only">Solarfig</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 lg:block">
          <NavigationMenu viewport={true}>
            <NavigationMenuList className="justify-center gap-1.5 lg:translate-x-3">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger
                    className={cn(
                      "group h-10 bg-transparent px-4 text-[13px] font-semibold tracking-[0.02em] text-white/80 transition-all hover:text-white focus:text-white data-[state=open]:text-white xl:px-5",
                      "rounded-md"
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-full grid-cols-[1fr_1.5fr] gap-12 px-12 py-12 bg-transparent lg:grid">
                      {/* Left Column: Vertical Links */}
                      <div className="space-y-8 border-r border-white/5 pr-12">
                        <div>

                          <ul className="flex flex-col space-y-3">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={child.href}
                                    className="group block text-[24px] font-medium tracking-tight text-white/70 transition-all hover:text-white"
                                  >
                                    {child.label}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column: Featured Cards (Exactly 2) */}
                      <div className="grid grid-cols-2 gap-6">
                        {item.featured.slice(0, 2).map((feature) => (
                          <a
                            key={feature.title}
                            href={feature.href}
                            className="group flex flex-col gap-4 overflow-hidden rounded-lg transition-all"
                          >
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-white/5 border border-white/10 transition-all group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)]">
                              <img
                                src={feature.image}
                                alt={feature.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold leading-tight text-white/80 transition-colors group-hover:text-white">
                                {feature.title}
                              </h4>
                              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white">
                                {feature.label}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>

            {/* Viewport is auto-rendered by NavigationMenu with viewport={true} */}
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-7">
          <a
            href="tel:+12133064154"
            className="text-[13px] font-semibold tracking-[0.02em] text-white transition-colors hover:text-purple-300"
          >
            (213) 306-4154
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-[8px] bg-[#6D39B5] px-6 text-[13px] font-bold tracking-tight text-white transition-all hover:bg-[#8553c2] hover:shadow-[0_0_25px_rgba(109,57,181,0.4)] hover:scale-105 active:scale-95 xl:px-7"
          >
            Get a quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="relative z-[60] flex items-center gap-2 lg:hidden">
          <a
            href="tel:+12133064154"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/15"
          >
            <Phone className="h-4 w-4" />
            <span className="sr-only">Call Solarfig</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/15"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="absolute left-0 right-0 top-[calc(100%+0.55rem)] z-[70] lg:hidden">
            <div className="overflow-hidden rounded-[10px] border border-white/10 bg-[#161319]/95 shadow-[0_32px_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
              <div className="border-b border-white/10 bg-white/[0.03] p-3">
                <div className="no-scrollbar flex gap-2 overflow-x-auto">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => setActiveMobileItem(item.label)}
                      className={cn(
                        "shrink-0 rounded-md px-3 py-2 text-[12px] font-semibold tracking-wide transition-colors",
                        activeMobileNavItem.label === item.label
                          ? "bg-white/10 text-white"
                          : "text-white/65 hover:bg-white/[0.05] hover:text-white"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 p-4">
                <div>

                  <div className="grid gap-1">
                    {activeMobileNavItem.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.05] hover:text-white"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {activeMobileNavItem.featured.slice(0, 2).map((feature) => (
                    <a
                      key={feature.title}
                      href={feature.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]"
                    >
                      <div className="relative aspect-[16/10] w-full">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-2.5">
                        <p className="line-clamp-2 text-xs font-semibold leading-snug text-white/80 transition-colors group-hover:text-white">
                          {feature.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-t border-white/10 p-3">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-[10px] bg-[#6D39B5] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#8553c2]"
                >
                  <Sparkles className="h-4 w-4" />
                  Get a quote
                </a>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Contact
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+12133064154"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="col-span-2 inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  (213) 306-4154
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
