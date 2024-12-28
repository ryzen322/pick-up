"use client";
import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Posts from "./Posts";
import { PostComments } from "./PostComments";
import { usePostById } from "@/server/api/queries";
import { PostsType } from "@/server/schema";
import PostHeader from "./PostHeader";

const PostSingle = ({ postId }: { postId: number }) => {
  const { data, status } = usePostById(postId);

  const post: PostsType = {
    name: data?.name as string,
    title: data?.title as string,
    createdAt: data?.createdAt as Date,
    content: data?.content as string,
    image: data?.image as string,
    id: data?.id as number,
    email: data?.email as string,
    updatedAt: data?.updatedAt as Date,
  };

  if (status === "pending") {
    return (
      <div className=" h-dvh w-full bg-black/70 fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center overflow-hidden"></div>
    );
  }

  return (
    <div className=" h-dvh w-full bg-black/70 fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center overflow-hidden">
      <div className=" w-full h-full bg-white flex flex-col gap-1 py-2 px-1 relative sm:rounded-lg sm:w-[80%] sm:h-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] 2xl:w-[35%]">
        <PostHeader />
        <Posts {...post} />
        <div className=" flex items-center justify-between py-3 p-2 border-b border-stone-500/50">
          <p className=" text-sm font-semibold">Replies</p>
          <Button variant={"link"} className=" max-h-7 flex items-center">
            <p className=" text-sm   text-stone-400 font-light">
              View activity
            </p>
            <ChevronRight color="#a8a29e" />
          </Button>
        </div>
        {data?.comments && <PostComments comments={data.comments} />}
      </div>
    </div>
  );
};

export default PostSingle;
