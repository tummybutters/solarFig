import { ArrowRight, Battery, Receipt, TrendingDown, Zap, Gift } from "lucide-react";

const benefits = [
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Lock in your energy costs",
    description: "Utility rates rose 127% in 10 years. Your solar payment is fixed. Stop the bleeding.",
  },
  {
    icon: <Receipt className="w-6 h-6" />,
    title: "30% federal tax credit",
    description: "The government pays 30% of your system cost. That's $7,500-15,000 back on your taxes.",
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "Blackout protection",
    description: "When PG&E does 'public safety power shutoffs,' you keep the lights on. Priceless peace of mind.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "7-9 year payback",
    description: "Not 15-20 years like other companies quote. NEM 3.0-optimized systems with battery pay for themselves fast.",
  },
];

const bonuses = [
  {
    icon: <Gift className="w-5 h-5" />,
    title: "Expedited Permitting",
    value: "$1,500",
    description: "Our city relationships get permits approved in 7-14 days, not 60-90.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "25-Year Monitoring",
    value: "$2,000",
    description: "Real-time production tracking. See your savings every month from your phone.",
  },
  {
    icon: <Receipt className="w-5 h-5" />,
    title: "Tax Credit Help",
    value: "$500",
    description: "We show you exactly how to claim your 30% federal credit. No guesswork.",
  },
];

const Savings = () => {
  return (
    <section id="savings" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left Column - Header */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <span className="text-purple-600 text-xs tracking-widest uppercase font-medium">
              What You Get
            </span>
            <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Real savings,
              <br />
              <span className="text-gray-400">real peace of mind</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              Solar isn't just about going green—it's about taking control before the next rate hike. 
              California utilities keep raising prices. Your solar payment never will.
            </p>
            
            {/* Stat highlight */}
            <div className="flex items-center gap-4 p-4 rounded-none bg-purple-50 border border-purple-100">
              <div className="w-16 h-16 rounded-none bg-purple-600 flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">$2,100+/year</div>
                <div className="text-sm text-gray-500">Average California homeowner savings</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-purple-700 font-medium hover:text-purple-900 transition-colors"
              >
                Get your personalized estimate
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-none bg-gray-50 border border-gray-100 transition-all duration-500 hover:bg-purple-50/50 hover:border-purple-100"
              >
                <div className="w-12 h-12 rounded-none bg-purple-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-purple-600 group-hover:scale-110">
                  <span className="text-purple-600 transition-colors duration-300 group-hover:text-white">
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="text-gray-900 font-semibold text-sm sm:text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses Section */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-purple-600 text-xs tracking-widest uppercase font-medium">
              Included Free
            </span>
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">
              Your complete solar package
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              We don't just install panels—we deliver a complete energy solution. 
              These bonuses are included with every installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-none bg-gradient-to-br from-gray-50 to-white border border-gray-100 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/5 hover:border-purple-100"
              >
                {/* Value badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-none bg-purple-100 text-purple-700 text-xs font-semibold">
                  {bonus.value} value
                </div>

                <div className="w-12 h-12 rounded-none bg-purple-600 flex items-center justify-center mb-4">
                  <span className="text-white">{bonus.icon}</span>
                </div>

                <h4 className="text-gray-900 font-semibold text-base mb-2">
                  {bonus.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>

          {/* Total value */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Total bonus value: <span className="text-gray-900 font-semibold">$4,000+</span> included free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
