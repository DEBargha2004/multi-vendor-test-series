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
import { Dot, NotebookPen, Wallet } from "lucide-react";
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
        <CardTitle>Cashflow</CardTitle>
        <DashboardCardIconWrapper>
          <Wallet size={16} />
        </DashboardCardIconWrapper>
      </CardHeader>
      <CardContent>
        <DashboardCardTextWrapper>₹{formatNumber(26)}</DashboardCardTextWrapper>
      </CardContent>
      <CardFooter className="mt-2">
        <CardDescription
          className={cn(
            className.dashboardCardFooterDescription,
            "[&>*]:flex [&>*]:gap-1"
          )}
        >
          <div>
            <DashboardNumberHighlighter showSign={false}>
              ₹45
            </DashboardNumberHighlighter>
            <span>Credit</span>
          </div>
          <div>
            <DashboardNumberHighlighter showSign={false}>
              -₹19
            </DashboardNumberHighlighter>
            <span>Debit</span>
          </div>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
