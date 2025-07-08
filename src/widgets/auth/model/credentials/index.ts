import { z } from "astro:schema";

export const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
