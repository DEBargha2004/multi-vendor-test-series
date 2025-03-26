"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import QuestionPreviewHeader from "./question-preview-header";
import Tag from "@/components/custom/score";

export default function MCMS() {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  const isSelected = (index: number) => selectedIndex.includes(index);
  const handleSelect = (index: number) => {
    if (isSelected(index)) {
      setSelectedIndex(selectedIndex.filter((i) => i !== index));
    } else {
      setSelectedIndex([...selectedIndex, index]);
    }
  };
  return (
    <div className="space-y-5">
      <QuestionPreviewHeader qno={1}>
        <Tag>+1</Tag>
        <Tag>-0.25</Tag>
      </QuestionPreviewHeader>
      <section className="space-y-3 @container">
        <h2 className="text-sm">The cube root of 3375 is equal to</h2>

        <div className="grid @lg:grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-full min-h-16 border rounded hover:bg-accent/30 px-3 cursor-pointer",
                "flex justify-start items-center gap-2"
              )}
              onClick={() => handleSelect(index)}
            >
              <Input
                type="checkbox"
                name="answer"
                checked={isSelected(index)}
                readOnly
                className="size-3.5 accent-foreground"
              />
              <p className="text-sm">The answer is {index}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
