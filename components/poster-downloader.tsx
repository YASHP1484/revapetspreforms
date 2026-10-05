"use client";

import html2canvas from "html2canvas";
import { Download } from "lucide-react";
import { useState } from "react";

export function PosterDownloader({ targetId, fileName }: { targetId: string, fileName: string }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById(targetId);
      if (!element) return;
      
      // Temporary style adjustments for better screenshot capture
      const originalStyle = element.style.cssText;
      element.style.background = "#ffffff";
      
      const canvas = await html2canvas(element, { 
        scale: 2, 
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false
      });
      
      element.style.cssText = originalStyle;

      const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
      const link = document.createElement("a");
      link.download = `${fileName}.jpg`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error capturing poster:", error);
      alert("Failed to download poster. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex justify-center my-8">
      <button 
        onClick={handleDownload} 
        disabled={isDownloading}
        className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-xl transition-all disabled:opacity-50"
      >
        <Download size={24} className={isDownloading ? "animate-bounce" : ""} />
        {isDownloading ? "Generating Image..." : "Download as Image (JPEG)"}
      </button>
    </div>
  );
}
