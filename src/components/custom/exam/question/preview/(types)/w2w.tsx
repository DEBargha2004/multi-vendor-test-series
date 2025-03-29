import Tag from "@/components/custom/tag";
import QuestionPreviewHeader from "../question-preview-header";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function W2W() {
  return (
    <div className="space-y-5">
      <QuestionPreviewHeader qno={1}>
        <Tag>+4</Tag>
        <Tag>-1</Tag>
      </QuestionPreviewHeader>
      <section className="space-y-3 @container">
        <h2 className="text-sm">The cube root of 3375 is equal to</h2>
        <Input />
      </section>
    </div>
  );
}
