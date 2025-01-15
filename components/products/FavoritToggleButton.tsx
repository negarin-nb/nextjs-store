import React from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";

export default function FavoritToggleButton({
  productId,
}: {
  productId: string;
}) {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
