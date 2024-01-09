"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Vertical = () => {
  return (
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
  );
};

export default Vertical;
