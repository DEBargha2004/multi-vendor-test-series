import { className } from "@/constants/className";
import { cn } from "@/lib/utils";

export default function ReviewCard() {
  return (
    <div className={cn("p-2", className.dashboardCardBorder)}>
      <h1 className="text-base font-semibold">Javascript Basics</h1>
      <h2 className="text-sm font-normal mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis
        magni veniam! Repudiandae
      </h2>
      <p className="text-xs text-muted-foreground mt-2">
        John Doe - 3 days ago
      </p>
    </div>
  );
}
