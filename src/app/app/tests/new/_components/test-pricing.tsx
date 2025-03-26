import TestPricingForm from "@/components/custom/forms/test-pricing";
import {
  testPricing,
  testPricingDefaultValues,
  TTestPricing,
} from "@/schema/test";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function TestPricing({
  setter,
}: {
  setter: (data: TTestPricing) => void;
}) {
  const form = useForm<TTestPricing>({
    resolver: zodResolver(testPricing),
    defaultValues: testPricingDefaultValues(),
  });

  const onSubmit = async (e: TTestPricing) => {
    setter(e);
  };

  return <TestPricingForm form={form} onSubmit={onSubmit} />;
}
