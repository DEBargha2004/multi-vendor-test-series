import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { className } from "@/constants/className";
import { cn } from "@/lib/utils";
import { BookOpenCheck } from "lucide-react";
import { DashboardCardIconWrapper } from "../_components/dashboard-items";
import { Button } from "@/components/ui/button";
import SubmissionCard from "../_components/submission-card";

export default function Page() {
  return (
    <Card className={cn("h-full", className.dashboardCardBg)}>
      <CardHeader className={cn("", className.dashboardCardHeader)}>
        <CardTitle>Recent Submissions</CardTitle>
        <DashboardCardIconWrapper>
          <BookOpenCheck size={16} />
        </DashboardCardIconWrapper>
      </CardHeader>
      <CardContent className="space-y-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <SubmissionCard key={index} />
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
