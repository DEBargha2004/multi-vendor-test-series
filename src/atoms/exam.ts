import { TSectionSchema } from "@/schema/section";
import { atom } from "jotai";

export const sectionOrderAtom = atom<string[]>([]);
export const selectedSectionAtom = atom<TSectionSchema>();
export const sectionsAtom = atom<Record<string, TSectionSchema>>();

export const questionOrderAtom = atom([]);
export const selectedQuestionAtom = atom<string>();
export const questionsAtom = atom<Record<string, unknown>>();
