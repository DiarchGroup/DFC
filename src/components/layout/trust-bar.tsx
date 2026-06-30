import { Clock3, MapPin, Store, UtensilsCrossed } from "lucide-react";

const items = [
  { icon: Clock3, primary: "Open Daily", secondary: "10 AM – 10 PM" },
  { icon: MapPin, primary: "NH-98, Patna", secondary: "Danapur Chowk" },
  { icon: UtensilsCrossed, primary: "Dine-in", secondary: "& Takeaway" },
  { icon: Store, primary: "Est. 2017", secondary: "" },
];

export function TrustBar() {
  return (
    <section className="border-y border-[rgba(201,168,76,0.1)] py-4">
      <div className="flex flex-wrap items-center justify-center divide-x divide-[rgba(201,168,76,0.12)]">
        {items.map(({ icon: Icon, primary, secondary }) => (
          <div key={primary} className="flex items-center gap-2 px-6 py-0.5">
            <Icon className="h-3.5 w-3.5 shrink-0 text-(--color-clay)" strokeWidth={1.5} />
            <p className="[font-family:var(--font-accent)] text-[11px] text-(--color-muted)">
              {primary}
              {secondary && <span className="ml-1 text-(--color-ivory)">{secondary}</span>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
