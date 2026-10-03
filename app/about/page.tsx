import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Boxes, Handshake, MapPin, ScanLine } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Reva PET Preforms, a PET preforms, bottles and jars manufacturer based near Santej, Gandhinagar, Gujarat.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <div><p className="eyebrow">ABOUT REVA PET PREFORMS</p><h1>Packaging foundations, made with purpose.</h1><p>We manufacture PET preforms, bottles and jars from our location near Santej, Gandhinagar—supporting customers with a practical range of neck sizes and weights.</p></div>
        <div className="page-hero-facts">
          <div><strong>09</strong><span>neck-size families</span></div>
          <div><strong>10–140gm</strong><span>current weight range</span></div>
          <div><strong>Gujarat</strong><span>manufacturing location</span></div>
        </div>
      </section>

      <section className="section story-grid">
        <div className="story-copy">
          <p className="eyebrow dark">WHAT WE MAKE</p>
          <h2>A focused range for bottle and jar production.</h2>
          <p>Reva PET Preforms serves packaging requirements across narrow-neck bottle formats and wider jar formats. Our listed range begins with compact 32mm / 10gm preforms and extends to 120mm / 140gm jar preforms.</p>
          <p>We keep product selection straightforward: neck size, weight and intended format are the starting points. From there, our team can discuss availability and fit with your specific container requirement.</p>
          <Link className="text-link" href="/products">Explore the full product range <ArrowUpRight size={17} /></Link>
        </div>
        <div className="story-image"><Image src="/images/preform-hero.png" alt="Reva PET bottle and jar preform range" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </section>

      <section className="values-section">
        <div className="section-heading compact"><div><p className="eyebrow">HOW WE WORK</p><h2>Clear communication. Consistent attention.</h2></div></div>
        <div className="value-grid">
          <article><ScanLine /><h3>Specification first</h3><p>We begin with the dimensions and gram weight that matter to your application.</p></article>
          <article><Boxes /><h3>Practical range</h3><p>Multiple neck-size families provide useful options across bottle and jar formats.</p></article>
          <article><Handshake /><h3>Direct support</h3><p>Speak directly with our team about product selection, availability and enquiries.</p></article>
          <article><MapPin /><h3>Made in Gujarat</h3><p>Manufacturing based near Santej, in the Gandhinagar district of Gujarat.</p></article>
        </div>
      </section>

      <section className="cta-band">
        <div><p>Planning a new PET packaging requirement?</p><h2>Start with the size, weight and application.</h2></div>
        <Link className="button button-dark" href="/contact">Start a conversation <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
}
