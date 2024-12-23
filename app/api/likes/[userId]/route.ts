import { getCascheLikes } from "@/server/queries";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const userId = (await params).userId;

  try {
    const likes = await getCascheLikes(Number(userId));

    return NextResponse.json(likes);
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
