"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "@/app/SessionProvider";
import { commentSchema, CommentSchema } from "@/types";
import { Input } from "../ui/input";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { useCommentMutation } from "@/actions/mutation/useCommentMutation";

interface CommentsFormProps extends React.ComponentProps<"form"> {
  className?: string;
  name: string;
  postId: number;
}

export function CommentsForm({
  className,
  name: PostName,
  postId,
}: CommentsFormProps) {
  const { image, name } = useSession();
  const mutation = useCommentMutation();
  const form = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
      postId: postId,
    },
  });

  async function onSubmit() {
    mutation.mutate(form.getValues());
  }

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="stone"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke=""
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );

  return (
    <Form {...form}>
      <form
        className={cn("grid items-start gap-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className=" flex gap-2">
          <div className=" h-9 w-9 rounded-full shrink-0 flex items-center justify-center overflow-hidden">
            {image ? (
              <Avatar>
                <AvatarImage src={image} />
                <AvatarFallback>{svg}</AvatarFallback>
              </Avatar>
            ) : (
              svg
            )}
          </div>

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className=" my-0 flex-1">
                <FormLabel className=" text-base ">
                  {name ? name : "Anonymous"}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={`Reply to ${PostName} Post`}
                    {...field}
                    className=" px-0 focus-visible:ring-transparent outline-none focus-visible:ring-white  border relative  border-white placeholder:text-base "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Comment</Button>
      </form>
    </Form>
  );
}
