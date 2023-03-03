import { GiPeaceDove } from "react-icons/gi";
import { motion } from "framer-motion";

const containerVariants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      duration: 0.5,
      //   stiffness: 300,
    },
  },
  hidden: {
    opacity: 0,
    // scale: 0,
  },

  inView: {
    opacity: 1,
    // scale: 1,
    transition: {
      duraion: 5,
      type: "spring",
    },
  },
};

function Card() {
  return (
    <motion.div
      variants={containerVariants}
      whileHover="hover"
      initial="hidden"
      whileInView="inView"
      className="mt-6 flex w-full flex-col items-center justify-center rounded-3xl bg-secondary px-4 py-6 text-center shadow-xl"
    >
      <span className=" rounded-full bg-white px-2 py-2 drop-shadow-lg">
        <GiPeaceDove className="text-5xl text-secondary" />
      </span>
      <h2 className="font mt-10 font-serif text-3xl font-bold text-white md:text-xl">
        Our worship services
      </h2>
      <div>
        <p className="mt-8 text-2xl font-bold text-white md:text-lg">
          Sunday Service
        </p>
        <p className="mt-4 font-serif text-white">8:00 AM - 9:00 AM</p>
      </div>
      <div>
        <p className="mt-8 text-2xl font-bold text-white md:text-lg">
          Sunday Service
        </p>
        <p className="mt-4 font-serif text-white">8:00 AM - 9:00 AM</p>
      </div>
      <div>
        <p className="mt-8 text-2xl font-bold text-white md:text-lg">
          Sunday Service
        </p>
        <p className="mt-4 mb-6 font-serif text-white">8:00 AM - 9:00 AM</p>
      </div>
    </motion.div>
  );
}

export default Card;
