import Link from "next/link";
import { SITE, wa } from "../../lib/site";

const posts = [
  { slug: "ai-search-uae-service-businesses", title: "AI Search Visibility for UAE Service Businesses: What to Do in 2026", description: "Make your Dubai service business easier to understand, crawl and trust across Google Search and AI-powered search experiences.", category: "Search strategy", readTime: "11 min read" },
  { slug: "google-indexing-service-pages-uae", title: "Why Google Isn't Indexing Your UAE Service Pages: A Troubleshooting Guide", description: "Diagnose discovery, crawling, canonical and content-quality issues when new Dubai service-business pages are missing from Google Search.", category: "Technical SEO", readTime: "11 min read" },
  { slug: "whatsapp-lead-generation-dubai", title: "WhatsApp Lead Generation for Dubai Service Businesses: Website Setup Guide", description: "Turn website visits into better WhatsApp enquiries with clear calls to action, useful pre-filled messages and reliable follow-up.", category: "Lead generation", readTime: "11 min read" },
  { slug: "mobile-website-speed-uae", title: "Mobile Website Speed for UAE Service Businesses: A Practical Fix List", description: "Check mobile performance, Core Web Vitals and practical fixes for images, scripts and layout.", category: "Website performance", readTime: "10 min read" },
  { slug: "google-maps-ranking-factors-dubai", title: "Google Maps Ranking Factors for Dubai Service Companies", description: "Understand relevance, distance and prominence, then use a practical Google Business Profile checklist without ranking guarantees.", category: "Local SEO", readTime: "12 min read" },
  { slug: "track-whatsapp-clicks-ga4", title: "How to Track Calls and WhatsApp Clicks with GA4 and Search Console", description: "Separate Google Search performance from phone taps, WhatsApp clicks and confirmed enquiries with a practical measurement setup.", category: "Analytics", readTime: "13 min read" },
  { slug: "local-business-schema-uae", title: "LocalBusiness and Service Schema for UAE Websites: A Practical Setup Guide", description: "Choose accurate business and service structured data, use JSON-LD examples and validate markup without promising rich results.", category: "Technical SEO", readTime: "12 min read" },
  { slug: "uae-business-directories-citations", title: "UAE Business Directories and Citations Worth Using", description: "Prioritise useful UAE map listings, official directories and relevant citations while avoiding low-value bulk submissions.", category: "Local SEO", readTime: "11 min read" },
  { slug: "local-seo-checklist-new-business-uae", title: "Local SEO Checklist for a New Service Business in the UAE: First 30 Days", description: "A practical 30-day local SEO checklist for new UAE AC, plumbing, cleaning and pest control businesses.", category: "Local SEO", readTime: "12 min read" },
  { slug: "how-long-local-seo-takes-dubai", title: "How Long Does Local SEO Take in Dubai? Realistic Timelines", description: "Separate crawling, indexing and ranking, and learn what to measure without relying on guaranteed timelines.", category: "Local SEO", readTime: "10 min read" },
  { slug: "more-google-reviews-uae", title: "How to Get More Google Reviews for a UAE Service Business", description: "A policy-aware process for requesting honest reviews, sharing the right link and responding professionally.", category: "Local SEO", readTime: "10 min read" },
  { slug: "service-area-pages-dubai-seo", title: "Service Pages and Area Pages: How to Structure a Dubai Local SEO Website", description: "Decide when to build service pages or area pages, and avoid thin location pages that add little value.", category: "Local SEO", readTime: "11 min read" },
  { slug: "google-business-profile-service-area-uae", title: "Google Business Profile for UAE Service-Area Businesses: Setup Checklist", description: "A practical setup checklist for UAE AC, plumbing, cleaning and pest control businesses that travel to customers.", category: "Local SEO", readTime: "9 min read" },
  { slug: "whatsapp-quote-button-website", title: "How to Add a WhatsApp Quote Button to Your Website", description: "Set up a helpful click-to-chat CTA, prefill a quote message, test mobile behaviour and measure real enquiries.", category: "Lead generation", readTime: "9 min read" },
  { slug: "local-seo-uae-service-businesses", title: "Local SEO for UAE Service Businesses: The Complete 2026 Guide", description: "A practical guide to Google Business Profile, service pages, reviews, technical SEO and measuring local enquiries in the UAE.", category: "Local SEO", readTime: "20 min read" },
  { slug: "website-design-uae-service-businesses", title: "Website Design for UAE Service Businesses: Costs, Pages and What to Ask Before You Hire (2026)", description: "A practical guide to website planning, budgets, service pages and SEO for UAE service businesses.", category: "Website design", readTime: "12 min read" },
  { slug: "small-business-website-cost-uae", title: "How Much Does a Small Business Website Cost in the UAE?", description: "Understand website build fees and ongoing costs for a UAE small business.", category: "Website pricing", readTime: "10 min read" },
  { slug: "pages-service-company-website", title: "What Pages Does a Service Company Website Need?", description: "A practical page-by-page website structure for service companies.", category: "Website planning", readTime: "10 min read" },
  { slug: "landing-page-vs-website-uae", title: "Landing Page or Full Website: What a New UAE Service Business Needs", description: "Choose a landing page or full website based on customer journey and growth plans.", category: "Website planning", readTime: "9 min read" },
  { slug: "web-design-quote-checklist-dubai", title: "Website Design Quote Checklist: 15 Questions to Ask a Dubai Agency", description: "Compare website proposals and clarify scope, SEO, ownership and support.", category: "Hiring a web designer", readTime: "10 min read" },
  { slug: "freelancer-vs-agency-website-dubai", title: "Freelancer, Agency or DIY Builder: Which Is Right for a UAE Business Website?", description: "Compare website builders, freelancers and agencies by cost, skills and support.", category: "Choosing a provider", readTime: "10 min read" },
  { slug: "website-maintenance-cost-uae", title: "Website Maintenance Cost in the UAE: What You Pay After Launch", description: "Learn what maintenance covers and how to choose website support.", category: "Website maintenance", readTime: "9 min read" },
  { slug: "domain-hosting-email-uae-business", title: "Domain, Hosting and Business Email for a UAE Website: What to Buy", description: "Understand domains, hosting, DNS and business email before launch.", category: "Website essentials", readTime: "10 min read" },
  { slug: "ae-vs-com-domain-uae", title: ".ae or .com? Choosing a Domain for a UAE Business", description: "Compare domain extensions by audience, brand fit, eligibility and cost.", category: "Domains", readTime: "9 min read" },
  { slug: "how-long-website-build-dubai", title: "How Long Does It Take to Build a Business Website in Dubai?", description: "A realistic website project timeline from discovery to launch.", category: "Website planning", readTime: "9 min read" },
  { slug: "website-design-cost-dubai", title: "Website Design Cost in Dubai (2026): Prices, Packages & Budget", description: "Compare Dubai website design price ranges, ongoing costs, SEO essentials and a practical checklist for choosing a website package.", category: "Website design", readTime: "8 min read" }
];

