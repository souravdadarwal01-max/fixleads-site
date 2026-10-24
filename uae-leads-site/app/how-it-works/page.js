import Link from "next/link";
import { MarketingHero, MarketingSection, MarketingFaq, MarketingCta, PageMetadataJsonLd } from "../components/MarketingShell";

export const metadata = {
  title: "Our Website Design Process | UAE | FixLeads Studio",
  description: "See how FixLeads Studio plans, builds and checks mobile-first websites and local SEO foundations for UAE home-service businesses.",
  alternates: { canonical: "/how-it-works" },
  openGraph: { title: "How It Works | FixLeads Studio", description: "A clear process from website review to launch and measurement.", url: "https://fixleadsstudio.com/how-it-works", type: "website" },
};

const steps = [
  ["01", "Review your business", "We learn which services matter most, which UAE areas you serve, how customers contact you and what your current website does well or poorly."],
  ["02", "Agree the scope", "You receive a written page list, deliverables, responsibilities, timeline and price. We clarify who supplies copy, photos, approvals and any third-party services."],
  ["03", "Plan content and journeys", "We map each page to a visitor need: understand the service, check suitability, build confidence and call or message. We write for people first and use search terms naturally."],
  ["04", "Design and build", "We create responsive pages with readable typography, clear service information, accessible controls and obvious contact options on mobile."],
  ["05", "Check before launch", "We review key links, forms, page titles, descriptions, mobile layouts, image sizes, redirects and basic technical SEO. Tracking is configured only where access and consent requirements allow."],
  ["06", "Launch and learn", "After handover, we review Search Console and agreed analytics data, then prioritise improvements based on real queries, user behaviour and enquiries—not guesses."],
];

const processFaqs = [
  ["How long does the project take?", "The current guide is around 1–2 weeks for Launch and 2–4 weeks for Growth after the scope, content, access and approvals are ready. Complex work or delayed feedback can change the schedule."],
  ["What do you need from me?", "Your service list, target areas, contact details, existing website access if relevant, genuine photos or approved assets, business credentials and one person who can approve content."],
  ["Will you write all the content?", "Content responsibilities are agreed in the proposal. We can help structure and write service copy, but you must verify business claims, service availability, prices, licences and technical details."],
  ["What happens after launch?", "The handover and any ongoing support are agreed up front. We can discuss maintenance, new pages, technical checks and reporting as separate work."],
];

export default function HowItWorksPage() {
  return <>
    <PageMetadataJsonLd title="Our Website Design Process" description="A clear six-step website project process for UAE home-service businesses." path="/how-it-works" />
    <MarketingHero eyebrow="A CLEAR, COLLABORATIVE PROCESS" title="From first review to a website ready for real customers." lead="No mystery process and no promises of instant rankings. We define the scope, make the customer journey clear, check the important details and set up a foundation you can improve over time." image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" imageAlt="Small business team collaborating around a table" bullets={["Written scope and price", "Milestones and approvals", "Practical launch checks"]} />
    <MarketingSection eyebrow="HOW WE WORK" title="Six steps, with clear decisions" intro="You know what happens next, what you need to provide and what the project is intended to achieve.">
      <div className="marketing-cards">{steps.map(([num, title, text]) => <article className="marketing-card" key={num}><span className="card-number">{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </MarketingSection>
    <MarketingSection eyebrow="BUILT AROUND YOUR CUSTOMERS" title="A launch checklist—not just a pretty homepage." soft>
      <div className="marketing-split"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85" alt="Team planning a project on a whiteboard" width="900" height="650" loading="lazy" /><div><h2>Before the site goes live</h2><ul className="marketing-checklist"><li>Each priority service has a clear purpose and next step</li><li>Phone and WhatsApp links work on mobile</li><li>Page titles, descriptions and internal links are reviewed</li><li>Images are relevant, sized sensibly and have meaningful alt text</li><li>Mobile layout, readability and keyboard focus are checked</li><li>Analytics and Search Console are discussed and verified where access is available</li><li>Ownership, access and post-launch responsibilities are documented</li></ul><p className="marketing-note">Actual outcomes depend on the business, market and competition. We use measurement to decide what to improve next.</p></div></div>
    </MarketingSection>
    <MarketingFaq items={processFaqs} title="Project process FAQs" />
    <MarketingCta title="Start with a practical website review." text="Share your current site or describe your business. We will discuss your priorities and whether a new website, focused improvements or more useful service pages make the most sense." />
  </>;
}
