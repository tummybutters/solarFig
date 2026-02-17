import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";

const featureCards = [
  {
    label: "Solar Panels",
    title: "Seamless solar panel installation",
    description:
      "Designed to work with our battery storage solutions, our sleek, high-performance solar panels provide the foundation for a complete, clean home energy system.",
    cta: "See our solar panels",
    href: "/#solar-panels",
    image: "/assets/whole-home-solar/whole-home-house.jpg",
    alt: "Solar-ready home with rooftop panels and clean architectural lines.",
  },
  {
    label: "Battery Backup",
    title: "Store excess solar energy",
    description:
      "Battery backup solutions work with your solar panel system so your home has power when you need it most.",
    cta: "See energy storage options",
    href: "/battery",
    image: "/assets/whole-home-solar/battery-backup.webp",
    alt: "Modern home exterior with integrated battery backup unit at dusk.",
  },
  {
    label: "EV Chargers",
    title: "Home EV chargers you never have to think about",
    description:
      "Wake up and go with home EV chargers that work seamlessly with your whole-home system.",
    cta: "See our EV chargers",
    href: "/ev-chargers",
    image: "/assets/ev-chargers/ev-equipment-02.png",
    alt: "Home EV charging station mounted on a wall beside a parked vehicle.",
  },
  {
    label: "Smart Electrical Panels",
    title: "Smart power for smarter homes",
    description:
      "Take control of your home's energy usage with smart electrical panel hardware that ties your system into one app experience.",
    cta: "See our electrical panels",
    href: "/#additional-services",
    image: "/assets/whole-home-solar/smart-panel-system.png",
    alt: "Battery and smart panel hardware installed in a clean garage environment.",
  },
];

const faqs = [
  {
    q: "What happens to solar panel systems on cloudy days or in the winter?",
    a: "Your system still produces electricity on cloudy days, just at lower output. Production changes by season, and system sizing accounts for those patterns.",
  },
  {
    q: "How much will I save on my energy bill with solar panels?",
    a: "Savings vary by utility, usage profile, roof conditions, and equipment. We model your home and provide a custom estimate before you decide.",
  },
  {
    q: "How do I know if my house is a good candidate for solar panels?",
    a: "We evaluate roof orientation, shade, structural condition, and your electric usage to confirm fit and expected performance.",
  },
  {
    q: "Can I go completely off-grid?",
    a: "Some homeowners can, but most choose grid-connected systems with storage for flexibility, backup, and better economics.",
  },
  {
    q: "How long does solar panel installation take?",
    a: "Most physical installs are completed quickly, often in a day, depending on roof complexity and scope.",
  },
  {
    q: "How long does the process take from consultation to inspection?",
    a: "Typical timelines range several weeks and depend on utility approvals, permitting speed, and inspection scheduling in your area.",
  },
];

