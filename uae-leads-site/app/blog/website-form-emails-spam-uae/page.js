import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Website Contact Form Emails Going to Spam? A UAE Business Checklist";
const description = "Troubleshoot missing website enquiries with a practical UAE business guide to SPF, DKIM, DMARC, form sender settings, email testing and backup notifications.";
const image = "/website-email-authentication-uae.svg";
const url = SITE.url + "/blog/website-form-emails-spam-uae";
const faqs = [
  ["Why does my website form say submitted when no email arrives?", "The form may have saved the submission while the notification email failed, bounced, went to spam or was sent to a different address. Check the form's submission log and the sending provider's delivery log separately."],
  ["Do I need SPF, DKIM and DMARC for a small UAE business website?", "Google's published minimum for senders to personal Gmail accounts is SPF or DKIM, while bulk senders above its daily threshold must use SPF, DKIM and DMARC. Google recommends all three for sending domains. They improve authentication but do not guarantee inbox placement."],
  ["Can I use the visitor's email address in the From field?", "Usually, no. Send the notification from an address on your own authenticated domain and put the visitor's address in Reply-To. Using a visitor's Gmail or other domain as your website's From address can fail authentication and misrepresent who sent the message."],
  ["Can I publish more than one SPF record?", "No. Publish one SPF record for each sending domain or subdomain and include every legitimate sending service in that record. Multiple SPF records for the same domain can cause authentication errors."],
  ["Does a DMARC p=none record fix spam delivery?", "No. p=none is a monitoring policy, not an inbox-placement fix. It lets you review authentication results without asking receivers to quarantine or reject failing mail. Correct the sending setup and review reports before considering a stricter policy."]
];

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished: "2026-11-09",
    dateModified: "2026-11-09",
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

const seoTitle = "Website Form Emails Going to Spam? UAE Business Guide";

export const metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: "/blog/website-form-emails-spam-uae" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/website-form-emails-spam-uae",
    images: [{ url: image, alt: "How SPF, DKIM and DMARC help authenticate website enquiry emails" }]
  },
  twitter: { card: "summary_large_image", title: seoTitle, description, images: [image] }
};

