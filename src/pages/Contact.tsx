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
      description: "Call us anytime",
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
      details: ["4930 Campus Drive", "Newport Beach, CA 92660"],
      description: "By appointment only",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Hours",
      details: ["Mon-Fri 9AM - 7PM PST", "Sat 11AM - 5PM PST"],
      description: "Closed Sundays",
    },
  ];

  return (
    <main className="mobile-premium min-h-screen bg-[#f4eefb]">
      <Navbar />

      <section className="relative overflow-hidden bg-[linear-gradient(130deg,#17141b_0%,#2a2340_48%,#6f5b99_100%)] pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(160,115,226,0.28),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(187,154,223,0.26),transparent_40%)]" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Contact</p>
            <h1 className="mb-5 text-4xl font-medium leading-[1.02] tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
              Get In Touch With Solarfig
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
                      className="h-11 w-full bg-[#6D39B5] text-sm font-semibold uppercase tracking-[0.08em] hover:bg-[#8553c2]"
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6D39B5]/10 text-[#6D39B5]">
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
                <h3 className="mb-3 font-semibold text-stone-900">We serve California and Oregon</h3>
                <p className="mb-4 text-sm leading-relaxed text-stone-600">
                  Including major service areas across California and Oregon, from Los Angeles and
                  Orange County to Portland, Eugene, and surrounding communities.
                </p>
                <a
                  href="/locations"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#6D39B5] transition-all hover:gap-3 hover:text-[#8553c2]"
                >
                  View all service areas <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-4 sm:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#4a267a_0%,#6D39B5_48%,#8553c2_100%)] px-8 py-12 text-center text-white shadow-[0_24px_70px_-28px_rgba(74,38,122,0.72)] sm:px-12 sm:py-16 lg:rounded-3xl">
            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[#cfa8ff]/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
                Quick Start
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Want a faster response?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/84 sm:text-lg">
                Get your free solar report in 2 minutes with no phone call required.
              </p>
              <a
                href="/"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.08em] text-[#6D39B5] shadow-[0_18px_45px_-22px_rgba(255,255,255,0.8)] transition-all hover:bg-gray-100 hover:shadow-[0_22px_55px_-24px_rgba(255,255,255,0.9)]"
              >
                Get Free Solar Report
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
