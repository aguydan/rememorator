import prisma from "@/shared/lib/prisma";
import Google from "@auth/core/providers/google";
import MailGun from "@auth/core/providers/mailgun";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { defineConfig } from "auth-astro";

export default defineConfig({
  adapter: PrismaAdapter(prisma),
  providers: [
    MailGun,
    Google({
      clientId: import.meta.env.AUTH_GOOGLE_ID,
      clientSecret: import.meta.env.AUTH_GOOGLE_SECRET,
    }),
  ],
});
