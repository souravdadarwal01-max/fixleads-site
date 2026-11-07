import Link from "next/link";
import { SITE } from "../../../lib/site";

const title = "Arabic and English Website Design in the UAE: A Practical Bilingual SEO Checklist";
const description = "Plan an Arabic-English website for a UAE service business with clear language switching, right-to-left layouts, translated service pages, URL structure and hreflang checks.";
const image = "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1400&q=85";
const url = SITE.url + "/blog/arabic-english-website-design-uae";
const faqs = [
  ["Does every UAE business need an Arabic and English website?", "Not automatically. Choose languages based on the customers you serve, the enquiries you receive and your ability to maintain accurate content and respond in each language. A smaller, well-maintained bilingual site is better than two incomplete versions."],
  ["Should Arabic and English pages use separate URLs?", "For a site with separate language versions, use stable, crawlable URLs for each language, such as /en/ and /ar/. This makes each version directly accessible and easier to connect with hreflang annotations."],
  ["What hreflang values should a UAE website use?", "If the pages target English and Arabic speakers in the UAE, en-AE and ar-AE are reasonable language-region examples. Use en and ar when the pages target those languages without a specific regional audience. Match the codes to the actual content and audience."],
  ["Is translating the English page enough for Arabic SEO?", "No. Research Arabic search wording and customer questions separately. Translate the meaning accurately, adapt examples and service terminology, and have a fluent reviewer check the final copy."],
  ["Does an Arabic website need a different layout?", "Arabic content needs correct right-to-left text direction and careful testing of navigation, forms, mixed-language text, icons and mobile layouts. Simply aligning paragraphs to the right does not create a complete RTL experience."]
];
const ld = [
  {"@context":"https://schema.org","@type":"Article",headline:title,description,image:[image],datePublished:"2026-11-07",dateModified:"2026-11-07",author:{"@type":"Organization",name:SITE.name,url:SITE.url},publisher:{"@type":"Organization",name:SITE.name,url:SITE.url},mainEntityOfPage:{"@type":"WebPage","@id":url}},
  {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:SITE.url},{"@type":"ListItem",position:2,name:"Blog",item:SITE.url+"/blog"},{"@type":"ListItem",position:3,name:title,item:url}]},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}
];
export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog/arabic-english-website-design-uae" },
  openGraph: { title, description, type: "article", url: "/blog/arabic-english-website-design-uae", images: [{ url: image, alt: "Designer reviewing a website layout on a computer" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] }
};

