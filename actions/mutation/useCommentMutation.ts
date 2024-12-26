import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../create-comment";
import { CommentsType } from "@/server/schema";

export const useCommentMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createComment,
    onSuccess: async (comment) => {
      const userId = comment.comment?.CommentsId as number;
      const quefilter = ["comments", userId];

      await queryClient.cancelQueries({ queryKey: quefilter });

      queryClient.setQueryData(quefilter, (old: CommentsType[]) => {
        return [...old, comment.comment];
      });

      queryClient.invalidateQueries({ queryKey: quefilter });
    },
  });

  return mutation;
};
