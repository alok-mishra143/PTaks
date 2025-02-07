import React from "react";

const Products = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Products</div>;
};

export default Products;
