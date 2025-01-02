import { CommentsType } from "@/server/schema";
import Comments from "./Comments";

export const PostComments = ({
  comments,
}: {
  comments: CommentsType[] | undefined;
}) => {
  return (
    <ul className=" flex flex-col px-2 h-full ">
      {comments?.map((comment) => (
        <Comments key={comment.id} {...comment} />
      ))}
    </ul>
  );
};
