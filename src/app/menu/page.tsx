import type { Metadata } from "next";

import { MenuBrowser } from "@/components/menu/menu-browser";
import { PageHero } from "@/components/shared/page-hero";
import { menuCategories } from "@/data/menuData";

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
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Diarch Food Court Menu",
    url: "https://www.diarchfoodcourt.com/menu",
    hasMenuSection: menuCategories.map((category) => ({
      "@type": "MenuSection",
      name: category.name,
      description: category.description,
      hasMenuItem: category.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: { "@type": "Offer", price: item.price, priceCurrency: "INR" },
      })),
    })),
  };

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
      <PageHero
        eyebrow="Food & Drinks"
        title="Our Seasonal Menu"
        description="Explore dishes by category, filter by dietary preferences, and discover your next favorite plate."
      />
      <MenuBrowser />
    </div>
  );
}
