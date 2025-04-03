import { z } from "zod";

const userSchema = z.object({
  firstname: z.string().min(4, "Name must be at least three characters"),
  lastname: z.string().min(4, "Name must be at least three characters"),
  email: z.string().email("Invalid email"),
  occupation: z.string().min(4, "Occupation is required"),
  password: z.string().min(8, "password must be at least 8 characters"),
});

export default userSchema;
