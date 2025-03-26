import Tag from "@/components/custom/score";
import { cn } from "@/lib/utils";
import React from "react";

export default function QuestionPreviewHeader({
  qno,
  children,
}: {
  qno: number;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "flex justify-start items-center gap-1",
        "[&>span]:text-muted-foreground"
      )}
    >
      <h1 className="font-semibold mr-3">Q{qno}</h1>
      {/* <Select>
  <SelectTrigger className="w-26 ml-auto" hideIcon>
    <SelectValue placeholder="English" />
    <Languages size={16} className="scale-[0.9]" />
  </SelectTrigger>
  <SelectContent>
    {languages.map((lang) => (
      <SelectItem key={lang} value={lang}>
        {lang}
      </SelectItem>
    ))}
  </SelectContent>
</Select> */}
    </section>
  );
}
