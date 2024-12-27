import { z } from "zod";

import * as schema from "@/server/schema";
import {
  BuildQueryResult,
  DBQueryConfig,
  ExtractTablesWithRelations,
} from "drizzle-orm";

export const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(5, {
    message: "Content must be at least 2 characters.",
  }),
});
export const commentSchema = z.object({
  comment: z.string().min(5, {
    message: "Content must be at least 2 characters.",
  }),
  postId: z.number(),
});

export type FormSchemaType = z.infer<typeof formSchema>;
export type CommentSchema = z.infer<typeof commentSchema>;

// drizzle types

type Schema = typeof schema;
type TSchema = ExtractTablesWithRelations<Schema>;

export type IncludeRelation<TableName extends keyof TSchema> = DBQueryConfig<
  "one" | "many",
  boolean,
  TSchema,
  TSchema[TableName]
>["with"];

export type InferResultType<
  TableName extends keyof TSchema,
  With extends IncludeRelation<TableName> | undefined = undefined
> = BuildQueryResult<
  TSchema,
  TSchema[TableName],
  {
    with: With;
  }
>;

export type PostWithCommentsLikes = InferResultType<
  "posts",
  {
    comments: true;
    likes: true;
  }
>;
