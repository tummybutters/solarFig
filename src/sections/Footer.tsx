import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Solar Panels", href: "/solar-panels" },
    { label: "Inverters", href: "/microinverters" },
    { label: "Energy Storage", href: "/battery" },
    { label: "EV Chargers", href: "/ev-chargers" },
  ],
  plansAndServices: [
    { label: "Pricing & Costs", href: "/pricing-costs" },
    { label: "Installation Process", href: "/installation" },
  ],
  locations: [
    { label: "California", href: "/locations" },
    { label: "Oregon", href: "/locations/oregon" },
  ],
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Educational Articles", href: "/articles" },
    { label: "Referral Program", href: "/referrals" },
  ],
  legal: [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#161319] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Main Footer Grid */}
        <div className="mb-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-12">
          {/* Brand Column */}
          <div className="space-y-5 pb-2 sm:col-span-2 lg:col-span-4">
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
                <span>4930 Campus Drive, Newport Beach, CA 92660</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition-colors hover:text-white/75">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans and Services */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">Plans &amp; Services</h4>
            <ul className="space-y-3">
              {footerLinks.plansAndServices.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition-colors hover:text-white/75">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">Locations</h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition-colors hover:text-white/75">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition-colors hover:text-white/75">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-7">
            <a href="/" className="text-sm text-white transition-colors hover:text-white/80">Home</a>
            <a href="/contact" className="text-sm text-white transition-colors hover:text-white/80">Contact Us</a>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/85 sm:gap-4">
            {footerLinks.legal.map((link, index) => (
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
