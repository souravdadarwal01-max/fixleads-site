import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Moved Your Business in Dubai? Google Business Profile & Local SEO Checklist";
const description = "A practical UAE checklist for moving premises or changing coverage: update Google Business Profile, verify the new address, correct website details and refresh local listings.";
const image = "/google-business-profile-address-change-uae.svg";
const url = SITE.url + "/blog/google-business-profile-address-change-uae";
const faqs = [
  ["Do I need to verify my Google Business Profile again after moving?", "Google's current edit guidance says that when a verified business moves to a new address, it must be verified again. Follow the verification method shown in your account and keep the profile details accurate while the change is reviewed."],
  ["Should I create a new Google Business Profile when my company moves?", "If it is the same business moving to a new address, do not create a duplicate just to show the new location. Update the existing profile. A genuinely separate, staffed location may qualify for its own profile, but check Google's location guidelines first."],
  ["What if my business no longer receives customers at its address?", "If the business travels to customers and does not serve them at its base, follow Google's service-area business guidance and hide the address from customers. List only the areas the team can genuinely serve."],
  ["Will moving address affect my Google Maps visibility?", "It can change which nearby searches are relevant because distance is one of Google's stated local ranking factors. No update checklist can guarantee a position. Track visibility and actual enquiries after the move rather than relying on one search from one device."],
  ["How long do Google Business Profile edits take to appear?", "Google reviews profile edits before they go live, and timing can vary by change. Its current service-area guidance says approved service-area edits may take up to 48 hours to appear. Check the status in your profile instead of assuming a pending edit has failed."]
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
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

const seoTitle = "Moved Your Business in Dubai? Google Profile Checklist";

export const metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: "/blog/google-business-profile-address-change-uae" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/google-business-profile-address-change-uae",
    images: [{ url: image, alt: "Checklist for updating a business location and Google Business Profile after a move" }]
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
          <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · LOCAL SEO</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="blog-meta">Published November 10, 2026 · 12 min read</p>
          <img src={image} alt="A map pin moving from an old business address to a new location beside a local SEO checklist" className="blog-hero-image" width="1200" height="630" fetchPriority="high" />
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>A business move can create a confusing trail online. A customer may find the old address in Google Maps, see a different location on the website, or call a phone number that no longer reaches the right team. For a Dubai AC company, cleaning service, plumber or other local provider, those mismatches can create missed visits and unnecessary calls before the customer even requests a quote.</p>
          <p>When the same business relocates, treat the move as a coordinated information update—not a reason to start a second online identity. This guide covers the Google Business Profile change, the website updates and the directory checks that help customers find the right location or understand the areas you serve.</p>

          <h2>1. Decide what has actually changed</h2>
          <p>Before editing anything, identify which of these situations describes the business:</p>
          <ul>
            <li><strong>The same storefront has moved:</strong> the company still receives customers, but at a new physical address.</li>
            <li><strong>The business is now service-area only:</strong> the team travels to customers and no longer receives them at the old office or workshop.</li>
            <li><strong>The business is hybrid:</strong> customers can still visit a staffed location, and the team also travels to jobs.</li>
            <li><strong>A genuinely new branch has opened:</strong> the business has another real, staffed location with its own operating details.</li>
          </ul>
          <p>These are not interchangeable. A company that works from an office but never receives customers should not automatically display that office as a public storefront. A business with a real new branch should not treat it as a simple address edit if it is a separate operating location. Google's <a href="https://support.google.com/business/answer/3038177?hl=en-AE" target="_blank" rel="noopener noreferrer">guidelines for representing a business</a> explain the distinctions.</p>

          <h2>2. Prepare the new location details before changing the profile</h2>
          <p>Gather the information the team will use consistently across Google, the website and other listings:</p>
          <ul>
            <li>The exact address, including building name or number, floor and unit where relevant.</li>
            <li>The correct map pin, checked against the actual customer entrance or business location.</li>
            <li>The public-facing phone number and the website URL for the business.</li>
            <li>Opening hours, including any different hours for the new premises.</li>
            <li>The services and areas the team can realistically cover from the new base.</li>
            <li>Clear customer instructions, such as the correct entrance, reception or parking information, if visitors need them.</li>
          </ul>
          <p>For Dubai buildings and business centres, do not assume that a building name alone will guide a visitor to the correct office. Check the map pin and write useful arrival instructions on the website. Only publish an address as a customer-facing location if customers are actually received there and the business meets Google's requirements for showing it.</p>

          <h2>3. Update the existing Google Business Profile carefully</h2>
          <p>If the same business has moved, start with the profile it already manages. Sign in to the Google account that owns the profile, open the business information editor and update the location details that have genuinely changed. Check the address text and map pin rather than relying only on Google's suggested match.</p>
          <p>Google's current <a href="https://support.google.com/business/answer/3039617?hl=en-AE" target="_blank" rel="noopener noreferrer">Business Profile edit guidance</a> states that a verified business moving to a new address must verify the business again. Google also reviews edits before updating them live. Follow the verification steps and status shown in the account; do not assume that saving the address means the new location is already visible to everyone.</p>
          <p>Keep the business name aligned with the name used in the real world. Do not add a neighbourhood, service or keyword to the name simply because the company has moved. Google's <a href="https://support.google.com/business/answer/3038177?hl=en-AE" target="_blank" rel="noopener noreferrer">business representation rules</a> require accurate business information and generally one profile per business location.</p>
          <p>Do not create a second profile solely to represent the same company at its new address. Duplicate entries can confuse customers and create uncertainty about which listing is current. If the business has opened a genuinely separate staffed branch, review the multi-location rules before adding it.</p>

          <h2>4. Recheck the service-area setting</h2>
          <p>A move can change how the company serves customers. If people visit the new premises, make sure the public address is accurate. If the team travels to customers and does not serve them at the base, follow Google's service-area business guidance and remove the public address. A hybrid business can show a qualifying customer-facing location and a service area.</p>
          <p>Google currently allows a service area to be defined using cities, postcodes or other areas, with up to 20 areas in the profile. Its guidance says to be specific and accurate, and notes that approved service-area edits may take up to 48 hours to appear. These settings tell customers where the business operates; they are not a way to create extra branches or guarantee visibility in every selected neighbourhood.</p>
          <p>Review <a href="https://support.google.com/business/answer/9157481?hl=en-AE" target="_blank" rel="noopener noreferrer">Google's current instructions for managing service areas</a> and our <Link href="/blog/google-business-profile-service-area-uae">UAE service-area Business Profile checklist</Link> before making this change.</p>

          <h2>5. Update the website so every important page agrees</h2>
          <p>The website is often the next place a customer checks after finding a business on Maps. Update the information in one controlled pass:</p>
          <ul>
            <li><strong>Contact page:</strong> replace the old address, map, directions and arrival instructions where the business receives visitors.</li>
            <li><strong>Header and footer:</strong> check any phone number, address, hours or service-area text repeated across the site.</li>
            <li><strong>Homepage and service pages:</strong> correct location references that are now inaccurate, but keep the service descriptions focused on what the business actually provides.</li>
            <li><strong>Location page:</strong> explain the new premises, customer access and relevant coverage. If the company is service-area only, describe the areas served without publishing a hidden base address.</li>
            <li><strong>Structured data:</strong> update genuine address, telephone and URL properties in LocalBusiness markup if the page uses them. Do not add an address that should not be public.</li>
          </ul>
          <p>Use the same business details across the pages that customers and search engines rely on. Google's <a href="https://developers.google.com/search/docs/appearance/structured-data/local-business" target="_blank" rel="noopener noreferrer">LocalBusiness structured data documentation</a> explains how to describe a real business location. Markup should match visible page content; it is not a substitute for correcting the page itself.</p>
          <p>If the current contact page URL still makes sense, update its content instead of changing the URL unnecessarily. If you must replace a location-specific URL, redirect the old URL to the closest relevant new page, update internal links and the sitemap, and use a canonical URL that points to the preferred page. Our guide to <Link href="/blog/website-redesign-seo-checklist-uae">protecting SEO during website changes</Link> covers the wider launch checks.</p>

          <h2>6. Correct directories and other business profiles</h2>
          <p>After the main Google profile and website are accurate, work through the other places where customers may see the old details. Prioritise listings that receive real customer attention or are important to the business:</p>
          <ol>
            <li>Apple Maps and Bing Places, if the business maintains those listings.</li>
            <li>Social media business profiles and messaging contact details.</li>
            <li>Relevant UAE trade, property, professional or local business directories.</li>
            <li>Supplier, partner or association pages that display the old address.</li>
            <li>PDF brochures, downloadable price lists and old campaign landing pages hosted on the website.</li>
          </ol>
          <p>Update the business name, address or service area, phone and website consistently. Avoid paying for bulk submissions to unrelated directories just to create more citations. A short list of accurate, relevant listings is more useful than a large list of entries nobody checks. See <Link href="/blog/uae-business-directories-citations">our guide to UAE business directories and citations</Link>.</p>

          <h2>7. Handle the old address and old URLs without creating confusion</h2>
          <p>Check that the previous premises no longer appear as an active customer location on the website, map embeds, contact pages and profiles you control. Remove outdated directions and make sure calls or messages still reach the right team. If the old premises are now occupied by another business, do not leave instructions that could send customers there.</p>
          <p>If the same business has moved, update its existing profile rather than marking it permanently closed and opening a duplicate just to show the new address. If a genuinely separate branch has permanently closed, manage that location as a closure according to Google's current guidance. Keep the distinction clear: a relocation is not the same event as a business shutting down.</p>
          <p>For the website, keep established URLs where possible. If a page has to move, use a relevant permanent redirect and update the links that point to it. Do not redirect every old page to the homepage if a more relevant replacement exists.</p>

          <h2>8. Monitor the move and test the customer journey</h2>
          <p>Once the changes have been submitted, check the profile's edit and verification status. Then test the experience as a customer would:</p>
          <ul>
            <li>Search the exact business name and confirm the displayed address or service-area details.</li>
            <li>Open the map pin and check that it points to the correct place.</li>
            <li>Tap the website, phone and directions links from a mobile device.</li>
            <li>Submit a test enquiry and confirm that the right person receives it.</li>
            <li>Check the website's contact page, footer, map and structured data for old details.</li>
            <li>Review important directory listings again after their edits have been processed.</li>
          </ul>
          <p>Record a baseline before the move if possible. Afterward, compare relevant calls, form enquiries and qualified requests with the previous period. Search Console can help you monitor website queries and pages; Business Profile performance provides a separate view of profile interactions. Google's <a href="https://developers.google.com/search/docs/fundamentals/get-on-google" target="_blank" rel="noopener noreferrer">guide to establishing your business details on Google</a> explains how your verified profile and website contribute to your presence in Search.</p>
          <p>Do not judge the move from one manual Maps search. Local results can differ by searcher location and query, and a new physical location changes the distance context. Our guides to <Link href="/blog/google-maps-ranking-factors-dubai">Google Maps visibility for Dubai service companies</Link> and <Link href="/blog/local-seo-uae-service-businesses">local SEO for UAE service businesses</Link> explain what to monitor without relying on ranking guarantees.</p>

          <h2>Business relocation checklist</h2>
          <ul>
            <li>Confirm whether the move is a new storefront, service-area change, hybrid setup or separate branch.</li>
            <li>Prepare the exact address, map pin, phone, hours and real coverage areas.</li>
            <li>Update the existing Google Business Profile and complete any requested reverification.</li>
            <li>Hide the address if customers are not served at the business base.</li>
            <li>Correct the website contact details, directions, location page and relevant structured data.</li>
            <li>Update important UAE directories, map services and social profiles.</li>
            <li>Remove stale directions and handle any changed URLs with relevant redirects.</li>
            <li>Test calls, WhatsApp, forms, maps and enquiry notifications on a phone.</li>
            <li>Monitor profile status, Search Console and actual enquiry quality after the move.</li>
          </ul>

          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}

          <div className="blog-cta">
            <h2>Has your business website kept up with the move?</h2>
            <p>FixLeads Studio helps UAE service businesses improve website clarity, local SEO foundations and mobile enquiry paths. A website review can help identify outdated location details and practical fixes.</p>
            <a className="btn" href={wa("Hi, I'd like a website and local SEO review after my business move in the UAE.")}>Request a free website review</a>
          </div>
          <p>Explore <Link href="/pricing">our website packages</Link>, read more <Link href="/blog">FixLeads Studio guides</Link> or see <Link href="/how-it-works">how our website process works</Link>.</p>
          <p className="muted">Editorial note: Google Business Profile features and review times can change. The Google Help links above were checked on November 10, 2026. Follow the instructions shown in your own account, and keep all public business information accurate.</p>
          <p className="muted"><Link href="/blog">← Back to all guides</Link></p>
        </div>
      </section>
    </article>
  </>;
}
