"use client";

import { useState } from "react";

const Paratice = () => {
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

  const time = ["", "", ""];

  const table_body = [
    { time: "09.00 - 10.00", content: "" },
    { time: "11.00 - 12.00", content: "" },
    { time: "15.00 - 16.00", content: "" },
  ];

  return (
    <div className="w-full">
      <p className="text-center text-3xl">
        A personal <span className="italic text-indigo-500">practice</span>{" "}
        that’s right for you. Try all <br /> the classes we have available
      </p>
      <div className="grid sm:grid-cols-4 grid-cols-2 px-12 justify-center items-center sm:px-[400px] gap-6 mt-20">
        {choice.map((item: any, index: number) => {
          return (
            <div
              className={
                "cursor-pointer border-[1px] border-solid  text-center text-sm text-orange-400 px-5 py-2 text-center " +
                (tabs === index ? " bg-rose-50 border-rose-50" : "bg-white border-orange-100")
              }
              key={item}
              onClick={() => setTabs(index)}
            >
              <p className= " "> {item}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-10 items-center justify-center flex">
        <table className="border-collapse border border-slate-400 ">
          <thead>
            <tr>
              {table_header.map((item: any) => {
                return <th className="border border-slate-300 " key={item}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
           
              {table_body.map((item: any) => {
                return (
                  <tr key={item.content}>
                     <td className="border border-slate-300 w-[120px] text-center" key={item.time}>
                      {item.time}
                    </td>
                    <td className="border border-slate-300 ">{item.content}</td>
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
