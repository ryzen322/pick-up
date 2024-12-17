import { auth } from "@/auth";
import React from "react";

const PostForm = async () => {
  const user = await auth();
  return (
    <div className=" hidden sm:flex items-center gap-2 h-20 w-full  px-4 border-b border-stone-300">
      <div className=" h-10 w-10 bg-black/30 rounded-full overflow-hidden">
        <img
          src={user?.user?.image ? user?.user?.image : undefined}
          alt=""
          className=" w-full h-full object-contain"
        />
      </div>
      <input
        type="text"
        placeholder="What's new?"
        className=" placeholder:text-sm placeholder:font-semibold placeholder:text-stone-400/85 outline-none"
      />
      <button className=" text-black ml-auto py-1 px-4 border border-stone-300 rounded-lg">
        Post
      </button>
    </div>
  );
};

export default PostForm;
