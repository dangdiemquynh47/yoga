import { StarIcon } from "../svg";
import React from "react";
// import { motion } from "framer-motion";
import { axiosInstance } from "@/libs/axios";
import dayjs from "dayjs";
import Vertical from "../wigdet/vertical";

const Paratice = async () => {
  const time_shift: any = await axiosInstance
    .get(`/items/time_shift?fields=*`)
    .catch((data) => {});

  const list = (time_shift?.data || []).sort((a: any, b: any) => {
    return (
      dayjs("11/22/2023 " + a.start_time, "DD/MM/YYYY HH:mm:ss").unix() -
      dayjs("11/22/2023 " + b.start_time, "DD/MM/YYYY HH:mm:ss").unix()
    );
  });

  const resClasses = await axiosInstance
    .get(`/items/class?fields=*`)
    .catch((data) => {});

  const classes = resClasses?.data || [];
  // const choice = ["All Events", "Hatha Yoga", "Power Yoga", "Yoga Sculpt"];
  const table_header = [
    " ",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const days = ["2", "3", "4", "5", "6", "7", "CN"];

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
      <div className="pb-10 ">
        <div className="overflow-hidden ">
          <Vertical />
        </div>

        <StarIcon
          className="mx-auto stroke-[#FF782B]"
          variants={icon}
          delay={0.2}
          animate="visible"
        />
      </div>
      <p className="text-center text-4xl text-title">
        A personal <span className="italic text-primary font-bold">practice</span>{" "}
        <br className="block md:hidden" />
        that’s right for you.
        <br className="block md:hidden" /> Try all{" "}
        <br className="md:block hidden" /> the classes
        <br className="block md:hidden" /> we have available
      </p>
      {/* <div className="grid sm:grid-cols-4 grid-cols-2 px-12 justify-center items-center sm:px-[400px] gap-6 mt-20">
        {choice.map((item: any, index: number) => {
          return (
            <div
              className={
                "cursor-pointer border-[1px] border-solid text-sm text-orange-400 px-5 py-2 text-center hover:bg-rose-50 duration-300 " +
                (tabs === index
                  ? " bg-rose-50 border-rose-50"
                  : "bg-white border-orange-100")
              }
              key={item}
              onClick={() => setTabs(index)}
            >
              <p className=" "> {item}</p>
            </div>
          );
        })}
      </div> */}
      <div className="mt-10 items-center justify-center md:flex hidden px-10 md:px-20">
        <table className="w-full">
          <thead>
            <tr className="border-[1px] border-secondary border-dashed">
              {table_header.map((item: any) => {
                return (
                  <th
                    className=" p-6 text-black/70 border-r-[1px] last:border-r-[0px] border-dashed border-secondary font-semibold"
                    key={item}
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {list.map((item: any, index: number) => {
              const start_time = item.start_time || "";
              const tempstart = start_time.split(":");
              tempstart.pop();
              const timestart = tempstart.join(":");

              const end_time = item.end_time || "";
              const tempend = end_time.split(":");
              tempend.pop();
              const timeend = tempend.join(":");

              return (
                <tr
                  className={
                    "border-[1px] border-secondary border-dashed " +
                    (index % 2 !== 0 ? "bg-[#fff9f6]" : "bg-[#fff1e9]")
                  }
                  key={item.id}
                >
                  <td
                    className={
                      "p-6 whitespace-nowrap border-b-[1px] border-r-[1px] border-dashed border-secondary text-center"
                    }
                  >
                    {timestart} - {timeend}
                  </td>
                  {days.map((day: any, index) => {
                    // điều kiện 1 lớp nằm trong ô này là, class.timeshift === timeShift.id
                    //  class.days có chứa day
                    const classAcitve = classes.find(
                      (cls: any) =>
                        cls.time_shift === item.id && cls.day.includes(day)
                    );

                    return (
                      <td
                        className="border-dashed border-secondary border-[1px] px-6 py-6 text-center"
                        key={day + index}
                      >
                        {classAcitve?.title && (
                          <>
                            <div className=" text-primary">
                              {classAcitve?.title || ""}
                            </div>
                            <div className="text-center text-secondary mt-1">
                              Hiền Thi
                            </div>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="md:hidden ">
              
      </div>
    </div>
  );
};

export default Paratice;
