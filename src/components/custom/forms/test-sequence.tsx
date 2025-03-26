import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { TTestSequence } from "@/schema/test";
import { useForm } from "react-hook-form";

export default function TestSequenceForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<TTestSequence>>;
  onSubmit: (e: TTestSequence) => void;
}) {
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="randomize_question_groups"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center gap-4">
              <FormLabel>Randomize Question Groups</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="randomize_options"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center gap-4">
              <FormLabel>Randomize Question</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="randomize_options"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center gap-4">
              <FormLabel>Randomize Options</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
