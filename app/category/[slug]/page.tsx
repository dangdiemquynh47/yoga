import { axiosInstance } from "@/libs/axios";
import MenuLeftCategorires from "./module/left";
import ContentRight from "./module/right";
import Breadcrumb from "./module/bread-crumb";

const Page = async () => {
  const categories = await axiosInstance.get("/items/category?field=*");
  const list_categories = categories.data || [];

  return (
    <div className="">
      <div className="bg-white min-h-screen pb-20">
        <Breadcrumb list={list_categories} />
        <div>
          <div className="flex sm:flex-row flex-col gap-20 justify-center xl:px-24 px-4 xl:py-20 py-10 relative">
            <div className="w-full sm:w-3/12">
              <div className=" sticky top-0">
                <MenuLeftCategorires categories={list_categories} />
              </div>
            </div>
            <div className="w-full sm:w-9/12">
              <ContentRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

export const revalidate = 60;
