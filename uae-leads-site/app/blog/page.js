import Link from "next/link";
import { SITE, wa } from "../../lib/site";

const posts = [{
  slug: "website-design-cost-dubai",
  title: "Website Design Cost in Dubai (2026): Prices, Packages & Budget",
  description: "Compare Dubai website design price ranges, ongoing costs, SEO essentials and a practical checklist for choosing a website package.",
  category: "Website design",
  readTime: "8 min read",
}];

export const metadata = {
  title: "Website Design & Local SEO Guides for UAE Businesses",
  description: "Practical website design, pricing and local SEO guides for service businesses in Dubai and across the UAE.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return <>
    <section className="blog-index-hero">
      <div className="wrap blog-index-hero-grid">
        <div className="blog-index-intro">
          <p className="cap">FIXLEADS STUDIO · INSIGHTS</p>
          <h1>Practical growth guides for UAE service businesses</h1>
          <p className="lead">Straightforward advice on websites, pricing and local visibility—without the jargon.</p>
          <div className="blog-index-tags"><span>Website design</span><span>Local SEO</span><span>Business growth</span></div>
        </div>
        <img className="blog-index-hero-image" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85" alt="Website analytics dashboard on a laptop, illustrating digital growth and website performance" width="1000" height="720" fetchPriority="high" />
      </div>
    </section>
    <section className="sec"><div className="wrap">
      <div className="blog-list-heading"><div><p className="cap">THE LATEST GUIDE</p><h2>Ideas you can put into practice</h2></div><p>Clear, practical reading for owners of local service businesses.</p></div>
      <div className="blog-grid">{posts.map(post => <article className="blog-card blog-featured-card" key={post.slug}>
        <Link className="blog-card-image-link" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
          <img className="blog-card-image" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85" alt="Business analytics charts on a screen" width="1000" height="620" loading="lazy" />
        </Link>
        <div className="blog-card-content">
          <p className="blog-meta">{post.category} <span>·</span> {post.readTime}</p>
          <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
          <p>{post.description}</p>
          <Link className="blog-read" href={`/blog/${post.slug}`}>Read the guide <span aria-hidden="true">→</span></Link>
        </div>
      </article>)}</div>
      <div className="blog-cta"><h2>Want a clearer plan for your website?</h2><p>We can review your current website and share practical improvements for mobile enquiries and local SEO.</p><a className="btn" href={wa("Hi, I'd like a free website review.")}>Get a free website review</a></div>
    </div></section>
  </>;
}
