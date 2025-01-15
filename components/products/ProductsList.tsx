import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@prisma/client";
import { Card, CardContent } from "../ui/card";
import { formatCurrency } from "@/utils/format";
import FavoritToggleButton from "./FavoritToggleButton";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="pt-12 grid gap-y-8">
      {products.map((product) => {
        const { name, company, price, image } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);
        return (
          <article key={productId} className="group relative">
            <Link href={`products/${productId}`}>
              <Card>
                <CardContent className="grid md:grid-cols-3 p-8 gap-y-8">
                  <div className="relative h-64 md:h-48 md:w-48 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg capitalize">{name}</h2>
                    <h4>{company}</h4>
                  </div>
                  <p className="text-muted-foreground text-right">
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 right-8 z-5">
              <FavoritToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
