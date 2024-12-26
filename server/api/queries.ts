"use client";

import { useQuery } from "@tanstack/react-query";
import { LikesType, PostsType } from "../schema";
import { getComments, getLikes, getPost } from ".";

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

export const useLikes = (userId: number) => {
  const { data, status } = useQuery<LikesType[]>({
    queryKey: ["likes", userId],
    queryFn: () => getLikes(userId),
    staleTime: 1000 * 60 * 120,
  });
  return {
    data,
    status,
  };
};

export const useComments = (userId: number) => {
  const { data, status } = useQuery<LikesType[]>({
    queryKey: ["comments", userId],
    queryFn: () => getComments(userId),
    staleTime: 1000 * 60 * 120,
  });
  return {
    data,
    status,
  };
};
