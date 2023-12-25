"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const WatchList = () => {
  const swiper = [
    { img: "yoga-1.jpg", text: "Body and Mind" },
    { img: "yoga-2.jpg", text: "New Yoga Classes" },
    { img: "yoga-3.jpg", text: "Group Sessions" },
    { img: "yoga-4.jpg", text: "Your Happy Place" },
  ];
  return (
    <div className="max-w-screen overflow-hidden">
      <div className="w-[150%] bg-rose-50/50 pl-20 pb-40">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 0,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {swiper.map((item: any) => {
            return (
              <SwiperSlide key={item.img + "hello"} className="">
                <img
                  src={"/images/" + item.img}
                  alt=""
                  className="h-[80vh] w-[970px]"
                />
                <div className="flex flex-col gap-6 absolute text-7xl text-white bottom-10 left-10 ">
                  <p>{item.text}</p>
                  <div className="group flex items-center justify-center gap-2 py-4 bg-rose-100 w-fit overflow-hidden">
                    <div className="h-[1px] w-6 group-hover:-translate-x-[14px] duration-300 bg-orange-500"></div>
                    <button className="text-orange-500 text-[12px]">
                      BOOK NOW
                    </button>
                    <div className="h-[1px] w-6 group-hover:translate-x-[14px] duration-300 bg-orange-500"></div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default WatchList;
