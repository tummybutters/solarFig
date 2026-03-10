import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const SITE_URL = "https://solarfig.com";

const read = (relativePath) => fs.readFileSync(path.join(repoRoot, relativePath), "utf8");

const appSource = read("src/App.tsx");
const seoSource = read("src/lib/seo.ts");
const sitemapSource = read("public/sitemap.xml");
const articleSource = read("src/content/articles.ts");

const extractObjectBlock = (source, marker) => {
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) {
    throw new Error(`Unable to find marker: ${marker}`);
  }

  const startIndex = source.indexOf("{", markerIndex);
  let depth = 0;

  for (let index = startIndex; index < source.length; index += 1) {
    const character = source[index];

    if (character === "{") depth += 1;
    if (character === "}") depth -= 1;

    if (depth === 0) {
      return source.slice(startIndex, index + 1);
    }
  }

  throw new Error(`Unable to extract object block for marker: ${marker}`);
};

const parseRouteDefinitions = (source) => {
  const routes = [];

  for (const line of source.split("\n")) {
    if (!line.includes("<Route path=")) continue;

    const pathMatch = line.match(/path="([^"]+)"/);
    if (!pathMatch) continue;

    routes.push({
      path: pathMatch[1],
      isNavigate: line.includes("element={<Navigate"),
    });
  }

  return routes;
};

const parseMetaEntries = (block) => {
  const entries = new Map();
  let currentKey = null;
  let currentEntry = null;

  for (const line of block.split("\n")) {
    const homeMatch = line.match(/^\s*"([^"]+)":\s*HOME_META,/);
    if (homeMatch) {
      entries.set(homeMatch[1], { usesHomeMeta: true });
      currentKey = null;
      currentEntry = null;
      continue;
    }

    const keyMatch = line.match(/^\s*"([^"]+)":\s*\{$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      currentEntry = {};
      continue;
    }

    if (!currentKey || !currentEntry) continue;

    const titleMatch = line.match(/^\s*title:\s*"([^"]+)",$/);
    if (titleMatch) {
      currentEntry.title = titleMatch[1];
      continue;
    }

    const descriptionMatch = line.match(/^\s*description:\s*"([^"]+)",$/);
    if (descriptionMatch) {
      currentEntry.description = descriptionMatch[1];
      continue;
    }

    if (line.trim() === "}," || line.trim() === "}") {
      entries.set(currentKey, currentEntry);
      currentKey = null;
      currentEntry = null;
    }
  }

  return entries;
};

const parseHomeMeta = (source) => {
  const homeBlock = extractObjectBlock(source, "const HOME_META");
  const title = homeBlock.match(/title:\s*"([^"]+)"/)?.[1];
  const description = homeBlock.match(/description:\s*"([^"]+)"/)?.[1];

  return { title, description };
};

const parseSitemapPaths = (source) =>
  [...source.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
    const url = match[1].trim();
    return url === `${SITE_URL}/` ? "/" : url.replace(SITE_URL, "");
  });

const parseArticleSlugs = (source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);

const reportLengthIssue = (issues, label, title, description) => {
  if (!title || title.length < 25 || title.length > 65) {
    issues.push(`${label} title length is ${title?.length ?? 0} characters`);
  }

  if (!description || description.length < 70 || description.length > 170) {
    issues.push(`${label} description length is ${description?.length ?? 0} characters`);
  }
};

const routeDefinitions = parseRouteDefinitions(appSource);
const liveStaticRoutes = routeDefinitions
  .filter((route) => route.path !== "*" && !route.path.includes(":") && !route.isNavigate)
  .map((route) => route.path);
const redirectRoutes = routeDefinitions.filter((route) => route.isNavigate).map((route) => route.path);
const hasDynamicArticleRoute = routeDefinitions.some((route) => route.path === "/articles/:slug");

const homeMeta = parseHomeMeta(seoSource);
const routeMetaEntries = parseMetaEntries(extractObjectBlock(seoSource, "const ROUTE_META"));
const articleMetaEntries = parseMetaEntries(extractObjectBlock(seoSource, "const ARTICLE_META_OVERRIDES"));
const articleSlugs = parseArticleSlugs(articleSource);
const sitemapPaths = parseSitemapPaths(sitemapSource);
const expectedIndexablePaths = [
  ...liveStaticRoutes,
  ...(hasDynamicArticleRoute ? articleSlugs.map((slug) => `/articles/${slug}`) : []),
];

const issues = [];

const metadataPaths = Array.from(routeMetaEntries.keys());
const missingMetadataRoutes = liveStaticRoutes.filter((route) => !routeMetaEntries.has(route));
const orphanedMetadataRoutes = metadataPaths.filter((route) => !liveStaticRoutes.includes(route));
const missingSitemapPaths = expectedIndexablePaths.filter((route) => !sitemapPaths.includes(route));
const orphanedSitemapPaths = sitemapPaths.filter((route) => !expectedIndexablePaths.includes(route));
const sitemapRedirectPaths = redirectRoutes.filter((route) => sitemapPaths.includes(route));
const missingArticleOverrides = articleSlugs.filter((slug) => !articleMetaEntries.has(slug));
const orphanedArticleOverrides = Array.from(articleMetaEntries.keys()).filter((slug) => !articleSlugs.includes(slug));
const invalidArticleSlugs = articleSlugs.filter((slug) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 80);

if (missingMetadataRoutes.length > 0) {
  issues.push(`Missing route metadata: ${missingMetadataRoutes.join(", ")}`);
}

if (orphanedMetadataRoutes.length > 0) {
  issues.push(`Metadata entries without live routes: ${orphanedMetadataRoutes.join(", ")}`);
}

if (missingSitemapPaths.length > 0) {
  issues.push(`Indexable URLs missing from sitemap: ${missingSitemapPaths.join(", ")}`);
}

if (orphanedSitemapPaths.length > 0) {
  issues.push(`Sitemap URLs without matching live indexable routes: ${orphanedSitemapPaths.join(", ")}`);
}

if (sitemapRedirectPaths.length > 0) {
  issues.push(`Redirect-only routes still present in sitemap: ${sitemapRedirectPaths.join(", ")}`);
}

if (missingArticleOverrides.length > 0) {
  issues.push(`Articles missing SEO title/description overrides: ${missingArticleOverrides.join(", ")}`);
}

if (orphanedArticleOverrides.length > 0) {
  issues.push(`Article SEO overrides without matching content: ${orphanedArticleOverrides.join(", ")}`);
}

if (invalidArticleSlugs.length > 0) {
  issues.push(`Article slugs failed validation: ${invalidArticleSlugs.join(", ")}`);
}

reportLengthIssue(issues, "/", homeMeta.title, homeMeta.description);

for (const [route, meta] of routeMetaEntries.entries()) {
  const title = meta.usesHomeMeta ? homeMeta.title : meta.title;
  const description = meta.usesHomeMeta ? homeMeta.description : meta.description;
  reportLengthIssue(issues, route, title, description);
}

for (const [slug, meta] of articleMetaEntries.entries()) {
  reportLengthIssue(issues, `/articles/${slug}`, meta.title, meta.description);
}

if (issues.length > 0) {
  console.error("SEO audit failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log("SEO audit passed.");
console.log(`- Static routes with metadata: ${liveStaticRoutes.length}`);
console.log(`- Article slugs audited: ${articleSlugs.length}`);
console.log(`- Sitemap URLs audited: ${sitemapPaths.length}`);
