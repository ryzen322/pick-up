import { db } from "@/server/db";

export async function GET() {
  try {
    const following = await db.query.following.findMany({
      where: (following, { eq }) =>
        eq(following.myEmail, "guanzontrish@gmail.com"),
    });

    const posts = following.map(async (item) => {
      return await db.query.posts.findMany({
        where: (posts, { eq }) => eq(posts.email, item.email!),
      });
    });

    return Response.json(posts);
  } catch (error) {
    return Response.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
