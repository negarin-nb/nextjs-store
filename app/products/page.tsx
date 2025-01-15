import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const { layout = "grid", search = "" } = await searchParams;
  //const layout = searchParams.layout || "grid";
  //const search = (await searchParams.search) || "";
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
