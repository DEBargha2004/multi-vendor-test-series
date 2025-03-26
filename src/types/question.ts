import { TMCSSSCSchema } from "@/schema/questions/mc-ss-sc";

type TInstruction = {
  id: string;
  type: "text" | "image";
  value: string;
  meta?: Record<string, any>;
};

/**
 * @description Multiple Choice Single Selectable Single Correct
 */
export type MC_SS_SC = {
  type: "mc_ss_sc";
  body: TMCSSSCSchema;
  results: {
    score: {
      correct: { points: number };
      incorrect: { points: number };
      answer: string;
    };
  };
};

/**
 * @description Multiple Choice Single Selectable Multiple Correct
 */
export type MC_SS_MC = {
  type: "mc_ss_mc";
  body: {
    instructions?: TInstruction;
    description: TInstruction;
    options: { id: string; text: string }[];
  };
  results: {
    score: { id: string; points: number }[];
  };
};

/**
 * @description Multiple Choice Multiple Selectable
 */
export type MC_MS = {
  type: "mc_ms";
  body: {
    instructions?: TInstruction;
    description: TInstruction;
    options: { id: string; text: string }[];
  };
  results: {
    matchingStrategy: "partial" | "exact";
    score: {
      correct: { points: number };
      incorrect: { points: number };
    };
    answer: string[];
  };
};

/**
 * @description True or False
 */
export type Boolean = {
  type: "boolean";
  body: {
    instructions?: TInstruction;
    description: TInstruction;
  };
  results: {
    score: {
      correct: { points: number };
      incorrect: { points: number };
    };
    answer: string;
  };
};

/**
 * @description Word to Word Matching
 */
export type W2W = {
  type: "w2w";
  body: {
    instructions?: TInstruction;
    description: TInstruction;
  };
  results: {
    score: {
      correct: { points: number };
      incorrect: { points: number };
    };
    answer: string;
  };
};

/**
 * @description Fill in the Blanks
 */
export type FITB = {
  type: "fitb";
  body: {
    instructions?: TInstruction;
    description: (TInstruction | { type: "blank"; id: string })[];
  };
  results: {
    score: {
      correct: { points: number };
      incorrect: { points: number };
    };
    answers: { id: string; value: string }[];
  };
};

/**
 * @description Long Answer
 */
export type LA = {
  type: "la";
  body: {
    instructions?: TInstruction;
    description: TInstruction;
  };
  results: {
    score: {
      correct: { points: number };
      incorrect: { points: number };
    };
    answer: string;
  };
};

/**
 * @description Match the Following
 */
export type MTF = {
  type: "mtf";
  body: {
    instructions?: TInstruction;
    description: TInstruction;
    leftOptions: { id: string; text: string }[];
    rightOptions: { id: string; text: string }[];
  };
  results: {
    matchingStrategy: "partial" | "exact";
    score: { points: number };
    answer: { matches: [string, string][] };
  };
};

export type TQuestion =
  | MC_SS_SC
  | MC_SS_MC
  | MC_MS
  | Boolean
  | W2W
  | FITB
  | LA
  | MTF;
export type QuestionTypes =
  | "mc_ss_sc"
  | "mc_ss_mc"
  | "mc_ms"
  | "boolean"
  | "w2w"
  | "fitb"
  | "la"
  | "mtf";
