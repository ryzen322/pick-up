import { unstable_cache } from "next/cache";
import { db } from "./db";
import { comments } from "./schema";
import { count, eq } from "drizzle-orm";

export const getLikes = async (userId: number) => {
  return await db.query.likes.findMany({
    where: (likes, { eq }) => eq(likes.likesId, userId),
  });
};

export const getCacheComments = unstable_cache(async (userId: number) => {
  const [{ count: total }] = await db
    .select({ count: count() })
    .from(comments)
    .where(eq(comments.CommentsId, userId));
  return total;
});
