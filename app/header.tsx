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
    { title: "Home", url: "/" },
    { title: "Classes ", url: "#classes " },
    { title: "About Me", url: "#aboutme" },
    { title: "logo", url: "/" },
    { title: "Schedules", url: "#schedules" },
    { title: "Blogs", url: "#blogs" },
    { title: "Contact Us", url: "#contact" },
  ];
  return (
    <div
      id="home"
      className="mx-auto w-full md:h-[80px] h-fit lg:px-[82px] md:px-8 sticky top-0 z-50 shadow-md px-4 bg-[#fedfcd] text-black flex flex-row items-center sm:justify-between justify-center"
    >
      <div className="flex-none">
        <div className="xl:flex hidden gap-4 items-center justify-center">
          <a
            target="_blank"
            href="https://www.facebook.com/mala.yoga.studio"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="md:hover:fill-orange-500 duration-300 cursor-pointer -mx-2" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/mala.yoga.studio?igsh=MTJvcWZienY0emRkOQ=="
            rel="noopener noreferrer"
          >
            <InstagramIcon className="md:hover:stroke-orange-500 duration-300 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/mala.yoga.studio"
            rel="noopener noreferrer"
          >
            <YoutubeIcon className="md:hover:stroke-orange-500 duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="sm:grid hidden md:grid-cols-7 xl:px-28 md:px-2 grow hidden items-center justify-center">
        {menu.map((item: any) => {
          return (
            <Link href={item.url} key={item.title}>
              <div
                className={
                  "cursor-pointer lg:text-[20px] duration-300 text-title italic hover:text-primary text-bold" +
                  (item.title === header ? "text-header" : "")
                }
                onClick={() => setHeader(item.title)}
              >
                {item.title === "logo" ? (
                  <div className="w-full flex items-center justify-center">
                    <img
                      src="/images/logo-remove-bg.png"
                      alt=""
                      className="w-[69px] h-[69px]"
                    />
                  </div>
                ) : (
                  <p className="w-full flex items-center justify-center">
                    {item.title}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <Link href={"/"}>
        <div className="md:hidden block">
          <img
            src="/images/logo-remove-bg.png"
            alt=""
            className="w-[50px] h-[50px]"
          />
        </div>
      </Link>

      {/* <div className="flex-none w-[104px]">
        <div className="flex gap-4 items-center justify-end min-w-[120px]">
          <SearchIcon className=" md:hover:stroke-orange-500 stroke-black duration-300 cursor-pointer" />
          <CartIcon className='md:block hidden md:hover:stroke-orange-500 stroke-black duration-300 cursor-pointer'/>
        <MenuIcon className='md:hover:fill-orange-500  fill-black duration-300 cursor-pointer'/>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
