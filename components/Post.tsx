"use client";

import { usePost } from "@/server/api/queries";
import Posts from "./Posts";

const Post = () => {
  const { data, status } = usePost();

  if (status === "error") {
    return (
      <p className=" text-center text-destructive">
        An error occured while loading posts.
      </p>
    );
  }

  return (
    <ul className=" w-full flex flex-col overflow-y-scroll max-h-[84dvh] sm:max-h-[78.9dvh]">
      {data?.map((post) => (
        <Posts key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default Post;
