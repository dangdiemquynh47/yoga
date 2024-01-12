import { axiosInstance } from "@/libs/axios";
import { companyName, renderImageById } from "@/libs/helper";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Home({ params }: any) {
  const { slug } = params;
  const post = await axiosInstance.get("/items/post?filter[slug][_eq]=" + slug);
  const detail = post.data[0];
  console.log(detail);
  

  return (
    <div>
        
    </div>
  );
}

export const revalidate = 100; //revalidate every 10 seconds
