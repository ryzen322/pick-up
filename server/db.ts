import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

import * as schema from "./schema";

config({ path: ".env.local" }); // or .env.local

const sql = neon(process.env.POSTGRESQL_URL!);
export const db = drizzle(sql, { schema, logger: true });

export type DB = typeof db;

// const seedData = async () => {
//   if (process.env.DB_SEEDING === "development") {
//     // await seed(db, schema, { count: 10 });
//     console.log("development");
//   }
//   if (process.env.DB_SEEDING === "production") {
//     // await seed(db, schema, { count: 100 });
//     console.log("production");
//   }
// };

// seedData();
