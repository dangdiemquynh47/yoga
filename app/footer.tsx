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
      <div className="flex sm:flex-row flex-col items-center justify-center sm:translate-y-[50%] ">
        {img.map((item: any) => {
          return (
            <div className="">
              <img src={"/images/" + item} alt="" className="w-[216px]" />
            </div>
          );
        })}
      </div>
      <div className="bg-rose-50/90 sm:px-[250px] pb-[120px] pt-[240px] w-full">
        <div className="items-center flex justify-center pb-10">
          <img src="/images/Logo-img1.png" alt="" className="w-20 h-20" />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-center items-center flex flex-col gap-4 text-sm">
            <p>HOME</p>
            <p>ABOUT ME</p>
            <p>CONTACT</p>
          </div>
          <div className="items-center flex flex-col gap-8">
            <p className="text-3xl">Subsrcibe to our newsletter</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Email"
                className=" px-5 py-3 outline-none w-[400px]"
              />
              <div className="bg-amber-50/90 text-amber-500 px-10 pt-3">
                SEND
              </div>
            </div>
            <div className="flex gap-6">
              <FacebookIcon />
              <InstagramIcon />
              <YoutubeIcon />
            </div>
          </div>
          <div className="text-center items-center flex flex-col gap-4 text-sm">
            <p>CLASSES</p>
            <p>BLOG</p>
            <p>LANDING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
