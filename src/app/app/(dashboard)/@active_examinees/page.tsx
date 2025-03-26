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
import { UserRound } from "lucide-react";
import {
  DashboardCardIconWrapper,
  DashboardCardTextWrapper,
} from "../_components/dashboard-items";
import { formatNumber } from "@/utils/format";

export default function Page() {
  return (
    <Card className={cn("", className.dashboardCardBg)}>
      <CardHeader className={cn("", className.dashboardCardHeader)}>
        <CardTitle>Active Examinees</CardTitle>
        <DashboardCardIconWrapper>
          <UserRound size={16} />
        </DashboardCardIconWrapper>
      </CardHeader>
      <CardContent>
        <DashboardCardTextWrapper>{formatNumber(10)}</DashboardCardTextWrapper>
      </CardContent>
      <CardFooter className="mt-2">
        <CardDescription className={className.dashboardCardFooterDescription}>
          <span>
            <b>20</b> Recent submissions
          </span>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
