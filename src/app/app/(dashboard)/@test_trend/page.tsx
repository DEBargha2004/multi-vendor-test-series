import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { className } from "@/constants/className";
import { cn } from "@/lib/utils";
import { ChartLine, NotebookPen } from "lucide-react";
import {
  DashboardCardIconWrapper,
  DashboardCardTextWrapper,
  DashboardNumberHighlighter,
} from "../_components/dashboard-items";
import { formatNumber } from "@/utils/format";
import TestOverviewGraph from "../_components/test-overview-graph";

export default function Page() {
  return (
    <Card className={cn("h-full", className.dashboardCardBg)}>
      <CardHeader className={cn("", className.dashboardCardHeader)}>
        <CardTitle>Test Overview</CardTitle>
        <DashboardCardIconWrapper>
          <ChartLine size={16} />
        </DashboardCardIconWrapper>
      </CardHeader>
      <CardContent>
        <TestOverviewGraph />
      </CardContent>
    </Card>
  );
}
