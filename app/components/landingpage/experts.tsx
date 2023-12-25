const Experts = () => {
  const experts = [
    { img: "experts-1.jpg", name: "Maria Peterson", des: "Meditation" },
    { img: "experts-2.jpg", name: "Yvette Goodman", des: "Yoga Therapist" },
    { img: "experts-3.jpg", name: "Lena Gronholm", des: "Pilates instructor" },
    { img: "experts-4.jpg", name: "Nadia Creswell", des: "Meditation" },
  ];
  return (
    <div className="w-full">
      <div className="md:px-14 px-8">
        <p className="text-center text-3xl">
          Meet the <span className="italic text-indigo-500">experts</span> that
          will guide you on your <br /> way to better everyday life
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-8 pt-16">
          {experts.map((item: any, index: number) => {
            return (
              <div className="text-center relative" key={item.img}>
                <div className="group">
                  <img
                    src={"images/" + item.img}
                    alt=""
                    className={
                      "w-full object-cover opacity-100 group-hover:opacity-0 duration-300 " +
                      (index % 2 !== 0 ? "h-[330px]" : "h-[400px]")
                    }
                  />
                  <div className={"px-10  absolute top-0 left-0 opacity-0 group-hover:opacity-100 text-black bg-rose-50/50 " +
                      (index % 2 !== 0 ? "h-[330px] pt-[104px]" : "h-[400px] pt-[184px]")}>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                  </div>
                </div>
                <p className="text-3xl pt-8">{item.name}</p>
                <p className="text-lg italic text-indigo-500 pb-20">
                  {item.des}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experts;
