import PagePost from "@/components/PagePost";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id;
  console.log(postId);
  return <PagePost id={postId} />;
}
