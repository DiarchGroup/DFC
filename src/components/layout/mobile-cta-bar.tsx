import Link from "next/link";

import { siteConfig } from "@/data/siteConfig";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[rgba(201,168,76,0.15)] bg-(--color-surface) md:hidden">
      <Link
        href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.bookingMessage)}`}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-16 items-center justify-center bg-(--color-clay) px-4 text-center [font-family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.14em] text-(--color-surface)"
      >
        Reserve on WhatsApp
      </Link>
      <a
        href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
        className="flex min-h-16 items-center justify-center bg-(--color-surface-soft) px-4 text-center [font-family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.14em] text-(--color-ivory)"
      >
        Call Now
      </a>
    </div>
  );
}
