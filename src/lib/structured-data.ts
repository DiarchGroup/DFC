import { featuredDishIds, menuCategories, type MenuItem } from "@/data/menuData";
import { siteConfig } from "@/data/siteConfig";

const allItems = menuCategories.flatMap((category) => category.items);

function findItem(id: string): MenuItem | undefined {
  return allItems.find((item) => item.id === id);
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "NH-98, Bhusaula Danapur Chowk",
  addressLocality: "Patna",
  addressRegion: "Bihar",
  addressCountry: "IN",
};

const openingHoursSpecification = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: siteConfig.hours.map((entry) => entry.day),
  opens: siteConfig.openingHours.opens,
  closes: siteConfig.openingHours.closes,
};

const featuredMenu = {
  "@type": "Menu",
  name: `${siteConfig.name} Menu`,
  url: `${siteConfig.url}/menu`,
  hasMenuSection: {
    "@type": "MenuSection",
    name: "Guest Favourites",
    hasMenuItem: featuredDishIds
      .map(findItem)
      .filter((item): item is MenuItem => Boolean(item))
      .map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "INR",
        },
      })),
  },
};

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteConfig.url}/#restaurant`,
  name: siteConfig.name,
  description: siteConfig.shortDescription,
  url: siteConfig.url,
  image: siteConfig.hero.image.src,
  servesCuisine: siteConfig.cuisines,
  priceRange: siteConfig.priceRange,
  telephone: siteConfig.phone.replace(/\s+/g, "-"),
  email: siteConfig.email,
  foundingDate: String(siteConfig.established),
  address: postalAddress,
  hasMap: siteConfig.mapLink,
  openingHoursSpecification,
  acceptsReservations: `https://wa.me/${siteConfig.whatsapp.number}`,
  hasMenu: featuredMenu,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: { "@id": `${siteConfig.url}/#restaurant` },
};
