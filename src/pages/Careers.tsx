import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight, BriefcaseBusiness, MapPin, Sparkles } from "lucide-react";

const roles = [
  "Solar Sales Consultant",
  "Project Coordinator",
  "Operations Support Specialist",
  "Customer Experience Manager",
];

const Careers = () => {
  return (
    <main className="min-h-screen bg-[#f4eefb]">
      <Navbar />

      <section className="bg-[#17141b] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Explore</p>
          <h1 className="max-w-4xl text-4xl tracking-tight sm:text-6xl">Careers at Solarfig</h1>
          <p className="mt-5 max-w-2xl text-white/75">
            We are building a high-trust, high-performance team focused on helping homeowners across California.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-8">
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <div className="border border-gray-200 bg-white p-5 text-sm text-gray-700">
              <BriefcaseBusiness className="mb-3 h-5 w-5 text-[#6d39b5]" />
              Remote and hybrid roles
            </div>
            <div className="border border-gray-200 bg-white p-5 text-sm text-gray-700">
              <MapPin className="mb-3 h-5 w-5 text-[#6d39b5]" />
              California market focus
            </div>
            <div className="border border-gray-200 bg-white p-5 text-sm text-gray-700">
              <Sparkles className="mb-3 h-5 w-5 text-[#6d39b5]" />
              Growth-focused environment
            </div>
          </div>

          <div className="border border-gray-200 bg-white p-8">
            <h2 className="text-2xl tracking-tight text-gray-900">Current Openings</h2>
            <ul className="mt-5 space-y-3">
              {roles.map((role) => (
                <li key={role} className="border border-gray-100 bg-gray-50 px-4 py-3 text-gray-700">
                  {role}
                </li>
              ))}
            </ul>
            <a
              href="mailto:careers@solarfig.com"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6d39b5]"
            >
              Submit your resume
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <GlobalQuoteSection />

      <Footer />
    </main>
  );
};

export default Careers;
