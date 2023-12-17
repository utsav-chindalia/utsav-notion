import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotevn from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
dotevn.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("Cannot find database url");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });
const migrateDB = async () => {
  try {
    console.log("Migrating Client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("Successfully Migrated");
  } catch (error) {
    console.log("Error Migrating Client");
  }
};
// migrateDB();
export default db;
