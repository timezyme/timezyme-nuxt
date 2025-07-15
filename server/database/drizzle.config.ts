import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/database/schema/index.ts",
  out: "./server/database/migrations",
  dbCredentials: {
    // eslint-disable-next-line node/no-process-env
    url: process.env.NUXT_DATABASE_URL!,
  },
});
