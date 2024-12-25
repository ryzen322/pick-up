"use server";
import { auth } from "@/auth";
import { db } from "@/server/db";
import { likes } from "@/server/schema";
import { eq } from "drizzle-orm";

export type RactionType = "like" | "dislike";

export const reactions = async (userId: number, reacton: RactionType) => {
  const users = await auth();
  const email = users?.user?.email as string;
  const name = users?.user?.name as string;
  const image = users?.user?.image as string;

  if (!users) {
    return {
      message: `Please Login First`,
      success: true,
    };
  }

  try {
    if (reacton === "dislike") {
      const react = await db
        .delete(likes)
        .where(eq(likes.likesId, userId))
        .returning();

      return {
        message: "succesfully likes",
        success: false,
        react: react[0],
      };
    }

    if (reacton === "like") {
      const react = await db
        .insert(likes)
        .values({ name, email, image, likesId: userId })
        .returning();
      return {
        message: "succesfully likes",
        success: false,
        react: react[0],
      };
    }
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice",
      success: true,
      error,
    };
  }
};
