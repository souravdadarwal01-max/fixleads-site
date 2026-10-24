// EDIT THIS FILE FIRST: domain, WhatsApp number, email, prices, FAQ.
export const SITE = {
  name: "FixLeads Studio",
  url: "https://fixleadsstudio.com",
  whatsapp: "917023829009", // India country code +91, digits only
  email: "hello@fixleadsstudio.com", // set this mailbox up before launch
  plans: [
    { name: "Launch", price: "AED 2,500", note: "one-time", items: ["Up to 3 pages", "Call and WhatsApp buttons", "Mobile-first build", "Basic on-page SEO"] },
    { name: "Growth", price: "AED 5,500", note: "one-time", items: ["Up to 8 pages, one per service", "Local keyword research", "Schema markup and enquiry tracking", "Search Console and GA4 setup"] },
    { name: "Care", price: "AED 699", note: "per month", items: ["Updates and technical checks", "New service or area pages", "Monthly enquiry report"] },
  ],
  faq: [
    ["Do you guarantee Google rankings?", "No, and be careful with anyone who does. We build the page structure, content and tracking that give you a fair chance, and we report real enquiries each month."],
    ["Who owns the website and domain?", "You do. The domain is registered in your name and you get the code and logins at handover."],
    ["How long does a build take?", "Launch usually takes 1 to 2 weeks and Growth 2 to 4 weeks, once we have your services, photos and contact details."],
    ["Do you work from the UAE?", "We are a remote studio. We work with UAE businesses online and over WhatsApp."],
    ["Can the site be in Arabic as well?", "Yes, as an add-on. The scope and price are agreed in writing before we start."],
  ],
};
export const wa = (t) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t)}`;