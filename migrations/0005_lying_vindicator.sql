CREATE TABLE "likes" (
	"id" serial PRIMARY KEY NOT NULL,
	"likesId" serial NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "likes_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "likes" ADD CONSTRAINT "likes_likesId_posts_id_fk" FOREIGN KEY ("likesId") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;