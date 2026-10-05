"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { catalogProducts } from "@/lib/site-data";

export function CatalogExplorer({ category }: { category: "Jar" | "Bottle" }) {
  const filteredProducts = catalogProducts.filter(p => p.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredProducts.map((product) => {
        const hParts = product.dimensions.height.split(' ');
        const dParts = product.dimensions.diameter.split(' ');
        
        return (
        <article key={product.slug} className="group relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="h-72 w-full relative mb-4 rounded-lg bg-[#e7f3f7] overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-contain p-6" 
            />
            
            {/* Vertical Height Line (Left) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -ml-[140px] flex flex-col items-center h-[210px] w-6 opacity-80 pointer-events-none">
              <svg width="7" height="6" viewBox="0 0 8 6" fill="none" stroke="currentColor" className="text-[#6c808c]"><path d="M1 5L4 1L7 5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div className="w-[1px] flex-1 bg-[#6c808c]"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 flex items-center gap-1.5 bg-[#e7f3f7] px-2 whitespace-nowrap z-10">
                <span className="text-[#6c808c] uppercase text-[10px] font-bold tracking-wide">H</span>
                <span className="text-[#071b2f] text-[12px] font-black">{hParts[0]}</span>
                {hParts[1] && <span className="bg-[#3561c9] text-white px-1.5 py-0.5 rounded-[3px] leading-none shadow-sm text-[10px] font-bold">{hParts[1]}</span>}
              </div>

              <div className="w-[1px] flex-1 bg-[#6c808c]"></div>
              <svg width="7" height="6" viewBox="0 0 8 6" fill="none" stroke="currentColor" className="text-[#6c808c]"><path d="M1 1L4 5L7 1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>

            {/* Horizontal Diameter Line (Bottom) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center w-[160px] h-6 opacity-80 pointer-events-none">
              <svg width="6" height="7" viewBox="0 0 6 8" fill="none" stroke="currentColor" className="text-[#6c808c]"><path d="M5 1L1 4L5 7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div className="h-[1px] flex-1 bg-[#6c808c]"></div>
              
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-[#e7f3f7] px-2 whitespace-nowrap z-10">
                <span className="text-[#6c808c] uppercase text-[10px] font-bold tracking-wide">DIA</span>
                <span className="text-[#071b2f] text-[12px] font-black">{dParts[0]}</span>
                {dParts[1] && <span className="bg-[#3561c9] text-white px-1.5 py-0.5 rounded-[3px] leading-none shadow-sm text-[10px] font-bold">{dParts[1]}</span>}
              </div>

              <div className="h-[1px] flex-1 bg-[#6c808c]"></div>
              <svg width="6" height="7" viewBox="0 0 6 8" fill="none" stroke="currentColor" className="text-[#6c808c]"><path d="M1 1L5 4L1 7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>

            {/* Weight Badge */}
            <div className="absolute top-2 right-2">
              <span className="bg-[#f07822] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap">
                {product.weight}
              </span>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col">
            <h3 className="font-extrabold text-[#071b2f] text-lg leading-tight mb-1.5">{product.name}</h3>
            
            <p className="text-[#087fa5] text-[11px] font-bold uppercase tracking-wider mb-2">
              {product.note}
            </p>
            
            <p className="text-[#526776] text-base mb-4 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-auto pt-2">
              <Link href={`/products/${product.slug}`} className="button button-primary w-full group-hover:bg-[#071b2f] transition-colors !min-h-[40px] text-sm">
                View Details <ArrowUpRight size={16} className="ml-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      )})}
    </div>
  );
}
