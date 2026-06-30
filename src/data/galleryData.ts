export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: "food" | "interior" | "ambience";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "g-1",
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1400&q=80",
    alt: "Plated seafood dish with herbs",
    category: "food",
  },
  {
    id: "g-2",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
    alt: "Chef finishing a plate in kitchen",
    category: "food",
  },
  {
    id: "g-3",
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80",
    alt: "Restaurant interior with modern decor",
    category: "interior",
  },
  {
    id: "g-4",
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1400&q=80",
    alt: "Elegant dining table setup",
    category: "ambience",
  },
  {
    id: "g-5",
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=80",
    alt: "Plated entree with garnish",
    category: "food",
  },
  {
    id: "g-6",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80",
    alt: "Warm evening ambiance in dining room",
    category: "ambience",
  },
  {
    id: "g-7",
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80",
    alt: "Signature cocktail on marble counter",
    category: "food",
  },
  {
    id: "g-8",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    alt: "Guests enjoying dinner in a restaurant",
    category: "interior",
  },
];
