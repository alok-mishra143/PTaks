import React from "react";
import { motion } from "framer-motion";

const EasyAnimation = () => {
  const [start, setStart] = React.useState(false);

  return (
    <div className="h-screen w-full flex flex-col m-3 p-2 ">
      <h1 className="text-4xl mb-4">Easy Animations</h1>
      <button
        className="border border-gray-400 px-4 py-2 rounded-2xl hover:bg-gray-900 transition w-48"
        onClick={() => setStart(!start)}
      >
        Start Animation
      </button>
      <div className="flex gap-4 mt-6 flex-col ">
        <motion.div
          className="w-20 h-20 bg-blue-500 rounded-md"
          animate={{ x: start ? 100 : 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.div
          className="w-20 h-20 bg-green-500 rounded-md"
          animate={{ rotate: start ? 360 : 0 }}
          transition={{ duration: 1 }}
          whileHover={{ rotate: 180, scale: 1.1 }}
        />
        <motion.div
          className="w-20 h-20 bg-red-500 rounded-md"
          animate={{ scale: start ? 1.5 : 1, x: start ? 100 : 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8, rotate: 10 }}
        />
        <motion.div
          className="w-20 h-20 bg-yellow-500 rounded-md"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: start ? 1 : 0.5, y: start ? 20 : 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ rotate: [0, 10, -10, 0] }}
        />

        <motion.div
          className="w-20 h-20 bg-orange-500 rounded-md"
          initial={{ opacity: 0, y: 0 }}
          animate={
            start
              ? { y: [0, 0, 200, 200, 0], x: [0, 400, 400, 0, 0], opacity: 1 }
              : { opacity: 1, y: 0, x: 0 }
          }
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default EasyAnimation;
