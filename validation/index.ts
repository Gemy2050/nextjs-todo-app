import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "title must be at least 2 characters." })
    .max(50, {
      message: "title must not be no longer than 50 characters",
    }),
  body: z
    .string()
    .max(200, {
      message: "body must not be no longer than 200 characters",
    })
    .optional(),
  completed: z.boolean(),
});

export type FormSchemaType = z.infer<typeof formSchema>;
