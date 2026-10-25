import Link from "next/link";
import { NICHES } from "../../lib/niches";
import { MarketingHero, MarketingSection, MarketingCta, PageMetadataJsonLd } from "../components/MarketingShell";

export const metadata = {
  title: "Industries We Help | UAE Home-Service Website Design",
  description: "Website design and local SEO for AC maintenance, plumbing, cleaning, pest control and other UAE home-service companies. Explore industry-specific pages.",
  alternates: { canonical: "/industries" },
  openGraph: { title: "Industries We Help | FixLeads Studio", description: "Practical websites and local SEO for UAE home-service companies.", url: "https://fixleadsstudio.com/industries", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "FixLeads Studio — web design and local SEO for UAE home-service businesses" }] },
};

const moreIndustries = [
  { title: "Landscaping & gardening", text: "Show maintenance plans, garden transformations, service areas and quote-request options." },
  { title: "Painting & renovations", text: "Present project galleries, room and property services, clear scope and enquiry routes." },
  { title: "Moving & relocation", text: "Explain home and office moves, packing options, service coverage and quote requirements." },
  { title: "Appliance repair", text: "Help visitors identify supported appliances, book a visit and contact your team quickly." },
  { title: "Pool maintenance", text: "Explain cleaning, water treatment, repairs and recurring maintenance packages." },
  { title: "Other local services", text: "We can scope a site around your real services, proof, locations and customer questions." },
];

export default function IndustriesPage() {
  return <>
    <PageMetadataJsonLd title="Industries We Help" description="Website design and local SEO for UAE home-service businesses." path="/industries" />
    <MarketingHero eyebrow="INDUSTRIES · UAE" title="A website built around the service you actually sell." lead="Customers do not all search the same way. We shape your service pages, proof, contact paths and local SEO around what people need from your business—and the areas you genuinely cover." image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85" imageAlt="Technician working on building maintenance equipment" bullets={["Service-specific page structure", "Mobile-first contact paths", "Local SEO foundations"]} />
    <MarketingSection eyebrow="SERVICE SPECIALISMS" title="Choose your industry" intro="Start with the closest match. Each industry page outlines useful website sections and questions customers may ask.">
      <div className="marketing-cards">{NICHES.map((n, i) => <article className="marketing-card" key={n.slug}><span className="card-number">{String(i + 1).padStart(2, "0")}</span><h3>{n.name}</h3><p>{n.intro}</p><Link className="marketing-card-link" href={`/niches/${n.slug}`}>Explore website needs <span aria-hidden="true">→</span></Link></article>)}</div>
    </MarketingSection>
    <MarketingSection eyebrow="MORE HOME SERVICES" title="Other local service businesses" intro="The same principles can be adapted to other UAE trades—without stuffing pages with repeated city names." soft>
      <div className="marketing-cards">{moreIndustries.map((item, i) => <article className="marketing-card" key={item.title}><span className="card-number">{String(i + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </MarketingSection>
    <MarketingSection title="What every strong service website should make clear">
      <div className="marketing-split"><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85" alt="Team reviewing a website and business plan" width="900" height="650" loading="lazy" /><div><h2>Help a customer decide—and contact you.</h2><ul className="marketing-checklist"><li>What you do and which jobs you accept</li><li>Which areas you serve, stated accurately</li><li>Real project photos, reviews or credentials where available</li><li>Visible phone and WhatsApp actions on mobile</li><li>Useful service pages with clear headings and original copy</li><li>Analytics and Search Console to measure what happens after launch</li></ul><p className="marketing-note">We do not promise instant rankings or invented reviews. The aim is a clearer customer journey and a sound technical foundation.</p></div></div>
    </MarketingSection>
    <MarketingCta title="Not sure which page your business needs?" text="Share your service type, website (if you have one) and the UAE locations you cover. We will help you identify a practical starting scope." />
  </>;
}