export default function Article() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <article>
      <section className="hero">
        <div className="wrap narrow">
          <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · WEBSITE RELIABILITY</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="blog-meta">Published November 9, 2026 · 12 min read</p>
          <img src={image} alt="Diagram showing a website enquiry passing through an authenticated email service before reaching a business inbox" className="blog-hero-image" width="1400" height="900" fetchPriority="high" />
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>A customer fills in your Dubai AC repair, cleaning or plumbing quote form. The page displays a success message, but the office inbox stays empty. The customer assumes the request has been received; the business team never sees it. This is more than an email inconvenience: it can break the hand-off between your website and the people who respond to enquiries.</p>
          <p>There are several possible causes. The form might not have saved the submission, the website may have failed to send its notification, the receiving mailbox may have filtered it, or the message may not be authenticated correctly. This guide explains how to investigate the whole route before changing DNS records at random.</p>

          <h2>First, separate a form submission from an email notification</h2>
          <p>A form usually has at least two separate jobs: accept and process the visitor's details, then notify someone that a new enquiry has arrived. A green success message does not prove that the notification reached the intended inbox.</p>
          <p>Check these points in order:</p>
          <ol>
            <li><strong>Submission:</strong> Does the form provider, website dashboard or CRM show the submitted entry?</li>
            <li><strong>Sending:</strong> Does the website or email provider show that a notification was attempted?</li>
            <li><strong>Delivery:</strong> Was the message accepted, deferred, bounced or rejected?</li>
            <li><strong>Mailbox:</strong> Did it arrive in spam, junk, quarantine, a rule-based folder or a different recipient inbox?</li>
          </ol>
          <p>If there is no saved submission, investigate the form, validation and server-side handling first. If the entry exists but no notification was delivered, inspect the mail-sending route. For a better enquiry workflow after delivery, see our guide to <Link href="/blog/website-enquiry-follow-up-uae">following up on website enquiries</Link>.</p>

          <h2>Understand SPF, DKIM and DMARC</h2>
          <p>These are three related email-authentication methods. They help receiving services check whether a message is authorised to use a domain and whether the visible sender identity is consistent with the authenticated sender.</p>
          <ul>
            <li><strong>SPF (Sender Policy Framework):</strong> A DNS record that identifies which sending services are authorised to send mail for a domain's envelope sender. If your website sends through a third-party provider, that provider may need to be included in the domain's existing SPF configuration.</li>
            <li><strong>DKIM (DomainKeys Identified Mail):</strong> A digital signature added to outgoing messages. The receiving server checks the signature against a public key published in DNS. Your email provider normally supplies the selector and DNS value.</li>
            <li><strong>DMARC:</strong> A policy and reporting mechanism that checks whether SPF or DKIM authentication aligns with the domain shown in the message's From address. It also tells receiving systems how to handle messages that fail the policy.</li>
          </ul>
          <p>Google's published guidance says all senders to personal Gmail accounts must use SPF or DKIM, while senders delivering more than 5,000 messages per day to Gmail must use SPF, DKIM and DMARC. Google recommends all three for sending domains generally. Those bulk-sender requirements are not a reason to treat a few website alerts as a marketing campaign, but the authentication practices are still worth implementing for a business domain. Read <a href="https://support.google.com/mail/answer/81126?hl=en" target="_blank" rel="noopener noreferrer">Google's email sender guidelines</a> for the current requirements.</p>
          <p>Authentication reduces avoidable trust problems, but it cannot guarantee that every message reaches the inbox. Reputation, recipient filters, message content, sending behaviour and provider-specific controls also matter.</p>

          <h2>Use the right From and Reply-To addresses</h2>
          <p>A common form configuration mistake is placing the visitor's email address in the message's From field. For example, a visitor enters a Gmail address, and the website tries to send a notification that appears to come from that Gmail account. Your website is not authorised to send on behalf of the visitor's domain, so authentication and DMARC alignment can fail.</p>
          <p>A safer pattern is:</p>
          <ul>
            <li><strong>From:</strong> Website Enquiries &lt;website@yourbusinessdomain.com&gt; — an address on the domain you control and have configured with your mail provider.</li>
            <li><strong>Reply-To:</strong> The email address entered by the visitor.</li>
            <li><strong>To:</strong> The business inbox that is monitored for new requests.</li>
            <li><strong>Subject:</strong> A clear label such as “New website quote request — AC maintenance”.</li>
          </ul>
          <p>Use a real sending mailbox or provider-approved sender identity. If replies to the From address are not monitored, make that clear in the message and keep the visitor's address in Reply-To. Do not use a random address or a free-mail address that your website does not control.</p>

          <h2>Audit DNS without creating a second SPF record</h2>
          <p>Find out which service actually sends the website notification. It may be your hosting provider, Google Workspace, Microsoft 365, a form platform or a dedicated transactional email service. The correct DNS values depend on that provider and on every other system already sending email for your domain.</p>
          <ol>
            <li><strong>Identify every sender.</strong> List the mailbox provider, website form sender, CRM, invoicing platform and any newsletter service that sends using your domain.</li>
            <li><strong>Check the existing SPF record.</strong> There should be one SPF TXT record for a domain or subdomain. Add authorised sources to the existing record using the provider's instructions; do not publish a second SPF record. Microsoft's <a href="https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure" target="_blank" rel="noopener noreferrer">SPF setup guidance</a> explains the single-record rule and common DNS errors.</li>
            <li><strong>Enable DKIM with the sending provider.</strong> Generate or obtain the provider's DKIM selector and public key, publish the exact DNS record it supplies, then enable signing in that provider's dashboard.</li>
            <li><strong>Publish or review DMARC.</strong> DMARC normally uses a TXT record at the _dmarc host. Start with a monitoring approach such as p=none if you are introducing it and need to discover legitimate senders. Microsoft explains the policy options and alignment in its <a href="https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure" target="_blank" rel="noopener noreferrer">DMARC configuration guide</a>.</li>
            <li><strong>Allow for DNS changes to propagate.</strong> Recheck the records using your provider's tools after the change. A DNS editor saving a record does not mean every receiving service sees the new value immediately.</li>
          </ol>
          <p>Do not copy an SPF, DKIM or DMARC value from a generic tutorial and paste it into your domain. A record designed for Google Workspace may be wrong for Microsoft 365 or another email platform. If you use multiple senders, removing an existing include or publishing a stricter policy without reviewing all senders can interrupt legitimate mail.</p>

          <h2>Send website notifications through an authenticated service</h2>
          <p>Ask your developer or form provider which delivery method is configured. Prefer a supported authenticated SMTP connection or email API from a reputable provider over an unmonitored server-side mail function. Use the provider's current host, port, TLS and authentication instructions; do not guess them.</p>
          <p>Keep mail credentials in server-side environment variables or the provider's secure integration settings. Never put a mailbox password, API key or SMTP secret in browser code, a public repository or a form's visible HTML. If the website is moved to a new host, confirm that its sending route and DNS authorisation are updated too.</p>
          <p>Also check the recipient address carefully. A typo in the notification destination, a mailbox that has reached its storage limit, an outdated forwarding rule or a spam filter can look like a website delivery problem even when the sender is authenticated.</p>

          <h2>Test the complete enquiry route</h2>
          <p>After making changes, submit a real test enquiry using an address you control. Test more than one receiving provider where possible, such as Gmail and Outlook. Confirm that the submission is saved, the notification arrives, the Reply-To address is correct and the team can respond.</p>
          <p>For a message delivered to Gmail, open the message details and choose “Show original”. Review the authentication results. SPF, DKIM and DMARC should show the expected pass results for the sending route; if a result is missing or fails, compare the domain in the result with the domain shown in From. A basic SPF pass alone does not prove DMARC alignment.</p>
          <p>Keep a simple test record with the date, form page, test address, delivery result and any provider error. If a message is rejected, save the full bounce or SMTP error for the email provider or developer. A vague note saying “the form is broken” is much harder to troubleshoot.</p>

          <h2>Keep a backup route for important enquiries</h2>
          <p>Email should not be the only place a valuable quote request exists. Where the form platform supports it, keep submissions in a protected dashboard, CRM or database and restrict access to the people who need it. Configure a second alert route only if it can be monitored and maintained; adding more notifications without an owner can create noise rather than resilience.</p>
          <p>Review who receives alerts when staff change, when an employee leaves or when the business changes its mailbox provider. Test the route after website updates, form edits, domain changes and hosting migrations. Our <Link href="/blog/website-backup-security-uae">website backup and security checklist</Link> covers wider recovery planning, while <Link href="/blog/domain-hosting-email-uae-business">the domain, hosting and business email guide</Link> explains how those services fit together.</p>

          <h2>Website enquiry email troubleshooting checklist</h2>
          <ul>
            <li>Confirm the form entry is actually saved, not just acknowledged on screen.</li>
            <li>Check the sending provider's delivery log and any bounce or rejection message.</li>
            <li>Verify the notification recipient and the mailbox's spam, junk and quarantine folders.</li>
            <li>Use an authorised business-domain address in From and the visitor's address in Reply-To.</li>
            <li>Confirm that the sending provider is included in the one existing SPF record.</li>
            <li>Enable DKIM signing and publish the provider's exact DNS record.</li>
            <li>Review DMARC alignment and begin with monitoring before enforcing a strict policy.</li>
            <li>Test with Gmail and Outlook and inspect the authentication results.</li>
            <li>Keep a secure copy of submissions and test alerts after website or DNS changes.</li>
            <li>Document who owns the inbox and who handles failed notifications.</li>
          </ul>

          <h2>Frequently asked questions</h2>
          {faqs.map(([q, a]) => <div key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="blog-cta">
            <h2>Are website enquiries reaching the right inbox?</h2>
            <p>We can review your website contact journey, form behaviour and technical setup, then identify practical improvements for your UAE business.</p>
            <a className="btn" href={wa("Hi, I would like a review of my website contact form and enquiry email setup.")}>Request a free website review</a>
          </div>
          <p>Explore our <Link href="/pricing">website packages</Link>, read more <Link href="/blog">FixLeads Studio guides</Link>, or see <Link href="/how-it-works">how our website process works</Link>.</p>
          <p className="muted">Technical references reviewed on November 9, 2026. Provider-specific DNS records and interfaces can change; use the instructions generated for your own sending service.</p>
          <p className="muted"><Link href="/blog">← Back to all guides</Link></p>
        </div>
      </section>
    </article>
  </>;
}
