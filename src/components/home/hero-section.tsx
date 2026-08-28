import Link from "next/link";
import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section className="relative -mt-6 ml-[calc(50%-50vw)] h-screen w-screen overflow-hidden bg-(--color-surface) px-6 py-12 text-(--color-ivory) sm:-mt-10 sm:px-10 sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(201,168,76,0.16),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_82%,rgba(201,168,76,0.06),transparent_28%)]" />

      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal y={30}>
            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-(--color-clay)" />
                <p className="[font-family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.32em] text-(--color-clay)">
                  {siteConfig.hero.eyebrow}
                </p>
              </div>

              <h1 className="[font-family:var(--font-heading)] text-[2.6rem] leading-[1.12] text-(--color-ivory) sm:text-[3.6rem] lg:text-[4.4rem]">
                {siteConfig.hero.title}
              </h1>

              <p className="max-w-xl text-[15px] leading-[1.85] text-[rgba(232,226,216,0.72)] sm:text-lg">
                {siteConfig.hero.description}
              </p>

              <div className="h-px w-24 bg-linear-to-r from-(--color-clay) to-transparent" />

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg">
                  <Link href={siteConfig.ctas.primary.href}>
                    {siteConfig.ctas.primary.label}
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={siteConfig.ctas.secondary.href}>
                    {siteConfig.ctas.secondary.label}
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} y={30}>
            <div className="relative h-[320px] overflow-hidden rounded-[2rem] border border-[rgba(201,168,76,0.22)] shadow-[0_0_0_1px_rgba(201,168,76,0.06),0_32px_80px_rgba(6,14,28,0.7)] sm:h-[460px]">
              <Image
                src={siteConfig.hero.image.src}
                alt={siteConfig.hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={70}
                className="image-warm object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[rgba(6,14,28,0.5)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(201,168,76,0.4)] to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
