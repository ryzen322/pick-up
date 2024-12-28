"use client";
import Likes from "./form/Likes";
import Comments from "./form/Comments";
import Retweet from "./form/Retweet";
import Send from "./form/Send";
import { PostsType } from "@/server/schema";
// import AvatarProfile from "./AvatarProfile";
import { PopoverDemo } from "./form/Pop-over";
import { HoverAvatar } from "./HoverAvatar";
import { useRouter } from "next/navigation";
import { dateToString } from "@/lib/utils";
import AvatarProfile from "./AvatarProfile";

const Posts = (props: PostsType) => {
  const { name, title, createdAt, content, id, image } = props;
  const router = useRouter();

  return (
    <li
      className=" w-full flex gap-2 border-b border-stone-500/50 px-3 py-2 cursor-pointer  sm:py-3 sm:px-4"
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/posts/${id}`, { scroll: false });
      }}
    >
      <div className=" h-9 w-9 shrink-0 rounded-full flex items-center justify-center cursor-pointer overflow-hidden mt-[7px] border border-black">
        <AvatarProfile name={name} image={image!} />
      </div>
      <div className=" flex flex-col w-full">
        <div className=" flex gap-2 w-full items-center">
          <h1 className=" font-medium text-[13px] cursor-pointer hover:underline">
            <HoverAvatar name={name} />
          </h1>
          <p className="  text-[10px] text-stone-500 font-normal">
            {dateToString(createdAt)}
          </p>

          <div className=" ml-auto ">
            <PopoverDemo />
          </div>
        </div>
        {/* title */}
        <p className=" text-xs leading-5 max-w-[24rem] sm:text-[13px] relative bottom-[2px]">
          {title}
        </p>
        <p className=" text-xs mt-1">{content}</p>
        {/* end title */}
        <div
          className=" w-full grid grid-cols-4 items-center gap-1 max-w-[13rem] mt-2"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Likes userId={id!} />
          <Comments {...props} />
          <Retweet />
          <Send />
        </div>
      </div>
    </li>
  );
};

export default Posts;
