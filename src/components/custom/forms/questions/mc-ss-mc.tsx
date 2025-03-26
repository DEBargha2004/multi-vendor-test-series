import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFieldArray, useForm } from "react-hook-form";
import RichTextEditor from "../../rich-test-editor";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { GripVertical, Plus, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import {
  createMCSSMCOption,
  TMCSSMCCreateSchema,
} from "@/schema/questions/mc-ss-mc";

export default function MCSSMCForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<TMCSSMCCreateSchema>>;
  onSubmit: (data: TMCSSMCCreateSchema) => void;
}) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "body.options",
  });

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
              <section className="flex flex-col justify-start gap-3">
                <Input
                  type="number"
                  placeholder="Point"
                  value={form.watch(`body.options.${idx}.points`)}
                  onChange={(e) =>
                    form.setValue(`body.options.${idx}.points`, e.target.value)
                  }
                />
                <RichTextEditor />
              </section>
            </div>
          ))}

          <Button
            type="button"
            className="ml-auto"
            onClick={() => append(createMCSSMCOption())}
          >
            <Plus />
            <span>Add Option</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
