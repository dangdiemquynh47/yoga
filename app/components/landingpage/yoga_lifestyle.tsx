import dayjs from "dayjs";

const YogaLifeStyle = () => {
  const lifestyle = [
    {
      bigimg: "lifestyle-1.jpg",
      smallimg: "lotus.png",
      title: "Fall in Love With Hatha Yoga",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-2.jpg",
      smallimg: "hand.png",
      title: "Hatha Yoga New Mindset",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-3.jpg",
      smallimg: "zen.png",
      title: "How Does Hatha Yoga Work?",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-4.jpg",
      smallimg: "hand.png",
      title: "10 Things for Your Yoga needs",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-5.jpg",
      smallimg: "zen.png",
      title: "New Yoga Muscle Stretches",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
    {
      bigimg: "lifestyle-6.jpg",
      smallimg: "lotus.png",
      title: "Gain Overall Flexibility",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet",
    },
  ];
  return (
    <div className="sm:p-40 p-8 bg-rose-50/50 w-full">
      <p className="text-center text-4xl">
        Explore the{" "}
        <span className="italic text-indigo-500">yoga lifestyle</span> and learn
        more <br /> about our community
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-16 pt-20">
        {lifestyle.map((item: any, index: number) => {
          return (
            <div
              className={
                "w-full flex flex-col items-center justify-center " +
                (index === 1 || index == 4 ? "mt-24" : "")
              }
              key={item.img}
            >
              <p className="w-fit px-5 text-orange-500 translate-y-[50%] py-1 bg-white">{dayjs("2019-01-25").format("MMMM DD, YYYY")}</p>
              <div className="transition duration-150 ease-out hover:ease-in cursor-pointer">
                <img src={"/images/" + item.bigimg} alt="" className="" />
              </div>
              <div className="pt-10 flex flex-col items-center justify-center">
                <img src={"/images/" + item.smallimg} alt="" className="" />
                <p className="text-3xl text-center pt-6 hover:text-amber-500 duration-300 cursor-pointer">
                  {item.title}
                </p>
                <p className="text-center pt-6">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YogaLifeStyle;
