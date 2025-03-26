import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  ArrowRight,
  BookCheck,
  Calendar,
  ClipboardCheck,
  Clock,
  Languages,
  MoreVertical,
  Pencil,
  Target,
  Trash2,
  Trophy,
} from "lucide-react";
import IconBadge from "./icon-badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export default function ExamCard() {
  return (
    <div className="w-full rounded-lg overflow-hidden border">
      <section className="w-full aspect-video bg-accent/30 border-b"></section>
      <section className="p-2 space-y-3.5">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Introduction to Javascript</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="rounded-full cursor-pointer size-8"
              >
                <MoreVertical size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <ClipboardCheck />
                <span>Copy Link</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pencil />
                <span>Edit Test</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:bg-destructive focus:text-white focus:[&>svg]:text-white">
                <Trash2 />
                <span>Delete Test</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          assumenda fugit id maxime, explicabo nam iure veritatis
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <p
              key={index}
              className={cn(
                "shrink-0 rounded-full text-xs cursor-pointer",
                "px-2 py-1",
                "bg-blue-500/30 hover:bg-blue-500/35 dark:hover:bg-blue-500/50 border border-blue-500 text-foreground"
              )}
            >
              sample
            </p>
          ))}
        </div>
        <div
          className={cn(
            "flex justify-start items-center gap-1",
            "text-xs text-muted-foreground"
          )}
        >
          <IconBadge
            variant={"info"}
            icon={<Clock size={16} className="scale-[0.8]" />}
          >
            <span>1 hr</span>
          </IconBadge>
          &nbsp;
          <IconBadge
            variant={"info"}
            icon={<Languages size={16} className="scale-[0.9]" />}
          >
            <span>English</span>
            <span>Hindi</span>
          </IconBadge>
        </div>
        <div
          className={cn(
            "flex justify-start items-center gap-2",
            "text-xs text-muted-foreground"
          )}
        >
          <IconBadge
            variant={"info"}
            icon={<BookCheck size={16} className="scale-[0.8]" />}
          >
            <span>32 Qs</span>
          </IconBadge>
          <IconBadge
            variant={"success"}
            icon={<Trophy size={16} className="scale-[0.8]" />}
          >
            <span>40</span>
          </IconBadge>
          <IconBadge
            variant={"warning"}
            icon={<Target size={16} className="scale-[0.8]" />}
          >
            <span>20</span>
          </IconBadge>
        </div>

        <div
          className={cn(
            "flex justify-between items-center gap-0.5",
            "text-sm text-foreground/75"
          )}
        >
          <IconBadge
            variant={"default"}
            icon={<Calendar size={16} className="scale-[0.8]" />}
          >
            <span>13/11/2024</span>
          </IconBadge>
          <Link href={"/app/tests/123"}>
            <Button
              className="h-8 text-xs cursor-pointer"
              variant={"secondary"}
            >
              <span>Preview</span>
              <ArrowRight size={16} className="scale-[0.8]" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
