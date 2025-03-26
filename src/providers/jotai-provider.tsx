"use client";

import { createStore, Provider } from "jotai";

export const jotaiStore = createStore();

export default function JotaiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={jotaiStore}>{children}</Provider>;
}
