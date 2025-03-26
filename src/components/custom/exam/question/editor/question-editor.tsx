"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { questionTypes } from "@/constants/question-types";
import { QuestionTypes } from "@/types/question";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const questionLabels = questionTypes.map((qt) => ({
  value: qt.value,
  shortLabel: qt.shortLabel,
}));

export default function QuestionEditor() {
  const [tab, setTab] = useState("editor");
  const [selectedType, setSelectedType] = useState<QuestionTypes>(
    questionTypes[0].value
  );

  const qe = questionTypes.find((qt) => qt.value === selectedType)!;
  return (
    <div className="p-4 @container space-y-10">
      <section className="flex justify-between items-center gap-2">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="bg-accent">
            <TabsTrigger
              value="editor"
              className="dark:data-[state=active]:bg-background data-[state=active]:bg-background"
            >
              Editor
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="dark:data-[state=active]:bg-background data-[state=active]:bg-background"
            >
              Preview
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button className="ml-auto">
          <PlusCircle />
          <span className="@xl:inline hidden">New Question</span>
        </Button>
        {/*@ts-ignore*/}
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="@xl:w-[200px] w-[120px] font-medium">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {questionLabels.map((qt) => (
              <SelectItem
                key={qt.value}
                value={qt.value}
                className="font-medium"
              >
                {qt.shortLabel}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
      <section>
        {tab === "editor" ? (
          <qe.editor.Render id="" />
        ) : (
          <qe.preview.Render id="" />
        )}
      </section>
    </div>
  );
}
