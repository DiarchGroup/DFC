import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 font-(--font-accent) text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.12)] text-(--color-clay)",
        outline:
          "border-[rgba(248,245,240,0.14)] bg-transparent text-(--color-muted)",
        subtle:
          "border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-(--color-clay)",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
