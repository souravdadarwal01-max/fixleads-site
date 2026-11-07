import { SITE } from "../lib/site";
import { NICHES } from "../lib/niches";
export default function sitemap() {
  return [SITE.url, ...NICHES.map(n => `${SITE.url}/niches/${n.slug}`)].map(url => ({ url, lastModified: new Date() }));
}
