"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useRef, useState } from "react";
import QuestionEditorSidebar from "./sidebar";
import { Sidebar } from "lucide-react";

export default function SectionEditor() {
  const [isSectionEditable, setIsSectionEditable] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsSectionEditable(true);
  };

  const handleBlur = () => {
    setIsSectionEditable(false);
  };

  useEffect(() => {
    isSectionEditable && inputRef.current?.focus();
  }, [isSectionEditable]);
  return (
    <>
      <div className="space-y-2 p-4">
        <div className="flex justify-between items-center gap-3">
          {isSectionEditable ? (
            <Input ref={inputRef} placeholder="Section 1" onBlur={handleBlur} />
          ) : (
            <Label className="h-9" onClick={handleFocus}>
              Section 1
            </Label>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size={"icon"}
                variant={"secondary"}
                className="size-8 @xl:hidden flex"
              >
                <Sidebar />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0">
              <SheetHeader className="hidden">
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <QuestionEditorSidebar />
            </SheetContent>
          </Sheet>
        </div>

        <Textarea
          className="resize-none"
          style={{ fieldSizing: "content" } as React.CSSProperties}
        />
      </div>
    </>
  );
}
