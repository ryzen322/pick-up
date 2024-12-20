import React from "react";
import Posts from "./Posts";
import { getCachedPosts } from "@/server/queries";

const Post = async () => {
  const posts = await getCachedPosts();

  return (
    <ul className=" w-full flex flex-col mb-10">
      {posts.map((post) => (
        <Posts key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default Post;
