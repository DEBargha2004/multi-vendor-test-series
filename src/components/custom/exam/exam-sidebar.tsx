import { attemptTypes } from "@/constants/attempt-types";
import { cn } from "@/lib/utils";
import QuestionNumberIndicator from "./question/question-number-indicator";
import { Button } from "@/components/ui/button";

export default function ExamSidebar() {
  return (
    <aside
      className={cn(
        "border-x h-full bg-background",
        "flex flex-col",
        "overflow-y-scroll scroller-hide"
      )}
    >
      <section className="p-6 pt-8 grid grid-cols-2 gap-3 border-b shrink-0 sticky top-0 bg-background">
        {attemptTypes.map((type) => (
          <div
            key={type.value}
            className="flex justify-start items-center gap-3"
          >
            <type.Render />
            <p className="whitespace-nowrap text-sm">{type.label}</p>
          </div>
        ))}
      </section>
      <section className={cn("h-full  p-6", "flex flex-col gap-6")}>
        {Array.from({ length: 5 }).map((_, s_id) => (
          <div key={s_id}>
            <h1 className="font-semibold" key={s_id}>
              Quantitative Aptitude
            </h1>
            <p className="text-xs text-muted-foreground">Attempt all</p>
            <div className="mt-4 grid grid-cols-5 gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <QuestionNumberIndicator
                  key={index}
                  number={s_id * 10 + index + 1}
                />
              ))}
            </div>
          </div>
        ))}
        <Button>Submit Test</Button>
      </section>
    </aside>
  );
}
