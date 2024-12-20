"use server";

import { auth } from "@/auth";
import { db } from "@/server/db";
import { likes } from "@/server/schema";

import { eq } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";

export const likePost = async (userId: number, like: boolean) => {
  const users = await auth();
  const email = users?.user?.email as string;
  const name = users?.user?.name as string;
  const image = users?.user?.image as string;

  console.log(email, name, image);
  console.log(userId);

  if (!users) {
    return {
      message: `Please Login First`,
      success: true,
    };
  }
  try {
    if (like) {
      await db.delete(likes).where(eq(likes.email, email));
      revalidatePath("/");
      return {
        message: "succesfully unlike",
        success: false,
      };
    }
    await db
      .insert(likes)
      .values({ name, email, image, likesId: userId })
      .returning();
    revalidateTag("likes");
    return {
      message: "succesfully likes",
      success: false,
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice",
      success: true,
      error,
    };
  }
};
