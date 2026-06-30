export type OpeningHour = {
  day: string;
  hours: string;
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

export const siteConfig = {
  name: "Diarch Food Court",
  established: 2017,
  shortDescription:
    "A trusted dining destination in Patna serving flavorful meals in a warm, welcoming setting.",
  brandMessage: "Serving Patna since 2017 with great food and heartfelt hospitality.",
  ctas: {
    primary: {
      label: "Reserve a Table",
      href: "/reservations",
    },
    secondary: {
      label: "Explore the Menu",
      href: "/menu",
    },
  },
  hero: {
    eyebrow: "Established 2017",
    title: "Patna's Everyday Table for Biryani, Kebabs, and Family Gatherings",
    description:
      "At NH-98, Bhusaula Danapur Chowk, Diarch Food Court serves generous Indian and Indo-Chinese favorites, from tandoori platters to weekday dinners that feel like home.",
    image: {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80",
      alt: "Warmly lit restaurant interior with elegant table settings",
    },
  },
  storyPreview:
    "Since 2017, Diarch Food Court has focused on quality ingredients, attentive service, and a comfortable dining experience for Patna's community.",
  address: "NH-98, Bhusaula Danapur Chowk, Patna, Bihar",
  mapLink:
    "https://maps.google.com/?q=NH-98%2C%20Bhusaula%20Danapur%20Chowk%2C%20Patna%2C%20Bihar",
  mapEmbedUrl:
    "https://www.google.com/maps?q=NH-98%2C%20Bhusaula%20Danapur%20Chowk%2C%20Patna%2C%20Bihar&output=embed",
  phone: "+91 90607 94922",
  whatsapp: {
    number: "919060794922",
    bookingMessage: "Hi, I'd like to make a reservation at Diarch Food Court.",
  },
  email: "info@thearchrestaurant.in",
  reservationFormAction: "https://formsubmit.co/info@thearchrestaurant.in",
  hours: [
    { day: "Monday", hours: "10:00 AM - 10:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 10:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 10:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 10:00 PM" },
    { day: "Friday", hours: "10:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 10:00 PM" },
  ] as OpeningHour[],
  contactDetails: [
    { label: "Phone", value: "+91 90607 94922", href: "tel:+919060794922" },
    { label: "Email", value: "info@thearchrestaurant.in", href: "mailto:info@thearchrestaurant.in" },
    { label: "Address", value: "NH-98, Bhusaula Danapur Chowk, Patna, Bihar" },
    { label: "Established", value: "2017" },
  ] as ContactDetail[],
  parkingNotes:
    "Parking options are available around Bhusaula Danapur Chowk. Contact us for current guidance.",
  deliveryNotes:
    "For delivery and takeaway availability, please call us directly.",
  reservationNotes: [
    "For large groups and special occasions, contact us on WhatsApp at +91 90607 94922.",
    "We hold tables for 15 minutes after the reservation time.",
    "Please share dietary preferences while booking so we can prepare accordingly.",
  ],
  about: {
    story:
      "Diarch Food Court opened in 2017 and has grown into a well-loved dining destination in Patna, known for dependable quality and warm service.",
    philosophy:
      "Our philosophy is simple: serve fresh, flavorful food with consistency, comfort, and genuine hospitality every day.",
    founder: {
      name: "Diarch Kitchen Promise",
      role: "Fresh Ingredients, Honest Cooking, Consistent Taste",
      bio: "Every plate at Diarch Food Court is prepared fresh with careful prep, balanced spices, and strict hygiene standards so families can enjoy dependable flavor at every visit.",
      image: "/about-commitment.png",
    },
    values: [
      "Consistent quality and taste from kitchen to table",
      "Clean, comfortable spaces for family and group dining",
      "Friendly, attentive service rooted in hospitality",
    ],
    interiorImages: [
      {
        src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
        alt: "Interior dining hall with ambient pendant lights",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
        alt: "Guests dining in a stylish modern restaurant",
      },
    ],
  },
};
