import { dateToString } from "@/lib/utils";
import { CommentsType } from "@/server/schema";
import { Heart, MessageCircle, Plus, RotateCcw, Send } from "lucide-react";
import React from "react";

const Comments = (props: CommentsType) => {
  const { name, createdAt, comment } = props;

  return (
    <li className=" flex gap-2 border-b border-stone-500/50 py-3">
      <div className=" h-9 w-9 shrink-0 rounded-full flex items-center justify-center cursor-pointer mt-[7px] border  relative">
        <div className=" h-full w-full relative rounded-full overflow-hidden bg-stone-600">
          {/* <AvatarProfile name={name} image={image!} /> */}
        </div>
        <div className=" h-4 w-4 absolute rounded-full right-0 bottom-[-4px] ring-1 ring-white bg-black flex items-center justify-center">
          <Plus color="#ffffff" />
        </div>
      </div>
      <div className=" flex-1 flex flex-col mt-1">
        <div className=" flex items-center gap-1">
          <h1 className=" text-sm font-medium">{name}</h1>
          <p className=" text-xs text-stone-400 font-light">
            {dateToString(createdAt)}
          </p>
        </div>
        <p className=" text-[15px] font-normal">{comment}</p>
        <div className=" h-5 max-w-[13rem] mt-4 grid grid-cols-4 items-center gap-1">
          <div className=" flex items-center gap-1 cursor-pointer">
            <Heart size={18} />
            <p className=" text-sm">1</p>
          </div>
          <div className=" flex items-center gap-1 cursor-pointer">
            <MessageCircle size={18} />
            <p className=" text-sm">1</p>
          </div>
          <div className=" flex items-center gap-1 cursor-pointer">
            <RotateCcw size={18} />
            <p className=" text-sm">1</p>
          </div>
          <div className=" flex items-center gap-1 cursor-pointer">
            <Send size={18} />
            <p className=" text-sm">1</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Comments;
