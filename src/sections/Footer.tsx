import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  process: [
    { label: "Consultation", href: "/installation" },
    { label: "Design & Proposal", href: "/installation" },
    { label: "Site Inspection", href: "/installation" },
    { label: "Permitting", href: "/installation" },
    { label: "Installation", href: "/installation" },
    { label: "PTO Activation", href: "/installation" },
  ],
  products: [
    { label: "Solar Panels", href: "/solar-panels" },
    { label: "Battery Storage", href: "/battery" },
    { label: "Inverters", href: "/pricing-costs" },
    { label: "EV Chargers", href: "/ev-chargers" },
  ],
  plans: [
    { label: "0$ Down / EZ Plan", href: "/pricing-costs#ez-plan" },
    { label: "Finance to Own", href: "/pricing-costs#finance" },
    { label: "Outright Purchase", href: "/pricing-costs#purchase" },
    { label: "Prepaid Solar", href: "/pricing-costs#prepaid" },
  ],
  serviceArea: [
    { label: "California Service Map", href: "/locations" },
    { label: "SCE Territory", href: "/locations#sce" },
    { label: "PG&E Territory", href: "/locations#pge" },
    { label: "SDG&E Territory", href: "/locations#sdge" },
  ],
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Referrals", href: "/referrals" },
  ],
  legal: [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#161319] py-16 text-white sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="text-2xl font-bold tracking-tight inline-block">
              SolarFig
            </a>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              <a 
                href="tel:+12133064154"
                className="flex items-center gap-2 text-sm text-white transition-colors hover:text-white/80"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>(213) 306-4154</span>
              </a>
              <a 
                href="mailto:info@solarfig.com"
                className="flex items-center gap-2 text-sm text-white transition-colors hover:text-white/80"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>info@solarfig.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-white">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                <span>4930 Campus Drive, 92660, Newport Beach, CA</span>
              </div>
            </div>
          </div>

          {/* Process */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Process</h4>
            <ul className="space-y-2.5">
              {footerLinks.process.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition-colors hover:text-white/80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition-colors hover:text-white/80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Plans</h4>
            <ul className="space-y-2.5">
              {footerLinks.plans.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition-colors hover:text-white/80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Service Area</h4>
            <ul className="space-y-2.5">
              {footerLinks.serviceArea.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition-colors hover:text-white/80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Explore</h4>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition-colors hover:text-white/80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-white transition-colors hover:text-white/80">Home</a>
            <a href="#contact" className="text-sm text-white transition-colors hover:text-white/80">Contact Us</a>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-white sm:gap-4">
            {footerLinks.legal.map((link, index) => (
              <span key={link.label} className="flex items-center gap-4">
                <a href={link.href} className="transition-colors hover:text-white/80">
                  {link.label}
                </a>
                {index === 0 && <span className="hidden text-white/50 sm:inline">|</span>}
              </span>
            ))}
          </div>
          
          <p className="text-xs text-white">
            © {new Date().getFullYear()} SolarFig
          </p>
        </div>

        {/* Compliance Address */}
        <div className="mt-6 border-t border-white/10 pt-6 text-center">
          <p className="text-[10px] text-white">
            Mailing address for compliance: 2810 Jackson Ave PH3B, Long Island City, NY 11101
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
