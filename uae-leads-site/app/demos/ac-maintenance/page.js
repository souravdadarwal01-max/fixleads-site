import Link from "next/link";
import { SITE, wa } from "../../../lib/site";

export const metadata = {
  title: "AC Maintenance Website Demo for Dubai",
  description: "A fictional AC maintenance website concept demonstrating service information, coverage details and WhatsApp enquiries for a UAE home-service business.",
  alternates: { canonical: "/demos/ac-maintenance" },
  robots: { index: false, follow: true },
};

const services = [
  ["01", "AC repair", "A clear place to explain common faults, diagnostics and how customers can request a visit."],
  ["02", "AC servicing", "Describe routine cleaning and maintenance in plain language, with the next step easy to find."],
  ["03", "Maintenance plans", "Explain what a plan includes, who it suits and how customers can ask for a tailored quote."],
];

export default function ACMaintenanceDemo() {
  const demoMessage = "Hi FixLeads Studio, I viewed the CoolBreeze AC Services concept demo and would like to discuss a website for my business.";
  return <>
    <div className="demo-notice"><div className="wrap"><span>CONCEPT DEMO</span> CoolBreeze AC Services is a fictional example created by FixLeads Studio. It is not a real service provider. <Link href="/work">View all concepts ↗</Link></div></div>
    <section className="ac-demo-hero"><div className="wrap ac-demo-hero-grid"><div className="ac-demo-copy"><p className="ac-demo-kicker"><span /> AC CARE · DUBAI CONCEPT</p><h1>Comfort starts with AC care you can understand.</h1><p>AC repair, routine servicing and maintenance-plan information—organised so customers can quickly find the service they need and ask the right questions.</p><div className="cta"><a className="btn ac-demo-cta" href={wa(demoMessage)} target="_blank" rel="noopener noreferrer">See the enquiry path <span aria-hidden="true">↗</span></a><a className="ac-demo-phone" href="#services">Explore services ↓</a></div><div className="ac-demo-trust"><span>✓ Clear service options</span><span>✓ Mobile-friendly layout</span><span>✓ Simple contact route</span></div></div><div className="ac-demo-visual" role="img" aria-label="Illustrative abstract cooling airflow artwork"><div className="ac-orbit ac-orbit-one" /><div className="ac-orbit ac-orbit-two" /><div className="ac-snowflake">✳</div><div className="ac-visual-caption"><small>COOLBREEZE CONCEPT</small><strong>Comfort, made simple.</strong><span>Illustrative design · Not a real provider</span></div><div className="ac-visual-badge">AC SERVICE<br /><b>DEMO</b></div></div></div></section>
    <section className="ac-demo-strip"><div className="wrap ac-demo-strip-inner"><span>DEMO FEATURE</span><p>Important information is organised around the questions customers typically ask before contacting a service company.</p></div></section>
    <section className="sec ac-demo-services" id="services"><div className="wrap"><div className="ac-demo-section-heading"><p className="eyebrow">SERVICE OPTIONS</p><h2>Find the right next step.</h2><p className="muted">This fictional layout demonstrates how individual service options can be explained without overwhelming a mobile visitor.</p></div><div className="ac-demo-service-grid">{services.map(([number, title, text]) => <article className="ac-demo-service-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><a href={wa(demoMessage)} target="_blank" rel="noopener noreferrer">Discuss this website layout ↗</a></article>)}</div></div></section>
    <section className="sec ac-demo-coverage"><div className="wrap ac-demo-coverage-grid"><div><p className="eyebrow">SERVICE AREA INFORMATION</p><h2>Tell visitors where you work.</h2><p className="muted">A real business should list only the locations it genuinely serves. This demo uses Dubai as an example and makes no claim that a service team operates there.</p></div><div className="ac-demo-area-card"><span className="ac-demo-pin">⌖</span><div><strong>Dubai, UAE</strong><p>Example service-area section</p><small>Replace with verified coverage before a real launch.</small></div></div></div></section>
    <section className="ac-demo-bottom"><div className="wrap ac-demo-bottom-inner"><div><p className="eyebrow">LIKE THIS APPROACH?</p><h2>Let’s plan a website around your actual services.</h2><p>We’ll discuss your business, service areas and customer journey before agreeing the scope.</p></div><a className="btn ac-demo-cta" href={wa("Hi FixLeads Studio, I viewed the AC maintenance concept demo. I'd like a website review for my own UAE service business.")} target="_blank" rel="noopener noreferrer">Talk to FixLeads Studio ↗</a></div></section>
    <div className="ac-demo-back"><div className="wrap"><Link href="/work">← Back to concept portfolio</Link><span>Fictional demonstration only · No real bookings accepted</span></div></div>
  </>;
}
