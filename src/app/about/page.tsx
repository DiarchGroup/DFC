import type { Metadata } from "next";

import { AboutContent } from "@/components/about/about-content";
import { PageHero } from "@/components/shared/page-hero";
import { ReservationCta } from "@/components/shared/reservation-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Diarch Food Court, established in 2017 in Patna, and the values behind its hospitality.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="About Diarch Food Court"
        title="A Patna Dining Destination Since 2017"
        description="Our team focuses on quality food, friendly service, and a welcoming experience for every guest."
      />
      <AboutContent />
      <ReservationCta />
    </div>
  );
}
