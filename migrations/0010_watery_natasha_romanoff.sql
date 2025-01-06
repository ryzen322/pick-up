CREATE TYPE "public"."roles" AS ENUM('public', 'followers');--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "roles" "roles" DEFAULT 'public';