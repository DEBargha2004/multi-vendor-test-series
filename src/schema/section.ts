import * as z from "zod";

export const sectionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  description: z.string().optional(),
});

export type TSectionSchema = z.infer<typeof sectionSchema>;
