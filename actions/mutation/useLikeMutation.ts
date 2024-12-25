import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LikesType } from "@/server/schema";
import { reactions } from "../reactions";

export function useLikeMutation(
  userId: number,
  reaction: "like" | "dislike",
  isliked?: number
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => reactions(userId, reaction, isliked),
    onSuccess: async (likes) => {
      const userId = likes?.react?.likesId as number;
      const quefilter = ["likes", userId];

      await queryClient.cancelQueries({ queryKey: quefilter });

      queryClient.setQueryData(quefilter, (old: LikesType[]) => {
        if (reaction === "like") {
          return [...old, likes?.react];
        }
        if (reaction === "dislike") {
          return old.filter((like) => like.id !== isliked);
        }
      });

      queryClient.invalidateQueries({ queryKey: quefilter });
    },
  });

  return mutation;
}
