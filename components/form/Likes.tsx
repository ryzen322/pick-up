import React from "react";
import Svg from "../svg/svg";
import { likePost } from "@/actions/like-post";
import { auth } from "@/auth";
import { ButtonForm } from "./ButtonForm";
import { getCascheLikes } from "@/server/queries";
import { unlikePost } from "@/actions/unlike-post";

const Likes = async ({ userId }: { userId: number }) => {
  const users = await auth();
  const email = users?.user?.email as string;
  const data = await getCascheLikes(userId);
  const like = data.map((item) => item.email);
  const isLike = like.includes(email);
  const liked = data.find((item) => item.email);
  const updatePostLikes = likePost.bind(null, userId);

  const onSumbit = async () => {
    "use server";

    if (liked) {
      await unlikePost(liked.id);
    }
    if (liked === undefined) {
      await updatePostLikes();
    }
  };

  return (
    <form className=" flex items-center gap-1 cursor-pointer" action={onSumbit}>
      <ButtonForm
        type="submit"
        className=" h-8 rounded-lg text-white font-medium text-center flex items-center gap-1"
      >
        <Svg
          size="size-5"
          icon="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          fill={`${isLike ? "#fa383e" : ""}`}
        />
        <p className="text-xs items-center relative text-black/80">
          {like.length}
        </p>
      </ButtonForm>
    </form>
  );
};

export default Likes;
