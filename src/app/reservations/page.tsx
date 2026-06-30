import type { Metadata } from "next";

import { ReservationForm } from "@/components/reservations/reservation-form";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve your table at Diarch Food Court in Patna and confirm quickly with our team on WhatsApp.",
};

export default function ReservationsPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Reserve"
        title="Reserve Your Table"
        description="Share your preferred slot, then continue instantly on WhatsApp for quick confirmation."
      />
      <ReservationForm />
    </div>
  );
}
