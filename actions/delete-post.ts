"use server";

import { auth } from "@/auth";
import { db } from "@/server/db";
import { posts } from "@/server/schema";
import { eq } from "drizzle-orm";

export const deletePost = async (userId: number) => {
  const users = await auth();
  if (!users) {
    return {
      message: `Please Login First`,
      success: true,
    };
  }
  try {
    const deletedPost = await db
      .delete(posts)
      .where(eq(posts.id, Number(userId)))
      .returning();

    return {
      message: "succesfully deleted",
      deletedPost: deletedPost[0],
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice",
      success: true,
      error,
    };
  }
};
