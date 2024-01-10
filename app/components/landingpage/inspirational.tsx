"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { StarIcon } from "../svg";
import React from "react";
import { motion } from "framer-motion";

const Inspirational = () => {
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
  const info = [
    {
      avt: "avt-1.png",
      name: "Maria Peters",
      job: "Actress",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      avt: "avt-2.png",
      name: "Sofia Ferrari",
      job: "Athlete",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      avt: "avt-3.png",
      name: "Jack Davids",
      job: "Tenis player",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      avt: "avt-1.png",
      name: "Maria Peters",
      job: "Actress",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      avt: "avt-2.png",
      name: "Sofia Ferrari",
      job: "Athlete",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      avt: "avt-3.png",
      name: "Jack Davids",
      job: "Tenis player",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
  ];
  return (
    <div className="">
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
      <p className="text-4xl text-center text-title px-8">
        Beautiful and{" "}
        <span className="italic text-primary font-bold">inspirational</span> words from
        our <br className="md:block hidden" /> very best clients
      </p>
      <div className="md:px-40 px-8 pt-16">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: {
              spaceBetween: 80,
              slidesPerView: 1,
              autoplay: {
                delay: 2000,
                disableOnInteraction: false,
              },
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 80,
              autoplay: {
                delay: 2000,
                disableOnInteraction: false,
              },
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          slidesPerView={3}
          spaceBetween={80}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {info.map((item: any, index) => {
            return (
              <SwiperSlide key={"item.des" + index} className="">
                <div className="flex gap-4">
                  <img
                    src={"/images/" + item.avt}
                    alt=""
                    className="h-20 w-20"
                  />
                  <div className="">
                    <p className="text-3xl text-title">{item.name}</p>
                    <p className="text-lg text-primary text-title">
                      {item.job}
                    </p>
                  </div>
                </div>
                <p className="pt-4 text-neutral-600">{item.des}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Inspirational;
