CREATE TABLE "retweet" (
	"id" serial PRIMARY KEY NOT NULL,
	"retweetId" serial NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"image" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "retweet" ADD CONSTRAINT "retweet_retweetId_posts_id_fk" FOREIGN KEY ("retweetId") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;