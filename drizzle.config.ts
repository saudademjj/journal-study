import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv';

// 确保加载 .env 文件
dotenv.config();

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
