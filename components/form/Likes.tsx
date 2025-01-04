import { useLikes } from "@/server/api/queries";
import { useSession } from "@/app/SessionProvider";
import { isExistTheUser } from "@/hooks/isLiked";
import { useLikeMutation } from "@/actions/mutation/useLikeMutation";
import { redirect } from "next/navigation";
import AnimatedCounter from "../ui/animate-number";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

const Likes = ({ userId }: { userId: number }) => {
  const user = useSession();
  const { data } = useLikes(userId);
  const like = data?.map((item) => item.email);
  const liked = isExistTheUser(like, user.email);
  const isliked = data?.find((item) => item.email === user.email)?.id;
  const mutation = useLikeMutation(userId, liked ? "dislike" : "like", isliked);

  const onSumbit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (Object.keys(user).length === 0) {
      redirect("api/auth/signin");
    }
    mutation.mutate();
  };

  const totalLikes = data?.length ? data.length : 0;

  return (
    <Button
      type="submit"
      variant={"ghost"}
      className=" flex items-center gap-1 cursor-pointer text-left group h-7"
      onClick={onSumbit}
    >
      <Heart
        size={18}
        fill={`${liked ? "#fa383e" : "white"}`}
        stroke={`${liked ? "" : "black"}`}
        strokeWidth={1.8}
      />
      <p className="text-xs items-center relative text-black/80  font-mono  group-hover:no-underline">
        <AnimatedCounter from={totalLikes} to={totalLikes} />
      </p>
    </Button>
  );
};

export default Likes;
