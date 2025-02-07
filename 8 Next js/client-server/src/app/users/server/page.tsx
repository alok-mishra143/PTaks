import React from "react";
type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const users: User[] = data;

  return (
    <div className="flex   flex-col justify-center gap-3">
      {users.map((user: User) => (
        <div key={user.id} className="border p-4 my-2 w-full h-32 bg-zinc-900">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-sm text-gray-300">{user.email}</p>
          <p className="text-sm text-gray-300">{user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
