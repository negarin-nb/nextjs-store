import React from "react";
import { FaStar } from "react-icons/fa";

export default function ProductRating({ productId }: { productId: string }) {
  const rating = 4.2;
  const count = 24;
  console.log(productId);

  return (
    <span className="flex gap-1 items-center">
      <FaStar className="h-3 w-3" />
      {rating} {`(${count}) reviews`}
    </span>
  );
}
