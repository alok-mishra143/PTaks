import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" animate-spin h-32 w-32 rounded-full border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
};

export default Loading;
