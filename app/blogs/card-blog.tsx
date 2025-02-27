import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const CardBlog = ({ data }: any) => {
  // const user_created = data.user_created || { avatar: "c031e8dd-2b8f-4859-b80d-8be697aef30f", fullname: "IELTS 1984" };
//   const author = data?.author || data?.user_created;
//   const avatar = author.avatar;
//   const fullname = author?.fullname;
// console.log(data.title);

  return (
    <Link href={"/bai-viet/" + data.slug}>
      <div className={"flex flex-col md:flex-row group cursor-pointer "}>
        <div className="w-full bg-black md:w-4/12 aspect-video overflow-hidden relative rounded-xl border-[5px] border-white shadow-sm">
          {/* <ImageIE
            width={150}
            height={45}
            className="w-full h-full object-cover group-hover:scale-105 absolute duration-150 "
            src={data.thumbnail}
            alt=""
          /> */}
        </div>
        <div className="md:ml-3 w-full md:w-8/12 flex flex-col mt-3 md:mt-0">
          <div className="line-clamp-2 text black">{data.title}</div>
          <div className="text-xs text-black/50 mt-1 flex flex-wrap items-center gap-x-2 mb-3">
            <div className="w-6 h-6">
              {/* <ImageIE
                src={avatar}
                width={24}
                height={24}
                alt="avatar"
                className="rounded-full w-6 h-6 bg-slate-200"
              /> */}
            </div>
            {/* <span className="text-black md:text-md">{fullname}</span> */}
            <span className="block w-1 h-1 bg-primary rounded-full"></span>{" "}
            {dayjs(data.date_created).format("DD/MM/YYYY")}
          </div>
          <div className="line-clamp-2 md:text-[15px] xl:line-clamp-2 text-[12px] text-black/60 mt-auto ">
            {data.description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
