"use client";

import React from "react";

const ErrorNext = ({ error }: { error: Error }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-2xl text-gray-300 mb-6">Something went wrong.</p>
        <p className="text-lg text-gray-300 mb-8">
          We&apos;re sorry, but it looks like something went wrong. Please try
          again later.
        </p>
        <p className="text-lg text-red-500 mb-8 font-bold ">{error?.message}</p>
      </div>
    </div>
  );
};

export default ErrorNext;
