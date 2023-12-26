"use client";
import {useState} from 'react'
import { StarIcon } from "../svg";
import { motion } from "framer-motion";
const StarAnimate = () => {
    const [animate, setAnimate] = useState(false)
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

  const hover = () => {
    setAnimate(true)
  }
  return (
    <div className="">
      <motion.div
        variants={icon}
        initial="hidden"
        animate={animate === false ? "hidden" : "visible"}
        transition={{
          default: { duration: 0.2, ease: "anticipate" },
          fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
        }}
        className="mx-auto w-[1px] bg-[#FF782B] h-[100px]"
      ></motion.div>

      <StarIcon className="mx-auto mb-16 stroke-[#FF782B]" variants={icon} />
    </div>
  );
};

export default StarAnimate;
