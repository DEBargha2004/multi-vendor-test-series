import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 30,
  min: 5,
  idleTimeoutMillis: 30000,
});

export const db = drizzle({ client: pool });
