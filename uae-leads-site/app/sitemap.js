import { SITE } from "../lib/site";
import { NICHES } from "../lib/niches";

const staticPages = [
  "",
  "/blog",
  "/industries",
  "/pricing",
  "/how-it-works",
  "/faq",
  "/work",
  "/blog/website-design-cost-dubai",
];

export default function sitemap() {
  return [
    ...staticPages.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
    })),
    ...NICHES.map((n) => ({
      url: `${SITE.url}/niches/${n.slug}`,
      lastModified: new Date(),
    })),
  ];
}
