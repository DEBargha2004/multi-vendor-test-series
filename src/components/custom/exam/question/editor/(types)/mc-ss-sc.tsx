"use client";

import React from "react";
import { EditorField, EditorItem, EditorLabel } from "../field";
import RichTextEditor from "@/components/custom/rich-test-editor";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { GripVertical, Plus, Trash2 } from "lucide-react";
import { TMCSSSCCreateSchema } from "@/schema/questions/mc-ss-sc";
import { useQuestionEditor } from "@/hooks/use-question-editor";

export default function MCSSSCEditor({ id }: { id: string }) {
  const control = useQuestionEditor<TMCSSSCCreateSchema>(id);
  const res = control.get("body.metadata.shuffle");

  return (
    <div className="space-y-6 @container">
      <EditorField
        control={control}
        name="body.instruction"
        render={({ field }) => (
          <EditorItem>
            <EditorLabel>Instructions</EditorLabel>
            <RichTextEditor value={field.value} onChange={field.onChange} />
          </EditorItem>
        )}
      />
      <EditorField
        control={control}
        name="body.description"
        render={({ field }) => (
          <EditorItem>
            <EditorLabel>Description</EditorLabel>
            <RichTextEditor value={field.value} onChange={field.onChange} />
          </EditorItem>
        )}
      />

      <div className="grid @2xl:grid-cols-3 gap-3">
        <EditorField
          control={control}
          name="body.metadata.marks.correct"
          render={({ field }) => (
            <EditorItem>
              <EditorLabel>Positive Marks</EditorLabel>
              <Input
                type="number"
                placeholder="Positive Marks"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </EditorItem>
          )}
        />
        <EditorField
          control={control}
          name="body.metadata.marks.incorrect"
          render={({ field }) => (
            <EditorItem>
              <EditorLabel>Negative Marks</EditorLabel>
              <Input
                type="number"
                placeholder="Negative Marks"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </EditorItem>
          )}
        />
        <EditorField
          control={control}
          name="body.metadata.tags"
          render={({ field }) => (
            <EditorItem>
              <EditorLabel>Tags (Comma Separated)</EditorLabel>
              <Input
                placeholder="Cubic Root, Trigonometry"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </EditorItem>
          )}
        />
      </div>
      <EditorField
        control={control}
        name="body.metadata.shuffle"
        render={({ field }) => (
          <EditorItem className="flex items-center gap-3 space-y-0">
            <EditorLabel>Shuffle Options</EditorLabel>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </EditorItem>
        )}
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium">Options</h1>
        <EditorField
          control={control}
          name={`body.options.0.text`}
          render={({ field }) => (
            <EditorItem className="space-y-3">
              <section className="flex justify-start items-center gap-3">
                <GripVertical size={18} className="cursor-grab" />

                <EditorLabel className="text-muted-foreground">
                  Option {0 + 1}
                </EditorLabel>
                <Button
                  type="button"
                  size={"icon"}
                  variant={"destructive"}
                  className="size-8 ml-auto"
                >
                  <Trash2 />
                </Button>
              </section>
              <section className="flex justify-start items-center gap-3">
                <Input
                  type="radio"
                  className="size-5 accent-amber-400"
                  readOnly
                />
                <RichTextEditor value={field.value} onChange={field.onChange} />
              </section>
            </EditorItem>
          )}
        />

        <Button type="button" className="ml-auto">
          <Plus />
          <span>Add Option</span>
        </Button>
      </div>
    </div>
  );
}
