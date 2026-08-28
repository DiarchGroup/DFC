import type { Metadata } from "next";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: {
    absolute: "Photo Gallery | Diarch Food Court, Patna",
  },
  description:
    "View food, ambience, and dining space photos from Diarch Food Court.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Diarch Food Court, Patna",
    description:
      "View food, ambience, and dining space photos from Diarch Food Court.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="-mx-4 space-y-10 sm:-mx-6">
      <PageHero
        eyebrow="Visual Story"
        title="Inside Diarch Food Court"
        description="A curated look at our dishes, ambiance, and welcoming dining spaces in Patna."
      />
      <GalleryGrid />
    </div>
  );
}
