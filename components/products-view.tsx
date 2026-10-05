"use client";

import { useState } from "react";
import { ProductExplorer } from "./product-explorer";
import { CatalogExplorer } from "./catalog-explorer";

export function ProductsView() {
  const [activeTab, setActiveTab] = useState<"jars" | "bottles" | "preforms">("jars");

  return (
    <div className="products-view">
      <div className="flex justify-center mb-12 px-4">
        <div className="flex space-x-2 sm:space-x-8 border-b-2 border-gray-100 w-full max-w-2xl justify-center">
          <button 
            onClick={() => setActiveTab("jars")}
            className={`cursor-pointer whitespace-nowrap px-4 py-4 text-base sm:text-lg font-black tracking-wide transition-all duration-300 border-b-[3px] -mb-[2px] ${
              activeTab === "jars" 
                ? "border-[#f07822] text-[#071b2f]" 
                : "border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            PET Jars
          </button>
          <button 
            onClick={() => setActiveTab("bottles")}
            className={`cursor-pointer whitespace-nowrap px-4 py-4 text-base sm:text-lg font-black tracking-wide transition-all duration-300 border-b-[3px] -mb-[2px] ${
              activeTab === "bottles" 
                ? "border-[#f07822] text-[#071b2f]" 
                : "border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            PET Bottles
          </button>
          <button 
            onClick={() => setActiveTab("preforms")}
            className={`cursor-pointer whitespace-nowrap px-4 py-4 text-base sm:text-lg font-black tracking-wide transition-all duration-300 border-b-[3px] -mb-[2px] ${
              activeTab === "preforms" 
                ? "border-[#f07822] text-[#071b2f]" 
                : "border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            PET Preforms
          </button>
        </div>
      </div>

      {activeTab === "jars" && <CatalogExplorer category="Jar" />}
      {activeTab === "bottles" && <CatalogExplorer category="Bottle" />}
      {activeTab === "preforms" && <ProductExplorer />}
    </div>
  );
}
