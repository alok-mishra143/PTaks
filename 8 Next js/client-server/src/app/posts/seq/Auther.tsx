import React from "react";
type Auther = {
  id: number;
  name: string;
};

const Auther = async ({ id }: { id: number }) => {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data: Auther = await responce.json();

  //   console.log(data);

  return <div>written by:{data.name} </div>;
};

export default Auther;
