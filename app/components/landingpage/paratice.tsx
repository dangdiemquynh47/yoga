"use client";
import { useState, useEffect } from "react";
import { StarIcon } from "../svg";
import React from "react";
import { motion } from "framer-motion";
import { axiosInstance } from "@/libs/axios";

const Paratice = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/items/time_shift?fields=*`)
      .then((data) => {
        setList(data.data);
      })
      .catch((data) => {});
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/items/class?fields=*`)
      .then((data) => {
        setData(data.data);
      })
      .catch((data) => {});
  }, []);

  const time = data.filter((items:any) => items.time_shift === 29 && items.day.includes('2'))

  const [tabs, setTabs] = useState(0);
  const choice = ["All Events", "Hatha Yoga", "Power Yoga", "Yoga Sculpt"];
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
        A personal <span className="italic text-indigo-500">practice</span>{" "}
        <br className="block md:hidden" />
        that’s right for you.
        <br className="block md:hidden" /> Try all{" "}
        <br className="md:block hidden" /> the classes
        <br className="block md:hidden" /> we have available
      </p>
      <div className="grid sm:grid-cols-4 grid-cols-2 px-12 justify-center items-center sm:px-[400px] gap-6 mt-20">
        {choice.map((item: any, index: number) => {
          return (
            <div
              className={
                "cursor-pointer border-[1px] border-solid  text-center text-sm text-orange-400 px-5 py-2 text-center hover:bg-rose-50 duration-300 " +
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
      </div>
      <div className="mt-10 items-center justify-center md:flex hidden">
        <table className="border-collapse border border-[#fff1e9] border-[3px] ">
          <thead>
            <tr>
              {table_header.map((item: any) => {
                return (
                  <th
                    className="border border-[#fff1e9] border-[3px] px-6 py-2"
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
                    "text-table text-md border-b-[1px] border-dashed border-[#ffdac5] " +
                    (index % 2 !== 0 ? "bg-[#fff9f6]" : "bg-[#fff1e9]")
                  }
                  key={item.id}
                >
                  <td
                    className={
                      "p-6 border-b-[1px] border-r-[1px] border-dashed border-[#ffdac5] "
                    }
                  >
                    {timestart} - {timeend}
                  </td>
                  {data.map((item: any) => {
                    const title = item.title || "";   
                    return (
                      <td className="p-6 text-center border-r-[1px] border-dashed border-[#ffdac5] ">
                        {time && title}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Paratice;