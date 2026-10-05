import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { ProductsView } from "@/components/products-view";

export const metadata: Metadata = {
  title: "PET Preform & Jar Range",
  description: "Explore Reva PET Preforms, Jars, and Bottles.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero products-hero">
        <div><p className="eyebrow">REVA PET PRODUCTS RANGE</p><h1>Find the perfect packaging for your product.</h1><p>Browse our complete range of finished Jars, Bottles, and raw PET Preforms.</p></div>
        <div className="page-hero-image"><Image src="/images/preform-range.png" alt="Clear PET packaging arranged by size" fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </section>
      <section className="section product-catalogue">
        <ProductsView />
      </section>
      <section className="cta-band">
        <div><p>Don’t see the specification you need?</p><h2>Share your target container and quantity.</h2></div>
        <Link className="button button-dark" href="/contact">Request product guidance <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
}
