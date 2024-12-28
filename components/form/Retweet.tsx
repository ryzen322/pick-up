import React from "react";
import { Button } from "../ui/button";
import { Repeat2 } from "lucide-react";
import AnimatedCounter from "../ui/animate-number";

const Retweet = () => {
  const totalLikes = 100;
  return (
    <Button
      type="submit"
      variant={"ghost"}
      className=" flex items-center gap-1 cursor-pointer text-left group h-7"
    >
      <Repeat2 size={18} fill="white" stroke="black" strokeWidth={1.8} />
      <p className="text-xs items-center relative text-black/80  font-mono  group-hover:no-underline">
        <AnimatedCounter from={totalLikes} to={totalLikes} />
      </p>
    </Button>
  );
};

export default Retweet;
