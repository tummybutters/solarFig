import { ArrowRight, Star } from "lucide-react";
import CaliforniaMap from "@/components/CaliforniaMap";
import OregonMap from "@/components/OregonMap";

const solutionCards = [
  {
    title: "Solar Panels",
    href: "/solar-panels",
    image: "/assets/home-editorial/home-solar-panels-2026.webp",
  },
  {
    title: "Inverters",
    href: "/microinverters",
    image: "/assets/home-editorial/home-inverters-2026.webp",
  },
  {
    title: "Energy storage",
    href: "/battery",
    image: "/assets/battery/battery-tesla-powerwall-3-feature.jpg",
  },
];

const reviews = [
  {
    quote:
      "Super clear process from day one. They walked us through production assumptions, financing options, and exactly how our utility bill would change month by month. Installation was fast, clean, and organized, and every permit or inspection update came before we had to ask. The final numbers matched the proposal, with no surprise add-ons.",
    author: "James E. — California",
    image: "/assets/reviews/review-6.jpg",
  },
  {
    quote:
      "They did not try to oversell us. The design team sized the system around how we actually use power, including EV charging and summer AC load, then explained why a battery made sense for evening rates. Everything has performed exactly like they said it would, and the monitoring visibility has been excellent since PTO.",
    author: "Elizabeth M. — Oregon",
    image: "/assets/reviews/review-2.jpg",
  },
  {
    quote:
      "Professional from consultation through PTO and follow-up. The crew treated our home carefully, communication was consistent, and every milestone had clear next steps. Even after activation, they stayed responsive for questions and optimization tips. It felt like a real long-term partner, not a company that disappears after install day.",
    author: "Morgan H. — California",
    image: "/assets/reviews/review-3.jpg",
  },
];

const HomeEditorial = () => {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl leading-[1.02] tracking-tight text-[#241d2f] sm:text-6xl">
                Energy solutions without the noise.
              </h2>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group relative block h-[390px] overflow-hidden rounded-2xl border border-black/5 sm:h-[480px] sm:rounded-3xl"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-6 sm:right-6">
                  <h3 className="max-w-[80%] text-3xl leading-none tracking-tight text-white sm:text-5xl">
                    {card.title}
                  </h3>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8">
          <div>
            <h2 className="max-w-3xl text-5xl leading-[1.02] tracking-tight text-[#241d2f] sm:text-7xl">
              The grid is unpredictable, your power shouldn&apos;t be.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="grid items-start gap-5 sm:grid-cols-2">
              <div>
                <CaliforniaMap className="max-w-[300px] sm:max-w-[360px]" />
              </div>
              <div>
                <OregonMap className="max-w-[300px] sm:max-w-[360px]" />
              </div>
            </div>

            <div>
              <h3 className="max-w-xl text-4xl leading-[1.08] tracking-tight text-[#2a2238] sm:text-5xl">
                Power your home with Solarfig.
              </h3>
              <a
                href="/locations"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5] transition-colors hover:text-[#4d2880]"
              >
                Explore Locations
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1680px] rounded-[30px] border border-[#d8cce8] bg-[#eadff7] px-6 py-12 sm:rounded-[40px] sm:px-12 sm:py-16 lg:px-14 lg:py-20">
          <div className="relative">
            <div className="pointer-events-none absolute -right-8 -top-16 h-72 w-72 rounded-full bg-[repeating-radial-gradient(circle,_rgba(109,57,181,0.16),_rgba(109,57,181,0.16)_2px,_transparent_2px,_transparent_10px)] blur-[1px]" />
            <p className="mb-5 flex gap-3 text-[#241d2f]">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </p>
            <h2 className="max-w-4xl text-5xl leading-none tracking-tight text-[#241d2f] sm:text-7xl">
              500+ Installations
            </h2>
            <p className="mt-5 text-xl text-[#423751] sm:text-2xl">Hundreds of satisfied customers</p>
            <p className="mt-3 text-xl text-[#423751] sm:text-2xl">Google · Trustpilot · Yelp</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <article
                key={review.author}
                className={`flex min-h-[220px] flex-col justify-between rounded-[24px] border px-7 py-8 shadow-[0_26px_48px_-34px_rgba(36,29,47,0.45)] sm:min-h-[260px] sm:px-8 sm:py-9 lg:min-h-[290px] ${index % 2 === 0 ? "border-[#e7dfef] bg-white" : "border-[#e1d1f5] bg-[#f5effd]"
                  }`}
              >
                <img
                  src={review.image}
                  alt={`${review.author} profile`}
                  className="mb-5 h-12 w-12 rounded-full object-cover shadow-sm bg-[#eee2fb]"
                />
                <p className="text-lg leading-[1.65] text-[#332b47] sm:text-[1.45rem]">"{review.quote}"</p>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#63557f]">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eefb] pb-8 pt-10 sm:pb-10 sm:pt-14">
        <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-8">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[26px] shadow-[0_24px_70px_-34px_rgba(36,29,47,0.4)] sm:h-[420px] lg:h-[520px]">
            <img
              src="/assets/home-editorial/home-products-plans-services-process-2026.webp"
              alt="Home energy planning and installation process overview visual"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1231]/25 via-transparent to-[#402067]/10" />
          </div>
        </div>
      </section>

      <section className="bg-[#f4eefb] pb-16 pt-8 sm:pb-24 sm:pt-10">
        <div className="mx-auto grid max-w-[1320px] gap-5 px-4 sm:gap-6 sm:px-6 lg:grid-cols-3">
          <a
            href="/solar-panels"
            className="flex h-full flex-col rounded-2xl border border-[#ded2ef] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d39b5]">Solutions</p>
            <h3 className="mt-4 text-4xl leading-tight text-[#241d2f]">Find your ideal setup.</h3>
            <p className="mt-4 text-[#4b4261]">Compare panel, inverter, and energy storage options built for your home.</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
              View Solutions
              <ArrowRight className="h-4 w-4" />
            </p>
          </a>

          <a
            href="/pricing-costs"
            className="flex h-full flex-col rounded-2xl border border-[#ded2ef] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d39b5]">Plans & Services</p>
            <h3 className="mt-4 text-4xl leading-tight text-[#241d2f]">A plan for every home.</h3>
            <p className="mt-4 text-[#4b4261]">Simple options. Clear pricing. Tailored to your home and goals.</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
              View Plans
              <ArrowRight className="h-4 w-4" />
            </p>
          </a>

          <a
            href="/installation"
            className="flex h-full flex-col rounded-2xl border border-[#ded2ef] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d39b5]">Process</p>
            <h3 className="mt-4 text-4xl leading-tight text-[#241d2f]">Transparency from start to finish.</h3>
            <p className="mt-4 text-[#4b4261]">From consultation to PTO, we make every step clear, structured, and predictable.</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
              View Process
              <ArrowRight className="h-4 w-4" />
            </p>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeEditorial;
