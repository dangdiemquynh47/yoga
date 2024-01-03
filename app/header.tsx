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

const Header = () => {
  const [header, setHeader] = useState("");

  const menu = ["HOME", "PAGES", "CLASSES", "logo", "BLOG", "SHOP", "LANDING"];
  return (
    <div className="w-full md:h-[103px] h-fit py-2.5 md:px-[82px] px-4 bg-[url('/images/bg.jpg')] flex items-center justify-between">
      <div className="md:flex hidden gap-4 items-center justify-center">
        <FacebookIcon className='md:hover:fill-orange-500 duration-300 cursor-pointer'/>
        <InstagramIcon className='md:hover:stroke-orange-500 duration-300 cursor-pointer'/>
        <YoutubeIcon className='md:hover:stroke-orange-500 duration-300 cursor-pointer'/>
      </div>
      <div className="md:flex hidden gap-5 items-center justify-center">
        {menu.map((item: any) => {
          return (
            <div
              key={item}
              className={
                "cursor-pointer hover:text-amber-500 duration-300 text-title " +
                (item === header ? "text-amber-500" : "")
              }
              onClick={() => setHeader(item)}
            >
              {item === "logo" ? (
                <img
                  src="images/logo_remove.png"
                  alt=""
                  className="w-[69px] h-[69px]"
                />
              ) : (
                item
              )}
            </div>
          );
        })}
      </div>

      <div className="md:hidden block">
        <img src="images/logo_remove.png" alt=""  className="w-[50px] h-[50px]"/>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <SearchIcon className='md:block hidden md:hover:stroke-orange-500 stroke-black duration-300 cursor-pointer'/>
        {/* <CartIcon className='md:block hidden md:hover:stroke-orange-500 stroke-black duration-300 cursor-pointer'/>
        <MenuIcon className='md:hover:fill-orange-500  fill-black duration-300 cursor-pointer'/> */}
      </div>
    </div>
  );
};

export default Header;
