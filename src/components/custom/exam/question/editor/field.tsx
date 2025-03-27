import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import React from "react";
import { ExtractZodType } from "@/types/extract-zod-type";
import { mcssmcCreateSchema } from "@/schema/questions/mc-ss-mc";
import {
  FieldPath,
  FieldValues,
  ControllerProps,
  ControllerRenderProps,
  PathValue,
  useForm,
} from "react-hook-form";
import {
  mcssscCreateSchema,
  TMCSSSCCreateSchema,
} from "@/schema/questions/mc-ss-sc";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/ui/form";

// export function EditorField({
//   children,
//   className,
//   ...props
// }: React.ComponentProps<"section">) {
//   return (
//     <section className={cn("space-y-2", className)} {...props}>
//       {children}
//     </section>
//   );
// }

type EditorFieldRenderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  value: ControllerRenderProps<TFieldValues, TName>["value"];
  onChange: ControllerRenderProps<TFieldValues, TName>["onChange"];
};
export function EditorField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  id,
  name,
  render: Render,
  setter,
}: {
  setter: (id: string, path: TName, value: any) => void;
  name: TName;
  id?: string;
  render: (props: {
    field: EditorFieldRenderProps<TFieldValues, TName>;
  }) => React.ReactNode;
}) {
  const onChange = (value: PathValue<TFieldValues, TName>) => {
    setter(id ?? "", name, value);
  };

  return <Render field={{ onChange, value: "" }} />;
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

function Test() {
  const form = useForm<TMCSSSCCreateSchema>({
    resolver: zodResolver(mcssscCreateSchema),
  });

  return (
    <FormField
      control={form.control}
      name="body"
      render={({ field }) => {
        field.va;
      }}
    />
  );
}
