import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { questionTypes } from "@/constants/question-types";

const languages = ["English", "Hindi"];

export default function QuestionContainer() {
  const questionComponent = questionTypes.find((qt) => qt.value === "mc_ms");
  return (
    <div className="border w-full rounded-lg @3xl:p-10 p-5 @container">
      {questionComponent && <questionComponent.preview.Render id="" />}
    </div>
  );
}
