import { motion } from "framer-motion";

const Simple = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1 }}
      className="bg-red-500 border w-32 h-32 rounded-full"
    />
  );
};

export default Simple;
