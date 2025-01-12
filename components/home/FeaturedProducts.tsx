import React from "react";
import SectionTitle from "../global/SectionTitle";
import { fetchFeaturedProducts } from "@/utils/action";
import ProductsGrid from "../products/ProductsGrid";
import EmptyList from "../global/EmptyList";

export default async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
}
