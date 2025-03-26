import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  createMCSSSCOption,
  mcssscCreateSchema,
  TMCSSSCCreateSchema,
} from "@/schema/questions/mc-ss-sc";
import { useFieldArray, useForm } from "react-hook-form";
import RichTextEditor from "../../rich-test-editor";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { GripVertical, Plus, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { questionTypes } from "@/constants/question-types";
import { ExtractZodType } from "@/types/extract-zod-type";

export default function MCSSSCForm() {
  const qEntity = questionTypes.find((q) => q.value === "mc_ss_sc")!;

  const { setter } = qEntity.editor.handlers();

  return (
    <Form {...form}>
      <form className="space-y-6 @container">
        <FormField
          control={form.control}
          name="body.instruction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <RichTextEditor value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body.description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <RichTextEditor value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid @2xl:grid-cols-3 gap-3">
          <FormField
            control={form.control}
            name="body.metadata.marks.correct"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Positive Marks</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Positive Marks"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body.metadata.marks.incorrect"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Negative Marks</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Negative Marks"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body.metadata.tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (Comma Separated)</FormLabel>
                <FormControl>
                  <Input placeholder="Cubic Root, Trigonometry" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="body.metadata.shuffle"
          render={({ field }) => (
            <FormItem className="flex justify-start items-center gap-4">
              <FormLabel>Shuffle Options</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-medium">Options</h1>

          {fields.map((field, idx) => (
            <div key={field.id} className={cn("", "p-3 space-y-3")}>
              <section className="flex justify-start items-center gap-3">
                <GripVertical size={18} className="cursor-grab" />

                <Label className="text-muted-foreground">
                  Option {idx + 1}
                </Label>
                <Button
                  type="button"
                  size={"icon"}
                  variant={"destructive"}
                  className="size-8 ml-auto"
                  onClick={() => remove(idx)}
                >
                  <Trash2 />
                </Button>
              </section>
              <section className="flex justify-start items-center gap-3">
                <Input
                  type="radio"
                  className="size-5 accent-amber-400"
                  checked={results.correctOpId === field.opid}
                  readOnly
                  onClick={() =>
                    form.setValue(
                      "results.correctOpId",
                      results.correctOpId !== field.opid ? field.opid : ""
                    )
                  }
                />
                <RichTextEditor />
              </section>
            </div>
          ))}

          <Button
            type="button"
            className="ml-auto"
            onClick={() => append(createMCSSSCOption())}
          >
            <Plus />
            <span>Add Option</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
