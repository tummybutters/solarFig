import { Mail, Phone, MapPin } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { label: "Solar Panels", href: "/solar-panels" },
      { label: "Inverters", href: "/microinverters" },
      { label: "Energy Storage", href: "/battery" },
      { label: "EV Chargers", href: "/ev-chargers" },
    ],
  },
  {
    title: "Plans & Services",
    links: [
      { label: "Pricing & Costs", href: "/pricing-costs" },
      { label: "Installation Process", href: "/installation" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "California", href: "/locations" },
      { label: "Oregon", href: "/locations/oregon" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Educational Articles", href: "/articles" },
      { label: "Referral Program", href: "/referrals" },
    ],
  },
];

const legalLinks = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="bg-[#161319] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Main Footer Grid */}
        <div className="mb-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12 xl:gap-x-10">
          {/* Brand Column */}
          <div className="space-y-5 pb-2 sm:col-span-2 lg:col-span-3">
            <a href="/" className="inline-flex items-center">
              <img
                src="/assets/logo/footer-logo-white.svg"
                alt="Solarfig"
                className="h-10 w-auto object-contain"
              />
            </a>

            <div className="h-px w-20 bg-gradient-to-r from-white/35 to-white/0" />
            
            {/* Contact Info */}
            <div className="space-y-3 pt-1">
              <a 
                href="tel:+12133064154"
                className="flex items-center gap-2.5 text-sm text-white transition-colors hover:text-white/80"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>(213) 306-4154</span>
              </a>
              <a 
                href="mailto:info@solarfig.com"
                className="flex items-center gap-2.5 text-sm text-white transition-colors hover:text-white/80"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>info@solarfig.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm leading-relaxed text-white">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>
                  <span className="block">4930 Campus Drive</span>
                  <span className="block whitespace-nowrap">Newport Beach, CA</span>
                  <span className="block">92660</span>
                </span>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 lg:hidden">
            <Accordion type="multiple" className="border-y border-white/10">
              {footerSections.map((section) => (
                <AccordionItem key={section.title} value={section.title} className="border-white/10">
                  <AccordionTrigger className="py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 hover:no-underline">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="space-y-3 pl-1">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} className="text-sm text-white transition-colors hover:text-white/75">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="hidden lg:col-span-2 lg:block">
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white transition-colors hover:text-white/75">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-7">
            <a href="/" className="text-sm text-white transition-colors hover:text-white/80">Home</a>
            <a href="/contact" className="text-sm text-white transition-colors hover:text-white/80">Contact Us</a>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/85 sm:gap-4">
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-4">
                <a href={link.href} className="transition-colors hover:text-white/80">
                  {link.label}
                </a>
                {index === 0 && <span className="hidden text-white/40 sm:inline">•</span>}
              </span>
            ))}
          </div>
          
          <p className="text-xs text-white/85">
            © {new Date().getFullYear()} Solarfig
          </p>
        </div>

        {/* Compliance Address */}
        <div className="mt-7 border-t border-white/10 pt-6 text-center">
          <p className="mx-auto max-w-3xl text-[10px] leading-relaxed text-white/85">
            Mailing address for compliance: 2810 Jackson Ave PH3B, Long Island City, NY 11101
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
