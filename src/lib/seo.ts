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
  title: "Solar & Battery Installation for Homeowners | Solarfig",
  description: "Solarfig designs and installs solar panels, battery storage, and EV charging with clear proposals, clean installs, and end-to-end project delivery.",
  canonicalPath: "/",
  ogType: "website",
  image: DEFAULT_OG_IMAGE,
};

const ROUTE_META: Record<string, SeoMeta> = {
  "/": HOME_META,
  "/battery": {
    title: "Home Battery Storage for Solar | Solarfig",
    description: "Add battery storage to your solar system for outage backup, better evening energy use, and stronger day-to-night performance.",
    canonicalPath: "/battery",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/ev-chargers": {
    title: "Home EV Charger Installation | Solarfig",
    description: "Install a home EV charger with clean solar integration, code-compliant electrical planning, and battery-ready load management.",
    canonicalPath: "/ev-chargers",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/about": {
    title: "About Solarfig | Solar, Battery & EV Experts",
    description: "Meet the team behind Solarfig and see how we deliver solar, battery storage, and EV charging projects with a practical homeowner-first approach.",
    canonicalPath: "/about",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/articles": {
    title: "Solar Guides, Costs & Battery Insights | Solarfig",
    description: "Read clear solar guides on costs, batteries, electric bills, installation timelines, and how to compare installers with confidence.",
    canonicalPath: "/articles",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/referrals": {
    title: "Solar Referral Program | Solarfig",
    description: "Refer a homeowner to Solarfig for solar, battery storage, or EV charging and earn rewards after the project is installed.",
    canonicalPath: "/referrals",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/contact": {
    title: "Contact Solarfig | Solar Consultation & Quotes",
    description: "Talk with Solarfig about solar panels, battery storage, EV charging, pricing, timelines, and next steps for your home.",
    canonicalPath: "/contact",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/privacy-policy": {
    title: "Privacy Policy | Solarfig",
    description: "Review how Solarfig collects, uses, stores, and protects personal information shared through the website and consultation process.",
    canonicalPath: "/privacy-policy",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/terms-of-use": {
    title: "Website Terms of Use | Solarfig",
    description: "Read the terms that govern access to Solarfig's website, content, estimates, and related services.",
    canonicalPath: "/terms-of-use",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/pricing-costs": {
    title: "Solar Pricing & Financing Options | Solarfig",
    description: "Compare pricing for solar, battery storage, and EV charging with $0-down, finance, prepaid, and cash purchase options.",
    canonicalPath: "/pricing-costs",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/installation": {
    title: "Solar Installation Process From Quote to PTO | Solarfig",
    description: "See how a solar project moves from consultation and engineering through permitting, installation, inspection, and PTO.",
    canonicalPath: "/installation",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/solar-panels": {
    title: "Solar Panel Installation for Homes | Solarfig",
    description: "Explore premium solar panel installation designed around roof fit, long-term performance, and real-world energy savings.",
    canonicalPath: "/solar-panels",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/microinverters": {
    title: "Microinverters for Home Solar | Solarfig",
    description: "Learn when microinverters are the right fit for a home solar system, from shade resilience to panel-level monitoring and design tradeoffs.",
    canonicalPath: "/microinverters",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/solar-battery-incentives": {
    title: "Solar & Battery Incentives Guide | Solarfig",
    description: "Understand solar and battery incentives, tax credits, and the practical timing questions that affect project value.",
    canonicalPath: "/solar-battery-incentives",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/locations": {
    title: "California Solar Service Areas | Solarfig",
    description: "See where Solarfig installs solar panels, battery storage, and EV charging projects across California service areas.",
    canonicalPath: "/locations",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  "/locations/oregon": {
    title: "Oregon Solar Service Areas | Solarfig",
    description: "See where Solarfig supports solar, battery storage, and EV charging projects across Oregon service areas.",
    canonicalPath: "/locations/oregon",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
};

const ARTICLE_META_OVERRIDES: Record<string, Pick<SeoMeta, "title" | "description">> = {
  "is-solar-worth-it-california-2026": {
    title: "Is Solar Worth It in 2026? | Solarfig",
    description: "See when solar still pays off in 2026, how export rules change the math, and when battery storage improves long-term value.",
  },
  "california-solar-cost-after-incentives": {
    title: "Solar Cost After Incentives | Solarfig",
    description: "Break down solar pricing after incentives, tax credits, financing, and the quote details that matter before you compare installers.",
  },
  "electric-bill-after-solar-california": {
    title: "What Happens to Your Electric Bill After Solar? | Solarfig",
    description: "Learn how your electric bill changes after going solar, which charges remain, and how usage timing affects monthly savings.",
  },
  "do-i-need-a-battery-with-solar-california": {
    title: "Do I Need a Battery With Solar? | Solarfig",
    description: "Use a clear framework to decide when battery storage is optional, recommended, or essential for a home solar system.",
  },
  "california-solar-installation-timeline": {
    title: "Solar Installation Timeline From Quote to PTO | Solarfig",
    description: "See the typical solar timeline from quote to PTO, what slows projects down, and how to plan for permitting and installation.",
  },
  "nem-3-how-it-affects-california-solar-savings": {
    title: "NEM 3.0 Explained for Homeowners | Solarfig",
    description: "Understand NEM 3.0 export rates, self-consumption, and why system design matters more for long-term solar savings.",
  },
  "how-to-choose-a-solar-installer-california": {
    title: "How to Choose a Solar Installer | Solarfig",
    description: "Use this checklist to compare solar installers, warranties, financing terms, and proposal quality before you sign.",
  },
};

export const getSeoMetaForPath = (pathname: string): SeoMeta => {
  const articleSlugMatch = pathname.match(/^\/articles\/([^/]+)$/);
  if (articleSlugMatch) {
    const article = solarArticlesBySlug[articleSlugMatch[1]];
    if (article) {
      const articleMetaOverride = ARTICLE_META_OVERRIDES[article.slug];
      return {
        title: articleMetaOverride?.title ?? `${article.title} | Solarfig`,
        description: articleMetaOverride?.description ?? `${article.excerpt} Solar homeowner guide from Solarfig.`,
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
