import { deleteProduct } from "@/prisma-db";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export const EditProduct = async (Values: Product) => {
  const { id, title, price, description } = Values;
  const updatedProduct = await prisma.product.update({
    where: { id },
    data: { title, price, description },
  });
  return updatedProduct;
};

export const DeleteProduct = async (id: number) => {
  await deleteProduct(id);
  return { id };
};
