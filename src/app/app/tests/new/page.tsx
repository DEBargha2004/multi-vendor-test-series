"use client";

import React, { useState } from "react";
import TestBasicDetails from "./_components/test-basic-details";
import { TTestFormStage } from "@/types/test-form-stage";
import { TTestBasicDetails, TTestPricing, TTestSettings } from "@/schema/test";
import TestSettings from "./_components/test-settings";
import {
  Timeline,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TestPricing from "./_components/test-pricing";
import TestSequence from "./_components/test-sequence";

// type Setter = (type: TTestForm, data: any) => void

export default function Page() {
  const formTypes: {
    label: string;
    value: TTestFormStage;
  }[] = [
    { label: "Basic Details", value: "basic" },
    { label: "Settings", value: "settings" },
    { label: "Pricing", value: "pricing" },
    { label: "Sequence", value: "sequence" },
  ];
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const increment = () => {
    setCurrentIdx((prev) => (prev + 1 >= formTypes.length ? prev : prev + 1));
  };

  const decrement = () => {
    setCurrentIdx((prev) => (prev === 0 ? prev : prev - 1));
  };

  const setters: Record<TTestFormStage, (data: any) => void> = {
    basic: (data: TTestBasicDetails) => {
      increment();
    },
    settings: (data: TTestSettings) => {
      increment();
    },
    pricing: (data: TTestPricing) => {
      increment();
    },
    sequence: (data: any) => {},
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-full @container px-3">
      {/* <div className="mx-10 w-full">
        <Timeline orientation="horizontal" value={currentIdx}>
          {formTypes.map((type, idx) => (
            <TimelineItem step={idx} key={idx}>
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineIndicator />
                <TimelineTitle>{type.label}</TimelineTitle>
              </TimelineHeader>
            </TimelineItem>
          ))}
        </Timeline>
      </div> */}
      <Card className="@2xl:w-[500px] w-full pt-0 overflow-hidden">
        <CardHeader className="border-b bg-accent p-4 py-6">
          <CardTitle>{formTypes[currentIdx].label}</CardTitle>
        </CardHeader>
        <CardContent>
          {formTypes[currentIdx].value === "basic" && (
            <TestBasicDetails setter={setters.basic} />
          )}
          {formTypes[currentIdx].value === "settings" && (
            <TestSettings setter={setters.settings} />
          )}
          {formTypes[currentIdx].value === "pricing" && (
            <TestPricing setter={setters.pricing} />
          )}
          {formTypes[currentIdx].value === "sequence" && (
            <TestSequence setter={setters.sequence} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
