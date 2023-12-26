"use client";

import { useState } from "react";
import { StarIcon } from "../svg";
import React from "react";
import { motion } from "framer-motion";

const Paratice = () => {
  const [tabs, setTabs] = useState(0);
  const [color, setColor] = useState(0)
  const onclick = () => {

  }
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

  const table_body = [
    {
      time: "09.00 - 10.00",
      mondayNameYoga: "Power Yoga",
      mondayNameTeacher: "Alicia Fergunson",
      tuesdayNameYoga: "Yoga Sculpt",
      tuesdayNameTeacher: "Tom Grills",
      wednesdayNameYoga: "Hatha Yoga",
      wednesdayNameTeacher: "Leona Wiliams",
      thursdayNameYoga: "",
      thursdayNameTeacher: "",
      fridayNameYoga: "Yoga Sculpt",
      fridayNameTeacher: "Tom Grills",
      saturdayNameYoga: "Power Yoga",
      saturdayNameTeacher: "Alica Fergunson",
      sundayNameYoga: "",
      sundayNameTeacher: "",
    },
    {
      time: "10.00 - 11.00",
      mondayNameYoga: "Hatha Yoga",
      mondayNameTeacher: "Leona Wiliams",
      tuesdayNameYoga: "Power Yoga",
      tuesdayNameTeacher: "Alicia Fergunson",
      wednesdayNameYoga: "",
      wednesdayNameTeacher: "",
      thursdayNameYoga: "",
      thursdayNameTeacher: "",
      fridayNameYoga: "Power Yoga",
      fridayNameTeacher: "Alica Fergunson",
      saturdayNameYoga: "",
      saturdayNameTeacher: "",
      sundayNameYoga: "",
      sundayNameTeacher: "",
    },
    {
      time: "11.00 - 12.00",
      mondayNameYoga: "",
      mondayNameTeacher: "",
      tuesdayNameYoga: "",
      tuesdayNameTeacher: "",
      wednesdayNameYoga: "Yoga Sculpt",
      wednesdayNameTeacher: "Tom Grills",
      thursdayNameYoga: "Hatha Yoga",
      thursdayNameTeacher: "Leona Wiliams",
      fridayNameYoga: "",
      fridayNameTeacher: "",
      saturdayNameYoga: "Yoga Sculpt",
      saturdayNameTeacher: "Tom Grills",
      sundayNameYoga: "Hatha Yoga",
      sundayNameTeacher: " Leona Wiliams",
    },
    {
      time: "15.00 - 16.00",
      mondayNameYoga: "Power Yoga",
      mondayNameTeacher: " Alicia Fergunson",
      tuesdayNameYoga: "Yoga Sculpt",
      tuesdayNameTeacher: " Tom Grills",
      wednesdayNameYoga: "Hatha Yoga",
      wednesdayNameTeacher: "Leona Wiliams",
      thursdayNameYoga: "",
      thursdayNameTeacher: "",
      fridayNameYoga: "Yoga Sculpt",
      fridayNameTeacher: "Tom Grills",
      saturdayNameYoga: "",
      saturdayNameTeacher: "",
      sundayNameYoga: "Power Yoga",
      sundayNameTeacher: "Alica Fergunson",
    },
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
      <p className="text-center text-3xl">
        A personal <span className="italic text-indigo-500">practice</span>{" "}<br className="block md:hidden"/>
        that’s right for you.<br className="block md:hidden"/> Try all <br className="md:block hidden"/> the classes<br className="block md:hidden"/> we have available
      </p>
      <div className="grid sm:grid-cols-4 grid-cols-2 px-12 justify-center items-center sm:px-[400px] gap-6 mt-20">
        {choice.map((item: any, index: number) => {
          return (
            <div
              className={
                "cursor-pointer border-[1px] border-solid  text-center text-sm text-orange-400 px-5 py-2 text-center " +
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
                    className="border border-[#fff1e9] border-b-white border-[3px] px-6 py-2"
                    key={item}
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {table_body.map((item: any, index: number) => {
              return (
                <tr key={item.monday} className={" " + (index % 2 !== 0 ? "bg-[#fff9f6]" : "bg-[#fff1e9]")}>
                  <td
                    className="border px-6 py-2 border-l-[#fff1e9] border-white border-[3px] w-fit text-center text-sm"
                    key={item.time}
                  >
                    {item.time}
                  </td>
                  <td className="border border-white border-[3px] p-6 py-10 text-center text-sm">
                    <p className={"" + (item.mondayNameYoga === "Power Yoga" ? "text-[#9a9aec]" : (item.mondayNameYoga === "Yoga Sculpt"  ? "text-[#ff7e49]" : "text-[#62c2da]"))}>{item.mondayNameYoga}</p>
                    <p>{item.mondayNameTeacher}</p>
                  </td>
                  <td className="border border-white border-[3px] p-6 text-center text-sm ">
                    <p className={"" + (item.tuesdayNameYoga === "Power Yoga" ? "text-[#9a9aec]" : (item.tuesdayNameYoga === "Yoga Sculpt"  ? "text-[#ff7e49]" : "text-[#62c2da]"))}>{item.tuesdayNameYoga}</p>
                    <p>{item.tuesdayNameTeacher}</p>
                  </td>
                  <td className="border border-white border-[3px] p-6 text-center text-sm ">
                    <p className={"" + (item.wednesdayNameYoga === "Power Yoga" ? "text-[#9a9aec]" : (item.wednesdayNameYoga === "Yoga Sculpt"  ? "text-[#ff7e49]" : "text-[#62c2da]"))}>{item.wednesdayNameYoga}</p>
                    <p>{item.wednesdayNameTeacher}</p>
                  </td>
                  <td className="border border-white border-[3px] p-6 text-center text-sm ">
                    <p className={"" + (item.thursdayNameYoga === "Power Yoga" ? "text-[#9a9aec]" : (item.thursdayNameYoga === "Yoga Sculpt"  ? "text-[#ff7e49]" : "text-[#62c2da]"))}>{item.thursdayNameYoga}</p>
                    <p>{item.thursdayNameTeacher}</p>
                  </td>
                  <td className="border border-white border-[3px] p-6 text-center text-sm ">
                    <p className={"" + (item.fridayNameYoga === "Power Yoga" ? "text-[#9a9aec]" : (item.fridayNameYoga === "Yoga Sculpt"  ? "text-[#ff7e49]" : "text-[#62c2da]"))}>{item.fridayNameYoga}</p>
                    <p>{item.fridayNameTeacher}</p>
                  </td>
                  <td className="border border-white border-[3px] p-6 text-center text-sm ">
                    <p className={"" + (item.saturdayNameYoga === "Power Yoga" ? "text-[#9a9aec]" : (item.saturdayNameYoga === "Yoga Sculpt"  ? "text-[#ff7e49]" : "text-[#62c2da]"))}>{item.saturdayNameYoga}</p>
                    <p>{item.saturdayNameTeacher}</p>
                  </td>
                  <td className="border border-r-[#fff1e9] border-white border-[3px] p-6 text-center text-sm">
                    <p className={"" + (item.sundayNameYoga === "Power Yoga" ? "text-[#9a9aec]" : (item.sundayNameYoga === "Yoga Sculpt"  ? "text-[#ff7e49]" : "text-[#62c2da]"))}>{item.sundayNameYoga}</p>
                    <p>{item.sundayNameTeacher}</p>
                  </td>
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

// const MobileTable = () => {
//   const table = [{
//     day:"Monday", 
//     nameYoga1: "Power Yoga ",
//     time1:""
//     nameYoga1: "Power Yoga ",
//     time1:""
//     nameYoga1: "Power Yoga ",
//     time1:""
//   },
//   {
//     day:"", 
//     nameYoga: "",
//     time:""
//   },
//   {
//     day:"", 
//     nameYoga: "",
//     time:""
//   },
//   {
//     day:"", 
//     nameYoga: "",
//     time:""
//   },
//   {
//     day:"", 
//     nameYoga: "",
//     time:""
//   },
//   {
//     day:"", 
//     nameYoga: "",
//     time:""
//   },
//   {
//     day:"", 
//     nameYoga: "",
//     time:""
//   },]
//   return (
//     <div className="">

//     </div>
//   )
// }