import TestSequenceForm from "@/components/custom/forms/test-sequence";
import {
  testSequenceDefaultValues,
  testSequenceSchema,
  TTestSequence,
} from "@/schema/test";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function TestSequence({
  setter,
}: {
  setter: (data: TTestSequence) => void;
}) {
  const form = useForm<TTestSequence>({
    resolver: zodResolver(testSequenceSchema),
    defaultValues: testSequenceDefaultValues(),
  });

  const onSubmit = async (e: TTestSequence) => {
    setter(e);
  };

  return <TestSequenceForm form={form} onSubmit={onSubmit} />;
}
