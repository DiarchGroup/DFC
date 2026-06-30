import { Reveal } from "@/components/shared/reveal";
import { ResponsiveImage } from "@/components/shared/responsive-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/siteConfig";

export function AboutContent() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Our Journey"
              title="From Supper Club to Signature Destination"
              description={siteConfig.about.story}
            />
            <p className="text-base leading-7 text-[var(--color-muted)]">
              {siteConfig.about.philosophy}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="group">
            <ResponsiveImage
              src={siteConfig.about.interiorImages[1].src}
              alt={siteConfig.about.interiorImages[1].alt}
              className="h-[300px] sm:h-[420px]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </Reveal>
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-[rgba(232,226,216,0.16)] bg-[linear-gradient(135deg,#060E1C,#112040)] p-6 text-[var(--color-ivory)] sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="group">
            <ResponsiveImage
              src={siteConfig.about.founder.image}
              alt="Diarch Food Court kitchen team preparing fresh dishes"
              className="h-[300px] sm:h-[420px]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-4">
            <p className="font-[var(--font-accent)] text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-clay)]">
              Our Commitment
            </p>
            <h2 className="font-[var(--font-heading)] text-4xl text-[var(--color-ivory)]">
              Diarch Kitchen Promise
            </h2>
            <p className="text-sm font-semibold text-[rgba(232,226,216,0.7)]">
              {siteConfig.about.founder.role}
            </p>
            <p className="text-base leading-7 text-[rgba(232,226,216,0.78)]">
              {siteConfig.about.founder.bio}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {siteConfig.about.values.map((value, index) => (
          <Reveal key={value} delay={index * 0.06}>
            <Card className="h-full border-t-[3px] border-t-[var(--color-clay)]">
              <CardContent className="p-6">
                <p className="text-sm leading-7 text-[var(--color-muted)]">{value}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
