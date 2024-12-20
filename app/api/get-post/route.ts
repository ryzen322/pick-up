import { auth } from "@/auth";
import { db } from "@/server/db";

export async function GET() {
  try {
    const user = await auth();

    if (!user) {
      return Response.json({ error: "Unauthorized" }), { status: 401 };
    }

    const posts = await db.query.posts.findMany({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });

    return Response.json(posts);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
