import Link from "next/link";
import { notFound } from "next/navigation";
import { NICHES } from "../../../lib/niches";
import { SITE, wa } from "../../../lib/site";

export const generateStaticParams = () => NICHES.map((n) => ({ slug: n.slug }));

const find = async (params) => {
  const { slug } = await params;
  return NICHES.find((n) => n.slug === slug);
};

const details = {
  "ac-maintenance": {
    focus: "When an air conditioner stops cooling in Dubai's heat, visitors want to understand whether you handle their problem, where you operate and how quickly they can contact you. A useful website should put repair, routine servicing and maintenance contracts in separate, easy-to-scan sections rather than making every visitor search through one generic page.",
    services: "For AC repair, explain the types of faults you assess without promising a diagnosis before inspection. For routine servicing, outline the typical steps your team performs and clarify what is and is not included. If you offer annual maintenance contracts (AMCs), describe the plan options, visit frequency and how customers can request a quote. Duct cleaning, thermostat issues and installation can have separate sections when they are genuinely part of your service.",
    questions: [["Should AC services have separate pages?", "Usually, yes for the main services you actually provide. Dedicated repair, servicing and AMC pages let you explain each job clearly and match more specific searches. Avoid creating near-identical pages just to mention different areas."], ["Can a website promise emergency AC repair?", "Only if the business really offers it and can meet the stated hours and coverage. Publish accurate opening hours and response expectations, and update them when availability changes."]],
    areas: "Use only locations your team really serves. Depending on your actual coverage, you might group pages around Dubai neighbourhoods or nearby emirates, but do not publish a claim that you cover every part of the UAE if you do not. A service-area section should explain any travel limits, call-out conditions or availability differences. Real project photos and genuine customer feedback can help build confidence; do not use stock images or concept designs as evidence of completed jobs."
  },
  "plumbing-handyman": {
    focus: "People looking for plumbing or handyman help often have a practical problem they want resolved with minimal friction. Your website should help them decide whether you handle the task, whether you serve their location and how to request help. Put a clear call or WhatsApp action near the top, and make it usable on a phone with one hand.",
    services: "Group your work into understandable categories such as leak repair, tap and fixture replacement, water-heater work, drain issues, furniture assembly and general maintenance—but list only services you are qualified and equipped to provide. Explain whether customers should send photos for an initial assessment, whether an inspection is required, and how estimates are confirmed. For urgent call-outs, be precise about hours and availability instead of using an “24/7” claim that may not be true.",
    questions: [["Should I show emergency availability?", "Yes, if it is accurate. State the hours, locations and any conditions for after-hours work. A misleading emergency promise can damage trust and create avoidable complaints."], ["Can I quote every job online?", "A simple price guide may help for standard jobs, but many repairs depend on access, parts and the actual fault. Explain what information you need before confirming a written estimate."]],
    areas: "Choose service areas based on real travel time, team capacity and the type of jobs you accept. If your team covers only selected Dubai districts, state those clearly rather than listing every emirate for SEO. Separate pages can make sense for meaningful service-area differences, but each should include genuinely useful local information, not just a swapped location name."
  },
  "pest-control": {
    focus: "Customers searching for pest control often want to know what treatment is appropriate, how to prepare their home or workplace and what happens after the visit. Your website should explain the process in calm, practical language and give customers a straightforward route to ask for an assessment. Avoid fear-based claims or guarantees that every infestation will be eliminated after one visit.",
    services: "Create clear sections for the treatments you actually provide, such as cockroach control, bed bug treatment, termite inspection, rodent management or commercial pest-management plans. Describe the assessment, preparation instructions, treatment approach and any follow-up that may be needed. Safety advice should be accurate and approved by qualified staff; never invent chemical details or suggest that a property is safe to re-enter without following the product label and professional guidance.",
    questions: [["Do I need a page for each pest?", "Separate pages can help when the treatment, preparation or customer questions differ materially. Each page should answer the real questions for that pest rather than repeating the same generic copy."], ["Can I guarantee one-visit treatment?", "Avoid blanket guarantees unless they are genuinely supported by your service terms. Outcomes depend on the pest, infestation, property conditions and follow-up actions. Explain the terms honestly."]],
    areas: "List only areas your licensed or appropriately authorised team can serve. If you work with homes, restaurants, offices or property managers, explain any different assessment or documentation process for each customer type. Real staff credentials, appropriate licences where applicable, clear service terms and genuine reviews provide stronger trust signals than generic badges or unsupported “best in Dubai” claims."
  },
  "cleaning-companies": {
    focus: "Cleaning customers want to know what is included, how long a job may take, what affects the quote and whether the team handles their property type. A strong website answers those questions before asking visitors to contact you. Separate routine home cleaning from deep cleaning, move-in or move-out cleaning, sofa and carpet cleaning, and office contracts when the inclusions differ.",
    services: "For each service, describe the rooms or items covered, what customers should prepare, whether supplies are included and what may incur an extra charge. A checklist is often more useful than broad claims such as “premium quality.” Explain how customers request a quote and whether price depends on property size, condition, frequency, team size or specialist equipment. Use genuine photos of your own work only when you have permission; illustrative stock photography should not be presented as proof of completed jobs.",
    questions: [["Should I publish cleaning prices?", "If you can provide reliable starting prices, explain exactly what they cover and the conditions that change the final quote. If each property differs, use a clear quote form and list the information needed to estimate the job."], ["What builds trust for a cleaning business?", "Accurate service inclusions, transparent terms, genuine reviews, real team information where appropriate, clear cancellation policies and a responsive contact path all help customers make an informed choice."]],
    areas: "Show the locations where your team can reliably schedule work. If availability differs by district or property type, explain that rather than implying every service is available everywhere. For recurring residential and commercial work, describe how scheduling, access, supplies and quality checks are handled. Do not create separate location pages unless you can add useful, accurate information for each area."
  }
};

