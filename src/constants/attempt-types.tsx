import { cn } from "@/lib/utils";
import React from "react";

type TAttemptType = {
  label: string;
  value: string;
  Render: (props: {
    isActive?: boolean;
    children?: React.ReactNode;
    className?: string;
  }) => React.ReactNode;
};

export const attemptTypes = [
  {
    value: "not-visited",
    label: "Not Visited",
    Render({ isActive, children, className }) {
      return (
        <div
          className={cn(
            "size-6 flex items-center justify-center",
            "border border-border rounded text-sm font-medium text-muted-foreground",
            isActive && "border-foreground",
            className
          )}
        >
          {children}
        </div>
      );
    },
  },
  {
    value: "marked",
    label: "Marked",
    Render({ isActive, children, className }) {
      return (
        <div
          className={cn(
            "size-6 flex items-center justify-center",
            "border border-transparent rounded-full text-sm font-medium bg-violet-400/20 dark:text-violet-500 text-violet-600",
            isActive && "border-foreground",
            className
          )}
        >
          {children}
        </div>
      );
    },
  },
  {
    value: "answered",
    label: "Answered",
    Render({ isActive, children, className }) {
      return (
        <div
          className={cn(
            "size-6 flex items-center justify-center",
            "border border-transparent rounded rounded-t-2xl text-sm font-medium bg-emerald-300/30 dark:text-emerald-500 text-emerald-600",
            isActive && "border-foreground",
            className
          )}
        >
          {children}
        </div>
      );
    },
  },
  {
    value: "unaswered",
    label: "Unanswered",
    Render({ isActive, children, className }) {
      return (
        <div
          className={cn(
            "size-6 flex items-center justify-center",
            "border border-transparent rounded rounded-b-2xl text-sm font-medium bg-red-300/30 dark:bg-red-300/20 text-red-500",
            isActive && "border-foreground",
            className
          )}
        >
          {children}
        </div>
      );
    },
  },
  {
    value: "mark&answered",
    label: "Mark & Answered",
    Render({ isActive, children, className }) {
      return (
        <div
          className={cn(
            "size-6 shrink-0 flex items-center justify-center relative",
            "border border-transparent rounded-full text-sm font-medium bg-violet-400/20 text-violet-600",
            isActive && "border-foreground",
            className
          )}
        >
          {children}
          <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-300" />
        </div>
      );
    },
  },
] as const satisfies TAttemptType[];

export const getAttemptType = (type: string) => {
  return attemptTypes.find((a) => a.value === type);
};

export type AttemptType = (typeof attemptTypes)[number]["value"];
