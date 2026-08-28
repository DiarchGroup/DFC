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
  title: {
    absolute: "Diarch Food Court | Biryani & Family Restaurant in Danapur, Patna",
  },
  description:
    "Diarch Food Court on NH-98, Bhusaula Danapur Chowk, Patna — biryani, kebabs, tandoori and Indo-Chinese favourites served daily since 2017. Book a table on WhatsApp.",
  alternates: {
    canonical: "/",
  },
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
