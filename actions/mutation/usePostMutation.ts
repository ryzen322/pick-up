import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../create-post";
import { PostsType } from "@/server/schema";
import { toast } from "sonner";

export function usePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: async (post) => {
      const quefilter = { queryKey: ["posts"] };

      await queryClient.cancelQueries(quefilter);

      queryClient.setQueriesData(quefilter, (old: PostsType[]) => {
        if (!old) return [];
        return [...old, post.post];
      });

      queryClient.invalidateQueries(quefilter);

      toast(`${post.message}`, {
        description: `title: ${post.post?.title}`,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    },
  });

  return mutation;
}
