import dayjs from "dayjs";
import { axiosInstance } from "@/libs/axios";
import { renderImageById } from "@/libs/helper";
import Star from "@/app/blogs/star";
import Link from "next/link";

const Blog = async () => {
  const blog = await axiosInstance.get("/items/post?field=*");
  const list = blog.data || [];

  return (
    <div id="blogs" className="md:p-40 pt-20 pb-60 px-8 bg-[#fbf5e8] w-full relative">
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
        <br className="md:hidden block" /> community
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-1 md:gap-x-16 gap-x-20 pt-10">
        {list.map((item: any, index: number) => {
          const href = `/blogs/${item.slug}`;
          const position = (index + 1) % 3 
          const active = position  % 2 == 0 && position > 0          
          return (
              <div
                className={
                  "w-full h-full flex flex-col items-center justify-center " +
                  (active && "md:translate-y-20 ")
                }
                key={item.description + index}
              >
                <p className="w-fit px-5 text-orange-500 translate-y-[50%] z-10 py-1 bg-white">
                  {dayjs(item.date_created).format("DD/MM/YYYY")}
                </p>
                <div className="cursor-pointer h-full w-full overflow-hidden bg-white">
                  <img
                    src={renderImageById(item.thumbnail)}
                    alt=""
                    className="duration-300 scale-105 hover:scale-100 h-full w-full object-cover"
                  />
                </div>
                <Link href={href}>
                <div className="pt-10 flex flex-col items-center justify-center w-full">
                  <p className="text-3xl text-center hover:text-amber-500 duration-300 cursor-pointer text-title  min-h-[72px] w-full truncate-2">
                    {item.title}
                  </p>
                  <p className="text-center pt-6 truncate-3">{item.description}</p>
                </div>
                </Link>
              </div>
          
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
