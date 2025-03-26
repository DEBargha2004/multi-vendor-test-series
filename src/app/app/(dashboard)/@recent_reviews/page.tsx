import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { className } from "@/constants/className";
import { cn } from "@/lib/utils";
import { BookOpen, Star } from "lucide-react";
import { DashboardCardIconWrapper } from "../_components/dashboard-items";
import { Button } from "@/components/ui/button";
import TestCard from "../_components/test-card";
import ReviewCard from "../_components/review-card";

export default function Page() {
  return (
    <Card className={cn("h-full", className.dashboardCardBg)}>
      <CardHeader className={cn("", className.dashboardCardHeader)}>
        <CardTitle>Recent Reviews</CardTitle>
        <DashboardCardIconWrapper>
          <Star size={16} />
        </DashboardCardIconWrapper>
      </CardHeader>
      <CardContent className="space-y-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <ReviewCard key={index} />
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
