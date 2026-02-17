import { ArrowRight, HandCoins, Banknote, Wallet, BadgeDollarSign } from "lucide-react";

const planCards = [
  {
    id: "ez-plan",
    title: "0$ Down (EZ Plan)",
    subtitle: "PPA / Lease",
    icon: <HandCoins className="w-5 h-5" />,
    points: [
      "No upfront payment",
      "Immediate savings vs utility rates",
      "Predictable monthly payments",
      "Warranty, maintenance, and production coverage",
    ],
  },
  {
    id: "finance",
    title: "Finance to Own",
    subtitle: "Own with flexible terms",
    icon: <Banknote className="w-5 h-5" />,
    points: [
      "Own your system with low/no upfront options",
      "Fixed payments",
      "5-25 year term options",
      "Comprehensive warranty and maintenance support",
    ],
  },
  {
    id: "purchase",
    title: "Outright Purchase",
    subtitle: "Cash purchase",
    icon: <Wallet className="w-5 h-5" />,
    points: [
      "Own your system from day one",
      "No monthly payments",
      "Strong long-term ROI potential",
      "Full system investment made upfront",
    ],
  },
  {
    id: "prepaid",
    title: "Prepaid Solar",
    subtitle: "Upfront discount model",
    icon: <BadgeDollarSign className="w-5 h-5" />,
    points: [
      "Cash or finance-compatible",
      "Federal incentive value applied upfront strategy",
      "Lower lifetime payment profile",
      "Comprehensive warranty coverage",
    ],
  },
];

const projectPanels = [
  {
    src: "/assets/install-gallery/install-06.png",
    alt: "Rooftop solar panels installed on a bright suburban home",
  },
  {
    src: "/assets/install-gallery/install-09.jpg",
    alt: "Large home solar installation captured from street view",
  },
  {
    src: "/assets/install-gallery/install-02.jpg",
    alt: "Residential roof with tightly arranged solar panel rows",
  },
  {
    src: "/assets/install-gallery/install-10.jpg",
    alt: "Completed home solar project with full roof coverage",
  },
  {
    src: "/assets/install-gallery/install-04.jpg",
    alt: "Close-in solar panel texture and mounting on a pitched roof",
  },
];

const PlansAndServices = () => {
  return (
    <section id="plans" className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-12 lg:mb-20">
          <span className="text-purple-600 text-xs tracking-[0.3em] uppercase font-medium">Plans & Services</span>
          <h2 className="text-gray-900 text-4xl sm:text-5xl lg:text-7xl font-serif font-light tracking-tight leading-[0.9] mt-6 mb-8">
            Flexible economics.
            <br />
            <span className="text-gray-400">California optimized.</span>
          </h2>
          <p className="border-l border-purple-100 pl-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            Whether you want lowest monthly cost, ownership, or fastest ROI, we map your options and
            show the tradeoffs clearly before you sign.
          </p>
        </div>

        <div className="mb-12 lg:mb-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 sm:gap-6">
          <figure className="group relative overflow-hidden border border-purple-100 h-[260px] sm:h-[340px] xl:h-[430px] xl:col-span-6">
            <img
              src={projectPanels[0].src}
              alt={projectPanels[0].alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent" />
          </figure>
          <figure className="group relative overflow-hidden border border-purple-100 h-[260px] sm:h-[340px] xl:h-[430px] xl:col-span-3">
            <img
              src={projectPanels[1].src}
              alt={projectPanels[1].alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent" />
          </figure>
          <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-1 gap-4 sm:gap-6 xl:col-span-3">
            {projectPanels.slice(2).map((panel) => (
              <figure key={panel.src} className="group relative overflow-hidden border border-purple-100 h-[140px] sm:h-[180px] xl:h-[127px]">
                <img
                  src={panel.src}
                  alt={panel.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent" />
              </figure>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {planCards.map((plan) => (
            <article key={plan.id} id={plan.id} className="rounded-none border border-white/10 bg-purple-900 p-6 sm:p-8 hover:bg-purple-800 transition-colors duration-300">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-none bg-purple-600 text-white flex items-center justify-center border border-white/10">{plan.icon}</div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300 font-bold">{plan.subtitle}</span>
              </div>
              <h3 className="text-white text-2xl font-serif font-light mb-4 tracking-tight">{plan.title}</h3>
              <ul className="space-y-3">
                {plan.points.map((point) => (
                  <li key={point} className="text-sm text-purple-100/70 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-none bg-purple-500 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-none bg-white border border-gray-100 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-sm text-gray-600">
            Incentives and payment structures vary by utility territory, home profile, and qualification factors.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#6d39b5] font-medium text-sm">
            Compare my options
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlansAndServices;
