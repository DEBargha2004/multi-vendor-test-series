import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import React from "react";
import { Control, FieldPath, FieldValues, PathValue } from "react-hook-form";
import { EditorControl } from "@/hooks/use-question-editor";

type EditorFieldRenderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  value: PathValue<TFieldValues, TName>;
  onChange: (props: PathValue<TFieldValues, TName>) => void;
};

export function EditorField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  render: Render,
  control,
}: {
  name: TName;
  control: EditorControl<TFieldValues>;
  render: (props: {
    field: EditorFieldRenderProps<TFieldValues, TName>;
  }) => React.ReactNode;
}) {
  const onChange = (value: PathValue<TFieldValues, TName>) => {
    control.set(name, value);
  };

  return (
    <Render field={{ onChange, value: "" as PathValue<TFieldValues, TName> }} />
  );
}

export function EditorItem({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  );
}

export function EditorLabel({
  children,
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <Label className={cn("inline-block", className)} {...props}>
      {children}
    </Label>
  );
}
