import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { className } from "@/constants/className";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import { DashboardCardIconWrapper } from "../_components/dashboard-items";
import { Button } from "@/components/ui/button";
import TestCard from "../_components/test-card";

export default function Page() {
  return (
    <Card className={cn("h-full", className.dashboardCardBg)}>
      <CardHeader className={cn("", className.dashboardCardHeader)}>
        <CardTitle>Recent Tests</CardTitle>
        <DashboardCardIconWrapper>
          <BookOpen size={16} />
        </DashboardCardIconWrapper>
      </CardHeader>
      <CardContent className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <TestCard key={index} />
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
