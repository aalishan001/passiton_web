/**
 * Passiton Landing Page
 * 
 * A modern, minimalist landing page for Passiton - a freecycling app
 * focused on the joy of giving, sustainability, and community sharing.
 * 
 * Sections:
 * 1. Hero - Main headline and app store CTAs
 * 2. Why Passiton - Feature cards highlighting benefits
 * 3. How It Works - 3-step process
 * 4. Sustainability - Environmental impact messaging
 * 5. Trust - Key guarantees and trust indicators
 * 6. Download CTA - Strong call-to-action
 * 7. Footer - About and links
 */

import Hero from "@/components/sections/Hero";
import WhyPassiton from "@/components/sections/WhyPassiton";
import HowItWorks from "@/components/sections/HowItWorks";
import Sustainability from "@/components/sections/Sustainability";
import Trust from "@/components/sections/Trust";
import DownloadCTA from "@/components/sections/DownloadCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      {/* Hero Section - Above the fold */}
      <Hero />

      {/* Why Passiton - Feature highlights */}
      <WhyPassiton />

      {/* How It Works - 3-step process */}
      <HowItWorks />

      {/* Sustainability - Environmental messaging */}
      <Sustainability />

      {/* Trust & Simplicity - Key guarantees */}
      <Trust />

      {/* Download CTA - Primary conversion point */}
      <DownloadCTA />

      {/* Footer - About and links */}
      <Footer />
    </main>
  );
}
