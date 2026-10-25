"use client";

import { useState } from "react";
import { SITE, wa } from "../../lib/site";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ name: "", business: "", email: "", phone: "", service: "Website design", location: "", website: "", message: "" });
  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    const body = [
      "New website enquiry for FixLeads Studio",
      `Name: ${values.name}`, `Business: ${values.business || "Not provided"}`,
      `Email: ${values.email}`, `Phone / WhatsApp: ${values.phone || "Not provided"}`,
      `Service: ${values.service}`, `Target locations: ${values.location || "Not provided"}`,
      `Current website: ${values.website || "Not provided"}`, `Requirements: ${values.message || "Not provided"}`
    ].join("\n");
    const text = `Hi FixLeads Studio, I'd like to enquire about your services.\n\n${body}`;
    window.open(wa(text), "_blank", "noopener,noreferrer");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Website enquiry — " + values.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return <form className="enquiry-form" onSubmit={submit}>
    <div className="enquiry-form-heading"><p className="eyebrow">TELL US ABOUT YOUR BUSINESS</p><h2>Request a practical quote</h2><p>Share a few details. We'll use them to understand your services and the scope you have in mind.</p></div>
    <div className="enquiry-fields">
      <label>Your name *<input name="name" value={values.name} onChange={update} required autoComplete="name" /></label>
      <label>Business name<input name="business" value={values.business} onChange={update} autoComplete="organization" /></label>
      <label>Email address *<input name="email" type="email" value={values.email} onChange={update} required autoComplete="email" /></label>
      <label>Phone / WhatsApp<input name="phone" value={values.phone} onChange={update} autoComplete="tel" /></label>
      <label>What do you need? *<select name="service" value={values.service} onChange={update} required><option>Website design</option><option>Website improvements</option><option>Local SEO</option><option>Website + local SEO</option><option>Not sure yet</option></select></label>
      <label>UAE service areas<input name="location" value={values.location} onChange={update} placeholder="e.g. Dubai, Sharjah" /></label>
      <label className="enquiry-full">Current website (if any)<input name="website" type="url" value={values.website} onChange={update} placeholder="https://" /></label>
      <label className="enquiry-full">What would you like to improve?<textarea name="message" value={values.message} onChange={update} rows="4" placeholder="Services, pages, enquiry goals, preferred timing…" /></label>
    </div>
    <label className="enquiry-consent"><input type="checkbox" required /> I agree that FixLeads Studio may use these details to respond to my enquiry. See the <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>.</label>
    <button className="btn" type="submit">Continue to WhatsApp / email ↗</button>
    <p className="enquiry-small">This form opens WhatsApp and your email app to send the details. It does not save a submission to a website database.</p>
    {sent && <p className="enquiry-success" role="status">Your messaging apps should have opened. Please send the prepared message to complete your enquiry.</p>}
  </form>;
}
