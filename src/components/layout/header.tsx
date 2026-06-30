"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

import { navLinks } from "@/data/navLinks";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileMenuDrawer } from "@/components/layout/mobile-menu-drawer";

export function Header() {
  const pathname = usePathname();
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.bookingMessage,
  )}`;

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(201,168,76,0.1)] bg-[rgba(6,14,28,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-(--font-heading) text-2xl text-(--color-ivory)">
            {siteConfig.name}
          </span>
          <span className="font-(--font-accent) text-[10px] uppercase tracking-[0.3em] text-(--color-clay) opacity-80">
            Since {siteConfig.established}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-3 font-(--font-accent) text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                  isActive
                    ? "text-(--color-ivory) after:absolute after:bottom-[0.45rem] after:left-4 after:right-4 after:h-px after:bg-(--color-clay) after:content-['']"
                    : "text-[rgba(248,245,240,0.6)] hover:bg-[rgba(201,168,76,0.08)] hover:text-(--color-ivory)",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Open WhatsApp chat"
            className="hidden min-h-12 min-w-12 items-center justify-center rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-(--color-clay) transition-all hover:scale-[1.04] hover:bg-[rgba(201,168,76,0.18)] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
          </Link>
          <Button asChild className="hidden md:inline-flex">
            <Link href={siteConfig.ctas.primary.href}>{siteConfig.ctas.primary.label}</Link>
          </Button>
          <MobileMenuDrawer />
        </div>
      </div>
    </header>
  );
}
