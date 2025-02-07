"use client";

import React from "react";

const Page = () => {
  const [name, setname] = React.useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Page</h1>
      <input
        className="border border-gray-500 bg-transparent  outline-none"
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <h1>hello {name}</h1>
    </div>
  );
};

export default Page;
