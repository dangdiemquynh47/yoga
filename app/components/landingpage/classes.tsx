"use client";
import { HathaYoga, HotYogaIcon, PowerYogaIcon, YogaScultIcon } from "../svg";
import { StarIcon } from "../svg";
import React from "react";
import { motion } from "framer-motion";

const Classes = () => {
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
    <div id="classes" className="text-center w-full md:px-0 px-10">
      <div className="-translate-y-[20%]">
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
      <p className="text-4xl text-title">
        A joyfull <span className="italic text-primary font-bold">classes</span> in
        your body, <br /> mind and spirit
      </p>
      <div className="group flex flex-col sm:flex-row md:gap-20 gap-10 items-center justify-center mt-12 text-2xl text-title">
        <div className="">
          <PowerYogaIcon className="fill-[#F47730] hover:fill-[#4054B2] duration-300 cursor-pointer" />
          <p className="md:mt-6 mt-3">Hatha Yoga</p>
        </div>
        <div className="">
          <YogaScultIcon className="fill-[#F47730] hover:fill-[#4054B2] duration-300 cursor-pointer" />
          <p className="md:mt-6 mt-3">Yin & Restorative </p>
        </div>
        <div className="">
          <HotYogaIcon className="fill-[#F47730] hover:fill-[#4054B2] duration-300 cursor-pointer " />
          <p className="md:mt-6 mt-3">Pranayama & Meditation </p>
        </div>
        <div className="">
          <HathaYoga className="fill-[#F47730]  hover:fill-[#4054B2] duration-300 cursor-pointer" />
          <p className="md:mt-6 mt-3">Therapeutic</p>
        </div>
      </div>
    </div>
  );
};

export default Classes;
