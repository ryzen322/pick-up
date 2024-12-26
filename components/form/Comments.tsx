import React from "react";
import { useComments } from "@/server/api/queries";
import { CommentDrawer } from "../CommentDrawer";
import { PostsType } from "@/server/schema";

const Comments = (props: PostsType) => {
  const { id: userId } = props;

  const { data } = useComments(userId);
  const totalLikes = data?.length ? data.length : 0;
  return <CommentDrawer totaComment={totalLikes} PostsType={{ ...props }} />;
};

export default Comments;
