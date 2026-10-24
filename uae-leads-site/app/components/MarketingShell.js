import Link from "next/link";
import { SITE, wa } from "../../lib/site";

export function MarketingHero({ eyebrow, title, lead, image, imageAlt, bullets = [], cta = "Request a free website review" }) {
  return (
    <section className="marketing-hero">
      <div className="wrap marketing-hero-grid">
        <div>
          <div className="breadcrumbs"><Link href="/">Home</Link> <span aria-hidden="true">/</span> {title}</div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="marketing-lead">{lead}</p>
          <div className="marketing-actions">
            <a className="btn" href={wa(`Hi FixLeads Studio, I'd like a free website review. Please advise on ${title.toLowerCase()} for my UAE business.`)} target="_blank" rel="noopener noreferrer">{cta} <span aria-hidden="true">↗</span></a>
            <Link className="btn ghost" href="/pricing">View packages</Link>
          </div>
          {bullets.length > 0 && <div className="marketing-proof">{bullets.map((item) => <span key={item}>{item}</span>)}</div>}
        </div>
        <img className="marketing-image" src={image} alt={imageAlt} width="900" height="700" fetchPriority="high" />
      </div>
    </section>
  );
}

export function MarketingSection({ eyebrow, title, intro, children, soft = false }) {
  return (
    <section className={`marketing-section${soft ? " soft" : ""}`}>
      <div className="wrap">
        {(eyebrow || title || intro) && <div className="marketing-section-heading">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
          {intro && <p>{intro}</p>}
        </div>}
        {children}
      </div>
    </section>
  );
}

export function MarketingFaq({ items, title = "Frequently asked questions", intro }) {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <MarketingSection title={title} intro={intro} soft>
        <div className="marketing-faq-list">
          {items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </MarketingSection>
    </>
  );
}

export function MarketingCta({ title = "Ready to improve your website?", text = "Tell us what your business does, which UAE areas you serve and what you want more of—calls, WhatsApp enquiries or quote requests." }) {
  return <section className="marketing-cta"><div className="wrap marketing-cta-inner"><div><p className="eyebrow">A PRACTICAL NEXT STEP</p><h2>{title}</h2><p>{text}</p></div><a className="btn" href={wa("Hi FixLeads Studio, I'd like to discuss a website and local SEO for my UAE service business.")} target="_blank" rel="noopener noreferrer">Talk on WhatsApp ↗</a></div></section>;
}

export function PageMetadataJsonLd({ title, description, path, type = "WebPage" }) {
  const data = { "@context": "https://schema.org", "@type": type, name: title, description, url: `${SITE.url}${path}`, isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url }, publisher: { "@type": "Organization", name: SITE.name, url: SITE.url } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
