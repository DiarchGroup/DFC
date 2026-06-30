import type { Metadata } from "next";

import { FeaturedDishes } from "@/components/home/featured-dishes";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { HeroSection } from "@/components/home/hero-section";
import { HoursLocationPreview } from "@/components/home/hours-location-preview";
import { StoryPreview } from "@/components/home/story-preview";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TrustBar } from "@/components/layout/trust-bar";
import { ReservationCta } from "@/components/shared/reservation-cta";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Experience Diarch Food Court in Patna, serving guests daily since 2017 with flavorful dishes and warm hospitality.",
};

export default function HomePage() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <TrustBar />
      <FeaturedDishes />
      <StoryPreview />
      <GalleryPreview />
      <HoursLocationPreview />
      <TestimonialsSection />
      <ReservationCta />
    </div>
  );
}
