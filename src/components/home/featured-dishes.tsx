import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { menuCategories, featuredDishIds } from "@/data/menuData";

const tagLabelMap = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten Free",
  spicy: "Spicy",
};

const featuredItems = menuCategories
  .flatMap((category) => category.items)
  .filter((item) => featuredDishIds.includes(item.id));

export function FeaturedDishes() {
  return (
    <section className="space-y-10">
      <Reveal>
        <SectionHeading
          eyebrow="Signature Picks"
          title="Featured Dishes"
          description="A quick look at the dishes guests ask for again and again."
        />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3">
        {featuredItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.1} y={20}>
            <div className="space-y-4 border-t border-t-[rgba(201,168,76,0.4)] pt-6">
              <p className="[font-family:var(--font-cormorant)] text-2xl italic text-(--color-ivory)">
                {item.name}
              </p>
              <p className="text-sm leading-6 text-(--color-muted)">{item.description}</p>
              <div className="flex items-end justify-between">
                <div className="flex flex-wrap gap-2">
                  {item.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="[font-family:var(--font-accent)] text-[9px] uppercase tracking-[0.18em] text-(--color-muted)"
                    >
                      {tagLabelMap[tag]}
                    </span>
                  ))}
                </div>
                <p className="[font-family:var(--font-heading)] text-2xl text-(--color-clay)">
                  ₹{item.price}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm text-(--color-clay) transition-colors hover:text-(--color-ivory)"
        >
          Browse full menu
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
