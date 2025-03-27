import MCSSMCEditor from "@/components/custom/exam/question/editor/(types)/mc-ss-mc";
import MCSSSCEditor from "@/components/custom/exam/question/editor/(types)/mc-ss-sc";
import MCMS from "@/components/custom/exam/question/preview/mc-ms";
import MCSS from "@/components/custom/exam/question/preview/mc-ss";
import { mcssscCreateSchema } from "@/schema/questions/mc-ss-sc";
import { ExtractZodType } from "@/types/extract-zod-type";
import React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

export type QuestionTypes =
  | "mc_ss_sc"
  | "mc_ss_mc"
  | "mc_ms"
  | "boolean"
  | "w2w"
  | "fitb"
  | "la"
  | "mtf";

type TQuestionEntity = {
  value: QuestionTypes;
  label: string;
  shortLabel?: string;
  editor: {
    handlers: () => Record<string, any>;
    Render: React.FC<{ id: string }>;
  };
  preview: {
    handlers: Record<string, any>;
    Render: React.FC<{ id: string }>;
  };
};

export const questionTypes = [
  {
    value: "mc_ss_sc",
    label: "Multiple Choice Single Select Single Correct",
    shortLabel: "MCQ (Single Correct)",
    editor: {
      Render({ id }) {
        return <MCSSSCEditor id={id} />;
      },
      handlers<T extends FieldValues>() {
        return {
          setter(id: string, path: FieldPath<T>, value: any) {},
        };
      },
    },
    preview: {
      Render({ id }) {
        return <MCSS />;
      },
      handlers: {},
    },
  },
  {
    value: "mc_ss_mc",
    label: "Multiple Choice Single Select Multiple Correct",
    shortLabel: "MCQ (Multiple Correct)",
    editor: {
      Render({ id }) {
        return <MCSSMCEditor id={id} />;
      },
      handlers<T extends FieldValues>() {
        return {
          setter(id: string, path: FieldPath<T>, value: any) {},
        };
      },
    },
    preview: {
      Render({ id }) {
        return <MCSS />;
      },
      handlers: {},
    },
  },
  {
    value: "mc_ms",
    label: "Multiple Choice Multiple Select",
    shortLabel: "MCQ (Multiple Select)",
    editor: {
      Render({ id }) {
        return <div></div>;
      },
      handlers<T extends FieldValues>() {
        return {};
      },
    },
    preview: {
      Render({ id }) {
        return <MCMS />;
      },
      handlers: {},
    },
  },
] as const satisfies TQuestionEntity[];

const t = questionTypes[0];