export async function generateMetadata({ params }) {
  const n = await find(params);
  if (!n) return {};
  return {
    title: n.h1,
    description: `Website design and local SEO for ${n.name.toLowerCase()} businesses across the UAE. Explore service-page planning, mobile contact journeys, service-area content and clear package pricing.`,
    alternates: { canonical: `/niches/${n.slug}` },
    openGraph: { title: n.h1, description: `Practical website planning for ${n.name.toLowerCase()} companies in the UAE.`, url: `/niches/${n.slug}`, type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "FixLeads Studio — web design and local SEO for UAE home-service businesses" }] }
  };
}

export default async function Niche({ params }) {
  const n = await find(params);
  if (!n) notFound();
  const d = details[n.slug];
  const faq = [...d.questions, ...[n.q, ...SITE.faq.slice(0, 1)]];
  const ld = [
    { "@context": "https://schema.org", "@type": "Service", name: n.h1, provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url }, areaServed: { "@type": "Country", name: "United Arab Emirates" }, serviceType: `Website design and local SEO for ${n.name.toLowerCase()} companies` },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
  ];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <section className="hero"><div className="wrap narrow">
      <p className="cap"><Link href="/">Home</Link> / UAE industries</p>
      <h1>{n.h1}</h1><p className="lead">{n.intro}</p>
      <p>FixLeads Studio plans mobile-first websites and local SEO foundations for UAE home-service businesses. The goal is to help prospective customers understand your services, check whether you cover their area and contact you without unnecessary steps.</p>
      <a className="btn" href={wa(`Hi FixLeads Studio, I run a business in the ${n.name.toLowerCase()} industry and want a website review.`)} target="_blank" rel="noopener noreferrer">Get a free website review ↗</a>
    </div></section>
    <section className="sec"><div className="wrap narrow">
      <h2>What customers need from a {n.name.toLowerCase()} website</h2><p>{d.focus}</p>
      <h2>Service pages that answer real questions</h2><p>{d.services}</p>
      <ul className="ticks">{n.pages.map((p) => <li key={p}>{p}</li>)}</ul>
      <p>Each priority page should explain what the service includes, who it is for, the information a customer should provide and the next step. A single clear call-to-action is usually more useful than repeating several competing buttons. Keep page titles specific, use descriptive headings and link naturally to related services, pricing and contact routes.</p>
      <h2>Local coverage across Dubai and the UAE</h2><p>{d.areas}</p>
      <h2>A practical website project process</h2>
      <ol className="steps">
        <li><strong>Review:</strong> identify the most valuable services, customer questions, real coverage and current contact journey.</li>
        <li><strong>Plan:</strong> agree the pages, content, images, technical requirements, budget and responsibilities in writing.</li>
        <li><strong>Build:</strong> create responsive pages with readable copy, accessible controls, clear contact links and sensible internal linking.</li>
        <li><strong>Check:</strong> test mobile layouts, page titles, links, forms and the enquiry route before launch.</li>
        <li><strong>Improve:</strong> review Search Console and agreed analytics data over time, then prioritise changes based on actual queries and enquiries.</li>
      </ol>
      <p>This is a planning framework, not a promise of a particular ranking or number of leads. Search performance depends on competition, demand, reputation, the quality of the service and many other factors. Never publish fabricated testimonials, unearned awards or results from a demo as if they belong to your business.</p>
    </div></section>
    <section className="sec"><div className="wrap"><div className="marketing-section-heading"><p className="eyebrow">PAGE PLAN · {n.name.toUpperCase()}</p><h2>A useful service page, section by section.</h2><p>Use this as a content brief. Only publish services, locations, credentials and availability that are accurate for your business.</p></div><div className="industry-outline-grid"><article><span>01</span><h3>Service and customer fit</h3><p>Say what the service covers, which property or customer types you accept, and the problems you can assess.</p></article><article><span>02</span><h3>What is included</h3><p>List the normal steps, inclusions, exclusions and any factors that change the final quote.</p></article><article><span>03</span><h3>Coverage and availability</h3><p>Name only the districts your team can serve. Explain opening hours, scheduling limits and call-out conditions honestly.</p></article><article><span>04</span><h3>Trust and next step</h3><p>Use genuine project photos, real reviews with permission, verified credentials and one clear call or WhatsApp action.</p></article></div><div className="industry-local-example"><div><p className="eyebrow">LOCAL CONTENT EXAMPLE</p><h3>Make the location genuinely useful.</h3></div><p>For a business serving Dubai, a strong location section explains where teams travel, typical scheduling constraints, property types served and how a customer can confirm availability. Do not create near-identical pages for Dubai, Abu Dhabi and Sharjah by swapping place names. Create a location page only when you have distinct, accurate details that help a local customer decide.</p></div><div className="industry-checklist"><h3>Before publishing this page</h3><ul><li>Confirm the service is currently offered and the wording is technically accurate.</li><li>Check contact links and the enquiry path on a mobile phone.</li><li>Add useful internal links to related services, pricing and contact pages.</li><li>Use an original title and description that match the actual page.</li><li>Include real photos or clearly licensed illustrative images; never imply stock photos are your completed work.</li><li>Measure enquiries only after analytics events have been configured and tested.</li></ul></div><p className="industry-reading">Helpful reading: <Link href="/blog/local-seo-uae-service-businesses">Local SEO for UAE service businesses</Link> · <Link href="/blog/website-design-uae-service-businesses">Website design for UAE service businesses</Link> · <Link href="/blog/pages-service-company-website">What pages does a service company website need?</Link></p></div></section>
    <section className="sec alt"><div className="wrap narrow">
      <h2>See a relevant example and compare packages</h2>
      <p>Our <Link href="/demos/ac-maintenance">AC maintenance concept demo</Link> shows how service information and WhatsApp contact can be organised for a mobile visitor. It is a fictional demonstration, not a real client website or evidence of business results.</p>
      <p>Review the <Link href="/pricing">website design packages and pricing</Link> for current published starting prices, then read the <Link href="/blog/website-design-cost-dubai">Dubai website design cost guide</Link> for budgeting factors, ongoing costs and questions to ask before approving a quote. Final scope depends on page count, content, language, integrations and support needs.</p>
      <h2>Frequently asked questions</h2>
      {faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      <p className="muted">Explore other industries: {NICHES.filter((x) => x.slug !== n.slug).map((x, i) => <span key={x.slug}>{i ? " · " : ""}<Link href={`/niches/${x.slug}`}>{x.name}</Link></span>)}</p>
    </div></section>
  </>;
}
