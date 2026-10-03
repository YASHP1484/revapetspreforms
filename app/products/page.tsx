import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { ProductExplorer } from "@/components/product-explorer";

export const metadata: Metadata = {
  title: "PET Preform Range",
  description: "Explore Reva PET Preforms from 28mm to 120mm neck sizes and 10gm to 140gm weight options.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero products-hero">
        <div><p className="eyebrow">REVA PET PREFORMS RANGE</p><h1>Find the right preform for your pack.</h1><p>Browse by neck diameter or search by weight. For packing quantity, colour, availability or application guidance, contact our team.</p></div>
        <div className="page-hero-image"><Image src="/images/preform-range.png" alt="Clear PET preforms arranged by size" fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </section>
      <section className="section product-catalogue">
        <div className="catalogue-note"><Info size={18} /><p><strong>Product information:</strong> neck size and gram weight follow the current Reva PET Preforms range. Final suitability depends on your bottle or jar design and blowing setup.</p></div>
        <ProductExplorer />
      </section>
      <section className="cta-band">
        <div><p>Don’t see the specification you need?</p><h2>Share your target container and quantity.</h2></div>
        <Link className="button button-dark" href="/contact">Request product guidance <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
}
