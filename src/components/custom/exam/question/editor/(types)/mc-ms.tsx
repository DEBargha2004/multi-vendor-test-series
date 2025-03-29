"use client";

import { useQuestionEditor } from "@/hooks/use-question-editor";
import { TMCMSCreateSchema } from "@/schema/questions/mc-ms";
import { EditorField, EditorItem, EditorLabel } from "../field";
import RichTextEditor from "@/components/custom/rich-test-editor";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { checkingStrategies } from "@/constants/test.utils";
import { Switch } from "@/components/ui/switch";
import { GripVertical, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MCMSEditor({ id }: { id: string }) {
  const control = useQuestionEditor<TMCMSCreateSchema>(id);

  return (
    <div className="space-y-6">
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
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </EditorItem>
          )}
        />
        <EditorField
          control={control}
          name="body.metadata.strategy"
          render={({ field }) => (
            <EditorItem>
              <EditorLabel>Checking Strategy</EditorLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {checkingStrategies.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                type="number"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                placeholder="Cubic, Trigonometry"
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
                  type="checkbox"
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
