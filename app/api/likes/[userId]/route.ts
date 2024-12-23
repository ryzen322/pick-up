import { getCascheLikes } from "@/server/queries";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = (await params).userId as string;
  try {
    const likes = await getCascheLikes(Number(userId));

    if (likes.length === 0) {
      return Response.json([]);
    }

    return Response.json(likes);
  } catch (error) {
    return Response.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
