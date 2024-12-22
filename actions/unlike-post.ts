"use server";

import { auth } from "@/auth";
import { db } from "@/server/db";
import { likes } from "@/server/schema";
import { eq } from "drizzle-orm";

import { revalidatePath } from "next/cache";

export const unlikePost = async (userId: number) => {
  const users = await auth();

  if (!users) {
    return {
      message: `Please Login First`,
      success: true,
    };
  }
  try {
    await db.delete(likes).where(eq(likes.id, userId));
    revalidatePath("/");
    return {
      message: "succesfully unlike",
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
