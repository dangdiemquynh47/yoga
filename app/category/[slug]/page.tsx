import { axiosInstance } from "@/libs/axios";
import MenuLeftCategorires from "./module/menu-left";
import CardBlog from "@/app/blogs/card-blog";

const Page = async () => {
  const categories = await axiosInstance.get("/items/category?field=*");
  const list = categories.data || [];

  const blogs = await axiosInstance.get(
    "/items/post?field=*&sort=-date_created"
  );
  const blog = blogs.data || [];
  return (
    <div className="">
      <div className="bg-white min-h-screen pb-20">
        <div>
          <div className="flex xl:flex-row flex-col gap-6 container-full justify-center py-10 conatiner">
            <div className="w-full xl:w-3/12  px-1">
              <MenuLeftCategorires categories={list} />
            </div>
            <div className="w-full xl:w-6/12">
              {blog.map((item: any, index: number) => {
                return (
                  <div className="" key={item.title + index}>
                    <CardBlog data={item} />;
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
