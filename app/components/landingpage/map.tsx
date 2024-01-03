const MapStudio = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-20 justify-between sm:px-40 px-8 w-full">
      <div className="">
        <img src="" alt="" />
      </div>
      <div className="">
        <p className="text-center text-4xl text-title">
          Yoga studio{" "}
          <span className="italic text-indigo-500">San Francisco</span>
        </p>
        <div className="text-table grid sm:grid-cols-2 grid-cols-1 gap-8 pt-6 w-full justify-between">
          <div className="">
            <p>
              2nd floor, 50 Nguyễn <br /> Văn Nguyễn, Tân Định, <br />Quận 1
            </p>
          </div>
          <div className="">
            <p>Phone: +85 (0) 225 639</p>
            <p>Cell: +85 (0) 225 639</p>
            <p>namaste@qodeinteractive.com</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-10 w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="border-secondary focus:outline-none focus:border-orange-400 border-[0.5px] border-solid py-3 px-5"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="border-secondary focus:outline-none focus:border-orange-400 border-[0.5px] border-solid py-3 px-5"
          />
        </div>
        <div className="w-full">
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="resize-none py-3 px-5 h-[154px] w-full mt-6 border-secondary focus:outline-none focus:border-orange-400 border-[0.5px] border-solid"
          ></textarea>
        </div>
        {/* <button className="text-sm mt-8 px-14 py-3 bg-orange-100 text-orange-500">
          SUBMIT
        </button> */}
        <div className="mt-8 flex flex-col gap-6 text-7xl text-white">
          <div className="group flex items-center justify-center gap-2 py-4 bg-button w-fit overflow-hidden">
            <div className="h-[1px] w-8 group-hover:-translate-x-[14px] duration-300 bg-primary"></div>
            <button className="text-primary text-[12px] px-4">SUBMIT</button>
            <div className="h-[1px] w-8 group-hover:translate-x-[14px] duration-300 bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapStudio;
