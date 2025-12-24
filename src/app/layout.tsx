/**
 * Root Layout Component
 * Sets up the HTML structure, fonts, and metadata for the Passiton landing page
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize Inter font with various weights for flexibility
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Passiton - Experience the Joy of Giving | Freecycling App",
  description:
    "Passiton is a freecycling app that helps you give away things you no longer need and discover useful items shared by people around you. No selling, no buying. Just sharing, reusing, and reducing waste together.",
  keywords: [
    "freecycling",
    "give away",
    "free items",
    "sustainability",
    "community sharing",
    "reduce waste",
    "reuse",
    "India",
    "passiton",
  ],
  authors: [{ name: "Third Eye Creative" }],
  openGraph: {
    title: "Passiton - Experience the Joy of Giving",
    description:
      "Give away things you no longer need. Discover useful items shared by people around you.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passiton - Experience the Joy of Giving",
    description:
      "A freecycling app for sharing, reusing, and reducing waste together.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#22c55e",
};

/**
 * RootLayout - The main layout wrapper for all pages
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
