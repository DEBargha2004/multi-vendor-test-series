import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";

const variants = cva(
  "flex justify-start items-center gap-1 border rounded-full p-0.5 px-1",
  {
    variants: {
      variant: {
        default:
          "text-muted-foreground border-muted-foreground bg-accent/30 dark:bg-accent/30 dark:text-muted-foreground dark:border-border",
        success:
          "bg-green-500/10 text-green-500 border border-green-600/60 dark:bg-green-500/10 dark:text-green-500 dark:border-green-600/60",
        warning:
          "text-yellow-600 border-yellow-500 bg-yellow-300/30 dark:bg-yellow-500/10 dark:text-yellow-500 dark:border-yellow-600/60",
        destructive:
          "text-red-600 border-red-500 bg-red-400/30 dark:bg-red-700/30 dark:text-red-400 dark:border-red-400",
        info: "text-blue-600 border-blue-500 bg-blue-400/30 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-600/60",
      },
    },
  }
);

export default function IconBadge({
  children,
  className,
  variant = "default",
  icon,
  ...props
}: HTMLProps<HTMLDivElement> &
  VariantProps<typeof variants> & { icon: React.ReactNode }) {
  return (
    <div
      className={cn(variants({ variant }), "whitespace-nowrap", className)}
      {...props}
    >
      {icon}
      <div
        className={cn(
          variants({ variant }),
          "w-px h-3.5 bg-muted rounded-none p-0 border-r-0"
        )}
      />
      <div className="space-x-1 px-1">{children}</div>
    </div>
  );
}
