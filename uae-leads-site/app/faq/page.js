import Link from "next/link";
import { SITE, wa } from "../../lib/site";
import { MarketingHero, MarketingSection, MarketingCta, PageMetadataJsonLd } from "../components/MarketingShell";

export const metadata = {
  title: "Website Design & Local SEO FAQs for UAE Businesses",
  description: "Answers about website design costs, timelines, SEO, ownership, Arabic pages, hosting and working with FixLeads Studio for UAE home-service businesses.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "Frequently Asked Questions | FixLeads Studio", description: "Straight answers about website projects and local SEO for UAE service businesses.", url: "https://fixleadsstudio.com/faq", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "FixLeads Studio — web design and local SEO for UAE home-service businesses" }] },
};

const groups = [
  { title: "Website projects", items: [
    ["How long does a website take to build?", "Launch usually takes around 1–2 weeks and Growth around 2–4 weeks once the scope, content, assets and approvals are ready. More complex work or late feedback can affect the timeline."],
    ["What do you need to get started?", "A short description of your services, the UAE locations you serve, your contact details, examples of sites you like, genuine photos or approved assets, and access to your current site if you have one."],
    ["Can you improve my existing website instead of replacing it?", "Often, yes. A review can identify whether the best next step is improving contact paths, fixing technical issues, strengthening service pages or rebuilding. We recommend a rebuild only when it makes sense."],
    ["Can you create Arabic and English pages?", "Arabic content can be scoped as an add-on. We agree translation, proofreading, right-to-left layout and page scope before work begins."],
  ]},
  { title: "Pricing, ownership and support", items: [
    ["How much does website design cost?", "Published starting prices are AED 2,500 for Launch, AED 5,500 for Growth and AED 699 per month for Care. Final quotes depend on the agreed scope and any additional services. See the Pricing page for package details."],
    ["Who owns my domain and website?", "The domain should be registered in your business's name and you should retain appropriate account access. Ownership, source code, hosting, licences and handover arrangements are confirmed in the written proposal."],
    ["Is hosting included?", "Hosting, domain renewal, paid software and third-party fees depend on the agreed setup. Ask for these recurring costs to be itemised in your quote before approving it."],
    ["Can I add more pages later?", "Yes. Additional service, location or information pages can be scoped when they serve a real customer need and have useful, distinct content."],
  ]},
  { title: "SEO, leads and measurement", items: [
    ["Can you guarantee first-page Google rankings?", "No. Search rankings and leads depend on competition, demand, reputation, website quality, location relevance, response time and many factors outside any provider's control. Avoid guaranteed-ranking claims."],
    ["What does local SEO include?", "Depending on the scope, it can include service-page structure, local intent research, page titles and descriptions, internal links, appropriate structured data, Google Search Console setup and guidance on your Google Business Profile."],
    ["Will my website bring leads immediately?", "A website makes it easier for customers to understand and contact you, but it cannot guarantee demand or instant leads. Search visibility takes time; enquiries also depend on offer, trust, competition and how quickly you respond."],
    ["Can you track calls and WhatsApp clicks?", "We can discuss event tracking and analytics setup. Implementation depends on the site, access, consent requirements and the measurement tools you choose. Tracking should be tested rather than assumed to work."],
  ]},
  { title: "Working with FixLeads Studio", items: [
    ["Do you work with businesses across the UAE?", "Yes. FixLeads Studio is a remote service focused on UAE home-service businesses, including companies serving Dubai, Abu Dhabi, Sharjah and other areas they genuinely cover."],
    ["Do you work with AC, plumbing and cleaning businesses?", "These are core examples of the home-service businesses we support. Visit the Industries page to explore service-specific page ideas."],
    ["How do we communicate?", "We can discuss the project remotely and use WhatsApp for practical communication. Formal scope, price, approvals and responsibilities should still be confirmed in writing."],
  ]},
];

export default function FaqPage() {
  const allFaqs = groups.flatMap(group => group.items);
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: allFaqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return <>
    <PageMetadataJsonLd title="Website Design & Local SEO FAQs" description="Answers about website design, pricing, ownership and local SEO for UAE service businesses." path="/faq" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <MarketingHero eyebrow="HELP BEFORE YOU DECIDE" title="Straight answers before you invest in a website." lead="Find out how pricing, timelines, SEO, ownership and ongoing support work. If your question is specific to your business, ask us before approving a scope." image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85" imageAlt="Laptop and notebook used for online business research" bullets={["Transparent scope", "Practical SEO expectations", "No guaranteed rankings"]} cta="Ask a question" />
    {groups.map(group => <MarketingSection key={group.title} title={group.title} soft={group.title === "Pricing, ownership and support"}><div className="marketing-faq-list">{group.items.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></MarketingSection>)}
    <MarketingCta title="Still have a question about your business?" text="Tell us what kind of service business you run and what you want your website to achieve. We will help clarify the options before you commit." />
  </>;
}
