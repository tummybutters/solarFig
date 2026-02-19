import { solarArticlesBySlug } from "@/content/articles";

export const SITE_URL = "https://solarfig.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/og-image.jpg`;

type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website" | "article";
  image?: string;
  noIndex?: boolean;
};

const HOME_META: SeoMeta = {
  title: "California Home Solar, Battery Backup & EV Charging | Solarfig",
  description:
    "California solar installation for solar panels, home solar battery backup, and EV charging. Custom design, clean installs, and end-to-end project delivery.",
  canonicalPath: "/",
  ogType: "website",
  image: DEFAULT_OG_IMAGE,
};

const ROUTE_META: Record<string, SeoMeta> = {
  "/": HOME_META,
  "/battery": {
    title: "Home Solar Battery Backup in California | Solarfig",
    description:
      "Install a home solar battery backup system for outage protection and better NEM 3.0 performance. Premium design, permitting, and installation by Solarfig.",
    canonicalPath: "/battery",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/ev-chargers": {
    title: "EV Charger Installation for Home Solar | Solarfig",
    description:
      "Add EV charging to your home solar system with code-compliant installation, smart load planning, and clean integration with solar panels and battery storage.",
    canonicalPath: "/ev-chargers",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/projects": {
    title: "California Solar Panel & Battery Projects | Solarfig",
    description:
      "See real California home solar, solar panel, and battery backup projects across SCE, PG&E, and SDG&E territories.",
    canonicalPath: "/projects",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/about": {
    title: "About Solarfig | California Solar Team",
    description:
      "Meet the team behind Solarfig and how we deliver solar panels, battery backup, and EV charging projects from quote to PTO.",
    canonicalPath: "/about",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/articles": {
    title: "California Solar, Battery & EV Charging Guides | Solarfig",
    description:
      "Simple, practical guides on California home solar, solar panel costs, battery backup, EV charging, NEM 3.0, and quote comparison.",
    canonicalPath: "/articles",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/careers": {
    title: "Careers at Solarfig",
    description:
      "Explore careers at Solarfig in sales, operations, and customer experience supporting premium California solar projects.",
    canonicalPath: "/careers",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/referrals": {
    title: "Solarfig Home Solar Referral Program",
    description:
      "Refer homeowners for solar panels, battery backup, or EV charging projects and earn rewards after completed installation.",
    canonicalPath: "/referrals",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/privacy-policy": {
    title: "Privacy Policy | Solarfig",
    description: "Review how Solarfig collects, uses, and protects personal data.",
    canonicalPath: "/privacy-policy",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/terms-of-use": {
    title: "Terms of Use | Solarfig",
    description: "Read the terms that govern use of Solarfig's website and services.",
    canonicalPath: "/terms-of-use",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/whole-home-solar": {
    title: "Whole Home Solar Systems in California | Solarfig",
    description:
      "Design a full home solar system with solar panels, battery backup, EV charging, and smart controls built for California homes.",
    canonicalPath: "/whole-home-solar",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/pricing-costs": {
    title: "California Home Solar Pricing, Battery & EV Options | Solarfig",
    description:
      "Compare transparent pricing for solar panels, home solar battery systems, and EV charging with $0-down, finance, prepaid, and cash options.",
    canonicalPath: "/pricing-costs",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/solar-panels": {
    title: "Solar Panel Installation for California Homes | Solarfig",
    description:
      "Premium solar panel installation with system design focused on roof fit, efficiency, long-term performance, and California utility rates.",
    canonicalPath: "/solar-panels",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/microinverters": {
    title: "Microinverter Solar Panel Systems | Solarfig",
    description:
      "Learn when microinverter solar panel systems are best for complex roofs, partial shade, and premium panel-level monitoring.",
    canonicalPath: "/microinverters",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/smart-electrical-panels": {
    title: "Smart Electrical Panels for Home Solar | Solarfig",
    description:
      "Upgrade to smart electrical panels that coordinate solar panels, battery backup, and EV charging while prioritizing critical home loads.",
    canonicalPath: "/smart-electrical-panels",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/solar-battery-incentives": {
    title: "California Solar Panel & Battery Incentives | Solarfig",
    description:
      "Understand federal credits and California incentive pathways for solar panels and battery backup with clear, practical eligibility guidance.",
    canonicalPath: "/solar-battery-incentives",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/locations": {
    title: "California Service Areas for Home Solar | Solarfig",
    description:
      "Check Solarfig service coverage for home solar, battery backup, and EV charging across SCE, PG&E, and SDG&E territories.",
    canonicalPath: "/locations",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
};

export const getSeoMetaForPath = (pathname: string): SeoMeta => {
  const articleSlugMatch = pathname.match(/^\/articles\/([^/]+)$/);
  if (articleSlugMatch) {
    const article = solarArticlesBySlug[articleSlugMatch[1]];
    if (article) {
      return {
        title: `${article.title} | Solarfig`,
        description: `${article.excerpt} California home solar guide from Solarfig.`,
        canonicalPath: `/articles/${article.slug}`,
        ogType: "article",
        image: `${SITE_URL}${article.image}`,
      };
    }
  }

  return ROUTE_META[pathname] ?? {
    ...HOME_META,
    noIndex: true,
    title: "Page Not Found | Solarfig",
    canonicalPath: pathname || "/",
  };
};

export const toAbsoluteUrl = (pathOrUrl: string): string => {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalizedPath}`;
};
