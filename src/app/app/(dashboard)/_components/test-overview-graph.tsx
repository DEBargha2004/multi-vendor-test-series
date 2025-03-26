"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { CartesianGrid, LineChart, Line, XAxis, BarChart, Bar } from "recharts";

const data: {
  avgCompletionTime: number;
  avgScore: number;
  passRate: number;
  testName?: string;
}[] = [
  { avgCompletionTime: 32.5, avgScore: 78.2, passRate: 85, testName: "Test 1" },
  { avgCompletionTime: 28.7, avgScore: 82.5, passRate: 90, testName: "Test 2" },
  { avgCompletionTime: 35.1, avgScore: 75.8, passRate: 80, testName: "Test 3" },
  { avgCompletionTime: 30.2, avgScore: 88.4, passRate: 92, testName: "Test 4" },
  { avgCompletionTime: 33.8, avgScore: 81.0, passRate: 87, testName: "Test 5" },
];

const chartConfig = {
  avgCompletionTime: {
    label: "Average Completion Time",
    color: "var(--chart-1)",
  },
  avgScore: {
    label: "Average Tag",
    color: "var(--chart-2)",
  },
  passRate: {
    label: "Pass Rate",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export default function TestOverviewGraph() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={"testName"}
          tickMargin={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => {
            return value;
          }}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel
              className="w-[250px]"
              formatter={(value, name, item, index) => (
                <>
                  <div
                    className="size-2.5 shrink-0 rounded bg-[var(--color-bg)]"
                    style={
                      {
                        "--color-bg": `var(--color-${name})`,
                      } as React.CSSProperties
                    }
                  />

                  <span className="text-muted-foreground">
                    {chartConfig[name as keyof typeof chartConfig].label ||
                      name}
                  </span>
                  <div className="ml-auto flex gap-0.5">
                    {value}
                    <span className="text-muted-foreground">
                      {name === "avgCompletionTime" && "min"}
                      {name === "passRate" && "%"}
                      {name === "avgScore" && "%"}
                    </span>
                  </div>
                </>
              )}
            />
          }
        />
        <Bar
          dataKey="avgCompletionTime"
          name="avgCompletionTime"
          fill="var(--color-avgCompletionTime)"
          radius={5}
        />
        <Bar
          dataKey="avgScore"
          name="avgScore"
          fill="var(--color-avgScore)"
          radius={5}
        />
        <Bar
          dataKey="passRate"
          name="passRate"
          fill="var(--color-passRate)"
          radius={5}
        />
      </BarChart>
    </ChartContainer>
  );
}
