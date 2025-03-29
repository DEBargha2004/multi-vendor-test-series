"use client";

import { useQuestionEditor } from "@/hooks/use-question-editor";
import { TW2WCreateSchema } from "@/schema/questions/w2w";
import { EditorField, EditorItem, EditorLabel } from "../field";
import RichTextEditor from "@/components/custom/rich-test-editor";
import { Input } from "@/components/ui/input";

export default function W2WEditor({ id }: { id: string }) {
  const control = useQuestionEditor<TW2WCreateSchema>(id);

  return (
    <div className="space-y-6">
      <EditorField
        control={control}
        name="body.instruction"
        render={({ field }) => (
          <EditorItem>
            <EditorLabel>Instructions</EditorLabel>
            <RichTextEditor value={field.value} onChange={field.onChange} />
          </EditorItem>
        )}
      />
      <EditorField
        control={control}
        name="body.description"
        render={({ field }) => (
          <EditorItem>
            <EditorLabel>Description</EditorLabel>
            <RichTextEditor value={field.value} onChange={field.onChange} />
          </EditorItem>
        )}
      />
      <div className="grid @2xl:grid-cols-3 gap-3">
        <EditorField
          control={control}
          name="body.metadata.marks.correct"
          render={({ field }) => (
            <EditorItem>
              <EditorLabel>Positive Marks</EditorLabel>
              <Input
                type="number"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </EditorItem>
          )}
        />
        <EditorField
          control={control}
          name="body.metadata.marks.incorrect"
          render={({ field }) => (
            <EditorItem>
              <EditorLabel>Negative Marks</EditorLabel>
              <Input
                type="number"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </EditorItem>
          )}
        />
        <EditorField
          control={control}
          name="body.metadata.tags"
          render={({ field }) => (
            <EditorItem>
              <EditorLabel>Tags (Comma Separated)</EditorLabel>
              <Input
                placeholder="Cubic, Trigonometry"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </EditorItem>
          )}
        />
      </div>
      <EditorField
        control={control}
        name="results.answer"
        render={({ field }) => (
          <EditorItem>
            <EditorLabel>Answer</EditorLabel>
            <Input
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </EditorItem>
        )}
      />
    </div>
  );
}
