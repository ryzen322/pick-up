import { db } from "./db";

export const likes = async (userId: number) => {
  return await db.query.likes.findMany({
    where: (likes, { eq }) => eq(likes.likesId, userId),
  });
};

export const comments = async (userId: number) => {
  return await db.query.comments.findMany({
    where: (comments, { eq }) => eq(comments.CommentsId, userId),
  });
};
