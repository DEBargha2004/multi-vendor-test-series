import MainSidebar from "@/components/custom/main-sidebar";
import Navbar from "@/components/custom/navbar";
import NavigationHelper from "@/components/custom/navigation-helper";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className="w-full flex h-fit bg-sidebar">
        <MainSidebar />
        <div className="h-dvh w-full p-2">
          <div className="rounded-2xl h-full bg-background flex flex-col">
            <Navbar className="shrink-0 rounded-t-2xl" />
            <div className="h-full overflow-y-scroll scroller-hide">
              {children}
            </div>
          </div>
        </div>
      </main>
      <NavigationHelper />
    </SidebarProvider>
  );
}
