import * as z from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Password must contain at least 1 character(s)" }),
  rememberMe: z.boolean(),
});

export type TSignIn = z.infer<typeof signInSchema>;
export const defaultValues = (): TSignIn => ({
  email: "",
  password: "",
  rememberMe: false,
});
