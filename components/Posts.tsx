import React from "react";
import Likes from "./form/Likes";
import Comments from "./form/Comments";
import Retweet from "./form/Retweet";
import Send from "./form/Send";
import Svg from "./svg/svg";

const Posts = () => {
  return (
    <li className=" w-full flex gap-2 border-b border-stone-500/50 p-4">
      <div className=" h-9 w-9 shrink-0 rounded-full bg-stone-700/60"></div>
      <div className=" flex flex-col w-full">
        <div className=" flex gap-2 w-full items-center">
          <h1 className=" font-medium text-[14.5px]">touchmyfeelings</h1>
          <p className=" text-[14.5px] text-stone-400 font-light">22h</p>

          <button className=" ml-auto">
            <Svg
              size="size-5"
              icon="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </button>
        </div>
        {/* title */}
        <p className=" text-[15px] leading-5">
          Pet peeve: mga tropang nireretuhan pa rin ng ibang babae yung mga
          pamilyado na 🤡
        </p>
        {/* end title */}
        <div className=" w-full flex items-center gap-6 py-2">
          <Likes />
          <Comments />
          <Retweet />
          <Send />
        </div>
      </div>
    </li>
  );
};

export default Posts;
