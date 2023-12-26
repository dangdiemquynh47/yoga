import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./components/svg";

const Footer = () => {
  const img = [
    "footer-1.jpg",
    "footer-2.jpg",
    "footer-3.jpg",
    "footer-4.jpg",
    "footer-5.jpg",
    "footer-6.jpg"
  ];
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col items-center justify-center sm:translate-y-[50%] ">
        {img.map((item: any) => {
          return (
            <div className="" key={item}>
              <img src={"/images/" + item} alt="" className="w-[216px]" />
            </div>
          );
        })}
      </div>
      <div className="bg-[url('/images/bg.jpg')] sm:px-[250px] pb-[120px] pt-[240px] w-full">
        <div className="items-center flex justify-center pb-10">
          <img src="/images/Logo-img1.png" alt="" className="w-20 h-20" />
        </div>
        <div className="flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center">
          <div className="md:order-first order-1 flex flex-row md:flex-col text-center items-center md:gap-4 gap-10 text-[12px]">
            <p className="hover:text-orange-500 cursor-pointer">HOME</p>
            <p className="hover:text-orange-500 cursor-pointer">ABOUT ME</p>
            <p className="hover:text-orange-500 cursor-pointer">CONTACT</p>
          </div>
          <div className="items-center flex flex-col gap-8 ">
            <p className="md:text-3xl text-2xl text-title">Subsrcibe to our newsletter</p>
            <div className="flex md:flex-row flex-col">
              <input
                type="text"
                placeholder="Email"
                className=" px-5 py-2 outline-none md:w-[400px] w-[320px]"
              />
              <div className="md:w-fit w-[200px] md:mt-0 mt-4 h-10 mx-auto bg-button flex gap-4 items-center justify-center group overflow-hidden ">
                <div className="h-[1px] w-6 bg-primary group-hover:-translate-x-[50%] duration-300"></div>
                <p className="text-[12px] px-5 text-primary">SEND</p>
                <div className="h-[1px] w-6 bg-primary group-hover:translate-x-[50%] duration-300"></div>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <FacebookIcon className='md:hover:fill-orange-500 duration-300 cursor-pointer'/>
              <InstagramIcon className='md:hover:stroke-orange-500 duration-300 cursor-pointer'/>
              <YoutubeIcon className='md:hover:stroke-orange-500 duration-300 cursor-pointer'/>
            </div>
          </div>
          <div className="text-center items-center flex flex-row md:flex-col md:gap-4 gap-10 text-[12px]">
            <p className="hover:text-orange-500 cursor-pointer">CLASSES</p>
            <p className="hover:text-orange-500 cursor-pointer">BLOG</p>
            <p className="hover:text-orange-500 cursor-pointer">LANDING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
