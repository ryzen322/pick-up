import Svg from "../svg/svg";
import { ButtonForm } from "./ButtonForm";
import { useLikes } from "@/server/api/queries";
import { useSession } from "@/app/SessionProvider";
import { isLiked } from "@/hooks/isLiked";
import { useLikeMutation } from "@/actions/mutation/useLikeMutation";
import { redirect } from "next/navigation";
import AnimatedCounter from "../ui/animate-number";

const Likes = ({ userId }: { userId: number }) => {
  const user = useSession();
  const { data } = useLikes(userId);
  const like = data?.map((item) => item.email);
  const liked = isLiked(like, user.email);
  const isliked = data?.find((item) => item.email === user.email)?.id;
  const mutation = useLikeMutation(userId, liked ? "dislike" : "like", isliked);

  const onSumbit = async () => {
    if (Object.keys(user).length === 0) {
      redirect("api/auth/signin");
    }
    mutation.mutate();
  };

  const totalLikes = data?.length ? data.length : 0;

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
      <p className="text-xs items-center relative text-black/80  font-mono">
        <AnimatedCounter from={totalLikes} to={totalLikes} />
      </p>
    </ButtonForm>
  );
};

export default Likes;
