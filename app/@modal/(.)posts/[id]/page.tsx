import PostSingle from "@/components/PostSingle";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id;
  return <PostSingle postId={Number(postId)} />;
}
