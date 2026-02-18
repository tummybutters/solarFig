import { Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { solarArticles, solarArticlesBySlug } from "@/content/articles";

const ArticleDetail = () => {
  const { slug } = useParams();

  if (!slug || !solarArticlesBySlug[slug]) {
    return <Navigate to="/articles" replace />;
  }

  const article = solarArticlesBySlug[slug];
  const articleIndex = solarArticles.findIndex((item) => item.slug === slug);
  const previousArticle = articleIndex > 0 ? solarArticles[articleIndex - 1] : null;
  const nextArticle = articleIndex < solarArticles.length - 1 ? solarArticles[articleIndex + 1] : null;

  return (
    <main className="mobile-premium min-h-screen bg-[#f2eee8]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#17141b] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(133,83,194,0.3),transparent_48%),radial-gradient(circle_at_85%_25%,rgba(159,114,208,0.2),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <a
            href="/articles"
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Articles
          </a>

          <div className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/85">
            {article.category}
          </div>
          <h1 className="max-w-4xl font-['Fraunces'] text-4xl leading-tight tracking-tight sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-white/75">{article.excerpt}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/75">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Updated {article.updatedAt}
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-10 sm:pt-14">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="overflow-hidden rounded-3xl border border-[#d7c6ea] bg-[#fbf8f4] shadow-[0_20px_44px_rgba(22,18,28,0.08)]">
            <div className="border-b border-[#d7c6ea]">
              <img src={article.image} alt={article.title} className="h-[260px] w-full object-cover sm:h-[360px]" />
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-12">
              {article.sections.map((section, index) => (
                <section key={section.heading} className={index === 0 ? "" : "mt-12 border-t border-[#deceef] pt-10"}>
                  <h2 className="font-['Fraunces'] text-3xl leading-tight tracking-tight text-[#1f1a23] sm:text-4xl">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-[17px] leading-8 text-[#352f38] sm:text-[18px]">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.checklist ? (
                    <div className="mt-7 rounded-2xl border border-[#dbc8ee] bg-[#f5ecff] px-5 py-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#5a2f90]">Checklist</p>
                      <ul className="space-y-2">
                        {section.checklist.map((item) => (
                          <li key={item} className="flex gap-3 text-[15px] leading-7 text-[#2f2738] sm:text-[16px]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7b3fcf]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {section.tip ? (
                    <p className="mt-7 border-l-4 border-[#7b3fcf] bg-[#f7f1ff] px-4 py-4 text-[15px] leading-7 text-[#3a2f49] sm:text-[16px]">
                      {section.tip}
                    </p>
                  ) : null}
                </section>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded-3xl border border-[#d7c6ea] bg-[#f5ecff] p-6 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5d4f49]">In This Article</p>
            <ol className="mt-4 space-y-3">
              {article.sections.map((section, index) => (
                <li key={section.heading} className="text-sm leading-6 text-[#3d353f]">
                  <span className="mr-2 text-[#7b3fcf]">{String(index + 1).padStart(2, "0")}</span>
                  {section.heading}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-[1200px] gap-4 px-6 sm:px-8 md:grid-cols-2">
          {previousArticle ? (
            <a
              href={`/articles/${previousArticle.slug}`}
              className="group rounded-2xl border border-[#d7c6ea] bg-[#faf7f3] p-6 transition-colors hover:border-[#cba7ef]"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7051a4]">Previous</p>
              <p className="font-['Fraunces'] text-2xl leading-tight text-[#1f1a23]">{previousArticle.title}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
                Read
                <ArrowRight className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              </p>
            </a>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <a
              href={`/articles/${nextArticle.slug}`}
              className="group rounded-2xl border border-[#d7c6ea] bg-[#faf7f3] p-6 transition-colors hover:border-[#cba7ef]"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7051a4]">Next</p>
              <p className="font-['Fraunces'] text-2xl leading-tight text-[#1f1a23]">{nextArticle.title}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6d39b5]">
                Read
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </p>
            </a>
          ) : (
            <div />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ArticleDetail;
