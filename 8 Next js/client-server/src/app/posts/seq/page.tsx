import React, { Suspense } from "react";
import Auther from "./Auther";

type posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Seq = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: posts[] = await responce.json();

  const posts = data.filter((post: posts) => post.id % 10 === 1);

//   console.log(posts);

  return (
    <div>
      {posts.map((post: posts) => (
        <div key={post.id} className="border p-4 my-2 w-full h-32 bg-zinc-900">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-sm text-gray-300">{post.body}</p>

          <Suspense fallback={<div>Loading...</div>}>
            <Auther id={post.userId} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default Seq;
