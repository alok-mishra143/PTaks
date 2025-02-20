"use client";

import { EditProduct } from "@/server/action";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditFormProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
  };
}

export default function EditForm(Editthis: EditFormProps) {
  const { product } = Editthis;
  const [title, setTitle] = useState(product?.title || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [description, setDescription] = useState(product?.description || "");

  console.log(title, price, description);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = EditProduct({ id: product.id, title, price, description });
      console.log(res);

      router.push("/product-db");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }

    console.log("submitting", title, price, description);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
          defaultValue={product?.title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
          defaultValue={product?.price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </label>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
          defaultValue={product?.description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
