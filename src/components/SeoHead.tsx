import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoMetaForPath, toAbsoluteUrl } from "@/lib/seo";

const upsertMetaByName = (name: string, content: string) => {
  let el = document.head.querySelector(`meta[name=\"${name}\"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let el = document.head.querySelector(`meta[property=\"${property}\"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector("link[rel=\"canonical\"]") as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SeoHead = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoMetaForPath(location.pathname);
    const canonicalUrl = toAbsoluteUrl(seo.canonicalPath);
    const imageUrl = seo.image ? toAbsoluteUrl(seo.image) : undefined;

    document.title = seo.title;

    upsertMetaByName("title", seo.title);
    upsertMetaByName("description", seo.description);
    upsertMetaByName(
      "robots",
      seo.noIndex ? "noindex, nofollow, noarchive" : "index, follow, max-image-preview:large",
    );

    upsertMetaByProperty("og:type", seo.ogType ?? "website");
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:title", seo.title);
    upsertMetaByProperty("og:description", seo.description);

    upsertMetaByProperty("twitter:card", "summary_large_image");
    upsertMetaByProperty("twitter:url", canonicalUrl);
    upsertMetaByProperty("twitter:title", seo.title);
    upsertMetaByProperty("twitter:description", seo.description);

    if (imageUrl) {
      upsertMetaByProperty("og:image", imageUrl);
      upsertMetaByProperty("twitter:image", imageUrl);
    }

    upsertCanonical(canonicalUrl);
  }, [location.pathname]);

  return null;
};

export default SeoHead;
