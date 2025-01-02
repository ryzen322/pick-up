import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LikesType, RetweetType } from "@/server/schema";
import { RactionType, reactions } from "../reactions";

export function useLikeMutation(
  userId: number,
  reaction: RactionType,
  isliked?: number
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => reactions(userId, reaction, isliked),
    onSuccess: async (likes) => {
      if (likes?.revalidateQuery === "likes") {
        const userId = likes?.reactonId;
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
      }

      if (likes?.revalidateQuery === "retweet") {
        const userId = likes?.reactonId;
        const quefilter = ["retweet", userId];

        await queryClient.cancelQueries({ queryKey: quefilter });

        queryClient.setQueryData(quefilter, (old: RetweetType[]) => {
          if (reaction === "retweets") {
            return [...old, likes?.react];
          }
          if (reaction === "unretweets") {
            return old.filter((like) => like.id !== isliked);
          }
        });

        queryClient.invalidateQueries({ queryKey: quefilter });
      }
    },
  });

  return mutation;
}