export default function Article() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/><article>
    <section className="hero"><div className="wrap narrow">
      <p className="cap"><Link href="/">HOME</Link> · <Link href="/blog">BLOG</Link> · WEBSITE PLANNING</p>
      <h1>{title}</h1><p className="lead">{description}</p>
      <p className="blog-meta">Published November 7, 2026 · 12 min read</p>
      <img src={image} alt="Designer reviewing a website layout on a computer" className="blog-hero-image" width="1400" height="900" fetchPriority="high"/>
    </div></section>
    <section className="sec"><div className="wrap narrow blog-article">
      <p>A bilingual website can help a UAE service business explain its work to customers who prefer different languages. But adding an Arabic button to an English website is only the beginning. The Arabic pages need accurate content, a right-to-left reading experience, working contact routes and a technical structure that lets visitors and search engines reach the correct version.</p>
      <p>This guide is for businesses such as AC maintenance companies, plumbers, cleaning teams, pest-control providers and other local services planning an English-Arabic website. The aim is not to translate every sentence twice. It is to build two complete, usable customer journeys that the business can maintain.</p>

      <h2>1. Decide whether bilingual content is useful for your customers</h2>
      <p>Start with evidence from the business rather than assuming every UAE visitor wants the same language. Review the languages used in customer calls, WhatsApp conversations, quote requests and sales discussions. Ask existing customers which language they prefer for service information and follow-up. Search Console query data can also reveal the wording people use to find your existing pages, although it will not tell you every visitor's preferred language.</p>
      <p>Consider whether your team can answer enquiries in both languages. If the website invites an Arabic conversation but nobody can respond clearly, the experience breaks after the click. You can begin with the highest-value pages and expand when the business has a reliable translation and response process.</p>
      <p>For the wider planning process, see our <Link href="/blog/website-design-uae-service-businesses">website design guide for UAE service businesses</Link>.</p>

      <h2>2. Plan the URL structure before translating pages</h2>
      <p>Give each language version a stable URL that can be opened, shared, crawled and indexed on its own. A common structure is a language folder, for example:</p>
      <ul>
        <li><code>example.com/en/ac-maintenance/</code> for the English service page.</li>
        <li><code>example.com/ar/ac-maintenance/</code> for its Arabic equivalent.</li>
      </ul>
      <p>The example domain and paths are illustrative. You could use another consistent structure, but decide it before publishing many translated pages. Keep equivalent pages paired: the Arabic AC maintenance page should link to the English AC maintenance page, not send visitors to the English homepage.</p>
      <p>Avoid making language availability depend only on a cookie, browser setting or visitor IP address. Google explains that locale-adaptive pages can be difficult to crawl consistently and recommends separate locale URLs with appropriate annotations. Read Google's guidance on <a href="https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages" target="_blank" rel="noopener noreferrer">how Google crawls locale-adaptive pages</a>.</p>

      <h2>3. Research Arabic and English search intent separately</h2>
      <p>Do not assume that an English service keyword translated word for word is the phrase Arabic-speaking customers actually search. People may use different service terms, spellings, levels of formality or descriptions of the problem. Research both languages independently and ask staff who speak Arabic to review the phrases customers use in real conversations.</p>
      <p>Build a small keyword and question map for each priority service. For example, an AC company might research how customers describe maintenance, repair, installation, emergency visits and annual servicing in each language. Match each phrase to a page that genuinely answers that need. Do not create a separate page for every spelling variation.</p>
      <p>Keep the page's purpose consistent across languages while allowing the wording and examples to sound natural. The Arabic page should be written for an Arabic-speaking customer, not read like an English paragraph passed through a translation tool.</p>

      <h2>4. Translate the whole customer journey, not only the main paragraph</h2>
      <p>List every customer-facing element that needs a language decision: navigation, service names, buttons, forms, validation messages, confirmation screens, FAQs, image descriptions, contact details, privacy information and follow-up messages. A page is not truly bilingual if the headline is translated but the quote form and success message remain in English.</p>
      <p>Use a translator or fluent reviewer who understands the service. Check technical terms, local usage, tone and consistency. Keep a glossary for repeated terms such as maintenance visits, call-out fees, warranty conditions and service plans. If a phrase has no natural one-to-one translation, explain the service clearly rather than forcing a literal equivalent.</p>
      <p>Review practical details in both versions: service areas, working hours, what is included in a quote and how customers can prepare for a visit. Do not let translated copy introduce a promise or service that the company does not actually provide.</p>

      <h2>5. Build a proper right-to-left experience</h2>
      <p>Arabic is written from right to left. The page should communicate that direction to the browser, not merely use right-aligned text. For an Arabic document, the HTML root commonly needs language and direction attributes such as <code>lang="ar"</code> and <code>dir="rtl"</code>. The English version should use its own language and left-to-right direction.</p>
      <p>The HTML <code>dir</code> attribute sets text direction semantically. See the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/dir" target="_blank" rel="noopener noreferrer">MDN reference for the dir attribute</a> and the <a href="https://www.w3.org/International/quicktips/index.en" target="_blank" rel="noopener noreferrer">W3C internationalisation quick tips</a>.</p>
      <p>Test more than paragraph alignment. Review the order of navigation items, menus, breadcrumbs, cards, form labels, arrows, icons and progress indicators. Check that the layout does not break when Arabic text wraps onto additional lines. Use a font that includes the Arabic characters and weights you need, and allow suitable line height and spacing.</p>
      <p>Mixed-direction content needs particular care. Phone numbers, email addresses, website URLs, model numbers and English brand names may need to remain left to right inside an Arabic paragraph. Use appropriate direction markup, such as <code>dir="ltr"</code> or a <code>&lt;bdi&gt;</code> wrapper, for those pieces. Test them on actual phones, not only in a desktop preview.</p>

      <h2>6. Give each language a complete set of useful service pages</h2>
      <p>Prioritise the pages customers need to make a decision: the homepage, important service pages, about information, contact details and quote journey. If the English site explains AC repair, AC installation and annual maintenance separately, decide whether those services also need separate Arabic pages. The answer depends on customer demand and the business's ability to maintain the content.</p>
      <p>Keep the information equivalent where it matters: service scope, coverage, availability, exclusions and next steps. The wording does not have to be identical, but neither language should receive an outdated or incomplete version. Our guide to <Link href="/blog/pages-service-company-website">the pages a service company website needs</Link> can help you decide what belongs in the initial structure.</p>
      <p>Add a visible language switcher that takes visitors to the equivalent page when one exists. If a translation is not available, explain that clearly and offer a sensible route back to the language homepage. Do not send every language-switch click to the same generic page.</p>

      <h2>7. Connect language versions with hreflang and correct canonicals</h2>
      <p>When two URLs contain equivalent pages for different languages or regions, <code>hreflang</code> annotations help Google understand which version is intended for which audience. For an English and Arabic page aimed at UAE users, <code>en-AE</code> and <code>ar-AE</code> are examples of language-region codes. If the pages target English and Arabic speakers without a specific regional distinction, <code>en</code> and <code>ar</code> may be more appropriate.</p>
      <p>Google's <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" target="_blank" rel="noopener noreferrer">localized versions documentation</a> explains the supported formats and implementation rules. Each version should list itself and every alternate version, and the references should be reciprocal. Use absolute URLs and check the language codes carefully. An optional <code>x-default</code> can point to a language selector or suitable fallback page.</p>
      <p>Keep canonical URLs aligned with the language structure. The English page should normally have a canonical pointing to its own English URL, and the Arabic page to its own Arabic URL. Do not canonicalise every translated page to the English page; that can undermine the purpose of keeping separate indexable language versions.</p>
      <p>You can implement hreflang in the page head, HTTP headers or an XML sitemap. Choose a method your team can maintain and validate it across all language pairs. The HTML <code>lang</code> attribute is important for document language and accessibility, but Google says it does not use that attribute or hreflang to detect the language of a page; it uses its own systems for language identification.</p>

      <h2>8. Localise forms, WhatsApp and follow-up</h2>
      <p>Make the next action clear in both languages. Translate field labels, optional and required indicators, error messages, privacy explanations and confirmation text. If a customer requests a quote in Arabic, make sure the business can read and route that request correctly.</p>
      <p>For WhatsApp, use a pre-filled message in the selected language and test the destination number on a phone. Keep the service name or page context in the message where helpful, but do not include sensitive information automatically. A click only means someone selected the link; it does not confirm that a message was sent. See our guide to <Link href="/blog/track-whatsapp-clicks-ga4">measuring calls and WhatsApp clicks</Link> for the difference between interactions and completed enquiries.</p>
      <p>Agree who responds to each language, during which hours and through which channel. If Arabic support is available only at certain times, set expectations honestly. A translated website should not promise immediate bilingual support unless the business can provide it.</p>

      <h2>9. Use this bilingual website launch checklist</h2>
      <ul>
        <li>Choose languages based on customer needs and the team's ability to maintain them.</li>
        <li>Approve a consistent URL pattern for every language version.</li>
        <li>Research search phrases and customer questions separately in Arabic and English.</li>
        <li>Have service copy, forms, buttons and confirmation messages reviewed by fluent speakers.</li>
        <li>Set the correct document language and text direction for each version.</li>
        <li>Test mixed Arabic and English text, numbers, phone links and email addresses.</li>
        <li>Pair equivalent pages with reciprocal hreflang annotations.</li>
        <li>Check that each page has the correct self-referencing canonical and indexability settings.</li>
        <li>Include all intended canonical language URLs in the sitemap and link between pages in the same language.</li>
        <li>Test the language switcher, quote form, WhatsApp message and response workflow on mobile.</li>
      </ul>
      <p>For broader pre-launch checks, use our <Link href="/blog/website-accessibility-checklist-uae">website accessibility checklist</Link> and <Link href="/blog/google-indexing-service-pages-uae">guide to troubleshooting service-page indexing</Link>. If you are comparing providers, the <Link href="/blog/web-design-quote-checklist-dubai">Dubai website design quote checklist</Link> includes questions about scope, ownership and support.</p>

      <h2>10. Measure each language version after launch</h2>
      <p>Track the performance of English and Arabic URLs separately in Search Console. Review which queries lead to each version, whether the intended pages are indexed and whether visitors reach the service information they need. In analytics, compare form completions, phone taps and WhatsApp clicks by page and language. Keep click events separate from confirmed enquiries and booked work.</p>
      <p>Use the results to improve weak translations, missing service details and confusing contact paths. Do not judge a language version only by its traffic total; a smaller number of relevant enquiries may be more useful than a larger number of visits that cannot become customers.</p>

      <h2>Plan bilingual pages as part of the website scope</h2>
      <p>An Arabic-English website needs content planning, translation review, RTL testing, technical SEO and a follow-up process—not just a second menu label. Put those tasks in the project scope before development starts so the timeline and budget reflect the real work. If you are planning a new UAE service-business website, <Link href="/contact">contact FixLeads Studio</Link> to discuss the pages and language support your business needs.</p>

      <h2>Frequently asked questions</h2>
      {faqs.map(([q,a]) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}
    </div></section>
  </article></>;
}
