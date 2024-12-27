"use client";

import React from "react";
import { Button } from "./ui/button";
import { Bookmark, ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const PostHeader = () => {
  const router = useRouter();

  return (
    <header className=" w-full flex justify-between items-center">
      <Button
        variant={"ghost"}
        className=" flex items-center gap-1"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon />
        <p>Back</p>
      </Button>
      <div className=" flex flex-col items-center">
        <p className=" text-sm font-bold">Post</p>
        <p className=" text-xs text-stone-500 font-semibold">14k Views</p>
      </div>
      <Button variant={"ghost"}>
        <Bookmark />
      </Button>
    </header>
  );
};

export default PostHeader;
