import { HathaYoga, HotYogaIcon, PowerYogaIcon, YogaScultIcon } from "../svg";

const YogaPoses = () => {
  const item = [
    { icon: <PowerYogaIcon />, text: "Power Yoga" },
    { icon: <YogaScultIcon />, text: "Yoga Sculpt" },
    { icon: <HotYogaIcon />, text: "Hot Yoga" },
    { icon: <HathaYoga />, text: "Hatha Yoga" },
  ];
  return (
    <div className="text-center mt-20 w-full">
      <p className="text-3xl">
        A joyfull <span className="italic text-indigo-500">investment</span> in
        your body, <br /> mind and spirit
      </p>
      <div className="flex flex-col sm:flex-row gap-20 items-center justify-center mt-12 text-xl">
        {/* <div className="">
         <PowerYogaIcon className='hover:fill-black'/>
          <p className="mt-6">Power Yoga</p>
        </div>
        <div className="">
          <YogaScultIcon className='bg-white fill-white'/>
          <p className="mt-6">Yoga Sculpt</p>
        </div>
        <div className="">
         <HotYogaIcon/>
          <p className="mt-6">Hot Yoga</p>
        </div>
        <div className="">
         <HathaYoga/>
          <p className="mt-6">Hatha Yoga</p>
        </div> */}
        {item.map((item: any) => {
          return (
            <div className="">
              {/* <PowerYogaIcon className="hover:fill-black" /> */}
              {item.icon}
              <p className="mt-6 hover:text-orange-500 cursor-pointer duration-300">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YogaPoses;
