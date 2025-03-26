import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories, languages, testDifficulty } from "@/constants/test.utils";
import { TTestBasicDetails } from "@/schema/test";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Trash2, Upload } from "lucide-react";
import SubmitButton from "../submit-button";
import { useDropzone } from "react-dropzone";
import { TImageData } from "@/types/image";

export default function TestBasicDetailsForm({
  form,
  onSubmit,
  image,
  onImageChange,
}: {
  form: ReturnType<typeof useForm<TTestBasicDetails>>;
  onSubmit: (data: TTestBasicDetails) => void;
  image?: TImageData;
  onImageChange?: (image?: TImageData) => void;
}) {
  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop(acceptedFiles, fileRejections, event) {
      const file = acceptedFiles[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange?.({
          dataUrl: reader.result as string,
          meta: {
            name: file.name,
            size: file.size,
            type: file.type,
          },
        });
      };

      reader.readAsDataURL(file);
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="resize-none"
                  //@ts-ignore
                  style={{ fieldSizing: "content" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((ln) => (
                      <SelectItem key={ln.value} value={ln.value}>
                        {ln.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <div className="w-full relative border h-9 rounded-lg">
                  <input {...getInputProps()} />
                  <p>{image?.meta.name}</p>
                  <Button
                    variant={field.value ? "destructive" : "secondary"}
                    size={"icon"}
                    type="button"
                    className="h-7 w-7 absolute right-1 top-1/2 -translate-y-1/2"
                    {...(field.value
                      ? { onClick: () => onImageChange?.() }
                      : getRootProps())}
                  >
                    {field.value ? <Trash2 /> : <Upload />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton formState={form.formState}>Save</SubmitButton>
      </form>
    </Form>
  );
}
