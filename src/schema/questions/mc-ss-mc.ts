import { QuestionTypes } from "@/constants/question-types";
import { nanoid } from "nanoid";
import * as z from "zod";

export const mcssmcCreateSchema = z.object({
  type: z.string(),
  body: z.object({
    instruction: z.string().optional(),
    description: z.string().min(1),
    options: z
      .array(
        z.object({
          opid: z.string(),
          text: z.string().min(1),
          points: z.string().refine((val) => !Number.isNaN(Number(val)), {
            message: "Please enter a valid number",
          }),
        })
      )
      .min(2),
    metadata: z.object({
      tags: z.string().optional(),
      shuffle: z.boolean(),
    }),
  }),
  // results: z.object({
  //   points: z.array(
  //     z.object({
  //       opid: z.string(),
  //       value: z.string(),
  //     })
  //   ),
  // }),
});

export type TMCSSMCCreateSchema = z.infer<typeof mcssmcCreateSchema>;
export const defaultValues = (): TMCSSMCCreateSchema => ({
  type: "mc_ss_mc" as QuestionTypes,
  body: {
    instruction: "",
    description: "",
    options: [createMCSSMCOption(), createMCSSMCOption()],
    metadata: {
      tags: "",
      shuffle: false,
    },
  },
  // results: {
  //   points: [],
  // },
});

export const createMCSSMCOption =
  (): TMCSSMCCreateSchema["body"]["options"][number] => ({
    opid: nanoid(),
    text: "",
    points: "",
  });
