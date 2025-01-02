import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const userId = (await params).userId;

  try {
    const retweet = await db.query.retweet.findMany({
      where: (retweet, { eq }) => eq(retweet.retweetId, Number(userId)),
    });
    if (retweet.length <= 0) {
      return NextResponse.json([]);
    }
    return NextResponse.json(retweet);
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
