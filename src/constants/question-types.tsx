import MCMSEditor from "@/components/custom/exam/question/editor/(types)/mc-ms";
import MCSSMCEditor from "@/components/custom/exam/question/editor/(types)/mc-ss-mc";
import MCSSSCEditor from "@/components/custom/exam/question/editor/(types)/mc-ss-sc";
import W2WEditor from "@/components/custom/exam/question/editor/(types)/w2w";
import MCMS from "@/components/custom/exam/question/preview/(types)/mc-ms";
import MCSS from "@/components/custom/exam/question/preview/(types)/mc-ss";
import W2W from "@/components/custom/exam/question/preview/(types)/w2w";
import {
  mcssscCreateSchema,
  TMCSSSCCreateSchema,
} from "@/schema/questions/mc-ss-sc";
import { ExtractZodType } from "@/types/extract-zod-type";
import React from "react";
import { FieldPath, FieldValues, PathValue } from "react-hook-form";

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
    handlers: Record<string, any>;
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
      handlers: {},
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
      handlers: {},
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
        return <MCMSEditor id={id} />;
      },
      handlers: {},
    },
    preview: {
      Render({ id }) {
        return <MCMS />;
      },
      handlers: {},
    },
  },
  {
    value: "w2w",
    label: "Word to Word Matching",
    shortLabel: "Word Matching",
    editor: {
      handlers: {},
      Render({ id }) {
        return <W2WEditor id={id} />;
      },
    },
    preview: {
      handlers: {},
      Render({ id }) {
        return <W2W />;
      },
    },
  },
  {
    value: "boolean",
    label: "Boolean",
    shortLabel: "True/False",
    editor: {
      handlers: {},
      Render({ id }) {
        return <div></div>;
      },
    },
    preview: {
      handlers: {},
      Render({ id }) {
        return <div></div>;
      },
    },
  },
  {
    value: "fitb",
    label: "Fill in the blanks",
    shortLabel: "Fill in the blanks",
    editor: {
      handlers: {},
      Render({ id }) {
        return <div></div>;
      },
    },
    preview: {
      handlers: {},
      Render({ id }) {
        return <div></div>;
      },
    },
  },
] as const satisfies TQuestionEntity[];

const t = questionTypes[0];
