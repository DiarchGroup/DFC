import { type MenuItem } from "@/data/menuData";
import Image from "next/image";

const tagLabelMap: Record<string, string> = {
  vegetarian: "Veg",
  vegan: "Vegan",
  "gluten-free": "GF",
  spicy: "Spicy",
};

const spiceLabelMap: Record<string, string> = {
  mild: "Mild",
  medium: "Medium",
  hot: "Hot",
};

const allergenLabelMap: Record<string, string> = {
  dairy: "Dairy",
  egg: "Egg",
  nuts: "Nuts",
  soy: "Soy",
  gluten: "Gluten",
};

type MenuItemCardProps = {
  item: MenuItem;
};

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="group relative rounded-2xl border border-[rgba(201,168,76,0.10)] bg-[rgba(15,30,51,0.5)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(201,168,76,0.25)] hover:bg-[rgba(15,30,51,0.75)]">
      {item.image && (
        <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl border border-[rgba(201,168,76,0.10)]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-[var(--font-heading)] text-xl leading-snug text-[var(--color-ivory)]">
          {item.name}
        </h3>
        <span className="shrink-0 font-[var(--font-accent)] text-sm font-semibold tracking-widest text-[var(--color-clay)]">
          ₹{item.price}
        </span>
      </div>

      <div className="my-3 h-px bg-[rgba(201,168,76,0.12)]" />

      <p className="text-sm leading-6 text-[var(--color-muted)]">{item.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(138,150,168,0.55)]">
          {spiceLabelMap[item.spiceLevel]}
        </span>
        {item.allergens.length > 0 && (
          <>
            <span className="text-[rgba(201,168,76,0.25)]">·</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgba(138,150,168,0.55)]">
              {item.allergens.map((a) => allergenLabelMap[a]).join(", ")}
            </span>
          </>
        )}
        {item.tags && item.tags.length > 0 && (
          <>
            <span className="text-[rgba(201,168,76,0.25)]">·</span>
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgba(201,168,76,0.22)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--color-clay)]"
              >
                {tagLabelMap[tag]}
              </span>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
