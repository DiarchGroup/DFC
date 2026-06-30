import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/data/siteConfig";

export function HoursLocationPreview() {
  return (
    <section className="grid gap-12 border-t border-[rgba(201,168,76,0.1)] pt-12 md:grid-cols-2 md:gap-20">
      <Reveal>
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-(--color-clay)" strokeWidth={1.5} />
            <h3 className="[font-family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.2em] text-(--color-ivory)">
              Opening Hours
            </h3>
          </div>
          <div className="space-y-1">
            {siteConfig.hours.map((entry) => (
              <div
                key={entry.day}
                className="flex justify-between border-b border-[rgba(201,168,76,0.06)] py-2 text-sm"
              >
                <span className="text-(--color-muted)">{entry.day}</span>
                <span className="text-(--color-ivory)">{entry.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-(--color-clay)" strokeWidth={1.5} />
            <h3 className="[font-family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.2em] text-(--color-ivory)">
              Find Us
            </h3>
          </div>
          <div className="space-y-3 text-sm">
            <p className="leading-6 text-(--color-muted)">{siteConfig.address}</p>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              className="block text-(--color-ivory) transition-colors hover:text-(--color-clay)"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex text-(--color-clay) transition-colors hover:text-(--color-ivory)"
            >
              View full contact details →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
