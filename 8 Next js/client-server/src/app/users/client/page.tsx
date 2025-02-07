/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};

// https://jsonplaceholder.typicode.com/users

const Page = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch users");
        }

        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run only on mount

  console.log(users);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

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

export default Page;
