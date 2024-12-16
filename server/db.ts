import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

import * as schema from "./schema";

config({ path: ".env.local" }); // or .env.local

const sql = neon(process.env.POSTGRESQL_URL!);
export const db = drizzle(sql, { schema, logger: true });