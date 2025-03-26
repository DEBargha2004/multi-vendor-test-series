"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSidebar } from "../ui/sidebar";

export default function NavigationHelper() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  useEffect(() => {
    if (isMobile) setOpenMobile(false);
  }, [pathname, isMobile, setOpenMobile]);

  return null;
}
