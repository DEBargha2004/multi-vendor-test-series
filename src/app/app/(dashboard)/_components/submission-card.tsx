import IconBadge from "@/components/custom/icon-badge";
import { Button } from "@/components/ui/button";
import { className } from "@/constants/className";
import { cn } from "@/lib/utils";
import { CircleCheck, Clock, Dot, Trophy } from "lucide-react";

const isPending = () => {
  return Math.random() > 0.5;
};

export default function SubmissionCard() {
  const pending = isPending();
  return (
    <div className={cn("flex flex-col p-2", className.dashboardCardBorder)}>
      <section className="flex justify-between">
        <h1 className="font-normal text-sm">Javascript Basics</h1>
        <div
          className={cn(
            "rounded-full size-4 [&_svg]:size-4",
            pending
              ? "bg-yellow-300/10 text-yellow-500"
              : "bg-green-300/10 text-green-500"
          )}
        >
          {pending ? <Clock /> : <CircleCheck />}
        </div>
      </section>
      <section className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
        <h2 className="max-w-[140px] truncate">John Doe</h2>
        <span>-</span>
        <p>Today, 2:30 PM</p>
      </section>
      <section className="flex items-center gap-2 text-[11px] text-muted-foreground mt-2.5">
        <IconBadge
          variant={pending ? "default" : "success"}
          icon={<Trophy size={16} className="scale-[0.8]" />}
        >
          <i>{pending ? "--" : 34}</i>
        </IconBadge>
        <IconBadge icon={<Clock size={16} className="scale-[0.8]" />}>
          <i>34 mins</i>
        </IconBadge>
      </section>
    </div>
  );
}
