import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export default function SubmitButton({
  children = "Submit",
  formState,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  formState: ReturnType<typeof useForm>["formState"];
}) {
  return (
    <Button
      className={cn(
        "w-full cursor-pointer",
        formState.disabled && "cursor-not-allowed",
        formState.isSubmitting && "cursor-progress",
        className
      )}
      type="submit"
      disabled={formState.disabled || formState.isSubmitting}
      {...props}
    >
      {formState.isSubmitting ? (
        <Loader2 className="animate-spin" />
      ) : (
        <span>{children}</span>
      )}
    </Button>
  );
}
