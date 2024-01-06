"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { StarIcon } from "../svg";
import React from "react";
import { motion } from "framer-motion";

const MeetOurExperts = () => {
  const img = ["yoga-1.jpg", "yoga-2.jpg", "yoga-3.jpg", "yoga-4.jpg"];
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
    <div className=" bg-[#fbf5e8] w-full px-8 ">
       <div className=" -translate-y-[30%]">
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
        Come on down to our studio and meet <br /> our yoga{" "}
        <span className="italic text-indigo-500">experts</span>
      </p>
      {/* <div className="sm:px-14 px-0 grid sm:grid-cols-3 grid-col-1 gap-8 translate-y-[22%] justify-between">
        {img.map((item: any) => {
          return (
            <div className="">
              <img src={"/images/" + item} alt="" className="h-fit w-fit" />
            </div>
          );
        })}
      </div> */}

      <div className="translate-y-[20%] md:mx-8">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: {
              spaceBetween: 30,
              slidesPerView: 1,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          slidesPerView={1}
          spaceBetween={50}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {img.map((item: any) => {
            return (
              <SwiperSlide key={item + "hello"} className="">
                <img
                  src={"/images/" + item}
                  alt=""
                  className="h-full w-full"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MeetOurExperts;
