"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nCompany: ${form.get("company")}\nPhone: ${form.get("phone")}\nRequirement: ${form.get("requirement")}\nMessage: ${form.get("message")}`,
    );
    setSent(true);
    window.location.href = `mailto:revapetpreforms@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label><span>Your name *</span><input name="name" required autoComplete="name" placeholder="Full name" /></label>
        <label><span>Company</span><input name="company" autoComplete="organization" placeholder="Company name" /></label>
      </div>
      <div className="field-row">
        <label><span>Phone number *</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="+91" /></label>
        <label><span>Product requirement</span><input name="requirement" placeholder="Example: 63mm / 30gm" /></label>
      </div>
      <label><span>Tell us what you need *</span><textarea name="message" required rows={5} placeholder="Quantity, application, colour or any other requirement" /></label>
      <button className="button button-primary" type="submit"><Send size={18} /> Prepare email enquiry</button>
      {sent && <p className="form-message" role="status">Your email app should open with the enquiry prepared. You can also contact us directly by phone or WhatsApp.</p>}
    </form>
  );
}
