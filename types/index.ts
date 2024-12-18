import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(5, {
    message: "Content must be at least 2 characters.",
  }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
