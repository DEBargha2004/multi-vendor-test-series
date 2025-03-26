"use client";

import { useQueryState } from "nuqs";
import { Input } from "../ui/input";
import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export default function SearchBar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [query, setQuery] = useQueryState("q");

  return (
    <div className={cn("relative group", className)}>
      <Input
        value={query ?? ""}
        onChange={(e) => setQuery(e.target.value)}
        //@ts-ignore
        style={{ fieldSizing: "content" }}
        className="rounded-full pl-8 focus:w-[250px] min-w-[150px] transition-all"
        placeholder="Search..."
      />
      <div className="absolute top-1/2 left-2 -translate-y-1/2 text-muted-foreground">
        <Search size={18} />
      </div>
    </div>
  );
}
