import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Factory, Globe2, Target, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Company Profile of Reva PET Preforms - A leading manufacturer of PET preforms, bottles and jars in Gandhinagar, Gujarat.",
};

export default function CompanyProfilePage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <div>
          <p className="eyebrow">COMPANY PROFILE</p>
          <h1>Reva PET Preforms</h1>
          <p>
            Established with a vision to deliver premium quality PET packaging solutions, 
            Reva PET Preforms has grown into a trusted manufacturer of PET preforms, bottles, 
            and jars. We operate from our state-of-the-art facility near Santej, Gandhinagar.
          </p>
        </div>
      </section>

      <section className="section story-grid">
        <div className="story-copy">
          <p className="eyebrow dark">OUR MISSION & VISION</p>
          <h2>Delivering packaging excellence for every industry.</h2>
          <p>
            Our mission is to provide high-quality, durable, and food-grade PET packaging solutions 
            that meet the diverse needs of our clients. We strive to maintain the highest standards 
            of manufacturing to ensure consistency and reliability in every batch.
          </p>
          <p>
            Our vision is to become the leading choice for PET packaging across India, recognized 
            for our innovation, product range, and customer-first approach.
          </p>
        </div>
        <div className="story-image rounded-xl overflow-hidden shadow-2xl">
          <Image src="/images/quality-control.png" alt="Reva PET Quality Control" fill className="object-cover" />
        </div>
      </section>

      <section className="values-section">
        <div className="section-heading compact">
          <div><p className="eyebrow">WHY CHOOSE US</p><h2>Our Core Strengths</h2></div>
        </div>
        <div className="value-grid">
          <article>
            <CheckCircle2 size={32} />
            <h3>Quality Assurance</h3>
            <p>Rigorous quality checks ensuring 100% food-grade, crystal clear, and durable products.</p>
          </article>
          <article>
            <Target size={32} />
            <h3>Wide Product Range</h3>
            <p>From 28mm bottles to 120mm wide-mouth jars, supporting weights from 10gm to 140gm.</p>
          </article>
          <article>
            <Globe2 size={32} />
            <h3>State-of-the-art Facility</h3>
            <p>Advanced manufacturing infrastructure located strategically in Gandhinagar, Gujarat.</p>
          </article>
          <article>
            <Factory size={32} />
            <h3>Timely Delivery</h3>
            <p>Streamlined supply chain and production capacity to meet bulk requirements on schedule.</p>
          </article>
        </div>
      </section>

      <section className="section bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow dark">GET IN TOUCH</p>
            <h2 className="text-4xl font-black text-[#071b2f] tracking-tight">Connect with Reva PET</h2>
            <p className="text-[#526776] mt-4 max-w-2xl mx-auto">We are always ready to discuss your packaging requirements and provide the best solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f4f8fb] p-10 rounded-3xl flex flex-col items-center text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#087fa5]">
                <Phone size={28} />
              </div>
              <h3 className="font-black text-[#071b2f] text-xl mb-3">Call Us</h3>
              <a href="tel:+919925683344" className="text-[#526776] hover:text-[#f07822] transition-colors font-semibold text-lg">+91 99256 83344</a>
            </div>

            <div className="bg-[#f4f8fb] p-10 rounded-3xl flex flex-col items-center text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#087fa5]">
                <Mail size={28} />
              </div>
              <h3 className="font-black text-[#071b2f] text-xl mb-3">Email Us</h3>
              <a href="mailto:revapetpreforms@gmail.com" className="text-[#526776] hover:text-[#f07822] transition-colors font-semibold text-lg">revapetpreforms@gmail.com</a>
            </div>

            <div className="bg-[#071b2f] p-10 rounded-3xl flex flex-col items-center text-center shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-16 w-16 bg-[#12344d] rounded-full flex items-center justify-center mb-6 text-[#66cce5]">
                <MapPin size={28} />
              </div>
              <h3 className="font-black text-white text-xl mb-3">Visit Factory</h3>
              <p className="text-[#adc3ce] font-medium leading-relaxed">
                Santej–Khatraj Road,<br />Gandhinagar, Gujarat
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p>Interested in our manufacturing capabilities?</p>
          <h2>Download our complete digital profile or contact us.</h2>
        </div>
        <Link className="button button-dark" href="/contact">Contact Us <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
}
