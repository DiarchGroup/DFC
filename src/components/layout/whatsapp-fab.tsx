"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/data/siteConfig";

export function WhatsAppFab() {
  const pathname = usePathname();
  const isMenuPage = pathname === "/menu";

  const href = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.bookingMessage,
  )}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(201,168,76,0.4)] bg-(--color-clay) text-(--color-surface) shadow-[0_4px_24px_rgba(201,168,76,0.45),0_0_0_1px_rgba(201,168,76,0.15)] transition-all hover:scale-[1.06] hover:shadow-[0_8px_32px_rgba(201,168,76,0.55)] ${
        isMenuPage ? "bottom-24" : "bottom-18 md:bottom-6"
      }`}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="sr-only">WhatsApp</span>
    </Link>
  );
}
