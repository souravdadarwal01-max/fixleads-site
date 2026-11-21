import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "How to Stop Spam Website Enquiries Without Blocking Real Customers in the UAE";
const description = "A practical guide for Dubai and UAE service businesses to reduce bot and junk form submissions with validation, honeypots, rate limits, verification and better monitoring.";
const image = "/stop-spam-website-enquiries-uae.svg";
const url = SITE.url + "/blog/stop-spam-website-enquiries-uae";

const faqs = [
  ["Why is my UAE business website receiving fake enquiries?", "Public forms can be reached by automated scripts as well as people. Some submissions are bot-generated, some are manual spam, and others are genuine enquiries that do not match your services. Review the pattern before choosing a control."],
  ["Will adding a CAPTCHA stop all website spam?", "No. A challenge can reduce some automated submissions, but it is not a complete defence and can add friction for genuine visitors. Combine it with server-side validation, sensible rate limits and monitoring."],
  ["Is a hidden honeypot field enough to protect a contact form?", "No. A honeypot is a low-friction signal that can catch simple bots. More capable automation may ignore it, so keep server-side checks and rate limits in place."],
  ["Should I block visitors from outside the UAE?", "Usually not as a first step. Real customers, property owners and business contacts may be travelling or using mobile networks outside the UAE. Use evidence about the form behaviour and service fit rather than blocking an entire country."],
  ["Does Cloudflare Turnstile work if my website is not hosted on Cloudflare?", "Cloudflare documents Turnstile as usable independently of the Cloudflare network. You still need to embed the widget and validate its token on your own server using Siteverify."],
  ["What is the difference between form spam and form emails going to spam?", "Form spam means unwanted submissions are reaching the website. Email deliverability means a genuine submission may be accepted but its notification is delayed, rejected or filtered. Check the form's stored submission and the email provider's delivery logs separately."]
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished: "2026-11-21",
    dateModified: "2026-11-21",
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
  title: "Stop Spam Website Form Submissions in the UAE",
  description,
  alternates: { canonical: "/blog/stop-spam-website-enquiries-uae" },
  openGraph: {
    title: "How to Stop Spam Website Enquiries Without Blocking Real Customers",
    description,
    type: "article",
    url: "/blog/stop-spam-website-enquiries-uae",
    images: [{ url: image, alt: "Website enquiry form protected by a layered spam filter" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Spam Website Form Submissions in the UAE",
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
          <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · WEBSITE RELIABILITY · UAE GUIDE</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="blog-meta">Published November 21, 2026 · 13 min read</p>
          <img src={image} alt="A website enquiry form passing through layered checks before reaching a business inbox" className="blog-hero-image" width="1200" height="630" fetchPriority="high" />
        </div>
      </section>

      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>A contact form should make it easier for a customer to ask about an AC repair, plumbing visit, cleaning service or maintenance contract. But once a public form attracts automated junk submissions, the team can spend more time sorting noise than responding to real enquiries.</p>

          <p>The answer is not to make every visitor solve a puzzle or to block every unfamiliar country. Those shortcuts can frustrate genuine customers, especially people using mobile networks, privacy tools or a connection outside the UAE. A better approach is to identify the type of unwanted submission, add a few low-friction checks, and introduce stronger verification only when the evidence calls for it.</p>

          <div className="industry-checklist">
            <p><strong>The practical rule:</strong> protect the form at more than one layer. Validate the submission on the server, add a simple honeypot and sensible rate limits, then use a managed challenge for suspicious traffic if needed. Keep a clear path for genuine customers who have trouble submitting the form.</p>
          </div>

          <h2>1. Identify what is actually going wrong</h2>
          <p>Before changing the form, review a sample of recent submissions. Look for patterns rather than assuming every unfamiliar message is a bot.</p>
          <ul>
            <li><strong>Automated junk:</strong> repeated messages, random strings, irrelevant links or many submissions arriving within a short period.</li>
            <li><strong>Manual spam:</strong> a person or scripted operator sends promotional messages, unrelated offers or repeated sales pitches.</li>
            <li><strong>Wrong-fit enquiries:</strong> a real person asks for a service, location or job type the business does not provide.</li>
            <li><strong>Delivery problems:</strong> the form may have accepted a real enquiry, but the notification email was filtered, delayed or sent to the wrong inbox.</li>
          </ul>
          <p>These problems need different responses. If the website is accepting genuine submissions but the notification email is missing, start with the separate <Link href="/blog/website-form-emails-spam-uae">website contact-form email deliverability checklist</Link>. This guide focuses on unwanted submissions reaching the form endpoint.</p>
          <p>Keep a short record of the date, form page, broad pattern and action taken. Do not paste customer names, phone numbers or message contents into a public spreadsheet or analytics tool just to count spam. A small sample is often enough to spot repeated patterns.</p>

          <h2>2. Ask for only the information needed to respond</h2>
          <p>Every extra field creates another chance for a visitor to abandon the form and another field that your business must validate and protect. A local service enquiry often needs only a name, one contact method, the service requested, an area or emirate, and a short description. Ask for photos or a detailed address only when they help the team assess or arrange the job.</p>
          <p>Keep validation on the server as well as in the browser. Browser checks improve the visitor experience, but a bot can send a request directly to the endpoint without using your page. The server should check that required fields exist, values are within sensible length limits, email and phone formats are plausible, and unexpected fields or oversized payloads are handled safely.</p>
          <p>Do not rely on a single rigid phone-number pattern that accepts only one UAE format. Customers may enter a local number, an international format or a number while travelling. Validate for a usable contact method, then let your team clarify details if necessary.</p>
          <p>For the customer-facing side of the form, see the <Link href="/blog/website-quote-form-conversion-uae">guide to quote forms that are easier to complete</Link>. The goal is to remove unnecessary friction while making the server's acceptance rules clear and consistent.</p>

          <h2>3. Add a honeypot as a quiet first filter</h2>
          <p>A honeypot is an extra form field that normal visitors do not see or use. Some basic bots fill every field they find, including the hidden one. Your server can treat a completed honeypot as a suspicious signal and reject or quarantine the submission.</p>
          <p>Use a proper label and keep the field out of the keyboard tab order and accessibility tree. Do not make it a visible question that real customers must answer. The server—not a front-end script—must decide what to do when the field contains a value.</p>
          <p>A honeypot is inexpensive and adds little friction, but it is not a complete anti-spam system. More capable bots can identify hidden fields and skip them. OWASP includes honeypots among layered bot controls, not as a replacement for validation or rate limiting. See its <a href="https://cheatsheetseries.owasp.org/cheatsheets/Bot_Management_and_Anti-Automation_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">Bot Management and Anti-Automation guidance</a>.</p>

          <h2>4. Limit repeated submissions without blocking shared networks</h2>
          <p>Rate limiting restricts how frequently a form endpoint can be used. It can slow a simple script that sends dozens of requests in a short period, but the limit needs to fit the way real customers use the site.</p>
          <p>Start with the form endpoint, not the whole website. Consider a modest limit by source IP and endpoint, then review legitimate traffic before tightening it. An office, apartment building, hotel or mobile carrier can place many real people behind the same public IP address. A very strict IP-only rule can therefore block several genuine visitors who share a connection.</p>
          <p>Do not automatically reject all traffic from outside the UAE. A customer may be arranging a property service while abroad, using a corporate VPN or travelling. Location can be one signal when it is relevant, but it should not replace the service-area question or the actual pattern of requests.</p>
          <p>OWASP recommends layered controls and rate limits at relevant levels. Its guidance also warns against assuming one signal proves abuse. For a small business, the practical starting point is a per-form limit, basic server validation and a review process for borderline submissions—not a complex fingerprinting system.</p>

          <h2>5. Use a verification challenge when the evidence justifies it</h2>
          <p>If a public form continues to receive automated submissions after basic controls are in place, consider a managed challenge such as Cloudflare Turnstile or Google's reCAPTCHA. Choose based on your website platform, server integration, accessibility needs, data handling and the way the provider's current service works. A challenge should be a measured step, not an automatic requirement on every page.</p>

          <h3>Cloudflare Turnstile: verify the token on the server</h3>
          <p>Cloudflare's documentation is explicit that adding the browser widget alone does not complete the protection. Your server must send the submitted token to the Siteverify API and make the accept-or-reject decision. Turnstile tokens expire after 300 seconds and are intended for one validation. Keep the secret key on the server; never place it in browser code.</p>
          <p>Read <a href="https://developers.cloudflare.com/turnstile/get-started/" target="_blank" rel="noopener noreferrer">Cloudflare's Turnstile setup guide</a> and its <a href="https://developers.cloudflare.com/turnstile/get-started/server-side-validation/" target="_blank" rel="noopener noreferrer">server-side validation instructions</a>. Confirm the expected hostname and configured action where your implementation uses them. If verification fails because a token has expired, show a useful retry message rather than silently losing the customer's enquiry.</p>

          <h3>Google reCAPTCHA v3: treat scores as signals, not verdicts</h3>
          <p>Google describes reCAPTCHA v3 as a score-based system. Your backend should verify the response and the expected action. Google notes that tokens expire after two minutes, so generate the token when the visitor takes the protected action and send it to the server promptly. A score threshold is not a universal truth: review the behaviour of your own site and tune the response to its traffic and risk.</p>
          <p>See Google's <a href="https://developers.google.com/recaptcha/docs/v3" target="_blank" rel="noopener noreferrer">reCAPTCHA v3 developer guide</a>. Whether you use Turnstile, reCAPTCHA or another maintained service, do not trust a browser-only success callback as proof that the request is valid.</p>

          <h2>6. Do not treat every suspicious submission as a reason to hard-block</h2>
          <p>Some genuine customers submit unusual details. A visitor may paste a long address, use a privacy-focused browser, have JavaScript disabled or struggle with a visual challenge. A false positive can cost the business a real enquiry.</p>
          <p>Use graduated responses where your form system supports them:</p>
          <ul>
            <li><strong>Low confidence:</strong> accept the request and record a minimal diagnostic signal.</li>
            <li><strong>Uncertain:</strong> ask for a managed verification step or place the submission in a review queue.</li>
            <li><strong>High confidence:</strong> reject a clearly invalid token, an obviously filled honeypot or a request that breaks server validation.</li>
            <li><strong>Repeated abuse:</strong> apply a tighter endpoint-level limit and review the pattern before expanding the block.</li>
          </ul>
          <p>Keep a fallback contact option visible. If a challenge fails on a customer's phone, they should still be able to call or use the business's published WhatsApp contact route. Do not make a security tool the only way to reach the company.</p>

          <h2>7. Make sure a real submission is saved before notification is sent</h2>
          <p>Anti-spam controls do not fix a broken enquiry workflow. A valid form submission should be accepted by the server, saved to the intended destination and then trigger the notification process. If email delivery fails, the business should have a way to find the accepted enquiry and resend or follow up.</p>
          <p>Test the whole journey after changing a form: submit a genuine test request, confirm the success message, check the stored record, verify the notification arrives and make sure the team knows who owns the response. Our <Link href="/blog/website-enquiry-follow-up-uae">UAE enquiry follow-up guide</Link> explains how to assign and handle incoming leads.</p>
          <p>For reporting, distinguish an accepted form submission from a click on the submit button. A click does not prove that the server stored the enquiry. If you measure website actions in GA4, review the <Link href="/blog/track-whatsapp-clicks-ga4">guide to tracking calls and WhatsApp clicks</Link> and keep form success, phone taps and WhatsApp clicks as separate events.</p>

          <h2>8. Protect customer information while filtering spam</h2>
          <p>Anti-spam systems may process IP addresses, browser signals, form content or verification tokens. Collect only what is needed to operate the form and investigate abuse. Avoid storing raw device fingerprints or full request payloads indefinitely, and restrict access to submission logs.</p>
          <p>If you use a third-party challenge or security provider, understand what information is sent to it and reflect the relevant processing in your privacy information where required. The UAE Government's <a href="https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws" target="_blank" rel="noopener noreferrer">overview of data protection laws</a> explains the federal Personal Data Protection Law and notes that other regimes may also apply. The exact legal position depends on the business, location and activity, so obtain qualified advice for compliance decisions.</p>
          <p>For a practical website starting point, see our <Link href="/blog/uae-website-privacy-notice-checklist">UAE website privacy notice checklist</Link>. This article is operational guidance, not legal advice.</p>

          <h2>A practical rollout plan for a small service business</h2>
          <ol>
            <li><strong>Review recent submissions:</strong> separate automated junk, manual spam, wrong-fit enquiries and email-delivery problems.</li>
            <li><strong>Improve the form:</strong> remove unnecessary fields, set sensible length limits and validate every request on the server.</li>
            <li><strong>Add low-friction controls:</strong> use a honeypot and a carefully tuned endpoint-level rate limit.</li>
            <li><strong>Introduce a challenge only if needed:</strong> implement server-side verification and test the failure and retry path.</li>
            <li><strong>Test as a customer:</strong> complete the form on a phone and desktop, confirm that the request is saved and verify the notification.</li>
            <li><strong>Review weekly:</strong> compare unwanted submissions, genuine enquiries, false positives and the time your team spends sorting them.</li>
          </ol>

          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}

          <div className="blog-cta">
            <h2>Not sure why your website is receiving junk enquiries?</h2>
            <p>FixLeads Studio can review your contact form, mobile enquiry journey and basic tracking, then suggest practical improvements without adding unnecessary steps for genuine customers.</p>
            <a className="btn" href={wa("Hi FixLeads Studio, I'd like a free review of spam submissions and the enquiry form on my UAE business website.")} target="_blank" rel="noopener noreferrer">Request a free website review</a>
            <p className="muted">You can also <Link href="/contact">send us a website enquiry</Link> or review our <Link href="/pricing">website packages</Link>.</p>
          </div>

          <h2>Official references and further reading</h2>
          <ul>
            <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Bot_Management_and_Anti-Automation_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP: Bot Management and Anti-Automation Cheat Sheet</a></li>
            <li><a href="https://developers.cloudflare.com/turnstile/get-started/" target="_blank" rel="noopener noreferrer">Cloudflare Turnstile: Get started</a></li>
            <li><a href="https://developers.cloudflare.com/turnstile/get-started/server-side-validation/" target="_blank" rel="noopener noreferrer">Cloudflare Turnstile: Validate the token on your server</a></li>
            <li><a href="https://developers.google.com/recaptcha/docs/v3" target="_blank" rel="noopener noreferrer">Google reCAPTCHA v3: Developer guide</a></li>
            <li><a href="https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws" target="_blank" rel="noopener noreferrer">UAE Government: Data protection laws</a></li>
          </ul>
          <p className="muted">Security products, service features and applicable legal requirements can change. Check the current provider documentation and obtain professional advice for legal or privacy questions before implementation.</p>
          <p className="muted"><Link href="/blog">← Back to all guides</Link></p>
        </div>
      </section>
    </article>
  </>;
}
