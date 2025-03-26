import { className } from "@/constants/className";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/utils/format";

export default function PurchaseCard() {
  return (
    <div className={cn("flex flex-col p-2", className.dashboardCardBorder)}>
      <section className="flex items-center justify-between">
        <h1 className="font-normal text-sm">Javascript Basics</h1>
        <h2 className="font-semibold text-sm">₹ {formatNumber(1000)}</h2>
      </section>
      <section>
        <p className="text-xs text-muted-foreground mt-1">
          John Doe - 3 days ago
        </p>
      </section>
    </div>
  );
}
