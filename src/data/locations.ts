import { stateMapGeometries, type MapGeometry } from "./state-map-geometries";

export type { MapGeometry } from "./state-map-geometries";

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
  heroObjectPosition?: string;
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
    heroObjectPosition: "center 34%",
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
    map: stateMapGeometries.california,
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
    heroObjectPosition: "center 30%",
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
    map: stateMapGeometries.newYork,
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
    heroObjectPosition: "center 30%",
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
    map: stateMapGeometries.newJersey,
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
    heroObjectPosition: "center 32%",
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
    map: stateMapGeometries.florida,
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
    heroObjectPosition: "center 28%",
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
    map: stateMapGeometries.northCarolina,
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
    heroObjectPosition: "center 32%",
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
    map: stateMapGeometries.michigan,
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
    navImage: "/assets/navbar/nav-locations-solar-in-connecticut-incentives-net-metering-home-design.webp",
    heroImage: "/assets/locations/connecticut-header-image.webp",
    heroAlt: "Aerial view of rooftop solar panels on a Connecticut-style home with a green yard.",
    heroObjectPosition: "center 30%",
    strategyImage: "/assets/locations/connecticut-energy-strategy.webp",
    strategyImageAlt: "Solar roof installation with wooded hills in the background.",
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
    map: stateMapGeometries.connecticut,
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
    map: stateMapGeometries.virginia,
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
