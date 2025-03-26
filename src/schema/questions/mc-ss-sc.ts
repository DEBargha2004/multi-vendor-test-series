import * as z from "zod";
import { nanoid } from "nanoid";
import { QuestionTypes } from "@/constants/question-types";

export const mcssscCreateSchema = z.object({
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
    correctOpId: z.string().min(1),
  }),
});

export type TMCSSSCCreateSchema = z.infer<typeof mcssscCreateSchema>;
export const defaultValues = (): TMCSSSCCreateSchema => ({
  type: "mc_ss_sc" as QuestionTypes,
  body: {
    instruction: "",
    description: "",
    options: [createMCSSSCOption(), createMCSSSCOption()],
    metadata: {
      tags: "",
      shuffle: false,
      marks: {
        correct: "",
        incorrect: "0",
      },
    },
  },
  results: {
    correctOpId: "",
  },
});

export const createMCSSSCOption =
  (): TMCSSSCCreateSchema["body"]["options"][number] => ({
    opid: nanoid(),
    text: "",
  });
