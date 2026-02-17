import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CarFront, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  "Convenient home charging",
  "Flawless solar system integration",
  "Universal electric vehicle compatibility",
  "All-weather reliability",
  "Industry-leading warranty",
];

const faqs = [
  {
    question: "How long does it take to charge an EV at home?",
    answer:
      "Charging time depends on your vehicle battery size and charger level. A standard Level 2 home charger typically adds around 20 to 35 miles of range per hour, which is enough for most overnight charging needs.",
  },
  {
    question: "What are the benefits of having a home EV charging station?",
    answer:
      "Home charging gives you daily convenience, lower operating costs, and better control over when your car charges. It can also pair with solar production so more of your driving is powered by clean energy.",
  },
  {
    question: "Do I need a special electrical outlet for a home EV charger?",
    answer:
      "Many Level 2 chargers are hardwired for the best performance, while some can use a dedicated 240V outlet. We evaluate your panel and wiring to recommend the safest, most efficient setup for your home.",
  },
  {
    question: "What is the difference between Level 1 and Level 2 EV charging?",
    answer:
      "Level 1 uses a standard 120V outlet and charges slowly. Level 2 uses 240V power and delivers much faster charging, making it the preferred option for everyday home use.",
  },
  {
    question: "Are there any incentives or rebates available for home EV chargers?",
    answer:
      "Depending on your location and utility provider, rebates or tax incentives may be available for eligible charger installations. Our team helps identify programs you may qualify for during your quote process.",
  },
];

const EVChargers = () => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />

      <section className="bg-[linear-gradient(130deg,#17131d_0%,#241a33_55%,#321f4b_100%)] pb-14 pt-32 text-white sm:pt-36">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
            Home / Solar Energy Solutions / EV Chargers
          </p>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <CarFront className="h-4 w-4 text-purple-300" />
            EV Chargers
          </div>
          <h1 className="max-w-5xl font-serif text-4xl leading-[0.95] text-white sm:text-6xl">
            Smarter energy begins with home EV chargers
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/82">
            Solarfig installs seamless, effective home EV chargers for homeowners across California.
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#201b29] transition-colors hover:bg-gray-200"
          >
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative h-[62vh] min-h-[480px] w-full sm:h-[72vh]">
          <img
            src="/assets/ev-chargers/ev-home-01.png"
            alt="Scenic residential home exterior at dusk with lighting and EV-ready driveway."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17141b]/62 via-[#17141b]/24 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-[1200px] items-end px-6 pb-12 sm:px-8 sm:pb-16">
            <div className="max-w-2xl rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-[2px]">
              <p className="text-lg leading-relaxed text-white/90">
                Charge at home on your schedule with a clean installation that integrates smoothly with your solar system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_460px]">
          <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <img
              src="/assets/ev-chargers/ev-equipment-01.png"
              alt="A futuristic white truck labeled venturehome. is parked in front of a red garage at dusk, with house lights illuminating the scene."
              className="h-[460px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <article>
            <h2 className="mb-4 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
              Get in the driver&apos;s seat with a home EV charger
            </h2>
            <p className="mb-7 text-stone-600">
              Enjoy the convenience of charging at home with your integrated EV charger for maximum savings and
              sustainability.
            </p>
            <div className="grid gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-stone-700">{benefit}</p>
                </div>
              ))}
            </div>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:bg-stone-100"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </section>

      <section className="bg-[#111015] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-6 sm:px-8 lg:grid-cols-[460px_minmax(0,1fr)]">
          <figure className="overflow-hidden rounded-2xl border border-white/15">
            <img
              src="/assets/ev-chargers/ev-equipment-02.png"
              alt="A person connects an electronic vehicle charger to a white electric car. The charging port is open, revealing their hand holding the cable. Dressed in a beige sweater with orange nail polish, they stand against a blurred background."
              className="h-[380px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <article className="rounded-2xl border border-white/15 bg-white/[0.03] p-7 sm:p-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">Seamless from start to finish</p>
            <blockquote className="mb-4 text-lg leading-relaxed text-white/88">
              I had Venture install solar on my home this spring and decided to add an EV charger at the same time for my
              Tesla. They made the whole process incredibly smooth. The install team was professional, everything was
              clearly explained, and it&apos;s such a good feeling knowing I&apos;m charging my car with power from my roof.
            </blockquote>
          </article>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 sm:px-8 lg:grid-cols-[1.05fr_minmax(0,1fr)]">
          <article className="rounded-2xl border border-stone-200 p-7 sm:p-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Why Venture Home?</p>
            <h2 className="mb-4 font-serif text-4xl text-stone-900">You deserve full control</h2>
            <p className="text-stone-600">
              From flawless design and installation to transparent pricing and unmatched customer service, we&apos;re committed
              to maximizing your savings and ensuring your complete satisfaction.
            </p>
            <a
              href="/#explore"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 hover:text-stone-900"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <figure className="overflow-hidden rounded-2xl border border-stone-200">
            <img
              src="/assets/ev-chargers/ev-home-01.png"
              alt="The exterior of a home with bright lights shining, creating a welcoming atmosphere."
              className="h-full min-h-[320px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_460px]">
          <article className="rounded-2xl border border-stone-200 bg-white p-7 sm:p-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Home EV Charging Made Easy</p>
            <h2 className="mb-4 font-serif text-4xl text-stone-900">Add a EV charging station to your home energy system</h2>
            <p className="mb-6 text-stone-600">
              Adding a home EV charger to your existing system is easy. Our chargers work perfectly with pre-existing solar
              systems and are compatible with virtually all electric vehicles, so all you have to do is get in touch.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-xl border border-stone-200 p-4">
                <Zap className="mb-2 h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold text-stone-900">Fast home charging</h3>
                <p className="mt-1 text-sm text-stone-600">Reliable overnight charging designed around your daily driving needs.</p>
              </article>
              <article className="rounded-xl border border-stone-200 p-4">
                <ShieldCheck className="mb-2 h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold text-stone-900">Code-compliant install</h3>
                <p className="mt-1 text-sm text-stone-600">Professional installation with safety-first electrical integration.</p>
              </article>
            </div>
            <a
              href="/#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:bg-stone-100"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <img
              src="/assets/install-gallery/install-10.jpg"
              alt="A Tesla Cybertruck plugged in and charging, ready for use with clean energy."
              className="h-[420px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-8">
          <h2 className="mb-8 font-serif text-4xl text-stone-900">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="rounded-2xl border border-stone-200 bg-white px-6">
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`} className="border-stone-200">
                <AccordionTrigger className="py-5 text-base font-semibold text-stone-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-stone-600">{item.answer}</AccordionContent>
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

export default EVChargers;
