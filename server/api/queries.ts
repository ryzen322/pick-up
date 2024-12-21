"use client";

import { useQuery } from "@tanstack/react-query";
import { PostsType } from "../schema";
import { getPost } from ".";

export const usePost = () => {
  const { data, status } = useQuery<PostsType[]>({
    queryKey: ["posts", "following"],
    queryFn: getPost,
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
  });
  return {
    data,
    status,
  };
};
