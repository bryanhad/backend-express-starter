import { z } from "zod";

const envSchema = z.object({
   NODE_ENV: z.string().default("development"),
   PORT: z.coerce.number().default(3001),
   DB_FILE_NAME: z
      .string()
      .default("sqlite.db") // default db file name
      .transform((fileName) => `data/${fileName}`),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
   console.error("❌ Invalid environment variables:", parsedEnv.error);
   process.exit(1);
}

export const env = parsedEnv.data;
