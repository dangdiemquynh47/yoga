import { ArrowLeftIcon } from "@/app/components/svg";
import { axiosInstance } from "@/libs/axios";
import { renderImageById } from "@/libs/helper";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import SlideSlugBlog from "../slide_slug_blog";

export default async function Home({ params }: any) {
  const { slug } = params;
  const post = await axiosInstance.get(
    "/items/post?fields=*,images.*.*&filter[slug][_eq]=" + slug
  );
  const blog = post.data[0];
  
  return (
    <div className="pt-6">
      <div className="aspect-[3/1] xl:h-full md:h-[60vh] h-[50vh] w-full overflow-hidden relative ">
        <Image
          src={renderImageById(blog.thumbnail, "123")}
          className="w-full object-cover h-full move-bg"
          alt=""
          width={1280}
          height={500}
        />
      </div>

      <div className="md:p-20 p-6 pb-0">
        <SlideSlugBlog blog={blog} />
        <div className="pt-14 md:px-40">
          <p className="text-title text-4xl font-bold">{blog.title}</p>
          <div className="h-[3px] w-[300px] bg-primary mt-4"></div>
          <p
            className="pt-10 text-table"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const title = "Blog - slug";
  const des = "Des";
  return {
    title: title,
    description: des,
    openGraph: {
      title: title,
      description: des,
      images: ["/images/malayoga/IMG_0802.jpg"],
    },
  };
}
