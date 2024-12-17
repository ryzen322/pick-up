import React, { Suspense } from "react";
import Likes from "./form/Likes";
import Comments from "./form/Comments";
import Retweet from "./form/Retweet";
import Send from "./form/Send";
import Svg from "./svg/svg";
import { InsterPost } from "@/server/schema";
import { formatDistanceToNow } from "date-fns";

const Posts = (props: InsterPost) => {
  const { name, title, createdAt, id } = props;

  const date = formatDistanceToNow(createdAt!, { addSuffix: true });

  return (
    <li className=" w-full flex gap-2 border-b border-stone-500/50 px-3 p-5">
      <div className=" h-9 w-9 shrink-0 rounded-full bg-stone-700/60  cursor-pointer"></div>
      <div className=" flex flex-col w-full">
        <div className=" flex gap-2 w-full items-center">
          <h1 className=" font-medium text-[14.5px] cursor-pointer hover:underline">
            {name}
          </h1>
          <p className=" text-xs text-stone-500 font-normal">{date}</p>

          <button className=" ml-auto">
            <Svg
              size="size-5"
              icon="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </button>
        </div>
        {/* title */}
        <p className=" text-[15px] leading-5 ">{title}</p>
        {/* end title */}
        <div className=" w-full flex items-center gap-6 py-2 mt-3">
          <Likes />
          <Suspense fallback={<p>loading....</p>}>
            <Comments id={id!} />
          </Suspense>
          <Retweet />
          <Send />
        </div>
      </div>
    </li>
  );
};

export default Posts;
