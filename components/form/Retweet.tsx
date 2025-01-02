"use client";
import React from "react";
import { Button } from "../ui/button";
import { Repeat2 } from "lucide-react";
import AnimatedCounter from "../ui/animate-number";
import { useRetweet } from "@/server/api/queries";

const Retweet = ({ userId }: { userId: number }) => {
  const { data } = useRetweet(userId);

  return (
    <Button
      type="submit"
      variant={"ghost"}
      className=" flex items-center gap-1 cursor-pointer text-left group h-7"
    >
      <Repeat2 size={18} fill="white" stroke="black" strokeWidth={1.8} />
      <p className="text-xs items-center relative text-black/80  font-mono  group-hover:no-underline">
        <AnimatedCounter from={0} to={data?.length as number} />
      </p>
    </Button>
  );
};

export default Retweet;
