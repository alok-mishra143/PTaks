import { motion } from "framer-motion";

const Button = () => {
  return (
    <div className="w-96 h-96 [perspective:1000px] [transform-style:preserve-3d]">
      <motion.button
        whileHover={{ rotateX: 20, rotateY: 20 }}
        style={{ translateZ: 100 }}
        className="group relative bg-zinc-800 text-neutral-500 rounded-md px-12 py-4 shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]  transition duration-300"
      >
        Hover me
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </motion.button>
    </div>
  );
};

export default Button;
