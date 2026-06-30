"use client";

import Link from "next/link";
import { useState } from "react";

import { menuCategories, dietaryFilterOptions, type DietaryTag } from "@/data/menuData";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuItemCard } from "@/components/menu/menu-item-card";

export function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [selectedTags, setSelectedTags] = useState<DietaryTag[]>([]);

  function toggleTag(tag: DietaryTag) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((currentTag) => currentTag !== tag) : [...prev, tag],
    );
  }

  function filterItems<T extends { tags?: DietaryTag[] }>(items: T[]) {
    if (selectedTags.length === 0) {
      return items;
    }

    return items.filter((item) => selectedTags.every((tag) => item.tags?.includes(tag)));
  }

  return (
    <div className="relative">
      <div className="mb-6 flex flex-wrap gap-2">
        {dietaryFilterOptions.map((option) => {
          const isActive = selectedTags.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              className={`min-h-10 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                isActive
                  ? "border-(--color-clay) bg-(--color-clay) text-[#060E1C]"
                  : "border-[rgba(201,168,76,0.18)] bg-[rgba(15,30,51,0.4)] text-(--color-muted) hover:border-[rgba(201,168,76,0.4)] hover:text-(--color-ivory)"
              }`}
              onClick={() => toggleTag(option.value)}
              aria-pressed={isActive}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[220px_minmax(0,1fr)_240px] xl:items-start">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full xl:contents">
          <TabsList className="grid w-full grid-cols-2 justify-start gap-2 overflow-visible rounded-[1.5rem] bg-transparent p-0 sm:grid-cols-3 lg:grid-cols-4 xl:sticky xl:top-28 xl:grid-cols-1 xl:self-start xl:border xl:border-[rgba(201,168,76,0.12)] xl:bg-[rgba(15,30,51,0.55)] xl:p-3 xl:backdrop-blur-sm">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="h-auto min-h-0 justify-start rounded-2xl px-4 py-3 text-left leading-5 whitespace-normal xl:w-full"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => {
            const filteredItems = filterItems(category.items);

            return (
              <TabsContent key={category.id} value={category.id} className="xl:mt-0">
                <div className="mb-5">
                  <h2 className="font-[var(--font-heading)] text-2xl text-(--color-ivory) sm:text-3xl">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{category.description}</p>
                </div>
                {filteredItems.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-[var(--color-border)] p-8 text-center text-sm text-[var(--color-muted)]">
                    No items match the selected dietary filters.
                  </div>
                ) : (
                  <div className="grid gap-4 lg:grid-cols-2">
                    {filteredItems.map((item, index) => (
                      <Reveal key={item.id} delay={index * 0.04} y={18}>
                        <MenuItemCard item={item} />
                      </Reveal>
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>


      </div>
    </div>
  );
}
