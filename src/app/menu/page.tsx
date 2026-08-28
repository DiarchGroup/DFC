import type { Metadata } from "next";

import { MenuBrowser } from "@/components/menu/menu-browser";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: {
    absolute: "Menu | Diarch Food Court, Patna",
  },
  description:
    "Browse the Diarch Food Court menu — biryani, tandoori, Indo-Chinese and family meals in Danapur, Patna.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu | Diarch Food Court, Patna",
    description:
      "Browse the Diarch Food Court menu — biryani, tandoori, Indo-Chinese and family meals in Danapur, Patna.",
    url: "/menu",
  },
};

export default function MenuPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Food & Drinks"
        title="Our Seasonal Menu"
        description="Explore dishes by category, filter by dietary preferences, and discover your next favorite plate."
      />
      <MenuBrowser />
    </div>
  );
}
