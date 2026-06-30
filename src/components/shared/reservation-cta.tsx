import Link from "next/link";

import { Button } from "@/components/ui/button";

type ReservationCtaProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function ReservationCta({
  title = "Plan Your Next Dinner",
  description = "Reserve your table in seconds on WhatsApp and let us prepare a memorable evening for your group.",
  className,
}: ReservationCtaProps) {
  return (
    <section
      className={`border-t border-[rgba(201,168,76,0.1)] pt-20 pb-12 text-center ${className ?? ""}`}
    >
      <div className="mx-auto max-w-lg space-y-5">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-(--color-clay) opacity-50" />
          <p className="[font-family:var(--font-accent)] text-xs uppercase tracking-[0.28em] text-(--color-clay)">
            Reservations
          </p>
          <span className="h-px w-10 bg-(--color-clay) opacity-50" />
        </div>
        <h2 className="[font-family:var(--font-heading)] text-3xl text-(--color-ivory) sm:text-4xl">
          {title}
        </h2>
        <p className="text-sm leading-7 text-(--color-muted)">{description}</p>
        <div className="pt-2">
          <Button asChild size="lg">
            <Link href="/reservations">Reserve a Table</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
