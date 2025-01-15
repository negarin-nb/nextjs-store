import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

type SearchParams = Promise<{ layout?: string; search?: string }>;
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
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
