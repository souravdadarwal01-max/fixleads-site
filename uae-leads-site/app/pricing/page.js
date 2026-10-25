import Link from "next/link";
import { SITE, wa } from "../../lib/site";
import { MarketingHero, MarketingSection, MarketingFaq, MarketingCta, PageMetadataJsonLd } from "../components/MarketingShell";

export const metadata = {
  title: "Website Design Packages & Pricing in the UAE",
  description: "Explore FixLeads Studio website design and local SEO packages for UAE home-service businesses. Clear starting prices in AED, defined scope and no ranking guarantees.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Website Design Packages & Pricing | FixLeads Studio", description: "Clear website packages for UAE service businesses.", url: "https://fixleadsstudio.com/pricing", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "FixLeads Studio — web design and local SEO for UAE home-service businesses" }] },
};

const pricingFaqs = [
  ["Are prices inclusive of UAE VAT?", "The published prices are starting prices. VAT treatment must be confirmed in the written quote before payment; do not assume the displayed price includes or excludes VAT."],
  ["Are domain and hosting included?", "Domain registration and renewal, hosting, business email, paid plugins, third-party services and advertising spend are not assumed to be included. Your written quote should list any setup fees and recurring costs separately."],
  ["Are these fixed quotes?", "These are starting package prices. The final written quote depends on the agreed pages, content, language, integrations and any special requirements. We confirm scope before work starts."],
  ["Do I pay monthly for the website?", "Launch and Growth are listed as one-time build packages. Care is a monthly support option. Domain, hosting, paid tools, third-party fees or ongoing advertising should be discussed and stated clearly in the proposal."],
  ["Can I start with a small website and expand?", "Yes. A focused launch site can establish the main services and contact paths, then additional pages can be scoped when you have a clear reason to add them."],
  ["Do you guarantee leads or Google rankings?", "No responsible provider can guarantee a specific ranking or enquiry volume. Results depend on competition, demand, website quality, reputation, response time and other factors."],
];

export default function PricingPage() {
  return <>
    <PageMetadataJsonLd title="Website Design Packages & Pricing in the UAE" description="Website build and care packages for UAE home-service businesses." path="/pricing" />
    <MarketingHero eyebrow="CLEAR SCOPE · AED PRICING" title="Website packages for UAE service businesses." lead="Start with the essentials or build a stronger service-page foundation. We agree the deliverables, timeline and price in writing before work begins—so you know what is included." image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85" imageAlt="Website analytics and project planning on a laptop" bullets={["Scope agreed in writing", "Built for mobile visitors", "No ranking guarantees"]} secondaryHref="#packages" />
    <MarketingSection eyebrow="WEBSITE PACKAGES" title="Choose a sensible starting point" intro="Package prices below are the current published starting prices. Ask for a written quote if your needs differ.">
      <div id="packages" className="marketing-price-grid">{SITE.plans.map((p, i) => <article className={`marketing-price-card${i === 1 ? " featured" : ""}`} key={p.name}><p className="eyebrow">{i === 0 ? "GET STARTED" : i === 1 ? "GROW YOUR SERVICE PAGES" : "ONGOING SUPPORT"}</p><h3>{p.name}</h3><p className="price">{p.price}</p><p className="price-note">{p.note}</p><ul>{p.items.map(item => <li key={item}>{item}</li>)}</ul><a className="btn" href={wa(`Hi FixLeads Studio, please send me the full scope and quote for the ${p.name} package for my UAE business.`)} target="_blank" rel="noopener noreferrer">Discuss {p.name} ↗</a></article>)}</div>
      <div className="pricing-terms"><h3>Before you approve a package</h3><div className="pricing-compare"><div><strong>Build fee</strong><p>Launch and Growth are one-time build fees; Care is a monthly support option.</p></div><div><strong>VAT and invoices</strong><p>VAT is not assumed to be included or excluded. Your written quote will state the applicable treatment before you pay.</p></div><div><strong>Hosting and domain</strong><p>Domain, hosting, email, paid tools and third-party fees are separate unless your written quote explicitly includes them.</p></div><div><strong>Ownership and handover</strong><p>Agree account access, source files, licences, revision rounds and handover responsibilities in writing.</p></div></div></div>
    </MarketingSection>
    <MarketingSection eyebrow="WHAT IS INCLUDED IN A GOOD BRIEF" title="Scope first. Design second." intro="A useful proposal defines what will be built and how success will be checked." soft>
      <div className="marketing-cards"><article className="marketing-card"><span className="card-number">01</span><h3>Pages and content</h3><p>Agreed page list, service priorities, locations, supplied assets and who approves the copy.</p></article><article className="marketing-card"><span className="card-number">02</span><h3>Contact journey</h3><p>Call and WhatsApp links, enquiry form if needed, clear calls to action and mobile testing.</p></article><article className="marketing-card"><span className="card-number">03</span><h3>Measurement and handover</h3><p>Agreed analytics setup, Search Console essentials, access, ownership and post-launch support.</p></article></div>
    </MarketingSection>
    <MarketingFaq items={pricingFaqs} title="Pricing questions" />
    <section className="marketing-section soft"><div className="wrap"><div className="marketing-section-heading"><p className="eyebrow">READY TO DISCUSS YOUR SCOPE?</p><h2>Tell us what you need before choosing a package.</h2><p>Use the enquiry form to outline your services, areas, current website and priorities.</p></div><div className="pricing-form-link"><Link className="btn hero-primary" href="/contact">Request a written quote ↗</Link><span>Or <a href={wa("Hi FixLeads Studio, please send me a written quote and help me choose the right package.")} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</span></div></div></section>
    <MarketingCta title="Need a quote that fits your actual business?" text="Tell us your services, target areas, current website and preferred launch date. We will discuss the scope before recommending a package." />
  </>;
}
