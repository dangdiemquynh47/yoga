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

      <div className="translate-y-[20%] mx-8">
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MeetOurExperts;
