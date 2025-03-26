import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { className } from "@/constants/className";
import { cn } from "@/lib/utils";
import { BadgeIndianRupee } from "lucide-react";
import { DashboardCardIconWrapper } from "../_components/dashboard-items";
import { Button } from "@/components/ui/button";
import PurchaseCard from "../_components/purchase-card";

export default function Page() {
  return (
    <Card className={cn("h-full", className.dashboardCardBg)}>
      <CardHeader className={cn("", className.dashboardCardHeader)}>
        <CardTitle>Recent Purchases</CardTitle>
        <DashboardCardIconWrapper>
          <BadgeIndianRupee size={16} />
        </DashboardCardIconWrapper>
      </CardHeader>
      <CardContent className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <PurchaseCard key={index} />
        ))}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button variant={"secondary"} className="w-full">
          View All
        </Button>
      </CardFooter>
    </Card>
  );
}
