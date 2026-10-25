import { MarketingCta, PageMetadataJsonLd } from "../components/MarketingShell";
import EnquiryForm from "../components/EnquiryForm";

export const metadata = {
  title: "Request a Website Quote | FixLeads Studio",
  description: "Tell FixLeads Studio about your UAE service business and request a practical website design or local SEO quote.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact FixLeads Studio", description: "Request a practical website review or quote for your UAE service business.", url: "/contact", type: "website" },
};

export default function ContactPage() {
  return <><PageMetadataJsonLd title="Contact FixLeads Studio" description="Request a website review or quote." path="/contact" /><section className="marketing-hero"><div className="wrap marketing-hero-grid"><div><p className="eyebrow">CONTACT · UAE SERVICE BUSINESSES</p><h1>Tell us what your website needs to do.</h1><p className="marketing-lead">Share your service, target areas and goals. We'll use the details to discuss a sensible starting scope—without promising instant rankings or guaranteed leads.</p><ul className="contact-points"><li>Website builds and improvements</li><li>Service-page structure and local SEO foundations</li><li>Written scope and clear next steps</li></ul></div><div className="contact-direct"><h2>Prefer to message us?</h2><p>You can contact us directly by email or WhatsApp.</p><a className="btn" href="https://wa.me/917023829009?text=Hi%20FixLeads%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20UAE%20service%20business." target="_blank" rel="noopener noreferrer">Message on WhatsApp ↗</a><p><a href="mailto:hellofixleadsstudio@gmail.com">hellofixleadsstudio@gmail.com</a></p><small>Remote studio · UAE-focused service</small></div></div></section><section className="sec alt"><div className="wrap"><EnquiryForm /></div></section><MarketingCta title="Want to understand the process first?" text="See the steps, package starting prices and concept projects before deciding." /></>;
}
