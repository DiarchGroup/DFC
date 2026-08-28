import Image from "next/image";

import { cn } from "@/lib/utils";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
};

export function ResponsiveImage({
  src,
  alt,
  priority,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 70,
}: ResponsiveImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="image-warm object-cover transition-transform duration-500 group-hover:scale-[1.03] hover:scale-[1.03]"
      />
    </div>
  );
}
