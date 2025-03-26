import { cn } from "@/lib/utils";
import React from "react";

export default function QuestionEditorSidebar({
  className,
  ...props
}: React.ComponentProps<"aside">) {
  return (
    <aside className={cn("h-full", "overflow-y-auto", className)} {...props}>
      <section className="p-3 border-b sticky top-0"></section>

      <section className="p-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className=""></div>
        ))}
      </section>
    </aside>
  );
}
