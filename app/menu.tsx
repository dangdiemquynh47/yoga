"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
  const [header, setHeader] = useState("");

  return (
    <div className="sm:ml-0 ml-auto">
      <div className="sm:block hidden">
        <MenuBrowser setHeader={setHeader} header={header} />
      </div>
      <div className="sm:hidden block">
        <MenuMobile setHeader={setHeader} header={header} />
      </div>
    </div>
  );
};

export default Menu;

const MenuBrowser = ({ header, setHeader }: any) => {
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
    <div className="w-full sm:grid hidden md:grid-cols-7 xl:px-28 md:px-2 grow hidden items-center justify-center">
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
  );
};

const MenuMobile = ({ header, setHeader }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menu = [
    { title: "Home", url: "/" },
    { title: "Classes ", url: "#classes " },
    { title: "About Me", url: "#aboutme" },
    { title: "Schedules", url: "#schedules" },
    { title: "Blogs", url: "#blogs" },
    { title: "Contact Us", url: "#contact" },
  ];

  const [_, toggle]: any = UseBodyScrollBlock();

  const openMenuMobile = () => {
    toggle();
    setOpenMenu(!openMenu);
  };
  return (
    <div className="flex">
      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            initial={{ x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: -500 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={
              "z-[11112] bg-white px-5 lg:gap-1 gap-4 flex absolute top-0 left-0 flex-col h-screen  w-screen overflow-y-auto "
            }
          >
            <div className="ml-auto mt-5" onClick={openMenuMobile}>
              <Cancel01Icon className="w-6 h-6 fill-black" />
            </div>
            {menu.map((item: any) => {
              return (
                <div className="flex " key={item.title}>
                  <Link href={"/" + item.url} onClick={openMenuMobile}>
                    <div
                      className={
                        "cursor-pointer lg:text-[20px] duration-300 text-title italic hover:text-primary text-bold" +
                        (item.title === header ? "text-header" : "")
                      }
                      onClick={() => setHeader(item.title)}
                    >
                      <p className="text-xl font-bold w-full flex items-center justify-center">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="ml-auto" onClick={openMenuMobile}>
        <Menu01Icon className="w-6 h-6 fill-black" />
      </div>
    </div>
  );
};

const UseBodyScrollBlock = () => {
  const [isLocked, setIsLocked] = useState(false);
  useEffect(() => {
    const bodyStyle = document?.body?.style;
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked]);

  const toggle = () => {
    setIsLocked(!isLocked);
  };
  return [isLocked, toggle];
};

export const Menu01Icon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 19a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
    />
  </svg>
);

export const Cancel01Icon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <path
      d="M11.25.75L.75 11.25m0-10.5l10.5 10.5"
      stroke="#2B3242"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
