const HelpConfident = () => {
  const list = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Sed do eiumdod tempor incididunt ut labore",
    "Dolore magna aliqua. Ut enim ad minim veniam",
    "Quis nostrud exercitation ullamco laboris nisi",
  ];
  return (
    <div className="w-full px-10 md:px-20 2xl:px-60  md:p-[110px] pt-[110px] bg-[url('/images/bg.jpg')] relative">
      <p className="w-fit text-4xl pb-10 text-title">
        Hi! My name is <span className="italic text-indigo-500">Alisia</span>{" "}
        and I’m here to help <br /> you find the confidence you need to feel <br />{" "}
        <span className="italic text-indigo-500">amazing</span> in your body!
      </p>
      {list.map((item: any) => {
        return (
          <div className="flex gap-4 items-center pb-6" key={item}>
            <img src="/images/button.png" alt="" className="w-2 h-2" />
            <span>{item}</span>
          </div>
        );
      })}
      {/* <div className="border-[1px] border-solid border-amber-500 w-fit px-10 py-3 text-amber-500 text-md cursor-pointer mt-4">
        <p>READ MORE</p>
      </div> */}
      <div className="cursor-pointer mt-4 group flex items-center justify-center gap-2 py-4 w-fit overflow-hidden border-primary border-[1px] border-solid">
        <div className="h-[1px] w-6 group-hover:-translate-x-[14px] duration-300 bg-primary"></div>
        <button className="text-primary font-semibold text-[12px] px-4 text-md">READ MORE</button>
        <div className="h-[1px] w-6 group-hover:translate-x-[14px] duration-300 bg-primary"></div>
      </div>
      <img
        src="/images/helpconfident.jpg"
        alt=""
        className="relative md:translate-y-0 translate-y-[25%] md:absolute md:top-[110px] 2xl:right-60 md:right-20"
      />
    </div>
  );
};

export default HelpConfident;
