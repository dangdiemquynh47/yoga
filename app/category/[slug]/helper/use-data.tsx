import { configSWR } from "@/libs/axios";
import useSWR from "swr";

const useData = () => {
  const { data, isLoading, error, mutate } = useSWR(
    "/items/post?fields=*,category.*&sort=-date_created",
    configSWR
  );

  const listData = data?.data || [];

  return {
    listData,
    isLoading,
    error,
    mutate,
  };
};

export default useData;
