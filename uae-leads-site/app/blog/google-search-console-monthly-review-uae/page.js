import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Google Search Console for UAE Service Businesses: A Monthly SEO Review Checklist";
const description = "A practical monthly Google Search Console workflow for Dubai and UAE service businesses: review queries, pages, devices, CTR and SEO priorities.";
const image = SITE.url + "/google-search-console-monthly-review-uae.svg";
const url = SITE.url + "/blog/google-search-console-monthly-review-uae";
const published = "2026-11-22";
const faqs = [
  ["Does Google Search Console show how many leads my website received?", "No. Search Console reports how your website performs in Google Search, including clicks and impressions. It does not confirm that someone called, sent a WhatsApp message, submitted a successful enquiry or booked a job. Use website analytics and your own lead records for those steps."],
  ["Can I see searches from Dubai only in Search Console?", "The Performance report includes a country dimension, not a city or emirate filter. You can review country-level search performance, but do not describe it as Dubai-only data. Use your enquiry records to understand which service areas produce real leads."],
  ["How often should a small business review Search Console?", "A monthly review is a useful routine for identifying trends and choosing a small number of improvements. Check more often after a major site change or a sudden traffic issue, but avoid reacting to every daily fluctuation."],
  ["Why are some search queries missing from the report?", "Google omits some rare or sensitive queries to protect searcher privacy, and the table may not show every row. The chart can therefore contain more impressions or clicks than the visible query rows add up to."],
  ["Is average position the exact rank my business has in Dubai?", "No. Average position is an aggregate metric based on the topmost result from your site. Search results can vary by location, device, time and search context, so use it as a trend indicator rather than a fixed local rank."]
];
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [image],
    datePublished: published,
    dateModified: published,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: SITE.url + "/blog" },
      { "@type": "ListItem", position: 3, name: title, item: url }
    ]
  }
];

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog/google-search-console-monthly-review-uae" },
  openGraph: {
    title,
    description,
    type: "article",
    url: "/blog/google-search-console-monthly-review-uae",
    images: [{ url: image, width: 1200, height: 630, alt: "Google Search Console performance review checklist for a UAE service-business website" }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image]
  }
};

