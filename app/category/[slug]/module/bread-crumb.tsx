"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

const Breadcrumb = ({ list }: any) => {
  const { slug } = useParams();
  const cate = list.find((item: any) => item.slug === slug);
  const { title } = cate;
  return (
    <div className="xl:aspect-[142/20] aspect-[3/1] mt-10 relative overflow-hidden">
      <Image
        src={
          "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/08/TA-blog-list.jpg"
        }
        alt="breadcrumb"
        height={200}
        width={1440}
        unoptimized
        className="w-full h-full object-cover"
      />
      <div className="absolute top-[50%] -translate-y-[50%] xl:left-20 left-4">
        <h1 className="text-black text-4xl font-bold">{title}</h1>
        <p className="text-gray-500 text-sm pt-2">Home - {title}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
