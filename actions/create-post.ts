"use server";

import { auth } from "@/auth";
import { db } from "@/server/db";
import { posts } from "@/server/schema";
import { formSchema, FormSchemaType } from "@/types";

export const createPost = async (post: FormSchemaType) => {
  const users = await auth();
  const email = users?.user?.email as string;
  const name = users?.user?.name as string;
  const image = users?.user?.image as string;

  if (!users) {
    return {
      message: `Please Login First`,
    };
  }

  const postFormValidation = formSchema.safeParse(post);
  if (!postFormValidation.success) {
    return {
      message: `Invalid Input `,
    };
  }

  try {
    const { content, title } = postFormValidation.data;

    const post = await db
      .insert(posts)
      .values({ name, content, title, email, image })
      .returning();

    return {
      message: "Post Created Successfully",
      post: post[0],
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice",
      succes: postFormValidation.error,
      error,
    };
  }
};
