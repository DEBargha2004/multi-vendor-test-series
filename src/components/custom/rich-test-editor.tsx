import React, { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";

export default function RichTextEditor({
  onChange,
  value,
  placeholder,
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}) {
  const [localValue, setLocalValue] = useState(value);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value);
    setLocalValue(event.target.value);
  };

  useEffect(() => {
    value !== localValue && setLocalValue(value);
  }, [value, localValue]);
  return (
    <Textarea
      value={localValue}
      onChange={handleChange}
      style={{ fieldSizing: "content" } as React.CSSProperties}
      className="resize-none"
      placeholder={placeholder || "Type Something..."}
    />
  );
}
