import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border border-(--color-border) bg-[#060E1C] px-4 py-2 text-sm text-(--color-foreground) placeholder:text-(--color-muted) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-clay) disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
