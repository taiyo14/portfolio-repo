import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function LayoutContainer({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return <div className={cn("mx-auto max-w-2xl", className)}>{children}</div>;
}
