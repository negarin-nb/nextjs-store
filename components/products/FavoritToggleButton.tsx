import React from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function FavoritToggleButton({
  productId,
}: {
  productId: string;
}) {
  console.log(productId);
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
