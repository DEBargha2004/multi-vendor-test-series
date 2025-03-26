import ExamList from "./_components/exam-list";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="@container p-4 space-y-4">
      <div className="flex justify-end">
        <Link href={"/app/tests/new"}>
          <Button>
            <Plus />
            <span>Create</span>
          </Button>
        </Link>
      </div>
      <div className="grid @7xl:grid-cols-4 @4xl:grid-cols-3 @xl:grid-cols-2 gap-4 ">
        <ExamList />
      </div>
    </div>
  );
}
