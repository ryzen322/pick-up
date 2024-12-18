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
import { createPost } from "@/actions/create-post";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

function PostForm({ className }: React.ComponentProps<"form">) {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit() {
    try {
      const post = await createPost(form.getValues());
      if (post.succes) {
        toast(`${post.message}`, {
          description: `title: ${post.title}`,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });

        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-4", className)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={"default"}>
          Save changes
        </Button>
      </form>
    </Form>
  );
}

export default PostForm;
