import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Google Business Profile Booking Links for UAE Service Businesses: Setup & Checks";
const description = "Learn when UAE service businesses can add a Google Business Profile booking link, how to choose the right page, meet Google’s link rules and test the booking journey.";
const seoTitle = "Google Business Profile Booking Links UAE: Setup Guide";
const image = "/google-business-profile-booking-links-uae.svg";
const url = SITE.url + "/blog/google-business-profile-booking-links-uae";

const faqs = [
  ["Can every UAE service business add a booking link to Google Business Profile?", "No. Google says business-link eligibility depends on the business type, and some countries or regions are not eligible for certain link types. Check whether Booking is available in the profile you manage before planning around it."],
  ["Do I need Reserve with Google to add a booking link?", "Not necessarily. Google says a business can add its own link to the Business Profile. Reserve with Google is a separate provider integration, and the providers available depend on the country. Check the current options in your profile."],
  ["Can I use my WhatsApp link as the booking link?", "No. Google's business-link policy excludes messaging links from local business action links. Keep WhatsApp as a separate contact option on your website, but use a dedicated page where the customer can complete the booking for the Booking link."],
  ["Can I use my homepage or contact page?", "Use a dedicated booking page that lets the customer complete the booking action. A general homepage or a contact form that only asks the team to call back does not clearly complete an appointment booking."],
  ["Does Google show performance data for a custom booking link?", "Google says performance data is not available for custom links. If the link sends customers to a website you control, use consistent UTM parameters and GA4 events to measure visits and completed bookings. A third-party booking platform may have its own reporting."],
  ["Why is my booking link missing or rejected?", "Check that the profile is verified, the booking option is available for the category and region, the URL is valid, the destination is a dedicated page, the action can be completed there and Google’s crawlers can reach the page without a login, CAPTCHA or other restriction."]
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished: "2026-11-15",
    dateModified: "2026-11-15",
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
  title: seoTitle,
  description,
  alternates: { canonical: "/blog/google-business-profile-booking-links-uae" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/google-business-profile-booking-links-uae",
    images: [{ url: image, alt: "Illustration of a service-business booking page and appointment calendar" }]
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
      <section className="hero"><div className="wrap narrow">
        <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · GOOGLE BUSINESS PROFILE · UAE GUIDE</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <p className="blog-meta">Published November 15, 2026 · 13 min read</p>
        <img src={image} alt="Illustration of an online booking page with an appointment calendar and confirmed time slot" className="blog-hero-image" width="1200" height="630" fetchPriority="high" />
      </div></section>

      <section className="sec"><div className="wrap narrow blog-article">
        <p>For some Dubai and UAE service businesses, the next useful step after a customer finds the Google Business Profile is to let them choose an appointment without making another call. A working booking link can shorten that journey. But the link needs to match the action: a customer should be able to complete the appointment on the page it opens.</p>

        <p>That distinction matters for home-service companies. A customer who needs an AC inspection, plumbing diagnosis or cleaning estimate may need to explain the job before a team can confirm the right visit. A simple “we will call you back” form is an enquiry route, not necessarily a completed booking. Do not label a quote request as a booking just to make a profile button appear.</p>

        <p>This guide explains when a booking link makes sense, how to add one, what Google's current business-link rules require and how to check whether the journey works on a phone.</p>

        <h2>1. Decide whether customers are booking an appointment or requesting a quote</h2>
        <p>Start with the way the business actually accepts work. The right link depends on the customer's next step, not on which button looks most prominent.</p>
        <div className="industry-grid">
          <article><span>01</span><h3>Appointment-led service</h3><p>A customer can select a service, choose an available date or time, provide the necessary details and receive a booking confirmation. A dedicated booking page may be appropriate if the profile offers the Booking option.</p></article>
          <article><span>02</span><h3>Quote-led service</h3><p>The team needs photos, a site inspection, fault details or a conversation before it can confirm scope and price. A quote-request page, phone call or website contact route may be more honest than a booking link.</p></article>
          <article><span>03</span><h3>Scheduled assessment</h3><p>If customers can genuinely reserve an inspection or consultation slot, explain what that appointment includes and what still needs to be confirmed afterwards. Make the difference between an assessment and a confirmed job clear.</p></article>
        </div>
        <p>For example, a salon or consultation business may offer fixed appointment slots. An AC company might allow customers to reserve an inspection window but confirm the repair and price only after diagnosis. A plumbing company that cannot promise a slot until it understands the fault should keep the first step as an enquiry.</p>
        <p>If your business mainly receives quote requests, see our guide to <Link href="/blog/website-quote-form-conversion-uae">building quote forms that are easier for UAE customers to complete</Link>.</p>

        <h2>2. Understand the two main ways a booking link can appear</h2>
        <h3>A custom link that you add yourself</h3>
        <p>Google allows eligible businesses to add their own local business links from the Business Profile. The link can take a customer to a booking page on your website or to a booking service you use, provided the destination and action meet Google's policies. This is separate from a Reserve with Google integration.</p>
        <p>One important measurement detail: Google says performance data is not available for custom links. If you add your own booking URL, do not expect a booking count for that custom link inside the Business Profile Performance report. Measure the website journey or use the booking platform's own reports instead.</p>

        <h3>A booking provider connected through Reserve with Google</h3>
        <p>Google also supports booking-provider integrations in eligible markets. In the Business Profile, the provider setup flow is managed through the Bookings section. Google says providers available in a country can be found through Reserve with Google, that a provider may charge for its service, and that a connected provider can take up to a week to appear on the profile.</p>
        <p>Do not assume a particular provider or integration is available to every UAE business. Check the options shown for the actual profile and country, then confirm the provider's fees, availability, cancellation process and data access before connecting it.</p>

        <h3>Third-party links you did not add</h3>
        <p>Some appointment or reservation links can appear through third-party providers or automated data. Review every link that customers can see. If an unwanted third-party booking link appears, Google's help guidance says to contact the provider through its opt-out route; providers are required to process an opt-out request within five working days.</p>

        <h2>3. Check eligibility before building around the feature</h2>
        <p>Google states that not every business is eligible for every type of business link and that some countries or regions are not eligible for certain link types. The availability can therefore differ by category and market. A missing Booking option does not automatically mean your website is broken.</p>
        <ul>
          <li>Make sure you are signed in to the Google Account that manages the correct Business Profile.</li>
          <li>Confirm the profile is verified. Google says verification is required before a business can add a link.</li>
          <li>Look for the Booking transaction type in the profile. If it is not offered, check Google's current eligibility guidance rather than trying unrelated menu paths.</li>
          <li>Check whether a booking provider has already added a link for the same business or domain.</li>
        </ul>
        <p>Google's interface can change, so use the current options visible in your account and the official <a href="https://support.google.com/business/answer/6218037?hl=en" target="_blank" rel="noopener noreferrer">Google guide to managing local business links</a>.</p>

        <h2>4. Build a dedicated booking page that completes the action</h2>
        <p>Before adding the URL, open the booking page on a mobile phone and follow the journey as a first-time customer. Google requires local business links to lead to a dedicated landing page for the business and to let customers complete the designated action. For a multi-location business, the action link should lead to the relevant location's page.</p>

        <h3>Include the details a customer needs to choose a slot</h3>
        <ul>
          <li><strong>Business and service:</strong> identify the business and the appointment type clearly. Avoid a generic page that makes the customer guess where to go.</li>
          <li><strong>Available dates and times:</strong> show real availability and keep the calendar aligned with the team's working schedule.</li>
          <li><strong>Location or coverage:</strong> state where the appointment takes place, whether the customer visits a premises or the team travels to them, and any genuine service-area limits.</li>
          <li><strong>Duration and preparation:</strong> explain how long the appointment normally takes and what the customer should prepare, where relevant.</li>
          <li><strong>Price and payment:</strong> explain any published fee, deposit, payment step or cancellation condition before the customer confirms. Do not hide important charges behind the final button.</li>
          <li><strong>Confirmation:</strong> show a clear confirmation after a successful booking and explain what happens next. A submitted form without a confirmed slot should not be presented as a confirmed appointment.</li>
          <li><strong>Contact alternative:</strong> provide a working phone or support route for customers who cannot find a suitable slot.</li>
        </ul>

        <h3>Keep the booking page simple on mobile</h3>
        <p>Most local customers will open a profile while using a phone. Make the service name, date picker, time slots and confirmation button easy to read and tap. Avoid forcing a customer to create an unnecessary account, repeat the same details or navigate through unrelated pages. If a third-party scheduler is embedded, test that it loads properly on mobile data as well as Wi-Fi.</p>
        <p>Collect only the information needed to arrange the appointment. If the page asks for a phone number, property details or other personal information, explain how the business handles enquiry and booking data in its <Link href="/blog/uae-website-privacy-notice-checklist">UAE website privacy notice</Link>.</p>

        <h2>5. Add the booking link to your Google Business Profile</h2>
        <p>Google's current help instructions describe adding local business links from Google Search or Google Maps. Menu labels can vary as Google updates the interface, so follow the Booking or transaction-type option shown in the profile you manage.</p>
        <ol>
          <li>Sign in to the Google Account that manages the verified Business Profile.</li>
          <li>Open the profile from Google Search or Google Maps.</li>
          <li>In Google Search, select <strong>Booking</strong>. In Google Maps, select <strong>Edit profile</strong> and then the relevant transaction type.</li>
          <li>Select <strong>Add link</strong>. If a link already exists, choose <strong>Add another link</strong> if that option is available.</li>
          <li>Paste the full URL of the dedicated booking page and save the change.</li>
          <li>If multiple links are listed, use <strong>Set preferred link</strong> to choose the option you want customers to see first.</li>
        </ol>
        <p>Google notes that local business links are not available through the Business Profile API or spreadsheet upload. Manage the link through the profile controls rather than expecting a bulk upload or API change to add it.</p>

        <h2>6. Make sure the URL follows Google's business-link policies</h2>
        <p>A URL can open correctly for you and still fail Google's link checks. Review these points before and after saving it.</p>
        <ul>
          <li><strong>Use a dedicated page:</strong> link directly to the booking action for the business, not a generic homepage or an unrelated location page.</li>
          <li><strong>Complete the intended action:</strong> a Booking link should let the customer book. A social profile, messaging link or simple link directory is not a substitute.</li>
          <li><strong>Do not use prohibited destinations:</strong> Google's policy excludes social media sites, messaging links, app-store links and link shorteners from local business action links. A WhatsApp URL should remain a separate contact option, not the Booking URL.</li>
          <li><strong>Check the domain:</strong> Google permits only one business link per domain for the relevant business-link setup. A link from a provider may already use the domain you planned to add.</li>
          <li><strong>Keep the URL valid:</strong> remove spaces, backslashes, malformed protocols and unnecessary redirects. Prefer a stable HTTPS address on a domain the business controls.</li>
          <li><strong>Allow automated access:</strong> Google's verification crawlers need to reach and load the page. Do not block them with login requirements, CAPTCHA, IP restrictions, rate limits or geoblocking.</li>
          <li><strong>Keep the page working:</strong> check for 404, 403 and server errors. Google says links that cannot be crawled or do not return a successful page may be removed.</li>
        </ul>
        <p>These are policy requirements, not ranking tricks. A compliant booking link makes the intended customer action clearer; it does not guarantee a higher Google ranking or a particular number of bookings. Read Google's <a href="https://support.google.com/business/answer/13769188?hl=en" target="_blank" rel="noopener noreferrer">Business links policies and guidelines</a> before troubleshooting a rejected URL.</p>

        <h2>7. Measure completed bookings, not just visits</h2>
        <p>Google says performance data is not available for custom booking links. If the link sends people to a booking page on your own website, you can add consistent UTM parameters to identify visits from the profile in Google Analytics. For example:</p>
        <p><code>https://example.com/book/?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=gbp_booking</code></p>
        <p>Replace the example domain with your real booking page. Keep campaign names consistent so reports do not split the same source across several spellings. Google's <a href="https://support.google.com/analytics/answer/10917952?hl=en" target="_blank" rel="noopener noreferrer">Analytics URL builder guidance</a> explains how campaign parameters are collected and reported.</p>
        <p>UTM parameters identify the visit source; they do not prove that an appointment was completed. If the booking system is on your website, record a successful confirmation as a GA4 event or key event. If the customer leaves for an external booking provider, check whether that provider offers booking reports or a suitable analytics integration. Do not count a page view as a completed booking.</p>
        <p>Keep three separate numbers in your monthly review:</p>
        <ul>
          <li><strong>Visits:</strong> sessions or landing-page visits attributed to the profile link.</li>
          <li><strong>Bookings:</strong> appointments actually confirmed in the booking system or calendar.</li>
          <li><strong>Business outcomes:</strong> appointments attended, estimates accepted or jobs completed, according to the service's normal workflow.</li>
        </ul>
        <p>For more context on profile activity, read <Link href="/blog/google-business-profile-performance-uae">how to interpret Google Business Profile Performance data</Link>. If WhatsApp is a separate enquiry route on your website, see <Link href="/blog/track-whatsapp-clicks-ga4">how to track website WhatsApp clicks with GA4</Link>.</p>

        <h2>8. Test the customer journey after saving</h2>
        <p>Do not stop when the URL appears in the management panel. Test the public experience from a device and account that are not managing the profile.</p>
        <div className="industry-checklist"><ul>
          <li>The correct Booking option is visible on the public profile, if the profile is eligible.</li>
          <li>The link opens the right business and the right location.</li>
          <li>The page loads on a mobile phone without an error, login wall or CAPTCHA.</li>
          <li>The customer can select a real service and an available appointment slot.</li>
          <li>The final confirmation is clear and does not imply a booking before it is accepted.</li>
          <li>Phone and other contact options work if the customer needs help.</li>
          <li>UTM parameters and GA4 events work if you have configured website measurement.</li>
          <li>The team receives the booking and knows who is responsible for confirming or attending it.</li>
        </ul></div>
        <p>Review the link whenever the booking provider, domain, service list, working hours or location changes. A stale calendar can create a poor customer experience even if the profile link itself still opens.</p>

        <h2>Common booking-link mistakes to avoid</h2>
        <ul>
          <li><strong>Using a WhatsApp URL as the booking link:</strong> messaging links are excluded by Google's business-link policy. Use a real booking page for the Booking action.</li>
          <li><strong>Sending customers to the homepage:</strong> customers should not have to search the site for the calendar or appointment form.</li>
          <li><strong>Calling an enquiry a booking:</strong> if the team still needs to call back and approve the time, explain that it is a request rather than a confirmed appointment.</li>
          <li><strong>Ignoring an existing provider link:</strong> check for a third-party link or an already-used domain before adding another URL.</li>
          <li><strong>Blocking Google’s verification crawler:</strong> bot protection, login walls and geoblocking can prevent link verification.</li>
          <li><strong>Measuring clicks as sales:</strong> track confirmed appointments and attended jobs separately from visits.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}

        <div className="blog-cta">
          <h2>Need a clearer route from Google to a confirmed appointment?</h2>
          <p>FixLeads Studio can review the path from your Google Business Profile to your website, booking page and enquiry options, then share practical improvements for your UAE service business. No ranking or booking guarantees—just a practical review of the customer journey.</p>
          <a className="btn" href={wa("Hi FixLeads Studio, I'd like a free review of my Google Business Profile booking link and website enquiry journey.")} target="_blank" rel="noopener noreferrer">Request a free website review</a>
        </div>

        <h2>Official references</h2>
        <ul>
          <li><a href="https://support.google.com/business/answer/6218037?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Help: Manage your local business links</a></li>
          <li><a href="https://support.google.com/business/answer/13769188?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Help: Business links policies and guidelines</a></li>
          <li><a href="https://support.google.com/business/answer/7475773" target="_blank" rel="noopener noreferrer">Google Business Profile Help: Set up bookings through a provider</a></li>
          <li><a href="https://support.google.com/analytics/answer/10917952?hl=en" target="_blank" rel="noopener noreferrer">Google Analytics Help: URL builders and campaign parameters</a></li>
        </ul>
      </div></section>
    </article>
  </>;
}
