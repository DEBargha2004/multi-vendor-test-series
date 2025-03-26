import { visibilityOptions } from "@/constants/test.utils";
import * as z from "zod";

export const testBasicDetails = z.object({
  title: z.string().min(1),
  description: z.string(),
  category: z.string().min(1),
  tags: z.array(z.string()),
  language: z.string().min(1),
  image: z.string().optional(),
});

export const testSettings = z
  .object({
    duration: z
      .string()
      .refine((val) => !Number.isNaN(Number(val)), {
        message: "Please enter a valid number",
      })
      .refine((val) => Number(val) > 0, {
        message: "Please enter a number greater than 0",
      }),
    total_marks: z
      .string()
      .refine((val) => !Number.isNaN(Number(val)), {
        message: "Please enter a valid number",
      })
      .refine((val) => Number(val) > 0, {
        message: "Please enter a number greater than 0",
      }),
    passing_marks: z
      .string()
      .refine((val) => !Number.isNaN(Number(val)), {
        message: "Please enter a valid number",
      })
      .refine((val) => Number(val) > 0, {
        message: "Please enter a number greater than 0",
      }),
    visibility: z.string(),
  })
  .superRefine(({ total_marks, passing_marks }, ctx) => {
    if (Number(passing_marks) > Number(total_marks)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passing marks cannot be greater than total marks",
        path: ["passing_marks"],
      });
    }
  });

export const testPricing = z
  .object({
    isPaid: z.boolean(),
    price: z.string().refine((val) => !Number.isNaN(Number(val)), {
      message: "Please enter a valid number",
    }),
    allowed_attempts: z
      .string()
      .refine((val) => !Number.isNaN(Number(val)), {
        message: "Please enter a valid number",
      })
      .refine((val) => Number(val) > 0, {
        message: "Please enter a number greater than 0",
      }),
  })
  .superRefine(({ isPaid, price }, ctx) => {
    if (isPaid && Number(price) === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter a valid price",
        path: ["price"],
      });
    }
  });

export const testSequenceSchema = z.object({
  randomize_questions: z.boolean(),
  randomize_options: z.boolean(),
  randomize_question_groups: z.boolean(),
});

export const mergedTestSchema = z
  .object({})
  .merge(testBasicDetails)
  .merge(testSettings._def.schema)
  .merge(testPricing._def.schema)
  .merge(testSequenceSchema)
  .superRefine((data, ctx) => {
    testBasicDetails
      .parseAsync(data)
      .catch((err) => ctx.addIssue(err.issues[0]));
    testSettings.parseAsync(data).catch((err) => ctx.addIssue(err.issues[0]));
    testPricing.parseAsync(data).catch((err) => ctx.addIssue(err.issues[0]));
    testSequenceSchema
      .parseAsync(data)
      .catch((err) => ctx.addIssue(err.issues[0]));
  });

export type TTestBasicDetails = z.infer<typeof testBasicDetails>;
export type TTestSettings = z.infer<typeof testSettings>;
export type TTestPricing = z.infer<typeof testPricing>;
export type TTestSequence = z.infer<typeof testSequenceSchema>;
export type TMergedTest = z.infer<typeof mergedTestSchema>;

export const testBasicDetailsDefaultValues = (): TTestBasicDetails => ({
  title: "",
  description: "",
  category: "",
  tags: [],
  language: "en",
  image: "",
});

export const testSettingsDefaultValues = (): TTestSettings => ({
  duration: "",
  total_marks: "",
  passing_marks: "",
  visibility: visibilityOptions[0].value,
});

export const testPricingDefaultValues = (): TTestPricing => ({
  isPaid: false,
  price: "",
  allowed_attempts: "",
});

export const testSequenceDefaultValues = (): TTestSequence => ({
  randomize_questions: false,
  randomize_options: false,
  randomize_question_groups: false,
});

export const mergedTestDefaultValues = (): TMergedTest => ({
  ...testBasicDetailsDefaultValues(),
  ...testSettingsDefaultValues(),
  ...testPricingDefaultValues(),
  ...testSequenceDefaultValues(),
});
