export type MapGeometry = {
  viewBox: string;
  paths: string[];
};

export type LocationIcon = "sun" | "home" | "shield" | "badge" | "plug";

export type LocationCard = {
  title: string;
  description: string;
  icon: LocationIcon;
};

export type ServiceLocation = {
  slug: string;
  name: string;
  abbreviation: string;
  href: string;
  navTitle: string;
  navImage: string;
  heroImage: string;
  heroAlt: string;
  strategyImage: string;
  strategyImageAlt: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  introEyebrow: string;
  introTitle: string;
  introBody: string;
  strategyEyebrow: string;
  strategyTitle: string;
  strategyBody: string;
  ctaTitle: string;
  ctaBody: string;
  mapSeed: number;
  map: MapGeometry;
  highlights: LocationCard[];
  strategyCards: LocationCard[];
};

const californiaPath =
  "M 14.544 6.626 L 22.194 6.56 L 34.209 6.758 L 43.478 6.758 L 43.527 27.334 L 43.478 42.044 L 55.002 52.328 L 65.889 62.302 L 74.471 70.331 L 80.65 76.229 L 91.537 86.889 L 91.537 88.265 L 93.009 90.057 L 94.235 92.916 L 96 94.461 L 94.921 95.884 L 93.499 96.595 L 92.42 98.489 L 92.763 101.027 L 92.518 102.617 L 90.704 104.146 L 91.292 108.132 L 92.518 108.19 L 93.009 110.177 L 92.518 111.11 L 90.753 111.519 L 78.885 112.509 L 69.224 113.44 L 68.145 112.043 L 68.096 109.827 L 67.409 107.195 L 66.134 105.32 L 63.339 102.735 L 59.759 100.319 L 59.072 100.968 L 57.699 100.555 L 57.896 99.493 L 56.326 97.306 L 54.217 97.779 L 50.49 96.181 L 49.951 94.876 L 47.45 93.272 L 44.606 93.332 L 42.252 92.618 L 39.26 92.916 L 37.691 91.487 L 38.034 88.444 L 37.495 87.966 L 37.838 85.811 L 35.484 84.191 L 35.386 81.966 L 34.503 81.846 L 33.032 79.917 L 32.002 79.495 L 31.561 78.287 L 28.128 73.741 L 26.51 72.403 L 26.166 68.805 L 26.853 69.11 L 27.49 66.969 L 26.215 65.007 L 24.646 65.252 L 22.586 63.471 L 21.851 62.055 L 21.998 60.699 L 20.968 58.908 L 20.968 55.935 L 22.635 55.935 L 21.949 51.767 L 21.213 52.203 L 21.066 54.257 L 19.301 54.693 L 17.192 53.138 L 16.849 50.456 L 15.475 48.33 L 13.661 47.014 L 12.68 45.507 L 10.032 42.548 L 10.473 41.665 L 9.247 37.805 L 9.787 35.645 L 9.002 32.395 L 6.697 29.195 L 4.441 27.398 L 4 25.275 L 6.256 20.103 L 6.697 18.35 L 6.256 16.983 L 7.09 13.394 L 6.354 10.116 L 5.373 9.327 L 5.765 6.692 L 14.544 6.626 Z";

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    href: "/locations",
    navTitle: "Why California Remains the Best State for Solar",
    navImage: "/assets/navbar/nav-locations-why-california-remains-best-state-for-solar.webp",
    heroImage: "/assets/locations/california-header-image.webp",
    heroAlt: "Residential neighborhood with rooftop solar installations.",
    strategyImage: "/assets/locations/california-energy-structure.webp",
    strategyImageAlt: "California neighborhood rooftops with residential solar installations.",
    heroEyebrow: "California",
    heroTitle: "Built for California's New Energy Landscape",
    heroSubtitle: "Custom systems designed for NEM 3.0, time-of-use rates, and long-term savings.",
    introEyebrow: "Home & Climate Factors",
    introTitle: "Engineered for California conditions",
    introBody:
      "From coastal fog to inland heat, system performance depends on location. We design around sun exposure, roof geometry, and long-term durability.",
    strategyEyebrow: "Grid & Rate Strategy",
    strategyTitle: "Optimized for California's energy structure",
    strategyBody:
      "California's net billing structure, time-of-use rates, and grid instability require smarter system strategy.",
    ctaTitle: "Get a California estimate",
    ctaBody: "Get a clear projection of production, savings, and battery impact — built for California's grid.",
    mapSeed: 7331,
    map: {
      viewBox: "0 0 100 120",
      paths: [californiaPath],
    },
    highlights: [
      { title: "Sun & Heat Exposure", description: "Optimized for extreme sun", icon: "sun" },
      { title: "Roof Type & Layout", description: "Precision fit for any roof", icon: "home" },
      { title: "Coastal & Inland Conditions", description: "Materials matched to the environment", icon: "shield" },
    ],
    strategyCards: [
      { title: "Rate Volatility", description: "Designed for TOU and NEM shifts", icon: "badge" },
      { title: "Grid Reliability", description: "Backup planning for outages", icon: "shield" },
      { title: "Future Growth", description: "Expansion-ready from day one", icon: "plug" },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    href: "/locations/new-york",
    navTitle: "Solar in New York: Incentives, Rates, and Local Design",
    navImage: "/assets/navbar/nav-locations-solar-in-new-york-incentives-rates-local-design.webp",
    heroImage: "/assets/locations/new-york-header-image.webp",
    heroAlt: "New York suburban home with rooftop solar panels in late-afternoon light.",
    strategyImage: "/assets/locations/new-york-energy-strategy.webp",
    strategyImageAlt: "Aerial view of New York neighborhood homes with rooftop solar.",
    heroEyebrow: "New York",
    heroTitle: "Solar designed for New York homes and utilities",
    heroSubtitle: "Planning built around NY-Sun incentives, local utility billing, seasonal production, and battery-ready design.",
    introEyebrow: "Local Energy Design",
    introTitle: "Engineered for New York conditions",
    introBody:
      "New York projects need careful planning around roof geometry, winter production, utility rules, and incentive timing.",
    strategyEyebrow: "Utility & Incentive Strategy",
    strategyTitle: "Built around New York's solar programs",
    strategyBody:
      "We structure proposals around local utility interconnection, available state incentives, and a practical path to long-term savings.",
    ctaTitle: "Get a New York solar plan",
    ctaBody: "Compare solar, battery, and financing options shaped around your home, utility, and timeline.",
    mapSeed: 9101,
    map: {
      viewBox: "0 0 100 58",
      paths: [
        "M 78.92 4.06 L 78.43 8.47 L 79.47 10.49 L 77.88 14.89 L 78.86 17.95 L 78.24 18.87 L 80.02 20.71 L 79.77 29.40 L 77.08 36.74 L 76.59 45.62 L 77.39 46.53 L 74.63 47.76 L 75.43 49.04 L 80.20 49.96 L 81.18 49.29 L 87.36 48.92 L 90.79 47.15 L 91.03 48.43 L 92.81 48.98 L 80.08 53.08 L 72.31 54.00 L 71.33 52.16 L 72.67 48.92 L 63.31 44.09 L 61.60 44.02 L 59.58 42.13 L 59.82 40.47 L 56.40 37.72 L 7.19 37.72 L 7.19 34.72 L 14.05 31.54 L 15.15 30.01 L 17.35 28.97 L 15.58 26.71 L 14.90 23.65 L 21.45 22.36 L 29.59 22.73 L 32.10 23.95 L 41.46 22.73 L 44.58 20.71 L 46.60 20.65 L 46.66 17.59 L 47.71 15.81 L 45.20 14.59 L 45.75 13.18 L 50.21 11.28 L 57.25 5.90 L 62.33 4.00 L 78.92 4.06 Z",
      ],
    },
    highlights: [
      { title: "Seasonal Yield Planning", description: "Sized around winter and summer production", icon: "sun" },
      { title: "NY-Sun Readiness", description: "Designed with incentive timing in mind", icon: "badge" },
      { title: "Battery-Ready Homes", description: "Prepared for outage and evening-use goals", icon: "plug" },
    ],
    strategyCards: [
      { title: "Utility Review", description: "Interconnection-aware from the start", icon: "shield" },
      { title: "Roof Fit", description: "Engineered around shade, pitch, and snow load", icon: "home" },
      { title: "Future Electrification", description: "Room for EV and load growth", icon: "plug" },
    ],
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbreviation: "NJ",
    href: "/locations/new-jersey",
    navTitle: "Solar in New Jersey: Net Metering and Incentives",
    navImage: "/assets/navbar/nav-locations-solar-in-new-jersey-net-metering-incentives.webp",
    heroImage: "/assets/locations/new-jersey-header-image.webp",
    heroAlt: "New Jersey suburban home with rooftop solar panels.",
    strategyImage: "/assets/locations/new-jersey-energy-strategy.webp",
    strategyImageAlt: "Aerial view of compact New Jersey neighborhood rooftops with solar panels.",
    heroEyebrow: "New Jersey",
    heroTitle: "Solar built for New Jersey net metering and incentives",
    heroSubtitle: "Home solar plans designed around utility credits, state incentive value, and clean long-term performance.",
    introEyebrow: "Local Energy Design",
    introTitle: "Engineered for New Jersey homes",
    introBody:
      "Dense neighborhoods, mixed roof layouts, and local utility rules make careful proposal design especially important.",
    strategyEyebrow: "Net Metering & Incentives",
    strategyTitle: "Designed around New Jersey's solar economics",
    strategyBody:
      "We help homeowners compare production, net metering value, available incentive pathways, and storage options before committing.",
    ctaTitle: "Get a New Jersey solar plan",
    ctaBody: "See how solar, battery storage, and incentives could work for your New Jersey home.",
    mapSeed: 1123,
    map: {
      viewBox: "0 0 100 143",
      paths: [
        "M 77.48 18.06 L 96.00 25.96 L 89.32 42.05 L 80.21 45.69 L 75.35 54.19 L 90.53 58.44 L 91.75 64.82 L 85.07 94.58 L 67.76 116.74 L 56.53 123.12 L 46.51 137.08 L 41.35 127.98 L 25.25 123.42 L 5.52 111.28 L 4.00 101.86 L 12.20 92.15 L 27.08 87.59 L 27.99 83.34 L 44.99 74.23 L 47.72 69.37 L 31.93 58.14 L 31.33 51.16 L 24.34 49.33 L 23.74 42.96 L 32.24 33.24 L 27.68 27.47 L 41.65 15.94 L 44.69 9.86 L 51.97 5.92 L 77.48 18.06 Z",
      ],
    },
    highlights: [
      { title: "Net Metering Value", description: "Modeled around exported and used energy", icon: "badge" },
      { title: "Compact Roof Design", description: "Precise layouts for dense neighborhoods", icon: "home" },
      { title: "Incentive-Aware Planning", description: "Built around current program eligibility", icon: "shield" },
    ],
    strategyCards: [
      { title: "Utility Credits", description: "Proposal math tied to utility structure", icon: "badge" },
      { title: "Storage Optionality", description: "Battery planning when it improves resilience", icon: "plug" },
      { title: "Clean Install Path", description: "Permitting and interconnection planned early", icon: "shield" },
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    href: "/locations/florida",
    navTitle: "Solar in Florida: Sunshine, Storage, and Utility Rules",
    navImage: "/assets/navbar/nav-locations-solar-in-florida-sunshine-storage-utility-rules.webp",
    heroImage: "/assets/locations/florida-header-image.webp",
    heroAlt: "Florida coastal home with rooftop solar panels and palm landscaping.",
    strategyImage: "/assets/locations/florida-solar-strategy-consultation.webp",
    strategyImageAlt: "Florida solar planning conversation beside a coastal home.",
    heroEyebrow: "Florida",
    heroTitle: "Solar planned for Florida sun and storm season",
    heroSubtitle: "High-production solar systems designed around heat, utility interconnection, and optional backup power.",
    introEyebrow: "Home & Climate Factors",
    introTitle: "Engineered for Florida conditions",
    introBody:
      "Florida projects need heat-aware equipment planning, roof-specific attachment strategy, and realistic utility savings assumptions.",
    strategyEyebrow: "Utility & Resilience Strategy",
    strategyTitle: "Built for sunshine and backup goals",
    strategyBody:
      "We balance daytime production, local utility rules, and battery options for homeowners who want clearer savings and stronger resilience.",
    ctaTitle: "Get a Florida solar plan",
    ctaBody: "See a practical solar and battery path for your Florida home and utility territory.",
    mapSeed: 2711,
    map: {
      viewBox: "0 0 100 77",
      paths: [
        "M 30.47 4.06 L 36.25 4.00 L 37.86 7.41 L 68.95 9.08 L 69.53 11.58 L 70.94 11.52 L 71.01 6.96 L 72.10 6.06 L 78.01 7.47 L 80.20 18.26 L 83.60 25.78 L 88.80 33.81 L 88.03 34.39 L 88.29 38.11 L 94.59 53.34 L 93.24 65.74 L 92.15 65.93 L 90.99 68.95 L 91.37 69.92 L 89.13 72.10 L 88.23 71.59 L 82.32 73.00 L 81.22 71.78 L 81.74 69.98 L 79.10 64.78 L 77.05 63.81 L 75.25 64.52 L 73.45 59.25 L 71.01 56.62 L 70.82 52.38 L 69.47 51.93 L 69.79 53.41 L 68.57 53.79 L 63.36 45.82 L 66.90 41.13 L 64.58 41.39 L 63.04 42.87 L 61.50 40.56 L 63.56 34.13 L 63.94 28.80 L 62.53 27.51 L 62.08 25.78 L 59.83 25.39 L 55.08 21.41 L 54.95 19.68 L 53.47 19.03 L 52.25 17.11 L 47.75 14.54 L 43.83 15.11 L 44.03 16.91 L 42.74 16.59 L 37.86 18.78 L 32.65 19.29 L 32.78 18.01 L 31.56 16.46 L 25.46 12.99 L 21.09 11.52 L 17.17 11.13 L 6.76 12.48 L 8.50 10.75 L 7.60 9.78 L 8.05 7.85 L 5.41 5.61 L 5.80 4.06 L 30.47 4.06 Z",
      ],
    },
    highlights: [
      { title: "High Sun Exposure", description: "Equipment matched to heat and production", icon: "sun" },
      { title: "Storm Resilience", description: "Battery options for backup planning", icon: "shield" },
      { title: "Utility Territory Fit", description: "Savings modeled around local rules", icon: "badge" },
    ],
    strategyCards: [
      { title: "Heat Performance", description: "Selected for long warm-weather operation", icon: "sun" },
      { title: "Backup Optionality", description: "Storage planning for outage-prone seasons", icon: "plug" },
      { title: "Roof-Specific Layouts", description: "Designed around wind, roof age, and geometry", icon: "home" },
    ],
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbreviation: "NC",
    href: "/locations/north-carolina",
    navTitle: "Solar in North Carolina: Utility Credits and Home Design",
    navImage: "/assets/navbar/nav-locations-solar-in-north-carolina-utility-credits-home-design.webp",
    heroImage: "/assets/locations/north-carolina-header-image.webp",
    heroAlt: "North Carolina home with rooftop solar panels among mature trees.",
    strategyImage: "/assets/locations/north-carolina-utility-strategy.webp",
    strategyImageAlt: "North Carolina home exterior with solar and battery planning.",
    heroEyebrow: "North Carolina",
    heroTitle: "Solar built for North Carolina homes and utilities",
    heroSubtitle: "Clean energy plans shaped around local utility structures, roof fit, and long-term household load growth.",
    introEyebrow: "Local Energy Design",
    introTitle: "Engineered for North Carolina conditions",
    introBody:
      "North Carolina homeowners need system sizing that accounts for summer cooling, roof orientation, utility rules, and future EV or battery loads.",
    strategyEyebrow: "Utility Strategy",
    strategyTitle: "Planned around North Carolina's changing solar rules",
    strategyBody:
      "We build proposals around current utility credit structures, interconnection requirements, and clear expectations for long-term value.",
    ctaTitle: "Get a North Carolina solar plan",
    ctaBody: "Review a solar and storage plan tailored to your roof, utility, and energy goals.",
    mapSeed: 4319,
    map: {
      viewBox: "0 0 100 44",
      paths: [
        "M 39.72 7.62 L 94.36 7.74 L 95.59 12.02 L 92.60 11.61 L 85.63 13.54 L 85.75 14.30 L 92.31 13.71 L 93.36 14.71 L 95.30 14.30 L 96.00 16.88 L 95.36 18.11 L 94.07 18.22 L 91.37 20.86 L 87.80 20.98 L 87.22 22.79 L 89.97 24.96 L 87.68 27.94 L 80.01 28.53 L 73.40 33.27 L 71.87 36.67 L 69.65 35.91 L 65.78 36.61 L 53.66 26.42 L 41.65 26.25 L 41.83 25.02 L 40.19 23.20 L 39.08 23.84 L 39.02 22.73 L 25.84 22.20 L 16.94 24.31 L 4.00 24.43 L 4.29 21.91 L 6.40 21.68 L 7.22 19.92 L 9.86 18.34 L 12.78 18.28 L 15.42 16.64 L 18.17 16.06 L 21.98 12.95 L 22.27 14.01 L 26.49 11.96 L 28.42 12.37 L 29.77 10.38 L 31.76 9.85 L 32.23 7.33 L 39.72 7.62 Z",
      ],
    },
    highlights: [
      { title: "Summer Load Planning", description: "Designed around cooling and peak use", icon: "sun" },
      { title: "Utility Credit Review", description: "Modeled against local tariff structure", icon: "badge" },
      { title: "Future-Ready Design", description: "Ready for storage and EV growth", icon: "plug" },
    ],
    strategyCards: [
      { title: "Interconnection Path", description: "Requirements reviewed before install", icon: "shield" },
      { title: "Roof Geometry", description: "Layouts tuned for production and appearance", icon: "home" },
      { title: "Savings Clarity", description: "Transparent bill impact expectations", icon: "badge" },
    ],
  },
  {
    slug: "michigan",
    name: "Michigan",
    abbreviation: "MI",
    href: "/locations/michigan",
    navTitle: "Solar in Michigan: Distributed Generation and Storage",
    navImage: "/assets/navbar/nav-locations-solar-in-michigan-distributed-generation-and-storage.webp",
    heroImage: "/assets/locations/michigan-header-image.webp",
    heroAlt: "Michigan home with rooftop solar panels in winter light.",
    strategyImage: "/assets/locations/michigan-distributed-generation-strategy.webp",
    strategyImageAlt: "Michigan home energy setup with rooftop solar and battery storage.",
    heroEyebrow: "Michigan",
    heroTitle: "Solar designed for Michigan seasons",
    heroSubtitle: "Practical solar and battery planning for distributed generation credits, winter production, and long-term household resilience.",
    introEyebrow: "Seasonal Energy Design",
    introTitle: "Engineered for Michigan conditions",
    introBody:
      "Michigan projects need careful production modeling, shade review, snow-aware layout, and realistic savings expectations.",
    strategyEyebrow: "Distributed Generation Strategy",
    strategyTitle: "Built around Michigan utility programs",
    strategyBody:
      "We plan around distributed generation rules, utility interconnection, and storage options that can improve day-to-day control.",
    ctaTitle: "Get a Michigan solar plan",
    ctaBody: "See a solar and battery path designed around your utility, roof, and seasonal energy use.",
    mapSeed: 5813,
    map: {
      viewBox: "0 0 100 81",
      paths: [
        "M 83.35 76.57 L 68.11 77.00 L 68.11 76.26 L 45.40 76.26 L 47.69 74.78 L 50.65 70.71 L 52.31 65.46 L 52.07 62.13 L 48.73 55.59 L 49.78 53.12 L 49.04 50.16 L 51.64 47.13 L 51.82 43.25 L 53.67 42.69 L 53.92 40.84 L 56.82 40.35 L 59.04 38.31 L 58.86 42.38 L 60.03 42.57 L 61.51 40.53 L 61.57 37.08 L 62.50 36.21 L 65.58 35.66 L 64.59 33.25 L 66.63 31.21 L 69.16 31.09 L 72.00 32.39 L 74.78 32.57 L 76.13 34.17 L 82.98 35.72 L 84.90 38.12 L 83.35 39.42 L 85.39 43.00 L 84.71 47.20 L 82.43 48.24 L 81.87 50.40 L 79.16 51.14 L 77.68 53.74 L 78.23 54.72 L 80.95 55.65 L 85.51 51.33 L 89.40 50.22 L 91.31 51.08 L 92.49 52.69 L 95.08 62.56 L 93.90 66.63 L 92.05 67.25 L 91.99 65.77 L 90.76 66.20 L 89.34 69.60 L 87.06 70.89 L 86.38 73.48 L 83.54 75.64 L 83.35 76.57 Z",
        "M 36.76 38.68 L 35.04 37.51 L 36.08 35.90 L 33.43 35.66 L 34.48 34.11 L 34.60 32.14 L 30.96 29.36 L 26.15 28.25 L 24.67 28.62 L 8.25 24.67 L 7.02 22.76 L 4.92 22.08 L 9.30 20.91 L 11.28 19.55 L 16.22 18.99 L 20.90 17.27 L 30.10 12.08 L 32.63 12.89 L 27.14 17.51 L 27.20 19.61 L 29.36 18.01 L 33.25 18.25 L 36.27 19.37 L 38.99 22.45 L 40.47 23.01 L 43.30 22.51 L 46.82 23.56 L 52.87 20.97 L 65.21 19.92 L 65.64 23.07 L 70.09 23.01 L 71.01 23.75 L 72.49 22.82 L 75.76 22.51 L 75.82 26.46 L 77.31 28.13 L 79.53 28.56 L 79.77 27.45 L 81.93 27.45 L 83.11 28.62 L 82.12 29.49 L 75.95 28.74 L 72.99 29.24 L 69.78 27.88 L 68.85 29.11 L 69.28 30.16 L 65.77 28.37 L 60.27 27.39 L 58.48 28.87 L 52.31 28.93 L 51.02 29.55 L 50.71 30.78 L 47.19 31.83 L 47.38 30.35 L 45.83 30.04 L 45.22 31.58 L 41.45 32.32 L 36.76 38.68 Z",
        "M 23.06 6.22 L 18.75 7.83 L 18.87 6.65 L 25.96 4.00 L 24.61 5.85 L 23.06 6.22 Z",
      ],
    },
    highlights: [
      { title: "Winter Production Review", description: "Seasonal modeling that stays realistic", icon: "sun" },
      { title: "Distributed Generation", description: "Utility program structure included", icon: "badge" },
      { title: "Backup Potential", description: "Battery planning for resilience goals", icon: "plug" },
    ],
    strategyCards: [
      { title: "Shade & Snow", description: "Layouts tuned for northern conditions", icon: "shield" },
      { title: "Utility Program Fit", description: "Designed around local requirements", icon: "badge" },
      { title: "Long-Term Loads", description: "Ready for heat pumps, EVs, and storage", icon: "home" },
    ],
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    abbreviation: "CT",
    href: "/locations/connecticut",
    navTitle: "Solar in Connecticut: Incentives, Net Metering, and Home Design",
    navImage: "/assets/hero-main/locations-h1-2026-02-18.jpg",
    heroImage: "/assets/hero-main/solar-neighborhood-h1-2026-02-17.jpg",
    heroAlt: "Residential neighborhood with rooftop solar panels.",
    strategyImage: "/assets/install-gallery/install-02.jpg",
    strategyImageAlt: "Residential solar installation on a pitched roof.",
    heroEyebrow: "Connecticut",
    heroTitle: "Solar designed for Connecticut homes and utilities",
    heroSubtitle: "Practical solar and storage planning for local incentives, utility credits, seasonal production, and long-term home energy goals.",
    introEyebrow: "Local Energy Design",
    introTitle: "Engineered for Connecticut conditions",
    introBody:
      "Connecticut projects need careful shade review, winter production modeling, roof-fit planning, and clear utility-credit assumptions.",
    strategyEyebrow: "Incentive & Utility Strategy",
    strategyTitle: "Built around Connecticut's solar economics",
    strategyBody:
      "We shape proposals around available incentive pathways, utility interconnection, battery options, and realistic long-term savings.",
    ctaTitle: "Get a Connecticut solar plan",
    ctaBody: "See a solar and storage proposal tailored to your Connecticut roof, utility, and energy goals.",
    mapSeed: 7849,
    map: {
      viewBox: "0 0 100 52",
      paths: [
        "M 7.50 8.50 L 93.00 8.50 L 91.80 28.70 L 83.90 29.60 L 80.30 33.80 L 70.80 32.70 L 62.90 36.90 L 53.30 35.20 L 46.10 39.90 L 37.80 37.20 L 30.50 40.60 L 20.70 38.20 L 9.20 34.10 L 7.50 8.50 Z",
      ],
    },
    highlights: [
      { title: "Seasonal Production", description: "Modeled around New England weather", icon: "sun" },
      { title: "Utility Credit Review", description: "Savings tied to local billing rules", icon: "badge" },
      { title: "Battery-Ready Planning", description: "Prepared for outage and evening-use goals", icon: "plug" },
    ],
    strategyCards: [
      { title: "Shade Review", description: "Layouts tuned for trees, pitch, and roof shape", icon: "home" },
      { title: "Incentive Fit", description: "Program value reviewed before proposal", icon: "badge" },
      { title: "Resilience Options", description: "Storage planned when it improves control", icon: "shield" },
    ],
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbreviation: "VA",
    href: "/locations/virginia",
    navTitle: "Solar in Virginia: Net Metering and Interconnection",
    navImage: "/assets/navbar/nav-locations-solar-in-virginia-net-metering-and-interconnection.webp",
    heroImage: "/assets/locations/virginia-header-image.webp",
    heroAlt: "Virginia neighborhood home with rooftop solar panels and mature trees.",
    strategyImage: "/assets/locations/virginia-energy-structure.webp",
    strategyImageAlt: "Aerial view of Virginia neighborhood homes with rooftop solar.",
    heroEyebrow: "Virginia",
    heroTitle: "Solar planned for Virginia net metering",
    heroSubtitle: "Residential solar design built around utility interconnection, net metering rules, and battery-ready energy planning.",
    introEyebrow: "Local Energy Design",
    introTitle: "Engineered for Virginia homes",
    introBody:
      "Virginia solar projects depend on roof fit, utility requirements, production modeling, and a clear view of future household energy needs.",
    strategyEyebrow: "Net Metering Strategy",
    strategyTitle: "Built around Virginia's solar framework",
    strategyBody:
      "We plan around net metering, interconnection, and optional battery storage so the system fits the home and the utility territory.",
    ctaTitle: "Get a Virginia solar plan",
    ctaBody: "See a clean solar and battery proposal shaped around your roof, utility, and long-term energy goals.",
    mapSeed: 6427,
    map: {
      viewBox: "0 0 100 44",
      paths: [
        "M 94.33 21.88 L 96.00 21.70 L 93.07 24.21 L 89.90 30.79 L 88.05 31.62 L 87.45 30.13 L 88.41 26.78 L 91.34 22.54 L 94.33 21.88 Z",
        "M 62.11 6.04 L 67.78 9.69 L 68.98 7.59 L 70.65 7.77 L 71.85 8.67 L 71.85 10.28 L 75.56 11.84 L 76.39 13.39 L 73.28 17.16 L 73.76 18.29 L 76.69 17.94 L 77.23 19.67 L 81.06 20.39 L 82.13 21.76 L 85.18 23.26 L 83.81 26.30 L 85.06 28.70 L 83.57 29.83 L 83.39 31.21 L 84.76 32.04 L 83.27 33.36 L 81.00 31.62 L 80.46 32.22 L 82.43 33.48 L 87.81 33.78 L 89.19 37.84 L 4.00 37.30 L 9.86 35.75 L 10.58 34.55 L 12.67 34.14 L 14.40 31.62 L 18.41 30.01 L 22.59 27.08 L 22.41 27.98 L 23.91 29.83 L 25.76 30.73 L 29.23 29.23 L 30.72 30.37 L 33.53 29.77 L 40.82 27.38 L 40.88 25.41 L 47.10 18.05 L 47.94 15.54 L 51.58 17.52 L 55.05 12.73 L 56.43 13.69 L 61.51 9.27 L 62.11 6.04 Z",
      ],
    },
    highlights: [
      { title: "Net Metering Review", description: "Credits and rules built into proposal math", icon: "badge" },
      { title: "Interconnection Planning", description: "Utility process considered early", icon: "shield" },
      { title: "Battery-Ready Design", description: "Prepared for backup and load growth", icon: "plug" },
    ],
    strategyCards: [
      { title: "Utility Fit", description: "Designed around local service territory", icon: "badge" },
      { title: "Roof-Specific Layout", description: "Production and appearance balanced together", icon: "home" },
      { title: "Long-Term Control", description: "Solar and storage planned as one system", icon: "plug" },
    ],
  },
];

export const defaultLocation = serviceLocations[0];

export const locationsBySlug = serviceLocations.reduce<Record<string, ServiceLocation>>((locations, location) => {
  locations[location.slug] = location;
  return locations;
}, {});

export const featuredNavLocations = [
  serviceLocations[0],
  serviceLocations.find((location) => location.slug === "new-jersey") ?? serviceLocations[1],
];
