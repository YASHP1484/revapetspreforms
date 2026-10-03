import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark" aria-hidden="true">R</span>
            <span><strong>REVA</strong><small>PET PREFORMS</small></span>
          </Link>
          <p>Precision PET preforms, bottles and jars for dependable packaging production.</p>
        </div>
        <div className="footer-links">
          <p className="footer-title">Explore</p>
          <Link href="/products">Product range</Link>
          <Link href="/about">About Reva</Link>
          <Link href="/quality">Quality approach</Link>
          <Link href="/contact">Request a quote</Link>
        </div>
        <div className="footer-contact">
          <p className="footer-title">Contact</p>
          <a href={`tel:${contact.phoneLinks[0]}`}><Phone size={16} /> {contact.phones[0]}</a>
          <a href={`mailto:${contact.email}`}><Mail size={16} /> {contact.email}</a>
          <p><MapPin size={16} /> Santej–Khatraj Road, Gandhinagar</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Reva PET Preforms. All rights reserved.</span>
        <span>Manufactured in Gujarat, India</span>
      </div>
    </footer>
  );
}
