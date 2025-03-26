import { cn } from "@/lib/utils";
import { MoveDownRight, MoveUpRight } from "lucide-react";
import { HTMLProps } from "react";

export function DashboardCardIconWrapper({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "h-9 aspect-square rounded-full border grid place-content-center hover:bg-accent/70",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DashboardCardTextWrapper({
  children,
  className,
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-3xl font-semibold", className)} {...props}>
      {children}
    </h2>
  );
}

export function DashboardNumberHighlighter({
  children,
  className,
  showSign = true,
}: {
  children: string;
  className?: string;
  showSign?: boolean;
}) {
  const isNegative = children.startsWith("-");
  children = isNegative
    ? showSign
      ? children
      : children.slice(1)
    : showSign
    ? `+${children}`
    : children;
  return (
    <span
      className={cn(
        "flex gap-1 items-center font-semibold",
        isNegative ? "text-red-500" : "text-green-500",
        "[&>svg]:size-4",
        className
      )}
    >
      {isNegative ? <MoveDownRight /> : <MoveUpRight />}
      {children}
    </span>
  );
}
