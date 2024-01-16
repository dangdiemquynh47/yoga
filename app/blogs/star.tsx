'use client'
import { StarIcon } from "../components/svg";
import { motion } from "framer-motion";

const Star = () => {
      const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };
  return (
    <div className="">
      <div className="overflow-hidden ">
        <motion.div
          // initial=" hidden"
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            // default: { duration: 0.2, ease: "anticipate" },
            // fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
            duration: 0.4,
          }}
          className="mx-auto w-[1px] bg-[#FF782B] h-[150px] "
        ></motion.div>
      </div>

      <StarIcon
        className="mx-auto stroke-[#FF782B]"
        variants={icon}
        delay={0.2}
        animate="visible"
      />
    </div>
  );
};

export default Star;
