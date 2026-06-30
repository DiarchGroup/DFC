import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display, Montserrat } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";
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
  metadataBase: new URL("https://thearchrestaurant.in"),
  title: {
    default: "Diarch Food Court | Patna",
    template: "%s | Diarch Food Court",
  },
  description:
    "Diarch Food Court in Patna, established in 2017, offers great food, warm hospitality, and a welcoming dining experience every day.",
  openGraph: {
    title: "Diarch Food Court | Patna",
    description:
      "Discover menu highlights, contact details, and table booking at Diarch Food Court in Patna.",
    type: "website",
    url: "https://thearchrestaurant.in",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Diarch Food Court dining room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diarch Food Court | Patna",
    description: "Visit Diarch Food Court in Patna and book your table.",
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
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]">
        <div className="relative flex min-h-full flex-col">
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
