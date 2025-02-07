/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import Test from "./childs/Test";

const LearnCallBack = () => {
  const handleclick = useCallback(() => {
    setvalue((prev) => prev + 1);
  }, []);

  const [value, setvalue] = useState(0);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Parent Component
        </h1>
        <p className="text-lg text-center mb-4">
          Value: <span className="font-mono text-yellow-400">{value}</span>
        </p>
        <div className="flex justify-center mb-6">
          <button
            onClick={handleclick}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition"
          >
            Click me
          </button>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">
            Child Component
          </h2>
          <Test name="Test2" handleclick={handleclick} />
        </div>
      </div>
    </div>
  );
};

export default LearnCallBack;
