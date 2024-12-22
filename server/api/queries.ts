"use client";

import { useQuery } from "@tanstack/react-query";
import { PostsType } from "../schema";
import { getPost } from ".";

export const usePost = () => {
  const { data, status } = useQuery<PostsType[]>({
    queryKey: ["posts"],
    queryFn: getPost,
    staleTime: 1000 * 60 * 120,
  });
  return {
    data,
    status,
  };
};
