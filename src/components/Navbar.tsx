import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
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
    label: "Solutions",
    href: "/solar-panels",
    children: [
      { label: "Solar Panels", href: "/solar-panels" },
      { label: "Battery Backup", href: "/battery" },
      { label: "EV Chargers", href: "/ev-chargers" },
      { label: "Microinverters", href: "/microinverters" },
      { label: "Smart Electrical Panels", href: "/smart-electrical-panels" },
      { label: "Whole Home Solar", href: "/whole-home-solar" },
    ],
    featured: [
      {
        label: "Featured Guide",
        title: "Battery Backup: Stay Powered Up!",
        href: "/battery",
        image: "/assets/whole-home-solar/battery-backup.webp",
      },
      {
        label: "Popular Option",
        title: "Whole Home Solar Systems",
        href: "/whole-home-solar",
        image: "/assets/whole-home-solar/whole-home-house.jpg",
      },
    ],
  },
  {
    label: "Plans & Services",
    href: "/pricing-costs",
    children: [
      { label: "0$ Down (EZ Plan)", href: "/pricing-costs#ez-plan" },
      { label: "Finance to Own", href: "/pricing-costs#finance" },
      { label: "Outright Purchase", href: "/pricing-costs#purchase" },
      { label: "Prepaid Solar", href: "/pricing-costs#prepaid" },
      { label: "Installation Process", href: "/installation" },
      { label: "Solar & Battery Incentives", href: "/solar-battery-incentives" },
    ],
    featured: [
      {
        label: "Planning",
        title: "Understand Solar Pricing & Costs",
        href: "/pricing-costs",
        image: "/assets/pricing-costs/hero-solar-roof-sunset.png",
      },
      {
        label: "Process",
        title: "How Solar Installation Works",
        href: "/installation",
        image: "/assets/Solar installers at sunset.png",
      },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "California Service Area", href: "/locations" },
      { label: "SCE Territory", href: "/locations/sce" },
      { label: "PG&E Territory", href: "/locations/pge" },
      { label: "SDG&E Territory", href: "/locations/sdge" },
    ],
    featured: [
      {
        label: "Coverage",
        title: "California Service Coverage",
        href: "/locations",
        image: "/assets/Solar installers at sunset.png",
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
      { label: "About SolarFig", href: "/about" },
      { label: "Educational Articles", href: "/articles" },
      { label: "Careers", href: "/careers" },
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
    <div className="fixed inset-x-0 top-6 z-50 flex justify-center px-6">
      <div
        className={cn(
          "relative flex w-full max-w-[1400px] items-center justify-between rounded-[10px] border border-white/10 bg-[#161319]/90 px-8 py-3 backdrop-blur-2xl transition-all duration-300",
          isScrolled ? "shadow-[0_24px_64px_-12px_rgba(0,0,0,0.6)]" : "shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)]"
        )}
      >
        {/* Logo */}
        <a href="/" className="relative z-[60] flex shrink-0 transition-opacity hover:opacity-80">
          <img
            src="/assets/solarfig logo.svg"
            alt="SolarFig"
            className="h-6 w-auto sm:h-7"
            style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(58%) saturate(2084%) hue-rotate(251deg) brightness(91%) contrast(90%)' }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 lg:block">
          <NavigationMenu viewport={true}>
            <NavigationMenuList className="justify-center gap-2">
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
            href="/#contact"
            className="inline-flex h-11 items-center justify-center rounded-[8px] bg-[#6D39B5] px-7 text-sm font-bold tracking-tight text-white transition-all hover:bg-[#8553c2] hover:shadow-[0_0_25px_rgba(109,57,181,0.4)] hover:scale-105 active:scale-95"
          >
            Get a quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l border-white/10 bg-[#120f16] p-0 text-white sm:w-[400px]">
              <SheetHeader className="border-b border-white/10 p-6 text-left">
                <SheetTitle className="text-lg font-semibold text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col overflow-y-auto pb-20 pt-2">
                <div className="flex-1 px-4">
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {navItems.map((item) => (
                      <AccordionItem key={item.label} value={item.label} className="border-b border-white/5 px-2">
                        <AccordionTrigger className="text-base font-medium text-white transition-colors hover:text-purple-300 hover:no-underline py-4">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-1 pb-4 pl-2">
                            {item.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="block rounded-md py-2 text-sm text-white/70 transition-colors hover:text-white"
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

                <div className="mt-auto space-y-4 border-t border-white/10 p-6">
                  <a
                    href="/#contact"
                    className="flex w-full items-center justify-center rounded-[8px] bg-[#6D39B5] py-4 text-base font-bold text-white transition-colors hover:bg-[#8553c2]"
                  >
                    Get a quote
                  </a>
                  <a
                    href="tel:+12133064154"
                    className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-white/10 bg-white/5 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
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

