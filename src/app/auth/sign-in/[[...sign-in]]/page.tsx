"use client";

import { defaultValues, signInSchema, TSignIn } from "@/schema/sign-in";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignInForm from "@/components/custom/forms/sign-in";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const form = useForm<TSignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: defaultValues(),
  });

  const onSubmit = async (data: TSignIn) => {
    const res = await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    });
    console.log(res);
    toast(res.error ? res.error.message : "Login successful");
  };

  return (
    <Card className="min-w-[400px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm form={form} onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}
