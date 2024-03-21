import { motion } from "framer-motion";

const Variants = () => {
  const styleVariants = {
    initial: { opacity: 0, y: "-100vh" },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        type: "spring",
      },
    },
  };

  const childVariants = {
    initial: { scale: 1 },
    animate: {
      scale: 2,
      transition: {
        delay: 1.5,
        duration: 1,
        type: "spring",
        bounce: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={styleVariants}
      initial="initial"
      animate="animate"
      className="bg-green-500 w-32 h-32 rounded border m-4"
    >
      <motion.div
        variants={childVariants}
        className="bg-red-500 w-12 h-12 rounded-full  m-2"
      />
    </motion.div>
  );
};

export default Variants;
