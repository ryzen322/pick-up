import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  serial,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";
import { relations } from "drizzle-orm";

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const posts = pgTable("posts", {
  id: serial("id").primaryKey().notNull(),
  content: text("content"),
  title: text("title"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  image: text("image"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const comments = pgTable("comment", {
  id: serial("id").primaryKey().notNull(),
  CommentsId: serial("CommentsId")
    .references(() => posts.id, { onDelete: "cascade" }) // Foreign key reference to `tweet` table's `id`
    .notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  comment: text("comment").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const likes = pgTable("likes", {
  id: serial("id").primaryKey().notNull(),
  likesId: serial("likesId")
    .references(() => posts.id, { onDelete: "cascade" }) // Foreign key reference to `tweet` table's `id`
    .notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  image: text("image").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const postRelations = relations(posts, ({ many }) => ({
  comments: many(comments),
  likes: many(likes),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  author: one(posts, {
    fields: [comments.CommentsId],
    references: [posts.id],
  }),
}));
export const likesRelations = relations(likes, ({ one }) => ({
  author: one(posts, {
    fields: [likes.likesId],
    references: [posts.id],
  }),
}));

export type InsterPost = typeof posts.$inferInsert;
export type PostsType = typeof posts.$inferSelect;
export type LikesType = typeof likes.$inferSelect;
export type CommentsType = typeof comments.$inferSelect;
export type insertComment = typeof users.$inferSelect;
