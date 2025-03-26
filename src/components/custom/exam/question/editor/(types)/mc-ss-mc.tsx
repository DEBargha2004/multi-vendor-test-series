"use client";

import MCSSMCForm from "@/components/custom/forms/questions/mc-ss-mc";
import {
  defaultValues,
  mcssmcCreateSchema,
  TMCSSMCCreateSchema,
} from "@/schema/questions/mc-ss-mc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EditorField, EditorLabel } from "../field";
import RichTextEditor from "@/components/custom/rich-test-editor";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { GripVertical, Plus, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function MCSSMCEditor({ id }: { id: string }) {
  const form = useForm<TMCSSMCCreateSchema>({
    resolver: zodResolver(mcssmcCreateSchema),
    defaultValues: defaultValues(),
  });

  const handleSubmit = async (data: TMCSSMCCreateSchema) => {};

  return (
    <div className="space-y-6 @container">
      <EditorField>
        <EditorLabel>Instructions</EditorLabel>
        <RichTextEditor />
      </EditorField>
      <EditorField>
        <EditorLabel>Description</EditorLabel>
        <RichTextEditor />
      </EditorField>

      <div className="grid @2xl:grid-cols-3 gap-3">
        <EditorField>
          <EditorLabel>Tags (Comma Separated)</EditorLabel>
          <Input placeholder="Cubic Root, Trigonometry" />
        </EditorField>
      </div>
      <EditorField>
        <EditorLabel>Shuffle Options</EditorLabel>
        <Switch />
      </EditorField>

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium">Options</h1>

        <div className={cn("", "p-3 space-y-3")}>
          <section className="flex justify-start items-center gap-3">
            <GripVertical size={18} className="cursor-grab" />

            <Label className="text-muted-foreground">Option {0 + 1}</Label>
            <Button
              type="button"
              size={"icon"}
              variant={"destructive"}
              className="size-8 ml-auto"
            >
              <Trash2 />
            </Button>
          </section>
          <section className="flex flex-col justify-start gap-3">
            <Input type="number" placeholder="Point" />
            <RichTextEditor />
          </section>
        </div>

        <Button type="button" className="ml-auto">
          <Plus />
          <span>Add Option</span>
        </Button>
      </div>
    </div>
  );
}
