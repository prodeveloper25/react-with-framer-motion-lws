import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
      className="w-32 h-32 border rounded-sm bg-pink-600 p-2 m-4 text-white"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      viewport={{ once: false }}
    >
      <h1 className="text-center font-semibold mt-[36%]">{text}</h1>
    </motion.div>
  );
};
const ScrollReveal = () => {
  const greetings = ["Hello", "I am", "Asratul", "Hasan", "Nahid", "Cute Boy"];

  return (
    <>
      {greetings.map((greeting, index) => (
        <Box key={index} text={greeting} />
      ))}
    </>
  );
};

export default ScrollReveal;
