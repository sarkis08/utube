import "dotenv/config";
import { defineConfig } from 'drizzle-kit';

// If you are using env.local as an environment
// dotenv.config({ path: ".env.local" });

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
