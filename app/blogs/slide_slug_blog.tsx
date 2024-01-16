"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React, { useEffect, useRef, useState } from "react";
import { axiosInstance } from "@/libs/axios";
import { renderImageById } from "@/libs/helper";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/svg";

const SlideSlugBlog = ({blog}: any) => {
  const [slide, setSlide] = useState([]);
  const swiper: any = useRef();
  useEffect(() => {
    axiosInstance
      .get("/items/post?fields=*")
      .then((data) => {
        setSlide(data.data);
      })
      .catch((data) => {});
  }, []);
  const list = (slide || []).filter((item: any) => item.id !== blog.id);

  return (
    <div className="">
      <div className="md:px-40 relative">
        <Swiper
          ref={swiper}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 2,
              autoplay: {
                delay: 2000,
                disableOnInteraction: false,
              },
            },

            768: {
              slidesPerView: 5,
              spaceBetween: 10,
              autoplay: {
                delay: 2000,
                disableOnInteraction: false,
              },
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          slidesPerView={5}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {list.map((item: any, index: number) => {
            const href = `/blogs/${item.slug}`;
            return (
              <SwiperSlide key={"item.des" + index} className="">
                <Link href={href}>
                  <div className="flex gap-4 relative rounded-sm overflow-hidden">
                    <img
                      src={renderImageById(item.thumbnail)}
                      alt=""
                      className="aspect-square w-[100%] object-cover"
                    />
                  </div>

                  <div className="absolute w-full h-full top-0 left-0 bg-overlay shadow-xlarge z-10 rounded-sm overflow-hidden"></div>
                  <p className="absolute bottom-2 left-4 min-h-[64px] truncate-2 right-4 text-title text-xl text-white z-10">
                    {item.title}
                  </p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {list.length !== 5  && <div className="">
        <div className="absolute -translate-y-[50%] top-[50%] md:left-20 -left-[22px] h-10 z-40">
          <button
            className="group md:h-12 md:w-12 w-fit h-fit rounded-full duration-700 hover:border-0 hover:border-primary/80 md:hover:bg-primary/50"
            onClick={() => swiper.current.swiper.slidePrev()}
          >
            <div className="flex items-center justify-center md:-translate-x-[5%]">
              <ChevronLeftIcon className="md:w-6 md:h-6 w-4 h-4 fill-primary group-hover:fill-white z-50 stroke-[0.1px] items-center" />
            </div>
          </button>
        </div>
        <div className="absolute -translate-y-[50%] top-[50%] md:right-20 -right-[22px] h-10 z-40">
          <button
            className="group md:h-12 md:w-12 w-fit h-fit rounded-full duration-700 hover:border-0 hover:border-primary/80 md:hover:bg-primary/50"
            onClick={() => swiper.current.swiper.slideNext()}
          >
            <div className="flex items-center justify-center md:translate-x-[5%]">
              <ChevronRightIcon className="md:w-6 md:h-6 w-4 h-4  fill-primary group-hover:fill-white z-50 stroke-[0.1px] items-center" />
            </div>
          </button>
        </div>
        </div>}
        
      </div>
    </div>
  );
};

export default SlideSlugBlog;
