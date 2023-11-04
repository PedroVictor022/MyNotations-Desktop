import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

export default function Login() {
   const navigate = useNavigate();

  return (
    <div className="w-full  text-white flex flex-col items-center justify-center gap-4 ">
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
        <p className="text-3xl font-bold">Login MyNotationApp</p>
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
        <button className="text-lg bg-blue-700 pl-3 pr-3 rounded-full font-bold hover:bg-blue-600 leading-relaxed transition-colors"
      onClick={() => navigate("home")}
        >Continue</button>
      </motion.div>
    </div>
  );
}
