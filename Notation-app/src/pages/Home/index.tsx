import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="w-full h-screen text-white flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{
          x: -1000,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
      >
        <p className="text-3xl font-bold">Welcome to NotationApp</p>
      </motion.div>

      <motion.div
        initial={{
          x: -1500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          ease: "linear",
          duration: 2.5,
          x: { duration: 1 },
        }}
      >
        <button className="text-lg bg-blue-700 pl-3 pr-3 rounded-full font-bold hover:bg-blue-600 leading-relaxed transition-colors animate-bounce">Continue</button>
      </motion.div>
    </div>
  );
}
