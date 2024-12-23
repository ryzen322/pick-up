import { getCascheLikes } from "@/server/queries";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const userId = (await params).userId; // 'a', 'b', or 'c'

  try {
    if (userId) {
      const likes = await getCascheLikes(Number(userId));
      if (likes.length === 0) {
        return NextResponse.json([]);
      }
      return NextResponse.json(likes);
    }
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
