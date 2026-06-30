import Link from "next/link";

import { navLinks } from "@/data/navLinks";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[rgba(201,168,76,0.15)] bg-(--color-surface) text-(--color-ivory)">
      <div className="h-px bg-linear-to-r from-transparent via-[rgba(201,168,76,0.35)] to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div className="space-y-4">
            <div>
              <h2 className="font-(--font-heading) text-2xl text-(--color-ivory)">
                {siteConfig.name}
              </h2>
              <p className="mt-0.5 font-(--font-accent) text-[10px] uppercase tracking-[0.28em] text-(--color-clay)">
                Since {siteConfig.established}
              </p>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[rgba(232,226,216,0.6)]">
              {siteConfig.brandMessage}
            </p>
            <div className="h-px w-14 bg-linear-to-r from-(--color-clay) to-transparent" />
          </div>

          <div className="space-y-4">
            <h3 className="font-(--font-accent) text-[10px] font-semibold uppercase tracking-[0.22em] text-(--color-clay)">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[rgba(232,226,216,0.6)] transition-colors hover:text-(--color-clay)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-(--font-accent) text-[10px] font-semibold uppercase tracking-[0.22em] text-(--color-clay)">
              Hours
            </h3>
            <div className="space-y-1">
              <p className="text-xs text-(--color-muted)">Mon – Sun</p>
              <p className="font-(--font-heading) text-xl text-(--color-ivory)">10 AM – 10 PM</p>
              <p className="text-xs text-(--color-muted)">Open every day</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-(--font-accent) text-[10px] font-semibold uppercase tracking-[0.22em] text-(--color-clay)">
              Reach Us
            </h3>
            <div className="space-y-3 text-sm">
              <p className="leading-6 text-[rgba(232,226,216,0.6)]">{siteConfig.address}</p>
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="block text-[rgba(232,226,216,0.6)] transition-colors hover:text-(--color-clay)"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-[rgba(232,226,216,0.6)] transition-colors hover:text-(--color-clay)"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(201,168,76,0.1)] px-4 py-5 sm:px-6">
        <p className="text-center text-xs text-[rgba(232,226,216,0.35)]">
          © {siteConfig.established}–{currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
