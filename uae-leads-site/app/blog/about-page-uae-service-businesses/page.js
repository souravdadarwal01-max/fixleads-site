import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

const title = "About Us Page for a UAE Service Business: What Customers Need to See";
const description = "Build a useful About Us page for a Dubai or UAE service business. Learn what to explain about your team, experience, service areas, process and proof.";
const image = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85";
const url = SITE.url + "/blog/about-page-uae-service-businesses";
const faqs = [
  ["What should an About Us page include for a service business?", "Explain who the business helps, which services it provides, where it genuinely operates, who customers will deal with, how the work is handled, what evidence supports important claims and how to make an enquiry."],
  ["Does a small or one-person business need an About Us page?", "It can. The page does not need to pretend to be a large company. A sole trader can explain their role, relevant experience, service boundaries, working process and the best way to contact them."],
  ["Can an About Us page improve Google rankings?", "No page guarantees higher rankings. A clear, accurate page can help visitors understand the business and supports a more trustworthy website experience. Use natural language and follow Google's people-first content guidance rather than writing for a ranking formula."],
  ["Should a UAE business show its trade licence on its About page?", "Only publish licence, registration, membership or certification details when they are genuine, current and accurately described. Do not imply an approval, licence or qualification that the business does not hold."],
  ["Should the About Us page be available in Arabic and English?", "If the business serves customers who prefer both languages, a properly translated Arabic and English experience can make the information easier to use. Translate the meaning carefully and check right-to-left layout, contact details and service terminology."]
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [image],
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

const seoTitle = "About Us Page for UAE Service Businesses: What to Include";

export const metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: "/blog/about-page-uae-service-businesses" },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: "/blog/about-page-uae-service-businesses",
    images: [{ url: image, alt: "A small business team discussing how they work with customers" }]
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
          <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · WEBSITE CONTENT</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="blog-meta">Published November 12, 2026 · 11 min read</p>
          <img src={image} alt="A small business team discussing customer work and company processes" className="blog-hero-image" width="1600" height="900" fetchPriority="high" />
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow blog-article">
          <p>A potential customer may understand your service from the homepage, then open the About Us page before deciding whether to call. They are not necessarily looking for a long company history. They want to know whether the business is real, whether it understands their problem, who will handle the work and what they can expect after making contact.</p>
          <p>That decision matters for a Dubai AC maintenance company, an Abu Dhabi cleaning provider, a Sharjah renovation team or a small specialist working across a defined service area. A useful About page connects the business behind the website with the customer who needs the service. It should answer practical questions with specific, verifiable information—not rely on generic claims such as “best quality” or “number one service”.</p>
          <p>This guide explains what to include, what to leave out and how to organise the page so a visitor can quickly decide whether to take the next step.</p>

          <h2>1. Start with who you help—not a long company biography</h2>
          <p>Open with a short explanation of the customer you serve, the work you do and the area you genuinely cover. This gives visitors context before asking them to read your background.</p>
          <p>For example, an AC maintenance business might explain that it handles residential split-unit servicing and planned maintenance for properties in the locations its technicians actually visit. A cleaning company might distinguish between home cleaning, move-in cleaning and commercial contracts. These details are more useful than a broad statement about being passionate about excellence.</p>
          <p>Try to answer three questions in the first paragraph:</p>
          <ul>
            <li><strong>Who is the customer?</strong> Homeowners, tenants, property managers, facilities teams or another clearly defined group.</li>
            <li><strong>What work do you do?</strong> Name the services in plain language rather than relying on internal industry jargon.</li>
            <li><strong>Where do you operate?</strong> Mention only the cities or service areas the business can genuinely cover.</li>
          </ul>
          <p>If the business works remotely, say so. If it visits customers, explain the areas covered. Do not suggest that a company has a staffed Dubai office, branch or workshop if it does not. Clear operating details prevent misunderstandings before a customer makes an enquiry.</p>

          <h2>2. Explain the problem your business is set up to solve</h2>
          <p>Customers usually care less about when a company was founded than whether it understands the situation they are dealing with. Describe the common problem you handle and how your service addresses it.</p>
          <p>A plumbing company could explain how it assesses a reported leak, confirms the work required and communicates any additional work before proceeding. A pest-control provider could explain how it identifies the issue, discusses preparation requirements and describes the follow-up plan that applies to the service. Keep the explanation aligned with the company's actual process.</p>
          <p>A simple structure is:</p>
          <ol>
            <li>Describe the customer's situation in everyday language.</li>
            <li>Explain what your team checks or asks before recommending work.</li>
            <li>Set out how you communicate the scope, timing and next step.</li>
          </ol>
          <p>This is a good place to link visitors to the relevant service pages. For help planning those pages, see <Link href="/blog/pages-service-company-website">what pages a service company website needs</Link> and the broader <Link href="/blog/website-design-uae-service-businesses">website design guide for UAE service businesses</Link>.</p>

          <h2>3. Introduce the real people behind the service</h2>
          <p>If customers will speak to an owner, coordinator, technician or project manager, tell them who does what. A small business does not need a large corporate team page. A short introduction to the owner or key contact can be more credible than a row of anonymous stock portraits.</p>
          <p>Useful details can include:</p>
          <ul>
            <li>The owner's or team's real names and roles, if they are comfortable being named.</li>
            <li>Relevant training, qualifications or professional experience that can be verified.</li>
            <li>The person who handles estimates, bookings or customer updates.</li>
            <li>Real photographs of the team, workplace, tools or completed work, with permission.</li>
          </ul>
          <p>Do not invent staff profiles, qualifications or years of experience to make the company appear larger. If one person manages enquiries and coordinates trusted subcontractors, explain that arrangement accurately. A customer should not be led to expect a full-time in-house team if that is not how the service operates.</p>

          <h2>4. Support important claims with evidence</h2>
          <p>Words such as experienced, certified, insured, approved and trusted are easy to publish but difficult for a visitor to evaluate without context. Replace broad claims with evidence that the business can stand behind.</p>
          <p>Depending on the service, relevant proof may include:</p>
          <ul>
            <li>A current qualification or membership, with the correct issuing body and scope.</li>
            <li>A genuine business registration or licence detail, where the business chooses to publish it and the information is accurate.</li>
            <li>Real project photographs with a short explanation of the work completed.</li>
            <li>A clearly described process, service checklist or example of the information customers receive.</li>
            <li>Genuine customer feedback published with permission and without changing its meaning.</li>
          </ul>
          <p>Never create sample testimonials that look like real customer reviews, use a logo to imply a partnership that does not exist, or publish a certification badge without permission. If a claim cannot be checked, remove it or rewrite it more carefully.</p>
          <p>For ideas on presenting genuine work, read <Link href="/blog/website-project-portfolio-uae">how to build a website project portfolio that earns trust in the UAE</Link>. The <Link href="/blog/dubai-home-service-website-trust-checklist">Dubai home-service website trust checklist</Link> also explains how service details, coverage and proof fit together across the wider site.</p>

          <h2>5. Show customers what happens after they contact you</h2>
          <p>An About page should reduce uncertainty. Briefly explain what happens after a visitor submits a form, calls or sends a WhatsApp message. A simple process might be:</p>
          <ol>
            <li><strong>Initial enquiry:</strong> the customer shares the service needed and the location.</li>
            <li><strong>Clarification:</strong> the business asks for relevant details, photographs or access information where appropriate.</li>
            <li><strong>Scope and estimate:</strong> the business explains the proposed work, price basis and any exclusions before the customer agrees.</li>
            <li><strong>Scheduling:</strong> the customer receives the agreed appointment or project timeline.</li>
            <li><strong>Updates and completion:</strong> the business explains how changes, questions and completion are communicated.</li>
          </ol>
          <p>Use only the steps that match the real operation. If the business cannot promise a fixed response time, do not publish one. If emergency calls are handled differently from routine requests, explain the difference. The aim is to set expectations that the team can consistently meet.</p>
          <p>For the next part of the journey, see <Link href="/blog/website-enquiry-follow-up-uae">how UAE service businesses can follow up on website enquiries</Link>.</p>

          <h2>6. Be precise about UAE locations and service coverage</h2>
          <p>Location information is especially important for businesses that travel to customers. State whether the company serves Dubai, Abu Dhabi, Sharjah or other areas, and describe any practical limits such as selected communities, call-out zones or appointment availability.</p>
          <p>Do not list every UAE city simply to attract searches. If travel fees, minimum job sizes or availability differ by location, explain that customers should confirm the details when requesting a quote. If you have multiple genuine branches, make it clear which team handles each area.</p>
          <p>Keep the About page consistent with your contact page and any eligible Google Business Profile. For more on organising local information, read the <Link href="/blog/local-seo-uae-service-businesses">local SEO guide for UAE service businesses</Link>. Do not publish a virtual office or an address where customers cannot actually visit as though it were a staffed customer location.</p>

          <h2>7. Use real photos and project examples carefully</h2>
          <p>One or two relevant photographs can make the page easier to understand. A photo of the actual team, a real work vehicle, a workshop or a completed project is more informative than a generic image of people shaking hands. Add a short caption explaining what the image shows.</p>
          <p>Before publishing, check that you have permission to use the image and that it does not expose a customer's private address, personal information, access code or other sensitive detail. If you cannot show a customer's property, use a neutral photograph of the team or equipment instead.</p>
          <p>If the business has no portfolio yet, do not invent completed projects. Explain the process, show the real tools or people involved and add project examples as genuine work becomes available. Label concept designs or demonstrations clearly if they are not client projects.</p>

          <h2>8. Make the page easy to use in English and Arabic when needed</h2>
          <p>UAE businesses may serve customers who prefer different languages. If you provide an Arabic version, make sure it communicates the same services, coverage, qualifications and contact details as the English page. Avoid publishing machine-translated text that has not been checked by someone who understands the language and the service terminology.</p>
          <p>Test the right-to-left layout on mobile, including navigation, phone numbers, forms, buttons and mixed Arabic-English text. A language switch should take visitors to the equivalent page where possible, not send them back to the homepage every time. Our <Link href="/blog/arabic-english-website-design-uae">Arabic-English website design checklist for the UAE</Link> covers the wider setup.</p>

          <h2>9. Give the page a clear title and a useful next step</h2>
          <p>Use a descriptive page title and one clear main heading that tells visitors which business they are reading about. Include the service and location naturally when they genuinely describe the company. Do not repeat the same city and service phrase in every heading or add a long list of neighbourhoods to the About page.</p>
          <p>Google's <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">people-first content guidance</a> asks whether a page is useful to its intended audience, offers original information and gives readers enough context to trust what they are reading. Its <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">SEO Starter Guide</a> recommends clear, descriptive page titles and useful, well-organised content. Neither source says that adding an About page guarantees rankings.</p>
          <p>If you use Organization structured data, keep its name, URL, logo and contact details consistent with visible, genuine business information. Google explains that this markup can help it understand an organisation, and recommends placing it on the homepage or a single page that describes the organisation rather than repeating it on every page. See the <a href="https://developers.google.com/search/docs/appearance/structured-data/organization" target="_blank" rel="noopener noreferrer">Organization structured data documentation</a>.</p>
          <p>Finish with one useful action: request a quote, book an assessment, call the business or send a WhatsApp message. Tell visitors what information to include so the team can respond more effectively.</p>

          <h2>A practical About Us page outline you can adapt</h2>
          <p>Use this as a starting structure, then replace every bracket with accurate business information. It is a writing framework, not ready-made proof or a claim that applies to every company.</p>
          <ul>
            <li><strong>Opening:</strong> “[Business name] provides [specific services] for [customer type] in [actual service areas].”</li>
            <li><strong>Customer problem:</strong> “Customers contact us when they need [common problem or outcome]. We begin by [real first step].”</li>
            <li><strong>People:</strong> “Your enquiry is handled by [real role or named contact], who coordinates [accurate responsibility].”</li>
            <li><strong>Approach:</strong> “Before work begins, we explain [scope, estimate, schedule or other relevant details].”</li>
            <li><strong>Evidence:</strong> “You can review [genuine qualifications, project examples, photographs or other verifiable proof].”</li>
            <li><strong>Next step:</strong> “To ask about [service], send us [useful details] through [real contact method].”</li>
          </ul>
          <p>Read the outline aloud. If it sounds like a slogan rather than an explanation, add a concrete detail about the work, the people or the process. If a sentence makes a claim you cannot verify, remove it.</p>

          <h2>Before publishing: an About page quality check</h2>
          <ul>
            <li>The first paragraph identifies the business, its customers and its actual services.</li>
            <li>Service areas match the locations the team can genuinely cover.</li>
            <li>Names, photographs, qualifications and business details are accurate and used with permission.</li>
            <li>Claims such as licensed, insured, certified or years of experience can be verified.</li>
            <li>The page explains who handles enquiries and what happens next.</li>
            <li>Project photos and testimonials are genuine and not presented out of context.</li>
            <li>Arabic and English versions, if offered, communicate the same information.</li>
            <li>The page links to relevant services, contact details and useful supporting information.</li>
            <li>The main call to action works on a phone as well as a desktop.</li>
          </ul>
          <p>An effective About Us page does not need to sound grand. It needs to help the right customer understand the business, see why its claims are credible and know what to do next. For a small UAE service company, clear and honest information is more useful than trying to look bigger than the operation really is.</p>

          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}

          <div className="blog-cta">
            <h2>Does your website explain why customers should trust your business?</h2>
            <p>FixLeads Studio helps UAE service businesses make their websites clearer, easier to use and more useful for enquiries. Ask for a practical review of your About page and customer journey.</p>
            <a className="btn" href={wa("Hi FixLeads Studio, I'd like a review of my website's About Us page and customer journey.")} target="_blank" rel="noopener noreferrer">Request a free website review</a>
          </div>
        </div>
      </section>
    </article>
  </>;
}
