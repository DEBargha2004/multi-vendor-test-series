import * as z from "zod";

export const w2wCreateSchema = z.object({
  type: z.string().min(1),
  body: z.object({
    instruction: z.string().optional(),
    description: z.string().min(1),
    metadata: z.object({
      tags: z.string().optional(),
      marks: z.object({
        correct: z
          .string()
          .min(1)
          .refine((val) => !Number.isNaN(Number(val)), {
            message: "Please enter a valid number",
          }),
        incorrect: z
          .string()
          .optional()
          .refine((val) => !Number.isNaN(Number(val)), {
            message: "Please enter a valid number",
          }),
      }),
    }),
  }),
  results: z.object({
    answer: z.string().min(1),
  }),
});

export type TW2WCreateSchema = z.infer<typeof w2wCreateSchema>;
