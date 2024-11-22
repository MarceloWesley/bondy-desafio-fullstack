import { z } from "zod";

export const loginUsersSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .regex(
      /^(?!\d+)([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)@([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)$/,
      {
        message: "Invalid email",
      },
    ),

  password: z.string().min(5, "Password must be at least 8 characters long"),
});
