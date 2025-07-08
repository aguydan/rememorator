import "dotenv/config";
import prisma from "@/shared/lib/prisma";
import Google from "@auth/core/providers/google";
import Yandex from "@auth/core/providers/yandex";
import Resend from "@auth/core/providers/resend";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { defineConfig } from "auth-astro";

export default defineConfig({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      apiKey: import.meta.env.AUTH_RESEND_KEY,
      from: "rememorator@gmail.com",
    }),
    Google({
      clientId: import.meta.env.AUTH_GOOGLE_ID,
      clientSecret: import.meta.env.AUTH_GOOGLE_SECRET,
    }),
    Yandex({
      clientId: import.meta.env.AUTH_YANDEX_ID,
      clientSecret: import.meta.env.AUTH_YANDEX_SECRET,
    }),
  ],
});
