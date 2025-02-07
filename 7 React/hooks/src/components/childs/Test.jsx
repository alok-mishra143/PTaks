/* eslint-disable react/prop-types */
import React from "react";

const Test = React.memo((props) => {
  console.log("Test rendered");
  const { name, handleclick } = props;
  return (
    <div className="text-center">
      <p className="text-gray-300 mb-2">
        Hello, I am the <span className="text-yellow-400">{name}</span>{" "}
        component.
      </p>
      <button
        onClick={handleclick}
        className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-md transition"
      >
        Child Click
      </button>
    </div>
  );
});

Test.displayName = "Test";

export default Test;
