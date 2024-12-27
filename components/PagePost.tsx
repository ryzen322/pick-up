"use client";
import React from "react";
import PostHeader from "./PostHeader";
import Posts from "./Posts";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { PostComments } from "./PostComments";
import { usePostById } from "@/server/api/queries";
import { PostsType } from "@/server/schema";

const PagePost = ({ id }: { id: string }) => {
  const { data } = usePostById(Number(id));

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

  return (
    <div className=" w-full flex flex-col fl">
      <div className=" w-full h-full bg-white flex flex-col gap-1 py-2 px-1">
        <PostHeader />
        {data && <Posts {...post} />}
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

export default PagePost;
