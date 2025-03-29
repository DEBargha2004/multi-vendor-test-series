import * as z from "zod";

export const mcmsCreateSchema = z.object({
  type: z.string().min(1),
  body: z.object({
    instruction: z.string().optional(),
    description: z.string().min(1),
    options: z
      .array(
        z.object({
          opid: z.string(),
          text: z.string().min(1),
        })
      )
      .min(2),
    metadata: z.object({
      tags: z.string().optional(),
      shuffle: z.boolean(),
      strategy: z.string(),
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
    correctOpId: z.array(z.string().min(1)),
  }),
});

export type TMCMSCreateSchema = z.infer<typeof mcmsCreateSchema>;
