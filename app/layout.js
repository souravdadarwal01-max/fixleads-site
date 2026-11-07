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
          <nav><Link href="/#niches">Industries</Link><Link href="/#pricing">Pricing</Link><Link href="/#faq">FAQ</Link>
            <a className="btn sm" href={wa("Hi, I'd like a free website review.")}>Free review</a></nav>
        </div></header>
        <main>{children}</main>
        <footer><div className="wrap">
          <p>{SITE.name} is a remote web studio serving businesses across the UAE.</p>
          <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div></footer>
      </body>
    </html>
  );
}
