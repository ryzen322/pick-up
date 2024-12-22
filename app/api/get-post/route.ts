import { db } from "@/server/db";

export async function GET() {
  try {
    const posts = await db.query.posts.findMany({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });

    return Response.json(posts);
  } catch (error) {
    return Response.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
