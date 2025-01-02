"use server";
import { auth } from "@/auth";
import { db } from "@/server/db";
import { likes, retweet } from "@/server/schema";
import { eq } from "drizzle-orm";

export type RactionType = "like" | "dislike" | "retweets" | "unretweets";

export const reactions = async (
  userId: number,
  reacton: RactionType,
  isliked?: number
) => {
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
    if (reacton === "dislike" && isliked) {
      const react = await db
        .delete(likes)
        .where(eq(likes.id, isliked))
        .returning();

      return {
        message: "succesfully likes",
        success: false,
        react: react[0],
        reactonId: react[0].likesId,
        revalidateQuery: "likes",
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
        reactonId: react[0].likesId,
        revalidateQuery: "likes",
      };
    }

    if (reacton === "unretweets" && isliked) {
      const react = await db
        .delete(retweet)
        .where(eq(retweet.id, isliked))
        .returning();
      return {
        message: "succesfully unretweet",
        success: false,
        react: react[0],
        reactonId: react[0].retweetId,
        revalidateQuery: "retweet",
      };
    }
    if (reacton === "retweets") {
      const react = await db
        .insert(retweet)
        .values({ name, email, image, retweetId: userId })
        .returning();
      return {
        message: "succesfully retweet",
        success: false,
        react: react[0],
        reactonId: react[0].retweetId,
        revalidateQuery: "retweet",
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
