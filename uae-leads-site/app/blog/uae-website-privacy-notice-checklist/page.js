import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Website Privacy Notice in the UAE: A Practical Checklist for Service Businesses";
const description = "A practical UAE website privacy notice checklist for service businesses: explain enquiry data, purposes, access, retention, third-party tools and customer choices.";
const seoTitle = "UAE Website Privacy Notice: Contact Form Checklist";
const image = "/uae-website-privacy-notice-checklist.svg";
const url = SITE.url + "/blog/uae-website-privacy-notice-checklist";
const faqs = [
  ["Does every UAE business website need a privacy policy?", "A business that collects or uses personal information should explain its real practices and check which privacy rules apply to its organisation and data. The exact legal requirements depend on the business, the information and the relevant UAE or free-zone regime. Get advice for your circumstances rather than relying on a generic template."],
  ["What should a website privacy notice explain?", "It should clearly identify the responsible business, describe the information collected, explain why it is used, identify relevant service-provider or recipient categories, describe retention and security practices, explain applicable customer choices or rights, and provide a working contact route."],
  ["Do I need a consent checkbox on every contact form?", "Not automatically. The correct approach depends on the purpose and applicable legal basis. Do not use one blanket checkbox for unrelated purposes. If you invite someone to receive marketing, make that choice separate from the request for a service enquiry and explain how preferences can be changed."],
  ["Do I need a cookie banner for Google Analytics?", "Do not decide from the tool name alone. Review the cookies, tags, locations and purposes actually used on the site, then confirm the requirements that apply to your visitors and business. Google's Consent Mode can pass user choices to Google tags, but it is not itself a privacy notice or a consent banner."],
  ["Can I copy another company's privacy policy?", "No. Another company's wording may describe different forms, vendors, analytics tools, retention periods and business practices. Use a checklist to plan your own notice, then verify every statement against the way your website and team really work."]
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished: "2026-11-13",
    dateModified: "2026-11-13",
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
  alternates: { canonical: "/blog/uae-website-privacy-notice-checklist" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/uae-website-privacy-notice-checklist",
    images: [{ url: image, alt: "Website privacy notice checklist for customer enquiry forms" }]
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
          <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · WEBSITE PRIVACY · UAE GUIDE</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="blog-meta">Published November 13, 2026 · 12 min read</p>
          <img src={image} alt="Illustration of a website enquiry form, privacy choices and a data protection shield" className="blog-hero-image" width="1200" height="630" fetchPriority="high" />
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>A customer visits a Dubai cleaning company's website, asks for a quote and enters a name, phone number, service area and a few details about the property. The form sends that information to an inbox. A team member may then copy the enquiry into a CRM, call the customer or continue the conversation on WhatsApp.</p>
          <p>That small journey can involve several systems and people. If the website only says “we respect your privacy” without explaining what actually happens, the customer has little useful information before submitting the form.</p>
          <p>A clear privacy notice is part of a trustworthy enquiry experience. It helps visitors understand what they are sharing, gives your team a reference for handling that information and makes it easier to review whether the website's forms and connected tools match the business's stated practices.</p>
          <p>This guide is for small and service businesses in Dubai and across the UAE. It is a practical website-planning checklist, not legal advice or a ready-made compliance policy. Privacy obligations depend on the business, the data, the location of the people involved and the rules that apply to the organisation.</p>

          <h2>Privacy policy or privacy notice: what is the difference?</h2>
          <p>People often use the terms interchangeably. A privacy policy is usually the full page describing an organisation's data-handling practices. A privacy notice is the explanation shown at the point where information is collected, such as beside a quote form or booking request.</p>
          <p>For a small website, one well-written privacy page may provide the full explanation, with a short, relevant summary and a visible link beside each form. The important part is that the notice is easy to find before a visitor submits information, written in plain language and consistent with the actual process.</p>
          <p>A privacy page is not a badge that makes every data practice compliant. It cannot fix an unnecessary form field, an unmonitored inbox, an undisclosed third-party tool or a customer list that is kept indefinitely.</p>

          <h2>Start by understanding which UAE rules apply</h2>
          <p>The UAE's federal Personal Data Protection Law is Federal Decree-Law No. 45 of 2021. The official UAE Government portal describes it as a framework for protecting personal information and explains that it covers processing through electronic systems inside or outside the country. The UAE Artificial Intelligence Office also summarises the law's scope, including circumstances where organisations outside the UAE process personal data of people in the UAE.</p>
          <p>Do not assume that every business, data type or free-zone entity follows exactly the same regime. The UAE Government portal also points to other data-protection laws, including the DIFC framework and sector-specific health-data legislation. Certain organisations and categories of information may be excluded from the federal law or governed by separate rules. Confirm the correct position for your licence, activity, customers and data before relying on a generic checklist.</p>
          <p>Read the <a href="https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws" target="_blank" rel="noopener noreferrer">UAE Government overview of data-protection laws</a> and the <a href="https://ai.gov.ae/personal-data-protection-law/" target="_blank" rel="noopener noreferrer">UAE Artificial Intelligence Office's Personal Data Protection Law summary</a>. If your business operates in a regulated sector or a special free zone, obtain advice on the rules that apply to it.</p>
          <p>The practical takeaway for a website owner is straightforward: know what information the website collects, why the business uses it, which providers can access it and how a person can contact the business about their information.</p>

          <h2>1. Make an inventory of information your website collects</h2>
          <p>Before writing any policy text, list the information a visitor can submit or that the website and its connected services may generate. A typical service-business website may handle:</p>
          <ul>
            <li><strong>Contact details:</strong> name, phone number, email address and preferred contact method.</li>
            <li><strong>Enquiry details:</strong> service requested, message, preferred time, property type or job description.</li>
            <li><strong>Location information:</strong> community, emirate, service address or location details a visitor chooses to share.</li>
            <li><strong>Technical information:</strong> device, browser, approximate location, log information and online identifiers collected by hosting, security or analytics tools.</li>
            <li><strong>Uploaded material:</strong> photographs, documents or other files, but only if the website actually offers an upload feature.</li>
          </ul>
          <p>Do not list information simply because a template mentions it. Check every form, booking tool, chat widget, analytics tag and integration. Conversely, do not overlook data collected by a third-party service just because it is not visible in the form fields.</p>
          <p>Keep the form proportionate. An AC maintenance enquiry may need a phone number, service area and a short description. It rarely needs a passport number, payment-card details or a copy of an identity document. If a team member later needs additional information to arrange a job, request it through an appropriate channel and explain why it is needed.</p>
          <p>Our guide to <Link href="/blog/website-quote-form-conversion-uae">website quote forms for UAE service businesses</Link> explains how to ask useful questions without turning a simple enquiry into a long application.</p>

          <h2>2. Explain why each category is used</h2>
          <p>“To improve our services” is too vague to explain every use. Match each information category to a real business purpose. For example, a company may use a phone number to respond to a quote request, a service area to check whether it covers the customer's location, and a message to understand the work being requested.</p>
          <p>Separate different purposes. Responding to a customer who asks for a quote is not the same activity as adding that person to a promotional mailing list. If the business wants to send ongoing marketing, explain that purpose separately and use a suitable, clear preference mechanism. Do not treat a request for a quote as automatic permission for unrelated messages.</p>
          <p>The federal law sets rules around consent and also recognises specified circumstances where processing may occur without consent. The correct basis depends on the actual purpose and circumstances. Avoid statements such as “we always need consent for every form” or “submitting this form gives us permission to use your details for anything”. Ask a qualified adviser to confirm the lawful approach for your organisation.</p>

          <h2>3. Identify who receives or handles the information</h2>
          <p>A website enquiry may pass through more than one provider before a staff member reads it. Depending on your setup, those providers might include a website host, form-delivery service, business email provider, CRM, booking platform, analytics tool, spam-prevention service or messaging platform.</p>
          <p>Make a simple vendor register for internal use. For each service, record:</p>
          <ul>
            <li>the provider and the feature it supplies;</li>
            <li>what information it can receive or access;</li>
            <li>which business account controls the service;</li>
            <li>who inside the business can access the information;</li>
            <li>where to find the provider's current privacy and security terms; and</li>
            <li>whether information may be stored or processed outside the UAE.</li>
          </ul>
          <p>Your public notice should describe the relevant recipient or service-provider categories in language customers can understand. Name a provider when it is useful and accurate, but do not claim that no third party receives information if your email, hosting, analytics or booking tools necessarily process it.</p>
          <p>Review this list when a developer changes the form, adds a chat service or moves the site to a new host. A privacy page that names an old provider is not an accurate description of the current website.</p>

          <h2>4. Be clear about international processing</h2>
          <p>Some website and cloud services operate infrastructure in more than one country. A UAE business should not assume that information stays in the UAE simply because its website uses a UAE domain or serves customers in Dubai.</p>
          <p>Check the provider's current documentation and contract to understand where relevant data may be stored, accessed or transferred. Record the safeguards or contractual arrangements that your adviser confirms are appropriate. Do not write “all data is stored in the UAE” unless you have verified that statement for every relevant system.</p>
          <p>The UAE federal law includes provisions on cross-border personal-data transfers. The right approach depends on the applicable regime and the particular transfer, so get specific advice before describing a transfer mechanism in your notice.</p>

          <h2>5. Explain retention in a way your team can follow</h2>
          <p>“We keep information as long as necessary” may be a useful principle, but your team still needs an operational rule. Decide how long an unanswered quote request remains in the sales inbox, what happens to a completed job record, who reviews old CRM leads and how test submissions are removed.</p>
          <p>There may be legitimate business, contractual or legal reasons to retain some records after an enquiry is closed. The retention period should reflect those reasons and any applicable requirements, rather than an arbitrary promise that all information will be deleted immediately.</p>
          <p>If a fixed period cannot be stated accurately, explain the criteria used to decide when information is no longer needed. Then make sure the business has a process to review and apply those criteria. A policy that promises deletion but has no owner or routine behind it is not useful.</p>

          <h2>6. Describe security without making impossible promises</h2>
          <p>Customers should be able to understand the broad steps used to protect their information. For a small service business, practical controls may include HTTPS, restricted access to enquiry inboxes, individual user accounts, multi-factor authentication, secure backups, software updates and a process for removing access when a worker or supplier leaves.</p>
          <p>Do not claim that a website is “100% secure” or that a particular certification exists unless the business can prove it. A privacy notice should describe the safeguards that are genuinely in place, without publishing sensitive technical details that could help someone attack the site.</p>
          <p>For the operational side, use our <Link href="/blog/website-backup-security-uae">website security and backup checklist</Link>. When a developer or agency changes, the <Link href="/blog/website-handover-checklist-uae">website handover checklist</Link> can help the business review administrator access, hosting accounts, backups and connected services.</p>

          <h2>7. Give customers a real way to ask questions</h2>
          <p>Put a working privacy contact route in the notice. It might be a monitored business email address or a dedicated contact form. Make sure someone is responsible for receiving requests and knows how to pass them to the person who can assess them.</p>
          <p>The UAE federal framework describes rights relating to information, correction, erasure, restriction and other aspects of processing, subject to the law's conditions and exceptions. Your notice should not promise that every request will always be granted. Explain how a person can contact the business, how identity may be checked where appropriate and that requests will be handled under the rules that apply.</p>
          <p>Test the contact address. A privacy mailbox that no one checks creates a poor experience and makes the notice misleading in practice.</p>

          <h2>8. Review cookies, analytics and advertising tags</h2>
          <p>Do not copy a cookie paragraph from another website and assume it describes yours. Make an inventory of analytics, advertising, embedded media, chat, maps, booking and security tools. Check which ones are actually installed on the live site and what information they collect or store.</p>
          <p>If you use Google Analytics or Google Ads, review the settings and the way tags behave before and after a visitor makes a choice. Google's documentation explains that Consent Mode communicates consent states to Google tags so their behaviour can adjust to those choices. It is a technical mechanism, not a substitute for a clear notice, a consent interface where one is required, or a legal assessment. See <a href="https://developers.google.com/tag-platform/security/guides/consent" target="_blank" rel="noopener noreferrer">Google's Consent Mode implementation guide</a>.</p>
          <p>Check the actual visitor journey: does a preference choice change the relevant tag behaviour, does the choice persist as intended, and can a visitor change it later? Do not display an “accept” banner if the underlying settings do not do what the banner says.</p>
          <p>For measurement, remember that a WhatsApp click, a form submission and a confirmed customer enquiry are different events. Our guide to <Link href="/blog/track-whatsapp-clicks-ga4">tracking calls and WhatsApp clicks with GA4</Link> explains how to keep those measures distinct.</p>

          <h2>9. Put a short explanation beside each enquiry form</h2>
          <p>A visitor should not have to search the footer to understand why a form asks for a phone number. Add a concise sentence near the submit button and link to the full notice. For example, a service enquiry form might say:</p>
          <blockquote>
            <p>We will use the details you submit to review your request and contact you about the service. Read our <Link href="/privacy-policy">Privacy Policy</Link> for information about how enquiry details are handled and how to contact us with a privacy question.</p>
          </blockquote>
          <p>This is an example of clear placement, not legal wording to copy unchanged. Adjust it to match the information collected, the purpose, the recipients and the actual policy. If the form also offers marketing updates, present that as a separate choice with its own explanation.</p>
          <p>Make the privacy link readable on a phone, open the correct page and remain available before submission. Do not hide it in faint text or make the visitor guess what happens after pressing the button.</p>

          <h2>10. Test the complete enquiry journey</h2>
          <p>After updating the notice, test the live website as a customer would. Use a real mobile device and a test enquiry address controlled by your team. Check the following:</p>
          <ul>
            <li>The form collects only the fields the business actually needs.</li>
            <li>The short explanation and full privacy notice are visible before submission.</li>
            <li>The notice matches the current form, inbox, CRM and third-party tools.</li>
            <li>The enquiry reaches the correct monitored destination.</li>
            <li>Only authorised team members can access enquiry records.</li>
            <li>Any separate marketing choice is clear and is not pre-selected.</li>
            <li>Analytics and advertising tags behave consistently with the site's stated choices and configuration.</li>
            <li>The privacy contact route works and has an assigned owner.</li>
            <li>The team knows how long different enquiry records are kept and how old records are reviewed.</li>
          </ul>
          <p>Also check the site's fallback route if the form fails. Our guide to <Link href="/blog/website-form-emails-spam-uae">website contact-form emails going to spam</Link> covers notification reliability. If you offer WhatsApp as an alternative, confirm that the button opens the correct business conversation and that staff know how to handle the resulting enquiry.</p>

          <h2>Common privacy-page mistakes to avoid</h2>
          <ul>
            <li><strong>Copying a competitor:</strong> their vendors, forms, retention rules and legal position may be different.</li>
            <li><strong>Listing tools that are not installed:</strong> inaccurate disclosures reduce trust and confuse customers.</li>
            <li><strong>Ignoring tools that are installed:</strong> an analytics tag or chat widget can matter even if it is not part of the visible form.</li>
            <li><strong>Using one blanket checkbox:</strong> separate a service request from optional marketing preferences.</li>
            <li><strong>Promising unlimited security or instant deletion:</strong> describe real controls and workable retention procedures.</li>
            <li><strong>Leaving an unmonitored contact address:</strong> assign an owner and test the route.</li>
            <li><strong>Never reviewing the page again:</strong> revisit it whenever forms, vendors, analytics or business practices change.</li>
          </ul>

          <h2>A simple review worksheet for a UAE service business</h2>
          <p>Before publishing or revising a privacy notice, ask the person responsible for the website and the person responsible for customer enquiries to complete this short review together:</p>
          <ul>
            <li><strong>Website owner:</strong> Which forms, chat tools, analytics tags and uploads are active?</li>
            <li><strong>Enquiry owner:</strong> Which details does the team need to respond and arrange the service?</li>
            <li><strong>System owner:</strong> Which inboxes, CRM accounts and providers can access the information?</li>
            <li><strong>Business owner:</strong> What are the purposes, retention rules and authorised users?</li>
            <li><strong>Privacy contact:</strong> Who receives questions or requests, and how are they escalated?</li>
            <li><strong>Legal adviser:</strong> Which UAE or other data-protection regime applies, and what wording or controls need specialist review?</li>
          </ul>
          <p>Keep the completed worksheet with your website handover and operations records. Review it whenever you add a form field, change a CRM, install a marketing tag or appoint a new provider.</p>

          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}

          <div className="blog-cta">
            <h2>Want a clearer, more trustworthy enquiry journey?</h2>
            <p>FixLeads Studio can review how your website presents its forms, contact options, privacy links and mobile experience. For legal interpretation or a compliance decision, speak with a qualified UAE privacy adviser.</p>
            <a className="btn" href={wa("Hi FixLeads Studio, I'd like a free website review focused on my enquiry forms, privacy links and customer journey.")} target="_blank" rel="noopener noreferrer">Request a free website review</a>
            <p><Link href="/pricing">View website packages</Link> · <Link href="/contact">Contact FixLeads Studio</Link></p>
          </div>
        </div>
      </section>
    </article>
  </>;
}
