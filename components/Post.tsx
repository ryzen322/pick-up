import React from "react";
import Posts from "./Posts";
import { db } from "@/server/db";

const Post = async () => {
  const posts = await db.query.posts.findMany({
    with: {
      likes: true,
    },
    orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  });

  return (
    <ul className=" w-full flex flex-col mb-10">
      {posts.map((post) => (
        <Posts key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default Post;
