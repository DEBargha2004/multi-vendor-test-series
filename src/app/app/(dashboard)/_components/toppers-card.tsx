import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Medal, Trophy } from "lucide-react";
import { className as classNameVars } from "@/constants/className";

const className = {
  gold: "text-amber-300",
  silver: "text-slate-300",
  bronze: "text-amber-600",
};

const ranks = Object.keys(className) as Array<keyof typeof className>;

export default function ToppersCard() {
  const rank = ranks[Math.floor(Math.random() * ranks.length)];
  return (
    <div
      className={cn(
        "p-2",
        "flex items-start justify-start gap-2",
        classNameVars.dashboardCardBorder
      )}
    >
      <section className="relative">
        <Avatar className="shrink-0">
          <AvatarImage />
          <AvatarFallback>FD</AvatarFallback>
        </Avatar>
        <div
          className={cn(
            "absolute -bottom-2 -right-1",
            "grid place-content-center rounded-full h-5 w-5 bg-accent border border-accent-foreground/40",
            className[rank]
          )}
        >
          <Medal size={16} className="scale-80" />
        </div>
      </section>

      <section className="w-full">
        <h1 className="text-sm font-normal">John Doe</h1>
        <p className="text-xs text-muted-foreground">Javascript Fundamentals</p>
      </section>

      <section>
        <div
          className={cn(
            "flex items-center gap-1 text-xs py-0.5 px-1.5 rounded-full",
            "bg-green-500/10 text-green-500 border border-green-600/60"
          )}
        >
          <Trophy size={16} className="scale-[0.8]" /> <span>45/50</span>
        </div>
      </section>
    </div>
  );
}
