import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost } from "../like-post";
import { LikesType } from "@/server/schema";

export function useLikeMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: likePost,
    onSuccess: async (likes) => {
      const userId = likes.like?.likesId as number;
      const quefilter = ["likes", userId];

      await queryClient.cancelQueries({ queryKey: quefilter });

      queryClient.setQueryData(quefilter, (old: LikesType[]) => {
        return [...old, likes.like];
      });

      queryClient.invalidateQueries({ queryKey: quefilter });
    },
  });

  return mutation;
}
