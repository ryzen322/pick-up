CREATE TABLE "comment" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"comment" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now(),
	"author_id" integer
);
--> statement-breakpoint
CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text,
	"title" text,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "comment" ADD CONSTRAINT "comment_id_posts_id_fk" FOREIGN KEY ("id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;