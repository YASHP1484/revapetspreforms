import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Box, Eye, Gauge, Layers, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Approach",
  description: "Learn how Reva PET Preforms approaches material handling, molding checks, dimensional verification and dispatch preparation.",
};

const steps = [
  { icon: Layers, number: "01", title: "Material handling", text: "PET material is handled with attention to cleanliness and preparation before the molding process." },
  { icon: Gauge, number: "02", title: "Process control", text: "Molding conditions are monitored to support repeatable preform shape, finish and weight." },
  { icon: Eye, number: "03", title: "Visual inspection", text: "Preforms are checked for visible clarity, surface quality and molding defects." },
  { icon: PackageCheck, number: "04", title: "Critical dimensions", text: "Fit-sensitive features such as neck finish and overall form are checked against the required specification." },
  { icon: Box, number: "05", title: "Packing & dispatch", text: "Finished preforms are kept identified and prepared for protected movement to the customer." },
];

export default function QualityPage() {
  return (
    <main>
      <section className="quality-page-hero">
        <div>
          <p className="eyebrow">OUR QUALITY APPROACH</p>
          <h1>Consistency starts before the preform leaves the mould.</h1>
          <p>Quality depends on disciplined handling, controlled processing and careful inspection. Our approach keeps attention on the details that affect downstream blowing and container performance.</p>
        </div>
        <div className="quality-hero-image"><Image src="/images/quality-control.png" alt="PET preform being inspected with a precision gauge" fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div>
      </section>

      <section className="section process-section">
        <div className="section-heading"><div><p className="eyebrow dark">FROM MATERIAL TO DISPATCH</p><h2>Five checkpoints in our working process.</h2></div><p>We focus on practical process checks without making assumptions about your final container. The customer’s bottle or jar design and production setup remain central to final validation.</p></div>
        <div className="process-list">
          {steps.map(({ icon: Icon, number, title, text }) => (
            <article key={number}><span>{number}</span><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="spec-callout">
        <div><p className="eyebrow">FIT MATTERS</p><h2>Confirm the preform against your container and blowing setup.</h2></div>
        <p>Neck diameter and gram weight are useful selection points, but final suitability also depends on mould design, target capacity, wall distribution and processing conditions. We recommend sharing your required sample or drawing when available.</p>
        <Link className="button button-primary" href="/contact">Discuss your specification <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
}
