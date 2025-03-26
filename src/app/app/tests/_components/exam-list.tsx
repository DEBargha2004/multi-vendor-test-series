"use client";

import ExamCard from "@/components/custom/exam-card";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export default function ExamList() {
  const [exams, setExams] = useState(Array.from({ length: 10 }));
  const [query] = useQueryState("q");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      setExams(Array.from({ length: Math.floor(Math.random() * 20) }));
    } else {
      setExams(Array.from({ length: 10 }));
    }
  }, [debouncedQuery]);
  return exams.map((_, index) => <ExamCard key={index} />);
}
