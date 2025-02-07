import { getProducts } from "@/prisma-db";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function Products() {
  const products: Product[] = await getProducts();
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="bg-gray-900 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700">
              Price: <span className="font-bold">${product.price}</span>
            </p>
            {product.description && (
              <p className="mt-2 text-gray-600">{product.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
