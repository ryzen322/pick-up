"use client";

import { useQuery } from "@tanstack/react-query";
import { LikesType, PostsType } from "../schema";
import {
  deletePost,
  getComments,
  getLikes,
  getPost,
  getPostById,
  getRetweet,
  getUser,
} from ".";
import { PostWithCommentsLikes } from "@/types";

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

export const useRetweet = (userId: number) => {
  const { data, status } = useQuery<LikesType[]>({
    queryKey: ["retweet", userId],
    queryFn: () => getRetweet(userId),
    staleTime: 1000 * 60 * 120,
  });
  return {
    data,
    status,
  };
};

export const usePostById = (postId: number) => {
  const { data, status } = useQuery<PostWithCommentsLikes>({
    queryKey: ["post", postId],
    queryFn: () => getPostById(postId),
    staleTime: 1000 * 60 * 120,
  });
  return {
    data,
    status,
  };
};

export const useGetUser = (email: string) => {
  const { data, status } = useQuery<PostWithCommentsLikes>({
    queryKey: ["post", email],
    queryFn: () => getUser(email),
    staleTime: 1000 * 60 * 120,
  });
  return {
    data,
    status,
  };
};

export const useDeletePost = (userId: number) => {
  const { data, status } = useQuery<PostsType>({
    queryKey: ["post", userId],
    queryFn: () => deletePost(userId),
  });
  return {
    data,
    status,
  };
};
