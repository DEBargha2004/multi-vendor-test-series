import * as z from "zod";

export type ExtractZodType<T, P extends string = ""> = T extends z.ZodObject<
  infer S
>
  ? {
      [K in keyof S]: S[K] extends z.ZodObject<any>
        ? ExtractZodType<S[K], `${P}${K & string}.`> | `${P}${K & string}`
        : `${P}${K & string}`;
    }[keyof S]
  : never;
