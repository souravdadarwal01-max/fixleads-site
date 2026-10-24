import Link from "next/link";
import { SITE, wa } from "../lib/site";
import { NICHES } from "../lib/niches";
const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: SITE.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
export default function Home() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <section className="hero"><div className="wrap split">
      <div>
        <h1>Your next customer is already messaging someone. Make it you.</h1>
        <p className="lead">We build fast mobile websites for UAE AC, plumbing, pest control and cleaning companies, with one page per service and call and WhatsApp buttons on every screen.</p>
        <div className="cta"><a className="btn" href={wa("Hi, I'd like a free website review.")}>Get a free website review</a><a className="btn ghost" href="#pricing">See pricing</a></div>
      </div>
      <div className="chat" aria-label="Example WhatsApp enquiry">
        <p className="cap">Example enquiry from a service page</p>
        <p className="b in">Hi, AC servicing for a 2-bedroom apartment in JLT. Possible this Saturday?</p>
        <p className="b out">Yes, we have 10am or 2pm. Is it split units?</p>
        <p className="b in">3 splits. Price?</p>
        <p className="b out">AED 150 per unit. Booking you for 10am.</p>
      </div>
    </div></section>

    <section className="sec"><div className="wrap">
      <h2>Why enquiries get lost on most service websites</h2>
      <div className="grid3">
        <div><h3>Slow, cramped mobile pages</h3><p>Most visitors are on a phone. If the page is slow or the button is hidden, they go back to Google and call the next company.</p></div>
        <div><h3>One page for every service</h3><p>"Deep cleaning" and "bed bug treatment" are different searches. Each needs its own page that says what you do and how to book.</p></div>
        <div><h3>No way to see what works</h3><p>Without tracking you cannot tell which page brings calls. We set up call, WhatsApp and form tracking from day one.</p></div>
      </div>
    </div></section>

    <section className="sec alt" id="niches"><div className="wrap">
      <h2>Who we build for</h2>
      <div className="grid4">{NICHES.map(n => (
        <Link key={n.slug} href={`/niches/${n.slug}`} className="card"><h3>{n.name}</h3><p>{n.intro}</p><span>See the pages we build</span></Link>))}
      </div>
    </div></section>

    <section className="sec" id="how-it-works"><div className="wrap">
      <h2>How a project runs</h2>
      <ol className="steps">
        <li><b>Review.</b> We look at your current site, Google results and competitors, and send you a short audit.</li>
        <li><b>Proposal.</b> Scope, price and timeline in writing before any work starts.</li>
        <li><b>Build.</b> You see the homepage and key pages and request changes.</li>
        <li><b>Launch.</b> Domain, analytics and Search Console connected, then handover.</li>
      </ol>
    </div></section>

    <section className="sec alt" id="pricing"><div className="wrap">
      <h2>Pricing</h2>
      <p className="muted">Starting prices. Paid ads, photography and large amounts of copywriting are quoted separately. Final scope and price are confirmed in your written proposal.</p>
      <div className="grid3">{SITE.plans.map(p => (
        <div className="plan" key={p.name}><h3>{p.name}</h3><p className="price">{p.price} <small>{p.note}</small></p>
          <ul>{p.items.map(i => <li key={i}>{i}</li>)}</ul>
          <a className="btn" href={wa(`Hi, I'm interested in the ${p.name} package.`)}>Ask about {p.name}</a></div>))}
      </div>
    </div></section>

    <section className="sec" id="faq"><div className="wrap narrow">
      <h2>Questions owners ask</h2>
      {SITE.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
    </div></section>

    <section className="stripe"><div className="wrap">
      <h2>Send us your website and your top two competitors.</h2>
      <p>We reply with practical suggestions. No obligation.</p>
      <a className="btn" href={wa("Hi, here is my website: ")}>Message us on WhatsApp</a>
    </div></section>
  </>);
}
