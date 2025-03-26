import { Separator } from "@/components/ui/separator";
import SectionEditor from "./section-editor";
import QuestionEditor from "./question-editor";

export default function EditorGroup() {
  return (
    <div className="flex flex-col gap-5 h-full overflow-y-auto">
      <SectionEditor />
      <Separator />
      <QuestionEditor />
    </div>
  );
}
