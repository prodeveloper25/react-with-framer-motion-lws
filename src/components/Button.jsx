import { motion } from "framer-motion";
const Button = () => {
  return (
    <div>
      {/* button 1 start  */}
      <motion.button
        className="bg-green-500 text-white px-4 py-2 text-lg font-medium m-4
         rounded cursor-pointer"
        whileTap={{ scale: 0.9 }}
        whileHover={{ y: -4 }}
      >
        Developer 1
      </motion.button>
      {/* button 1 end  */}
      {/* button 2 start  */}
      <motion.button
        className="bg-red-500 text-white px-4  py-2 text-lg font-medium  m-4
         rounded cursor-pointer"
        whileTap={{ scale: 0.9 }}
        whileHover={{ y: -4, transition: { yoyo: Infinity } }}
      >
        Developer 2
      </motion.button>
      {/* button 2 end  */}
    </div>
  );
};

export default Button;
