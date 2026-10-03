import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, CircleGauge, Factory, PackageCheck, Ruler, ShieldCheck } from "lucide-react";
import { productRanges } from "@/lib/site-data";

const ranges = ["28mm", "32mm", "53mm", "60mm", "63mm", "73mm", "83mm", "96mm", "120mm"];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PET PREFORMS · BOTTLES · JARS</p>
          <h1>Engineered clarity.<br /><em>Built for scale.</em></h1>
          <p className="hero-lede">Precision PET packaging components across 9 neck-size families, manufactured for dependable forming, clean finish and consistent supply.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products">Explore our range <ArrowUpRight size={18} /></Link>
            <Link className="button button-ghost" href="/contact">Request a quote</Link>
          </div>
          <div className="trust-line"><Check size={16} /> Made in Gandhinagar, Gujarat <span /> Consistent batch quality</div>
        </div>
        <div className="hero-visual">
          <Image src="/images/preform-hero.png" alt="Clear PET preforms in a range of neck sizes" fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          <div className="hero-note"><strong>09</strong><span>neck-size<br />families</span></div>
        </div>
      </section>

      <section className="range-rail" aria-label="Available neck sizes">
        <p>Product range</p>
        <div>{ranges.map((range) => <span key={range}>{range}</span>)}</div>
      </section>

      <section className="section intro-section">
        <div className="section-heading">
          <div><p className="eyebrow dark">BUILT AROUND YOUR PACKAGING LINE</p><h2>From compact bottles to wide-mouth jars.</h2></div>
          <p>Choose from bottle and jar preforms in weights from 10gm to 140gm. Each range is organized by neck diameter so your team can find the right starting point quickly.</p>
        </div>
        <div className="product-feature-grid">
          {productRanges.slice(0, 6).map((product, index) => (
            <Link href="/products" className="product-feature" key={product.name}>
              <span className="feature-index">0{index + 1}</span>
              <div><p>{product.kind}</p><h3>{product.neck}</h3><span>{product.weights.join(" · ")}</span></div>
              <ArrowUpRight size={19} />
            </Link>
          ))}
        </div>
        <Link className="text-link" href="/products">View all 10 product series <ArrowUpRight size={17} /></Link>
      </section>

      <section className="split-showcase">
        <div className="showcase-image">
          <Image src="/images/preform-range.png" alt="Organized range of clear bottle and jar preforms" fill sizes="(max-width: 900px) 100vw, 50vw" />
          <span className="image-label">Bottle & jar series</span>
        </div>
        <div className="showcase-copy">
          <p className="eyebrow">THE REVA APPROACH</p>
          <h2>Precision you can see. Consistency your production can use.</h2>
          <div className="benefit-list">
            <div><Ruler /><span><strong>Multiple neck sizes</strong>Coverage from 28mm bottle preforms to 120mm wide-mouth jar formats.</span></div>
            <div><CircleGauge /><span><strong>Weight options</strong>Flexible gram-weight choices within each neck-size family.</span></div>
            <div><PackageCheck /><span><strong>Production-ready supply</strong>Clear product identification and protected handling for dispatch.</span></div>
          </div>
          <Link className="button button-light" href="/quality">See our quality approach</Link>
        </div>
      </section>

      <section className="section application-section">
        <div className="section-heading compact">
          <div><p className="eyebrow dark">VERSATILE PET PACKAGING</p><h2>Made for everyday product categories.</h2></div>
        </div>
        <div className="application-grid">
          <article><span>01</span><h3>Food & staples</h3><p>Wide-mouth formats suited to jars for dry foods, condiments and household staples.</p></article>
          <article><span>02</span><h3>Beverages</h3><p>Bottle preform options for water, juices and other non-alcoholic beverage packaging.</p></article>
          <article><span>03</span><h3>Personal care</h3><p>Clear, lightweight PET packaging foundations for daily-use consumer products.</p></article>
          <article><span>04</span><h3>Home care</h3><p>Multiple weights and neck sizes for a practical range of household containers.</p></article>
        </div>
      </section>

      <section className="quality-banner">
        <div>
          <p className="eyebrow">QUALITY AT EVERY CHECKPOINT</p>
          <h2>Clear material. Defined dimensions. Careful inspection.</h2>
          <p>Our process focuses on repeatable molding, visual clarity and fit-critical neck details before products are prepared for dispatch.</p>
          <Link className="button button-primary" href="/quality"><ShieldCheck size={18} /> Understand our process</Link>
        </div>
        <div className="quality-banner-image"><Image src="/images/quality-control.png" alt="Quality inspection of a clear PET preform" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
      </section>

      <section className="cta-band">
        <Factory size={42} />
        <div><p>Need a size recommendation or commercial quote?</p><h2>Tell us your neck size and required weight.</h2></div>
        <Link className="button button-dark" href="/contact">Talk to our team <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
}
