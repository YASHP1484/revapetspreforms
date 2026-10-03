"use client";

import { Search, X } from "lucide-react";
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
        <div className="range-grid">
          {filtered.map((product, index) => (
            <article className="range-card" key={product.name}>
              <div className="range-card-top"><span>{String(index + 1).padStart(2, "0")}</span><p>{product.kind}</p></div>
              <div className="preform-silhouette" aria-hidden="true"><i /><b>{product.neck}</b></div>
              <h2>{product.name}</h2>
              <p className="range-note">{product.note || `${product.neck} neck-size family`}</p>
              <div className="weight-list">{product.weights.map((weight) => <span key={weight}>{weight}</span>)}</div>
              <a href={`https://wa.me/919925683344?text=${encodeURIComponent(`Hello, I need details for the ${product.name} (${product.weights.join(", ")}).`)}`} target="_blank" rel="noreferrer">Ask about this range</a>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-products"><Search size={28} /><h2>No matching product</h2><p>Try a different neck size or search by a listed weight.</p><button type="button" onClick={() => { setSelected("All"); setQuery(""); }}>Show all products</button></div>
      )}
    </div>
  );
}
