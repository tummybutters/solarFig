import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, Phone, Sparkles } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      { label: "Battery Backup", href: "/battery" },
      { label: "EV Chargers", href: "/ev-chargers" },
      { label: "Solar & Battery Incentives", href: "/solar-battery-incentives" },
      { label: "Projects Showcase", href: "/projects" },
    ],
    featured: [
      {
        label: "Featured Guide",
        title: "Battery Backup: Stay Powered Up!",
        href: "/battery",
        image: "/assets/battery/battery-span-tesla-pw3.jpg",
      },
      {
        label: "Popular Option",
        title: "Solar Panels for California Homes",
        href: "/solar-panels",
        image: "/assets/hero-main/solar-panels-h1-2026-02-17.jpg",
      },
    ],
  },
  {
    label: "Plans and Services",
    href: "/pricing-costs",
    children: [
      { label: "Pricing & Costs", href: "/pricing-costs" },
      { label: "Installation Process", href: "/installation" },
    ],
    featured: [
      {
        label: "Planning",
        title: "Understand Solar Pricing & Costs",
        href: "/pricing-costs",
        image: "/assets/pricing-costs/hero-solar-roof-sunset.webp",
      },
      {
        label: "Process",
        title: "How Solar Installation Works",
        href: "/installation",
        image: "/assets/install-gallery/install-05.jpg",
      },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "California Service Areas", href: "/locations" },
      { label: "SCE Territory", href: "/locations#sce" },
      { label: "PG&E Territory", href: "/locations#pge" },
      { label: "SDG&E Territory", href: "/locations#sdge" },
    ],
    featured: [
      {
        label: "Coverage",
        title: "California Service Coverage",
        href: "/locations",
        image: "/assets/install-gallery/install-01.webp",
      },
      {
        label: "Territories",
        title: "Find Your Utility Territory",
        href: "/locations",
        image: "/assets/install-gallery/install-04.jpg",
      },
    ],
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
        label: "Inside Solarfig",
        title: "Meet the Team Behind Solarfig",
        href: "/about",
        image: "/assets/install-gallery/install-08.jpg",
      },
      {
        label: "Latest Reads",
        title: "Explore Solar Tips and Articles",
        href: "/articles",
        image: "/assets/install-gallery/install-10.jpg",
      },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-6 sm:px-6">
      <div
        className={cn(
          "relative flex min-h-[60px] w-full max-w-[1400px] items-center justify-between rounded-[10px] border border-white/10 bg-[#161319]/90 px-3 py-2 backdrop-blur-2xl transition-all duration-300 sm:min-h-[78px] sm:px-8 sm:py-3",
          isScrolled ? "shadow-[0_24px_64px_-12px_rgba(0,0,0,0.6)]" : "shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)]"
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-r from-white/[0.08] via-transparent to-white/[0.04]" />
        {/* Logo */}
        <a href="/" className="relative z-[60] flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80">
          <img
            src="/assets/logo/white-logo-no-panel.png"
            alt="Solarfig"
            className="h-[2.3rem] w-auto object-contain sm:h-[2.6rem]"
          />
          <span className="sr-only">Solarfig</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 lg:block">
          <NavigationMenu viewport={true}>
            <NavigationMenuList className="justify-center gap-2 lg:translate-x-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger
                    className={cn(
                      "group h-10 bg-transparent px-4 text-[13px] font-semibold tracking-wide text-white/80 transition-all hover:text-white focus:text-white data-[state=open]:text-white",
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
                          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                            Explore {item.label}
                          </p>
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
                              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white">
                                Learn More
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
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="tel:+12133064154"
            className="text-[14px] font-semibold tracking-wide text-white transition-colors hover:text-purple-300"
          >
            (213) 306-4154
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-[8px] bg-[#6D39B5] px-7 text-sm font-bold tracking-tight text-white transition-all hover:bg-[#8553c2] hover:shadow-[0_0_25px_rgba(109,57,181,0.4)] hover:scale-105 active:scale-95"
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
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/15">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] border-l border-white/10 bg-[linear-gradient(180deg,#17131d_0%,#120f16_100%)] p-0 text-white sm:w-[360px]"
            >
              <SheetHeader className="border-b border-white/10 bg-white/[0.03] p-5 text-left sm:p-6">
                <SheetTitle className="text-lg font-semibold text-white">Menu</SheetTitle>
                <p className="mt-1 text-sm text-white/65">Solar solutions for California homes.</p>
              </SheetHeader>
              <div className="flex h-full flex-col overflow-y-auto pb-8 pt-1">
                <div className="flex-1 px-4 sm:px-5">
                  <Accordion type="single" collapsible className="w-full">
                    {navItems.map((item) => (
                      <AccordionItem key={item.label} value={item.label} className="border-b border-white/10 px-1">
                        <AccordionTrigger className="py-4 text-[15px] font-semibold text-white transition-colors hover:text-purple-300 hover:no-underline">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-1 pb-4">
                            {item.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="block rounded-lg px-3 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/[0.05] hover:text-white"
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="mt-auto space-y-2 border-t border-white/10 p-4 sm:p-5">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-[10px] bg-[#6D39B5] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#8553c2]"
                  >
                    <Sparkles className="h-4 w-4" />
                    Get a quote
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-[10px] border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Projects
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+12133064154"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    (213) 306-4154
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
