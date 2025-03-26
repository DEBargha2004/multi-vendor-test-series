import { Button } from "../ui/button";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <Button
      variant={"secondary"}
      size={"icon"}
      className="h-7 text-muted-foreground text-xs bg-accent/80"
    >
      {children}
    </Button>
  );
}
