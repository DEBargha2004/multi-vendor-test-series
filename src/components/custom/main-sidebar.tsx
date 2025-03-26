"use client";

import { sidebarItems } from "@/constants/hrefs";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "./app-logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";

export default function MainSidebar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  return (
    <Sidebar className="border-r-transparent" collapsible="icon">
      <SidebarHeader>
        <Link href={"/app"}>
          <SidebarMenuButton className="text-foreground group-data-[collapsible=icon]:px-1! px-1">
            <AppLogo className="size-6" />
            <span>Skrew Mania</span>
          </SidebarMenuButton>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((si, idx) => (
                <Link key={idx} href={si.href}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="text-muted-foreground"
                      isActive={si.isActive(pathname)}
                    >
                      <si.icon />
                      <span>{si.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="group-data-[collapsible=icon]:px-1! px-1">
                  <div className="w-full flex items-center gap-2">
                    <AppLogo className="size-6" />
                    <span className="whitespace-nowrap">Debargha Saha</span>
                  </div>
                  <ChevronsUpDown />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[var(--radix-dropdown-menu-trigger-width)]"
              ></DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
