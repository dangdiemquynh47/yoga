"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
interface IProps {
  categories: ICategory[];
}

export interface ICategory {
  title: string;
  slug: string;
  id: string;
  thumbnail: string;
  description: string;
  created_at: string;
  updated_at: string;
  parent_id: string;
  children: ICategory[];
}

const MenuLeftCategorires = ({ categories }: IProps) => {
  const params = useParams();
  const cate = categories.find((item: ICategory) => item.slug === params.slug);

  return (
    <div className="py-10 px-6 left-10 z-40 bg-neu-7 rounded-xl border-[5px] border-solid border-white shadow-md text-black">
      <p className="text-neu-1 text-xl leading-5 font-bold py-4">Mục lục</p>
      {categories.map((item: any, index) => {
        const active = item.id === cate?.id;
        const cls = active ? "text-white" : "";
        return (
          <Link href={"/category/" + item.slug} key={item.id}>
            <div className="py-2 relative px-2 my-2">
              {active && (
                <motion.div
                  layoutId="/tong-quan-ve-ielts/menu"
                  className="bg-primary absolute top-0 left-0 w-full h-full rounded-md"
                ></motion.div>
              )}
              <div className={"flex text-sm items-center relative z-10 " + cls}>
                {/* <span className="mr-2 font-bold duration-200">
                  <Icon className={active ? "fill-white" : "fill-primary"} />
                </span> */}
                <div className="duration-200">{item.title}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuLeftCategorires;