export default function Article() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <article>
      <section className="hero">
        <div className="wrap narrow">
          <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · ANALYTICS &amp; SEO</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="blog-meta">Published November 22, 2026 · 12 min read</p>
          <img src={image} alt="Google Search Console performance review checklist for a UAE service-business website" className="blog-hero-image" width="1200" height="630" fetchPriority="high" />
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>If you run an AC maintenance, plumbing, cleaning, pest-control or another local service business in Dubai or elsewhere in the UAE, your website can appear in Google Search without making it obvious which pages are attracting attention. Google Search Console helps you see what people searched, which pages appeared and whether search visibility is changing. The value comes from turning those observations into a small, sensible improvement plan.</p>
          <p>This guide is about a <strong>monthly performance review</strong>, not a technical indexing audit. It shows how to use the Search results Performance report to find useful query and page patterns, compare periods fairly and decide what to investigate next. It also explains what Search Console cannot tell you, so you do not mistake search clicks for confirmed customer enquiries.</p>

          <h2>1. Make sure you are reviewing the right website property</h2>
          <p>Open Google Search Console and select the property that represents the website you want to measure. A Domain property can include the domain's subdomains and protocols, such as HTTP, HTTPS, www and non-www versions. Google requires DNS verification for a Domain property. A URL-prefix property covers only URLs that begin with the exact prefix you enter, including its protocol.</p>
          <p>For a business website that has moved to HTTPS or uses both www and non-www addresses, confirm that you are looking at the intended property and preferred domain. If you are setting it up for the first time, Google's <a href="https://support.google.com/webmasters/answer/34592?hl=en" target="_blank" rel="noopener noreferrer">Add a website property guide</a> explains the difference and the verification requirements.</p>
          <p>Do not create a second property simply because the report looks quiet. First check whether the existing property is the correct one and whether you have access to it.</p>

          <h2>2. Open the Search results Performance report</h2>
          <p>Choose <strong>Performance → Search results</strong>. Start with the Web search type unless you have a specific reason to analyse image, video or news search separately. The report includes clicks, impressions, click-through rate (CTR) and average position. You can group the table by queries, pages, countries, devices, search appearance and dates.</p>
          <p>Google's <a href="https://support.google.com/webmasters/answer/7576553?hl=en" target="_blank" rel="noopener noreferrer">Performance report documentation</a> describes these metrics and dimensions. The default report commonly opens with a recent three-month view, but you can change the date range and the level of detail.</p>
          <ul>
            <li><strong>Clicks:</strong> how many times someone clicked your result in Google Search.</li>
            <li><strong>Impressions:</strong> how many times a result from your site appeared in Search.</li>
            <li><strong>CTR:</strong> clicks divided by impressions for the selected report grouping.</li>
            <li><strong>Average position:</strong> the average position of the topmost result from your site, not a guaranteed rank seen by every customer.</li>
          </ul>
          <p>Keep these definitions beside your report. They describe search visibility and visits from Google Search; they are not sales, calls or completed quote requests.</p>

          <h2>3. Compare like with like</h2>
          <p>For a routine review, compare the latest complete 28-day period with the previous 28 days. You can also compare complete calendar months when that makes the report easier to share with your team. Keep the two periods the same length and use the same search type and filters.</p>
          <p>Look at the direction of clicks and impressions together. If impressions rise while clicks stay flat, more searches may be showing your pages without a matching increase in visits. If clicks fall as impressions fall, investigate whether fewer searches are showing your pages, whether particular URLs changed, or whether the period includes a seasonal or campaign difference.</p>
          <p>Search Console can show recent preliminary data, and its daily reporting uses Pacific Time outside the 24-hour view. Google says data is normally available within two to three days, although the newest values can still change. For a fair monthly comparison, use complete periods and avoid making decisions from an unfinished day. See Google's <a href="https://support.google.com/webmasters/answer/96568?hl=en" target="_blank" rel="noopener noreferrer">Search Console data notes</a>.</p>
          <p>Use the report's comparison controls when you need to see the difference between two periods. Google's <a href="https://support.google.com/webmasters/answer/17011165?hl=en" target="_blank" rel="noopener noreferrer">filtering and comparison guide</a> explains how to compare dates, countries, devices and other dimensions.</p>

          <h2>4. Review queries to understand what searchers are looking for</h2>
          <p>Select the <strong>Queries</strong> tab and sort by impressions to see searches that frequently show your website. For a Dubai air-conditioning company, the visible terms might include service phrases, maintenance terms or the business name. Treat the actual queries in your own report as evidence; do not assume a phrase is important simply because it sounds like a good keyword.</p>
          <p>Group the terms by intent rather than trying to create a separate page for every wording variation:</p>
          <ul>
            <li><strong>Service intent:</strong> searches about a service the company genuinely provides, such as AC repair or plumbing maintenance.</li>
            <li><strong>Location intent:</strong> searches that mention Dubai, an emirate or an area the business actually serves.</li>
            <li><strong>Research intent:</strong> searches asking about costs, process, timing or what a service includes.</li>
            <li><strong>Brand intent:</strong> searches containing the business name, domain or a recognisable brand variation.</li>
          </ul>
          <p>If the branded/non-branded query filter is available in your property, use it to separate people already looking for your business from broader discovery searches. Google notes that this filter is not available for every property, including some low-impression sites and sub-properties. Its <a href="https://support.google.com/webmasters/answer/17010961?hl=en" target="_blank" rel="noopener noreferrer">common Performance report tasks</a> guide explains how to use it.</p>
          <p>Do not expect the query table to show every search. Google omits some rare or sensitive queries to protect privacy, and the table can be limited to the top rows. The visible query totals may therefore be lower than the chart totals. Missing query rows do not automatically mean tracking is broken.</p>

          <h2>5. Review pages, not just keywords</h2>
          <p>Open the <strong>Pages</strong> tab and sort by clicks or impressions. This helps you identify which actual URLs are appearing in Google Search. Review important commercial pages separately from blog articles: a service page that brings relevant enquiries has a different job from an educational article that introduces the business to a new audience.</p>
          <p>Look for four useful patterns:</p>
          <ol>
            <li><strong>High impressions with relatively few clicks:</strong> inspect the queries that trigger the page, then check whether the title and description accurately communicate the page's offer and whether the page matches the searcher's intent.</li>
            <li><strong>Clicks or impressions falling compared with the previous period:</strong> identify the affected URL and queries before changing anything. Check whether the page was edited, redirected, removed from navigation or affected by a wider seasonal change.</li>
            <li><strong>A page appearing for unexpected searches:</strong> review the page's headings, content and internal links. It may need clearer service descriptions, or it may be attracting queries that do not match what the business offers.</li>
            <li><strong>Several pages appearing for similar queries:</strong> inspect the URLs and their purposes. Decide whether each page serves a genuinely different customer need before combining or rewriting content.</li>
          </ol>
          <p>A low CTR is a clue, not a diagnosis. Search position, query wording, search features, brand familiarity and the type of service all affect how often people click. Google suggests reviewing the page title, description and alignment with the queries shown, but avoid applying a universal CTR target to every page.</p>

          <h2>6. Check country and device patterns carefully</h2>
          <p>Use the <strong>Countries</strong> tab to understand which countries contribute to search visibility, and the <strong>Devices</strong> tab to compare mobile, desktop and tablet performance. For a UAE-focused company, country-level data can help you see whether the site is appearing in the markets you intend to serve.</p>
          <p>There is an important limitation: the Search Console Performance report's country dimension is not a city or emirate report. It cannot tell you that a particular number of impressions came from Dubai Marina, Deira, Abu Dhabi or Sharjah. Do not turn country-level figures into claims about neighbourhood visibility.</p>
          <p>For location-specific business decisions, compare the search data with the service areas recorded in your actual enquiries. If you collect customer location information, explain why it is needed and handle it according to your privacy obligations. Search Console is one part of the picture, not a replacement for your lead records.</p>
          <p>Device comparisons are useful for deciding what to test on mobile. If a key service page has meaningful mobile impressions but a weaker click pattern than desktop, inspect its mobile search snippet and the page itself. Search Console does not measure how easy the phone or WhatsApp button is to use after the visitor arrives; use your analytics and real-device testing for that. Our <Link href="/blog/mobile-website-speed-uae">mobile website speed checklist</Link> covers practical mobile performance checks.</p>

          <h2>7. Turn observations into a short action list</h2>
          <p>A report is useful only when it changes what you do. Avoid rewriting ten pages because one metric moved. Choose a few actions based on the strongest evidence and record what you changed.</p>
          <ul>
            <li><strong>Relevant impressions but weak clicks:</strong> review the page title and description, then confirm that the page answers the queries it appears for.</li>
            <li><strong>Important service page losing visibility:</strong> inspect its URL, indexing status, internal links and recent edits before rewriting the content.</li>
            <li><strong>Unexpected queries:</strong> clarify the service scope and page headings so visitors can quickly understand what is and is not offered.</li>
            <li><strong>Mobile and desktop patterns differ:</strong> test the page on a phone, including layout, loading, contact links and form completion.</li>
            <li><strong>Branded searches dominate:</strong> continue serving existing customers well, while building useful pages that explain the services and questions new customers search for.</li>
          </ul>
          <p>Change one meaningful group of elements at a time where practical. Note the date, URL and reason for the change. Compare a suitable period afterwards, while remembering that competitors, demand, search presentation and other external factors can also affect performance. A before-and-after chart does not prove that one edit caused every change.</p>

          <h2>8. Keep Search Console separate from lead tracking</h2>
          <p>Search Console stops measuring at the Google Search result click. It does not know whether the visitor tapped a phone number, opened WhatsApp, completed a form, received a reply or booked a job. Use GA4 or another suitable analytics setup for website interactions, and use the business's enquiry system to record qualified leads and outcomes.</p>
          <p>Do not expect Search Console clicks to equal GA4 sessions or the number of enquiries. The tools use different definitions, processing and time zones. For a practical measurement setup, read our guide to <Link href="/blog/track-whatsapp-clicks-ga4">tracking calls and WhatsApp clicks with GA4 and Search Console</Link>. If pages are not appearing at all, use the separate <Link href="/blog/google-indexing-service-pages-uae">service-page indexing troubleshooting guide</Link> rather than treating every performance issue as an indexing problem.</p>

          <h2>A repeatable 30-minute monthly checklist</h2>
          <ol>
            <li>Select the correct website property and the Web search type.</li>
            <li>Compare the latest complete 28 days with the previous 28 days.</li>
            <li>Record clicks, impressions, CTR and average position without treating position as a fixed rank.</li>
            <li>Review queries by impressions and separate branded from non-branded searches if the filter is available.</li>
            <li>Review the Pages tab for important service pages and articles.</li>
            <li>Check country and device patterns without assuming country data identifies a city.</li>
            <li>Choose no more than a few evidence-based improvements and record the date of each change.</li>
            <li>Compare the results in a later complete period and check actual enquiries separately.</li>
          </ol>
          <p>Keep a simple monthly note with the period reviewed, the pages investigated, the changes made and the next review date. This creates a useful record without turning SEO reporting into a daily exercise.</p>

          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}

          <div className="blog-cta">
            <h2>Want a clearer view of your website's search performance?</h2>
            <p>FixLeads Studio can review your key service pages, search visibility and enquiry journey, then share practical next steps. There is no need to guess from one ranking screenshot.</p>
            <a className="btn" href={wa("Hi, I'd like a free review of my UAE business website and Google Search Console performance.")}>Request a free website review</a>
          </div>
        </div>
      </section>
    </article>
  </>;
}
