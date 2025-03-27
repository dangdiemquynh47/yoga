import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./components/svg";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <div
      id="home"
      className="mx-auto w-full md:h-[80px] h-[60px] lg:px-[82px] md:px-8 sticky top-0 z-50 shadow-md px-4 bg-[#fedfcd] text-black flex flex-row items-center justify-between"
    >
      <Link href={"/"} className="ml-0 md:hidden block">  
        <div className="">
          <img
            src="/images/logo-remove-bg.png"
            alt=""
            className="w-[50px] h-[50px]"
          />
        </div>
      </Link>

      <div className="xl:hidden sm:block hidden flex-none w-[60px]"></div>
      <div className="">
        <div className="xl:flex hidden gap-4 items-center justify-center">
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
      <Menu />

      <div className="sm:block hidden flex-none xl:w-[104px] w-[80px]">
        {/* <div className="flex gap-4 items-center justify-end min-w-[120px]">
          <SearchIcon className=" md:hover:stroke-orange-500 stroke-black duration-300 cursor-pointer" />
          <CartIcon className='md:block hidden md:hover:stroke-orange-500 stroke-black duration-300 cursor-pointer'/>
        <MenuIcon className='md:hover:fill-orange-500  fill-black duration-300 cursor-pointer'/>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
