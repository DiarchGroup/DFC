import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ResponsiveImage } from "@/components/shared/responsive-image";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/data/galleryData";

const previewImages = galleryImages.slice(0, 4);

export function GalleryPreview() {
  return (
    <section className="space-y-8">
      <Reveal>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Atmosphere"
            title="A Space Designed for Memorable Evenings"
            description="From plated details to soft lighting, every corner of Diarch Food Court is crafted for comfort and celebration."
          />
          <Button asChild variant="secondary" className="shrink-0">
            <Link href="/gallery">Open Full Gallery</Link>
          </Button>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {previewImages.map((image, index) => (
          <Reveal key={image.id} delay={index * 0.1} y={30}>
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-[rgba(201,168,76,0.12)] transition-all duration-300 hover:border-[rgba(201,168,76,0.3)]">
              <ResponsiveImage
                src={image.src}
                alt={image.alt}
                className="h-56"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[rgba(6,14,28,0.7)] via-[rgba(6,14,28,0.1)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 rounded-full border border-[rgba(201,168,76,0.4)] bg-[rgba(6,14,28,0.7)] px-3 py-1 [font-family:var(--font-accent)] text-[10px] font-semibold uppercase tracking-[0.16em] text-(--color-clay) opacity-0 transition duration-300 group-hover:opacity-100">
                View Gallery
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
