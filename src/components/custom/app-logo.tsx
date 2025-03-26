import Image, { ImageProps } from "next/image";
import logo from "@/../public/logo.png";
import { cn } from "@/lib/utils";

export default function AppLogo({ className, ...props }: Partial<ImageProps>) {
  return (
    <Image
      src={logo}
      alt="logo"
      className={cn("shrink-0 ", className)}
      width={100}
      height={100}
      {...props}
    />
  );
}
