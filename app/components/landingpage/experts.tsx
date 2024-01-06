"use client";
import { StarIcon } from "../svg";
import React from "react";
import { motion } from "framer-motion";

const Experts = () => {
  const experts = [
    { img: "experts-1.jpg", name: "Maria Peterson", des: "Meditation" },
    { img: "experts-2.jpg", name: "Yvette Goodman", des: "Yoga Therapist" },
    { img: "experts-3.jpg", name: "Lena Gronholm", des: "Pilates instructor" },
    { img: "experts-4.jpg", name: "Nadia Creswell", des: "Meditation" },
  ];

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
    <div className="w-full">
      <div className="md:px-14 px-8">
      <div className="pb-10 ">
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
        <p className="text-center text-4xl text-title">
          Meet the <span className="italic text-primary">experts</span> that
          will guide you on your <br /> way to better everyday life
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-8 pt-16">
          {experts.map((item: any, index: number) => {
            return <Item item={item} key={index} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Experts;

const Item = ({ item, index }: any) => {
  const [animate, setAnimate] = React.useState(false);
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
    <div
      className="text-center relative"
      key={item.img}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
    >
      <div className="group rounded-sm overflow-hidden shadow-sm">
        <img
          src={"images/" + item.img}
          alt=""
          className={
            "w-full object-cover opacity-100 group-hover:opacity-0 duration-300 " +
            (index % 2 !== 0 ? "h-[330px] 2xl:h-[500px]" : "h-[400px] 2xl:h-[580px]")
          }
        />
        <div className={
            "w-full px-10  absolute top-0 left-0 opacity-0 group-hover:opacity-100 text-black bg-[#fbf5e8] " +
            (index % 2 !== 0 ? "h-[330px] 2xl:h-[500px]" : "h-[400px] 2xl:h-[580px]")
          }
        >
          <div className="">
            <div className="overflow-hidden">
              <motion.div
                // initial=" hidden"
                animate={
                  animate === false
                    ? { y: -100, opacity: 0 }
                    : { y: 0, opacity: 1 }
                }
                transition={{
                  ease: "easeInOut",
                  // default: { duration: 0.2, ease: "anticipate" },
                  // fill: { duration: 0.2, ease: [1, 0, 0.8, 1] },
                  duration: 0.4,
                }}
                className={"mx-auto w-[1px] bg-[#FF782B] " + (index % 2 !== 0 ? "2xl:h-[200px] h-[100px] " : "2xl:h-[260px] h-[160px] ")}
              ></motion.div>
            </div>

            <StarIcon
              className="mx-auto stroke-[#FF782B] 2xl:mb-16 mb-10" 
              variants={icon}
              delay={0.2}
              animate={animate === false ? "hidden" : "visible"}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
      </div>
      <p className="text-3xl pt-8 text-title">{item.name}</p>
      <p className="text-lg italic text-primary pb-20 text-title">{item.des}</p>
    </div>
  );
};
