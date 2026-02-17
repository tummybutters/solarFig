import { Sun, Cpu, BatteryCharging, Car, Wrench } from "lucide-react";

const productGroups = [
  {
    id: "solar-panels",
    title: "Solar Panels",
    description:
      "Tier-1 panel options selected for California heat performance, long-term reliability, and warranty strength.",
    icon: <Sun className="w-5 h-5" />,
    items: ["Qcells", "Hyundai Solar", "JA Solar", "Sirius Solar"],
  },
  {
    id: "inverters",
    title: "Inverters",
    description:
      "System architecture options based on roof layout, shading, and monitoring goals.",
    icon: <Cpu className="w-5 h-5" />,
    items: [
      "Tesla Integrated Inverter (Powerwall 3)",
      "SolarEdge Home Hub String Inverters",
      "Enphase IQ8HC Microinverters",
    ],
  },
  {
    id: "batteries",
    title: "Battery & ESS",
    description:
      "Storage strategies designed around NEM 3.0 time-of-use rates and backup preferences.",
    icon: <BatteryCharging className="w-5 h-5" />,
    items: [
      "Tesla Powerwall 3",
      "SolarEdge Home Battery",
      "Enphase 10C",
      "Enphase 5P",
    ],
  },
  {
    id: "ev-chargers",
    title: "EV Chargers",
    description:
      "Home charging integration to align EV usage with solar production and battery discharge windows.",
    icon: <Car className="w-5 h-5" />,
    items: ["Level 2 home charger integration", "Load-aware charging setup"],
  },
  {
    id: "additional-services",
    title: "Additional Services",
    description:
      "Pre-install scope coordination to ensure your project is permit-ready and install-ready.",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Roofing coordination", "Main panel upgrades", "Electrical upgrades"],
  },
];

const productPanels = [
  {
    src: "/assets/install-gallery/install-01.png",
    alt: "Solar crews completing a rooftop panel install on a single-family home",
  },
  {
    src: "/assets/install-gallery/install-03.jpg",
    alt: "Residential solar array detail showing clean mounting and trim",
  },
  {
    src: "/assets/install-gallery/install-05.jpg",
    alt: "Newly installed rooftop solar system on a modern home",
  },
  {
    src: "/assets/install-gallery/install-08.jpg",
    alt: "Wide-angle shot of completed solar panels on a home roof",
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-12 lg:mb-20">
          <span className="text-purple-600 text-xs tracking-[0.3em] uppercase font-medium">Products</span>
          <h2 className="text-gray-900 text-4xl sm:text-5xl lg:text-7xl font-serif font-light tracking-tight leading-[0.9] mt-6 mb-8">
            Tailored equipment.
            <br />
            <span className="text-gray-400">Not a sales script.</span>
          </h2>
          <p className="border-l border-purple-100 pl-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            We match panel, inverter, and battery configurations to your roof layout, utility tariff,
            and usage profile across California.
          </p>
        </div>

        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <figure className="group relative overflow-hidden border border-purple-100 h-[320px] sm:h-[420px] lg:h-[520px] lg:col-span-8">
            <img
              src={productPanels[0].src}
              alt={productPanels[0].alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/35 to-transparent" />
          </figure>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6 lg:col-span-4">
            {productPanels.slice(1).map((panel) => (
              <figure key={panel.src} className="group relative overflow-hidden border border-purple-100 h-[180px] sm:h-[220px] lg:h-[157px]">
                <img
                  src={panel.src}
                  alt={panel.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/35 to-transparent" />
              </figure>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {productGroups.map((group) => (
            <article key={group.title} id={group.id} className="p-8 rounded-none border border-white/10 bg-purple-900/50 backdrop-blur-sm hover:bg-purple-900 transition-colors duration-300">
              <div className="w-12 h-12 rounded-none bg-purple-600 text-white flex items-center justify-center mb-6 border border-white/10">
                {group.icon}
              </div>
              <h3 className="text-white text-2xl font-serif font-light mb-3 tracking-tight">{group.title}</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed mb-6">{group.description}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-xs text-purple-200/80 flex items-start gap-3 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-none bg-purple-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
