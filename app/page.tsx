"use client";

import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import ReviewsSection from "@/components/home/ReviewsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import SocialFeed from "@/components/SocialFeed";
import GBPPosts from "@/components/GBPPosts";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      <ReviewsSection />
      <GalleryPreview />
      <CTASection 
        title="Ready to Transform Your Space With Color?"
        description="Family-owned painting services with competitive prices"
        buttonText="Get Free Quote"
        buttonLink="/contact"
      />
    </main>
  );
}
