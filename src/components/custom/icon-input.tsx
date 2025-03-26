"use client";

import React from "react";
import type { IconType } from "react-icons";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const baseClass = (value?: string) =>
  cn(
    "absolute top-0.5 right-0.5 h-[calc(100%-4px)] aspect-square [&>*]:h-full [&>*]:w-full",
    value
  );

export default function IconInput({
  PrefixIcon,
  SuffixIcon,
  className,
  ...props
}: {
  PrefixIcon?: React.ReactNode;
  SuffixIcon?: React.ReactNode;
} & React.HTMLProps<HTMLInputElement>) {
  return (
    <div className="relative">
      <Input
        className={cn(
          "",
          PrefixIcon && "pl-9",
          SuffixIcon && "pr-9",
          className
        )}
        {...props}
      />

      <section className={cn(baseClass("right-0.5"))}>{SuffixIcon}</section>
      <section className={cn(baseClass("left-0.5"))}>{PrefixIcon}</section>
    </div>
  );
}
