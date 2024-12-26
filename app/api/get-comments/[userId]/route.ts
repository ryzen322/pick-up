import { comments } from "@/server/queries";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const userId = (await params).userId;
  try {
    const comment = await comments(Number(userId));

    if (comment.length === 0) {
      return NextResponse.json([]);
    }

    return NextResponse.json(comment);
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
