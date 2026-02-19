import { ArrowRight, Check, Zap, Wallet, Banknote, ShieldCheck } from "lucide-react";

const plans = [
    {
        id: "ez-plan",
        title: "$0 Down (EZ Plan)",
        category: "PPA or Lease",
        description: "25-year subscription plan with no upfront payment.",
        icon: <Zap className="h-5 w-5 text-purple-400" />,
        features: [
            "No upfront payment",
            "Immediate savings - pay for power at a cheaper rate than your utility",
            "Predictable monthly payments",
            "Full warranty, maintenance, and production guarantee",
        ],
        highlight: true, // Make this one stand out slightly
    },
    {
        id: "finance",
        title: "Finance to Own",
        category: "Ownership",
        description: "Flexible terms and comprehensive coverage.",
        icon: <Banknote className="h-5 w-5 text-purple-300" />,
        features: [
            "Own your system with no upfront cost",
            "Fixed monthly payments",
            "5-25 year terms available",
            "Full warranty and maintenance included",
        ],
    },
    {
        id: "purchase",
        title: "Outright Purchase",
        category: "Cash Model",
        description: "Cash payment perfect for seeking the quickest ROI.",
        icon: <Wallet className="h-5 w-5 text-purple-300" />,
        features: [
            "Own your system from day one",
            "Zero monthly payments or loan terms",
            "Full system cost due upfront",
            "Quickest return on investment (often 5-8 years)",
        ],
    },
    {
        id: "prepaid",
        title: "Prepaid Solar",
        category: "Incentive Optimized",
        description: "Immediately apply incentives to your upfront payment.",
        icon: <ShieldCheck className="h-5 w-5 text-purple-300" />,
        features: [
            "Cash or finance options",
            "Federal tax credit discount applied upfront",
            "Comprehensive warranty coverage",
        ],
    },
];

const PlansAndServicesShowcase = () => {
    return (
        <section id="plans" className="relative bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
                {/* Header */}
                <div className="mb-20 max-w-2xl">
                    <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                        Plans & Services
                    </span>
                    <h2
                        className="text-5xl text-purple-950 sm:text-6xl lg:text-7xl"
                       
                    >
                        Flexible <span className="italic text-purple-400">financing</span> for every homeowner.
                    </h2>
                </div>

                {/* Grid Layout - 2x2 but distinct style */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    {plans.map((plan) => (
                        <div
                            id={plan.id}
                            key={plan.title}
                            className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 ${plan.highlight
                                    ? "border border-purple-200 bg-purple-50"
                                    : "border border-gray-100 bg-white hover:border-purple-100/50 hover:shadow-xl hover:shadow-purple-900/5"
                                }`}
                        >
                            <div className="p-8 sm:p-10">
                                {/* Top Section */}
                                <div className="mb-8 flex items-start justify-between">
                                    <div>
                                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
                                            {plan.category}
                                        </span>
                                        <h3
                                            className="text-2xl text-purple-950 sm:text-3xl"
                                           
                                        >
                                            {plan.title}
                                        </h3>
                                    </div>
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border ${plan.highlight ? "bg-purple-900 border-purple-800" : "bg-white border-gray-100 group-hover:bg-purple-50 group-hover:border-purple-100"}`}>
                                        {plan.icon}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="mb-8 text-sm leading-relaxed text-gray-500 sm:text-base">
                                    {plan.description}
                                </p>

                                {/* Line Separator */}
                                <div className="mb-8 h-px w-full bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />

                                {/* Features List */}
                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                                            <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-100">
                                                <Check className="h-2.5 w-2.5 text-purple-600" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA - Appears on Hover */}
                                {/* <div className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                  <span>Learn more</span>
                  <ArrowRight className="h-3 w-3" />
                </div> */}
                            </div>

                            {/* Decorative Gradient Blob */}
                            {plan.highlight && (
                                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-200/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA / Disclaimer */}
                <div className="mt-16 border-t border-gray-100 pt-10 sm:mt-24">
                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                        <p className="max-w-xl text-sm leading-relaxed text-gray-500">
                            Not sure which plan is right for you? Our solar advisors can model all scenarios based on your specific usage and utility rates.
                        </p>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-purple-950 transition-colors hover:text-purple-600"
                        >
                            Get a custom comparison
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlansAndServicesShowcase;
