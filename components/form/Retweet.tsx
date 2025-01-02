"use client";
import React from "react";
import { Button } from "../ui/button";
import { Repeat2 } from "lucide-react";
import AnimatedCounter from "../ui/animate-number";
import { useRetweet } from "@/server/api/queries";
import { useSession } from "@/app/SessionProvider";
import { isExistTheUser } from "@/hooks/isLiked";
import { useLikeMutation } from "@/actions/mutation/useLikeMutation";
import { redirect } from "next/navigation";

const Retweet = ({ userId }: { userId: number }) => {
  const user = useSession();
  const { data } = useRetweet(userId);
  const retweets = data?.map((item) => item.email);
  const retweet = isExistTheUser(retweets, user.email);
  console.log(retweet);
  const isRetweet = data?.find((item) => item.email === user.email)?.id;

  const mutation = useLikeMutation(
    userId,
    retweet ? "unretweets" : "retweets",
    isRetweet
  );

  const totalRetweet = data?.length ? data.length : 0;

  const onSumbit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (Object.keys(user).length === 0) {
      redirect("api/auth/signin");
    }
    mutation.mutate();
  };

  return (
    <Button
      type="submit"
      variant={"ghost"}
      className=" flex items-center gap-1 cursor-pointer text-left group h-7"
      onClick={onSumbit}
    >
      <Repeat2
        size={18}
        fill="white"
        strokeWidth={1.8}
        color={`${retweet ? "blue" : "black"}`}
      />
      <p className="text-xs items-center relative text-black/80  font-mono  group-hover:no-underline">
        <AnimatedCounter from={0} to={totalRetweet} />
      </p>
    </Button>
  );
};

export default Retweet;
