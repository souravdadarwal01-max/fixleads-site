import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "LocalBusiness and Service Schema for UAE Websites: A Practical Setup Guide";
const description = "Learn when UAE service businesses should use LocalBusiness, Organization and Service structured data, with practical JSON-LD examples and a validation checklist.";
const image = "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=85";
const url = SITE.url + "/blog/local-business-schema-uae";
const localBusinessExample = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://example.com/#business",
  "name": "[Replace with the exact real business name]",
  "url": "https://example.com/",
  "telephone": "[Replace with the public business phone number]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Real public street address, if applicable]",
    "addressLocality": "[Actual city or emirate]",
    "addressRegion": "[Actual emirate, if appropriate]",
    "addressCountry": "AE"
  }
}, null, 2);
const serviceExample = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://example.com/ac-maintenance/#service",
  "name": "AC maintenance",
  "serviceType": "Air-conditioning maintenance",
  "url": "https://example.com/ac-maintenance/",
  "provider": {
    "@type": "Organization",
    "name": "[Exact real business name]",
    "url": "https://example.com/"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Dubai, United Arab Emirates"
  }
}, null, 2);
const faqs = [
  ["Does LocalBusiness schema guarantee a higher Google ranking?", "No. Structured data helps describe page and business information, but Google does not guarantee rankings or a rich result. Eligibility, accuracy, page quality and Google's systems all matter."],
  ["Should every service page use LocalBusiness schema?", "Usually, define the real business or location consistently and use Service markup for an individual offering when it accurately describes visible page content. Avoid creating a different fictitious business entity for each service."],
  ["Can a service-area business use a hidden or private address in schema?", "Do not invent or misrepresent an address. Google's LocalBusiness rich-result documentation requires a physical address. If the business does not have a customer-facing location that can truthfully be represented, use an appropriate Organization and Service description instead of forcing an inaccurate LocalBusiness example."],
  ["Is Service schema a Google rich-result feature?", "Schema.org defines Service as a type for describing a service, but that does not mean Google provides a dedicated rich result for every Service object. Treat it as descriptive markup, not a promise of a special search appearance."],
  ["Should I add ratings or reviews to the markup?", "Only mark up reviews and ratings when they meet the relevant platform rules and are genuinely present on the page. Do not invent ratings, copy third-party reviews into self-serving markup or add aggregateRating just to seek stars."]
];
const ld = [
  {"@context":"https://schema.org","@type":"Article",headline:title,description,image:[image],datePublished:"2026-10-28",dateModified:"2026-10-28",author:{"@type":"Organization",name:SITE.name,url:SITE.url},publisher:{"@type":"Organization",name:SITE.name,url:SITE.url},mainEntityOfPage:{"@type":"WebPage","@id":url}},
  {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:SITE.url},{"@type":"ListItem",position:2,name:"Blog",item:SITE.url+"/blog"},{"@type":"ListItem",position:3,name:title,item:url}]},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}
];
export const metadata = {
  title: "LocalBusiness and Service Schema for UAE Websites",
  description,
  alternates: { canonical: "/blog/local-business-schema-uae" },
  openGraph: { title, description, type: "article", url: "/blog/local-business-schema-uae", images: [{ url: image, alt: "Developer reviewing website code and structured data" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] }
};
export default function Article() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/><article><section className="hero"><div className="wrap narrow"><p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · TECHNICAL SEO</p><h1>{title}</h1><p className="lead">{description}</p><p className="blog-meta">Published October 28, 2026 · Structured data implementation guide</p><img src={image} alt="Developer reviewing website code and structured data" className="blog-hero-image" width="1400" height="900" fetchPriority="high"/></div></section><section className="sec"><div className="wrap narrow blog-article">
<p><strong>Structured data is a machine-readable description of information that is already represented on a page.</strong> For a UAE AC maintenance, pest control, cleaning or plumbing company, it can help clarify which organisation operates the site, what service a page describes and which area the service genuinely covers. It is not a shortcut for missing content, a substitute for accurate business details or a ranking guarantee.</p>
<p>This guide separates three concepts that are often mixed together: the business entity, the service being offered and the Google search features that may consume structured data. Examples use placeholders; replace them with facts that are true for the specific business and page.</p>
<h2>Choose the type that matches the real entity</h2>
<h3>Organization: describe the company</h3>
<p><a href="https://schema.org/Organization" target="_blank" rel="noopener noreferrer">Organization</a> is a useful way to describe the company behind a website: its real name, official URL, logo and verified public profiles. It is a sensible starting point when a business operates remotely or does not have a customer-facing location that can accurately be represented as a local branch.</p>
<h3>LocalBusiness: describe a genuine local business or location</h3>
<p><a href="https://schema.org/LocalBusiness" target="_blank" rel="noopener noreferrer">LocalBusiness</a> represents a particular physical business or branch. Google's <a href="https://developers.google.com/search/docs/appearance/structured-data/local-business" target="_blank" rel="noopener noreferrer">LocalBusiness structured-data documentation</a> requires a business name and physical address for eligibility for its Local Business rich-result feature. Use the most specific valid subtype only when it really fits the operation.</p>
<p>For a company that visits customers, be careful not to invent a shopfront or publish an address that misleads visitors. If the company has no suitable public customer-facing address, do not force a LocalBusiness example just because a plugin asks for one. Use an accurate Organization description and describe individual services where appropriate; review Google's current documentation before attempting to qualify for a location-specific search feature.</p>
<h3>Service: describe one actual service</h3>
<p><a href="https://schema.org/Service" target="_blank" rel="noopener noreferrer">Service</a> describes a service provided by an organisation or person. It can identify the offering, its provider and the area served. For example, an AC maintenance page may describe AC maintenance, while a pest-control page describes the treatments the company genuinely offers. Schema.org defining a type does not mean Google provides a dedicated rich result for that type.</p>
<h2>Start with a clear business entity</h2>
<p>Before writing JSON-LD, prepare one approved record of the business's real name, canonical website URL, public phone number, logo, and official social or platform profiles. Check that the same facts appear in visible site content and that each linked profile belongs to the company.</p>
<ul>
<li>Use the business's real trading name, not a string of keywords.</li>
<li>Use a canonical HTTPS URL that resolves successfully.</li>
<li>Use only official profiles in sameAs; do not add directories or profiles that are unrelated or not controlled by the business.</li>
<li>Keep the visible contact details consistent with the data in the markup.</li>
<li>Only include opening hours, coordinates, price information, ratings or other details when they are accurate and supported.</li>
</ul>
<p>Do not add a separate LocalBusiness entity for every service page if all of them describe the same company. Where a company has several real branches, model the branches only when the locations and their details are genuinely distinct.</p>
<h2>Example 1: LocalBusiness for a real public location</h2>
<p>The following is a structural example, not a ready-to-publish profile. Replace each placeholder and remove any property that does not apply. The address must be the real physical location represented by the page. Do not invent a street, postal code or map coordinate. Google's eligibility rules and required properties take precedence over a generic example.</p>
<pre><code>{localBusinessExample}</code></pre>
<p>Keep the address visible and consistent wherever the site claims customers can visit the business. If the business is service-area-only and does not receive customers at its address, do not publish private or misleading location information simply to complete this example. Review the platform's current requirements with the developer before adding location markup.</p>
<h2>Example 2: Service markup for a service page</h2>
<p>This example describes a service and its provider. Change the service name and service area to match the page. Do not say a company covers all of the UAE if it only takes jobs in Dubai, or list a service the team does not actually perform.</p>
<pre><code>{serviceExample}</code></pre>
<p>Use <code>areaServed</code> only for the genuine coverage area. Keep the service page useful for people as well: explain what is included, how the process works, what information a customer should provide and how to enquire. Markup cannot compensate for a thin or misleading page.</p>
<h2>Where should the JSON-LD go?</h2>
<p>For a Next.js site, a JSON-LD script can be rendered on the page that the data describes. Keep the data in a maintainable object or helper rather than copying slightly different versions across dozens of pages. Escape or serialize values safely, and make sure the canonical URL and page entity stay in sync.</p>
<p>Use a stable identifier such as the company's canonical URL plus a fragment for the business entity, for example a business ID ending in <code>#business</code>. Refer to that same entity from related service markup where appropriate. Stable IDs help avoid accidentally describing the same business as several unrelated entities.</p>
<h2>Common schema mistakes on service websites</h2>
<ul>
<li><strong>Invented locations:</strong> do not use a virtual office or private address as if it were a customer-facing branch.</li>
<li><strong>Wrong business type:</strong> choose a type that matches the real operation, not the keyword you want to rank for.</li>
<li><strong>Unsupported ratings:</strong> never invent stars, review counts, awards or testimonials. Only use review markup when it meets the relevant guidelines and matches the visible page.</li>
<li><strong>Keyword stuffing:</strong> names and descriptions should identify the real entity and service, not repeat a list of search phrases.</li>
<li><strong>Duplicate entities:</strong> keep a consistent business ID instead of creating a new business identity on every URL.</li>
<li><strong>Markup without visible support:</strong> do not add prices, opening hours, service coverage or claims that the page does not substantiate.</li>
<li><strong>Assuming a rich result:</strong> valid structured data does not guarantee that Google will show a special search feature.</li>
</ul>
<h2>Validate before and after publishing</h2>
<ol>
<li>Check the page's visible details against the JSON-LD property by property.</li>
<li>Validate general Schema.org syntax with the <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer">Schema Markup Validator</a>.</li>
<li>For a type supported by Google rich results, use Google's <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">Rich Results Test</a> and fix errors that affect eligibility.</li>
<li>Confirm the page is crawlable, indexable and uses the intended canonical URL.</li>
<li>After deployment, inspect the URL in <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">Google Search Console</a> and monitor relevant enhancement reports if available.</li>
<li>Repeat the checks after changing business details, page URLs, service coverage or the schema implementation.</li>
</ol>
<p>Google notes that structured data features may look different in results and are not guaranteed to appear. Use its <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer">structured data introduction</a> for general principles and the specific LocalBusiness guide for feature eligibility.</p>
<h2>How this fits into local SEO</h2>
<p>Schema is one part of a complete setup. The website still needs useful service pages, clear contact paths, accurate business information, internal links and technical access for search engines. If the site is new, begin with our <Link href="/blog/local-seo-checklist-new-business-uae">first-30-days local SEO checklist</Link>. For the business listing itself, read the <Link href="/blog/google-business-profile-service-area-uae">Google Business Profile guide for service-area companies</Link>, and use the <Link href="/blog/service-area-pages-dubai-seo">service pages versus area pages guide</Link> before building lots of near-duplicate URLs.</p>
<h2>Frequently asked questions</h2>
{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
<div className="blog-cta"><h2>Need a technical SEO check?</h2><p>We can review your website structure, business details and enquiry journey, then identify practical implementation checks.</p><a className="btn" href={wa("Hi, I'd like a technical SEO and structured data review for my UAE service business website.")}>Request a website review</a></div>
<p className="muted">This guide is informational, not a guarantee of eligibility or search appearance. Check current Schema.org and Google documentation before deploying markup for a real business.</p>
</div></section></article></>;
}
