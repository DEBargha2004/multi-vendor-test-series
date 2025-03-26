import ExamSidebar from "@/components/custom/exam/exam-sidebar";
import QuestionContainer from "@/components/custom/exam/question-container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Sidebar } from "lucide-react";

const sections = [
  "Quantitative Aptitude",
  "Reasoning",
  "Verbal Ability",
  "General Awareness",
];

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center items-start gap-16 @container">
      <section
        className={cn(
          "@7xl:w-[1100px] @5xl:w-[850px] @3xl:w-[600px] w-full h-full overflow-y-scroll scroller-hide",
          "flex flex-col justify-start items-start gap-5 @3xl:pt-10 pt-5 px-3"
        )}
      >
        <div className="w-full @3xl:hidden flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button size={"icon"} variant={"outline"}>
                <Sidebar />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0 w-[300px]">
              <SheetHeader className="hidden">
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <ExamSidebar />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex flex-wrap gap-2">
          {sections.map((section, idx) => (
            <Button key={section} variant={idx === 2 ? "secondary" : "outline"}>
              {section}
            </Button>
          ))}
        </div>

        <QuestionContainer />
        {/* <div className="h-[1000px] shrink-0" /> */}
        <div
          className={cn(
            "w-full p-4 rounded-t-lg border border-b-0 mt-auto bg-background",
            "flex justify-start items-center gap-4",
            "sticky bottom-0"
          )}
        >
          <Button variant={"outline"}>Mark for review</Button>
          <Button variant={"secondary"}>Clear Response</Button>
          <Button className="ml-auto">Save & Next</Button>
        </div>
      </section>

      <section className="w-[300px] h-full shrink-0 hidden @3xl:block">
        <ExamSidebar />
      </section>
    </div>
  );
}