export const metadata = {
  title: "Website Design & Local SEO Guides for UAE Businesses",
  description: "Practical website design, pricing and local SEO guides for service businesses in Dubai and across the UAE.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Website Design & Local SEO Guides for UAE Businesses | FixLeads Studio", description: "Practical website design, pricing and local SEO guides for service businesses in Dubai and across the UAE.", url: "/blog", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "FixLeads Studio — web design and local SEO for UAE home-service businesses" }] },
};

export default function BlogIndex() {
  return <>
    <section className="marketing-hero blog-index-hero">
      <div className="wrap marketing-hero-grid blog-index-hero-grid">
        <div className="blog-index-intro">
          <p className="cap">FIXLEADS STUDIO · INSIGHTS</p>
          <h1>Practical growth guides for UAE service businesses</h1>
          <p className="lead">Straightforward advice on websites, pricing and local visibility—without the jargon.</p>
          <div className="blog-index-tags"><span>Website design</span><span>Local SEO</span><span>Business growth</span></div>
        </div>
        <img className="marketing-image" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85" alt="Website design displayed on a laptop, representing website content and digital learning" width="900" height="700" fetchPriority="high" />
      </div>
    </section>
    <section className="sec"><div className="wrap">
      <div className="blog-list-heading"><div><p className="cap">THE LATEST GUIDE</p><h2>Ideas you can put into practice</h2></div><p>Clear, practical reading for owners of local service businesses.</p></div>
      <div className="blog-grid">{posts.map(post => <article className="blog-card blog-featured-card" key={post.slug}>
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
