'use client';

import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  imageSrc: string;
  title: string;
  date: string;
}

const BlogPost: React.FC<Props> = ({ id, date, imageSrc, title }) => {
  return (
    <div
      className="col-span-1   bg-white rounded-xl shadow-md cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-t-xl
            "
        >
          <Link href={"/post/"+id}>
          <Image
            src={imageSrc}
            width={300} height={200} alt={""} unoptimized={true}
            className="w-full  mb-2 -mt-10 "
          />
          </Link>
        </div>
        <div className="font-normal text-[#cb1670] px-2 text-sm">
        {date}
        </div>
        <h2 className=" text-xl mb-2 px-2 font-bold" >{title}</h2>
      </div>
    </div>
  );
}

export default BlogPost;