import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href={"/users/client"}>Go to client</Link>
      <Link href={"/users/server"}>Go to server</Link>
    </div>
  );
};

export default page;
