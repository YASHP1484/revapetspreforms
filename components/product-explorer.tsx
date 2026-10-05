"use client";

import { Search, X, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { productRanges } from "@/lib/site-data";

const sizes = ["All", "28mm", "32mm", "53mm", "60mm", "63mm", "73mm", "83mm", "96mm", "120mm"];

export function ProductExplorer() {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return productRanges.filter((product) => {
      const sizeMatch = selected === "All" || product.neck === selected;
      const queryMatch = !needle || [product.neck, product.name, product.kind, ...product.weights].join(" ").toLowerCase().includes(needle);
      return sizeMatch && queryMatch;
    });
  }, [query, selected]);

  return (
    <div className="product-explorer">
      <div className="explorer-controls">
        <div className="size-filters" aria-label="Filter products by neck size">
          {sizes.map((size) => <button key={size} className={selected === size ? "selected" : ""} onClick={() => setSelected(size)} type="button">{size}</button>)}
        </div>
        <label className="product-search">
          <Search size={18} />
          <span className="sr-only">Search product range</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search size or weight" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={17} /></button>}
        </label>
      </div>
      <p className="results-count">{filtered.length} product {filtered.length === 1 ? "series" : "series"}</p>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {filtered.map((product, index) => (
            <article className="group relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" key={product.name}>
              
              {/* Image Container with identical styling to Jars/Bottles but using the CSS silhouette */}
              <div className="h-72 w-full relative mb-4 rounded-lg bg-[#e7f3f7] flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute top-4 left-4">
                  <span className="text-[#087fa5] text-[11px] font-bold uppercase tracking-wider">{product.kind}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#f07822] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                <div className="preform-silhouette transform scale-110" aria-hidden="true">
                  <i /><b>{product.neck}</b>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="font-extrabold text-[#071b2f] text-lg leading-tight mb-1.5">{product.name}</h3>
                
                <p className="text-[#087fa5] text-[11px] font-bold uppercase tracking-wider mb-2">
                  {product.note || `${product.neck} neck-size family`}
                </p>

                {product.description && (
                  <p className="text-[#526776] text-base mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {product.weights.map((weight) => (
                    <span key={weight} className="bg-gray-100 text-[#071b2f] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm border border-gray-200">
                      {weight}
                    </span>
                  ))}
                </div>
                
                <div className="pt-2">
                  <a 
                    href={`https://wa.me/919925683344?text=${encodeURIComponent(`Hello, I need details for the ${product.name} (${product.weights.join(", ")}).`)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="button button-primary w-full group-hover:bg-[#071b2f] transition-colors !min-h-[40px] text-sm"
                  >
                    Ask about this range <ArrowUpRight size={16} className="ml-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-products"><Search size={28} /><h2>No matching product</h2><p>Try a different neck size or search by a listed weight.</p><button type="button" onClick={() => { setSelected("All"); setQuery(""); }}>Show all products</button></div>
      )}
    </div>
  );
}
