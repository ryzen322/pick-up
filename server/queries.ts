import { unstable_cache } from "next/cache";
import { db } from "./db";
import { comments } from "./schema";
import { count, eq } from "drizzle-orm";

export const getCachedPosts = unstable_cache(
  async () => {
    return await db.query.posts.findMany({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  },
  ["posts"],
  { revalidate: 3600 * 60, tags: ["posts"] }
);

export const getCascheLikes = unstable_cache(
  async (userId: number) => {
    return await db.query.likes.findMany({
      where: (likes, { eq }) => eq(likes.likesId, userId),
    });
  },
  [`likes`],
  { revalidate: 3600 * 60, tags: ["likes"] }
);

export const getCacheComments = unstable_cache(
  async (userId: number) => {
    const [{ count: total }] = await db
      .select({ count: count() })
      .from(comments)
      .where(eq(comments.CommentsId, userId));
    return total;
  },
  ["comments"],
  { revalidate: 3600 * 60, tags: ["comments"] }
);
