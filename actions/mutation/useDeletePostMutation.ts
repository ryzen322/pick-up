import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../delete-post";
import { PostsType } from "@/server/schema";
import { toast } from "sonner";

export function useDeletePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePost,
    onSuccess: async (post) => {
      const userId = post.deletedPost?.id;
      const quefilter = { queryKey: ["posts"] };

      await queryClient.cancelQueries(quefilter);

      queryClient.setQueriesData(quefilter, (old: PostsType[]) => {
        return old.filter((posts) => {
          return posts.id !== userId;
        });
      });

      queryClient.invalidateQueries(quefilter);

      toast(`${"Successfully Delete"}`, {
        description: `title: ${post.deletedPost?.title}`,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    },
  });

  return mutation;
}
