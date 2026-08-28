import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact/contact-details";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: {
    absolute: "Contact & Location | Diarch Food Court, Danapur Patna",
  },
  description:
    "Find Diarch Food Court address, phone, WhatsApp, email, opening hours, and location details in Danapur, Patna.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Location | Diarch Food Court, Danapur Patna",
    description:
      "Find Diarch Food Court address, phone, WhatsApp, email, opening hours, and location details in Danapur, Patna.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Get in Touch"
        title="Visit, Call, or Message Us"
        description="Everything you need to plan your visit, from location and opening hours to parking and delivery notes."
      />
      <section className="rounded-3xl border border-(--color-border) bg-[#060E1C] p-6 sm:p-8">
        <h2 className="font-(--font-heading) text-3xl text-(--color-ivory)">
          Contact Information
        </h2>
        <p className="mt-2 text-sm text-(--color-muted)">
          We are happy to help with reservations, events, menu questions, and accessibility requests.
        </p>
      </section>
      <ContactDetails />
    </div>
  );
}
