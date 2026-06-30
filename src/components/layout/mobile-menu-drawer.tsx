"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { navLinks } from "@/data/navLinks";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

export function MobileMenuDrawer() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden" aria-label="Open navigation menu">
          <Menu className="h-5 w-5 text-(--color-ivory)" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <p className="[font-family:var(--font-heading)] text-2xl text-(--color-ivory)">
            {siteConfig.name}
          </p>
          <p className="mt-1 [font-family:var(--font-accent)] text-[10px] uppercase tracking-[0.28em] text-(--color-clay)">
            Since {siteConfig.established}
          </p>
          <p className="mt-3 max-w-sm text-sm text-[rgba(232,226,216,0.65)]">
            {siteConfig.shortDescription}
          </p>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-2xl px-4 py-3 [font-family:var(--font-accent)] text-sm font-semibold uppercase tracking-[0.12em] transition-colors",
                  isActive
                    ? "bg-[rgba(201,168,76,0.14)] text-(--color-clay)"
                    : "text-[rgba(232,226,216,0.7)] hover:bg-[rgba(201,168,76,0.08)] hover:text-(--color-ivory)",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-8">
          <Button asChild className="w-full">
            <Link href={siteConfig.ctas.primary.href}>Reserve a Table</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
