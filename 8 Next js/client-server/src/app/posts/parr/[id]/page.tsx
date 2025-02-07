import React from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  id: number;
  userId: number;
  title: string;
};

async function fetchPosts({ id }: { id: string }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const data: Post[] = await response.json();

  return data;
}

async function fetchAlbums({ id }: { id: string }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  );
  const data: Album[] = await response.json();

  return data;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const postsData = fetchPosts({ id });
  const albumsData = fetchAlbums({ id });

  const [posts, albums] = await Promise.all([postsData, albumsData]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="list-disc pl-5 mb-6">
        {posts.map((post: Post) => (
          <li key={post.id} className="mb-2">
            {post.title}
          </li>
        ))}
      </ul>
      <h1 className="text-2xl font-bold mb-4">Albums</h1>
      <ul className="list-disc pl-5">
        {albums.map((album: Album) => (
          <li key={album.id} className="mb-2">
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
