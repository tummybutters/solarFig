import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: ["+1 (213) 306-4154"],
      description: "Mon-Fri 8am-6pm PST",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: ["info@solarfig.com"],
      description: "We reply within 24 hours",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      details: ["2810 Jackson Ave PH3B", "Long Island City, NY 11101"],
      description: "By appointment only",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Hours",
      details: ["Mon-Fri: 8am - 6pm", "Sat: 9am - 2pm"],
      description: "Closed Sundays",
    },
  ];

  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#6a4fa1] pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/14 via-[#5f448f]/24 to-[#4e3680]/34" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Contact</p>
            <h1 className="mb-5 text-4xl font-medium leading-[1.02] tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
              Get in touch with Solarfig
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Ready to go solar or compare options? Tell us about your home and goals. A real
              person from our team will follow up within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_12px_40px_-20px_rgba(109,57,181,0.3)] sm:p-8 lg:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-stone-900">Message sent</h3>
                  <p className="text-gray-600">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="mb-6 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FloatingInput
                        label="First Name"
                        name="firstName"
                        autoComplete="given-name"
                        required
                        inputClassName="bg-white"
                        labelClassName="peer-focus:bg-white peer-[&:not(:placeholder-shown)]:bg-white"
                      />
                      <FloatingInput
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        required
                        inputClassName="bg-white"
                        labelClassName="peer-focus:bg-white peer-[&:not(:placeholder-shown)]:bg-white"
                      />
                    </div>
                    <FloatingInput
                      label="Email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      inputClassName="bg-white"
                      labelClassName="peer-focus:bg-white peer-[&:not(:placeholder-shown)]:bg-white"
                    />
                    <FloatingInput
                      label="Phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputClassName="bg-white"
                      labelClassName="peer-focus:bg-white peer-[&:not(:placeholder-shown)]:bg-white"
                    />
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-700">Service Interest</label>
                      <select className="h-11 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-stone-700">
                        <option>Residential Solar</option>
                        <option>Battery Storage</option>
                        <option>EV Charging</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-700">Message</label>
                      <Textarea placeholder="Tell us about your project or questions..." rows={4} />
                    </div>
                    <Button
                      type="submit"
                      className="h-11 w-full bg-purple-600 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-purple-700"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                  Contact information
                </h2>
                <p className="mb-8 text-stone-600">Prefer to reach out directly? Here&apos;s how to find us.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4 rounded-xl border border-purple-100/80 bg-white/70 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="mb-1 font-semibold text-stone-900">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="break-words text-sm text-stone-600">
                          {detail}
                        </p>
                      ))}
                      <p className="mt-1 text-xs text-stone-400">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
                <h3 className="mb-3 font-semibold text-stone-900">We serve all of California</h3>
                <p className="mb-4 text-sm leading-relaxed text-stone-600">
                  Including: Los Angeles, Orange County, San Diego, Riverside, San Bernardino,
                  Ventura, and the Bay Area.
                </p>
                <a
                  href="/locations"
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 transition-all hover:gap-3"
                >
                  View all service areas <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-[1400px] px-6 text-center sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">Want a faster response?</h2>
          <p className="mb-6 text-white/85">
            Get your free solar report in 2 minutes with no phone call required.
          </p>
          <a
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.08em] text-purple-700 transition-colors hover:bg-gray-100"
          >
            Get Free Solar Report
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
