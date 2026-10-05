import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Diamond, Eye, Leaf, Utensils } from "lucide-react";
import { catalogProducts } from "@/lib/site-data";
import { PosterDownloader } from "@/components/poster-downloader";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = catalogProducts.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Utensils": return <Utensils size={32} className="text-gray-700" />;
      case "Diamond": return <Diamond size={32} className="text-gray-700" />;
      case "Eye": return <Eye size={32} className="text-gray-700" />;
      case "Leaf": return <Leaf size={32} className="text-gray-700" />;
      default: return <Diamond size={32} className="text-gray-700" />;
    }
  };

  const hParts = product.dimensions.height.split(' ');
  const dParts = product.dimensions.diameter.split(' ');

  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-8">
      <div className="max-w-[1440px] mx-auto px-4 mb-6">
        <nav className="flex items-center text-sm font-medium text-gray-500 space-x-2">
          <Link href="/" className="hover:text-[#f07822] transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/products" className="hover:text-[#f07822] transition-colors">Products</Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#071b2f] font-bold">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-[1440px] mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side - Visuals with Dimension Lines */}
          <div className="bg-[#e7f3f7] p-8 lg:p-12 flex flex-col items-center justify-center relative min-h-[500px] lg:w-1/2">
            
            {/* Tightly coupled Image & Dimensions Wrapper */}
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain drop-shadow-xl p-10 lg:p-14" 
              />
              
              {/* Vertical Height Line (Left) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 lg:left-6 flex flex-col items-center h-[75%] w-6 opacity-80 pointer-events-none">
                <svg width="10" height="8" viewBox="0 0 8 6" fill="none" stroke="currentColor" className="text-[#6c808c]"><path d="M1 5L4 1L7 5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div className="w-[1px] flex-1 bg-[#6c808c]"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 flex items-center gap-1.5 bg-[#e7f3f7] px-3 whitespace-nowrap z-20">
                  <span className="text-[#6c808c] uppercase text-[12px] font-bold tracking-widest">H</span>
                  <span className="text-[#071b2f] text-[15px] font-black">{hParts[0]}</span>
                  {hParts[1] && <span className="bg-[#3561c9] text-white px-2 py-0.5 rounded-[4px] leading-none shadow-sm text-[12px] font-bold">{hParts[1]}</span>}
                </div>

                <div className="w-[1px] flex-1 bg-[#6c808c]"></div>
                <svg width="10" height="8" viewBox="0 0 8 6" fill="none" stroke="currentColor" className="text-[#6c808c]"><path d="M1 1L4 5L7 1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>

              {/* Horizontal Diameter Line (Bottom) */}
              <div className="absolute bottom-2 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center w-[65%] h-6 opacity-80 pointer-events-none">
                <svg width="8" height="10" viewBox="0 0 6 8" fill="none" stroke="currentColor" className="text-[#6c808c]"><path d="M5 1L1 4L5 7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div className="h-[1px] flex-1 bg-[#6c808c]"></div>
                
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-[#e7f3f7] px-3 whitespace-nowrap z-20">
                  <span className="text-[#6c808c] uppercase text-[12px] font-bold tracking-widest">DIA</span>
                  <span className="text-[#071b2f] text-[15px] font-black">{dParts[0]}</span>
                  {dParts[1] && <span className="bg-[#3561c9] text-white px-2 py-0.5 rounded-[4px] leading-none shadow-sm text-[12px] font-bold">{dParts[1]}</span>}
                </div>

                <div className="h-[1px] flex-1 bg-[#6c808c]"></div>
                <svg width="8" height="10" viewBox="0 0 6 8" fill="none" stroke="currentColor" className="text-[#6c808c]"><path d="M1 1L5 4L1 7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>

            </div>
          </div>

          {/* Right Side - Info & Features */}
          <div className="p-10 lg:p-14 flex flex-col justify-center bg-white lg:w-1/2">
            <div className="mb-5 flex flex-wrap items-center gap-4">
              <span className="text-sm font-black tracking-widest text-[#07344a] bg-[#e7f3f7] px-4 py-1.5 rounded-full">
                {product.neck.toUpperCase()} SERIES
              </span>
              <span className="bg-[#f07822] text-white font-black px-4 py-1.5 rounded-lg shadow-sm text-sm tracking-wide">
                {product.weight}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-[#071b2f] mb-4 uppercase tracking-tight leading-tight">
              {product.name}
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            {product.note && (
              <div className="mb-10 inline-block border-l-4 border-[#087fa5] bg-[#f4f8fb] pl-4 pr-6 py-2 rounded-r-lg">
                <p className="text-sm font-bold text-[#087fa5] uppercase tracking-wider">
                  {product.note}
                </p>
              </div>
            )}

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {product.features.map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="p-4 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 text-gray-800">
                    {renderIcon(feature.icon)}
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider leading-tight text-gray-700 w-24">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Suitable For */}
            <div className="mb-10 pt-8 border-t border-gray-100">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Suitable For</h3>
              <div className="flex flex-wrap gap-2">
                {product.suitableFor.map((use, i) => (
                  <span key={i} className="text-xs font-bold text-[#071b2f] bg-gray-100 uppercase tracking-wider px-4 py-2 rounded-lg">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={`https://wa.me/919925683344?text=${encodeURIComponent(`Hello, I want to inquire about the ${product.name} (${product.weight}).`)}`}
              target="_blank" 
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center w-full bg-[#25D366] text-white font-black text-lg px-8 py-4 rounded-xl hover:bg-[#1ebd5a] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Inquire on WhatsApp <ArrowUpRight size={24} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <h2 className="text-2xl font-black text-[#071b2f] mb-6 uppercase tracking-wide">Product Details</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                The <strong>{product.name}</strong> is a high-quality {product.category.toLowerCase()} container, precisely engineered with a <strong>{product.neck}</strong> neck finish. 
                Weighing at <strong>{product.weight}</strong>, it offers an optimal balance between structural integrity and lightweight design, ensuring your products are protected while maintaining cost efficiency in logistics.
              </p>
              <p className="mb-4">
                {product.description}
              </p>
              <p>
                Perfectly suited for a variety of applications including <strong>{product.suitableFor.join(", ")}</strong>, this container meets the highest industry standards for food safety and durability.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <h2 className="text-2xl font-black text-[#071b2f] mb-6 uppercase tracking-wide">Specifications</h2>
            <div className="flex flex-col gap-4 text-base">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Category</span>
                <span className="font-bold text-[#071b2f]">{product.category}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Neck Size</span>
                <span className="font-bold text-[#071b2f]">{product.neck}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Weight</span>
                <span className="font-bold text-[#071b2f]">{product.weight}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Height</span>
                <span className="font-bold text-[#071b2f]">{product.dimensions.height}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 border-b-transparent">
                <span className="text-gray-500 font-medium">Diameter</span>
                <span className="font-bold text-[#071b2f]">{product.dimensions.diameter}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
