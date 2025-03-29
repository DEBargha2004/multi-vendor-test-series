"use client";

import { FieldPath, FieldValues, PathValue } from "react-hook-form";

export type EditorControl<S extends FieldValues> = {
  set: <P extends FieldPath<S>>(path: P, value: PathValue<S, P>) => void;
  get: <P extends FieldPath<S>>(path: P) => PathValue<S, P>;
};

export const useQuestionEditor = <S extends FieldValues = FieldValues>(
  id: string
): EditorControl<S> => {
  return {
    set(path, value) {},
    get(path) {
      return "" as PathValue<S, typeof path>;
    },
  };
};
