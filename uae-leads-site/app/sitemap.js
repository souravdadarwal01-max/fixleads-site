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
  "/blog/local-seo-uae-service-businesses",
  "/blog/website-design-uae-service-businesses",
  "/blog/small-business-website-cost-uae",
  "/blog/pages-service-company-website",
  "/blog/landing-page-vs-website-uae",
  "/blog/web-design-quote-checklist-dubai",
  "/blog/freelancer-vs-agency-website-dubai",
  "/blog/website-maintenance-cost-uae",
  "/blog/domain-hosting-email-uae-business",
  "/blog/ae-vs-com-domain-uae",
  "/blog/how-long-website-build-dubai",
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
