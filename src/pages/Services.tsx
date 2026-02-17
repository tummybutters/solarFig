import { ArrowRight, Sun, Battery, Wrench, FileCheck, Zap, Shield } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Residential Solar Installation",
      description: "Custom solar systems designed for your home, your energy usage, and your roof. We handle everything from design to PTO.",
      features: ["Custom system design", "Premium Tier 1 panels", "Professional installation", "Utility interconnection"],
      price: "Starting at $0 down"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Battery Storage Solutions",
      description: "Maximize your NEM 3.0 savings and keep the lights on during outages with integrated battery storage.",
      features: ["NEM 3.0 optimization", "Backup power ready", "Smart energy management", "Scalable capacity"],
      price: "Add from $8,500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Commercial Solar",
      description: "Reduce operating costs and lock in energy rates for your business with commercial-grade solar solutions.",
      features: ["Commercial financing", "Tax incentive optimization", "Minimal disruption install", "Monitoring included"],
      price: "Custom quotes"
    },
  ];

  const process = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "1. Free Assessment",
      description: "We analyze your energy bills, roof, and sun exposure to design the optimal system."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "2. Design & Engineering",
      description: "Our engineers create a custom system design and handle all permitting paperwork."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "3. Installation",
      description: "Professional installation typically completed in 1-2 days with minimal disruption."
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4eefb]">
      {/* Hero */}
      <section className="relative bg-[#24133c] text-white py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-black" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Solar services built for
              <span className="text-purple-400"> California homeowners</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              From initial assessment to flipping the switch, we handle every step of your 
              solar journey with transparency and speed.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 flex flex-col">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-4">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all"
                  >
                    Get a quote <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              How it works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process gets you from quote to clean energy in as little as 30 days.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Ongoing support & monitoring
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our relationship doesn't end at installation. Every system comes with comprehensive 
                monitoring and support to ensure optimal performance for decades.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 system monitoring",
                  "Annual performance reviews",
                  "Panel cleaning services",
                  "Inverter replacement coverage",
                  "Priority service calls"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 aspect-square lg:aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <Wrench className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <div className="text-gray-400">Maintenance Illustration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-purple-600 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Not sure which service is right for you?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Get a free consultation. We'll analyze your energy needs and recommend the best solution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
