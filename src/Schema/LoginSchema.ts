import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "password must be at least 8 characters"),
});

export default LoginSchema;
