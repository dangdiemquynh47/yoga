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
  console.log(header);

  const menu = ["HOME", "PAGES", "CLASSES", "logo", "BLOG", "SHOP", "LANDING"];
  return (
    <div className="w-full h-[103px] px-[82px] bg-rose-50/50 flex items-center justify-between">
      <div className="flex gap-4 items-center justify-center">
        <FacebookIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </div>
      <div className="flex gap-5 items-center justify-center">
        {menu.map((item: any) => {
          return (
            <div
              key={item}
              className={
                "cursor-pointer hover:text-amber-500 duration-300 " +
                (item === header ? "text-amber-500" : "")
              }
              onClick={() => setHeader(item)}
            >
              {item === "logo" ? (
                <img
                  src="images/Logo-img1.png"
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

      <div className="flex gap-4 items-center justify-center">
        <SearchIcon />
        <CartIcon />
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
