const AboutMe = () => {
  const list = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Sed do eiumdod tempor incididunt ut labore",
    "Dolore magna aliqua. Ut enim ad minim veniam",
    "Quis nostrud exercitation ullamco laboris nisi",
  ];
  return (
    <div
      id="aboutme"
      className="w-full px-10 md:px-20 2xl:px-60 md:p-[110px] pt-[110px] bg-[#fbf5e8] relative"
    >
      <div className="">
        <p className="w-fit text-4xl pb-10 text-title w-[50%]">
          {/* Hi! My name is{" "}
        <span className="italic text-primary font-bold">Hien</span> and I’m here
        to help <br /> you find the confidence you need to feel <br />{" "}
        <span className="italic text-primary font-bold">amazing</span> in your
        body!  */}
          I am Hien Thi - Yoga Instructor <br /> Founder of MalaYoga
        </p>
      </div>
      <div className="">
        <p className="text-table lg:w-[40%] w-full text-md lg:min-h-[300px] lg:pb-0 pb-10">
          If you`re here and read a little about me, I believe the universe is
          connecting us. Surely you are also a Yogi/Yogini or the universe has
          sent a signal for you to touch your finger to touch Yoga. Hope my
          sharing will help you in this journey. Namaste!
        </p>
      </div>

      {/* {list.map((item: any) => {
        return (
          <div className="flex gap-4 items-center pb-6" key={item}>
            <img src="/images/button.png" alt="" className="w-2 h-2" />
            <span>{item}</span>
          </div>
        );
      })} */}
      {/* <div className="cursor-pointer mt-4 group flex items-center justify-center gap-2 py-4 w-fit overflow-hidden border-button border-[1px] border-solid">
        <div className="h-[1px] w-6 group-hover:-translate-x-[14px] duration-300 bg-button"></div>
        <button className="text-button font-semibold text-[12px] px-4 text-md">READ MORE</button>
        <div className="h-[1px] w-6 group-hover:translate-x-[14px] duration-300 bg-button"></div>
      </div> */}
      <img
        src="/images/malayoga/IMG_0598-crop.jpg"
        alt=""
        className="relative lg:translate-y-0 lg:translate-y-[25%] lg:absolute lg:top-[110px] 2xl:right-60 lg:right-20 rounded-sm lg:w-[470px] h-[651px] object-cover mx:auto w-full"
      />
    </div>
  );
};

export default AboutMe;
