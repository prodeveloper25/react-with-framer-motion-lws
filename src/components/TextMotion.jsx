import { motion } from "framer-motion";

const TextMotion = () => {
  const message = "We Are Enjoying Programming Hero Course. This is Awesome!!!";
  const wordArray = message.split(" ");
  return (
    <motion.div className="text-3xl m-4 text-center font-semibold">
      {wordArray.map((word, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index / 5 }}
          key={index}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextMotion;
