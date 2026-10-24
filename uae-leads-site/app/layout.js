import "./globals.css";
import Link from "next/link";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { SITE, wa } from "../lib/site";
const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-head" });
const body = Manrope({ subsets: ["latin"], variable: "--f-body" });
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `Website design for UAE home-service companies | ${SITE.name}`, template: `%s | ${SITE.name}` },
  description: "Fast mobile websites with service pages, click-to-call, WhatsApp enquiries and local SEO for AC, plumbing, pest control and cleaning companies in the UAE.",
  alternates: { canonical: "/" },
  openGraph: { locale: "en_AE", type: "website", siteName: SITE.name },
};
const ld = { "@context": "https://schema.org", "@type": "ProfessionalService", name: SITE.name, url: SITE.url, email: SITE.email, areaServed: { "@type": "Country", name: "United Arab Emirates" }, description: "Remote web design and local SEO studio for UAE home-service companies." };
export default function Root({ children }) {
  return (
    <html lang="en-AE" className={`${head.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <header className="bar"><div className="wrap row">
          <Link href="/" className="logo">{SITE.name}</Link>
          <nav><Link href="/#niches">Industries</Link><Link href="/blog">Blog</Link><Link href="/#pricing">Pricing</Link><Link href="/#faq">FAQ</Link>
            <a className="btn sm" href={wa("Hi, I'd like a free website review.")}>Free review</a></nav>
        </div></header>
        <main>{children}</main>
        <a className="floating-whatsapp" href={wa("Hi, I'd like a free website review for my UAE service business.")} target="_blank" rel="noopener noreferrer" aria-label="Chat with FixLeads Studio on WhatsApp">
          <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.04 3.2A12.7 12.7 0 0 0 5.1 22.34L3.3 28.9l6.72-1.76A12.72 12.72 0 1 0 16.04 3.2Zm0 23.1c-1.98 0-3.92-.53-5.62-1.55l-.4-.24-3.99 1.04 1.06-3.89-.26-.41a10.34 10.34 0 1 1 9.21 5.05Zm5.68-7.75c-.31-.16-1.85-.91-2.14-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.85-.76 2.11-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z"/></svg>
        </a>
        <footer><div className="wrap">
          <p>{SITE.name} is a remote web studio serving businesses across the UAE.</p>
          <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div></footer>
      </body>
    </html>
  );
}
