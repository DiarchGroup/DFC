import { CarFront, Mail, MapPinned, MessageCircle, PhoneCall, Truck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/siteConfig";

export function ContactDetails() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="space-y-5">
        <Card className="border-t-[3px] border-t-[var(--color-clay)]">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <MapPinned className="h-5 w-5 text-[var(--color-clay)]" />
              Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[var(--color-muted)]">
            <p>{siteConfig.address}</p>
            <a
              href={siteConfig.mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex font-semibold text-[var(--color-charcoal)] underline-offset-4 hover:underline"
            >
              Open in Maps
            </a>
          </CardContent>
        </Card>

        <Card className="border-t-[3px] border-t-[var(--color-clay)]">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5 text-[var(--color-clay)]" />
              Phone
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-[var(--color-muted)]">
            <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-[var(--color-charcoal)]">
              {siteConfig.phone}
            </a>
          </CardContent>
        </Card>

        <Card className="border-t-[3px] border-t-[var(--color-clay)]">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-[var(--color-clay)]" />
              WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-[var(--color-muted)]">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}`}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--color-charcoal)]"
            >
              Chat for Reservations
            </a>
          </CardContent>
        </Card>

        <Card className="border-t-[3px] border-t-[var(--color-clay)]">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[var(--color-clay)]" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-[var(--color-muted)]">
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[var(--color-charcoal)]">
              {siteConfig.email}
            </a>
          </CardContent>
        </Card>
      </section>

      <aside className="space-y-5">
        <Card className="border-t-[3px] border-t-[var(--color-clay)]">
          <CardHeader className="pb-2">
            <CardTitle>Map Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
              <iframe
                title="Diarch Food Court location on Google Maps"
                src={siteConfig.mapEmbedUrl}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-[var(--color-muted)]">Use the map to quickly check directions and nearby landmarks before you visit.</p>
          </CardContent>
        </Card>

        <Card className="border-t-[3px] border-t-[var(--color-clay)]">
          <CardHeader className="pb-2">
            <CardTitle>Opening Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[var(--color-muted)]">
            {siteConfig.hours.map((entry) => (
              <div key={entry.day} className="flex justify-between gap-3 border-b border-[var(--color-border)] pb-2">
                <span>{entry.day}</span>
                <span className="text-right">{entry.hours}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-t-[3px] border-t-[var(--color-clay)]">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <CarFront className="h-5 w-5 text-[var(--color-clay)]" />
              Parking
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-[var(--color-muted)]">
            {siteConfig.parkingNotes}
          </CardContent>
        </Card>

        <Card className="border-t-[3px] border-t-[var(--color-clay)]">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-[var(--color-clay)]" />
              Delivery
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-[var(--color-muted)]">
            {siteConfig.deliveryNotes}
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
