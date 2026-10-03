import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description: "Contact Reva PET Preforms for product details and quotations. Call, WhatsApp or email our Gandhinagar team.",
};

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero">
        <div><p className="eyebrow">PRODUCT & COMMERCIAL ENQUIRIES</p><h1>Let’s discuss your packaging requirement.</h1><p>Share your neck size, gram weight, application and expected quantity. Our team will help you take the next step.</p></div>
      </section>
      <section className="section contact-layout">
        <div className="contact-details">
          <p className="eyebrow dark">CONTACT REVA</p>
          <h2>Direct answers from our team.</h2>
          <div className="contact-person"><span>Primary contact</span><strong>{contact.name}</strong></div>
          <div className="contact-methods">
            <a href={`tel:${contact.phoneLinks[0]}`}><span><Phone /></span><div><small>Call us</small><strong>{contact.phones[0]}</strong></div></a>
            <a href={`tel:${contact.phoneLinks[1]}`}><span><Phone /></span><div><small>Alternate number</small><strong>{contact.phones[1]}</strong></div></a>
            <a href="https://wa.me/919925683344?text=Hello%20Reva%20PET%20Preforms%2C%20I%20have%20a%20product%20enquiry." target="_blank" rel="noreferrer"><span><MessageCircle /></span><div><small>WhatsApp</small><strong>Message our team</strong></div></a>
            <a href={`mailto:${contact.email}`}><span><Mail /></span><div><small>Email</small><strong>{contact.email}</strong></div></a>
          </div>
          <div className="address-card">
            <MapPin />
            <div><h3>Factory address</h3><p>{contact.address}</p><a href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a></div>
          </div>
          <div className="response-note"><Clock3 /><p>For a faster product response, include the neck size, preform weight, intended container and estimated requirement.</p></div>
        </div>
        <div className="enquiry-panel">
          <p className="eyebrow dark">SEND AN ENQUIRY</p>
          <h2>Prepare your requirement.</h2>
          <p>This form opens your email app with the details ready to send to Reva PET Preforms.</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
