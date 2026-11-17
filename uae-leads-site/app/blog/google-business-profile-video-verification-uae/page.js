import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Google Business Profile Video Verification in the UAE: A Checklist for Service Businesses";
const description = "Prepare a Google Business Profile video verification in the UAE. See what Dubai service businesses should record, how to avoid common gaps and what to do after review.";
const seoTitle = "Google Business Profile Video Verification UAE: Checklist";
const image = "/google-business-profile-video-verification-uae.svg";
const url = SITE.url + "/blog/google-business-profile-video-verification-uae";

const faqs = [
  ["Does every UAE business need video verification?", "No. Google determines which verification methods are available for each profile. The options can depend on the business type, public information, region and business hours. Follow the methods shown in the profile rather than assuming video is available to every business."],
  ["How long must a Google Business Profile verification video be?", "Google's current instructions say the recording must be at least 30 seconds long. It must be a unique, complete, unedited recording with no breaks, recorded and uploaded from a mobile device through the Business Profile."],
  ["Can a service-area business verify without a shopfront?", "Yes. Google's guidance includes service-area businesses. The video should show the operating location, genuine tools or equipment used for work, and proof that the person recording manages or represents the business."],
  ["What should I do if Google rejects my verification video?", "Open the Review issues prompt in the Business Profile, read the specific gaps and record a new video. Google says to include the information shown in the first recording as well as the missing evidence. Do not simply resubmit the same incomplete video."],
  ["How long does Google take to review a video verification?", "Google says the review can take up to five working days. This is a stated review window, not a guarantee that every case will finish within that time."],
  ["Should I show my UAE trade licence or personal ID in the video?", "Google lists a business permit as one possible document for a service-area business, but it does not say every business must show a licence. Never expose bank details, tax numbers, ID numbers or private information in the recording. Use only relevant, non-sensitive evidence that matches the business profile."]
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished: "2026-11-17",
    dateModified: "2026-11-17",
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
  alternates: { canonical: "/blog/google-business-profile-video-verification-uae" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/google-business-profile-video-verification-uae",
    images: [{ url: image, alt: "Illustrated checklist for Google Business Profile video verification for a UAE service business" }]
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
          <p className="blog-meta">Published November 17, 2026 · 13 min read</p>
          <img src={image} alt="A practical verification video plan showing business location, genuine work equipment and proof of management" className="blog-hero-image" width="1200" height="630" fetchPriority="high" />
        </div>
      </section>

      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>If Google asks you to verify a Business Profile by video, the task is not simply to film your office, vehicle or tools. The recording needs to help Google confirm three things: where the business operates, that the business genuinely exists, and that the person submitting the video manages or represents it.</p>

          <p>That distinction matters for service businesses in Dubai, Abu Dhabi, Sharjah and elsewhere in the UAE. A plumbing company that travels to customers does not have the same evidence as a customer-facing showroom. An AC maintenance team may work from a home office, a storage unit or a workshop. A cleaning company may operate from a base but never receive customers there.</p>

          <p>This guide explains how to prepare for Google Business Profile video verification, what to show for a shopfront, hybrid or service-area business, how to avoid exposing private information, and what to do if Google asks for another recording. It follows Google's current help documentation; the instructions displayed inside your own profile should take priority if the process changes.</p>

          <div className="industry-checklist">
            <p><strong>The short version:</strong> plan one live, continuous recording of at least 30 seconds. Show the correct location, genuine business activity or equipment, and proof that you are authorised to operate the business. Record and upload it from a mobile device through the Business Profile flow. Do not edit or reuse an old clip.</p>
          </div>

          <h2>1. Understand what video verification is checking</h2>
          <p>Google uses verification to confirm that a person manages or represents a real business before allowing them to control important profile information. Video verification is one of several possible methods, not a universal requirement for every UAE business.</p>

          <p>Google determines the methods available to each profile. The options can depend on the business type, public information, region and business hours, and the methods cannot be changed manually. You may see phone, email, video, live video call, mail or another option, but only rely on the choices actually shown in your account.</p>

          <p>Start with Google's current <a href="https://support.google.com/business/answer/7107242" target="_blank" rel="noopener noreferrer">guide to verifying a business on Google</a>. If video is offered, read the separate <a href="https://support.google.com/business/answer/14271705?hl=en" target="_blank" rel="noopener noreferrer">video verification instructions</a> before recording.</p>

          <p>Verification is an ownership and management step. It allows the business to manage its profile; it is not a promise of a particular Maps position, more calls or a specific number of leads.</p>

          <h2>2. Check the profile before you start filming</h2>
          <p>A video can be clear and still create questions if it appears to represent a different business from the profile. Before opening the camera, review the business details that customers and Google will compare with the evidence.</p>
          <ul>
            <li><strong>Business name:</strong> use the real-world name used on your permanent signage and business materials. Do not add service keywords, neighbourhood names or promotional phrases to the profile name.</li>
            <li><strong>Business type:</strong> decide whether customers visit the premises, whether the company travels to customers, or whether it does both. The evidence should match the way the business actually operates.</li>
            <li><strong>Address display:</strong> if customers are not served at the business address, Google says not to add that address to the public profile. Review the <Link href="/blog/google-business-profile-service-area-uae">UAE service-area Business Profile setup guide</Link> before changing the location settings.</li>
            <li><strong>Contact details and website:</strong> check that the profile links to the correct business website and uses a phone number the company controls.</li>
            <li><strong>Account access:</strong> sign in to the Google Account that manages the profile and make sure the person recording can complete the verification steps.</li>
          </ul>
          <p>For a business with Arabic and English branding, compare the name shown in the profile with the name used consistently on the actual premises and business materials. Do not invent a second trading name just to make the video look more convincing. Google's <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer">guidelines for representing a business</a> explain how a profile should reflect the real-world business.</p>

          <h2>3. Prepare the three types of evidence</h2>
          <p>Think of the recording as a short evidence walk-through. The exact sequence can vary, but Google's video guidance asks businesses to demonstrate the location, the existence of the business and proof of management. Plan how to show each one before you press record.</p>

          <div className="industry-grid">
            <article>
              <span>01</span>
              <h3>Location</h3>
              <p>Street signs, building numbers, nearby businesses, familiar landmarks or other clear identifiers that connect the business to the location shown in its profile.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Business activity</h3>
              <p>Permanent signage for a shopfront, or genuine tools, equipment, products, workspace or work materials for a service-area business.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Management</h3>
              <p>Access to staff-only areas or business assets, opening a branded work vehicle, performing a service, or showing a relevant non-sensitive business document.</p>
            </article>
          </div>

          <h2>4. If customers visit your shop, office or showroom</h2>
          <p>Google calls this a shopfront business when customers interact with the business in person at a physical location during opening hours and permanent on-site signage is present. A hybrid business serves customers at its premises and also visits or delivers to them.</p>

          <p>For a shopfront or hybrid business, plan to show these elements in the same recording:</p>
          <ol>
            <li><strong>Start with the surroundings.</strong> Capture a street name, building number, nearby business or recognisable place that helps establish the location shown on Google Maps.</li>
            <li><strong>Show the actual premises.</strong> Walk to the shop, showroom or office entrance. Make the permanent signboard, wall or window lettering readable. The business name in the video should match the name on the Business Profile.</li>
            <li><strong>Show that the business is operating.</strong> Depending on the business, this may mean a real workspace, products, equipment or customer-facing area. Do not stage a location that is not used by the business.</li>
            <li><strong>Show proof of management.</strong> Demonstrate access to something an employee or authorised operator can use, such as unlocking the premises, opening a cash register, accessing a staff-only room or using a point-of-sale system.</li>
          </ol>

          <p>A building directory or a nearby landmark can help establish location, but it does not replace the permanent business name sign that Google asks a shopfront to show. If your sign is missing, temporary or uses a different name, resolve the real-world branding issue rather than trying to hide it with editing or a close-up of a business card.</p>

          <h2>5. If your company travels to customers</h2>
          <p>A service-area business provides services at customer locations and does not serve customers at its own business address. Google gives examples such as plumbers and locksmiths. An AC repair company, cleaning team, pest-control operator or mobile maintenance provider may fit this model if customers do not visit its base.</p>

          <p>For a service-area business, Google asks the video to show where the business operates, the tools or equipment used for work, and proof that the person recording manages or represents the company.</p>

          <h3>Show the operating location</h3>
          <p>Record street signs, nearby landmarks or other identifiable features at the business address. Avoid empty land or a generic road view with no useful markers. If the business is run from home, Google's guidance says the immediate neighbourhood's signs and landmarks can help establish the address.</p>

          <h3>Show real work equipment</h3>
          <p>Use equipment the company genuinely uses. An AC contractor might show service tools, testing equipment or a real work area. A plumber might show plumbing tools and materials. A cleaning business could show its machines, supplies and work vehicle. Do not borrow another company's branded vehicle or display equipment that the business does not use.</p>

          <h3>Show that you manage the operation</h3>
          <p>Google suggests recording yourself performing a service or accessing business-only assets, such as unlocking a branded van. A relevant business permit, invoice or utility bill may also help if it matches the name on the profile. A document by itself does not replace the need to show the location and genuine business activity.</p>

          <p>If the company is home-based and customers never visit that address, do not make the private address public just to complete verification. The video is submitted privately for review; it is not a reason to turn a service-area business into a storefront listing. See Google's <a href="https://support.google.com/business/answer/9157481" target="_blank" rel="noopener noreferrer">guidance for service-area and hybrid businesses</a>.</p>

          <h2>6. Follow the recording rules carefully</h2>
          <p>Google's current video instructions are specific about how the footage must be captured. Treat these as submission requirements, not optional filming tips:</p>
          <div className="industry-checklist">
            <ul>
              <li><strong>One continuous recording:</strong> the video must be unique, complete and unedited, with no breaks.</li>
              <li><strong>Minimum length:</strong> record for at least 30 seconds.</li>
              <li><strong>Use the Business Profile flow:</strong> record and upload from a mobile device through the profile. Google says pre-recorded videos are not allowed and you cannot record offline and upload later.</li>
              <li><strong>Allow required permissions:</strong> the process may ask for location, camera and microphone access. Follow the on-screen instructions.</li>
              <li><strong>Protect privacy:</strong> do not capture bank account details, tax numbers, ID numbers, private information about you or other people, or other people's faces.</li>
            </ul>
          </div>

          <p>Keep the phone steady and move slowly enough for signs, equipment and access evidence to be understood. Good lighting and a clean lens help, but do not add captions, splice several clips together, use filters or upload a polished marketing video instead of the live verification recording.</p>

          <h2>7. A practical recording plan for a UAE service business</h2>
          <p>The following is a planning sequence, not a script that Google requires. Adapt it to the evidence your business genuinely has and to the instructions shown in your profile.</p>
          <ol>
            <li><strong>Before recording:</strong> confirm the profile name and business type, check the account, charge the phone and identify the location markers and equipment you will show.</li>
            <li><strong>Begin at the location:</strong> show the street sign, building number or nearby landmark that connects the operating location to the profile.</li>
            <li><strong>Move to the business:</strong> show the permanent sign and premises for a shopfront, or the real workspace, tools and equipment for a service-area business.</li>
            <li><strong>Demonstrate management:</strong> unlock the premises or branded vehicle, access an employee-only area, operate business equipment or perform a genuine service.</li>
            <li><strong>Check privacy:</strong> keep other people out of frame and make sure sensitive details on paperwork, screens or equipment are not visible.</li>
            <li><strong>Review before upload:</strong> check that the whole recording is clear, continuous and includes every item required for your business type.</li>
          </ol>
          <p>Do not force every business into the same sequence. A cleaning company with a mobile team may have no public office. A workshop may have permanent signage and staff-only access. A hybrid business may need to show both its premises and the way it serves customers away from that location.</p>

          <h2>8. Why a verification video may not be accepted</h2>
          <p>Google can show specific review issues when a recording is not accepted. Examples in its help documentation include a business name not being visible on the shopfront, no nearby area being shown, or missing proof that the person is authorised to operate the business.</p>
          <p>Use the reason shown in your own profile rather than guessing. Common gaps to investigate include:</p>
          <ul>
            <li><strong>Location is unclear:</strong> the video shows an unmarked road, a generic building or no nearby identifier.</li>
            <li><strong>Business name does not match:</strong> the permanent sign uses a different name from the Business Profile.</li>
            <li><strong>Wrong evidence for the business type:</strong> a service-area business tries to show a shopfront it does not have, or a customer-facing shop does not show its permanent signage.</li>
            <li><strong>Management is not demonstrated:</strong> the recording shows tools but does not establish that the person has authorised access to the business.</li>
            <li><strong>Recording rules were missed:</strong> the video is too short, edited, interrupted, pre-recorded or uploaded outside the Business Profile flow.</li>
            <li><strong>Private information appears:</strong> a document or screen exposes personal, tax, banking or identity details.</li>
          </ul>
          <p>Do not repeatedly submit the same video with a different filename. First identify the missing evidence and plan a new continuous recording that addresses it.</p>

          <h2>9. What happens after you submit?</h2>
          <p>Google says video reviews can take up to five working days. You will be notified if verification succeeds. If it does not, Google may show a Review issues prompt with reasons the recording was not accepted.</p>
          <p>If you need to record again:</p>
          <ol>
            <li>Open the Business Profile on your mobile device.</li>
            <li>Select <strong>Review issues</strong> and read each item shown.</li>
            <li>Plan a new recording that includes all the information from the first video plus the missing evidence.</li>
            <li>Record and upload the new video through the Business Profile flow.</li>
          </ol>
          <p>If the process still fails after you have followed the listed requirements, check whether another verification method is offered in the profile or use Google's <a href="https://support.google.com/business/gethelp" target="_blank" rel="noopener noreferrer">Business Profile support route</a>. Do not assume a phone, email or live video option can be manually selected if it is not displayed for your business.</p>
          <p>Google also says you can delete a submitted verification video from Business Profile settings under Advanced settings and Video uploads. Review that option if you need to manage the recording after the process is complete.</p>

          <h2>10. Keep the rest of the profile accurate after verification</h2>
          <p>Verification is not the end of profile management. Check that the public address display, service area, hours, phone number, website and service list reflect the real business. If the company later moves, follow the <Link href="/blog/google-business-profile-address-change-uae">Google Business Profile address-change checklist</Link> before editing the listing.</p>
          <p>Once the profile is verified, use the <Link href="/blog/google-business-profile-performance-uae">Business Profile Performance guide</Link> to understand views, searches, calls and website clicks. Keep genuine work photos current with the <Link href="/blog/google-business-profile-photos-uae">photo checklist for UAE service businesses</Link>, and review the <Link href="/blog/google-business-profile-suspension-uae">profile suspension and appeal checklist</Link> if Google later restricts the listing.</p>

          <h2>Google Business Profile video verification checklist</h2>
          <div className="industry-checklist">
            <ul>
              <li>My profile uses the real business name and the correct business type.</li>
              <li>I know which verification method Google has offered for this profile.</li>
              <li>I can show the location using clear street signs, building details or nearby landmarks.</li>
              <li>I have genuine signage, equipment, tools, products or workspace relevant to the business type.</li>
              <li>I can demonstrate that I manage or represent the business.</li>
              <li>I will record one live, continuous, unedited video of at least 30 seconds.</li>
              <li>I will record and upload through the Business Profile on a mobile device.</li>
              <li>No other people's faces or sensitive personal, tax, banking or identity details will appear.</li>
              <li>I will read any Review issues feedback before recording again.</li>
            </ul>
          </div>

          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => (
            <div className="faq-item" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}

          <h2>Need a second pair of eyes on your profile setup?</h2>
          <p>Before you submit, it can help to check that your public profile, website and business details describe the same real operation. FixLeads Studio works with UAE service businesses on website design and local SEO. We can review the visible profile setup and website details, but Google's verification decision remains Google's.</p>
          <p><a className="btn" href={wa("Hi, I'd like a free review of my Google Business Profile setup for my UAE service business.")} target="_blank" rel="noopener noreferrer">Request a free website and profile review ↗</a></p>

          <p className="small-note">Official references: <a href="https://support.google.com/business/answer/14271705?hl=en" target="_blank" rel="noopener noreferrer">Google's video verification instructions</a>, <a href="https://support.google.com/business/answer/7107242" target="_blank" rel="noopener noreferrer">Google's verification methods</a>, and <a href="https://support.google.com/business/answer/9157481" target="_blank" rel="noopener noreferrer">Google's service-area business guidance</a>. Requirements can change; follow the instructions displayed in your Business Profile.</p>
        </div>
      </section>
    </article>
  </>;
}
