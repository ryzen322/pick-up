ALTER TABLE "comment" DROP CONSTRAINT "comment_id_posts_id_fk";
--> statement-breakpoint
ALTER TABLE "comment" ADD COLUMN "CommentsId" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "comment" ADD CONSTRAINT "comment_CommentsId_posts_id_fk" FOREIGN KEY ("CommentsId") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;