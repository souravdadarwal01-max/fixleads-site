import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Your Website Is Live. What Should a UAE Business Do in the First 30 Days?";
const description = "A practical 30-day website launch checklist for Dubai and UAE small businesses: test enquiries, check mobile usability, set up Search Console, review indexing, measure leads and improve pages.";
const image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85";
const url = SITE.url + "/blog/website-launch-checklist-uae";
const faqs = [
  ["How long does Google take to index a new website?", "There is no fixed timeline. Discovery and indexing can take days or longer, and submitting a sitemap or requesting indexing does not guarantee inclusion. Check important URLs in Google Search Console and make sure they are accessible and useful."],
  ["Should I submit my sitemap after launching a website?", "Yes, if your site has a sitemap, verify the correct domain property in Google Search Console and submit the sitemap. Include canonical, indexable URLs that you want search engines to discover."],
  ["What should I test first after a website launch?", "Test the complete enquiry journey on a phone and desktop: forms, email notifications, phone links, WhatsApp links, thank-you messages and the person responsible for replying."],
  ["How often should I update my website after launch?", "Review it regularly rather than changing content just to appear active. Update service details, prices, coverage, opening hours and helpful resources when something materially changes."],
  ["Does a new website automatically rank on Google?", "No. A live website is only the starting point. Search engines must discover, crawl and decide whether to index pages, and rankings depend on relevance, quality, competition and many other factors."]
];

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [image],
    datePublished: "2026-11-11",
    dateModified: "2026-11-11",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  }
];

const seoTitle = "Website Launch Checklist UAE: First 30 Days";

export const metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: "/blog/website-launch-checklist-uae" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/website-launch-checklist-uae",
    images: [{ url: image, alt: "Website performance and analytics dashboard on a laptop" }]
  },
  twitter: { card: "summary_large_image", title: seoTitle, description, images: [image] }
};

