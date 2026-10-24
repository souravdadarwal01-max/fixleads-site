import Link from "next/link";
import { SITE, wa } from "../lib/site";
import { NICHES } from "../lib/niches";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SITE.faq.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const servicePillars = [
  { number: "01", title: "A website built for enquiries", text: "Make it easy for customers to understand your services, check coverage and contact you without hunting for a phone number." },
  { number: "02", title: "Service pages with a purpose", text: "Give AC repair, deep cleaning, pest treatment and other priority services a clear page with useful information and a direct next step." },
  { number: "03", title: "SEO foundations you can build on", text: "Clear page structure, metadata, internal links, schema where appropriate and Search Console setup—not promises of instant rankings." },
];

const process = [
  ["01", "Review", "We review your existing website, priority services and target areas. If you have no site yet, we start with your goals and competitors."],
  ["02", "Plan", "You receive a written scope with pages, deliverables, timeline and price before work begins."],
  ["03", "Build & refine", "We create a mobile-first design and help you review the content, contact paths and page structure."],
  ["04", "Launch & measure", "We check the main pages and contact links, then set up agreed analytics and Search Console essentials."],
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="premium-hero">
        <div className="wrap premium-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> WEB DESIGN & LOCAL SEO · UAE</p>
            <h1>Turn more website visits into <span>real enquiries.</span></h1>
            <p className="premium-lead">Premium, mobile-first websites for Dubai and UAE home-service companies—designed to make your services clear, build trust and help customers call or message you.</p>
            <div className="cta hero-actions">
              <a className="btn hero-primary" href={wa("Hi FixLeads Studio, I'd like a free website review for my UAE service business.")} target="_blank" rel="noopener noreferrer">Get a free website review <span aria-hidden="true">↗</span></a>
              <Link className="btn ghost hero-secondary" href="/?section=pricing">Explore packages</Link>
            </div>
            <div className="hero-trustline">
              <span><b aria-hidden="true">✓</b> Clear scope & pricing</span>
              <span><b aria-hidden="true">✓</b> Mobile-first approach</span>
              <span><b aria-hidden="true">✓</b> No ranking guarantees</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration of a service business website enquiry flow">
            <div className="visual-glow" />
            <div className="visual-window">
              <div className="visual-top"><span className="window-dots"><i /><i /><i /></span><span>YOUR SERVICE WEBSITE</span><span className="live-tag">MOBILE READY</span></div>
              <div className="visual-site">
                <div className="mock-brand"><span className="mock-logo">S</span><span><b>Service Company</b><small>Dubai · UAE</small></span><span className="mock-menu">☰</span></div>
                <div className="mock-image"><span className="mock-kicker">RELIABLE LOCAL SERVICE</span><strong>Professional help.<br />Without the hassle.</strong><span className="mock-line" /><span className="mock-action">Request a quote <b>↗</b></span></div>
                <div className="mock-services"><span><i>✓</i> Clear services</span><span><i>✓</i> Areas covered</span><span><i>✓</i> Quick contact</span></div>
              </div>
              <div className="visual-note"><span className="note-icon">↗</span><span><b>One clear next step</b><small>Call, WhatsApp or request a quote</small></span></div>
            </div>
            <div className="hero-side-note"><span className="side-note-icon">✳</span><span><b>Designed around your customer</b><small>Not just a pretty homepage</small></span></div>
          </div>
        </div>
        <div className="hero-bottom"><div className="wrap hero-bottom-inner"><span>BUILT FOR UAE SERVICE BUSINESSES</span><div><span>AC & maintenance</span><i /> <span>Cleaning</span><i /> <span>Pest control</span><i /> <span>Plumbing & handyman</span></div></div></div>
      </section>

      <section className="sec intro-section">
        <div className="wrap intro-grid">
          <div><p className="eyebrow">THE OPPORTUNITY</p><h2>Your website should do more than just look good.</h2></div>
          <div className="intro-copy"><p>When someone in Dubai searches for a service, they need quick answers: what you do, where you work, how to contact you and what happens next.</p><p>We help UAE home-service businesses turn those questions into a clearer website experience—with practical SEO foundations and simple enquiry paths.</p><a className="text-link" href={wa("Hi FixLeads Studio, can you review my website and suggest improvements?")} target="_blank" rel="noopener noreferrer">Ask for a website review <span>↗</span></a></div>
        </div>
      </section>

      <section className="sec pillars-section">
        <div className="wrap">
          <div className="section-heading"><div><p className="eyebrow">BUILT WITH INTENTION</p><h2>Design, content and search working together.</h2></div><p>Every element has a job: help visitors understand your offer, trust your business and take the next step.</p></div>
          <div className="pillar-grid">{servicePillars.map((item) => <article className="pillar-card" key={item.number}><span className="pillar-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="sec industries-section alt" id="niches">
        <div className="wrap">
          <div className="section-heading"><div><p className="eyebrow">SPECIALIST INDUSTRIES</p><h2>Made for the services people search for.</h2></div><p>Start with the services and areas that matter most to your business. We plan the pages around real customer questions—not generic filler.</p></div>
          <div className="industry-grid">{NICHES.map((n, i) => <Link key={n.slug} href={`/niches/${n.slug}`} className="industry-card"><span className="industry-index">0{i + 1}</span><div><h3>{n.name}</h3><p>{n.intro}</p><span className="industry-link">Explore website approach <b>↗</b></span></div></Link>)}</div>
        </div>
      </section>

      <section className="sec approach-section">
        <div className="wrap approach-grid">
          <div className="approach-heading"><p className="eyebrow">A PRACTICAL PROCESS</p><h2>Know what you’re getting before we build.</h2><p className="muted">Straightforward communication, agreed deliverables and a clear route from first conversation to launch.</p><a className="text-link" href={wa("Hi FixLeads Studio, I'd like to discuss a website project for my UAE business.")} target="_blank" rel="noopener noreferrer">Talk through your project <span>↗</span></a></div>
          <div className="process-list">{process.map(([number, title, text]) => <article className="process-item" key={number}><span className="process-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="sec pricing-section alt" id="pricing">
        <div className="wrap">
          <div className="section-heading"><div><p className="eyebrow">SIMPLE PACKAGES</p><h2>Choose a sensible starting point.</h2></div><p>Indicative starting prices in AED. We confirm exact scope, timeline and any optional costs in writing before work starts.</p></div>
          <div className="premium-pricing-grid">{SITE.plans.map((p, i) => <article className={`premium-plan ${i === 1 ? "featured-plan" : ""}`} key={p.name}>{i === 1 && <span className="plan-ribbon">MOST COMPREHENSIVE</span>}<p className="plan-eyebrow">{i === 0 ? "START HERE" : i === 1 ? "GROW YOUR PRESENCE" : "ONGOING SUPPORT"}</p><h3>{p.name}</h3><p className="premium-price">{p.price}</p><p className="plan-period">{p.note}</p><ul>{p.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul><a className={i === 1 ? "btn hero-primary plan-button" : "btn ghost plan-button"} href={wa(`Hi FixLeads Studio, I'm interested in the ${p.name} package for my UAE business. Please share the scope and next steps.`)} target="_blank" rel="noopener noreferrer">Discuss {p.name} <span>↗</span></a></article>)}</div>
          <p className="pricing-note">Need Arabic content, extra pages, photography or integrations? Mention it during the review so it can be scoped accurately.</p>
        </div>
      </section>

      <section className="sec faq-section" id="faq">
        <div className="wrap faq-grid"><div><p className="eyebrow">GOOD TO KNOW</p><h2>Questions before getting started.</h2><p className="muted">Not sure what your business needs? Start with a review and we’ll discuss the options.</p><a className="text-link" href={wa("Hi FixLeads Studio, I have a few questions about a website for my UAE business.")} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp <span>↗</span></a></div><div className="faq-list">{SITE.faq.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div>
      </section>

      <section className="final-cta"><div className="wrap final-cta-inner"><div><p className="eyebrow">YOUR NEXT STEP</p><h2>Let’s make your website easier to choose—and easier to contact.</h2><p>Share your current website or tell us what you do. We’ll start with a practical conversation about what could be improved.</p></div><a className="btn final-cta-button" href={wa("Hi FixLeads Studio, I'd like a free website review. My business is based in the UAE.")} target="_blank" rel="noopener noreferrer">Request a free review <span>↗</span></a></div></section>
    </>
  );
}
