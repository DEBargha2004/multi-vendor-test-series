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
import { ShoppingBag } from "lucide-react";
import {
  DashboardCardIconWrapper,
  DashboardCardTextWrapper,
  DashboardNumberHighlighter,
} from "../_components/dashboard-items";
import { formatNumber } from "@/utils/format";

export default function Page() {
  return (
    <Card className={cn("", className.dashboardCardBg)}>
      <CardHeader className={cn("", className.dashboardCardHeader)}>
        <CardTitle>Total Purchase</CardTitle>
        <DashboardCardIconWrapper>
          <ShoppingBag size={16} />
        </DashboardCardIconWrapper>
      </CardHeader>
      <CardContent>
        <DashboardCardTextWrapper>{formatNumber(10)}</DashboardCardTextWrapper>
      </CardContent>
      <CardFooter className="mt-2">
        <CardDescription className={className.dashboardCardFooterDescription}>
          <DashboardNumberHighlighter>-3.5%</DashboardNumberHighlighter>
          <span>Since last month</span>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
