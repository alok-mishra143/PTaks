import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import React from "react";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <h1>This is Prodcut Page</h1>
      <Suspense fallback={<div>Loading Product page ...</div>}>
        <Products />
      </Suspense>
      <Suspense fallback={<div>Loading Reviews page ...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default Page;
