import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Google Business Profile Performance: A Practical Guide for UAE Service Businesses";
const description = "Learn how Dubai and UAE service businesses can read Google Business Profile views, searches, calls and website clicks—and turn the numbers into better enquiries.";
const seoTitle = "Google Business Profile Performance: UAE Metrics Guide";
const image = "/google-business-profile-performance-uae.svg";
const url = SITE.url + "/blog/google-business-profile-performance-uae";

const faqs = [
  ["Where can I find Google Business Profile Performance?", "Sign in to the Google Account that manages your verified profile. In Google Search, open the Business Profile and select Performance. In the Google Maps app, tap Business, then See more beside Performance. Choose a date range and apply it."],
  ["Do Google Business Profile views mean website visits?", "No. Views count people who viewed your Business Profile on Google Search or Maps. Website clicks count clicks on the website link in the profile. A click does not prove that the page loaded, that a GA4 session was recorded or that a customer submitted an enquiry."],
  ["Do call clicks mean the business received a phone call?", "Not necessarily. Google defines the Calls metric as the number of times a customer clicked the call button on the Business Profile. It does not confirm that the call connected, was answered or became a booked job."],
  ["Does Business Profile Performance show organic results only?", "No. Google's help documentation says Performance data includes views, searches and actions from both organic search results and Google Ads. Review your Google Ads reports separately when you need to understand paid campaign performance."],
  ["Why are this month's search terms missing?", "Google says the Searches metric is updated at the start of each month and can take up to five days to appear. Wait for the data to refresh before comparing a new month with a completed period."],
  ["Should a service-area business focus on direction requests?", "Usually, calls and website clicks are more useful starting points for a business that travels to customers and does not receive visitors at a public location. Direction requests matter more when customers genuinely visit a staffed premises. Only use the metrics that apply to the real business."],
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished: "2026-11-14",
    dateModified: "2026-11-14",
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
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  }
];

