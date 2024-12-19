"use server";

import { auth } from "@/auth";
import { db } from "@/server/db";
import { likes } from "@/server/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

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
    };
  }
  try {
    if (like) {
      await db.delete(likes).where(eq(likes.email, email));
      revalidatePath("/");
      return {
        message: "succesfully unlike",
      };
    }
    const added = await db
      .insert(likes)
      .values({ name, email, image, likesId: userId })
      .returning();
    revalidatePath("/");
    return {
      message: "succesfully likes",
      added,
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice",
      error,
    };
  }
};
