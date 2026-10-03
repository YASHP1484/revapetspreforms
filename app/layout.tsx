import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "Reva PET Preforms | PET Preforms, Bottles & Jars",
    template: "%s | Reva PET Preforms",
  },
  description: "PET preforms, bottles and jars manufacturer serving packaging requirements from Gandhinagar, Gujarat.",
  metadataBase: new URL("https://reva-pet-preforms.milan0074.chatgpt.site"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
