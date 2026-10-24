import Link from "next/link";
import { NICHES } from "../../../lib/niches";
import { SITE, wa } from "../../../lib/site";

const title = "How Much Does Website Design Cost in Dubai? (2026 Guide)";
const description = "Understand website design costs in Dubai in 2026, the factors that affect your quote, common website packages, and how to budget for a business website.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog/website-design-cost-dubai" },
  openGraph: { title, description, type: "article", url: "/blog/website-design-cost-dubai" },
};

const faqs = [
  ["How much should a small business budget for a website in Dubai?", "Start by defining the pages, content, enquiry features and ongoing support you need. A small brochure site generally costs less than a site with many service pages, custom integrations or multilingual content. Request an itemised quote rather than choosing on price alone."],
  ["Does website design include SEO?", "Not always. Ask whether the quote includes page titles, meta descriptions, heading structure, internal links, mobile performance, sitemap setup and Search Console. Ongoing content and SEO work may be priced separately."],
  ["Are hosting and maintenance included?", "It depends on the provider and package. Confirm hosting, domain renewal, backups, security updates, edits and support in writing before you sign."],
  ["How long does a business website take?", "A straightforward site may take a couple of weeks, while a larger site can take longer. Content readiness, revisions, integrations and approvals all affect the schedule."],
];

const ranges = [
  { name: "Starter website", range: "AED 1,500–3,500", fit: "A simple presence for a small business with a few core pages.", includes: "Typically a template-led design, contact details, mobile layout and basic on-page setup." },
  { name: "Lead-generation website", range: "AED 3,500–8,000", fit: "A service business that needs dedicated pages and stronger enquiry paths.", includes: "May include multiple service pages, WhatsApp/call CTAs, analytics and more tailored design." },
  { name: "Custom or multilingual website", range: "AED 8,000+", fit: "Businesses needing bespoke functionality, more content or Arabic/English experiences.", includes: "Scope varies significantly with integrations, custom design, content production and technical requirements." },
];

export default function WebsiteDesignCostDubai() {
  const ld = [
    { "@context": "https://schema.org", "@type": "Article", headline: title, description, datePublished: "2026-10-24", dateModified: "2026-10-24", author: { "@type": "Organization", name: SITE.name }, publisher: { "@type": "Organization", name: SITE.name, url: SITE.url }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/website-design-cost-dubai` } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <article>
      <section className="hero"><div className="wrap narrow">
        <p className="cap"><Link href="/blog">BLOG</Link> · WEBSITE DESIGN · 2026 GUIDE</p>
        <h1>{title}</h1>
        <p className="lead">A practical way to estimate your budget, compare quotes and understand what you are paying for when commissioning a business website in Dubai.</p>
        <p className="blog-meta">Updated October 24, 2026 · 7 min read</p>
      </div></section>
      <section className="sec"><div className="wrap narrow blog-article">
        <p><strong>Short answer:</strong> website design prices vary with the number of pages, the amount of custom design, content needs, integrations and after-launch support. The ranges below are planning estimates—not an audited market average or a guaranteed quote. Ask providers to confirm exactly what is included.</p>
        <h2>Website design cost estimates in Dubai</h2>
        <div className="cost-grid">{ranges.map(item => <section className="cost-card" key={item.name}>
          <p className="cap">{item.name}</p><h3>{item.range}</h3><p>{item.fit}</p><p className="muted">{item.includes}</p>
        </section>)}</div>
        <p className="muted">These are indicative budgeting ranges for planning only. Actual prices can be lower or much higher depending on the supplier, scope, content and technical requirements. Confirm current pricing directly with providers.</p>
        <h2>What changes the final quote?</h2>
        <ul>
          <li><strong>Number of pages:</strong> each service or location page needs planning, content and quality checks.</li>
          <li><strong>Design approach:</strong> a configured template is usually less expensive than bespoke layouts and interactions.</li>
          <li><strong>Content and images:</strong> copywriting, photography, translation and proofing may be separate line items.</li>
          <li><strong>Lead features:</strong> forms, WhatsApp links, booking tools, CRM connections and analytics need setup and testing.</li>
          <li><strong>SEO foundations:</strong> metadata, internal links, structured data, redirects and sitemap configuration should be clearly specified.</li>
          <li><strong>Ongoing care:</strong> hosting, backups, security, updates and new pages may have recurring fees.</li>
        </ul>
        <h2>What should a small service business prioritise?</h2>
        <p>For an AC maintenance, plumbing, pest control or cleaning company, focus first on clarity and easy contact—not complicated animations. A useful website should explain services and coverage areas, build trust, load well on mobile and make calling or messaging effortless.</p>
        <p>Explore our focused pages for <Link href="/niches/ac-maintenance">AC maintenance companies</Link>, <Link href="/niches/plumbing-handyman">plumbers and handyman businesses</Link>, <Link href="/niches/pest-control">pest control companies</Link> and <Link href="/niches/cleaning-companies">cleaning companies</Link>.</p>
        <h2>Website quote checklist</h2>
        <ul>
          <li>How many unique pages are included, and who writes the content?</li>
          <li>Is the site designed for mobile, and are calls and WhatsApp clicks easy to use?</li>
          <li>Are domain, hosting, SSL, backups and maintenance included?</li>
          <li>Will you receive access to the website, domain and analytics accounts?</li>
          <li>Does the quote cover metadata, sitemap, redirects and Search Console setup?</li>
          <li>What counts as a revision, and what are the costs for future changes?</li>
          <li>Are taxes, third-party subscriptions and renewal costs itemised?</li>
        </ul>
        <h2>Frequently asked questions</h2>
        {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        <div className="blog-cta"><h2>Get a practical website review</h2><p>FixLeads Studio helps UAE home-service businesses improve mobile usability, service-page structure and enquiry paths. Ask for a review before deciding what to build.</p><a className="btn" href={wa("Hi, I'd like a free website review for my UAE service business.")}>Request a free review</a></div>
        <p className="muted"><Link href="/blog">← Back to all guides</Link></p>
      </div></section>
    </article>
  </>;
}
