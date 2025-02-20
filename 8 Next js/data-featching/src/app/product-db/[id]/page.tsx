import { getProduct } from "@/prisma-db";
import EditForm from "./ProductEditForm";

export default async function CreateProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <EditForm product={product} />;
}
