import Link from "next/link";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./components/svg";

const Footer = () => {
  const img = [
    "IMG_0896-2.jpg",
    "IMG_0918-2.jpg",
    "IMG_1024-2.jpg",
    // "IMG_0989-2.jpg",
    "IMG_0930-2.jpg",
    "IMG_0975-2.jpg",
  ];
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col items-center justify-center md:translate-y-[50%] translate-y-[10%] md:gap-10">
        {img.map((item: any, index: number) => {
          return (
            <div className="" key={item + index}>
              <img
                src={"/images/malayoga/" + item}
                alt=""
                className="w-[216px] object-cover aspect-square"
              />
            </div>
          );
        })}
      </div>
      <div className="bg-[#fbf5e8] lg:px-[250px] sm:px-10 pb-[120px] pt-[240px] w-full">
        <div className="items-center flex justify-center pb-10">
          <Link href={"/"}>
            <img
              src="/images/logo-remove-bg.png"
              alt=""
              className="w-20 h-20"
            />
          </Link>
        </div>
        <div className="flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center">
          <div className="md:order-first order-1 flex flex-row md:flex-col text-center items-center md:gap-4 gap-10 text-[12px]">
            <Link href={"/" + "#home"}>
              <p className="hover:text-orange-500 cursor-pointer duration-300">
                HOME
              </p>
            </Link>
            <Link href={"/" + "#classes"}>
              <p
                id=" "
                className="hover:text-orange-500 cursor-pointer duration-300"
              >
                CLASSES
              </p>
            </Link>
            <Link href={"/" + "#aboutme"}>
              <p
                id="aboutme"
                className="hover:text-orange-500 cursor-pointer duration-300"
              >
                ABOUT ME
              </p>
            </Link>
          </div>
          <div className="items-center flex flex-col gap-8 ">
            <p className="md:text-3xl text-2xl text-title">
              Subscribe to our newsletter
            </p>
            <div className="flex md:flex-row flex-col">
              <input
                type="text"
                placeholder="Email"
                className=" px-5 py-2 outline-none md:w-[400px] w-[320px]"
              />
              <div className="md:w-fit w-[200px] md:mt-0 mt-4 h-10 mx-auto bg-button flex gap-4 items-center justify-center group overflow-hidden ">
                <div className="h-[1px] w-6 bg-white group-hover:-translate-x-[50%] duration-300"></div>
                <p className="text-[12px] px-5 text-white">SEND</p>
                <div className="h-[1px] w-6 bg-white group-hover:translate-x-[50%] duration-300"></div>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <Link
                target="_blank"
                href="https://www.facebook.com/mala.yoga.studio"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="md:hover:fill-orange-500 duration-300 cursor-pointer -mx-2" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/mala.yoga.studio?igsh=MTJvcWZienY0emRkOQ=="
                rel="noopener noreferrer"
              >
                <InstagramIcon className="md:hover:stroke-orange-500 duration-300 cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/@mala.yoga.studio"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="md:hover:stroke-orange-500 duration-300 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="text-center items-center flex flex-row md:flex-col md:gap-4 gap-10 text-[12px]">
            <Link href={"/" + "#schedules"}>
              <p className="hover:text-orange-500 cursor-pointer uppercase duration-300">
                Schedules
              </p>
            </Link>
            <Link href={"/" + "#blogs"}>
              <p className="hover:text-orange-500 cursor-pointer uppercase duration-300">
                Blogs
              </p>
            </Link>
            <Link href={"/" + "#contact"}>
              <p className="hover:text-orange-500 cursor-pointer uppercase duration-300">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
