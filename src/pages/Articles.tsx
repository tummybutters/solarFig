import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import GlobalQuoteSection from "@/sections/GlobalQuoteSection";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import { solarArticles } from "@/content/articles";

const Articles = () => {
  const featuredArticle = solarArticles[0];
  const articleList = solarArticles.slice(1);

  return (
    <main className="mobile-premium min-h-screen bg-[#f1e8fb]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#17141b] pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(160,115,226,0.25),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(187,154,223,0.24),transparent_40%)]" />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Explore</p>
          <h1 className="max-w-5xl text-4xl tracking-tight sm:text-6xl">
            California Solar Buying Guides
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Question-first articles built for real homeowners comparing quotes, timelines, incentives, and battery decisions.
          </p>

          <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:grid-cols-[1.1fr_1fr]">
            <a href={`/articles/${featuredArticle.slug}`} className="group block">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[320px]"
                />
              </div>
            </a>

            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                <Sparkles className="h-3.5 w-3.5" />
                Featured
              </div>
              <a href={`/articles/${featuredArticle.slug}`} className="group">
                <h2 className="text-3xl leading-tight text-white transition-colors group-hover:text-[#e2c5ff] sm:text-4xl">
                  {featuredArticle.title}
                </h2>
              </a>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">{featuredArticle.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-white/75">
                <span className="rounded-full border border-white/15 px-3 py-1">{featuredArticle.category}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" />
                  {featuredArticle.readTime}
                </span>
              </div>
              <a
                href={`/articles/${featuredArticle.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#d8b0ff] transition-colors hover:text-white"
              >
                Read article
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5b4873]">All Articles</p>
              <h2 className="mt-2 text-3xl tracking-tight text-[#261f33] sm:text-4xl">Answer-First Library</h2>
            </div>
            <a
              href="#contact"
              className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.11em] text-[#6d39b5] transition-colors hover:text-[#4c2880] sm:inline-flex"
            >
              Talk to Solarfig
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articleList.map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden rounded-2xl border border-[#cfbfe5] bg-[#f7f1ff] shadow-[0_10px_28px_rgba(26,22,34,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <a href={`/articles/${article.slug}`} className="block">
                  <div className="overflow-hidden border-b border-[#cfbfe5]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-[#5f5378]">
                      <span>{article.category}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl leading-tight tracking-tight text-[#1e1a23] transition-colors group-hover:text-[#6d39b5]">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4a4365]">{article.excerpt}</p>
                    <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GlobalQuoteSection />

      <Footer />
    </main>
  );
};

export default Articles;
