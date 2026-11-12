import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "Website Handover Checklist for UAE Businesses: What to Collect";
const description = "Use this UAE website handover checklist to secure your domain, hosting, source code, analytics, backups and business accounts when changing web developers.";
const seoTitle = "Website Handover Checklist UAE: Domain, Access & Files";
const image = "/website-handover-checklist-uae.svg";
const url = SITE.url + "/blog/website-handover-checklist-uae";
const faqs = [
  ["What should a website handover include?", "It should include control of the domain and DNS, hosting or deployment account, website administrator access, source files or platform access, content and media, analytics and search accounts, enquiry integrations, backups, licences, renewal dates and a clear support contact."],
  ["Should my web design agency own my domain name?", "The business should know who the registered domain holder is and retain practical control of the registrar account and recovery details. A provider can manage DNS or renewals with delegated access, but the business should not be dependent on an individual employee's personal account."],
  ["Can I change my web developer without changing my website address?", "Usually, yes. A provider change does not require a new domain. Plan the hosting or deployment move, preserve DNS and email records, test the new site and keep existing URLs or map redirects before changing the live destination."],
  ["How do I transfer a .ae domain to another registrar?", "The TDRA's published .aeDA process says to choose an accredited registrar, obtain the domain auth-code and ask the new registrar to arrange the transfer. Check the current registrar and registry instructions for your specific domain before starting."],
  ["Who should own Google Analytics and Search Console?", "Keep the main account and property ownership with the business or a trusted business-controlled account. Give agencies and contractors their own user access at the level needed for their work, then review and remove access when the engagement ends."],
  ["Should I send passwords and API keys in the handover document?", "No. Record which systems exist and who controls them, but transfer passwords, recovery codes and API secrets through a secure password manager or approved secrets-sharing process. Rotate credentials that the outgoing provider knew."]
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [SITE.url + image],
    datePublished: "2026-11-12",
    dateModified: "2026-11-12",
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
];

