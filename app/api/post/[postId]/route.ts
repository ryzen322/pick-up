import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  const postId = (await params).postId;

  try {
    const post = await db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, Number(postId)),
      with: {
        comments: {
          orderBy: (posts, { desc }) => [desc(posts.createdAt)],
        },
        likes: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
