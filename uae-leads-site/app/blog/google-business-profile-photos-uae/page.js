import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Google Business Profile Photos for UAE Service Businesses: What to Upload";
const description = "A practical photo checklist for UAE plumbers, AC companies, cleaners and other service businesses: what to show, Google’s image requirements, privacy checks and upload troubleshooting.";
const seoTitle = "Google Business Profile Photos UAE: Upload Checklist";
const image = "/google-business-profile-photos-uae.svg";
const url = SITE.url + "/blog/google-business-profile-photos-uae";

const faqs = [
  ["What photos should a UAE service business add to Google Business Profile?", "Start with genuine photos of the team at work, equipment, vehicles, service types and completed work that you have permission to show. Add storefront or interior photos only if customers actually visit that location."],
  ["How many photos should I upload?", "There is no single number that suits every service business. Google's business-specific photo guidance suggests at least three photos for categories such as photos at work and team photos. Treat these as practical recommendations, not a guarantee of visibility or a universal ranking requirement."],
  ["What size and format should Google Business Profile photos be?", "Google currently recommends JPG or PNG files between 10 KB and 5 MB, with a recommended resolution of 720 by 720 pixels and a minimum of 250 by 250 pixels. Photos should be sharp, well lit and representative of reality."],
  ["Why are my Google Business Profile photos still pending?", "Google reviews uploaded media. Pending means the file is uploading or processing, or the profile may not be verified. Google says photos and videos can take 24 to 48 hours to appear. Check the status before uploading the same image repeatedly."],
  ["Can I use AI-generated or stock photos?", "Do not present an AI-generated or stock image as a real technician, team, vehicle, premises or completed job. Google's guidance says photos should represent reality and should not have significant alterations or excessive filters or AI."],
  ["Can I upload photos of customers' homes or employees?", "Only use images you are authorised to publish. Avoid identifiable people, private property details, documents, number plates and other sensitive information unless you have the appropriate permission and have checked the applicable rules."]
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished: "2026-11-16",
    dateModified: "2026-11-16",
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
  alternates: { canonical: "/blog/google-business-profile-photos-uae" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/google-business-profile-photos-uae",
    images: [{ url: image, alt: "Illustrated photo checklist for a UAE service business Google Business Profile" }]
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
          <p className="blog-meta">Published November 16, 2026 · 12 min read</p>
          <img src={image} alt="Illustration showing real work, team and equipment photos arranged as a business profile photo gallery" className="blog-hero-image" width="1200" height="630" fetchPriority="high" />
        </div>
      </section>

      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>A customer searching for an AC technician in Dubai, a plumber in Sharjah or a cleaning company in Abu Dhabi cannot inspect your work before making the first call. Photos can help them understand what kind of business they have found: the people who may arrive, the equipment they use, the work they carry out and, where relevant, the premises they can visit.</p>

          <p>That does not mean a Business Profile needs a gallery full of polished advertising graphics. For a local service company, useful images are usually straightforward photographs that show real work accurately. A clear picture of a technician inspecting an outdoor AC unit can answer more questions than a generic image of a smiling person beside a laptop.</p>

          <p>This guide explains what a UAE service business can photograph, how to prepare images for Google Business Profile, what to check before publishing customer or employee photos, and what to do when an upload remains pending or is not approved. It follows Google's current photo guidance; check the linked help pages again if its interface or requirements change.</p>

          <h2>1. Choose photos that answer a customer's questions</h2>
          <p>Think about the questions a customer is likely to have before requesting a quote:</p>
          <ul>
            <li>Will a real technician or cleaning team arrive, and what will they look like?</li>
            <li>Does the company actually provide the service shown on its website?</li>
            <li>Does it have the tools, equipment or vehicle needed for the job?</li>
            <li>What does a completed job look like when it can be shown safely and honestly?</li>
            <li>If customers visit a workshop or office, can they recognise the correct entrance?</li>
          </ul>
          <p>Use the photo gallery to answer these questions with evidence. Do not treat it as a place to make claims that the business cannot support. A photo should help a customer understand the service, not imply a certification, brand partnership, result or facility that does not exist.</p>
          <p>Google's <a href="https://support.google.com/business/answer/6123536?hl=en" target="_blank" rel="noopener noreferrer">tips for business-specific photos</a> explain the types of images that can help customers assess a business. The guidance is category-specific, so choose the examples that fit the way your company operates.</p>

          <h2>2. Build a useful photo set for a home-service company</h2>
          <p>A service-area business may not have a shopfront or reception for customers to visit. That is fine: do not create a fake storefront gallery. Focus on real work, the team and the service equipment instead.</p>

          <h3>Photos at work</h3>
          <p>Show a technician or team member carrying out a representative task. For an AC company, this might be an authorised technician inspecting an indoor unit or working on an outdoor condenser. A plumbing company could show a real inspection or repair in progress. A cleaning business could show a team preparing equipment or completing a clearly identifiable cleaning task.</p>
          <p>Google's category-specific guidance suggests at least three photos at work. Use that as a practical starting point if you have enough distinct, genuine images. Do not stage unsafe work or photograph a task in a way that misrepresents the service.</p>

          <h3>Team photos</h3>
          <p>One clear team photograph can make a business feel more understandable and accountable. Individual or small-group photographs can also help customers recognise the people who may visit. Keep uniforms, company branding and equipment accurate; do not add a logo to a photograph if the team does not actually use it.</p>
          <p>Google suggests at least three team photos in its business-specific guidance. That is a recommendation for the relevant photo type, not a requirement that every business must meet before its profile can appear.</p>

          <h3>Equipment and vehicles</h3>
          <p>Photograph the tools, machines and vehicles that are genuinely used for the advertised service. A clean, well-lit image of the equipment can help a customer understand the type of work the team performs. Avoid showing another company's logo or a vehicle that is not operated by your business in a way that could confuse customers.</p>

          <h3>Completed work and service details</h3>
          <p>Where a finished result can be shown accurately, take a clear photograph from a useful angle. A completed installation, repaired fitting or cleaned area can provide context. If you use before-and-after images, make sure they relate to the same job, are presented honestly and do not hide important conditions or limitations.</p>
          <p>For more ideas on presenting real projects on your own website, see our guide to <Link href="/blog/website-project-portfolio-uae">building a website project portfolio that earns trust in the UAE</Link>.</p>

          <h3>Premises and exterior photos, if customers visit</h3>
          <p>If the business has a genuine, staffed customer-facing location, add clear exterior and interior photos that help visitors recognise it. Show the actual entrance, reception or customer area. Google says exterior photos can help customers recognise a business when they arrive, and its guidance recommends multiple views for relevant storefront categories.</p>
          <p>If the company travels to customers and does not receive visitors at its base, do not publish a private residential address as though it were a public shop. Review our checklist for <Link href="/blog/google-business-profile-service-area-uae">Google Business Profile setup for UAE service-area businesses</Link> before deciding what location information to display.</p>

          <h2>3. Match the photo plan to the service you provide</h2>
          <p>Use examples that describe your actual work rather than uploading the same generic set for every service.</p>
          <div className="industry-grid">
            <article><span>01</span><h3>AC and HVAC</h3><p>Show real technicians, the types of units serviced, inspection or maintenance work and equipment used. Avoid implying that every model or brand is supported unless the business genuinely provides that service.</p></article>
            <article><span>02</span><h3>Plumbing</h3><p>Show genuine diagnostic or repair work, the tools used and a completed result where it is safe and appropriate to photograph. Do not expose a customer's private home details.</p></article>
            <article><span>03</span><h3>Cleaning</h3><p>Show the team, cleaning equipment and representative areas of completed work with the property owner's permission. Keep before-and-after images comparable and unaltered.</p></article>
            <article><span>04</span><h3>Pest control</h3><p>Show the real team, protective equipment and service process without exposing customer information or presenting a treatment as a guaranteed outcome.</p></article>
          </div>
          <p>For a business offering several services, use a mix of images that makes the service range clear. Keep the profile's service list accurate too; our guide to <Link href="/blog/google-business-profile-service-menu-uae">setting up Google Business Profile services</Link> explains how to organise the services customers can see.</p>

          <h2>4. Follow Google's current image and video requirements</h2>
          <p>Google's photo guidance currently lists the following technical standards for Business Profile images:</p>
          <div className="industry-checklist">
            <ul>
              <li><strong>File format:</strong> JPG or PNG.</li>
              <li><strong>File size:</strong> between 10 KB and 5 MB.</li>
              <li><strong>Recommended resolution:</strong> 720 pixels high by 720 pixels wide.</li>
              <li><strong>Minimum resolution:</strong> 250 pixels high by 250 pixels wide.</li>
              <li><strong>Image quality:</strong> in focus, well lit and representative of reality, without significant alterations or excessive filters or AI.</li>
            </ul>
          </div>
          <p>These are Google's published photo standards, not a promise that every technically valid image will be approved. The image must also comply with the content policies. Read the current <a href="https://support.google.com/business/answer/6103862?hl=en" target="_blank" rel="noopener noreferrer">Google instructions for managing Business Profile photos and videos</a> before preparing a large batch.</p>

          <h3>What about short videos?</h3>
          <p>Google's current help page lists videos up to 30 seconds, no larger than 75 MB and at 720p resolution or higher. A short clip can show a real service process or the customer-facing premises, but keep it steady, relevant and easy to understand without sound. Do not use a video to imply work or facilities that the company does not provide.</p>

          <h3>Prepare the original file before uploading</h3>
          <ol>
            <li>Choose the clearest original photograph available.</li>
            <li>Crop it only as needed to make the subject easier to see.</li>
            <li>Check that the file is JPG or PNG and falls within Google's size and resolution guidance.</li>
            <li>Keep natural lighting and colours; avoid heavy filters, artificial backgrounds or edits that change what the image represents.</li>
            <li>Give the file a useful internal name so your team can identify the service or job later. The filename is for your own organisation, not a ranking trick.</li>
            <li>Keep a copy of the original in your business's organised photo folder.</li>
          </ol>

          <h2>5. Protect customer and employee privacy before publishing</h2>
          <p>Service photographs can reveal more than the work itself. A picture taken inside a home may show a family photograph, building access card, invoice, security screen, house number or vehicle registration. A technician's photograph may clearly identify an employee. Review the entire frame, including the background, before uploading it.</p>
          <p>Google's Maps content policy says not to publish personal information about an identifiable person without consent, including a person's face in a photo or video. The UAE Artificial Intelligence Office's explanation of the Personal Data Protection Law also includes a person's image in its description of personal data. The exact legal requirements depend on the organisation and processing context, so treat permission and careful review as a basic business safeguard rather than as a substitute for legal advice.</p>
          <ul>
            <li>Ask the customer or property owner for permission before publishing identifiable images of their home, premises or belongings.</li>
            <li>Get appropriate permission before using identifiable employee or contractor photographs in public marketing.</li>
            <li>Remove or obscure faces, name badges, number plates, access codes, documents and screens when they are not needed.</li>
            <li>Do not show children or unrelated bystanders in the background.</li>
            <li>Do not upload medical, financial, identity or other sensitive records as part of a job photograph.</li>
            <li>Keep a record of who approved the image and where it may be used.</li>
          </ul>
          <p>For the official references, see Google's <a href="https://support.google.com/business/answer/7213077" target="_blank" rel="noopener noreferrer">Business Profile photos, videos and posts content policy</a>, the <a href="https://support.google.com/contributionpolicy/answer/7400114" target="_blank" rel="noopener noreferrer">Google Maps prohibited and restricted content policy</a> and the UAE <a href="https://ai.gov.ae/personal-data-protection-law/" target="_blank" rel="noopener noreferrer">Personal Data Protection Law overview</a>. If your organisation operates in a financial or health free zone, or another regime with separate rules, confirm which requirements apply before publishing.</p>
          <p>You can also review the website-side privacy basics in our <Link href="/blog/uae-website-privacy-notice-checklist">UAE website privacy notice checklist</Link>.</p>

          <h2>6. Upload photos to a verified Business Profile</h2>
          <p>Google says photos and videos appear to customers only after the Business Profile is verified. Once verification is complete, the current desktop steps are:</p>
          <ol>
            <li>Open Google Search or Google Maps using the account that manages the business.</li>
            <li>Search for the business name and city, then open the Business Profile controls.</li>
            <li>Select <strong>Photos</strong> and then <strong>Add photos</strong>.</li>
            <li>Choose the original images or videos you want to upload.</li>
            <li>To set a logo or cover image, use the relevant <strong>Add a logo</strong> or <strong>Add a cover photo</strong> option if it is available.</li>
            <li>Check the public profile later to confirm that the media is visible and represents the correct business.</li>
          </ol>
          <p>Google's interface can differ between Search, Maps, desktop and mobile. If a menu label has changed, use the current <a href="https://support.google.com/business/answer/6103862?hl=en" target="_blank" rel="noopener noreferrer">photo management instructions</a> rather than following an outdated screenshot from a third-party article.</p>
          <p>One detail worth remembering: selecting a cover photo does not guarantee Google will display it as the first image. Google may choose another image if it considers another source more representative or the selected cover is low quality.</p>

          <h2>7. Understand pending, not approved and live statuses</h2>
          <p>Google reviews uploaded photos and videos. Its help page describes three statuses:</p>
          <ul>
            <li><strong>Pending:</strong> the file is still uploading or processing, or the profile may not yet be verified. Pending media is not shown to customers.</li>
            <li><strong>Not approved:</strong> the media has been flagged as violating policy and is not shown on Search or Maps.</li>
            <li><strong>Live:</strong> the media is visible to customers on Search and Maps.</li>
          </ul>
          <p>Google says photos and videos can take 24 to 48 hours to appear. If a new image is not visible immediately, check its status and allow time for processing before assuming that the upload failed.</p>

          <h3>If a photo is not approved</h3>
          <ol>
            <li>Open the photo's status in the profile and check whether it is pending or not approved.</li>
            <li>Confirm the profile is verified and that the file is not a duplicate.</li>
            <li>Check the file type, size, resolution, focus and lighting.</li>
            <li>Review the whole image for misleading edits, excessive filters or AI alteration, personal information, unrelated content or other policy issues.</li>
            <li>If the image genuinely violates a rule, replace it with a compliant original rather than repeatedly uploading the same file.</li>
            <li>If the image appears compliant but remains unavailable after the published processing window, use Google's Business Profile Help or support options to investigate.</li>
          </ol>
          <p>Do not assume every rejection is caused by the image dimensions. The content itself and the profile's verification status can also matter. Google's <a href="https://support.google.com/business/answer/6103862?hl=en" target="_blank" rel="noopener noreferrer">photo upload status guidance</a> is the best starting point for troubleshooting.</p>

          <h2>8. Create a simple monthly photo routine</h2>
          <p>A photo plan does not need to become another marketing project that takes time away from customers. Give one person responsibility for collecting and reviewing useful images as part of normal job close-out.</p>
          <div className="industry-checklist">
            <ul>
              <li><strong>Before the job:</strong> confirm whether the customer or property owner has approved any planned photography.</li>
              <li><strong>During the job:</strong> take a small number of clear, safe photographs that show the actual service. Do not interrupt work or compromise safety to create marketing material.</li>
              <li><strong>At close-out:</strong> review the background for personal information, remove anything unnecessary and record the approval for public use.</li>
              <li><strong>Before upload:</strong> check the image against Google's current technical and content guidance.</li>
              <li><strong>After upload:</strong> check whether the file is pending, live or not approved, and keep the original in the business archive.</li>
              <li><strong>During the monthly review:</strong> remove outdated images where appropriate and identify genuine gaps in the service gallery.</li>
            </ul>
          </div>
          <p>Do not invent a fixed upload quota or ask technicians to photograph every customer. A smaller set of accurate, authorised images is more useful than a large collection of repetitive or intrusive photographs.</p>

          <h2>9. Measure usefulness without promising a ranking change</h2>
          <p>Photos can help customers understand a business, but uploading them does not guarantee more calls, higher Maps rankings or sales. Google does not promise a specific result for a particular number of images. Treat photographs as part of the profile's overall information and customer experience.</p>
          <p>When reviewing the profile, note which images are visible and whether customers ask more informed questions about the services shown. Keep those observations separate from the Performance report. For profile views, calls, website clicks and other actions, see our guide to <Link href="/blog/google-business-profile-performance-uae">reading Google Business Profile Performance data</Link>.</p>
          <p>For the wider local visibility picture, use our <Link href="/blog/local-seo-uae-service-businesses">local SEO guide for UAE service businesses</Link>. A useful profile, accurate service information, genuine reviews and helpful website pages work together; no single photo upload replaces those basics. If you invite customers to leave feedback, follow the neutral process in our guide to <Link href="/blog/more-google-reviews-uae">getting more genuine Google reviews</Link>.</p>

          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}

          <div className="blog-cta">
            <h2>Want a clearer, more trustworthy Google profile?</h2>
            <p>FixLeads Studio can review the path from your Google Business Profile to your website, service information and enquiry options, then share practical improvements for your UAE business.</p>
            <a className="btn" href={wa("Hi FixLeads Studio, I'd like a free review of my Google Business Profile photos and website enquiry journey.")} target="_blank" rel="noopener noreferrer">Request a free website review</a>
          </div>

          <h2>Official references</h2>
          <ul>
            <li><a href="https://support.google.com/business/answer/6123536?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Help: Tips for business-specific photos</a></li>
            <li><a href="https://support.google.com/business/answer/6103862?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Help: Manage photos and videos</a></li>
            <li><a href="https://support.google.com/business/answer/7213077" target="_blank" rel="noopener noreferrer">Google Business Profile Help: Photos, videos and posts content policy</a></li>
            <li><a href="https://support.google.com/contributionpolicy/answer/7400114" target="_blank" rel="noopener noreferrer">Google Maps: Prohibited and restricted content</a></li>
            <li><a href="https://ai.gov.ae/personal-data-protection-law/" target="_blank" rel="noopener noreferrer">UAE Artificial Intelligence Office: Personal Data Protection Law</a></li>
          </ul>
          <p className="muted">This article is practical business guidance, not legal advice. Google features and policies can change; check the official sources linked above before making profile or privacy decisions.</p>
          <p className="muted"><Link href="/blog">← Back to all guides</Link></p>
        </div>
      </section>
    </article>
  </>;
}
