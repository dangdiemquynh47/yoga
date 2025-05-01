"use client";
import { renderImageById } from "@/libs/helper";
import Image from "next/image";
import useData from "../helper/use-data";
import { useParams } from "next/navigation";
import Link from "next/link";
import dayjs from "dayjs";

const ContentRight = () => {
  const { listData }: any = useData();
  const { slug } = useParams();
  const cate = listData.filter((item: any) => item.category.slug === slug);

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-20">
      {cate.map((item: any, index: number) => {
        const { slug, id } = item;
        const position = (index + 1) % 3;
        const active = position % 2 == 0 && position > 0;        

        return (
          <Link href={`/blogs/${slug}`} key={id} className={active ? "pt-10 " : ""}>
            <CardPost item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default ContentRight;

const CardPost = ({ item, active }: any) => {
  const { title, thumbnail, description, date_created } = item;
  return (
    <div className={"w-full h-full "}>
      <div className="flex flex-col group">
        <div className="aspect-[7/9] overflow-hidden h-[400px] relative">
          <Image
            src={renderImageById(thumbnail)}
            alt={title}
            width={350}
            height={450}
            className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300"
          />
          <div className="absolute top-0 left-4 bg-white py-2 px-3 text-neu-1 text-sm leading-5 font-medium shadow-md">
            <p className="uppercase text-center !py-0">
              {dayjs(date_created).format("MMM")}
            </p>
            <p className="text-center !py-0">
              {dayjs(date_created).format("DD")}
            </p>
          </div>
        </div>
        <p className="pt-8 text-neu-1 text-sm leading-5 font-light">
          By Hien Thi
        </p>
        <p className="pt-4 text-neu-1 group-hover:text-amber-500 duration-300 text-2xl leading-7 font-semibold text-title">
          {title}
        </p>
        <p className="pt-4 text-neu-1 text-sm leading-5 font-light truncate-2">
          {description}
        </p>
      </div>
    </div>
  );
};
