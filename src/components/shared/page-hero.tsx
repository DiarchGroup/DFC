import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[rgba(201,168,76,0.18)] bg-(--color-surface) px-6 py-14 text-(--color-ivory) shadow-[0_24px_70px_rgba(6,14,28,0.4)] sm:px-10 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,14,28,0.95),rgba(15,30,51,0.88))]" />
      <div className="absolute left-6 right-6 top-0 h-px bg-linear-to-r from-transparent via-[rgba(201,168,76,0.4)] to-transparent sm:left-10 sm:right-10" />

      <div className="relative z-10 flex flex-col gap-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="max-w-3xl [&_h2]:text-(--color-ivory) [&_p:last-child]:text-[rgba(232,226,216,0.78)]"
        />
        {ctaLabel && ctaHref ? (
          <div>
            <Button asChild size="lg">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
