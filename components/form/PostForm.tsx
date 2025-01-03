"use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
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
import { formSchema, FormSchemaType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { usePostMutation } from "@/actions/mutation/usePostMutation";
import { useSession } from "@/app/SessionProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function PostForm({ className }: React.ComponentProps<"form">) {
  const { image, name } = useSession();
  const mutation = usePostMutation();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
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
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-4 mt-2", className)}
      >
        <div className=" flex gap-3">
          <div className=" flex flex-col items-center gap-1">
            <div className=" h-8 w-8 bg-stone-400/85 ring-2 ring-stone-400 rounded-full shrink-0 flex justify-center items-center overflow-hidden cursor-pointer">
              {image ? (
                <Avatar>
                  <AvatarImage src={image} />
                  <AvatarFallback>{svg}</AvatarFallback>
                </Avatar>
              ) : (
                svg
              )}
            </div>
            <div className=" h-[80px] w-[2.5px] bg-stone-400/85 "></div>

            <div className=" h-4 w-4 bg-stone-400/85  rounded-full shrink-0"></div>
          </div>
          <div className=" flex-1 flex-col">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className=" space-y-1">
                  <FormLabel className=" text-base">
                    {name ? name : "Anonymous"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What's new?"
                      {...field}
                      className=" px-0 focus-visible:ring-transparent outline-none focus-visible:ring-white  border relative  border-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className=" mt-2">
                  <FormLabel className=" text-base">Threads</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none focus-visible:ring-transparent  border border-white "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=" mt-2 flex justify-between items-center pr-4">
              <p className=" text-xs text-stone-400 font-medium">
                Your followers can reply & quote
              </p>
              <Button type="submit" variant={"default"}>
                Post
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default PostForm;
