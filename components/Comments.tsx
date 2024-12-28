import { dateToString } from "@/lib/utils";
import { CommentsType } from "@/server/schema";
import { Heart, MessageCircle, Plus, Repeat2, Send } from "lucide-react";
import React from "react";
import AvatarProfile from "./AvatarProfile";
import { Button } from "./ui/button";

const Comments = (props: CommentsType) => {
  const { name, createdAt, comment, image } = props;
  return (
    <li className=" flex gap-2 border-b border-stone-500/50 py-3 last:mb-10">
      <div className=" h-9 w-9 shrink-0 rounded-full flex items-center justify-center cursor-pointer mt-[7px] border  relative">
        <div className=" h-full w-full relative rounded-full overflow-hidden bg-stone-600 flex items-center justify-center ">
          <AvatarProfile name={name} image={image!} />
        </div>
        <div className=" h-4 w-4 absolute rounded-full right-0 bottom-[-4px] ring-2 ring-white bg-black flex items-center justify-center">
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
          <Button
            variant={"link"}
            className=" flex items-center gap-1 cursor-pointer h-5"
          >
            <Heart size={18} />
            <p className=" text-sm">100</p>
          </Button>
          <Button
            variant={"link"}
            className=" flex items-center gap-1 cursor-pointer  h-5"
          >
            <MessageCircle size={18} />
            <p className=" text-sm">32</p>
          </Button>
          <Button
            variant={"link"}
            className=" flex items-center gap-1 cursor-pointer  h-5"
          >
            <Repeat2 size={18} />
            <p className=" text-sm">1k</p>
          </Button>
          <Button
            variant={"link"}
            className=" flex items-center gap-1 cursor-pointer  h-5"
          >
            <Send size={18} />
            <p className=" text-sm">2k</p>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Comments;
