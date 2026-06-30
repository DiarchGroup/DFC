import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ResponsiveImage } from "@/components/shared/responsive-image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

export function StoryPreview() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <Reveal y={30}>
        <div className="group">
          <ResponsiveImage
            src={siteConfig.about.interiorImages[0].src}
            alt={siteConfig.about.interiorImages[0].alt}
            className="h-[280px] sm:h-[420px]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1} y={30}>
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Our Story"
            title="Built Around Community and Warm Service"
            description={siteConfig.storyPreview}
          />
          <Button
            asChild
            variant="secondary"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
