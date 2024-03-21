import { motion } from "framer-motion";

const TransitionType = () => {
  return (
    <>
      {/* implement 1 start  */}
      <motion.div
        className="text-blue-500 m-8"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Learning Animation</h1>
        <p>
          We Love Animation. We are Enjoying it a lot. Framer Motion is great.
        </p>
      </motion.div>
      {/* implement 1 end  */}

      {/* implement 2 start  */}
      <motion.div
        className="text-red-500 m-8"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <h1>Learning Animation</h1>
        <p>
          We Love Animation. We are Enjoying it a lot. Framer Motion is great.
        </p>
      </motion.div>
      {/* implement 2 end  */}

      {/* implement 3 start  */}
      <motion.div
        className="text-green-500 m-8"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.7, duration: 1 }}
      >
        <h1>Learning Animation</h1>
        <p>
          We Love Animation. We are Enjoying it a lot. Framer Motion is great.
        </p>
      </motion.div>
      {/* implement 3 end  */}
    </>
  );
};

export default TransitionType;
