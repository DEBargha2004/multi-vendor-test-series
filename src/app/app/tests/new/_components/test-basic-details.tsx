import TestBasicDetailsForm from "@/components/custom/forms/test-basic-details";
import {
  testBasicDetails,
  TTestBasicDetails,
  testBasicDetailsDefaultValues,
} from "@/schema/test";
import { TImageData } from "@/types/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TestBasicDetails({
  setter,
}: {
  setter: (data: TTestBasicDetails) => void;
}) {
  const form = useForm<TTestBasicDetails>({
    resolver: zodResolver(testBasicDetails),
    defaultValues: testBasicDetailsDefaultValues(),
  });
  const [coverImg, setCoverImg] = useState<TImageData | undefined>();

  const onSubmit = async (data: TTestBasicDetails) => {
    setter(data);
  };

  const onImageChange = (image: TImageData | undefined) => {
    setCoverImg(image);
  };
  return (
    <TestBasicDetailsForm
      form={form}
      onSubmit={onSubmit}
      image={coverImg}
      onImageChange={onImageChange}
    />
  );
}
