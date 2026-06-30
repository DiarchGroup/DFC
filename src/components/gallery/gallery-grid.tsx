"use client";

import Image from "next/image";
import { useState } from "react";

import { galleryImages } from "@/data/galleryData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

const categoryLabel = {
  food: "Food",
  interior: "Interior",
  ambience: "Ambience",
};

export function GalleryGrid() {
  const [activeId, setActiveId] = useState(galleryImages[0].id);
  const activeImage = galleryImages.find((image) => image.id === activeId) ?? galleryImages[0];

  return (
    <Dialog>
      <div className="grid gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <Reveal key={image.id} delay={index * 0.06} y={18}>
            <DialogTrigger asChild>
              <button
                type="button"
                onClick={() => setActiveId(image.id)}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[#060E1C]",
                  index % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : "",
                )}
              >
                <div className="relative h-64 sm:h-72">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                    className="image-warm object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[rgba(6,14,28,0.24)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-[rgba(6,14,28,0.76)] px-3 py-1 font-[var(--font-accent)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ivory)] opacity-0 transition duration-300 group-hover:opacity-100">
                    {categoryLabel[image.category]}
                  </div>
                </div>
              </button>
            </DialogTrigger>
          </Reveal>
        ))}
      </div>

      <DialogContent className="max-w-5xl p-3 sm:p-6">
        <DialogHeader>
          <DialogTitle>{categoryLabel[activeImage.category]}</DialogTitle>
          <DialogDescription>{activeImage.alt}</DialogDescription>
        </DialogHeader>
        <div className="relative h-[65vh] overflow-hidden rounded-xl">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="90vw"
            className="image-warm object-cover"
            priority
            unoptimized
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
