import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TSignIn } from "@/schema/sign-in";
import { useForm } from "react-hook-form";
import IconInput from "../icon-input";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SubmitButton from "../submit-button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function SignInForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<TSignIn>>;
  onSubmit: (data: TSignIn) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <IconInput
                  {...field}
                  type={showPassword ? "text" : "password"}
                  SuffixIcon={
                    <Button
                      size={"icon"}
                      onClick={() => setShowPassword((prev) => !prev)}
                      variant={"ghost"}
                      type="button"
                    >
                      {showPassword ? <Eye /> : <EyeClosed />}
                    </Button>
                  }
                />
              </FormControl>
              <Link
                href={"/auth/forgot-password"}
                className="text-right text-sm"
              >
                <span className="text-foreground underline">
                  Forgot password?
                </span>
              </Link>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="space-y-0 flex justify-start items-center gap-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Remember me</FormLabel>
            </FormItem>
          )}
        />
        <SubmitButton formState={form.formState}>Sign In</SubmitButton>
        <Link href={"/auth/sign-up"} className="text-sm">
          <span className="text-foreground underline">
            Dont have an account?
          </span>
        </Link>
      </form>
    </Form>
  );
}
