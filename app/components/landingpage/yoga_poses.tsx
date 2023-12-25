import { HathaYoga, HotYogaIcon, PowerYogaIcon, YogaScultIcon } from "../svg";

const YogaPoses = () => {
  return (
    <div className="text-center mt-20 w-full md:px-0 px-10">
      <p className="text-3xl">
        A joyfull <span className="italic text-indigo-500">investment</span> in
        your body, <br /> mind and spirit
      </p>
      <div className="group flex flex-col sm:flex-row md:gap-20 gap-10 items-center justify-center mt-12 text-xl">
        <div className="">
         <PowerYogaIcon className='fill-[#F47730] hover:fill-[#4054B2] duration-300'/>
          <p className="md:mt-6 mt-3">Power Yoga</p>
        </div>
        <div className="">
          <YogaScultIcon className='fill-[#F47730] hover:fill-[#4054B2] duration-300'/>
          <p className="md:mt-6 mt-3">Yoga Sculpt</p>
        </div>
        <div className="">
         <HotYogaIcon className="fill-[#F47730] hover:fill-[#4054B2] duration-300 "/>
          <p className="md:mt-6 mt-3">Hot Yoga</p>
        </div>
        <div className="">
         <HathaYoga className='fill-[#F47730]  hover:fill-[#4054B2] duration-300'/>
          <p className="md:mt-6 mt-3">Hatha Yoga</p>
        </div>
        {/* {item.map((item: any) => {
          return (
            <div className="group">
              <PowerYogaIcon className="hover:fill-black" />
              <p className=" "> {item.icon}</p>
             
              <p className="mt-6 hover:text-orange-500 cursor-pointer duration-300 ">{item.text}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default YogaPoses;
