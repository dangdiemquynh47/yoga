import { axiosClient } from "@/libs/axios";

const UseData = () => {
  const getDataBySlugCategory = async (id: any) => {
    const category = await axiosClient.get("/items/post?field=*,category.*&filter[category]=", id);
  };
  return getDataBySlugCategory;
};

export default UseData;
