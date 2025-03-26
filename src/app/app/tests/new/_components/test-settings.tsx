import TestSettingsForm from "@/components/custom/forms/test-settings";
import {
  testSettings,
  testSettingsDefaultValues,
  TTestSettings,
} from "@/schema/test";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function TestSettings({
  setter,
}: {
  setter: (data: TTestSettings) => void;
}) {
  const form = useForm<TTestSettings>({
    resolver: zodResolver(testSettings),
    defaultValues: testSettingsDefaultValues(),
  });

  const onSubmit = async (e: TTestSettings) => {
    setter(e);
  };

  return <TestSettingsForm form={form} onSubmit={onSubmit} />;
}
