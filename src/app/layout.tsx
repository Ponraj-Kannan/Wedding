import type { Metadata, Viewport } from "next";
import { Noto_Serif_Tamil, Mukta_Malar } from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/config/wedding";

const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ["tamil", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif-tamil",
  display: "swap",
});

const muktaMalar = Mukta_Malar({
  subsets: ["tamil", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(weddingConfig.meta.siteUrl),
  title: weddingConfig.meta.title,
  description: weddingConfig.meta.description,
  openGraph: {
    title: weddingConfig.meta.title,
    description: weddingConfig.meta.description,
    type: "website",
    locale: "ta_IN",
    alternateLocale: ["en_IN"],
    siteName: `${weddingConfig.couple.combinedEn} Wedding`,
  },
  twitter: {
    card: "summary_large_image",
    title: weddingConfig.meta.title,
    description: weddingConfig.meta.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFF8EC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ta"
      className={`${notoSerifTamil.variable} ${muktaMalar.variable}`}
    >
      <body className="antialiased selection:bg-[#8B1A1A]/15 selection:text-[#8B1A1A]">
        {children}
      </body>
    </html>
  );
}
