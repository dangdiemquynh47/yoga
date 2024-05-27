"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const Banner = () => {
  const swiper = [
    { img: "IMG_0541-2.jpg", text: "New Yoga Classes" },
    { img: "IMG_0857.jpg", text: "Body and Mind" },
    { img: "IMG_0569-2.jpg", text: "Group Sessions" },
    { img: "IMG_0561-2.jpg", text: "Your Happy Place" },
  ];
  return (
    <div className="max-w-screen overflow-hidden">
      <div className="md:w-[150%] w-[220%] bg-be/20 md:pl-20 pb-40">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: {
              spaceBetween: 50,
              slidesPerView: 2,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 50,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          spaceBetween={50}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {swiper.map((item: any, index: number) => {
            return (
              <SwiperSlide key={item.img + index} className="">
                <img
                  src={"/images/malayoga/" + item.img}
                  alt=""
                  className="lg:h-[80vh] md:h-[50vh] md:w-full object-cover brightness-[0.95]"
                />
                <div className="flex flex-col absolute md:text-7xl text-4xl text-white md:bottom-10 md:left-10 bottom-6 left-6 ">
                  <p className="text-title pb-10">{item.text}</p>
                  <Link
                    href={"/trac-nghiem-dosha"}
                    className="text-white text-[16px] cursor-pointer group flex items-center justify-center gap-2 md:py-4 py-1 h-fit bg-button w-fit overflow-hidden"
                  >
                    <div className="h-[1px] w-6 group-hover:-translate-x-[14px] duration-300 bg-white"></div>
                    Trắc nghiệm Dosha
                    <div className="h-[1px] w-6 group-hover:translate-x-[14px] duration-300 bg-white"></div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
