"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Inspirational = () => {
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
  ];
  return (
    <div className="">
      <p className="text-4xl text-center">
        Beautiful and{" "}
        <span className="italic text-indigo-500">inspirational</span> words from
        our <br /> very best clients
      </p>
      <div className="px-40 pt-16">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: {
              spaceBetween: 80,
              slidesPerView: 3,
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
          spaceBetween={50}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {info.map((item: any) => {
            return (
              <SwiperSlide key={item.des} className="">
                  <div className="flex gap-4">
                    <img
                      src={"/images/" + item.avt}
                      alt=""
                      className="h-20 w-20"
                    />
                    <div className="">
                      <p className="text-3xl">{item.name}</p>
                      <p className="text-lg text-indigo-500">{item.job}</p>
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
