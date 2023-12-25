"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MeetOurExperts = () => {
  const img = ["yoga-1.jpg", "yoga-2.jpg", "yoga-3.jpg", "yoga-4.jpg"];
  return (
    <div className="pt-40 bg-rose-50/50 w-full px-8 ">
      <p className="text-center text-4xl">
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

      <div className="pt-20 translate-y-[20%] mx-8">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: {
              spaceBetween: 30,
              slidesPerView: 3,
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
          slidesPerView={3}
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

                {/* <div className="flex flex-col gap-6 absolute text-7xl text-white bottom-10 left-10 ">
                  <p>{item.text}</p>
                  <div className="group flex items-center justify-center gap-2 py-4 bg-rose-100 w-fit overflow-hidden">
                    <div className="h-[1px] w-6 group-hover:-translate-x-[14px] duration-300 bg-orange-500"></div>
                    <button className="text-orange-500 text-[12px]">
                      BOOK NOW
                    </button>
                    <div className="h-[1px] w-6 group-hover:translate-x-[14px] duration-300 bg-orange-500"></div>
                  </div>
                </div> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MeetOurExperts;
