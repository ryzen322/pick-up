"use server";

import { auth } from "@/auth";
import { db } from "@/server/db";
import { likes } from "@/server/schema";

export const likePost = async (userId: number) => {
  const users = await auth();
  const email = users?.user?.email as string;
  const name = users?.user?.name as string;
  const image = users?.user?.image as string;

  console.log("clicked");

  if (!users) {
    return {
      message: `Please Login First`,
      success: true,
    };
  }
  try {
    const like = await db
      .insert(likes)
      .values({ name, email, image, likesId: userId })
      .returning();
    return {
      message: "succesfully likes",
      success: false,
      like: like[0],
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice",
      success: true,
      error,
    };
  }
};
