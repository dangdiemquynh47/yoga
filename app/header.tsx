"use client";
import { useState } from "react";
import {
  CartIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  SearchIcon,
  YoutubeIcon,
} from "./components/svg";
import Link from "next/link";

const Header = () => {
  const [header, setHeader] = useState("");

  const menu = [
    {title: "Home", url: "/"},
    {title: "Investment", url: "/investment"},
    {title: "About Me", url: "/aboutme"},
    {title: "logo", url: "/"},
    {title: "Schedules", url: "/schedules"},
    {title: "Blogs", url: "/blogs"},
    {title: "Contact Us", url: "/contact"},
  ];
  return (
    <div className="w-full md:h-[103px] h-fit py-2.5 md:px-[82px] sticky top-0 z-20 shadow-md px-4 bg-[#fedfcd] text-black flex items-center justify-between">
      <div className="md:flex hidden gap-4 items-center justify-center">
        <FacebookIcon className="md:hover:fill-orange-500 duration-300 cursor-pointer -mx-2" />
        <InstagramIcon className="md:hover:stroke-orange-500 duration-300 cursor-pointer" />
        <YoutubeIcon className="md:hover:stroke-orange-500 duration-300 cursor-pointer" />
      </div>
      <div className="md:flex hidden gap-10 items-center justify-center">
        {menu.map((item: any) => {
          return (
            <Link href={item.url}  key={item.title}>
              <div
               
                className={
                  "cursor-pointer text-[20px] duration-300 text-title italic hover:text-primary text-bold" +
                  (item.title === header ? "text-header" : "")
                }
                onClick={() => setHeader(item.title)}
              >
                {item.title === "logo" ? (
                  <img
                    src="images/logo-remove-bg.png"
                    alt=""
                    className="w-[69px] h-[69px]"
                  />
                ) : (
                  item.title
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="md:hidden block">
        <img
          src="images/logo-remove-bg.png"
          alt=""
          className="w-[50px] h-[50px]"
        />
      </div>

      <div className="flex gap-4 items-center justify-end min-w-[120px]">
        <SearchIcon className="md:block hidden md:hover:stroke-orange-500 stroke-black duration-300 cursor-pointer" />
        {/* <CartIcon className='md:block hidden md:hover:stroke-orange-500 stroke-black duration-300 cursor-pointer'/>
        <MenuIcon className='md:hover:fill-orange-500  fill-black duration-300 cursor-pointer'/> */}
      </div>
    </div>
  );
};

export default Header;