const WholeHomeSolar = () => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />

      <section className="bg-[linear-gradient(130deg,#17131d_0%,#241a33_55%,#321f4b_100%)] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Whole Home Solar</p>
          <h1 className="max-w-4xl text-4xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Energy independence begins with whole-home solar systems.
          </h1>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative h-[66vh] min-h-[500px] w-full sm:h-[76vh]">
          <img
            src="/assets/hero-main/vivint-solar.jpg"
            alt="Whole-home rooftop solar array overlooking the California coast at sunset."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17141b]/65 via-[#17141b]/24 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-2xl">
              <p className="text-lg text-white/90">
                Full-home solar design with backup-ready architecture and long-term savings in mind.
              </p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Solarfig designs and coordinates smart, whole-home solar energy systems built for California homeowners.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6d39b5] px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#5b2f97]"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-12 max-w-5xl text-3xl leading-tight tracking-tight text-[#211d27] sm:text-4xl">
            Our whole-home systems are designed to help manage your energy, protect your home, give you more control,
            and save you money.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-[1400px] space-y-10 px-6 sm:px-8">
          {featureCards.map((feature, index) => (
            <article key={feature.label} className="grid items-center gap-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8 lg:grid-cols-2 lg:gap-12">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="mb-3 text-sm text-gray-600">{feature.label}</p>
                <h2 className="text-4xl leading-[0.95] tracking-tight text-[#231f2a]">{feature.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">{feature.description}</p>
                <a href={feature.href} className="mt-7 inline-flex items-center gap-2 text-base font-medium text-[#6d39b5]">
                  {feature.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <figure className={index % 2 === 1 ? "lg:order-1" : ""}>
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="h-[360px] w-full rounded-2xl object-cover sm:h-[430px]"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="rounded-3xl bg-[#16131a] px-8 py-12 text-white sm:px-10">
            <h2 className="max-w-4xl text-3xl leading-tight tracking-tight sm:text-5xl">
              Meet up to 100% of your yearly energy needs with a whole-home Solarfig system.
            </h2>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#231f2a] transition-colors hover:bg-gray-200"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <figure>
            <img
              src="/assets/whole-home-solar/installation-team.png"
              alt="Workers in safety gear installing rooftop solar equipment at a residential property."
              className="h-[420px] w-full rounded-3xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <article>
            <p className="mb-3 text-sm text-gray-600">Installation</p>
            <h2 className="text-4xl leading-[0.95] tracking-tight text-[#231f2a]">Professional, single-day installations</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Our local, certified teams make going solar easy, with most installations completed in a single day.
              Experience a smooth, efficient process from start to finish.
            </p>
            <a href="/#how-it-works" className="mt-7 inline-flex items-center gap-2 text-base font-medium text-[#6d39b5]">
              Learn about our install process
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <h2 className="max-w-4xl text-4xl leading-tight tracking-tight text-[#231f2a] sm:text-5xl">
            Affordable solar panels, meet lower energy bills.
          </h2>
          <p className="mt-5 max-w-4xl text-lg text-gray-600">
            With Solarfig, choose the payment option that fits your budget and start saving sooner.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Traditional Electricity</th>
                  <th className="px-4 py-3 font-semibold">Whole-Home System</th>
                  <th className="px-4 py-3 font-semibold">Solar Panels</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cost", "Upfront payment: N/A", "Low or no upfront payment", "Low or no upfront cost"],
                  ["Ownership", "No ownership", "Option to own or lease", "Option to own or lease"],
                  ["Monthly Payments", "High recurring bills", "Low or no monthly payments", "Moderate monthly costs"],
                  ["Payment Terms", "Variable, ongoing payments", "Customizable payment plans", "Flexible financing options"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 py-3 text-gray-600">{row[2]}</td>
                    <td className="px-4 py-3 text-gray-600">{row[3]}</td>
                  </tr>
                ))}
                {[
                  ["Care & maintenance", false, true, true],
                  ["Energy monitoring", false, true, true],
                  ["25-year system warranty", false, true, true],
                  ["Tax credits", false, true, true],
                  ["Emergency backup", false, true, false],
                ].map((row, rowIndex) => (
                  <tr key={`benefit-${rowIndex}`} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
                    {[row[1], row[2], row[3]].map((col, idx) => (
                      <td key={`${row[0]}-${idx}`} className="px-4 py-3 text-gray-600">
                        {col ? <Check className="h-4 w-4 text-emerald-600" /> : "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-gray-500">
            *$0-down options are subject to credit approval. We make no guarantees that someone will qualify for a
            zero-down option. A potential borrower must undergo a credit check to determine available options.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[980px] px-6 sm:px-8">
          <h2 className="text-4xl leading-tight tracking-tight text-[#231f2a] sm:text-5xl">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-8 rounded-2xl border border-gray-200 bg-white px-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg text-[#231f2a]">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <GlobalQuoteSection />

      <Footer />
    </main>
  );
};

export default WholeHomeSolar;
