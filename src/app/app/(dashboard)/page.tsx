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
import { BookLock, BookOpen, BookOpenCheck, Dot, Globe } from "lucide-react";
import {
  DashboardCardIconWrapper,
  DashboardCardTextWrapper,
} from "./_components/dashboard-items";
import { formatNumber } from "@/utils/format";
import IconBadge from "@/components/custom/icon-badge";

export default function Page() {
  return (
    <Card className={cn("", className.dashboardCardBg)}>
      <CardHeader className={cn("", className.dashboardCardHeader)}>
        <CardTitle>Total Tests</CardTitle>
        <DashboardCardIconWrapper>
          <BookOpen size={16} />
        </DashboardCardIconWrapper>
      </CardHeader>
      <CardContent>
        <DashboardCardTextWrapper>{formatNumber(8)}</DashboardCardTextWrapper>
      </CardContent>
      <CardFooter className="mt-2">
        <CardDescription className="flex items-center gap-2 text-xs">
          <IconBadge icon={<Globe size={16} className="scale-[0.8]" />}>
            <span>8</span>
            <span>Public</span>
          </IconBadge>
          <IconBadge icon={<BookLock size={16} className="scale-[0.8]" />}>
            <span>4</span>
            <span>Private</span>
          </IconBadge>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
