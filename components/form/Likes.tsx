import Svg from "../svg/svg";
import { ButtonForm } from "./ButtonForm";
import { useLikes } from "@/server/api/queries";
import { useSession } from "@/app/SessionProvider";
import { isLiked } from "@/hooks/isLiked";
import { useLikeMutation } from "@/actions/mutation/useLikeMutation";
import { redirect } from "next/navigation";

const Likes = ({ userId }: { userId: number }) => {
  const mutation = useLikeMutation();
  const user = useSession();
  const { data, status } = useLikes(userId);
  console.log(data);
  const like = data?.map((item) => item.email);
  const liked = isLiked(like, user.email);
  // const likes = data?.find((item) => item.email);

  // console.log(likes);

  if (status === "pending") {
    return <p className=" mx-auto animate-spin">Loading</p>;
  }

  // const users = await auth();
  // const email = users?.user?.email as string;
  // const data = await getCascheLikes(userId);
  // const isLike = like.includes(email);

  // const updatePostLikes = likePost.bind(null, userId);

  const onSumbit = async () => {
    // "use server";
    // if (liked) {
    //   await unlikePost(liked.id);
    // }
    // if (liked === undefined) {
    //   await updatePostLikes();
    // }
    if (Object.keys(user).length === 0) {
      redirect("api/auth/signin");
    }
    mutation.mutate(userId);
  };

  return (
    <ButtonForm
      type="submit"
      className=" h-8 rounded-lg text-white font-medium text-center flex items-center gap-1"
      onClick={onSumbit}
    >
      <Svg
        size="size-5"
        icon="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        fill={`${liked ? "#fa383e" : ""}`}
      />
      <p className="text-xs items-center relative text-black/80">
        {data?.length}
      </p>
    </ButtonForm>
  );
};

export default Likes;
