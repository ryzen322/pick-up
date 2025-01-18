import { db } from "@/server/db";
import { posts } from "@/server/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const userId = (await params).userId;

  try {
    const like = await db
      .delete(posts)
      .where(eq(posts.id, Number(userId)))
      .returning();

    return NextResponse.json(like[0]);
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