export default function Article() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <article>
      <section className="hero">
        <div className="wrap narrow">
          <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · WEBSITE LAUNCH</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="blog-meta">Published November 11, 2026 · 10 min read</p>
          <img src={image} alt="Website analytics dashboard showing activity after a business website launch" className="blog-hero-image" width="1400" height="900" fetchPriority="high" />
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>Your new website is online. The domain loads, the design looks right and the launch message has gone out. It is tempting to consider the project finished—but the first month is when you find out whether the site works for real customers and whether your measurement tools are collecting useful information.</p>
          <p>For a Dubai AC maintenance company, a Sharjah cleaning service or an Abu Dhabi contractor, the most important question is simple: can a potential customer understand the service, trust the business and make an enquiry without friction? This 30-day checklist focuses on that journey first, then covers search visibility and ongoing improvements.</p>

          <h2>Days 1–3: Test the complete customer journey</h2>
          <p>Do not test only whether the homepage opens. Act like a customer who has never heard of the business. Start on a phone, because small-screen navigation, tap targets and forms often reveal issues that are easy to miss on a laptop.</p>
          <ol>
            <li><strong>Test every contact route.</strong> Submit each enquiry form using a test entry, tap every phone link and open each WhatsApp button. Confirm that the destination number and pre-filled message are correct.</li>
            <li><strong>Check the notification.</strong> Confirm that the form submission is saved and that the correct person receives the email or CRM notification. Check spam folders and test the reply process.</li>
            <li><strong>Review the confirmation.</strong> After submitting, does the customer see a clear success message and know what happens next? Never show a success state if the submission actually failed.</li>
            <li><strong>Check key pages.</strong> Open the home, service, about, contact, pricing and FAQ pages. Look for missing images, overlapping text, broken buttons and incorrect details.</li>
            <li><strong>Ask someone unfamiliar with the business to try it.</strong> Give them one task—such as requesting an AC maintenance quote—and observe where they hesitate.</li>
          </ol>
          <p>If forms are a key lead source, use our separate guide to <Link href="/blog/website-form-emails-spam-uae">troubleshooting website form emails and spam delivery</Link>. If the site relies on WhatsApp, also review <Link href="/blog/whatsapp-quote-button-website">how to set up a useful WhatsApp quote button</Link>.</p>

          <h2>Days 4–7: Check mobile experience and page clarity</h2>
          <p>Look at the first screen of each important service page. A visitor should quickly understand what the business does, which customers it helps and which areas it genuinely covers. Replace vague headings such as “Welcome to our website” with specific descriptions of the service and audience.</p>
          <ul>
            <li>Make the main action easy to find without forcing visitors to search through the footer.</li>
            <li>Use readable text, sufficient contrast and buttons that are comfortable to tap.</li>
            <li>Compress oversized images and remove scripts or animations that do not help the customer.</li>
            <li>Explain what is included in a service and what information is needed for a quote.</li>
            <li>Check that address, service area, phone number and opening hours are accurate everywhere.</li>
          </ul>
          <p>Measure real page performance rather than relying on how fast the site feels on the office Wi-Fi. Google's <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">Core Web Vitals guidance</a> explains loading, responsiveness and visual stability. Our <Link href="/blog/mobile-website-speed-uae">mobile website speed checklist for UAE businesses</Link> covers practical checks and fixes.</p>

          <h2>Days 8–10: Set up search visibility basics</h2>
          <p>Verify the correct website property in Google Search Console. For a domain property, make sure the DNS verification is complete and that you can access the reports. Submit the XML sitemap if one is available and contains the canonical pages you want search engines to discover.</p>
          <p>Inspect a small set of important URLs: the homepage, main service pages and the contact page. Check whether Google can access them, whether the page returns a successful response, whether indexing is allowed and which canonical URL is declared. Google may select a different canonical URL, so compare the declared and selected versions in URL Inspection.</p>
          <p>Do not assume that a sitemap submission means every page will be indexed. Google describes sitemaps as a discovery aid, not a guarantee. See the official <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" target="_blank" rel="noopener noreferrer">sitemap overview</a> and <a href="https://developers.google.com/search/docs/essentials/technical" target="_blank" rel="noopener noreferrer">technical requirements for Google Search</a>.</p>
          <p>Also check the basics: one clear page title per important page, useful meta descriptions, descriptive headings, crawlable internal links and no accidental noindex tags on pages intended for search. Read our <Link href="/blog/google-indexing-service-pages-uae">guide to diagnosing indexing issues on UAE service pages</Link> if a priority URL is missing.</p>

          <h2>Days 11–15: Measure enquiries, not just visits</h2>
          <p>Connect or verify Google Analytics 4 and decide which actions matter to the business. For a local service company, useful events may include completed quote forms, click-to-call actions and WhatsApp clicks. Keep event names consistent and test them in DebugView or the relevant real-time reporting tools before relying on the data.</p>
          <p>Separate an action from an outcome. A WhatsApp click is not necessarily a conversation, a form submission is not necessarily a qualified lead, and a lead is not automatically a booked job. Where possible, record lead quality and final outcomes in a simple CRM or spreadsheet so marketing decisions are based on more than button clicks.</p>
          <p>Use our guide to <Link href="/blog/track-whatsapp-clicks-ga4">tracking calls and WhatsApp clicks with GA4</Link> to plan the measurement setup. Keep privacy notices and consent choices appropriate for the analytics and marketing tools you use.</p>

          <h2>Days 16–20: Strengthen local business information</h2>
          <p>If the business is eligible for a Google Business Profile, check that the name, category, phone, website, hours and service areas accurately represent the real operation. A company that visits customers should configure its address and service area according to Google's rules; do not create a fictional office or list places the team does not serve.</p>
          <p>Make sure the website and profile tell the same story. The services listed online should match what the team actually provides. If the business has genuine premises, use accurate location information and real photos. If it is a service-area business, explain the coverage clearly without pretending to have branches in every neighbourhood.</p>
          <p>For a deeper setup, see our <Link href="/blog/google-business-profile-service-area-uae">Google Business Profile checklist for UAE service-area businesses</Link> and our <Link href="/blog/local-seo-uae-service-businesses">complete local SEO guide for UAE service businesses</Link>.</p>

          <h2>Days 21–25: Improve the pages customers actually use</h2>
          <p>Review the first real enquiries and the questions customers ask. If several people ask whether a service includes materials, emergency visits, maintenance contracts or a particular area, make the relevant page answer that question. Useful updates remove uncertainty; they are not simply extra paragraphs added to reach a word count.</p>
          <p>Prioritise pages using three signals:</p>
          <ul>
            <li><strong>Business value:</strong> Does this page describe a service the company wants to sell?</li>
            <li><strong>Customer friction:</strong> Are visitors confused about pricing, availability, coverage or what happens after they enquire?</li>
            <li><strong>Search evidence:</strong> Are relevant queries, impressions or clicks appearing in Search Console for this page?</li>
          </ul>
          <p>Do not create a new page for every keyword variation or neighbourhood. Improve the most relevant existing page first. If you genuinely serve different areas with distinct operations or useful local information, review our guide to <Link href="/blog/service-area-pages-dubai-seo">service pages and area pages for Dubai local SEO</Link>.</p>

          <h2>Days 26–30: Create a simple monthly review routine</h2>
          <p>At the end of the first month, save a baseline. Record organic clicks and impressions, important search queries, top landing pages, form submissions, calls, WhatsApp enquiries and qualified leads. Compare future periods with similar date ranges and account for seasonality or changes in advertising.</p>
          <p>Keep a short issue log with the problem, page, priority, owner and resolution date. Fix broken links and form failures promptly. Schedule a monthly check of backups, software updates, contact details, service information and analytics. If you change URLs during a redesign or restructure, map old URLs to relevant new destinations and implement appropriate permanent redirects instead of sending every old page to the homepage.</p>
          <p>Google's documentation explains that crawling and indexing take time and that sitemap submission does not guarantee indexing. Avoid repeatedly requesting indexing for unchanged URLs. Focus on making pages accessible, useful and internally linked, then monitor the reports for meaningful issues. See Google's <a href="https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors" target="_blank" rel="noopener noreferrer">crawling troubleshooting guide</a>.</p>

          <h2>A simple 30-day website launch scorecard</h2>
          <ul>
            <li><strong>Customer journey:</strong> Forms, email notifications, phone links and WhatsApp links tested successfully.</li>
            <li><strong>Mobile experience:</strong> Main pages readable, fast enough to use and easy to navigate.</li>
            <li><strong>Search setup:</strong> Search Console verified, sitemap submitted and priority URLs inspected.</li>
            <li><strong>Measurement:</strong> Important enquiry actions tested in analytics and lead outcomes recorded.</li>
            <li><strong>Local accuracy:</strong> Business details, service descriptions and coverage consistent.</li>
            <li><strong>Improvement plan:</strong> A prioritised list of fixes based on customer feedback and actual data.</li>
          </ul>
          <p>A website launch is not a ranking event or a one-time marketing task. It is the start of a feedback loop: publish a useful experience, make sure customers can contact you, measure what happens and improve the parts that matter. That approach gives a UAE service business a much stronger foundation than simply waiting for Google rankings to appear.</p>

          <h2>Frequently asked questions</h2>
          {faqs.map(([q, a]) => <div key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="blog-cta">
            <h2>Want a practical review of your website?</h2>
            <p>FixLeads Studio helps UAE service businesses improve mobile websites, local visibility and enquiry journeys. Ask us to review the pages and contact routes that matter to your customers.</p>
            <a className="btn" href={wa("Hi, I'd like a website launch and enquiry journey review for my UAE business.")} target="_blank" rel="noopener noreferrer">Request a free website review</a>
          </div>
        </div>
      </section>
    </article>
  </>;
}
