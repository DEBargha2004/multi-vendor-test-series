import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import React from "react";
import { ExtractZodType } from "@/types/extract-zod-type";
import { mcssmcCreateSchema } from "@/schema/questions/mc-ss-mc";

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

type EditorFieldRenderProps<T = string> = {
  value: string;
  onChange: (value: T) => void;
};
export function EditorField<T>({
  id,
  name,
  render: Render,
  setter,
}: {
  setter: (id: string, path: ExtractZodType<T>, value: any) => void;
  name: ExtractZodType<T>;
  id?: string;
  render: (props: { field: EditorFieldRenderProps }) => React.ReactNode;
}) {
  const onChange = (value: string) => {
    setter(id ?? "", name, value);
  };

  return <Render field={{ value: "", onChange }} />;
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
