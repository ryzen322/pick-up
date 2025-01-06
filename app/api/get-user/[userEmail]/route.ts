import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userEmail: string }> }
) {
  const userEmail = (await params).userEmail;

  try {
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, userEmail),
    });

    if (!user) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
