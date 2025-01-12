import { cn } from "@/lib/utils";
import React from "react";

export default function EmptyList({
  heading = "No Items Found",
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return <h2 className={cn("text-lg", className)}>{heading}</h2>;
}
