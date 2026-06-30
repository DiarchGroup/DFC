import type { Metadata } from "next";

import { MenuBrowser } from "@/components/menu/menu-browser";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Diarch Food Court menu and discover options for family meals, group dining, and everyday favorites.",
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