export const metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: "/blog/google-business-profile-performance-uae" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/google-business-profile-performance-uae",
    images: [{ url: image, alt: "A practical dashboard-style illustration of Google Business Profile views, searches, calls and website clicks" }]
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
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
          <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · GOOGLE BUSINESS PROFILE · UAE GUIDE</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="blog-meta">Published November 14, 2026 · 12 min read</p>
          <img src={image} alt="A dashboard illustration showing profile views, searches, calls and website clicks" className="blog-hero-image" width="1200" height="630" fetchPriority="high" />
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>A Google Business Profile can be one of the first places a potential customer encounters a local service company. Someone looking for an AC technician in Dubai, a plumber in Sharjah or a cleaning provider in Abu Dhabi may see the business on Google Search or Maps before opening its website or calling.</p>
          <p>That makes the Performance report useful—but only when its numbers are interpreted correctly. A profile view is not a website visit. A call-button click is not a confirmed conversation. A direction request is not proof that someone arrived. If a business treats every interaction as a sale, its monthly marketing report can look healthier than its actual enquiry pipeline.</p>
          <p>This guide explains what the main Google Business Profile metrics mean, where to find them and how a UAE service business can use them in a simple monthly review. The aim is to connect profile activity with real calls, qualified enquiries and completed work, without claiming that a dashboard can reveal information it does not collect.</p>

          <h2>Where to find the Performance report</h2>
          <p>Google makes profile performance available to owners and managers of verified Business Profiles. Sign in with the Google Account connected to the listing before looking for the report.</p>
          <ol>
            <li><strong>In Google Search:</strong> find or open the Business Profile you manage, select <strong>Performance</strong>, choose the reporting period and apply it.</li>
            <li><strong>In the Google Maps app:</strong> open Maps, tap <strong>Business</strong> at the bottom, then tap <strong>See more</strong> beside Performance. Choose the period and apply it.</li>
            <li><strong>For several locations:</strong> if you manage multiple profiles, Business Profile Manager provides a way to select profiles and download a performance spreadsheet for comparison.</li>
          </ol>
          <p>Google's interface labels can change, and some metrics appear only when they apply to the business. Use the current <a href="https://support.google.com/business/answer/9918094?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Performance and insights guide</a> if the menu looks different in your account.</p>

          <h2>What each Performance metric actually tells you</h2>
          <p>Start by separating visibility from actions. Views and searches help describe how people discover a profile. Calls, website clicks, directions and bookings describe actions people take from it. None of these numbers, on its own, confirms revenue.</p>

          <h3>1. Views: people who viewed the profile</h3>
          <p>Views show how many people viewed the Business Profile on Google Search and Maps. Google explains that this is a unique-visitor measure, not a count of every repeat visit. A person is counted only once per day, and the total may be lower than view figures shown elsewhere in the profile or in notifications.</p>
          <p>Do not compare profile views directly with website sessions. A person can look at the profile, read the hours or reviews and leave without opening the website. Another person can tap the website link and then close the page before analytics records a useful session.</p>

          <h3>2. Searches: terms that surfaced your profile</h3>
          <p>The Searches section lists search terms people used when your profile appeared. It can help you understand whether customers are discovering the business through its name, a service category or a related need.</p>
          <p>Google says you cannot directly manage these search queries. Treat them as evidence about how the profile is being discovered—not as a list of keywords to insert into the business name. If the terms look unrelated, review whether the primary category, additional categories, services and website content accurately describe the business.</p>
          <p>There is also a reporting delay: Google says the Searches metric is updated at the start of each month and may take up to five days to appear. Avoid judging the previous month's search terms on the first morning of a new month.</p>

          <h3>3. Calls: clicks on the call button</h3>
          <p>The Calls metric counts how many times a customer clicked the call button on the profile. A phone number must be added for this metric to be tracked. It does not tell you whether the phone rang successfully, whether a staff member answered, how long the conversation lasted or whether the caller booked a job.</p>
          <p>For an AC maintenance company, for example, a call click might lead to a service booking, a question about coverage, a request for a price estimate or no conversation at all. Keep a separate call log or enquiry record if you need to understand which calls became genuine opportunities.</p>

          <h3>4. Website clicks: visits that start with a profile link</h3>
          <p>Website clicks count clicks on the website link in the Business Profile. They are useful for checking whether profile visitors want more information, but they are not the same as website sessions, form submissions or WhatsApp messages.</p>
          <p>After a click, the page still needs to load and answer the visitor's question. If profile website clicks rise but enquiries do not, inspect the landing page on a mobile phone. Check that the service is clear, the coverage is accurate, the phone and WhatsApp links work and the quote form can be completed without unnecessary steps.</p>
          <p>For a practical way to measure website phone and WhatsApp actions after visitors arrive, see our guide to <Link href="/blog/track-whatsapp-clicks-ga4">tracking calls and WhatsApp clicks with GA4 and Search Console</Link>.</p>

          <h3>5. Directions: requests for a route to your location</h3>
          <p>Directions count how many people requested directions to the business. Google says it adjusts this metric to account for repeated taps, cancelled requests and spam, so the figure is not simply every tap on the directions button.</p>
          <p>This can be useful for a customer-facing shop, clinic or workshop where visitors are genuinely welcome at a staffed location. It may be less useful for an AC, plumbing or cleaning business that travels to the customer's property and does not receive walk-in visitors. Do not treat a low directions number as a problem if directions are not part of the way the business operates.</p>

          <h3>6. Bookings and other actions</h3>
          <p>Google may show bookings when completed bookings are managed through a supported booking provider. Some profiles also show other metrics, such as products, menus or offers, depending on the type of business and the features available. Only metrics that apply to the profile appear.</p>
          <p>Read the definition beside each metric in Google's current help documentation. Do not add together unlike actions and call the result "leads" unless your own records confirm that those actions became enquiries.</p>

          <h2>One important limitation: Performance is not an organic-only report</h2>
          <p>Google states that Business Profile Performance data includes views, searches and actions from both organic search results and Google Ads. This matters if the business runs paid campaigns. A change in profile activity may reflect a campaign, a change in customer demand, an edit to the profile or several things happening together.</p>
          <p>Do not present a rise in Performance as proof that local SEO improved unless you have checked the wider context. Review Google Ads reporting for paid campaign results, keep a note of campaign dates and profile edits, and compare the same reporting periods where possible.</p>
          <p>The report also does not show the local ranking factors as separate scores. Google's local ranking guidance describes relevance, distance and prominence as the main factors. Performance tells you what people did after encountering a profile; it does not reveal a precise ranking formula or provide a button that raises a business in Maps. Read <a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer">Google's guidance on improving local ranking</a> for the official explanation.</p>

          <h2>How to connect profile website clicks with GA4</h2>
          <p>If your business has GA4 installed, add consistent campaign parameters to the website URL in the Business Profile. This can help identify sessions that arrive through the profile's website link in your Analytics reports.</p>
          <p>A simple example is:</p>
          <pre><code>https://www.example.com/?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=google_business_profile</code></pre>
          <p>Replace the example domain with the real website. If the URL already contains a question mark and other parameters, append the UTM parameters with an ampersand instead of adding a second question mark. Keep the same naming convention over time so monthly reports remain comparable.</p>
          <p>Google recommends using <code>utm_source</code>, <code>utm_medium</code> and <code>utm_campaign</code> when building tagged campaign URLs. Its <a href="https://support.google.com/analytics/answer/10917952?hl=en" target="_blank" rel="noopener noreferrer">Analytics URL builder guide</a> explains how to create and read these parameters.</p>
          <p>UTM tagging helps identify visits from the profile's website link. It does not turn a call-button click into a website event, prove a sale or separate every organic profile appearance from activity that may also involve Google Ads. Check that redirects preserve the query string and test the final link before relying on the report.</p>

          <h2>A monthly review routine for a UAE service business</h2>
          <p>A short, repeatable review is more useful than checking the dashboard every day and reacting to small fluctuations. Use the same reporting period each month and keep the notes in one spreadsheet or business reporting document.</p>
          <ol>
            <li><strong>Choose a complete date range.</strong> Use the previous full calendar month, then wait for the Searches data to refresh if it is not yet available.</li>
            <li><strong>Record the main metrics separately.</strong> Note views, searches, calls, website clicks, directions where relevant and bookings if the profile reports them. Do not rely only on the Interactions total.</li>
            <li><strong>Note what changed.</strong> Record profile edits, new service information, opening-hour updates, website changes, advertising activity and any unusual operational interruptions.</li>
            <li><strong>Check the customer journey.</strong> Review answered calls, actual enquiries, form submissions, WhatsApp conversations and booked jobs in the business's own records.</li>
            <li><strong>Compare like with like.</strong> Look at the previous period and, where seasonal demand matters, the same period in the previous year. Avoid drawing a conclusion from one unusually busy or quiet week.</li>
            <li><strong>Choose one practical action.</strong> Fix a broken phone link, clarify service coverage, improve a weak landing page or make enquiry follow-up more consistent. Record what you changed and review the next period.</li>
          </ol>
          <p>For help building a consistent response process after a lead arrives, read <Link href="/blog/website-enquiry-follow-up-uae">how UAE service businesses should follow up on website enquiries</Link>. If the profile's hours need attention before a holiday, use our <Link href="/blog/google-business-profile-holiday-hours-uae">Google Business Profile holiday-hours checklist</Link>.</p>

          <h2>What to investigate when a number changes</h2>
          <p>Use a change in the report as a prompt to investigate—not as an automatic diagnosis. The table below gives practical first checks, not guaranteed explanations.</p>
          <ul>
            <li><strong>Views rise but calls stay flat:</strong> check whether the phone number, hours, service description and contact options are accurate and easy to find.</li>
            <li><strong>Calls fall while views look steady:</strong> test the displayed number, check missed-call records and confirm that the team can answer during the listed hours.</li>
            <li><strong>Website clicks rise but enquiries do not:</strong> test the landing page on mobile, check loading and form errors, and make the next contact step clear.</li>
            <li><strong>Search terms look unrelated:</strong> review the real business category, services and website content. Do not add keywords to the business name.</li>
            <li><strong>Directions fall for a walk-in location:</strong> check the public address, map pin, opening hours and whether the location is still receiving customers.</li>
          </ul>
          <p>For a service-area business that travels to customers, prioritise the actions that match its actual sales process. If the team does not welcome visitors at a public address, directions may not be a meaningful success measure.</p>

          <h2>Keep profile activity separate from business outcomes</h2>
          <p>A useful report has two layers. The first records what Google says happened on the profile. The second records what happened inside the business after a customer made contact.</p>
          <ul>
            <li><strong>Profile activity:</strong> views, searches, calls, website clicks, directions and any other available actions.</li>
            <li><strong>Enquiry activity:</strong> answered calls, completed forms, WhatsApp conversations and genuine requests for the services offered.</li>
            <li><strong>Business outcomes:</strong> qualified opportunities, estimates sent, jobs booked and completed work.</li>
          </ul>
          <p>Keep these stages distinct. A click is not a lead, and a lead is not automatically a sale. When the business records the stages consistently, it becomes easier to see whether the problem is visibility, the website experience, response handling or the fit between the service and the customer.</p>
          <p>For a wider local visibility checklist, see our <Link href="/blog/local-seo-uae-service-businesses">local SEO guide for UAE service businesses</Link> and the <Link href="/blog/google-maps-ranking-factors-dubai">guide to Google Maps ranking factors in Dubai</Link>.</p>

          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}

          <div className="blog-cta">
            <h2>Not sure what your profile numbers are telling you?</h2>
            <p>FixLeads Studio can review the path from your Google Business Profile to your website and enquiry options, then share practical improvements for your UAE service business.</p>
            <a className="btn" href={wa("Hi FixLeads Studio, I'd like a free review of my Google Business Profile and website enquiry journey.")} target="_blank" rel="noopener noreferrer">Request a free website review</a>
          </div>
        </div>
      </section>
    </article>
  </>;
}
