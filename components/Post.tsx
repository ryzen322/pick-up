import React from "react";
import Posts from "./Posts";
import { db } from "@/server/db";

const Post = async () => {
  const user = await db.query.posts.findMany({
    with: {
      comments: true,
    },
  });
  console.log(user);

  return (
    <ul className=" w-full flex flex-col">
      <Posts />
    </ul>
  );
};

export default Post;
