"use client";

import { useQuery } from "@tanstack/react-query";
import { PostsType } from "../schema";
import { getPost } from ".";

export const usePost = () => {
  const { data, status } = useQuery<PostsType[]>({
    queryKey: ["posts", "following"],
    queryFn: getPost,
    staleTime: 800 * (60 * 1000), // 10 mins
  });
  return {
    data,
    status,
  };
};
