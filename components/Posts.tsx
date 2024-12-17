import React from "react";
import Likes from "./form/Likes";
import Comments from "./form/Comments";
import Retweet from "./form/Retweet";
import Send from "./form/Send";

const Posts = () => {
  return (
    <li className=" w-full flex gap-2 border-b border-stone-500/50 p-3">
      <div className=" h-9 w-9 shrink-0 rounded-full bg-stone-700/60"></div>
      <div className=" flex flex-col w-full">
        <div className=" flex gap-2 w-full">
          <h1 className=" font-medium text-[14.5px]">touchmyfeelings</h1>
          <p className=" text-[14.5px] text-stone-400 font-light">22h</p>
        </div>
        {/* title */}
        <p className=" text-[15px] leading-5">
          Pet peeve: mga tropang nireretuhan pa rin ng ibang babae yung mga
          pamilyado na 🤡
        </p>
        {/* end title */}
        <div className=" w-full flex items-center gap-6 py-3">
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
