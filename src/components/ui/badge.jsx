import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        primarySkill:
          "border-transparent bg-blue-200 shadow text-blue-800 dark:bg-blue-800 dark:text-blue-50",
        secondarySkill:
          "border-transparent bg-fuchsia-200 shadow  text-fuchsia-800 dark:bg-fuchsia-800 dark:text-fuchsia-50",
        tertiarySkill:
          "border-transparent bg-rose-200 shadow  text-rose-800 dark:bg-rose-800 dark:text-rose-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
