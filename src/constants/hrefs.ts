import { BookOpen, LayoutDashboard, Settings } from "lucide-react";
import { IconType } from "react-icons";
import micromatch from "micromatch";

type TSidebarItem = {
  href: string;
  label: string;
  icon: IconType;
  pattern?: string | string[];
  isActive: (path: string) => boolean;
};

export const sidebarItems: TSidebarItem[] = [
  {
    href: "/app",
    label: "Dashboard",
    icon: LayoutDashboard,
    isActive(path) {
      return path === this.href;
    },
  },
  {
    href: "/app/tests",
    label: "Tests",
    icon: BookOpen,
    pattern: "/app/tests/**",
    isActive(path) {
      return micromatch.isMatch(path, this.pattern!);
    },
  },
  {
    href: "/app/settings",
    label: "Settings",
    icon: Settings,
    isActive(path) {
      return path === this.href;
    },
  },
];
