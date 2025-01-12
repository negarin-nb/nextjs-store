import React from "react";
import { Separator } from "../ui/separator";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="mb-8 capitalize text-3xl">{text}</h2>
      <Separator />
    </div>
  );
}
