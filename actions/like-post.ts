"use server";

import { auth } from "@/auth";

export const likePost = async (userId: number) => {
  const users = await auth();
  const email = users?.user?.email as string;
  const name = users?.user?.name as string;
  const image = users?.user?.image as string;

  console.log(email, name, image);

  if (!users) {
    return {
      message: `Please Login First`,
    };
  }

  console.log(userId);
};
