import React from "react";
import { Button } from "../ui/button";

export default function AddToCart({ productId }: { productId: string }) {
  console.log(productId);
  return (
    <Button className="capitalize mt-8" size="lg">
      AddToCart
    </Button>
  );
}
