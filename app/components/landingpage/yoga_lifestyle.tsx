"use client";
import dayjs from "dayjs";
import { StarIcon } from "../svg";
import React from "react";
import { motion } from "framer-motion";

const YogaLifeStyle = () => {
  const lifestyle = [
    {
      bigimg: "lifestyle-1.jpg",
      smallimg: "lotus.png",
      title: "Fall in Love With Hatha Yoga",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-2.jpg",
      smallimg: "hand.png",
      title: "Hatha Yoga New Mindset",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-3.jpg",
      smallimg: "zen.png",
      title: "How Does Hatha Yoga Work?",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-4.jpg",
      smallimg: "hand.png",
      title: "10 Things for Your Yoga needs",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-5.jpg",
      smallimg: "zen.png",
      title: "New Yoga Muscle Stretches",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-6.jpg",
      smallimg: "lotus.png",
      title: "Gain Overall Flexibility",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
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
    <div className="md:p-40 pt-20 pb-60 px-8 bg-[url('/images/bg.jpg')] w-full relative">
       <div className="pb-10 absolute top-0 left-[50%] -translate-y-[25%]">
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
        Explore the{" "}
        <span className="italic text-indigo-500">yoga <br className="md:hidden block"/> lifestyle</span> and learn <br className="md:hidden block"/>
        more <br className="hidden md:block"/> about our <br className="md:hidden block"/> community
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-1 md:gap-x-16 gap-x-20">
        {lifestyle.map((item: any, index: number) => {
          return (
            <div
              className={
                "w-full flex flex-col items-center justify-center " +
                (index === 1 || index == 4 ? "md:mt-28" : "")
              }
              key={item.img + "lifestyle"}
            >
              <p className="w-fit px-5 text-orange-500 translate-y-[50%] z-10 py-1 bg-white">{dayjs("2019-01-25").format("MMMM DD, YYYY")}</p>
              <div className="duration-150  hover:ease-in cursor-pointer overflow-hidden">
                <img src={"/images/" + item.bigimg} alt="" className="duration-300 scale-105 hover:scale-100" />
              </div>
              <div className="pt-10 flex flex-col items-center justify-center">
                <img src={"/images/" + item.smallimg} alt="" className="" />
                <p className="text-3xl text-center pt-6 hover:text-amber-500 duration-300 cursor-pointer text-title">
                  {item.title}
                </p>
                <p className="text-center pt-6">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YogaLifeStyle;
