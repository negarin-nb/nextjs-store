import FavoritToggleButton from "@/components/products/FavoritToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchSingleProduct } from "@/utils/action";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import React from "react";

type Params = Promise<{ id: string }>;

export default async function SingleProductPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const product = await fetchSingleProduct(id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="grid gap-x-8 lg:grid-cols-2 lg:gap-x-16 mt-8">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            fill
            src={image}
            alt={name}
            priority
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* CONTENT SECOND COL */}
        <div>
          <div className="flex gap-x-4">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoritToggleButton productId={id} />
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="text-md p-2 bg-muted inline-block mt-3">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}
