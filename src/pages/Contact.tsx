import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock, Check } from "lucide-react";
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
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["+1 (213) 306-4154"],
      description: "Mon-Fri 8am-6pm PST"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["info@solarfig.com"],
      description: "We reply within 24 hours"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      details: ["4930 Campus Drive", "Newport Beach, CA 92660"],
      description: "By appointment only"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      details: ["Mon-Fri: 8am - 6pm", "Sat: 9am - 2pm"],
      description: "Closed Sundays"
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
              Get in <span className="text-purple-400">touch</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Ready to go solar? Have questions? We're here to help. 
              Reach out and a real person will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-10 border border-gray-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
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
                      <label className="block text-sm font-medium mb-2">Service Interest</label>
                      <select className="w-full h-9 px-3 border border-gray-200 bg-white">
                        <option>Residential Solar</option>
                        <option>Battery Storage</option>
                        <option>Commercial Solar</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us about your project or questions..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact information</h2>
                <p className="text-gray-600 mb-8">
                  Prefer to reach out directly? Here's how to find us.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-gray-600">{detail}</p>
                      ))}
                      <p className="text-xs text-gray-400 mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-semibold mb-4">We serve all of California</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Including: Los Angeles, Orange County, San Diego, Riverside, 
                  San Bernardino, Ventura, and the Bay Area.
                </p>
                <a 
                  href="/areas" 
                  className="inline-flex items-center gap-2 text-purple-600 text-sm font-medium hover:gap-3 transition-all"
                >
                  View all service areas <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Want a faster response?
          </h2>
          <p className="text-white/80 mb-6">
            Get your free solar report in 2 minutes with no phone call required.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Solar Report
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
