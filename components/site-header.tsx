"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Reva PET Preforms home" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">R</span>
        <span><strong>REVA</strong><small>PET PREFORMS</small></span>
      </Link>
      <nav className={open ? "nav-open" : ""} aria-label="Main navigation">
        {links.map((link) => (
          <Link className={pathname === link.href ? "active" : ""} href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
      <a className="header-call" href="tel:+919925683344"><Phone size={17} /> +91 99256 83344</a>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
