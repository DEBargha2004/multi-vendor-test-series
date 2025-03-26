import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { TTestPricing } from "@/schema/test";
import { useForm } from "react-hook-form";
import SubmitButton from "../submit-button";

export default function TestPricingForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<TTestPricing>>;
  onSubmit: (e: TTestPricing) => void;
}) {
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="isPaid"
          render={({ field }) => (
            <FormItem className="flex justify-start items-center gap-4">
              <FormLabel>is Paid?</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {form.watch("isPaid") && (
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input {...field} type="number" placeholder="0.00" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="allowed_attempts"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allowed Attempts</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton formState={form.formState}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
