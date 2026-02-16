import { Shield, Clock, CheckCircle2, TrendingUp } from "lucide-react";

const warranties = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "30-Day Installation Guarantee",
    description: "Permitted, installed, and activated in 30 days—or we pay you $500 cash. We keep working until your system is live at no extra cost.",
    highlight: "$500 cash if we miss it",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Production Guarantee",
    description: "If your system doesn't produce within 10% of our projections in year one, we fix it free. Can't fix it? Full refund.",
    highlight: "100% money back",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "25-Year Panel Warranty",
    description: "Premium tier-1 solar panels with comprehensive 25-year manufacturer warranty. Built to last, guaranteed to perform.",
    highlight: "Tier-1 panels only",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "10-Year Workmanship Warranty",
    description: "Full coverage on installation quality. If anything fails due to our work, we repair or replace at zero cost to you.",
    highlight: "Installation covered",
  },
];

const Warranty = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
              Guarantees that
              <br />
              <span className="text-purple-600">actually mean something</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Most solar companies hide behind vague promises. We put our money where our mouth is. 
              Two iron-clad guarantees that protect you completely.
            </p>
          </div>

          {/* Main Guarantees - Featured */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {warranties.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-[2rem] bg-white border-2 border-purple-100 shadow-lg shadow-purple-500/5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                {/* Highlight badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold">
                  {item.highlight}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-purple-600">
                  <span className="text-purple-600 transition-colors duration-300 group-hover:text-white">
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-gray-900 text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Secondary Warranties */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warranties.slice(2).map((item, index) => (
              <div
                key={index}
                className="group flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:bg-purple-50/30 hover:border-purple-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-600">
                    <span className="text-purple-600 transition-colors duration-300 group-hover:text-white">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-semibold uppercase tracking-wide mb-2">
                    {item.highlight}
                  </div>
                  <h3 className="text-gray-900 font-semibold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom trust note */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              We've installed hundreds of California solar systems. 
              <span className="text-gray-600 font-medium"> These guarantees aren't marketing—they're how we do business.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warranty;
