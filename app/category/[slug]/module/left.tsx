"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { renderImageById } from "@/libs/helper";
import Image from "next/image";
import { countPostsByCategory } from "../helper/func";
import useData from "../helper/use-data";
import { useEffect } from "react";

const MenuLeftCategorires = ({ categories }: any) => {
  const { listData, mutate }: any = useData();
  const { slug } = useParams();
  const cate = categories.find((item: any) => item.slug === slug);
  const { title, thumbnail, description } = cate;

  if (!listData || listData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-neu-7 text-black sticky top-0 left-0">
      <div className="aspect-[5/7] relative">
        <Image
          src={renderImageById(thumbnail)}
          alt={title}
          width={250}
          height={350}
          className="w-full h-full object-cover rounded-tr-[150px] shadow-md"
        />
      </div>
      <p className="text-neu-1 text-3xl leading-5 font-bold pt-10 uppercase">
        {title}
      </p>
      <p className="text-neu-1 text-sm leading-5 font-normal pt-6 text-justify">
        {description}
      </p>
      <div className="pt-20">
        <div className="flex flex-col gap-2">
          <p className="text-neu-1 text-3xl leading-5 font-bold pt-10 uppercase">
            Categories
          </p>
          <div className="flex flex-col gap-2 pt-6">
            {categories.map((item: any, index: number) => {
              const { title } = item;
              const result = countPostsByCategory(listData);
              const countPost = result.find(
                (item: any) => item.title === title
              );
              return (
                <Link href={"/category/" + item.slug} key={item.id}>
                  <p className="text-neu-1 text-sm leading-5 font-normal">
                    {item.title} - ({countPost?.count})
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLeftCategorires;
