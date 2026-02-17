import { ArrowUpRight, BookOpenText, UserRound, Gift } from "lucide-react";

const articleCards = [
  {
    title: "NEM 3.0 Explained for California Homeowners",
    excerpt: "How billing changed, why batteries matter more now, and how to size for time-of-use rates.",
  },
  {
    title: "Solar + Battery Payback: Key Inputs That Actually Matter",
    excerpt: "Utility plan, usage timing, export profile, and equipment pairing all impact your real timeline.",
  },
  {
    title: "How to Compare Solar Quotes Without Getting Burned",
    excerpt: "What to check in assumptions, warranties, installer scope, and financing before signing.",
  },
];

const Explore = () => {
  return (
    <section id="explore" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-purple-600 text-xs tracking-widest uppercase font-medium">Explore</span>
          <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mt-4 mb-5">
            Learn how SolarFig works before you commit.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Transparent education, referral benefits, and a clear look at what working with us feels like.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article id="about" className="rounded-none border border-gray-100 p-6 sm:p-7 bg-gray-50">
            <div className="w-11 h-11 rounded-none bg-[#6d39b5] text-white flex items-center justify-center mb-4">
              <UserRound className="w-5 h-5" />
            </div>
            <h3 className="text-gray-900 text-xl font-semibold mb-3">About SolarFig</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              California-focused advisory approach built around fit, transparency, and project quality.
              We match homeowners with vetted installation partners and right-sized equipment.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#6d39b5]">
              Talk with our team
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </article>

          <article id="articles" className="rounded-none border border-gray-100 p-6 sm:p-7 bg-gray-50 lg:col-span-2">
            <div className="w-11 h-11 rounded-none bg-[#6d39b5] text-white flex items-center justify-center mb-4">
              <BookOpenText className="w-5 h-5" />
            </div>
            <h3 className="text-gray-900 text-xl font-semibold mb-4">Articles</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {articleCards.map((article) => (
                <div key={article.title} className="rounded-none bg-white border border-gray-100 p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{article.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{article.excerpt}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="referrals" className="rounded-none border border-purple-100 p-6 sm:p-7 bg-purple-50 lg:col-span-3">
            <div className="w-11 h-11 rounded-none bg-[#6d39b5] text-white flex items-center justify-center mb-4">
              <Gift className="w-5 h-5" />
            </div>
            <h3 className="text-gray-900 text-xl font-semibold mb-3">Referral Program</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Know someone in California considering solar? Send them our way and earn referral rewards
              when they install.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#6d39b5]">
              Ask about referral details
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Explore;
