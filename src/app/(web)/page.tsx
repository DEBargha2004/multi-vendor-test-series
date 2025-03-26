import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen grid place-content-center">
      <Link href={"/app"}>
        <Button>App</Button>
      </Link>
    </div>
  );
}
