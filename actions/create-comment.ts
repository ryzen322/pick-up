"use server";

import { auth } from "@/auth";
import { db } from "@/server/db";
import { comments } from "@/server/schema";
import { CommentSchema, commentSchema } from "@/types";

export const createComment = async (comment: CommentSchema) => {
  const users = await auth();
  const email = users?.user?.email as string;
  const name = users?.user?.name as string;
  const image = users?.user?.image as string;
  if (!users) {
    return {
      message: `Please Login First`,
    };
  }

  const postFormValidation = commentSchema.safeParse(comment);
  if (!postFormValidation.success) {
    return {
      message: `Invalid Input `,
    };
  }

  try {
    const { comment, postId } = postFormValidation.data;

    const createdComment = await db
      .insert(comments)
      .values({ name, comment, email, CommentsId: postId, image })
      .returning();

    return {
      message: "Comment Created Successfully",
      comment: createdComment[0],
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice",
      succes: postFormValidation.error,
      error,
    };
  }
};
