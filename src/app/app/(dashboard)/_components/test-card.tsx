import IconBadge from "@/components/custom/icon-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { className } from "@/constants/className";
import { cn } from "@/lib/utils";
import {
  BookCheck,
  BookLock,
  Clock,
  Dot,
  Globe,
  Languages,
  Target,
  Trophy,
} from "lucide-react";

const isPrivate = () => {
  return Math.random() > 0.5;
};

const isFree = () => {
  return Math.random() > 0.5;
};

export default function TestCard() {
  const is_private = isPrivate();
  const free = isFree();
  return (
    <div className={cn("p-2", className.dashboardCardBorder)}>
      <section className="flex justify-start items-center gap-2">
        <h1 className="font-normal text-sm">
          Introduction to Javascript Basics
        </h1>
        <section className="flex items-center gap-0.5 text-xs text-muted-foreground [&>*]:whitespace-nowrap">
          <Clock size={16} className="scale-[0.8]" />
          <span>1 hr</span>
          &nbsp;
          <Languages size={16} className="scale-[0.9]" />
          <span>English</span>
        </section>
        <div
          className={cn(
            "h-5 px-1.5 flex items-center justify-center rounded-full text-xs",
            free
              ? "bg-green-500/20 border border-green-600/60 text-green-500"
              : "bg-amber-500/20 border border-amber-600/60 text-amber-500",
            "ml-auto"
          )}
        >
          {free ? "Free" : <h1 className="font-semibold ml-auto">₹100</h1>}
        </div>

        <div
          className={cn(
            "size-4 rounded-full",
            is_private
              ? "bg-amber-300/10 text-amber-400"
              : "bg-sky-300/10 text-sky-400"
          )}
        >
          {is_private ? <BookLock size={16} /> : <Globe size={16} />}
        </div>
      </section>

      <section className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
        <IconBadge
          variant={"info"}
          icon={<BookCheck size={16} className="scale-[0.8]" />}
        >
          <span>25 Qs</span>
        </IconBadge>
        <IconBadge
          variant={"success"}
          icon={<Trophy size={16} className="scale-[0.8]" />}
        >
          <span>50</span>
        </IconBadge>
        <IconBadge
          variant={"warning"}
          icon={<Target size={16} className="scale-[0.8]" />}
        >
          <span>20</span>
        </IconBadge>
      </section>
    </div>
  );
}
