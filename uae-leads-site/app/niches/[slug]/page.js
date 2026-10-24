import Link from "next/link";
import { notFound } from "next/navigation";
import { NICHES } from "../../../lib/niches";
import { SITE, wa } from "../../../lib/site";
export const generateStaticParams = () => NICHES.map(n => ({ slug: n.slug }));
const find = async (p) => NICHES.find(n => n.slug === (await p).slug);
export async function generateMetadata({ params }) {
  const n = await find(params); if (!n) return {};
  return { title: n.h1, description: n.intro, alternates: { canonical: `/niches/${n.slug}` } };
}
export default async function Niche({ params }) {
  const n = await find(params); if (!n) notFound();
  const faq = [n.q, ...SITE.faq.slice(0, 2)];
  const ld = [
    { "@context": "https://schema.org", "@type": "Service", name: n.h1, provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url }, areaServed: { "@type": "Country", name: "United Arab Emirates" }, serviceType: `Website design and local SEO for ${n.name.toLowerCase()} companies` },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <section className="hero"><div className="wrap narrow">
      <h1>{n.h1}</h1><p className="lead">{n.intro}</p>
      <a className="btn" href={wa(`Hi, I run a ${n.name.toLowerCase()} company and want a website review.`)}>Get a free website review</a>
    </div></section>
    <section className="sec"><div className="wrap narrow">
      <h2>Pages we build for you</h2>
      <ul className="ticks">{n.pages.map(p => <li key={p}>{p}</li>)}</ul>
      <p>Every page loads fast on mobile, shows what is included, and has call and WhatsApp buttons within thumb reach. We also add schema markup and connect tracking so you can see calls and enquiries.</p>
    </div></section>
    <section className="sec alt"><div className="wrap narrow">
      <h2>Questions</h2>
      {faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      <p className="muted">Other industries: {NICHES.filter(x => x.slug !== n.slug).map((x, i) => <span key={x.slug}>{i ? ", " : ""}<Link href={`/niches/${x.slug}`}>{x.name}</Link></span>)}</p>
    </div></section>
  </>);
}