export const metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: "/blog/website-handover-checklist-uae" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/website-handover-checklist-uae",
    images: [{ url: image, alt: "Website handover checklist showing domain, website, analytics and account access" }]
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
          <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · WEBSITE OWNERSHIP · UAE GUIDE</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="blog-meta">Published November 12, 2026 · 12 min read</p>
          <img src={image} alt="A website handover checklist covering domain ownership, hosting, website files and marketing accounts" className="blog-hero-image" width="1200" height="630" fetchPriority="high" />
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>A website can look finished while the business still depends on a former developer for the domain login, hosting account, analytics reports or even the ability to publish a small change. That becomes a problem when a contract ends, a staff member leaves, a company changes agencies or a website needs to be moved to a new platform.</p>
          <p>For a Dubai or UAE service business, a proper handover is more than receiving a link and an administrator password. It is a documented transfer of control, access, files, operating knowledge and renewal responsibilities. The goal is simple: the business can keep its website and customer enquiries running without relying on one person's private account.</p>
          <p>Use this checklist when a new website is launched, when you replace a provider or when you want to review who controls your existing digital assets. The exact items depend on your platform and contract, so record what applies rather than assuming every website uses the same tools.</p>

          <h2>Start with one rule: the business controls the master accounts</h2>
          <p>Keep the primary owner account for important business assets under an email address and recovery method controlled by the business. A web agency, freelancer or employee can be invited as a user with the access required for their work. That is safer than making the business dependent on a personal Gmail account, a former employee's phone or a supplier's shared login.</p>
          <p>Use named user accounts wherever a platform supports them. Enable multi-factor authentication, keep recovery details current and store emergency access instructions in an approved password manager. Do not place passwords, recovery codes or API keys in an ordinary handover spreadsheet or email thread.</p>

          <h2>1. Domain name and DNS records</h2>
          <p>Your domain is the address customers use to reach the website and often the foundation for business email. Confirm the registered domain holder, registrar, account owner, recovery email, renewal date and payment responsibility. The company should be able to sign in or recover access without asking the outgoing provider to do it.</p>
          <p>Collect a current copy of the DNS configuration or a readable record of every active entry. At minimum, identify the nameservers and the records used for the website and email, including A, AAAA, CNAME, MX and relevant TXT records. TXT records may contain verification and email-authentication information such as SPF, DKIM and DMARC. Do not delete records simply because they look unfamiliar.</p>
          <p>Before a DNS or hosting change, compare the old and new records and confirm who will make the change, when it will happen and how it can be reversed. A website move can appear successful while email stops working if mail-related records are missed. For background, see our guide to <Link href="/blog/domain-hosting-email-uae-business">domains, hosting and business email for UAE websites</Link>.</p>
          <p>If the business uses a <strong>.ae</strong> domain, follow the .aeDA process rather than assuming that a .com registrar-transfer guide applies. The <a href="https://tdra.gov.ae/en/aeda/services/registering-a-domain-name/changing-your-domain-names-registrant" target="_blank" rel="noopener noreferrer">TDRA's published .ae domain transfer instructions</a> explain the role of an accredited registrar and the domain auth-code. Check the current instructions and the registered contact email before requesting a transfer. For generic domains, <a href="https://www.icann.org/resources/pages/about-transfer-policy-2017-10-10-en" target="_blank" rel="noopener noreferrer">ICANN's registrant transfer guidance</a> explains why the registered holder and accurate contact details matter.</p>

          <h2>2. Hosting, source code and deployment access</h2>
          <p>Write down where the live website is hosted and which account pays for it. This might be a traditional hosting provider, a managed WordPress service, a cloud platform or a deployment service. Record the account URL, business owner, billing contact, plan, renewal date and support route.</p>
          <p>Ask for the items that match the actual build:</p>
          <ul>
            <li><strong>Source repository:</strong> the GitHub or other code repository, its organisation or owner, the production branch and the people who can access it.</li>
            <li><strong>Deployment setup:</strong> the hosting project, connected repository, build settings, domains, redirects and the steps used to publish a release.</li>
            <li><strong>Application configuration:</strong> a list of required environment-variable names and what each one is for. Transfer secret values securely; never paste live credentials into a public repository or an ordinary document.</li>
            <li><strong>Database and storage:</strong> where content, form submissions, uploaded files and backups are stored, plus the export or restore process where applicable.</li>
            <li><strong>Infrastructure notes:</strong> CDN, DNS provider, SSL certificate arrangement, scheduled tasks, external APIs and any service that would need attention during a move.</li>
          </ul>
          <p>If the website uses a visual builder rather than custom code, the equivalent handover is the platform account, site workspace, editable design, connected domain, integrations and export options. Do not request a code repository that the platform does not provide; request the editable assets and documented access that do exist.</p>

          <h2>3. Website administrator, content and licensed assets</h2>
          <p>Test that a business representative can sign in to the website's content management system or site builder with their own account. Confirm the administrator role, password recovery method and how to add another authorised user. Remove unused accounts only after the new owner has verified that the site can still be managed.</p>
          <p>Collect the editable content and assets needed to maintain the site: page copy, images, logos, brand files, design source files, downloadable documents, form configuration and any custom components. Record where original photographs and illustrations came from and whether their licence permits continued use or transfer. A paid theme, plugin, font, stock photo or booking tool may have licence conditions tied to a particular account or site; check the provider's terms instead of assuming a licence can be reassigned.</p>
          <p>Also request a page and URL list, the current navigation structure, important redirects and a short note explaining any custom behaviour. This is especially useful when the new provider needs to update a service page without accidentally changing its URL or removing useful content.</p>

          <h2>4. Analytics, Search Console and advertising accounts</h2>
          <p>Make sure the business can access the accounts used to understand website performance. That commonly includes Google Analytics 4, Google Tag Manager, Google Search Console and any advertising account connected to the site. Record the property or container name, measurement ID where relevant, owner account and the people who currently have access.</p>
          <p>For Search Console, Google distinguishes verified and delegated owners from full and restricted users. Owners can manage users, and a verified owner's token may allow access to be regained if it remains on the site. The business should verify its own ownership and review the user and verification-token lists before removing an outgoing provider. Follow <a href="https://support.google.com/webmasters/answer/7687615?hl=en" target="_blank" rel="noopener noreferrer">Google's Search Console owner and permissions guidance</a>.</p>
          <p>In Google Analytics, account and property access are managed through role assignments. Keep the property in a business-controlled account and invite the new provider with the level of access needed. Google's <a href="https://support.google.com/analytics/answer/9305587?hl=en" target="_blank" rel="noopener noreferrer">Analytics access-management guide</a> explains the available roles and how permissions are assigned.</p>
          <p>If the website uses Google Tag Manager, record which container is installed and who can publish changes. Do not create a second analytics property or tag simply because a new agency is taking over. First establish what is already installed, what data it collects and whether the existing setup is working.</p>

          <h2>5. Google Business Profile and local marketing assets</h2>
          <p>A local service business may rely on its Google Business Profile for calls, directions and customer discovery. Check who is listed under People and access, who holds primary ownership and whether the business can manage the profile without the outgoing agency. Do not create a duplicate profile just to avoid an access discussion.</p>
          <p>Google says only the primary owner can transfer primary ownership. It also applies a seven-day limitation to some actions for newly added owners and managers, so do not leave this until the final hour of a provider change. Read <a href="https://support.google.com/business/answer/3415281?hl=en" target="_blank" rel="noopener noreferrer">Google's primary ownership transfer instructions</a> and plan the handover with the current owner available.</p>
          <p>For a UAE business, check that the profile's public phone number, website link, opening hours and service areas still match the business. If the company serves customers across Dubai, Sharjah, Ajman or another emirate, record the actual coverage and any branch-specific differences. Our guide to <Link href="/blog/google-business-profile-address-change-uae">updating a Google Business Profile after a business move</Link> covers location changes separately.</p>
          <p>Also list any Meta Business account, Facebook page, Instagram profile, LinkedIn page, Google Ads account, call-tracking service or directory account used for marketing. The business should know who owns each asset and which suppliers have access.</p>

          <h2>6. Enquiry forms, WhatsApp and customer records</h2>
          <p>A website is not fully handed over if the pages load but quote requests go nowhere. Document every enquiry path: contact forms, booking tools, CRM connections, email notifications, phone links, WhatsApp buttons and any call-tracking number.</p>
          <p>For each form, record the fields collected, destination inbox or CRM, notification rules, spam protection and the person responsible for responding. Submit a test enquiry and confirm that it arrives at the right place. Check the WhatsApp link on a real phone and verify that the pre-filled message and destination number are correct. If click tracking is used, test it separately from a completed enquiry; a button click is not proof that a customer message was sent. See <Link href="/blog/track-whatsapp-clicks-ga4">how to track calls and WhatsApp clicks</Link>.</p>
          <p>Customer enquiries may contain names, phone numbers, addresses or job details. Transfer only the records needed for the agreed business purpose, use an approved secure method and confirm who is authorised to access them. Keep customer data out of public repositories, screenshots and general handover documents.</p>

          <h2>7. Backups, security and recovery</h2>
          <p>Ask for a recent full backup and confirm what it contains. Depending on the platform, that may mean website files, database, media uploads, configuration and a copy of the DNS records. A backup is more useful when the new owner knows where it is stored, how often it is updated and how to restore it.</p>
          <p>Where practical, ask the outgoing provider to demonstrate a restore in a safe staging environment or provide clear recovery steps. Confirm who receives security alerts, how software updates are handled and what to do if the website becomes unavailable. Record the current SSL and renewal arrangements, but do not assume that a certificate or backup will automatically move with the hosting account.</p>
          <p>After access has been transferred, review administrator accounts, multi-factor authentication, recovery emails, API keys, deployment tokens and third-party integrations. Rotate any secret that was shared with the outgoing provider. For a deeper maintenance routine, use our <Link href="/blog/website-backup-security-uae">website security and backup checklist</Link> and <Link href="/blog/website-maintenance-cost-uae">website maintenance guide for UAE businesses</Link>.</p>

          <h2>8. Renewals, licences and support responsibilities</h2>
          <p>Create one renewal register rather than relying on invoices in an employee's inbox. Include the domain, hosting, business email, premium plugins, themes, stock assets, booking software, CRM, call tracking and any other recurring service. For each item, note the account owner, billing contact, renewal date, amount or pricing source, cancellation terms and what would stop working if it expired.</p>
          <p>Clarify which tasks are included in any remaining support agreement: content edits, backups, updates, incident response, hosting support or SEO work. Record how to request help and what is outside the agreed scope. If you are comparing ongoing support options, our <Link href="/blog/website-maintenance-cost-uae">website maintenance cost guide</Link> explains the types of work to separate.</p>

          <h2>9. Run a handover test before closing the project</h2>
          <p>Do not treat a shared folder of passwords as acceptance. Ask the business representative to complete a short test using the new access. A simple sign-off checklist is:</p>
          <ul>
            <li>Sign in to the domain registrar and confirm the registered contact and renewal date.</li>
            <li>Open the hosting or deployment dashboard and locate the production website.</li>
            <li>Access the website administrator area and make a safe test edit if appropriate.</li>
            <li>Open the source repository or site-builder workspace and confirm that the business can grant access.</li>
            <li>Submit a test form and confirm the correct inbox or CRM receives it.</li>
            <li>Test phone and WhatsApp links on a mobile device.</li>
            <li>Open GA4, Search Console and the relevant marketing accounts with the new user's access.</li>
            <li>Confirm the Google Business Profile owner and manager list.</li>
            <li>Locate the latest backup and the written restore instructions.</li>
            <li>Check the live site, key URLs, redirects, sitemap and email delivery after any technical change.</li>
          </ul>
          <p>For a new website, combine this with the <Link href="/blog/website-launch-checklist-uae">first-30-days website launch checklist</Link>. If the handover includes a redesign or hosting move, use the <Link href="/blog/website-redesign-seo-checklist-uae">website redesign SEO checklist</Link> to protect existing URLs, redirects and search visibility.</p>

          <h2>A simple handover register to copy</h2>
          <p>Keep a record with one row per asset. The example below shows the information to capture; fill it with your own account names and dates, and keep sensitive credentials in a password manager rather than in the register.</p>
          <ul>
            <li><strong>Domain:</strong> registrar, registered holder, account owner, recovery email, renewal date and DNS export location.</li>
            <li><strong>Hosting or deployment:</strong> platform, project name, billing owner, production domain, support route and rollback instructions.</li>
            <li><strong>Website content:</strong> admin URL, business administrator, source repository or builder workspace, content files and licence notes.</li>
            <li><strong>Marketing:</strong> Search Console property, GA4 property, Tag Manager container, Business Profile and advertising account owners.</li>
            <li><strong>Enquiries:</strong> form destinations, CRM, phone and WhatsApp links, notification rules and test date.</li>
            <li><strong>Recovery:</strong> backup date, storage location, restore steps, security contact and last access review.</li>
            <li><strong>Recurring services:</strong> provider, billing owner, renewal date, cancellation terms and business impact if it expires.</li>
          </ul>
          <p>For each line, add a named business contact, the date access was tested and any action still outstanding. This turns the handover from an informal conversation into a record someone can use six months later.</p>

          <h2>Before you switch providers: a UAE-specific final check</h2>
          <p>Check the details that matter to customers in the UAE: Arabic and English versions if the site offers both, right-to-left navigation, local phone formatting, WhatsApp destinations, branch hours, service-area coverage and the public business address. Confirm that the website, Google Business Profile and any directory listings describe the same real operation.</p>
          <p>If the business uses a .ae domain, check the registrant contact email and the current .aeDA registrar process before a change. If it uses a .com domain, check the registrar's transfer requirements and any applicable ICANN rules. In either case, keep the domain active and do not cancel old hosting or email until the new setup is tested and the required data has been copied.</p>
          <p>A careful handover does not require every business owner to become a developer. It requires the owner to know which accounts exist, who controls them, where the essential files are, how enquiries reach the team and what to do if something stops working.</p>

          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}

          <div className="blog-cta">
            <h2>Planning a new website or changing providers?</h2>
            <p>Start with a clear scope, documented ownership and a practical launch plan. Explore our website packages or ask FixLeads Studio for a review of your current website and customer journey.</p>
            <a className="btn" href={wa("Hi FixLeads Studio, I'd like a website review and advice on website ownership and handover.")} target="_blank" rel="noopener noreferrer">Request a free website review</a>
            <p><Link href="/pricing">View website packages</Link> · <Link href="/contact">Contact FixLeads Studio</Link></p>
          </div>
        </div>
      </section>
    </article>
  </>;
}
