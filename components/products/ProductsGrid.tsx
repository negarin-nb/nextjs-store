import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";

export default function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);
        return (
          <article>
            <Link href={`product/${productId}`}>
              <Card>
                <CardContent>
                  <div>
                    <Image src={image} alt={name} />
                  </div>
                  <div>
                    <h2>{name}</h2>
                    <p>{dollarsAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
