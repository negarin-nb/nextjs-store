import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="font-bold text-3xl capitalize max-w-2xl sm:text-5xl">
          we are changing the way peaple shop
        </h1>
        <p className="mt-8 max-w-xl leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et
          voluptas saepe in quae voluptate, laborum maiores possimus illum
          reprehenderit aut delectus veniam cum perferendis unde sint doloremque
          non nam.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
