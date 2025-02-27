import dayjs from "dayjs";
import { axiosInstance } from "@/libs/axios";
import { renderImageById } from "@/libs/helper";
import Star from "@/app/blogs/star";
import Link from "next/link";

const Category = async () => {
  const blog = await axiosInstance.get("/items/category?field=*");
  const list = blog.data || [];

  return (
    <div
      id="blogs"
      className="xl:p-40 lg:p-20 md:px-10 md:py-40 px-4 pt-20 pb-60 bg-[#fbf5e8] w-full relative"
    >
      <div className="pb-10 absolute top-0 left-[50%] md:-translate-y-[25%] -translate-y-[50%] -translate-x-[50%] md:-translate-x-[0]">
        <Star />
      </div>
      <p className="text-center text-4xl text-title">
        Explore the{" "}
        <span className="italic text-primary font-bold">
          yoga <br className="md:hidden block" /> lifestyle
        </span>{" "}
        and learn <br className="md:hidden block" />
        more <br className="hidden md:block" /> about our{" "}
        <br className="md:hidden block" />
        community
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-1 lg:gap-x-16 md:gap-x-6 lg:gap-x-20 pt-10">
        {list.map((item: any, index: number) => {
          const href = `/category/${item.slug}`;
          const position = (index + 1) % 3;
          const active = position % 2 == 0 && position > 0;
          return (
            <Link href={href} key={item.description + index}>
              <div
                className={
                  "w-full h-full flex flex-col items-center justify-center " +
                  (active && "md:translate-y-20 ")
                }
              >
                {/* <p className="w-fit px-5 text-orange-500 translate-y-[50%] z-10 py-1 bg-white">
                  {dayjs(item.date_created).format("DD/MM/YYYY")}
                </p> */}
                <div className="cursor-pointer h-full w-full overflow-hidden bg-white">
                  <img
                    src={renderImageById(item.thumbnail)}
                    alt=""
                    className="duration-300 scale-105 hover:scale-100 aspect-[2/3] w-full object-cover"
                  />
                </div>

                <div className="pt-10 flex flex-col items-center justify-center w-full">
                  <p className="text-3xl text-center hover:text-amber-500 duration-300 cursor-pointer text-title  min-h-[72px] w-full truncate-2">
                    {item.title}
                  </p>
                  <p className="text-center pt-6 truncate-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
