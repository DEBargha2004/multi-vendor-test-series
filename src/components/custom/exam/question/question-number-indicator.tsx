import { attemptTypes } from "@/constants/attempt-types";

export default function QuestionNumberIndicator({
  number,
}: {
  number: number;
}) {
  const attempt = attemptTypes.find((a) => a.value === "answered")!;

  return <attempt.Render className="size-8">{number}</attempt.Render>;
}
