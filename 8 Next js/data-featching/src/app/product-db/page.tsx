import { getProducts } from "@/prisma-db";
import { DeleteProduct } from "@/server/action";
import Link from "next/link";

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
          <li
            key={product.id}
            className="bg-gray-900 rounded-lg shadow-md p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={`/product-db/${product.id}`}
                  className="text-blue-400 hover:underline"
                >
                  {product.title}
                </Link>
              </h2>
              <p className="text-gray-300">
                Price: <span className="font-bold">${product.price}</span>
              </p>
              {product.description && (
                <p className="mt-2 text-gray-400">{product.description}</p>
              )}
            </div>

            {/* Delete Button using Server Action */}
            <form action={async () => await DeleteProduct(product.id)}>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
