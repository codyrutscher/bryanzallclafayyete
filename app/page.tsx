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
      <CTASection 
        title="Ready to Transform Your Business?"
        description="Let's discuss how we can help you achieve your goals"
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
      <ReviewsSection />
      <GalleryPreview />
      <SocialFeed />
      <GBPPosts />
      <CTASection 
        title="Schedule Your Free Consultation"
        description="Book a time that works for you"
        buttonText="Book Now"
        buttonLink="/booking"
        variant="secondary"
      />
    </main>
  );
}
