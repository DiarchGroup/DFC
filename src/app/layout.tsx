import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display, Montserrat } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";
import { siteConfig } from "@/data/siteConfig";
import { restaurantSchema, websiteSchema } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Diarch Food Court | Biryani & Family Restaurant in Danapur, Patna",
    template: "%s | Diarch Food Court",
  },
  description:
    "Diarch Food Court in Patna, established in 2017, offers great food, warm hospitality, and a welcoming dining experience every day.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Diarch Food Court | Biryani & Family Restaurant in Danapur, Patna",
    description:
      "Discover menu highlights, contact details, and table booking at Diarch Food Court in Patna.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: siteConfig.hero.image.src,
        width: 1600,
        height: 900,
        alt: "Diarch Food Court dining room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diarch Food Court | Biryani & Family Restaurant in Danapur, Patna",
    description: "Visit Diarch Food Court in Patna and book your table.",
    images: [siteConfig.hero.image.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]">
        <div className="relative flex min-h-full flex-col">
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
