import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full [font-family:var(--font-accent)] text-sm font-semibold uppercase tracking-[0.14em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-(--color-clay) text-(--color-surface) shadow-[0_8px_28px_rgba(201,168,76,0.32)] hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_12px_36px_rgba(201,168,76,0.42)] focus-visible:ring-(--color-clay)",
        secondary:
          "border border-[rgba(232,226,216,0.35)] bg-transparent text-(--color-ivory) hover:border-(--color-clay) hover:bg-[rgba(201,168,76,0.1)] hover:text-(--color-ivory) focus-visible:ring-(--color-clay)",
        ghost:
          "text-(--color-ivory) hover:bg-[rgba(201,168,76,0.1)] hover:text-(--color-ivory) focus-visible:ring-(--color-clay)",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-12 px-4 text-xs",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
