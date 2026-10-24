import Link from "next/link";
import { SITE, wa } from "../../lib/site";

const posts = [{
  slug: "website-design-cost-dubai",
  title: "How Much Does Website Design Cost in Dubai? (2026 Guide)",
  description: "A practical guide to website design costs in Dubai, what affects pricing, and how to choose the right scope for your business.",
  category: "Website design",
  readTime: "7 min read",
}];

export const metadata = {
  title: "Website Design & Local SEO Guides for UAE Businesses",
  description: "Practical website design, pricing and local SEO guides for service businesses in Dubai and across the UAE.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return <>
    <section className="hero"><div className="wrap narrow">
      <p className="cap">FIXLEADS STUDIO · INSIGHTS</p>
      <h1>Practical growth guides for UAE service businesses</h1>
      <p className="lead">Straightforward advice on websites, pricing and local visibility—without the jargon.</p>
    </div></section>
    <section className="sec"><div className="wrap">
      <div className="blog-grid">{posts.map(post => <article className="blog-card" key={post.slug}>
        <p className="blog-meta">{post.category} <span>·</span> {post.readTime}</p>
        <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
        <p>{post.description}</p>
        <Link className="blog-read" href={`/blog/${post.slug}`}>Read the guide <span aria-hidden="true">→</span></Link>
      </article>)}</div>
      <div className="blog-cta"><h2>Want a clearer plan for your website?</h2><p>We can review your current website and share practical improvements for mobile enquiries and local SEO.</p><a className="btn" href={wa("Hi, I'd like a free website review.")}>Get a free website review</a></div>
    </div></section>
  </>;
}
