"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { useSidebar } from "../ui/sidebar";
import { Button } from "../ui/button";
import { SidebarClose, SidebarOpen } from "lucide-react";
import SearchBar from "./search-bar";

export default function Navbar({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  const { toggleSidebar, open } = useSidebar();
  return (
    <nav
      className={cn(
        "p-3",
        "flex justify-between items-center gap-3 border-b-2 border-sidebar bg-background",
        className
      )}
      {...props}
    >
      <Button
        size={"icon"}
        onClick={toggleSidebar}
        className="size-8"
        variant={"secondary"}
      >
        {open ? <SidebarClose /> : <SidebarOpen />}
      </Button>
      <SearchBar className="mr-auto" />
      <ModeToggle />
    </nav>
  );
}
